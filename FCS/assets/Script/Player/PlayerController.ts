import { KeyboardControls } from "./KeyboardControls";
import { IInputControls } from "./IInputControls";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property(cc.Animation)
    anim: cc.Animation = null;

    @property
    speed: number = 200;
    
    @property(cc.Prefab)
    doughPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    flatbreadPrefa: cc.Prefab = null;

    @property(cc.Node)
    chopBar: cc.Node = null;


    private input: IInputControls = null;
    private currentAnim: string = "";
    private lastDir: cc.Vec2 = cc.v2(0, -1); // 預設向下（前）
    private rb: cc.RigidBody = null;

    // 麵團
    private canPickDough: boolean = false;
    private canDropDough: boolean = false;
    private carriedDough: cc.Node = null;
    private currentDropTarget: cc.Node = null;
    private currentDropTag: number = null; 
    private isChopping: boolean = false;
    private chopProgress: number = 0;
    private chopFill: cc.Node = null;


    start() {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }

        this.rb = this.getComponent(cc.RigidBody);
        if (!this.rb) {
            cc.error("❌ 找不到 RigidBody2D 組件！");
            return;
        }

        this.playAnim("girl_idle_back");
        this.input = new KeyboardControls();

        this.chopFill = this.chopBar.getChildByName("Fillbar");
        if (!this.chopFill) {
            cc.error("❌ 找不到 Fillbar！");
        }
        this.chopBar.active = false; // 預設不顯示
    }

    update(dt: number) {
        const dir = this.input.getMoveDirection();

        if (!dir.equals(cc.Vec2.ZERO)) {
            // 使用物理引擎的 linearVelocity 控制移動
            this.rb.linearVelocity = dir.clone().normalize().mul(this.speed);
            this.lastDir = dir.clone();

            // 動畫切換（與方向判斷無變）
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim("girl_walk_back");
                } else {
                    this.playAnim("girl_idle_walk");
                }
                this.node.scaleX = 1;
            } else {
                if (dir.x > 0) {
                    this.playAnim("girl_walk_right");
                    this.node.scaleX = 1;
                } else {
                    this.playAnim("girl_walk_left");
                    this.node.scaleX = 1;
                }
            }
        } else {
            // 停止移動（速度歸零）
            this.rb.linearVelocity = cc.v2(0, 0);

            // 播放靜止動畫
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "girl_idle_back" : "girl_idle");
            } else {
                this.playAnim(this.lastDir.x > 0 ? "girl_idle_right" : "girl_idle_left");
            }
            this.node.scaleX = 1;
        }

        if (this.input.getInteractPressed()) {
            this.tryInteract();
        }

        if (this.input.getChopPressed() && this.canDropDough && this.carriedDough == null && !this.isChopping) {
            this.startChopping();
        }

    if (this.isChopping) {
        if (this.input.getChopPressed()) {
            this.chopProgress += dt;
            const progressRatio = Math.min(this.chopProgress / 2, 1);
            this.chopFill.scaleX = progressRatio;

            if (this.chopProgress >= 2) {
                this.finishChopping();
            }
        } else {
            this.cancelChopping();  // 玩家放開空白鍵，中斷切麵
        }
    }



    }

    cancelChopping() {
        this.isChopping = false;
        this.chopBar.active = false;
        this.chopProgress = 0;
        this.chopFill.scaleX = 0;
        console.log("🛑 玩家放開空白鍵，中斷切麵！");
    }

    startChopping() {
        if (!this.currentDropTarget) {
            cc.warn("⚠️ 沒有對應的砧板！");
            return;
        }

        // ✅ 只檢查「目前站在的砧板」上是否有麵團（假設名稱含 "Dough"）
        const hasDough = this.currentDropTarget.children.some(child => child.name.includes("Dough"));
        if (!hasDough) {
            cc.warn("⚠️ 這個砧板上沒有麵團，不能切！");
            return;
        }

        this.isChopping = true;
        this.chopProgress = 0;

        this.chopBar.parent = this.node;
        this.chopBar.setPosition(cc.v2(0, 80));  // 顯示在角色頭上
        this.chopBar.active = true;
        this.chopFill.scaleX = 0;

        console.log("🔪 在正確砧板上開始切麵團！");
    }




    finishChopping() {
        this.isChopping = false;
        this.chopBar.active = false;

        if (!this.currentDropTarget) {
            cc.warn("⚠️ currentDropTarget 是 null，無法切麵團！");
            return;
        }

        for (const child of this.currentDropTarget.children) {
            if (child.name.includes("Dough")) {
                child.destroy();  // 只砍麵團，不碰麵餅
            }
        }


        const flatbread = cc.instantiate(this.flatbreadPrefa);
        this.currentDropTarget.addChild(flatbread);

        if (this.currentDropTag === 10) {
            flatbread.setPosition(cc.v3(-245, -290, 50));
        } else if (this.currentDropTag === 8) {
            flatbread.setPosition(cc.v3(-505, -290, 50));
        } else {
            flatbread.setPosition(cc.v3(0, 0)); // 預設中心
            cc.warn("❓ 未知砧板 Tag，麵餅放在中心");
        }
    }





    tryInteract() {
        if (this.canPickDough && !this.carriedDough) {
            const dough = cc.instantiate(this.doughPrefab);
            this.node.addChild(dough);
            dough.name = "Dough";
            dough.setPosition(cc.v2(0, 50));
            this.carriedDough = dough;
            console.log("🎒 拿起麵團");
        } else if (this.canDropDough && this.carriedDough && this.currentDropTag !== null) {
            this.carriedDough.parent = this.currentDropTarget;

            if (this.currentDropTag === 10) {
                this.carriedDough.setPosition(cc.v3(-245, -290, 50));
            } else if (this.currentDropTag === 8) {
                this.carriedDough.setPosition(cc.v3(-505, -290, 50));
            } else {
                console.warn("❓ 未知砧板 tag，無法放置");
            }

            this.carriedDough = null;
            console.log("✅ 放下麵團成功！");
        }
    }




    playAnim(name: string) {
        if (this.currentAnim === name) return;
        this.currentAnim = name;
        this.anim.play(name);
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = true;
            console.log("🍞 可以撿起麵團");
        } else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = true;
            this.currentDropTag = otherCollider.tag;  // 記住目前碰到哪個 tag
            this.currentDropTarget = otherCollider.node;
            console.log("🥣 接觸到砧板 Tag =", otherCollider.tag);
        }
    }



    onEndContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = false;
        } else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = false;
            //this.currentDropTag = null;  // 👈 清除記憶
        }
    }




}
