
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
        _this.chopSound = null;
        _this.chopSoundTimer = 0;
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
        _this.bakeSound = null;
        _this.bakeSoundId = -1;
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
        // 💡 直接使用鍵盤控制器！
        this.input = new KeyboardControls_1.KeyboardControls();
        console.log("⌨️ 使用 KeyboardControls！");
        var barNode = cc.instantiate(this.chopBarPrefab);
        this.node.addChild(barNode);
        barNode.setPosition(cc.v2(0, 80));
        this.chopBar = barNode;
        this.chopFill = barNode.getChildByName("Fillbar");
        if (!this.chopFill) {
            cc.error("❌ 找不到 Fillbar！");
        }
        barNode.active = false;
        this.menuManager = (_a = this.uiManager) === null || _a === void 0 ? void 0 : _a.getComponent("MenuBar");
    };
    PlayerController.prototype.update = function (dt) {
        var dir = this.input.getMoveDirection();
        if (!dir.equals(cc.Vec2.ZERO)) {
            this.rb.linearVelocity = dir.normalize().mul(this.speed);
        }
        else {
            this.rb.linearVelocity = cc.Vec2.ZERO;
        }
        console.log("\uD83D\uDCE6 \u63A7\u5236\u5668\u8F38\u51FA\u7684\u65B9\u5411\u662F\uFF1Ax=" + dir.x + ", y=" + dir.y);
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
                this.chopSoundTimer += dt;
                if (this.chopSoundTimer >= 0.2) { // 每 0.2 秒
                    this.chopSoundTimer = 0;
                    if (this.chopSound) {
                        cc.audioEngine.playEffect(this.chopSound, false);
                    }
                }
                if (this.chopProgress >= 2) {
                    this.finishChopping();
                }
            }
            else {
                this.cancelChopping(); // 玩家放開空白鍵，中斷切麵
            }
        }
        else {
            this.chopSoundTimer = 0;
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
                this.menuManager.addScore(50); // 假設每道菜加 10 分
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
        var pos = this.node.getPosition();
        pos.y -= 40;
        dust.setPosition(pos);
        this.node.parent.addChild(dust);
    };
    PlayerController.prototype.isPizza = function (name) {
        return ["cheese_pizza", "mushroom_pizza", "pepper_pizza"].includes(name);
    };
    PlayerController.prototype.cancelBaking = function () {
        if (this.bakeSoundId !== -1) {
            cc.audioEngine.stopEffect(this.bakeSoundId);
            this.bakeSoundId = -1;
        }
        this.isBaking = false;
        this.bakeProgress = 0;
        this.smokeTimer = 0;
        this.chopBar.active = false;
        if (this.carriedDough)
            this.carriedDough.active = true;
    };
    PlayerController.prototype.finishBaking = function () {
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
            if (this.bakeSoundId !== -1) {
                cc.audioEngine.stopEffect(this.bakeSoundId);
                this.bakeSoundId = -1;
            }
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
        property(cc.Prefab)
    ], PlayerController.prototype, "chopBarPrefab", void 0);
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
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "chopSound", void 0);
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
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "bakeSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL1BsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBSWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc3pCQztRQXB6QkcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQix3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUVuQyxLQUFLO1FBQ0csZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFXLEdB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QUMsTUFBTSxDQUFDOzhEQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNGO0lBUy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ2tCO0lBUXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3REFDRDtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7eURBQ0E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dEQUNEO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt1REFDRjtJQXhGZCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXN6QnBDO0lBQUQsdUJBQUM7Q0F0ekJELEFBc3pCQyxDQXR6QjZDLEVBQUUsQ0FBQyxTQUFTLEdBc3pCekQ7a0JBdHpCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGRvdWdoUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBmbGF0YnJlYWRQcmVmYTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2hvcEJhclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDsgXG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ3JhdGVkQ2hlZXNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2xpY2VwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNsaWNlbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNoZWVzZVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBtdXNocm9vbVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwZXBwZXJQaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc21va2VFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzbW9rZVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdGlwc0xhYmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0aXBzUGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBpenphU3RlYW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgY2hvcFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjaG9wU291bmRUaW1lcjogbnVtYmVyID0gMDtcblxuICAgIC8vIOi3keatpVxuICAgIHByaXZhdGUgaXNSdW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBydW5NdWx0aXBsaWVyOiBudW1iZXIgPSAxLjM7IC8vIOi3keatpemAn+W6puWAjeeOh1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcnVuRHVzdEVmZmVjdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHByaXZhdGUgcnVuRHVzdFRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcnVuRHVzdEludGVydmFsOiBudW1iZXIgPSAwLjI7ICAvLyDmr48gMC4yIOenkuWGkuS4gOasoVxuXG5cbiAgICAvLyBBdWRpb1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGJsaW5nU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBwaWNrdXBTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHBsYWNlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBiYWtlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgYmFrZVNvdW5kSWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgY2FuRGVsaXZlcjogYm9vbGVhbiA9IGZhbHNlOyAgIC8vIOaYr+WQpueisOWIsOWHuumkkOWPsO+8iHRhZyA577yJXG4gICAgcHJpdmF0ZSBtZW51TWFuYWdlcjogYW55ID0gbnVsbDsgICAgICAgLy8g5a+m6ZqbIE1lbnVCYXIg6IWz5pys5byV55SoXG5cblxuICAgIHByaXZhdGUgbmVhcmJ5T3ZlbjogY2MuTm9kZSA9IG51bGw7IC8vIOiomOmMhOebruWJjemdoOi/keWTquWAi+eDpOeusVxuXG5cbiAgICBwcml2YXRlIHNtb2tlVGltZXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzbW9rZUludGVydmFsOiBudW1iZXIgPSAwLjU7IC8vIOavjyAwLjUg56eS5YaS5LiA5qyh54WZXG5cbiAgICBwcml2YXRlIGlucHV0OiBJSW5wdXRDb250cm9scyA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGxhc3REaXI6IGNjLlZlYzIgPSBjYy52MigwLCAtMSk7IC8vIOmgkOioreWQkeS4i++8iOWJje+8iVxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XG5cbiAgICAvLyDpurXlnJhcbiAgICBwcml2YXRlIGNhblBpY2tEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2FuRHJvcERvdWdoOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYXJyaWVkRG91Z2g6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudERyb3BUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudERyb3BUYWc6IG51bWJlciA9IG51bGw7IFxuICAgIHByaXZhdGUgaXNDaG9wcGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2hvcFByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2hvcEZpbGw6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyDotbflj7hcbiAgICBwcml2YXRlIGNhblBpY2tDaGVlc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY2FuUGlja1BQOiBib29sZWFuID0gZmFsc2U7IC8vIHRhZyA1IOaLvyBwcCDnmoQgZmxhZ1xuXG4gICAgcHJpdmF0ZSBjYW5QaWNrTXVzaHJvb206IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIOeDpOaKq+iWqVxuICAgIHByaXZhdGUgaXNCYWtpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGJha2VQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGlzTmVhck92ZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gdGFnID0gMTJcblxuICAgIFxuICAgIHByaXZhdGUgbGFzdEludGVyYWN0VGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGludGVyYWN0Q29vbGRvd246IG51bWJlciA9IDAuMjsgLy8gMC4yIOenkuWGt+WNu+aZgumWk1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgaWYgKCF0aGlzLnJiKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgUmlnaWRCb2R5MkQg57WE5Lu277yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdpcmxfaWRsZV9iYWNrXCIpO1xuXG4gICAgICAgIC8vIPCfkqEg55u05o6l5L2/55So6Y2155uk5o6n5Yi25Zmo77yBXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgS2V5Ym9hcmRDb250cm9scygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuKMqO+4jyDkvb/nlKggS2V5Ym9hcmRDb250cm9sc++8gVwiKTtcblxuICAgICAgICBjb25zdCBiYXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaG9wQmFyUHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJhck5vZGUpO1xuICAgICAgICBiYXJOb2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7XG4gICAgICAgIHRoaXMuY2hvcEJhciA9IGJhck5vZGU7XG5cbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IGJhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xuICAgICAgICBpZiAoIXRoaXMuY2hvcEZpbGwpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi4p2MIOaJvuS4jeWIsCBGaWxsYmFy77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIGJhck5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IHRoaXMudWlNYW5hZ2VyPy5nZXRDb21wb25lbnQoXCJNZW51QmFyXCIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG5cbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5pbnB1dC5nZXRNb3ZlRGlyZWN0aW9uKCk7XG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhg8J+TpiDmjqfliLblmajovLjlh7rnmoTmlrnlkJHmmK/vvJp4PSR7ZGlyLnh9LCB5PSR7ZGlyLnl9YCk7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdGhpcy5pbnB1dC5nZXRSdW5IZWxkKCk7XG5cbiAgICAgICAgaWYgKCFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCAqIHRoaXMucnVuTXVsdGlwbGllcik7XG5cbiAgICAgICAgICAgICAgICAvLyDinIUg6LeR5q2l54uA5oWL5LiL55Si55Sf57KJ5aG1XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgKz0gZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVuRHVzdFRpbWVyID49IHRoaXMucnVuRHVzdEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3blJ1bkR1c3QoKTsgIC8vIOKshe+4jyDoh6roqILnmoTnsonlobXlh73mlbhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwOyAgLy8g6Z2e6LeR5q2l54uA5oWL5bCx5LiN5YaS54WZXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDkvb/nlKjniannkIblvJXmk47nmoQgbGluZWFyVmVsb2NpdHkg5o6n5Yi256e75YuVXG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKGZpbmFsU3BlZWQpO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3REaXIgPSBkaXIuY2xvbmUoKTtcblxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlyLnkpID4gTWF0aC5hYnMoZGlyLngpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpci55ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9iYWNrXCIgOiBcImdpcmxfd2Fsa19iYWNrXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuXCIgOiBcImdpcmxfd2Fsa1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkaXIueCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fcmlnaHRcIiA6IFwiZ2lybF93YWxrX3JpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9sZWZ0XCIgOiBcImdpcmxfd2Fsa19sZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlgZzmraLnp7vli5XvvIjpgJ/luqbmrbjpm7bvvIlcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcblxuICAgICAgICAgICAgLy8g5pKt5pS+6Z2c5q2i5YuV55WrXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0RGlyLnkpID4gTWF0aC5hYnModGhpcy5sYXN0RGlyLngpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueCA+IDAgPyBcImdpcmxfaWRsZV9yaWdodFwiIDogXCJnaXJsX2lkbGVfbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyppZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xuICAgICAgICB9Ki9cblxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0SW50ZXJhY3RUaW1lID4gdGhpcy5pbnRlcmFjdENvb2xkb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJiB0aGlzLmNhbkRyb3BEb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaCA9PSBudWxsICYmICF0aGlzLmlzQ2hvcHBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvcFByb2dyZXNzICs9IGR0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcHJvZ3Jlc3NSYXRpbztcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgKz0gZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kVGltZXIgPj0gMC4yKSB7ICAvLyDmr48gMC4yIOenklxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3BTb3VuZFRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2hvcFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaG9wUHJvZ3Jlc3MgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENob3BwaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbENob3BwaW5nKCk7ICAvLyDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDng5jng6TmtYHnqItcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXG4gICAgICAgICAgICB0aGlzLmlzUGl6emEodGhpcy5jYXJyaWVkRG91Z2gubmFtZSkgJiZcbiAgICAgICAgICAgICF0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdICYmIC8vIOKchSDkuI3og73mmK/lt7Lng6TpgY7nmoRcbiAgICAgICAgICAgICF0aGlzLmlzQmFraW5nXG4gICAgICAgICl7XG5cbiAgICAgICAgICAgIC8vIOWIneasoeaMieS4i++8jOmWi+Wni+eDmOeDpFxuICAgICAgICAgICAgdGhpcy5pc0Jha2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJha2VTb3VuZCAmJiB0aGlzLmJha2VTb3VuZElkID09PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJha2VTb3VuZCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IGZhbHNlOyAvLyDorpPmiqvolqnmtojlpLFcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaKq+iWqeaUvuWFpeeDpOeuseS4rS4uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDku6Xng5jng6Tmj5DnpLpcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXG4gICAgICAgICAgICB0aGlzLmlzUGl6emEodGhpcy5jYXJyaWVkRG91Z2gubmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKaoO+4jyDpgJnloYrmiqvolqnlt7LntpPng6TpgY7kuobvvIzkuI3og73ph43opIfng5jng6TvvIFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmlzQmFraW5nICYmIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgKz0gZHQ7XG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHRoaXMuYmFrZVByb2dyZXNzIC8gMywgMSk7XG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IHJhdGlvO1xuXG4gICAgICAgICAgICAvLyDlhpLnhZnpgo/ovK9cbiAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb2tlVGltZXIgPj0gdGhpcy5zbW9rZUludGVydmFsICYmIHRoaXMubmVhcmJ5T3Zlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdmVuUG9pbnQgPSB0aGlzLm5lYXJieU92ZW4uZ2V0Q2hpbGRCeU5hbWUoXCJvdmVuX3BvaW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChvdmVuUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc21va2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNtb2tlRWZmZWN0UHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgc21va2UubmFtZSA9IFwiU21va2VFZmZlY3RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IG92ZW5Qb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgLTUpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5lYXJieU92ZW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNtb2tlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuLmFkZENoaWxkKHNtb2tlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfkqgg54OY54Ok5Lit5YaS54WZ77yI5L6G6IeqIG92ZW5fcG9pbnTvvIlcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBvdmVuX3BvaW5077yM54Sh5rOV5YaS54WZXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYmFrZVByb2dyZXNzID49IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEJha2luZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNCYWtpbmcgJiYgIXRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5uRIOeDmOeDpOS4reaWt++8gVwiKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQmFraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FuRGVsaXZlciAmJiB0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpICYmIHRoaXMuY2FycmllZERvdWdoKSB7XG4gICAgICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xuXG4gICAgICAgICAgICAvLyDmqqLmn6XmmK/lkKboiIfoj5zllq7lsI3mh4lcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRTbG90ID0gdGhpcy5tZW51TWFuYWdlci5zbG90cy5maW5kKHNsb3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzbG90LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROYW1lID0gc2xvdC5jaGlsZHJlblswXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROYW1lID09PSBwaXp6YU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAvLyDlh7rppJDmiJDlip9cbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIG1hdGNoZWRTbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5hZGRTY29yZSg1MCk7ICAvLyDlgYfoqK3mr4/pgZPoj5zliqAgMTAg5YiGXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsaXZlcnlFZmZlY3QoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJsaW5nU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJsaW5nU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZW51QmFyID0gdGhpcy51aU1hbmFnZXIuZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVudUJhcikge1xuICAgICAgICAgICAgICAgICAgICBtZW51QmFyLmNoZWNrQW5kRmlsbFNsb3RzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDmiJDlip/lh7rppJDvvJpcIiArIHBpenphTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdjCDmraTmiqvolqnkuI3lnKjoj5zllq7kuIrvvIzkuI3og73lh7rppJDvvIFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3Bhd25SdW5EdXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGR1c3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpO1xuXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyBcbiAgICAgICAgcG9zLnkgLT0gNDA7ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7ICAgICAgICAgICAgICBcblxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGR1c3QpO1xuICAgIH1cblxuXG5cbiAgICBpc1BpenphKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gW1wiY2hlZXNlX3BpenphXCIsIFwibXVzaHJvb21fcGl6emFcIiwgXCJwZXBwZXJfcGl6emFcIl0uaW5jbHVkZXMobmFtZSk7XG4gICAgfVxuXG4gICAgY2FuY2VsQmFraW5nKCkge1xuICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XG4gICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Jha2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7IFxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaCkgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIGZpbmlzaEJha2luZygpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFrZVNvdW5kSWQgIT09IC0xKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuYmFrZVNvdW5kSWQpO1xuICAgICAgICAgICAgdGhpcy5iYWtlU291bmRJZCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNCYWtpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XG4gICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoW1wiYmFrZWRcIl0gPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyDlnKjmiqvolqnkuIrliqDlhpLnhZnnibnmlYhcbiAgICAgICAgICAgIGNvbnN0IHN0ZWFtID0gY2MuaW5zdGFudGlhdGUodGhpcy5waXp6YVN0ZWFtUHJlZmFiKTtcbiAgICAgICAgICAgIHN0ZWFtLm5hbWUgPSBcIlBpenphU3RlYW1cIjtcbiAgICAgICAgICAgIHN0ZWFtLnNldFBvc2l0aW9uKGNjLnYzKDAsIDQwLCAwKSk7IC8vIOWGkueFmeS9jee9rueojeW+ruWcqOaKq+iWqeS4iuaWuVxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWRkQ2hpbGQoc3RlYW0pO1xuXG5cbiAgICAgICAgICAgIC8vIOeDmOeDpOe1kOadn++8jOa4hemZpOWGkueFmVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJTbW9rZUVmZmVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5lYXJieU92ZW4pIHtcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3Zlbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJTbW9rZUVmZmVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhg4pyFICR7dGhpcy5jYXJyaWVkRG91Z2gubmFtZX0g54OY54Ok5a6M5oiQ77yBYCk7XG4gICAgfVxuXG5cbiAgICB0cnlBc3NlbWJsZVBpenphKHBhcmVudE5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubmFtZSk7XG4gICAgICAgIGNvbnN0IGhhc0ZsYXRicmVhZCA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIkZsYXRicmVhZFwiKTtcbiAgICAgICAgY29uc3QgaGFzQ2hlZXNlID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiR3JhdGVkQ2hlZXNlXCIpO1xuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIlNsaWNlTXVzaHJvb21cIik7XG4gICAgICAgIGNvbnN0IGhhc1BQID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiU2xpY2VQUFwiKTtcblxuICAgICAgICBpZiAoIWhhc0ZsYXRicmVhZCkgcmV0dXJuOyAvLyDlv4XpoIjlhYjmnIkgZmxhdGJyZWFkIOaJjeiDveWQiOaIkFxuXG4gICAgICAgIGxldCBwaXp6YTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGhhc0NoZWVzZSAmJiAhaGFzTXVzaHJvb20gJiYgIWhhc1BQKSB7XG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUGl6emFQcmVmYWIpO1xuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwiY2hlZXNlX3BpenphXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzTXVzaHJvb20gJiYgIWhhc0NoZWVzZSAmJiAhaGFzUFApIHtcbiAgICAgICAgICAgIHBpenphID0gY2MuaW5zdGFudGlhdGUodGhpcy5tdXNocm9vbVBpenphUHJlZmFiKTtcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcIm11c2hyb29tX3BpenphXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzUFAgJiYgIWhhc0NoZWVzZSAmJiAhaGFzTXVzaHJvb20pIHtcbiAgICAgICAgICAgIHBpenphID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXBwZXJQaXp6YVByZWZhYik7XG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJwZXBwZXJfcGl6emFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8g5bCa5LiN5pSv5o+06KSH5ZCI5Y+j5ZGzIHBpenphXG4gICAgICAgIH1cblxuICAgICAgICAvLyDliKrpmaTljp/mlplcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmIChbXCJGbGF0YnJlYWRcIiwgXCJHcmF0ZWRDaGVlc2VcIiwgXCJTbGljZU11c2hyb29tXCIsIFwiU2xpY2VQUFwiXS5pbmNsdWRlcyhjaGlsZC5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5Yqg5YWlIHBpenphXG4gICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQocGl6emEpO1xuICAgICAgICBjb25zdCBkcm9wUG9pbnQgPSBwYXJlbnROb2RlLmdldENoaWxkQnlOYW1lKFwiRHJvcFBvaW50XCIpO1xuICAgICAgICBpZiAoZHJvcFBvaW50KSB7XG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGRyb3BQb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBwYXJlbnROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgIHBpenphLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn42VIOWQiOaIkCAke3BpenphLm5hbWV9IOaIkOWKn++8gWApO1xuICAgIH1cblxuXG4gICAgY2FuY2VsQ2hvcHBpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNDaG9wcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfm5Eg546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq177yBXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0Q2hvcHBpbmcoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERyb3BUYXJnZXQgfHwgdGhpcy5jdXJyZW50RHJvcFRhZyAhPT0gOCkge1xuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDlj6rog73lnKjnoKfmnb/kuIrvvIh0YWcgPSA477yJ5YiH6aOf5p2Q77yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFzRG91Z2ggPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIkRvdWdoXCIpKTtcbiAgICAgICAgY29uc3QgaGFzQ2hlZXNlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJDaGVlc2VcIikpO1xuICAgICAgICBjb25zdCBoYXNQUCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIlBQXCIpO1xuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIk11c2hyb29tXCIpO1xuXG5cbiAgICAgICAgaWYgKCFoYXNEb3VnaCAmJiAhaGFzQ2hlZXNlICYmICFoYXNQUCAmJiAhaGFzTXVzaHJvb20pIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g6YCZ5YCL56Cn5p2/5LiK5rKS5pyJ6bq15ZyY77yM5LiN6IO95YiH77yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyA9IDA7XG5cbiAgICAgICAgdGhpcy5jaG9wQmFyLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5jaG9wQmFyLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7ICAvLyDpoa/npLrlnKjop5LoibLpoK3kuIpcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIvCflKog5Zyo5q2j56K656Cn5p2/5LiK6ZaL5aeL5YiH6bq15ZyY77yBXCIpO1xuICAgIH1cblxuXG5cblxuICAgIGZpbmlzaENob3BwaW5nKCkge1xuICAgICAgICBsZXQgaXNDaGVlc2UgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzRG91Z2ggPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzUFAgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzTXVzaHJvb20gPSBmYWxzZTtcblxuXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiRG91Z2hcIikge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBpc0RvdWdoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJDaGVlc2VcIikge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBpc0NoZWVzZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiUFBcIikge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBpc1BQID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJNdXNocm9vbVwiKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGlzTXVzaHJvb20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3SXRlbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzRG91Z2gpIHtcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZsYXRicmVhZFByZWZhKTtcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiRmxhdGJyZWFkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDaGVlc2UpIHtcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXRlZENoZWVzZVByZWZhYik7XG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkdyYXRlZENoZWVzZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUFApIHtcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsaWNlcHBQcmVmYWIpO1xuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZVBQXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNdXNocm9vbSkge1xuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2xpY2VtdXNocm9vbVByZWZhYik7XG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIlNsaWNlTXVzaHJvb21cIjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKG5ld0l0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQuYWRkQ2hpbGQobmV3SXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRyb3BQb2ludCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJEcm9wUG9pbnRcIik7XG4gICAgICAgICAgICBpZiAoIWRyb3BQb2ludCkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ruWIh+WujOeahOeJqeWTge+8gVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICAgICAgbmV3SXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinIUg5YiH5a6MICR7bmV3SXRlbS5uYW1lfe+8jOaUvue9ruaIkOWKn++8gWApO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cblxuXG4gICAgdHJ5SW50ZXJhY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tNdXNocm9vbSAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcbiAgICAgICAgICAgIGNvbnN0IG11c2hyb29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5tdXNocm9vbVByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobXVzaHJvb20pO1xuICAgICAgICAgICAgbXVzaHJvb20ubmFtZSA9IFwiTXVzaHJvb21cIjtcbiAgICAgICAgICAgIG11c2hyb29tLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG11c2hyb29tO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5ou/6LW36JiR6I+HXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja1BQICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgY29uc3QgcHAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBwUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcCk7XG4gICAgICAgICAgICBwcC5uYW1lID0gXCJQUFwiO1xuICAgICAgICAgICAgcHAuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gcHA7XG5cbiAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhSDmi7/otbfnlarojIRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrQ2hlZXNlICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgY29uc3QgY2hlZXNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaGVlc2VQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoZWVzZSk7XG4gICAgICAgICAgICBjaGVlc2UubmFtZSA9IFwiQ2hlZXNlXCI7XG4gICAgICAgICAgICBjaGVlc2Uuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gY2hlZXNlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5ou/6LW36LW35Y+4XCIpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrRG91Z2ggJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XG4gICAgICAgICAgICBjb25zdCBkb3VnaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZG91Z2hQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcbiAgICAgICAgICAgIGRvdWdoLm5hbWUgPSBcIkRvdWdoXCI7XG4gICAgICAgICAgICBkb3VnaC5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaLv+i1t+m6teWcmFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jdXJyZW50RHJvcFRhcmdldCkge1xuICAgICAgICAgICAgLy8g8J+UhCDmkr/otbfku7vkvZUgbmFtZSDku6Xpo5/mnZDplovpoK3nmoTmnbHopb9cbiAgICAgICAgICAgIGNvbnN0IHBpY2thYmxlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5maW5kKGNoaWxkID0+XG4gICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcbiAgICAgICAgICAgICAgICAgICAgXCJQUFwiLCBcIlNsaWNlUFBcIiwgXCJNdXNocm9vbVwiLCBcIlNsaWNlTXVzaHJvb21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiIC8vIOKGkCDliqDpgJnkuInlgItcbiAgICAgICAgICAgICAgICAgICAgXS5zb21lKHByZWZpeCA9PlxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgocHJlZml4KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocGlja2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBpY2thYmxlO1xuICAgICAgICAgICAgICAgIHBpY2thYmxlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGlja2FibGUpO1xuICAgICAgICAgICAgICAgIHBpY2thYmxlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjpIg5pK/6LW35qGM5LiK55qE54mp5ZOB77yaXCIgKyBwaWNrYWJsZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNhbkRyb3BEb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wUG9pbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiRHJvcFBvaW50XCIpO1xuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi4p2MIOaJvuS4jeWIsCBEcm9wUG9pbnTvvIznhKHms5XmlL7nva7vvIFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFscmVhZHlIYXNPdGhlclRvcHBpbmdzID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZHJvcFBvaW50ICYmXG4gICAgICAgICAgICAgICAgY2hpbGQubmFtZSAhPT0gXCJGbGF0YnJlYWRcIiAmJiAvLyDinIUg5YWB6Kix5pyJIEZsYXRicmVhZCDlnKjloLRcbiAgICAgICAgICAgICAgICAgW1wiRG91Z2hcIiwgXCJGbGF0YnJlYWRcIiwgXCJDaGVlc2VcIiwgXCJHcmF0ZWRDaGVlc2VcIiwgXCJUb21hdG9cIiwgXCJQaXp6YVNhdWNlXCIsIFxuICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXG4gICAgICAgICAgICAgICAgXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiIC8vIOKGkCDliqDpgJnkuInlgItcbiAgICAgICAgICAgICAgICBdLnNvbWUodHlwZSA9PlxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICYmIGNoaWxkLm5hbWUuc3RhcnRzV2l0aCh0eXBlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgaGFzRmxhdGJyZWFkID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IFwiRmxhdGJyZWFkXCIpO1xuXG4gICAgICAgIGNvbnN0IGFscmVhZHlIYXNTYW1lVHlwZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQgIT09IGRyb3BQb2ludCAmJiBjaGlsZC5uYW1lID09PSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWhhc0ZsYXRicmVhZCAmJiBhbHJlYWR5SGFzU2FtZVR5cGUpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g54Sh5rOV5pS+572u77yM5qGM5LiK5bey5pyJ55u45ZCM6aOf5p2Q77yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOKchSDmlL7nva7pgo/ovK9cbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLnBhcmVudCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSDmlL7kuIvnianlk4HliLAgRHJvcFBvaW5077yaXCIgKyB0aGlzLmNhcnJpZWREb3VnaC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDinIUg5ZiX6Kmm5ZCI5oiQIFBpenph77yI5pS+572u5b6M6Ke455m877yJXG4gICAgICAgICAgICB0aGlzLnRyeUFzc2VtYmxlUGl6emEodGhpcy5jdXJyZW50RHJvcFRhcmdldCk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc2hvd0RlbGl2ZXJ5RWZmZWN0KCkge1xuICAgICAgICAvLyDpo4TlrZfmlYjmnpxcbiAgICAgICAgY29uc3QgdGlwc05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpcHNMYWJlbFByZWZhYik7XG4gICAgICAgIHRpcHNOb2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChjYy52MigwLCAxMDApKSk7IC8vIOWHuuePvuWcqOinkuiJsuS4iuaWuVxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRpcHNOb2RlKTtcblxuICAgICAgICAvLyDpo4Tmta4gKyDmt6Hlh7pcbiAgICAgICAgY2MudHdlZW4odGlwc05vZGUpXG4gICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgNjAsIDApLCBvcGFjaXR5OiAtMjU1IH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB0aXBzTm9kZS5kZXN0cm95KCkpXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuXG4gICAgICAgIC8vIOeykuWtkOeJueaViFxuICAgICAgICBjb25zdCBlZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpcHNQYXJ0aWNsZVByZWZhYik7XG4gICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcbiAgICB9XG5cblxuXG5cbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW0gPT09IG5hbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0RvdWdoID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ2hlZXNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+ngCDlj6/ku6Xmkr/otbfotbflj7hcIik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja1BQID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhSDlj6/ku6Xmkr/otbfnlarojITvvIFcIik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDlj6/ku6Xmkr/otbfomJHoj4fvvIFcIik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhZyA9IG90aGVyQ29sbGlkZXIudGFnOyAgLy8g6KiY5L2P55uu5YmN56Kw5Yiw5ZOq5YCLIHRhZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfpaMg5o6l6Ke45Yiw56Cn5p2/IFRhZyA9XCIsIG90aGVyQ29sbGlkZXIudGFnKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSAxMTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBvdGhlckNvbGxpZGVyLm5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDEyKSB7XG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuID0gb3RoZXJDb2xsaWRlci5ub2RlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaOpeinuOWIsOeDpOeuse+8gVwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYmFrZVNvdW5kSWQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmJha2VTb3VuZElkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ2hlZXNlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja1BQID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA4IHx8IG90aGVyQ29sbGlkZXIudGFnID09PSAxMCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gbnVsbDsgICBcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xuICAgICAgICAgICAgdGhpcy5pc05lYXJPdmVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5lYXJieU92ZW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG5cbiAgICB9IFxuXG5cblxuXG59XG4iXX0=