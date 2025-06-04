"use strict";
cc._RF.push(module, '87520rn6R9PgK/e9WImxw2K', 'PlayerController 2');
// Script/Player/PlayerController 2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardControls2_1 = require("./KeyboardControls2");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController2 = /** @class */ (function (_super) {
    __extends(PlayerController2, _super);
    function PlayerController2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 200;
        _this.doughPrefab = null;
        _this.flatbreadPrefa = null;
        _this.chopBarPrefab = null;
        _this.cheesePrefab = null;
        _this.gratedCheesePrefab = null;
        _this.ppPrefab = null;
        _this.sliceppPrefab = null;
        _this.mushroomPrefab = null;
        _this.slicemushroomPrefab = null;
        _this.cheesePizzaPrefab = null;
        _this.mushroomPizzaPrefab = null;
        _this.pepperPizzaPrefab = null;
        _this.smokeEffectPrefab = null;
        _this.smokePoint = null;
        _this.tipsLabelPrefab = null;
        _this.tipsParticlePrefab = null;
        _this.pizzaSteamPrefab = null;
        _this.uiManager = null;
        // 跑步
        _this.isRunning = false;
        _this.runMultiplier = 1.3; // 跑步速度倍率
        _this.runDustEffectPrefab = null;
        _this.runDustTimer = 0;
        _this.runDustInterval = 0.2; // 每 0.2 秒冒一次
        // Audio
        _this.blingSound = null;
        _this.pickupSound = null;
        _this.placeSound = null;
        _this.canDeliver = false; // 是否碰到出餐台（tag 9）
        _this.menuManager = null; // 實際 MenuBar 腳本引用
        _this.nearbyOven = null; // 記錄目前靠近哪個烤箱
        _this.smokeTimer = 0;
        _this.smokeInterval = 0.5; // 每 0.5 秒冒一次煙
        _this.input = null;
        _this.currentAnim = "";
        _this.lastDir = cc.v2(0, -1); // 預設向下（前）
        _this.rb = null;
        // 麵團
        _this.canPickDough = false;
        _this.canDropDough = false;
        _this.carriedDough = null;
        _this.currentDropTarget = null;
        _this.currentDropTag = null;
        _this.isChopping = false;
        _this.chopProgress = 0;
        _this.chopFill = null;
        _this.chopBar = null;
        // 起司
        _this.canPickCheese = false;
        _this.canPickPP = false; // tag 5 拿 pp 的 flag
        _this.canPickMushroom = false;
        // 烤披薩
        _this.isBaking = false;
        _this.bakeProgress = 0;
        _this.isNearOven = false; // tag = 12
        _this.lastInteractTime = 0;
        _this.interactCooldown = 0.2; // 0.2 秒冷卻時間
        return _this;
    }
    PlayerController2.prototype.start = function () {
        var _a;
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.rb = this.getComponent(cc.RigidBody);
        if (!this.rb) {
            cc.error("❌ 找不到 RigidBody2D 組件！");
            return;
        }
        this.playAnim("girl_idle_back");
        this.input = new KeyboardControls2_1.KeyboardControls2(); // 第二位使用專屬控制器
        var barNode = cc.instantiate(this.chopBarPrefab);
        this.node.addChild(barNode);
        barNode.setPosition(cc.v2(0, 80));
        this.chopBar = barNode; // ✅ 存起來
        this.chopFill = barNode.getChildByName("Fillbar");
        if (!this.chopFill) {
            cc.error("❌ 找不到 Fillbar！");
        }
        barNode.active = false; // 預設不顯示
        this.menuManager = (_a = this.uiManager) === null || _a === void 0 ? void 0 : _a.getComponent("MenuBar");
    };
    PlayerController2.prototype.update = function (dt) {
        var dir = this.input.getMoveDirection();
        this.isRunning = this.input.getRunHeld();
        if (!dir.equals(cc.Vec2.ZERO)) {
            if (this.isRunning) {
                this.rb.linearVelocity = dir.clone().normalize().mul(this.speed * this.runMultiplier);
                // ✅ 跑步狀態下產生粉塵
                this.runDustTimer += dt;
                if (this.runDustTimer >= this.runDustInterval) {
                    this.runDustTimer = 0;
                    this.spawnRunDust(); // ⬅️ 自訂的粉塵函數
                }
            }
            else {
                this.rb.linearVelocity = dir.clone().normalize().mul(this.speed);
                this.runDustTimer = 0; // 非跑步狀態就不冒煙
            }
            // 使用物理引擎的 linearVelocity 控制移動
            var finalSpeed = this.speed;
            if (this.isRunning)
                finalSpeed *= this.runMultiplier;
            this.rb.linearVelocity = dir.clone().normalize().mul(finalSpeed);
            this.lastDir = dir.clone();
            // 動畫切換（與方向判斷無變）
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim(this.isRunning ? "girl_run_back" : "girl_walk_back");
                }
                else {
                    this.playAnim(this.isRunning ? "girl_run" : "girl_walk");
                }
                this.node.scaleX = 1;
            }
            else {
                if (dir.x > 0) {
                    this.playAnim(this.isRunning ? "girl_run_right" : "girl_walk_right");
                    this.node.scaleX = 1;
                }
                else {
                    this.playAnim(this.isRunning ? "girl_run_left" : "girl_walk_left");
                    this.node.scaleX = 1;
                }
            }
        }
        else {
            // 停止移動（速度歸零）
            this.rb.linearVelocity = cc.v2(0, 0);
            // 播放靜止動畫
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "girl_idle_back" : "girl_idle");
            }
            else {
                this.playAnim(this.lastDir.x > 0 ? "girl_idle_right" : "girl_idle_left");
            }
            this.node.scaleX = 1;
        }
        /*if (this.input.getInteractPressed()) {
            this.tryInteract();
        }*/
        if (this.input.getInteractPressed()) {
            var now = Date.now() / 1000;
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
                var progressRatio = Math.min(this.chopProgress / 2, 1);
                this.chopFill.scaleX = progressRatio;
                if (this.chopProgress >= 2) {
                    this.finishChopping();
                }
            }
            else {
                this.cancelChopping(); // 玩家放開空白鍵，中斷切麵
            }
        }
        // 烘烤流程
        if (this.input.getChopPressed() &&
            this.isNearOven &&
            this.carriedDough &&
            this.isPizza(this.carriedDough.name) &&
            !this.carriedDough["baked"] && // ✅ 不能是已烤過的
            !this.isBaking) {
            // 初次按下，開始烘烤
            this.isBaking = true;
            this.bakeProgress = 0;
            this.carriedDough.active = false; // 讓披薩消失
            this.chopBar.parent = this.node;
            this.chopBar.setPosition(cc.v2(0, 80));
            this.chopBar.active = true;
            this.chopFill.scaleX = 0;
            console.log("🔥 披薩放入烤箱中...");
        }
        // 以烘烤提示
        if (this.input.getChopPressed() &&
            this.isNearOven &&
            this.carriedDough &&
            this.isPizza(this.carriedDough.name)) {
            if (this.carriedDough["baked"]) {
                console.warn("⚠️ 這塊披薩已經烤過了，不能重複烘烤！");
            }
        }
        if (this.isBaking && this.input.getChopPressed()) {
            this.bakeProgress += dt;
            var ratio = Math.min(this.bakeProgress / 3, 1);
            this.chopFill.scaleX = ratio;
            // 冒煙邏輯
            this.smokeTimer += dt;
            if (this.smokeTimer >= this.smokeInterval && this.nearbyOven) {
                this.smokeTimer = 0;
                var ovenPoint = this.nearbyOven.getChildByName("oven_point");
                if (ovenPoint) {
                    var smoke = cc.instantiate(this.smokeEffectPrefab);
                    smoke.name = "SmokeEffect";
                    var worldPos = ovenPoint.convertToWorldSpaceAR(cc.v3(0, 0, -5));
                    var localPos = this.nearbyOven.convertToNodeSpaceAR(worldPos);
                    smoke.setPosition(localPos);
                    this.nearbyOven.addChild(smoke);
                    console.log("💨 烘烤中冒煙（來自 oven_point）");
                }
                else {
                    console.warn("⚠️ 找不到 oven_point，無法冒煙");
                }
            }
            if (this.bakeProgress >= 3) {
                this.finishBaking();
            }
        }
        else if (this.isBaking && !this.input.getChopPressed()) {
            console.log("🛑 烘烤中斷！");
            this.cancelBaking();
        }
        if (this.canDeliver && this.input.getInteractPressed() && this.carriedDough) {
            var pizzaName_1 = this.carriedDough.name;
            // 檢查是否與菜單對應
            var matchedSlot = this.menuManager.slots.find(function (slot) {
                if (slot.children.length > 0) {
                    var childName = slot.children[0].name;
                    return childName === pizzaName_1;
                }
                return false;
            });
            if (matchedSlot) {
                // 出餐成功
                this.carriedDough.destroy();
                this.carriedDough = null;
                matchedSlot.removeAllChildren();
                this.menuManager.addScore(30); // 假設每道菜加 10 分
                this.showDeliveryEffect();
                if (this.blingSound) {
                    cc.audioEngine.playEffect(this.blingSound, false);
                }
                var menuBar = this.uiManager.getComponent("MenuBar");
                if (menuBar) {
                    menuBar.checkAndFillSlots();
                }
                console.log("🎉 成功出餐：" + pizzaName_1);
            }
            else {
                console.warn("❌ 此披薩不在菜單上，不能出餐！");
            }
        }
    };
    PlayerController2.prototype.spawnRunDust = function () {
        if (!this.runDustEffectPrefab)
            return;
        var dust = cc.instantiate(this.runDustEffectPrefab);
        var pos = this.node.getPosition();
        pos.y -= 40;
        dust.setPosition(pos);
        this.node.parent.addChild(dust);
    };
    PlayerController2.prototype.isPizza = function (name) {
        return ["cheese_pizza", "mushroom_pizza", "pepper_pizza"].includes(name);
    };
    PlayerController2.prototype.cancelBaking = function () {
        this.isBaking = false;
        this.bakeProgress = 0;
        this.smokeTimer = 0;
        this.chopBar.active = false;
        if (this.carriedDough)
            this.carriedDough.active = true;
    };
    PlayerController2.prototype.finishBaking = function () {
        this.isBaking = false;
        this.chopBar.active = false;
        this.bakeProgress = 0;
        if (this.carriedDough) {
            this.carriedDough.active = true;
            this.carriedDough["baked"] = true;
            // 在披薩上加冒煙特效
            var steam = cc.instantiate(this.pizzaSteamPrefab);
            steam.name = "PizzaSteam";
            steam.setPosition(cc.v3(0, 40, 0)); // 冒煙位置稍微在披薩上方
            this.carriedDough.addChild(steam);
            // 烘烤結束，清除冒煙
            this.node.parent.children.forEach(function (child) {
                if (child.name === "SmokeEffect") {
                    child.destroy();
                }
            });
        }
        if (this.nearbyOven) {
            this.nearbyOven.children.forEach(function (child) {
                if (child.name === "SmokeEffect") {
                    child.destroy();
                }
            });
        }
        console.log("\u2705 " + this.carriedDough.name + " \u70D8\u70E4\u5B8C\u6210\uFF01");
    };
    PlayerController2.prototype.tryAssemblePizza = function (parentNode) {
        var ingredientNames = parentNode.children.map(function (child) { return child.name; });
        var hasFlatbread = ingredientNames.includes("Flatbread");
        var hasCheese = ingredientNames.includes("GratedCheese");
        var hasMushroom = ingredientNames.includes("SliceMushroom");
        var hasPP = ingredientNames.includes("SlicePP");
        if (!hasFlatbread)
            return; // 必須先有 flatbread 才能合成
        var pizza = null;
        if (hasCheese && !hasMushroom && !hasPP) {
            pizza = cc.instantiate(this.cheesePizzaPrefab);
            pizza.name = "cheese_pizza";
        }
        else if (hasMushroom && !hasCheese && !hasPP) {
            pizza = cc.instantiate(this.mushroomPizzaPrefab);
            pizza.name = "mushroom_pizza";
        }
        else if (hasPP && !hasCheese && !hasMushroom) {
            pizza = cc.instantiate(this.pepperPizzaPrefab);
            pizza.name = "pepper_pizza";
        }
        else {
            return; // 尚不支援複合口味 pizza
        }
        // 刪除原料
        parentNode.children.forEach(function (child) {
            if (["Flatbread", "GratedCheese", "SliceMushroom", "SlicePP"].includes(child.name)) {
                child.destroy();
            }
        });
        // 加入 pizza
        parentNode.addChild(pizza);
        var dropPoint = parentNode.getChildByName("DropPoint");
        if (dropPoint) {
            var worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var localPos = parentNode.convertToNodeSpaceAR(worldPos);
            pizza.setPosition(localPos);
        }
        console.log("\uD83C\uDF55 \u5408\u6210 " + pizza.name + " \u6210\u529F\uFF01");
    };
    PlayerController2.prototype.cancelChopping = function () {
        this.isChopping = false;
        this.chopBar.active = false;
        this.chopProgress = 0;
        this.chopFill.scaleX = 0;
        console.log("🛑 玩家放開空白鍵，中斷切麵！");
    };
    PlayerController2.prototype.startChopping = function () {
        if (!this.currentDropTarget || this.currentDropTag !== 8) {
            cc.warn("⚠️ 只能在砧板上（tag = 8）切食材！");
            return;
        }
        var hasDough = this.currentDropTarget.children.some(function (child) { return child.name.includes("Dough"); });
        var hasCheese = this.currentDropTarget.children.some(function (child) { return child.name.includes("Cheese"); });
        var hasPP = this.currentDropTarget.children.some(function (child) { return child.name === "PP"; });
        var hasMushroom = this.currentDropTarget.children.some(function (child) { return child.name === "Mushroom"; });
        if (!hasDough && !hasCheese && !hasPP && !hasMushroom) {
            cc.warn("⚠️ 這個砧板上沒有麵團，不能切！");
            return;
        }
        this.isChopping = true;
        this.chopProgress = 0;
        this.chopBar.parent = this.node;
        this.chopBar.setPosition(cc.v2(0, 80)); // 顯示在角色頭上
        this.chopBar.active = true;
        this.chopFill.scaleX = 0;
        console.log("🔪 在正確砧板上開始切麵團！");
    };
    PlayerController2.prototype.finishChopping = function () {
        var isCheese = false;
        var isDough = false;
        var isPP = false;
        var isMushroom = false;
        for (var _i = 0, _a = this.currentDropTarget.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name === "Dough") {
                child.destroy();
                isDough = true;
            }
            else if (child.name === "Cheese") {
                child.destroy();
                isCheese = true;
            }
            else if (child.name === "PP") {
                child.destroy();
                isPP = true;
            }
            else if (child.name === "Mushroom") {
                child.destroy();
                isMushroom = true;
            }
        }
        var newItem = null;
        if (isDough) {
            newItem = cc.instantiate(this.flatbreadPrefa);
            newItem.name = "Flatbread";
        }
        else if (isCheese) {
            newItem = cc.instantiate(this.gratedCheesePrefab);
            newItem.name = "GratedCheese";
        }
        else if (isPP) {
            newItem = cc.instantiate(this.sliceppPrefab);
            newItem.name = "SlicePP";
        }
        else if (isMushroom) {
            newItem = cc.instantiate(this.slicemushroomPrefab);
            newItem.name = "SliceMushroom";
        }
        if (newItem) {
            this.currentDropTarget.addChild(newItem);
            var dropPoint = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint) {
                cc.warn("⚠️ 找不到 DropPoint，無法放置切完的物品！");
                return;
            }
            var worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);
            newItem.setPosition(localPos);
            console.log("\u2705 \u5207\u5B8C " + newItem.name + "\uFF0C\u653E\u7F6E\u6210\u529F\uFF01");
        }
    };
    PlayerController2.prototype.tryInteract = function () {
        var _this = this;
        if (this.canPickMushroom && !this.carriedDough) {
            var mushroom = cc.instantiate(this.mushroomPrefab);
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
            var pp = cc.instantiate(this.ppPrefab);
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
            var cheese = cc.instantiate(this.cheesePrefab);
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
            var dough = cc.instantiate(this.doughPrefab);
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
            var pickable = this.currentDropTarget.children.find(function (child) {
                return ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce",
                    "PP", "SlicePP", "Mushroom", "SliceMushroom",
                    "cheese_pizza", "mushroom_pizza", "pepper_pizza" // ← 加這三個
                ].some(function (prefix) {
                    return child.name.startsWith(prefix);
                });
            });
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
            var dropPoint_1 = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint_1) {
                cc.warn("❌ 找不到 DropPoint，無法放置！");
                return;
            }
            var alreadyHasOtherToppings = this.currentDropTarget.children.some(function (child) {
                return child !== dropPoint_1 &&
                    child.name !== "Flatbread" && // ✅ 允許有 Flatbread 在場
                    ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce",
                        "PP", "SlicePP", "Mushroom", "SliceMushroom",
                        "cheese_pizza", "mushroom_pizza", "pepper_pizza" // ← 加這三個
                    ].some(function (type) {
                        return child.name && child.name.startsWith(type);
                    });
            });
            var hasFlatbread = this.currentDropTarget.children.some(function (child) { return child.name === "Flatbread"; });
            var alreadyHasSameType = this.currentDropTarget.children.some(function (child) {
                return child !== dropPoint_1 && child.name === _this.carriedDough.name;
            });
            if (!hasFlatbread && alreadyHasSameType) {
                cc.warn("⚠️ 無法放置，桌上已有相同食材！");
                return;
            }
            // ✅ 放置邏輯
            this.carriedDough.parent = this.currentDropTarget;
            var worldPos = dropPoint_1.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);
            this.carriedDough.setPosition(localPos);
            console.log("✅ 放下物品到 DropPoint：" + this.carriedDough.name);
            this.carriedDough = null;
            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }
            // ✅ 嘗試合成 Pizza（放置後觸發）
            this.tryAssemblePizza(this.currentDropTarget);
        }
    };
    PlayerController2.prototype.showDeliveryEffect = function () {
        // 飄字效果
        var tipsNode = cc.instantiate(this.tipsLabelPrefab);
        tipsNode.setPosition(this.node.getPosition().add(cc.v2(0, 100))); // 出現在角色上方
        this.node.parent.addChild(tipsNode);
        // 飄浮 + 淡出
        cc.tween(tipsNode)
            .by(1, { position: cc.v3(0, 60, 0), opacity: -255 }, { easing: 'cubicOut' })
            .call(function () { return tipsNode.destroy(); })
            .start();
        // 粒子特效
        var effect = cc.instantiate(this.tipsParticlePrefab);
        effect.setPosition(this.node.getPosition());
        this.node.parent.addChild(effect);
    };
    PlayerController2.prototype.playAnim = function (name) {
        if (this.currentAnim === name)
            return;
        this.currentAnim = name;
        this.anim.play(name);
    };
    PlayerController2.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = true;
        }
        else if (otherCollider.tag === 4) {
            this.canPickCheese = true;
            console.log("🧀 可以撿起起司");
        }
        else if (otherCollider.tag === 5) {
            this.canPickPP = true;
            console.log("🍅 可以撿起番茄！");
        }
        else if (otherCollider.tag === 6) {
            this.canPickMushroom = true;
            console.log("🍄 可以撿起蘑菇！");
        }
        else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = true;
            this.currentDropTag = otherCollider.tag; // 記住目前碰到哪個 tag
            this.currentDropTarget = otherCollider.node;
            console.log("🥣 接觸到砧板 Tag =", otherCollider.tag);
        }
        else if (otherCollider.tag === 11) {
            this.canDropDough = true;
            this.currentDropTag = 11;
            this.currentDropTarget = otherCollider.node;
        }
        else if (otherCollider.tag === 12) {
            this.isNearOven = true;
            this.nearbyOven = otherCollider.node;
            console.log("🔥 接觸到烤箱！");
        }
        else if (otherCollider.tag === 9) {
            this.canDeliver = true;
        }
    };
    PlayerController2.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = false;
        }
        else if (otherCollider.tag === 4) {
            this.canPickCheese = false;
        }
        else if (otherCollider.tag === 5) {
            this.canPickPP = false;
        }
        else if (otherCollider.tag === 6) {
            this.canPickMushroom = false;
            console.log("🍄 可以撿起蘑菇！");
        }
        else if (otherCollider.tag === 8 || otherCollider.tag === 10 || otherCollider.tag === 11) {
            this.canDropDough = false;
            this.currentDropTarget = null;
            this.currentDropTag = null;
        }
        else if (otherCollider.tag === 12) {
            this.isNearOven = false;
            this.bakeProgress = 0;
            this.isBaking = false;
            this.nearbyOven = null;
            this.chopBar.active = false;
        }
        else if (otherCollider.tag === 9) {
            this.canDeliver = false;
        }
    };
    __decorate([
        property(cc.Animation)
    ], PlayerController2.prototype, "anim", void 0);
    __decorate([
        property
    ], PlayerController2.prototype, "speed", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "doughPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "flatbreadPrefa", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "chopBarPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "cheesePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "gratedCheesePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "ppPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "sliceppPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "mushroomPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "slicemushroomPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "cheesePizzaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "mushroomPizzaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "pepperPizzaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "smokeEffectPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController2.prototype, "smokePoint", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "tipsLabelPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "tipsParticlePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "pizzaSteamPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController2.prototype, "uiManager", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController2.prototype, "runDustEffectPrefab", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController2.prototype, "blingSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController2.prototype, "pickupSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController2.prototype, "placeSound", void 0);
    PlayerController2 = __decorate([
        ccclass
    ], PlayerController2);
    return PlayerController2;
}(cc.Component));
exports.default = PlayerController2;

cc._RF.pop();