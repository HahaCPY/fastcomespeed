
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
        var collider = this.getComponent(cc.PhysicsBoxCollider);
        if (collider) {
            collider.enabled = true;
            collider.apply(); // 更新碰撞器資訊
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBS2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBMnpCQztRQXp6QkcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQix3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUVuQyxLQUFLO1FBQ0csZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFX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Z0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ2U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7dURBQ0Y7SUFTL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpRUFDa0I7SUFRdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dEQUNEO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDQTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7d0RBQ0Q7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNGO0lBeEZkLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMnpCcEM7SUFBRCx1QkFBQztDQTN6QkQsQUEyekJDLENBM3pCNkMsRUFBRSxDQUFDLFNBQVMsR0EyekJ6RDtrQkEzekJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlib2FyZENvbnRyb2xzIH0gZnJvbSBcIi4vS2V5Ym9hcmRDb250cm9sc1wiO1xyXG5pbXBvcnQgeyBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlU2VsZWN0b3IgZnJvbSBcIi4uL3NjcmlwdC9QbGF5ZXJNb2RlU2VsZWN0b3JcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBkb3VnaFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZmxhdGJyZWFkUHJlZmE6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNob3BCYXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaGVlc2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdyYXRlZENoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNsaWNlcHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIG11c2hyb29tUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzbGljZW11c2hyb29tUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaGVlc2VQaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbXVzaHJvb21QaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcGVwcGVyUGl6emFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNtb2tlRWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc21va2VQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpcHNMYWJlbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGlwc1BhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwaXp6YVN0ZWFtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGNob3BTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNob3BTb3VuZFRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIOi3keatpVxyXG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcnVuTXVsdGlwbGllcjogbnVtYmVyID0gMS4zOyAvLyDot5HmraXpgJ/luqblgI3njodcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHJ1bkR1c3RFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBydW5EdXN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJ1bkR1c3RJbnRlcnZhbDogbnVtYmVyID0gMC4yOyAgLy8g5q+PIDAuMiDnp5LlhpLkuIDmrKFcclxuXHJcblxyXG4gICAgLy8gQXVkaW9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmxpbmdTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHBpY2t1cFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgcGxhY2VTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJha2VTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiYWtlU291bmRJZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIGNhbkRlbGl2ZXI6IGJvb2xlYW4gPSBmYWxzZTsgICAvLyDmmK/lkKbnorDliLDlh7rppJDlj7DvvIh0YWcgOe+8iVxyXG4gICAgcHJpdmF0ZSBtZW51TWFuYWdlcjogYW55ID0gbnVsbDsgICAgICAgLy8g5a+m6ZqbIE1lbnVCYXIg6IWz5pys5byV55SoXHJcblxyXG5cclxuICAgIHByaXZhdGUgbmVhcmJ5T3ZlbjogY2MuTm9kZSA9IG51bGw7IC8vIOiomOmMhOebruWJjemdoOi/keWTquWAi+eDpOeusVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNtb2tlVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNtb2tlSW50ZXJ2YWw6IG51bWJlciA9IDAuNTsgLy8g5q+PIDAuNSDnp5LlhpLkuIDmrKHnhZlcclxuXHJcbiAgICBwcml2YXRlIGlucHV0OiBJSW5wdXRDb250cm9scyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBbmltOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBsYXN0RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgLTEpOyAvLyDpoJDoqK3lkJHkuIvvvIjliY3vvIlcclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgLy8g6bq15ZyYXHJcbiAgICBwcml2YXRlIGNhblBpY2tEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5Ecm9wRG91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FycmllZERvdWdoOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudERyb3BUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RHJvcFRhZzogbnVtYmVyID0gbnVsbDsgXHJcbiAgICBwcml2YXRlIGlzQ2hvcHBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2hvcFByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjaG9wRmlsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNob3BCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOi1t+WPuFxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrQ2hlZXNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrUFA6IGJvb2xlYW4gPSBmYWxzZTsgLy8gdGFnIDUg5ou/IHBwIOeahCBmbGFnXHJcblxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrTXVzaHJvb206IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDng6TmiqvolqlcclxuICAgIHByaXZhdGUgaXNCYWtpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYmFrZVByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc05lYXJPdmVuOiBib29sZWFuID0gZmFsc2U7IC8vIHRhZyA9IDEyXHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGxhc3RJbnRlcmFjdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGludGVyYWN0Q29vbGRvd246IG51bWJlciA9IDAuMjsgLy8gMC4yIOenkuWGt+WNu+aZgumWk1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpOyAvLyDmm7TmlrDnorDmkp7lmajos4foqIpcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5yYikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgUmlnaWRCb2R5MkQg57WE5Lu277yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF9pZGxlX2JhY2tcIik7XHJcblxyXG4gICAgICAgIC8vIPCfkqEg55u05o6l5L2/55So6Y2155uk5o6n5Yi25Zmo77yBXHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLijKjvuI8g5L2/55SoIEtleWJvYXJkQ29udHJvbHPvvIFcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNob3BCYXJQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChiYXJOb2RlKTtcclxuICAgICAgICBiYXJOb2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyID0gYmFyTm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IGJhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5jaG9wRmlsbCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgRmlsbGJhcu+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IHRoaXMudWlNYW5hZ2VyPy5nZXRDb21wb25lbnQoXCJNZW51QmFyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+TpiDmjqfliLblmajovLjlh7rnmoTmlrnlkJHmmK/vvJp4PSR7ZGlyLnh9LCB5PSR7ZGlyLnl9YCk7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0aGlzLmlucHV0LmdldFJ1bkhlbGQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiB0aGlzLnJ1bk11bHRpcGxpZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOKchSDot5HmraXni4DmhYvkuIvnlKLnlJ/nsonlobVcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVuRHVzdFRpbWVyID49IHRoaXMucnVuRHVzdEludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25SdW5EdXN0KCk7ICAvLyDirIXvuI8g6Ieq6KiC55qE57KJ5aG15Ye95pW4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwOyAgLy8g6Z2e6LeR5q2l54uA5oWL5bCx5LiN5YaS54WZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5L2/55So54mp55CG5byV5pOO55qEIGxpbmVhclZlbG9jaXR5IOaOp+WItuenu+WLlVxyXG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykgZmluYWxTcGVlZCAqPSB0aGlzLnJ1bk11bHRpcGxpZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKGZpbmFsU3BlZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gZGlyLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDli5XnlavliIfmj5vvvIjoiIfmlrnlkJHliKTmlrfnhKHororvvIlcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpci55KSA+IE1hdGguYWJzKGRpci54KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX2JhY2tcIiA6IFwiZ2lybF93YWxrX2JhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuXCIgOiBcImdpcmxfd2Fsa1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WLle+8iOmAn+W6puatuOmbtu+8iVxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmkq3mlL7pnZzmraLli5XnlatcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbnRlcmFjdFRpbWUgPiB0aGlzLmludGVyYWN0Q29vbGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiYgdGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggPT0gbnVsbCAmJiAhdGhpcy5pc0Nob3BwaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSBwcm9ncmVzc1JhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaG9wU291bmRUaW1lciA+PSAwLjIpIHsgIC8vIOavjyAwLjIg56eSXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9wU291bmRUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jaG9wU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFByb2dyZXNzID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENob3BwaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbENob3BwaW5nKCk7ICAvLyDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyDng5jng6TmtYHnqItcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggJiZcclxuICAgICAgICAgICAgdGhpcy5pc1BpenphKHRoaXMuY2FycmllZERvdWdoLm5hbWUpICYmXHJcbiAgICAgICAgICAgICF0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdICYmIC8vIOKchSDkuI3og73mmK/lt7Lng6TpgY7nmoRcclxuICAgICAgICAgICAgIXRoaXMuaXNCYWtpbmdcclxuICAgICAgICApe1xyXG5cclxuICAgICAgICAgICAgLy8g5Yid5qyh5oyJ5LiL77yM6ZaL5aeL54OY54OkXHJcbiAgICAgICAgICAgIHRoaXMuaXNCYWtpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYmFrZVNvdW5kICYmIHRoaXMuYmFrZVNvdW5kSWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5iYWtlU291bmRJZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5iYWtlU291bmQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IGZhbHNlOyAvLyDorpPmiqvolqnmtojlpLFcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UpSDmiqvolqnmlL7lhaXng6TnrrHkuK0uLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS7peeDmOeDpOaPkOekulxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmXHJcbiAgICAgICAgICAgIHRoaXMuaXNOZWFyT3ZlbiAmJlxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzUGl6emEodGhpcy5jYXJyaWVkRG91Z2gubmFtZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FycmllZERvdWdoW1wiYmFrZWRcIl0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKaoO+4jyDpgJnloYrmiqvolqnlt7LntpPng6TpgY7kuobvvIzkuI3og73ph43opIfng5jng6TvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0Jha2luZyAmJiB0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgKz0gZHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4odGhpcy5iYWtlUHJvZ3Jlc3MgLyAzLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSByYXRpbztcclxuXHJcbiAgICAgICAgICAgIC8vIOWGkueFmemCj+i8r1xyXG4gICAgICAgICAgICB0aGlzLnNtb2tlVGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb2tlVGltZXIgPj0gdGhpcy5zbW9rZUludGVydmFsICYmIHRoaXMubmVhcmJ5T3Zlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbW9rZVRpbWVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVuUG9pbnQgPSB0aGlzLm5lYXJieU92ZW4uZ2V0Q2hpbGRCeU5hbWUoXCJvdmVuX3BvaW50XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZW5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNtb2tlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbW9rZUVmZmVjdFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgc21va2UubmFtZSA9IFwiU21va2VFZmZlY3RcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBvdmVuUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIC01KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5lYXJieU92ZW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbW9rZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuLmFkZENoaWxkKHNtb2tlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5KoIOeDmOeDpOS4reWGkueFme+8iOS+huiHqiBvdmVuX3BvaW5077yJXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8g5om+5LiN5YiwIG92ZW5fcG9pbnTvvIznhKHms5XlhpLnhZlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJha2VQcm9ncmVzcyA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEJha2luZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQmFraW5nICYmICF0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5uRIOeDmOeDpOS4reaWt++8gVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCYWtpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuRGVsaXZlciAmJiB0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpICYmIHRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpenphTmFtZSA9IHRoaXMuY2FycmllZERvdWdoLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAvLyDmqqLmn6XmmK/lkKboiIfoj5zllq7lsI3mh4lcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFNsb3QgPSB0aGlzLm1lbnVNYW5hZ2VyLnNsb3RzLmZpbmQoc2xvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROYW1lID0gc2xvdC5jaGlsZHJlblswXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5hbWUgPT09IHBpenphTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlZFNsb3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWHuumkkOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuYWRkU2NvcmUoNTApOyAgLy8g5YGH6Kit5q+P6YGT6I+c5YqgIDEwIOWIhlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsaXZlcnlFZmZlY3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibGluZ1NvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJsaW5nU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51QmFyID0gdGhpcy51aU1hbmFnZXIuZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW51QmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUJhci5jaGVja0FuZEZpbGxTbG90cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46JIOaIkOWKn+WHuumkkO+8mlwiICsgcGl6emFOYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdjCDmraTmiqvolqnkuI3lnKjoj5zllq7kuIrvvIzkuI3og73lh7rppJDvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYXduUnVuRHVzdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkdXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ydW5EdXN0RWZmZWN0UHJlZmFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7IFxyXG4gICAgICAgIHBvcy55IC09IDQwOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7ICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChkdXN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlzUGl6emEobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFtcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCJdLmluY2x1ZGVzKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbEJha2luZygpIHtcclxuICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmJha2VTb3VuZElkKTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlU291bmRJZCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7IFxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmlzaEJha2luZygpIHtcclxuICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmJha2VTb3VuZElkKTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlU291bmRJZCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyDlnKjmiqvolqnkuIrliqDlhpLnhZnnibnmlYhcclxuICAgICAgICAgICAgY29uc3Qgc3RlYW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpenphU3RlYW1QcmVmYWIpO1xyXG4gICAgICAgICAgICBzdGVhbS5uYW1lID0gXCJQaXp6YVN0ZWFtXCI7XHJcbiAgICAgICAgICAgIHN0ZWFtLnNldFBvc2l0aW9uKGNjLnYzKDAsIDQwLCAwKSk7IC8vIOWGkueFmeS9jee9rueojeW+ruWcqOaKq+iWqeS4iuaWuVxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hZGRDaGlsZChzdGVhbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8g54OY54Ok57WQ5p2f77yM5riF6Zmk5YaS54WZXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJTbW9rZUVmZmVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiU21va2VFZmZlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDinIUgJHt0aGlzLmNhcnJpZWREb3VnaC5uYW1lfSDng5jng6TlrozmiJDvvIFgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJ5QXNzZW1ibGVQaXp6YShwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubmFtZSk7XHJcbiAgICAgICAgY29uc3QgaGFzRmxhdGJyZWFkID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiRmxhdGJyZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIkdyYXRlZENoZWVzZVwiKTtcclxuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIlNsaWNlTXVzaHJvb21cIik7XHJcbiAgICAgICAgY29uc3QgaGFzUFAgPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJTbGljZVBQXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWhhc0ZsYXRicmVhZCkgcmV0dXJuOyAvLyDlv4XpoIjlhYjmnIkgZmxhdGJyZWFkIOaJjeiDveWQiOaIkFxyXG5cclxuICAgICAgICBsZXQgcGl6emE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaGFzQ2hlZXNlICYmICFoYXNNdXNocm9vbSAmJiAhaGFzUFApIHtcclxuICAgICAgICAgICAgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoZWVzZVBpenphUHJlZmFiKTtcclxuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwiY2hlZXNlX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNNdXNocm9vbSAmJiAhaGFzQ2hlZXNlICYmICFoYXNQUCkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QaXp6YVByZWZhYik7XHJcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcIm11c2hyb29tX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNQUCAmJiAhaGFzQ2hlZXNlICYmICFoYXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVwcGVyUGl6emFQcmVmYWIpO1xyXG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJwZXBwZXJfcGl6emFcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIOWwmuS4jeaUr+aPtOikh+WQiOWPo+WRsyBwaXp6YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yiq6Zmk5Y6f5paZXHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKFtcIkZsYXRicmVhZFwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlNsaWNlTXVzaHJvb21cIiwgXCJTbGljZVBQXCJdLmluY2x1ZGVzKGNoaWxkLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yqg5YWlIHBpenphXHJcbiAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChwaXp6YSk7XHJcbiAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gcGFyZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICBpZiAoZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gcGFyZW50Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIHBpenphLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn42VIOWQiOaIkCAke3BpenphLm5hbWV9IOaIkOWKn++8gWApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYW5jZWxDaG9wcGluZygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfm5Eg546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq177yBXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Q2hvcHBpbmcoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREcm9wVGFyZ2V0IHx8IHRoaXMuY3VycmVudERyb3BUYWcgIT09IDgpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDlj6rog73lnKjnoKfmnb/kuIrvvIh0YWcgPSA477yJ5YiH6aOf5p2Q77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYXNEb3VnaCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiRG91Z2hcIikpO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQ2hlZXNlXCIpKTtcclxuICAgICAgICBjb25zdCBoYXNQUCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIlBQXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc011c2hyb29tID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IFwiTXVzaHJvb21cIik7XHJcblxyXG5cclxuICAgICAgICBpZiAoIWhhc0RvdWdoICYmICFoYXNDaGVlc2UgJiYgIWhhc1BQICYmICFoYXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOmAmeWAi+egp+adv+S4iuaykuaciem6teWcmO+8jOS4jeiDveWIh++8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTsgIC8vIOmhr+ekuuWcqOinkuiJsumgreS4ilxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SqIOWcqOato+eiuuegp+adv+S4iumWi+Wni+WIh+m6teWcmO+8gVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBmaW5pc2hDaG9wcGluZygpIHtcclxuICAgICAgICBsZXQgaXNDaGVlc2UgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNEb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc1BQID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzTXVzaHJvb20gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJEb3VnaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc0RvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIkNoZWVzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc0NoZWVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJQUFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc1BQID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIk11c2hyb29tXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlzTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNEb3VnaCkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5mbGF0YnJlYWRQcmVmYSk7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiRmxhdGJyZWFkXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0NoZWVzZSkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmF0ZWRDaGVlc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkdyYXRlZENoZWVzZVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQUCkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbGljZXBwUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZVBQXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc011c2hyb29tKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsaWNlbXVzaHJvb21QcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIlNsaWNlTXVzaHJvb21cIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAobmV3SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmFkZENoaWxkKG5ld0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ruWIh+WujOeahOeJqeWTge+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIOWIh+WujCAke25ld0l0ZW0ubmFtZX3vvIzmlL7nva7miJDlip/vvIFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdHJ5SW50ZXJhY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja011c2hyb29tICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtdXNocm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobXVzaHJvb20pO1xyXG4gICAgICAgICAgICBtdXNocm9vbS5uYW1lID0gXCJNdXNocm9vbVwiO1xyXG4gICAgICAgICAgICBtdXNocm9vbS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG11c2hyb29tO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5ou/6LW36JiR6I+HXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja1BQICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHBQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHApO1xyXG4gICAgICAgICAgICBwcC5uYW1lID0gXCJQUFwiO1xyXG4gICAgICAgICAgICBwcC5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBwO1xyXG5cclxuICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42FIOaLv+i1t+eVquiMhFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDaGVlc2UgJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWVzZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoZWVzZSk7XHJcbiAgICAgICAgICAgIGNoZWVzZS5uYW1lID0gXCJDaGVlc2VcIjtcclxuICAgICAgICAgICAgY2hlZXNlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gY2hlZXNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5ou/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tEb3VnaCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgZG91Z2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRvdWdoUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcclxuICAgICAgICAgICAgZG91Z2gubmFtZSA9IFwiRG91Z2hcIjtcclxuICAgICAgICAgICAgZG91Z2guc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaLv+i1t+m6teWcmFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgLy8g8J+UhCDmkr/otbfku7vkvZUgbmFtZSDku6Xpo5/mnZDplovpoK3nmoTmnbHopb9cclxuICAgICAgICAgICAgY29uc3QgcGlja2FibGUgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLmZpbmQoY2hpbGQgPT5cclxuICAgICAgICAgICAgICAgICBbXCJEb3VnaFwiLCBcIkZsYXRicmVhZFwiLCBcIkNoZWVzZVwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlRvbWF0b1wiLCBcIlBpenphU2F1Y2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQUFwiLCBcIlNsaWNlUFBcIiwgXCJNdXNocm9vbVwiLCBcIlNsaWNlTXVzaHJvb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCIgLy8g4oaQIOWKoOmAmeS4ieWAi1xyXG4gICAgICAgICAgICAgICAgICAgIF0uc29tZShwcmVmaXggPT5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgocHJlZml4KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAocGlja2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gcGlja2FibGU7XHJcbiAgICAgICAgICAgICAgICBwaWNrYWJsZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGlja2FibGUpO1xyXG4gICAgICAgICAgICAgICAgcGlja2FibGUuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmkr/otbfmoYzkuIrnmoTnianlk4HvvJpcIiArIHBpY2thYmxlLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLinYwg5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ru+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbHJlYWR5SGFzT3RoZXJUb3BwaW5ncyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZHJvcFBvaW50ICYmXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICE9PSBcIkZsYXRicmVhZFwiICYmIC8vIOKchSDlhYHoqLHmnIkgRmxhdGJyZWFkIOWcqOWgtFxyXG4gICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcclxuICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXHJcbiAgICAgICAgICAgICAgICBcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCIgLy8g4oaQIOWKoOmAmeS4ieWAi1xyXG4gICAgICAgICAgICAgICAgXS5zb21lKHR5cGUgPT5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICYmIGNoaWxkLm5hbWUuc3RhcnRzV2l0aCh0eXBlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0ZsYXRicmVhZCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIkZsYXRicmVhZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxyZWFkeUhhc1NhbWVUeXBlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkICE9PSBkcm9wUG9pbnQgJiYgY2hpbGQubmFtZSA9PT0gdGhpcy5jYXJyaWVkRG91Z2gubmFtZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNGbGF0YnJlYWQgJiYgYWxyZWFkeUhhc1NhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g54Sh5rOV5pS+572u77yM5qGM5LiK5bey5pyJ55u45ZCM6aOf5p2Q77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g4pyFIOaUvue9rumCj+i8r1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5wYXJlbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5pS+5LiL54mp5ZOB5YiwIERyb3BQb2ludO+8mlwiICsgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOKchSDlmJfoqablkIjmiJAgUGl6emHvvIjmlL7nva7lvozop7jnmbzvvIlcclxuICAgICAgICAgICAgdGhpcy50cnlBc3NlbWJsZVBpenphKHRoaXMuY3VycmVudERyb3BUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxpdmVyeUVmZmVjdCgpIHtcclxuICAgICAgICAvLyDpo4TlrZfmlYjmnpxcclxuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcclxuICAgICAgICB0aXBzTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjIoMCwgMTAwKSkpOyAvLyDlh7rnj77lnKjop5LoibLkuIrmlrlcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRpcHNOb2RlKTtcclxuXHJcbiAgICAgICAgLy8g6aOE5rWuICsg5reh5Ye6XHJcbiAgICAgICAgY2MudHdlZW4odGlwc05vZGUpXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MCwgMCksIG9wYWNpdHk6IC0yNTUgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIOeykuWtkOeJueaViFxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc1BhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDaGVlc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5Y+v5Lul5pK/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYUg5Y+v5Lul5pK/6LW355Wq6IyE77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ecm9wRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBvdGhlckNvbGxpZGVyLnRhZzsgIC8vIOiomOS9j+ebruWJjeeisOWIsOWTquWAiyB0YWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+loyDmjqXop7jliLDnoKfmnb8gVGFnID1cIiwgb3RoZXJDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhZyA9IDExO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZWFyT3ZlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaOpeinuOWIsOeDpOeuse+8gVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJha2VTb3VuZElkICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmJha2VTb3VuZElkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ2hlZXNlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tQUCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrTXVzaHJvb20gPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42EIOWPr+S7peaSv+i1t+iYkeiPh++8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA4IHx8IG90aGVyQ29sbGlkZXIudGFnID09PSAxMCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ecm9wRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldCA9IG51bGw7ICAgXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZWFyT3ZlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYWtpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9IFxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=