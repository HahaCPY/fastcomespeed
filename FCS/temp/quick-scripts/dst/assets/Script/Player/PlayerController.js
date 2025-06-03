
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49d73Terv9CSKbbSOPEQgbT', 'PlayerController');
// Script/Player/PlayerController.ts

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
var KeyboardControls_1 = require("./KeyboardControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 200;
        _this.doughPrefab = null;
        _this.flatbreadPrefa = null;
        _this.chopBar = null;
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
    PlayerController.prototype.start = function () {
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
        this.input = new KeyboardControls_1.KeyboardControls();
        this.chopFill = this.chopBar.getChildByName("Fillbar");
        if (!this.chopFill) {
            cc.error("❌ 找不到 Fillbar！");
        }
        this.chopBar.active = false; // 預設不顯示
        this.menuManager = (_a = this.uiManager) === null || _a === void 0 ? void 0 : _a.getComponent("MenuBar");
    };
    PlayerController.prototype.update = function (dt) {
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
                    this.playAnim(this.isRunning ? "girl_run" : "girl_idle_walk");
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
    PlayerController.prototype.spawnRunDust = function () {
        if (!this.runDustEffectPrefab)
            return;
        var dust = cc.instantiate(this.runDustEffectPrefab);
        var pos = this.node.getPosition(); // 取得 Vec3
        pos.y -= 40; // 稍微往下偏移，模擬腳底粉塵
        dust.setPosition(pos); // ✅ 傳入 Vec3
        this.node.parent.addChild(dust);
    };
    PlayerController.prototype.isPizza = function (name) {
        return ["cheese_pizza", "mushroom_pizza", "pepper_pizza"].includes(name);
    };
    PlayerController.prototype.cancelBaking = function () {
        this.isBaking = false;
        this.bakeProgress = 0;
        this.smokeTimer = 0;
        this.chopBar.active = false;
        if (this.carriedDough)
            this.carriedDough.active = true;
    };
    PlayerController.prototype.finishBaking = function () {
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
    PlayerController.prototype.tryAssemblePizza = function (parentNode) {
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
    PlayerController.prototype.cancelChopping = function () {
        this.isChopping = false;
        this.chopBar.active = false;
        this.chopProgress = 0;
        this.chopFill.scaleX = 0;
        console.log("🛑 玩家放開空白鍵，中斷切麵！");
    };
    PlayerController.prototype.startChopping = function () {
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
    PlayerController.prototype.finishChopping = function () {
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
    PlayerController.prototype.tryInteract = function () {
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
    PlayerController.prototype.showDeliveryEffect = function () {
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
    PlayerController.prototype.playAnim = function (name) {
        if (this.currentAnim === name)
            return;
        this.currentAnim = name;
        this.anim.play(name);
    };
    PlayerController.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
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
    PlayerController.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
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
    ], PlayerController.prototype, "anim", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "speed", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "doughPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "flatbreadPrefa", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "chopBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "cheesePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "gratedCheesePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "ppPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "sliceppPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "mushroomPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "slicemushroomPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "cheesePizzaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "mushroomPizzaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "pepperPizzaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "smokeEffectPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "smokePoint", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "tipsLabelPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "tipsParticlePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "pizzaSteamPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "uiManager", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "runDustEffectPrefab", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "blingSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "pickupSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "placeSound", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBa3dCQztRQWh3QkcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLEtBQUs7UUFDRyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG1CQUFhLEdBQVcsR0FBRyxDQUFDLENBQUMsU0FBUztRQUc5Qyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFOUIs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QUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrREFDZ0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ2U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDUTtJQU8xQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lFQUNrQjtJQVF0QztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7d0RBQ0Q7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lEQUNBO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3REFDRDtJQWhGZixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWt3QnBDO0lBQUQsdUJBQUM7Q0Fsd0JELEFBa3dCQyxDQWx3QjZDLEVBQUUsQ0FBQyxTQUFTLEdBa3dCekQ7a0JBbHdCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZG91Z2hQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZsYXRicmVhZFByZWZhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ3JhdGVkQ2hlZXNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2xpY2VwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNsaWNlbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZWVzZVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBtdXNocm9vbVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZXBwZXJQaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc21va2VFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbW9rZVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGlwc0xhYmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aXBzUGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBpenphU3RlYW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOi3keatpVxyXG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcnVuTXVsdGlwbGllcjogbnVtYmVyID0gMS4zOyAvLyDot5HmraXpgJ/luqblgI3njodcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHJ1bkR1c3RFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBydW5EdXN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJ1bkR1c3RJbnRlcnZhbDogbnVtYmVyID0gMC4yOyAgLy8g5q+PIDAuMiDnp5LlhpLkuIDmrKFcclxuXHJcblxyXG4gICAgLy8gQXVkaW9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmxpbmdTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHBpY2t1cFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgcGxhY2VTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY2FuRGVsaXZlcjogYm9vbGVhbiA9IGZhbHNlOyAgIC8vIOaYr+WQpueisOWIsOWHuumkkOWPsO+8iHRhZyA577yJXHJcbiAgICBwcml2YXRlIG1lbnVNYW5hZ2VyOiBhbnkgPSBudWxsOyAgICAgICAvLyDlr6bpmpsgTWVudUJhciDohbPmnKzlvJXnlKhcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBuZWFyYnlPdmVuOiBjYy5Ob2RlID0gbnVsbDsgLy8g6KiY6YyE55uu5YmN6Z2g6L+R5ZOq5YCL54Ok566xXHJcblxyXG5cclxuICAgIHByaXZhdGUgc21va2VUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc21va2VJbnRlcnZhbDogbnVtYmVyID0gMC41OyAvLyDmr48gMC41IOenkuWGkuS4gOasoeeFmVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXQ6IElJbnB1dENvbnRyb2xzID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGxhc3REaXI6IGNjLlZlYzIgPSBjYy52MigwLCAtMSk7IC8vIOmgkOioreWQkeS4i++8iOWJje+8iVxyXG4gICAgcHJpdmF0ZSByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICAvLyDpurXlnJhcclxuICAgIHByaXZhdGUgY2FuUGlja0RvdWdoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkRyb3BEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYXJyaWVkRG91Z2g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RHJvcFRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFnOiBudW1iZXIgPSBudWxsOyBcclxuICAgIHByaXZhdGUgaXNDaG9wcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaG9wUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyDotbflj7hcclxuICAgIHByaXZhdGUgY2FuUGlja0NoZWVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgY2FuUGlja1BQOiBib29sZWFuID0gZmFsc2U7IC8vIHRhZyA1IOaLvyBwcCDnmoQgZmxhZ1xyXG5cclxuICAgIHByaXZhdGUgY2FuUGlja011c2hyb29tOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8g54Ok5oqr6JapXHJcbiAgICBwcml2YXRlIGlzQmFraW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJha2VQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNOZWFyT3ZlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyB0YWcgPSAxMlxyXG5cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsYXN0SW50ZXJhY3RUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpbnRlcmFjdENvb2xkb3duOiBudW1iZXIgPSAwLjI7IC8vIDAuMiDnp5LlhrfljbvmmYLplpNcclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJiKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIOaJvuS4jeWIsCBSaWdpZEJvZHkyRCDntYTku7bvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfYmFja1wiKTtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IEtleWJvYXJkQ29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IHRoaXMuY2hvcEJhci5nZXRDaGlsZEJ5TmFtZShcIkZpbGxiYXJcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNob3BGaWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIOaJvuS4jeWIsCBGaWxsYmFy77yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7IC8vIOmgkOioreS4jemhr+ekulxyXG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSB0aGlzLnVpTWFuYWdlcj8uZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdGhpcy5pbnB1dC5nZXRSdW5IZWxkKCk7XHJcblxyXG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkICogdGhpcy5ydW5NdWx0aXBsaWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDinIUg6LeR5q2l54uA5oWL5LiL55Si55Sf57KJ5aG1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJ1bkR1c3RUaW1lciA+PSB0aGlzLnJ1bkR1c3RJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduUnVuRHVzdCgpOyAgLy8g4qyF77iPIOiHquiogueahOeyieWhteWHveaVuFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDsgIC8vIOmdnui3keatpeeLgOaFi+WwseS4jeWGkueFmVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOeJqeeQhuW8leaTjueahCBsaW5lYXJWZWxvY2l0eSDmjqfliLbnp7vli5VcclxuICAgICAgICAgICAgbGV0IGZpbmFsU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bChmaW5hbFNwZWVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9iYWNrXCIgOiBcImdpcmxfd2Fsa19iYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1blwiIDogXCJnaXJsX2lkbGVfd2Fsa1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WLle+8iOmAn+W6puatuOmbtu+8iVxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmkq3mlL7pnZzmraLli5XnlatcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbnRlcmFjdFRpbWUgPiB0aGlzLmludGVyYWN0Q29vbGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiYgdGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggPT0gbnVsbCAmJiAhdGhpcy5pc0Nob3BwaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSBwcm9ncmVzc1JhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNob3BQcm9ncmVzcyA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDaG9wcGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxDaG9wcGluZygpOyAgLy8g546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g54OY54Ok5rWB56iLXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiZcclxuICAgICAgICAgICAgdGhpcy5pc05lYXJPdmVuICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXHJcbiAgICAgICAgICAgIHRoaXMuaXNQaXp6YSh0aGlzLmNhcnJpZWREb3VnaC5uYW1lKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSAmJiAvLyDinIUg5LiN6IO95piv5bey54Ok6YGO55qEXHJcbiAgICAgICAgICAgICF0aGlzLmlzQmFraW5nXHJcbiAgICAgICAgKXtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIneasoeaMieS4i++8jOmWi+Wni+eDmOeDpFxyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hY3RpdmUgPSBmYWxzZTsgLy8g6K6T5oqr6Jap5raI5aSxXHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflKUg5oqr6Jap5pS+5YWl54Ok566x5LitLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDku6Xng5jng6Tmj5DnpLpcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggJiZcclxuICAgICAgICAgICAgdGhpcy5pc1BpenphKHRoaXMuY2FycmllZERvdWdoLm5hbWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8g6YCZ5aGK5oqr6Jap5bey57aT54Ok6YGO5LqG77yM5LiN6IO96YeN6KSH54OY54Ok77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWtpbmcgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHRoaXMuYmFrZVByb2dyZXNzIC8gMywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcmF0aW87XHJcblxyXG4gICAgICAgICAgICAvLyDlhpLnhZnpgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5zbW9rZVRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbW9rZVRpbWVyID49IHRoaXMuc21va2VJbnRlcnZhbCAmJiB0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlblBvaW50ID0gdGhpcy5uZWFyYnlPdmVuLmdldENoaWxkQnlOYW1lKFwib3Zlbl9wb2ludFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbW9rZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc21va2VFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtb2tlLm5hbWUgPSBcIlNtb2tlRWZmZWN0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gb3ZlblBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAtNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5uZWFyYnlPdmVuLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmJ5T3Zlbi5hZGRDaGlsZChzbW9rZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SqCDng5jng6TkuK3lhpLnhZnvvIjkvoboh6ogb3Zlbl9wb2ludO+8iVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBvdmVuX3BvaW5077yM54Sh5rOV5YaS54WZXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlUHJvZ3Jlc3MgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hCYWtpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Jha2luZyAmJiAhdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDng5jng6TkuK3mlrfvvIFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQmFraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGl2ZXIgJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g5qqi5p+l5piv5ZCm6IiH6I+c5Zau5bCN5oeJXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRTbG90ID0gdGhpcy5tZW51TWFuYWdlci5zbG90cy5maW5kKHNsb3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROYW1lID09PSBwaXp6YU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlh7rppJDmiJDlip9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKDMwKTsgIC8vIOWBh+ioreavj+mBk+iPnOWKoCAxMCDliIZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RlbGl2ZXJ5RWZmZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmdTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ibGluZ1NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUJhciA9IHRoaXMudWlNYW5hZ2VyLmdldENvbXBvbmVudChcIk1lbnVCYXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVudUJhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVCYXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDmiJDlip/lh7rppJDvvJpcIiArIHBpenphTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5q2k5oqr6Jap5LiN5Zyo6I+c5Zau5LiK77yM5LiN6IO95Ye66aSQ77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGF3blJ1bkR1c3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHVzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucnVuRHVzdEVmZmVjdFByZWZhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyAvLyDlj5blvpcgVmVjM1xyXG4gICAgICAgIHBvcy55IC09IDQwOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnqI3lvq7lvoDkuIvlgY/np7vvvIzmqKHmk6zohbPlupXnsonlobVcclxuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7ICAgICAgICAgICAgICAvLyDinIUg5YKz5YWlIFZlYzNcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChkdXN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlzUGl6emEobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFtcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCJdLmluY2x1ZGVzKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbEJha2luZygpIHtcclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7IFxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmlzaEJha2luZygpIHtcclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyDlnKjmiqvolqnkuIrliqDlhpLnhZnnibnmlYhcclxuICAgICAgICAgICAgY29uc3Qgc3RlYW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpenphU3RlYW1QcmVmYWIpO1xyXG4gICAgICAgICAgICBzdGVhbS5uYW1lID0gXCJQaXp6YVN0ZWFtXCI7XHJcbiAgICAgICAgICAgIHN0ZWFtLnNldFBvc2l0aW9uKGNjLnYzKDAsIDQwLCAwKSk7IC8vIOWGkueFmeS9jee9rueojeW+ruWcqOaKq+iWqeS4iuaWuVxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hZGRDaGlsZChzdGVhbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8g54OY54Ok57WQ5p2f77yM5riF6Zmk5YaS54WZXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJTbW9rZUVmZmVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiU21va2VFZmZlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDinIUgJHt0aGlzLmNhcnJpZWREb3VnaC5uYW1lfSDng5jng6TlrozmiJDvvIFgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJ5QXNzZW1ibGVQaXp6YShwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubmFtZSk7XHJcbiAgICAgICAgY29uc3QgaGFzRmxhdGJyZWFkID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiRmxhdGJyZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIkdyYXRlZENoZWVzZVwiKTtcclxuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIlNsaWNlTXVzaHJvb21cIik7XHJcbiAgICAgICAgY29uc3QgaGFzUFAgPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJTbGljZVBQXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWhhc0ZsYXRicmVhZCkgcmV0dXJuOyAvLyDlv4XpoIjlhYjmnIkgZmxhdGJyZWFkIOaJjeiDveWQiOaIkFxyXG5cclxuICAgICAgICBsZXQgcGl6emE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaGFzQ2hlZXNlICYmICFoYXNNdXNocm9vbSAmJiAhaGFzUFApIHtcclxuICAgICAgICAgICAgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoZWVzZVBpenphUHJlZmFiKTtcclxuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwiY2hlZXNlX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNNdXNocm9vbSAmJiAhaGFzQ2hlZXNlICYmICFoYXNQUCkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QaXp6YVByZWZhYik7XHJcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcIm11c2hyb29tX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNQUCAmJiAhaGFzQ2hlZXNlICYmICFoYXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVwcGVyUGl6emFQcmVmYWIpO1xyXG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJwZXBwZXJfcGl6emFcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIOWwmuS4jeaUr+aPtOikh+WQiOWPo+WRsyBwaXp6YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yiq6Zmk5Y6f5paZXHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKFtcIkZsYXRicmVhZFwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlNsaWNlTXVzaHJvb21cIiwgXCJTbGljZVBQXCJdLmluY2x1ZGVzKGNoaWxkLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yqg5YWlIHBpenphXHJcbiAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChwaXp6YSk7XHJcbiAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gcGFyZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICBpZiAoZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gcGFyZW50Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIHBpenphLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn42VIOWQiOaIkCAke3BpenphLm5hbWV9IOaIkOWKn++8gWApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYW5jZWxDaG9wcGluZygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfm5Eg546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq177yBXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Q2hvcHBpbmcoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREcm9wVGFyZ2V0IHx8IHRoaXMuY3VycmVudERyb3BUYWcgIT09IDgpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDlj6rog73lnKjnoKfmnb/kuIrvvIh0YWcgPSA477yJ5YiH6aOf5p2Q77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYXNEb3VnaCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiRG91Z2hcIikpO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQ2hlZXNlXCIpKTtcclxuICAgICAgICBjb25zdCBoYXNQUCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIlBQXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc011c2hyb29tID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IFwiTXVzaHJvb21cIik7XHJcblxyXG5cclxuICAgICAgICBpZiAoIWhhc0RvdWdoICYmICFoYXNDaGVlc2UgJiYgIWhhc1BQICYmICFoYXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOmAmeWAi+egp+adv+S4iuaykuaciem6teWcmO+8jOS4jeiDveWIh++8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTsgIC8vIOmhr+ekuuWcqOinkuiJsumgreS4ilxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SqIOWcqOato+eiuuegp+adv+S4iumWi+Wni+WIh+m6teWcmO+8gVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBmaW5pc2hDaG9wcGluZygpIHtcclxuICAgICAgICBsZXQgaXNDaGVlc2UgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNEb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc1BQID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzTXVzaHJvb20gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJEb3VnaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc0RvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIkNoZWVzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc0NoZWVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJQUFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc1BQID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIk11c2hyb29tXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlzTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNEb3VnaCkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5mbGF0YnJlYWRQcmVmYSk7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiRmxhdGJyZWFkXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0NoZWVzZSkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmF0ZWRDaGVlc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkdyYXRlZENoZWVzZVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQUCkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbGljZXBwUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZVBQXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc011c2hyb29tKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsaWNlbXVzaHJvb21QcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIlNsaWNlTXVzaHJvb21cIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAobmV3SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmFkZENoaWxkKG5ld0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ruWIh+WujOeahOeJqeWTge+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIOWIh+WujCAke25ld0l0ZW0ubmFtZX3vvIzmlL7nva7miJDlip/vvIFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdHJ5SW50ZXJhY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja011c2hyb29tICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtdXNocm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobXVzaHJvb20pO1xyXG4gICAgICAgICAgICBtdXNocm9vbS5uYW1lID0gXCJNdXNocm9vbVwiO1xyXG4gICAgICAgICAgICBtdXNocm9vbS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG11c2hyb29tO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5ou/6LW36JiR6I+HXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja1BQICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHBQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHApO1xyXG4gICAgICAgICAgICBwcC5uYW1lID0gXCJQUFwiO1xyXG4gICAgICAgICAgICBwcC5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBwO1xyXG5cclxuICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42FIOaLv+i1t+eVquiMhFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDaGVlc2UgJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWVzZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoZWVzZSk7XHJcbiAgICAgICAgICAgIGNoZWVzZS5uYW1lID0gXCJDaGVlc2VcIjtcclxuICAgICAgICAgICAgY2hlZXNlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gY2hlZXNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5ou/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tEb3VnaCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgZG91Z2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRvdWdoUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcclxuICAgICAgICAgICAgZG91Z2gubmFtZSA9IFwiRG91Z2hcIjtcclxuICAgICAgICAgICAgZG91Z2guc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaLv+i1t+m6teWcmFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgLy8g8J+UhCDmkr/otbfku7vkvZUgbmFtZSDku6Xpo5/mnZDplovpoK3nmoTmnbHopb9cclxuICAgICAgICAgICAgY29uc3QgcGlja2FibGUgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLmZpbmQoY2hpbGQgPT5cclxuICAgICAgICAgICAgICAgICBbXCJEb3VnaFwiLCBcIkZsYXRicmVhZFwiLCBcIkNoZWVzZVwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlRvbWF0b1wiLCBcIlBpenphU2F1Y2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQUFwiLCBcIlNsaWNlUFBcIiwgXCJNdXNocm9vbVwiLCBcIlNsaWNlTXVzaHJvb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCIgLy8g4oaQIOWKoOmAmeS4ieWAi1xyXG4gICAgICAgICAgICAgICAgICAgIF0uc29tZShwcmVmaXggPT5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgocHJlZml4KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAocGlja2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gcGlja2FibGU7XHJcbiAgICAgICAgICAgICAgICBwaWNrYWJsZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGlja2FibGUpO1xyXG4gICAgICAgICAgICAgICAgcGlja2FibGUuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmkr/otbfmoYzkuIrnmoTnianlk4HvvJpcIiArIHBpY2thYmxlLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLinYwg5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ru+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbHJlYWR5SGFzT3RoZXJUb3BwaW5ncyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZHJvcFBvaW50ICYmXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICE9PSBcIkZsYXRicmVhZFwiICYmIC8vIOKchSDlhYHoqLHmnIkgRmxhdGJyZWFkIOWcqOWgtFxyXG4gICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcclxuICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXHJcbiAgICAgICAgICAgICAgICBcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCIgLy8g4oaQIOWKoOmAmeS4ieWAi1xyXG4gICAgICAgICAgICAgICAgXS5zb21lKHR5cGUgPT5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICYmIGNoaWxkLm5hbWUuc3RhcnRzV2l0aCh0eXBlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0ZsYXRicmVhZCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIkZsYXRicmVhZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxyZWFkeUhhc1NhbWVUeXBlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkICE9PSBkcm9wUG9pbnQgJiYgY2hpbGQubmFtZSA9PT0gdGhpcy5jYXJyaWVkRG91Z2gubmFtZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNGbGF0YnJlYWQgJiYgYWxyZWFkeUhhc1NhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g54Sh5rOV5pS+572u77yM5qGM5LiK5bey5pyJ55u45ZCM6aOf5p2Q77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g4pyFIOaUvue9rumCj+i8r1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5wYXJlbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5pS+5LiL54mp5ZOB5YiwIERyb3BQb2ludO+8mlwiICsgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOKchSDlmJfoqablkIjmiJAgUGl6emHvvIjmlL7nva7lvozop7jnmbzvvIlcclxuICAgICAgICAgICAgdGhpcy50cnlBc3NlbWJsZVBpenphKHRoaXMuY3VycmVudERyb3BUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxpdmVyeUVmZmVjdCgpIHtcclxuICAgICAgICAvLyDpo4TlrZfmlYjmnpxcclxuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcclxuICAgICAgICB0aXBzTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjIoMCwgMTAwKSkpOyAvLyDlh7rnj77lnKjop5LoibLkuIrmlrlcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRpcHNOb2RlKTtcclxuXHJcbiAgICAgICAgLy8g6aOE5rWuICsg5reh5Ye6XHJcbiAgICAgICAgY2MudHdlZW4odGlwc05vZGUpXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MCwgMCksIG9wYWNpdHk6IC0yNTUgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIOeykuWtkOeJueaViFxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc1BhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDaGVlc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5Y+v5Lul5pK/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYUg5Y+v5Lul5pK/6LW355Wq6IyE77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ecm9wRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBvdGhlckNvbGxpZGVyLnRhZzsgIC8vIOiomOS9j+ebruWJjeeisOWIsOWTquWAiyB0YWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+loyDmjqXop7jliLDnoKfmnb8gVGFnID1cIiwgb3RoZXJDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhZyA9IDExO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZWFyT3ZlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaOpeinuOWIsOeDpOeuse+8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NoZWVzZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDlj6/ku6Xmkr/otbfomJHoj4fvvIFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTAgfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBudWxsOyAgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSBcclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19