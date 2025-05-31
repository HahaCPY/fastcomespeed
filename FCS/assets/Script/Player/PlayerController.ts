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

    @property(cc.Prefab)
    cheesePrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gratedCheesePrefab: cc.Prefab = null;

    @property(cc.Prefab)
    ppPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    sliceppPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    mushroomPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    slicemushroomPrefab: cc.Prefab = null;



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

    // 起司
    private canPickCheese: boolean = false;

    private canPickPP: boolean = false; // tag 5 拿 pp 的 flag

    private canPickMushroom: boolean = false;


    
    private lastInteractTime: number = 0;
    private interactCooldown: number = 0.2; // 0.2 秒冷卻時間



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

        /*if (this.input.getInteractPressed()) {
            this.tryInteract();
        }*/

        if (this.input.getInteractPressed()) {
            const now = Date.now() / 1000;
            if (now - this.lastInteractTime > this.interactCooldown) {
                this.tryInteract();
                this.lastInteractTime = now;
            }
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

        const hasDough = this.currentDropTarget.children.some(child => child.name.includes("Dough"));
        const hasCheese = this.currentDropTarget.children.some(child => child.name.includes("Cheese"));
        const hasPP = this.currentDropTarget.children.some(child => child.name === "PP");
        const hasMushroom = this.currentDropTarget.children.some(child => child.name === "Mushroom");


        if (!hasDough && !hasCheese && !hasPP && !hasMushroom) {
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
        let isCheese = false;
        let isDough = false;
        let isPP = false;
        let isMushroom = false;


        for (const child of this.currentDropTarget.children) {
            if (child.name === "Dough") {
                child.destroy();
                isDough = true;
            } else if (child.name === "Cheese") {
                child.destroy();
                isCheese = true;
            } else if (child.name === "PP") {
                child.destroy();
                isPP = true;
            } else if (child.name === "Mushroom") {
                child.destroy();
                isMushroom = true;
            }

        }

        let newItem: cc.Node = null;

        if (isDough) {
            newItem = cc.instantiate(this.flatbreadPrefa);
            newItem.name = "Flatbread";
        } else if (isCheese) {
            newItem = cc.instantiate(this.gratedCheesePrefab);
            newItem.name = "GratedCheese";
        } else if (isPP) {
            newItem = cc.instantiate(this.sliceppPrefab);
            newItem.name = "SlicePP";
        } else if (isMushroom) {
            newItem = cc.instantiate(this.slicemushroomPrefab);
            newItem.name = "SliceMushroom";
        }


        if (newItem) {
            this.currentDropTarget.addChild(newItem);

            const dropPoint = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint) {
                cc.warn("⚠️ 找不到 DropPoint，無法放置切完的物品！");
                return;
            }

            const worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            const localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);
            newItem.setPosition(localPos);

            console.log(`✅ 切完 ${newItem.name}，放置成功！`);
        }

    }






    tryInteract() {
        if (this.canPickMushroom && !this.carriedDough) {
            const mushroom = cc.instantiate(this.mushroomPrefab);
            this.node.addChild(mushroom);
            mushroom.name = "Mushroom";
            mushroom.setPosition(cc.v2(0, 50));
            this.carriedDough = mushroom;
            console.log("🍄 拿起蘑菇");
        }

        if (this.canPickPP && !this.carriedDough) {
            const pp = cc.instantiate(this.ppPrefab);
            this.node.addChild(pp);
            pp.name = "PP";
            pp.setPosition(cc.v2(0, 50));
            this.carriedDough = pp;
            console.log("🍅 拿起番茄");
        }

        if (this.canPickCheese && !this.carriedDough) {
            const cheese = cc.instantiate(this.cheesePrefab);
            this.node.addChild(cheese);
            cheese.name = "Cheese";
            cheese.setPosition(cc.v2(0, 50));
            this.carriedDough = cheese;
            console.log("🧀 拿起起司");
        }


        if (this.canPickDough && !this.carriedDough) {
            const dough = cc.instantiate(this.doughPrefab);
            this.node.addChild(dough);
            dough.name = "Dough";
            dough.setPosition(cc.v2(0, 50));
            this.carriedDough = dough;
            console.log("🎒 拿起麵團");
        }
        else if (!this.carriedDough && this.currentDropTarget) {
            // 🔄 撿起任何 name 以食材開頭的東西
            const pickable = this.currentDropTarget.children.find(child =>
                ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce", "PP", "SlicePP", "Mushroom", "SliceMushroom"].some(prefix =>
                    child.name.startsWith(prefix)
                )
            );
            if (pickable) {
                this.carriedDough = pickable;
                pickable.removeFromParent();
                this.node.addChild(pickable);
                pickable.setPosition(cc.v2(0, 50));
                console.log("🎒 撿起桌上的物品：" + pickable.name);
            }
        }
        else if (this.canDropDough && this.carriedDough && this.currentDropTarget) {
            const dropPoint = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint) {
                cc.warn("❌ 找不到 DropPoint，無法放置！");
                return;
            }

            // ✅ 判斷 DropPoint 是否已經被放過東西（排除 DropPoint 本身）
            const alreadyHasFood = this.currentDropTarget.children.some(child => {
                return child !== dropPoint &&
                    ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce", "PP", "SlicePP", "Mushroom", "SliceMushroom"].some(type =>
                        child.name && child.name.startsWith(type)
                    );
            });

            if (alreadyHasFood) {
                cc.warn("⚠️ 砧板已經有食材了，不能再放！");
                return;
            }

            // ✅ 放置邏輯
            this.carriedDough.parent = this.currentDropTarget;

            const worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            const localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);

            this.carriedDough.setPosition(localPos);
            console.log("✅ 放下物品到 DropPoint：" + this.carriedDough.name);
            this.carriedDough = null;
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
        } else if (otherCollider.tag === 4) {
            this.canPickCheese = true;
            console.log("🧀 可以撿起起司");
        } else if (otherCollider.tag === 5) {
            this.canPickPP = true;
            console.log("🍅 可以撿起番茄！");
        } else if (otherCollider.tag === 6) {
            this.canPickMushroom = true;
            console.log("🍄 可以撿起蘑菇！");
        } else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
                    this.canDropDough = true;
                    this.currentDropTag = otherCollider.tag;  // 記住目前碰到哪個 tag
                    this.currentDropTarget = otherCollider.node;
                    console.log("🥣 接觸到砧板 Tag =", otherCollider.tag);
                } else if (otherCollider.tag === 11) {
                    this.canDropDough = true;
                    this.currentDropTag = 11;
                    this.currentDropTarget = otherCollider.node;
                }

    }



    onEndContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = false;
        } else if (otherCollider.tag === 4) {
            this.canPickCheese = false;
        } else if (otherCollider.tag === 5) {
            this.canPickPP = false;
        } else if (otherCollider.tag === 6) {
            this.canPickMushroom = false;
            console.log("🍄 可以撿起蘑菇！");
        } else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = false;
            //this.currentDropTag = null;  // 👈 清除記憶
        }
    }




}
