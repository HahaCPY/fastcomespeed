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

    @property(cc.Prefab)
    chopBarPrefab: cc.Prefab = null; 

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

    @property(cc.Prefab)
    cheesePizzaPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    mushroomPizzaPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    pepperPizzaPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    smokeEffectPrefab: cc.Prefab = null;

    @property(cc.Node)
    smokePoint: cc.Node = null;

    @property(cc.Prefab)
    tipsLabelPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    tipsParticlePrefab: cc.Prefab = null;

    @property(cc.Prefab)
    pizzaSteamPrefab: cc.Prefab = null;

    @property(cc.Node)
    uiManager: cc.Node = null;

    @property({ type: cc.AudioClip })
    chopSound: cc.AudioClip = null;

    private chopSoundTimer: number = 0;

    // 跑步
    private isRunning: boolean = false;
    private runMultiplier: number = 1.3; // 跑步速度倍率
    
    @property(cc.Prefab)
    runDustEffectPrefab: cc.Prefab = null;

    private runDustTimer: number = 0;
    private runDustInterval: number = 0.2;  // 每 0.2 秒冒一次


    // Audio
    @property({ type: cc.AudioClip })
    blingSound: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    pickupSound: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    placeSound: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    bakeSound: cc.AudioClip = null;


    private bakeSoundId: number = -1;
    private canDeliver: boolean = false;   // 是否碰到出餐台（tag 9）
    private menuManager: any = null;       // 實際 MenuBar 腳本引用


    private nearbyOven: cc.Node = null; // 記錄目前靠近哪個烤箱


    private smokeTimer: number = 0;
    private smokeInterval: number = 0.5; // 每 0.5 秒冒一次煙

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
    private chopBar: cc.Node = null;

    // 起司
    private canPickCheese: boolean = false;

    private canPickPP: boolean = false; // tag 5 拿 pp 的 flag

    private canPickMushroom: boolean = false;

    // 烤披薩
    private isBaking: boolean = false;
    private bakeProgress: number = 0;
    private isNearOven: boolean = false; // tag = 12

    
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
        this.input = new KeyboardControls();  // 第二位使用專屬控制器
        
        const barNode = cc.instantiate(this.chopBarPrefab);
        this.node.addChild(barNode);
        barNode.setPosition(cc.v2(0, 80));
        this.chopBar = barNode; // ✅ 存起來

        this.chopFill = barNode.getChildByName("Fillbar");
        if (!this.chopFill) {
            cc.error("❌ 找不到 Fillbar！");
        }
        barNode.active = false; // 預設不顯示


        this.menuManager = this.uiManager?.getComponent("MenuBar");
    }

    update(dt: number) {
        const dir = this.input.getMoveDirection();
        this.isRunning = this.input.getRunHeld();

        if (!dir.equals(cc.Vec2.ZERO)) {
            if (this.isRunning) {
                this.rb.linearVelocity = dir.clone().normalize().mul(this.speed * this.runMultiplier);

                // ✅ 跑步狀態下產生粉塵
                this.runDustTimer += dt;
                if (this.runDustTimer >= this.runDustInterval) {
                    this.runDustTimer = 0;
                    this.spawnRunDust();  // ⬅️ 自訂的粉塵函數
                }
            } else {
                this.rb.linearVelocity = dir.clone().normalize().mul(this.speed);
                this.runDustTimer = 0;  // 非跑步狀態就不冒煙
            }
            // 使用物理引擎的 linearVelocity 控制移動
            let finalSpeed = this.speed;
            if (this.isRunning) finalSpeed *= this.runMultiplier;

            this.rb.linearVelocity = dir.clone().normalize().mul(finalSpeed);

            this.lastDir = dir.clone();

            // 動畫切換（與方向判斷無變）
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim(this.isRunning ? "girl_run_back" : "girl_walk_back");
                } else {
                    this.playAnim(this.isRunning ? "girl_run" : "girl_walk");
                }
                this.node.scaleX = 1;
            } else {
                if (dir.x > 0) {
                    this.playAnim(this.isRunning ? "girl_run_right" : "girl_walk_right");
                    this.node.scaleX = 1;
                } else {
                    this.playAnim(this.isRunning ? "girl_run_left" : "girl_walk_left");
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

                this.chopSoundTimer += dt;
                if (this.chopSoundTimer >= 0.2) {  // 每 0.2 秒
                    this.chopSoundTimer = 0;
                    if (this.chopSound) {
                        cc.audioEngine.playEffect(this.chopSound, false);
                    }
                }

                if (this.chopProgress >= 2) {
                    this.finishChopping();
                }
            } else {
                this.cancelChopping();  // 玩家放開空白鍵，中斷切麵
            }
        } else {
            this.chopSoundTimer = 0;
        }
        
        // 烘烤流程
        if (
            this.input.getChopPressed() &&
            this.isNearOven &&
            this.carriedDough &&
            this.isPizza(this.carriedDough.name) &&
            !this.carriedDough["baked"] && // ✅ 不能是已烤過的
            !this.isBaking
        ){

            // 初次按下，開始烘烤
            this.isBaking = true;

            if (this.bakeSound && this.bakeSoundId === -1) {
              this.bakeSoundId = cc.audioEngine.playEffect(this.bakeSound, true);
            }

            this.bakeProgress = 0;
            this.carriedDough.active = false; // 讓披薩消失
            this.chopBar.parent = this.node;
            this.chopBar.setPosition(cc.v2(0, 80));
            this.chopBar.active = true;
            this.chopFill.scaleX = 0;
            console.log("🔥 披薩放入烤箱中...");
        }
        // 以烘烤提示
        if (
            this.input.getChopPressed() &&
            this.isNearOven &&
            this.carriedDough &&
            this.isPizza(this.carriedDough.name)
        ) {
            if (this.carriedDough["baked"]) {
                console.warn("⚠️ 這塊披薩已經烤過了，不能重複烘烤！");
            }
        }


        if (this.isBaking && this.input.getChopPressed()) {
            this.bakeProgress += dt;
            const ratio = Math.min(this.bakeProgress / 3, 1);
            this.chopFill.scaleX = ratio;

            // 冒煙邏輯
            this.smokeTimer += dt;
            if (this.smokeTimer >= this.smokeInterval && this.nearbyOven) {
                this.smokeTimer = 0;

                const ovenPoint = this.nearbyOven.getChildByName("oven_point");
                if (ovenPoint) {
                    const smoke = cc.instantiate(this.smokeEffectPrefab);
                    smoke.name = "SmokeEffect";

                    const worldPos = ovenPoint.convertToWorldSpaceAR(cc.v3(0, 0, -5));
                    const localPos = this.nearbyOven.convertToNodeSpaceAR(worldPos);

                    smoke.setPosition(localPos);
                    this.nearbyOven.addChild(smoke);

                    console.log("💨 烘烤中冒煙（來自 oven_point）");
                } else {
                    console.warn("⚠️ 找不到 oven_point，無法冒煙");
                }
            }

            if (this.bakeProgress >= 3) {
                this.finishBaking();
            }
        } else if (this.isBaking && !this.input.getChopPressed()) {
            console.log("🛑 烘烤中斷！");
            this.cancelBaking();
        }
        if (this.canDeliver && this.input.getInteractPressed() && this.carriedDough) {
            const pizzaName = this.carriedDough.name;

            // 檢查是否與菜單對應
            const matchedSlot = this.menuManager.slots.find(slot => {
                if (slot.children.length > 0) {
                    const childName = slot.children[0].name;
                    return childName === pizzaName;
                }
                return false;
            });

            if (matchedSlot) {
                // 出餐成功
                this.carriedDough.destroy();
                this.carriedDough = null;
                matchedSlot.removeAllChildren();
                this.menuManager.addScore(50);  // 假設每道菜加 10 分
                this.showDeliveryEffect();

                if (this.blingSound) {
                    cc.audioEngine.playEffect(this.blingSound, false);
                }

                const menuBar = this.uiManager.getComponent("MenuBar");
                if (menuBar) {
                    menuBar.checkAndFillSlots();
                }
                console.log("🎉 成功出餐：" + pizzaName);
            } else {
                console.warn("❌ 此披薩不在菜單上，不能出餐！");
            }
        }
    }
    
    spawnRunDust() {
        if (!this.runDustEffectPrefab) return;

        const dust = cc.instantiate(this.runDustEffectPrefab);

        const pos = this.node.getPosition(); 
        pos.y -= 40;                         
        dust.setPosition(pos);              

        this.node.parent.addChild(dust);
    }



    isPizza(name: string): boolean {
        return ["cheese_pizza", "mushroom_pizza", "pepper_pizza"].includes(name);
    }

    cancelBaking() {
        if (this.bakeSoundId !== -1) {
            cc.audioEngine.stopEffect(this.bakeSoundId);
            this.bakeSoundId = -1;
        }
        this.isBaking = false;
        this.bakeProgress = 0;
        this.smokeTimer = 0; 
        this.chopBar.active = false;
        if (this.carriedDough) this.carriedDough.active = true;
    }


    finishBaking() {
        if (this.bakeSoundId !== -1) {
            cc.audioEngine.stopEffect(this.bakeSoundId);
            this.bakeSoundId = -1;
        }
        this.isBaking = false;
        this.chopBar.active = false;
        this.bakeProgress = 0;
        if (this.carriedDough) {
            this.carriedDough.active = true;
            this.carriedDough["baked"] = true;

            // 在披薩上加冒煙特效
            const steam = cc.instantiate(this.pizzaSteamPrefab);
            steam.name = "PizzaSteam";
            steam.setPosition(cc.v3(0, 40, 0)); // 冒煙位置稍微在披薩上方
            this.carriedDough.addChild(steam);


            // 烘烤結束，清除冒煙
            this.node.parent.children.forEach(child => {
                if (child.name === "SmokeEffect") {
                        child.destroy();  
                }
            });

        }
        if (this.nearbyOven) {
            this.nearbyOven.children.forEach(child => {
                if (child.name === "SmokeEffect") {
                    child.destroy();
                }
            });
        }
        console.log(`✅ ${this.carriedDough.name} 烘烤完成！`);
    }


    tryAssemblePizza(parentNode: cc.Node) {
        const ingredientNames = parentNode.children.map(child => child.name);
        const hasFlatbread = ingredientNames.includes("Flatbread");
        const hasCheese = ingredientNames.includes("GratedCheese");
        const hasMushroom = ingredientNames.includes("SliceMushroom");
        const hasPP = ingredientNames.includes("SlicePP");

        if (!hasFlatbread) return; // 必須先有 flatbread 才能合成

        let pizza: cc.Node = null;

        if (hasCheese && !hasMushroom && !hasPP) {
            pizza = cc.instantiate(this.cheesePizzaPrefab);
            pizza.name = "cheese_pizza";
        } else if (hasMushroom && !hasCheese && !hasPP) {
            pizza = cc.instantiate(this.mushroomPizzaPrefab);
            pizza.name = "mushroom_pizza";
        } else if (hasPP && !hasCheese && !hasMushroom) {
            pizza = cc.instantiate(this.pepperPizzaPrefab);
            pizza.name = "pepper_pizza";
        } else {
            return; // 尚不支援複合口味 pizza
        }

        // 刪除原料
        parentNode.children.forEach(child => {
            if (["Flatbread", "GratedCheese", "SliceMushroom", "SlicePP"].includes(child.name)) {
                child.destroy();
            }
        });

        // 加入 pizza
        parentNode.addChild(pizza);
        const dropPoint = parentNode.getChildByName("DropPoint");
        if (dropPoint) {
            const worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            const localPos = parentNode.convertToNodeSpaceAR(worldPos);
            pizza.setPosition(localPos);
        }

        console.log(`🍕 合成 ${pizza.name} 成功！`);
    }


    cancelChopping() {
        this.isChopping = false;
        this.chopBar.active = false;
        this.chopProgress = 0;
        this.chopFill.scaleX = 0;
        console.log("🛑 玩家放開空白鍵，中斷切麵！");
    }

    startChopping() {
        
        if (!this.currentDropTarget || this.currentDropTag !== 8) {
            cc.warn("⚠️ 只能在砧板上（tag = 8）切食材！");
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

            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }

            console.log("🍄 拿起蘑菇");
        }

        if (this.canPickPP && !this.carriedDough) {
            const pp = cc.instantiate(this.ppPrefab);
            this.node.addChild(pp);
            pp.name = "PP";
            pp.setPosition(cc.v2(0, 50));
            this.carriedDough = pp;

           if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }
            console.log("🍅 拿起番茄");
        }

        if (this.canPickCheese && !this.carriedDough) {
            const cheese = cc.instantiate(this.cheesePrefab);
            this.node.addChild(cheese);
            cheese.name = "Cheese";
            cheese.setPosition(cc.v2(0, 50));
            this.carriedDough = cheese;

            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }

            console.log("🧀 拿起起司");
        }


        if (this.canPickDough && !this.carriedDough) {
            const dough = cc.instantiate(this.doughPrefab);
            this.node.addChild(dough);
            dough.name = "Dough";
            dough.setPosition(cc.v2(0, 50));
            this.carriedDough = dough;

            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }

            console.log("🎒 拿起麵團");
        }
        else if (!this.carriedDough && this.currentDropTarget) {
            // 🔄 撿起任何 name 以食材開頭的東西
            const pickable = this.currentDropTarget.children.find(child =>
                 ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce", 
                    "PP", "SlicePP", "Mushroom", "SliceMushroom",
                    "cheese_pizza", "mushroom_pizza", "pepper_pizza" // ← 加這三個
                    ].some(prefix =>
                    child.name.startsWith(prefix)
                )
            );
            if (pickable) {
                this.carriedDough = pickable;
                pickable.removeFromParent();
                this.node.addChild(pickable);
                pickable.setPosition(cc.v2(0, 50));

                if (this.pickupSound) {
                    cc.audioEngine.playEffect(this.pickupSound, false);
                }

                console.log("🎒 撿起桌上的物品：" + pickable.name);
            }
        }
        else if (this.canDropDough && this.carriedDough && this.currentDropTarget) {
            const dropPoint = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint) {
                cc.warn("❌ 找不到 DropPoint，無法放置！");
                return;
            }

        const alreadyHasOtherToppings = this.currentDropTarget.children.some(child => {
            return child !== dropPoint &&
                child.name !== "Flatbread" && // ✅ 允許有 Flatbread 在場
                 ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce", 
                "PP", "SlicePP", "Mushroom", "SliceMushroom",
                "cheese_pizza", "mushroom_pizza", "pepper_pizza" // ← 加這三個
                ].some(type =>
                    child.name && child.name.startsWith(type)
                );
        });


        const hasFlatbread = this.currentDropTarget.children.some(child => child.name === "Flatbread");

        const alreadyHasSameType = this.currentDropTarget.children.some(child => {
            return child !== dropPoint && child.name === this.carriedDough.name;
        });

        if (!hasFlatbread && alreadyHasSameType) {
            cc.warn("⚠️ 無法放置，桌上已有相同食材！");
            return;
        }

            // ✅ 放置邏輯
            this.carriedDough.parent = this.currentDropTarget;

            const worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            const localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);

            this.carriedDough.setPosition(localPos);
            console.log("✅ 放下物品到 DropPoint：" + this.carriedDough.name);
            this.carriedDough = null;
            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }
            // ✅ 嘗試合成 Pizza（放置後觸發）
            this.tryAssemblePizza(this.currentDropTarget);
        }


    }

    showDeliveryEffect() {
        // 飄字效果
        const tipsNode = cc.instantiate(this.tipsLabelPrefab);
        tipsNode.setPosition(this.node.getPosition().add(cc.v2(0, 100))); // 出現在角色上方
        this.node.parent.addChild(tipsNode);

        // 飄浮 + 淡出
        cc.tween(tipsNode)
            .by(1, { position: cc.v3(0, 60, 0), opacity: -255 }, { easing: 'cubicOut' })
            .call(() => tipsNode.destroy())
            .start();


        // 粒子特效
        const effect = cc.instantiate(this.tipsParticlePrefab);
        effect.setPosition(this.node.getPosition());
        this.node.parent.addChild(effect);
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
        } else if (otherCollider.tag === 12) {
            this.isNearOven = true;
            this.nearbyOven = otherCollider.node;
            console.log("🔥 接觸到烤箱！");

            if (this.bakeSoundId !== -1) {
                cc.audioEngine.stopEffect(this.bakeSoundId);
                this.bakeSoundId = -1;
            }
        } else if (otherCollider.tag === 9) {
            this.canDeliver = true;
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
        } else if (otherCollider.tag === 8 || otherCollider.tag === 10 || otherCollider.tag === 11) {
            this.canDropDough = false;
            this.currentDropTarget = null;   
            this.currentDropTag = null;
        } else if (otherCollider.tag === 12) {
            this.isNearOven = false;
            this.bakeProgress = 0;
            this.isBaking = false;
            this.nearbyOven = null;
            this.chopBar.active = false;
        } else if (otherCollider.tag === 9) {
            this.canDeliver = false;
        }


    } 




}
