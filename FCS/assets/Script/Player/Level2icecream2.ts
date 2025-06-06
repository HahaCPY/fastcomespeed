// 🍦 冰淇淋製作與出餐邏輯整合段（單球版本）含角色控制、動畫與粒子特效 + 製作進度條 chopBar + 垃圾桶邏輯

import { KeyboardControls2 } from "./KeyboardControls2";
import { IInputControls } from "./IInputControls";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level2icecream2 extends cc.Component {
    @property(cc.Prefab)
    conePrefab: cc.Prefab = null;
    @property(cc.Prefab)
    vanillaPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    strawberryPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    chocolatePrefab: cc.Prefab = null;

    @property(cc.Prefab)
    trashSmokePrefab: cc.Prefab = null; 

    @property(cc.Node)
    uiManager: cc.Node = null;

    @property(cc.Prefab)
    tipsLabelPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    tipsParticlePrefab: cc.Prefab = null;

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.Prefab)
    craftParticlePrefab: cc.Prefab = null;

    @property(cc.Prefab)
    chopBarPrefab: cc.Prefab = null;

    @property({ type: cc.AudioClip })
    pickupSound: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    blingSound: cc.AudioClip = null;

    @property
    speed: number = 200;

    @property(cc.Prefab)
    runDustEffectPrefab: cc.Prefab = null;

    private input: IInputControls = null;
    private rb: cc.RigidBody = null;
    private currentAnim: string = "";
    private lastDir: cc.Vec2 = cc.v2(0, -1);
    private isRunning: boolean = false;
    private runMultiplier: number = 1.3;
    private runDustTimer: number = 0;
    private runDustInterval: number = 0.2;

    private carriedDough: cc.Node = null;
    private canPickCone: boolean = false;
    private canAddVanilla: boolean = false;
    private canAddStrawberry: boolean = false;
    private canAddChocolate: boolean = false;
    private canDeliver: boolean = false;
    private canTrash: boolean = false;
    private iceCreamProgress: number = 0;
    private menuManager: any = null;

    private chopBar: cc.Node = null;
    private chopFill: cc.Node = null;

    onLoad() {
        this.rb = this.getComponent(cc.RigidBody);
        this.menuManager = this.uiManager?.getComponent("MenuBar");
        this.input = new KeyboardControls2();
        this.playAnim("girl_idle_back");

        const barNode = cc.instantiate(this.chopBarPrefab);
        this.node.addChild(barNode);
        barNode.setPosition(cc.v2(0, 80));
        this.chopBar = barNode;
        this.chopFill = barNode.getChildByName("Fillbar");
        barNode.active = false;
    }

    update(dt: number) {
        const dir = this.input.getMoveDirection();
        this.isRunning = this.input.getRunHeld();

        if (!dir.equals(cc.Vec2.ZERO)) {
            let finalSpeed = this.speed;
            if (this.isRunning) finalSpeed *= this.runMultiplier;
            this.rb.linearVelocity = dir.clone().normalize().mul(finalSpeed);

            this.lastDir = dir.clone();

            if (this.isRunning) {
                this.runDustTimer += dt;
                if (this.runDustTimer >= this.runDustInterval) {
                    this.runDustTimer = 0;
                    this.spawnRunDust();
                }
            } else {
                this.runDustTimer = 0;
            }

            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                this.playAnim(dir.y > 0 ? (this.isRunning ? "girl_run_back" : "girl_walk_back") : (this.isRunning ? "girl_run" : "girl_walk"));
            } else {
                this.playAnim(dir.x > 0 ? (this.isRunning ? "girl_run_right" : "girl_walk_right") : (this.isRunning ? "girl_run_left" : "girl_walk_left"));
            }
            this.node.scaleX = 1;
        } else {
            this.rb.linearVelocity = cc.v2(0, 0);
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "girl_idle_back" : "girl_idle");
            } else {
                this.playAnim(this.lastDir.x > 0 ? "girl_idle_right" : "girl_idle_left");
            }
            this.node.scaleX = 1;
        }

        if (this.carriedDough && this.carriedDough.name === "Cone" && this.input.getChopPressed()) {
            this.iceCreamProgress += dt;
            this.chopBar.active = true;
            this.chopFill.scaleX = Math.min(this.iceCreamProgress / 1, 1);

            if (this.iceCreamProgress >= 1) {
                this.chopBar.active = false;
                if (this.canAddVanilla) {
                    this.replaceWithIceCream("vanilla-icecream-menu", this.vanillaPrefab);
                } else if (this.canAddStrawberry) {
                    this.replaceWithIceCream("strawberry-icecream-menu", this.strawberryPrefab);
                } else if (this.canAddChocolate) {
                    this.replaceWithIceCream("chocolate-icecream-menu", this.chocolatePrefab);
                }
            }
        } else {
            this.chopBar.active = false;
            this.iceCreamProgress = 0;
            this.chopFill.scaleX = 0;
        }

        if (this.canDeliver && this.input.getInteractPressed() && this.carriedDough) {
            const scoopName = this.carriedDough.name;
            const matchedSlot = this.menuManager.slots.find(slot => {
                const menuName = slot.children[0]?.name;
                return menuName === scoopName;
            });
            if (matchedSlot) {
                this.carriedDough.destroy();
                this.carriedDough = null;
                matchedSlot.removeAllChildren();
                this.menuManager.addScore(30);
                this.showDeliveryEffect();
                this.menuManager.checkAndFillSlots();
                //if (this.anim) this.anim.play("girl_happy");
                if (this.blingSound) {
                    cc.audioEngine.playEffect(this.blingSound, false);
                }

                console.log("✅ 成功出餐冰淇淋：" + scoopName);
            } else {
                console.warn("❌ 冰淇淋與菜單不符！");
            }
        }

        if (this.canTrash && this.input.getInteractPressed() && this.carriedDough) {
            this.carriedDough.destroy();
            this.carriedDough = null;
            this.iceCreamProgress = 0;
            this.chopBar.active = false;
            this.chopFill.scaleX = 0;
        if (this.trashSmokePrefab) {
            const smoke = cc.instantiate(this.trashSmokePrefab);
            smoke.setPosition(this.node.getPosition());
            this.node.parent.addChild(smoke);
            cc.tween(smoke)
                .to(1.5, { opacity: 0 })
                .call(() => smoke.destroy())
                .start();
        }
            this.menuManager.addScore(-50);
            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }

            console.log("🗑️ 丟棄手上物品");
        }

        if (this.input.getInteractPressed()) {
            this.tryInteract();
        }
    }

    tryInteract() {
        if (this.canPickCone && !this.carriedDough) {
            const cone = cc.instantiate(this.conePrefab);
            cone.name = "Cone";
            cone.setPosition(cc.v3(0, 10, 50));
            this.node.addChild(cone);
            this.carriedDough = cone;
            if (this.anim) this.anim.play("girl_pick");
            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }

            console.log("🍦 拿起甜筒");
        }
    }

    replaceWithIceCream(name: string, prefab: cc.Prefab) {
        if (!this.carriedDough) return;
        this.carriedDough.destroy();
        const iceCream = cc.instantiate(prefab);
        iceCream.name = name;
        iceCream.setPosition(cc.v2(0, 2));
        this.node.addChild(iceCream);
        this.carriedDough = iceCream;
        this.iceCreamProgress = 0;
        this.chopBar.active = false;
        this.chopFill.scaleX = 0;

        const craftEffect = cc.instantiate(this.craftParticlePrefab);
        craftEffect.setPosition(this.node.getPosition());
        this.node.parent.addChild(craftEffect);
        console.log(`🍨 製作完成：${name}`);
    }

    showDeliveryEffect() {
        const tipsNode = cc.instantiate(this.tipsLabelPrefab);
        tipsNode.setPosition(this.node.getPosition().add(cc.v2(0, 100)));
        this.node.parent.addChild(tipsNode);
        cc.tween(tipsNode)
            .by(1, { position: cc.v3(0, 60, 0), opacity: -255 }, { easing: 'cubicOut' })
            .call(() => tipsNode.destroy())
            .start();

        const effect = cc.instantiate(this.tipsParticlePrefab);
        effect.setPosition(this.node.getPosition());
        this.node.parent.addChild(effect);
    }

    spawnRunDust() {
        if (!this.runDustEffectPrefab) return;
        const dust = cc.instantiate(this.runDustEffectPrefab);
        const pos = this.node.getPosition();
        pos.y -= 40;
        dust.setPosition(pos);
        this.node.parent.addChild(dust);
    }

    playAnim(name: string) {
        if (this.currentAnim === name) return;
        this.currentAnim = name;
        this.anim.play(name);
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 2) {
            this.canPickCone = true;
        } else if (otherCollider.tag === 3) {
            this.canAddVanilla = true;
        } else if (otherCollider.tag === 4) {
            this.canAddStrawberry = true;
        } else if (otherCollider.tag === 5) {
            this.canAddChocolate = true;
        } else if (otherCollider.tag === 6) {
            this.canDeliver = true;
        } else if (otherCollider.tag === 7) {
            this.canTrash = true;
        }
    }

    onEndContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 2) {
            this.canPickCone = false;
        } else if (otherCollider.tag === 3) {
            this.canAddVanilla = false;
        } else if (otherCollider.tag === 4) {
            this.canAddStrawberry = false;
        } else if (otherCollider.tag === 5) {
            this.canAddChocolate = false;
        } else if (otherCollider.tag === 6) {
            this.canDeliver = false;
        } else if (otherCollider.tag === 7) {
            this.canTrash = false;
        }
    }
}
