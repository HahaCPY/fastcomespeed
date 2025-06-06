
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/PlayerController 2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.chopSound = null;
        _this.bakeSound = null;
        _this.chopSoundTimer = 0;
        _this.bakeSoundId = -1;
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
            if (this.bakeSound) {
                this.bakeSoundId = cc.audioEngine.playEffect(this.bakeSound, true); // true 代表循環播放
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
    PlayerController2.prototype.finishBaking = function () {
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
            if (this.bakeSoundId !== -1) {
                cc.audioEngine.stopEffect(this.bakeSoundId);
                this.bakeSoundId = -1;
            }
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
        property({ type: cc.AudioClip })
    ], PlayerController2.prototype, "chopSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController2.prototype, "bakeSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL1BsYXllckNvbnRyb2xsZXIgMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFtekJDO1FBanpCRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBR3ZCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFHakMsS0FBSztRQUNHLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBRzlDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixxQkFBZSxHQUFXLEdBQUcsQ0FBQyxDQUFFLGFBQWE7UUFHckQsUUFBUTtRQUVSLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBSXhCLGdCQUFVLEdBQVksS0FBSyxDQUFDLENBQUcsaUJBQWlCO1FBQ2hELGlCQUFXLEdBQVEsSUFBSSxDQUFDLENBQU8sa0JBQWtCO1FBR2pELGdCQUFVLEdBQVksSUFBSSxDQUFDLENBQUMsYUFBYTtRQUd6QyxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixtQkFBYSxHQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQWM7UUFFM0MsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFDN0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQzNDLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLEtBQUs7UUFDRyxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFDbEMsb0JBQWMsR0FBVyxJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRWhDLEtBQUs7UUFDRyxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFTLEdBQVksS0FBSyxDQUFDLENBQUMsb0JBQW9CO1FBRWhELHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBRXpDLE1BQU07UUFDRSxjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGdCQUFVLEdBQVksS0FBSyxDQUFDLENBQUMsV0FBVztRQUd4QyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWdCLEdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7SUE0cUJ4RCxDQUFDO0lBdHFCRyxpQ0FBSyxHQUFMOztRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDLENBQUUsYUFBYTtRQUVwRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxRQUFRO1FBRWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLFFBQVE7UUFHaEMsSUFBSSxDQUFDLFdBQVcsU0FBRyxJQUFJLENBQUMsU0FBUywwQ0FBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFdEYsY0FBYztnQkFDZCxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBRSxhQUFhO2lCQUN0QzthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFFLFlBQVk7YUFDdkM7WUFDRCw4QkFBOEI7WUFDOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUFFLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRXJELElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFM0IsZ0JBQWdCO1lBQ2hCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ3RFO3FCQUFNO29CQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUQ7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjthQUNKO1NBSUo7YUFBTTtZQUNILGFBQWE7WUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVyQyxTQUFTO1lBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUM1RTtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVEOztXQUVHO1FBRUgsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7YUFDL0I7U0FDSjtRQUdELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO2dCQUVyQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEdBQUcsRUFBRSxFQUFHLFVBQVU7b0JBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3BEO2lCQUNKO2dCQUVELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDekI7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBRSxlQUFlO2FBQzFDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsT0FBTztRQUNQLElBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsWUFBWTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxZQUFZO1lBQzNDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDakI7WUFFRyxZQUFZO1lBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjO2FBQ3JGO1lBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBUTtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsUUFBUTtRQUNSLElBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsWUFBWTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ3RDO1lBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDeEM7U0FDSjtRQUdELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRTdCLE9BQU87WUFDUCxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFFcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELElBQUksU0FBUyxFQUFFO29CQUNYLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3JELEtBQUssQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO29CQUUzQixJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFaEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUMxQzthQUNKO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pFLElBQU0sV0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRXpDLFlBQVk7WUFDWixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDMUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLE9BQU8sU0FBUyxLQUFLLFdBQVMsQ0FBQztpQkFDbEM7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLFdBQVcsRUFBRTtnQkFDYixPQUFPO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxjQUFjO2dCQUM5QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNyRDtnQkFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFdBQVMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQjtZQUFFLE9BQU87UUFFdEMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV0RCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUlELG1DQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUdELHdDQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztZQUVsQyxZQUFZO1lBQ1osSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztZQUMxQixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUdsQyxZQUFZO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ25DLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUVOO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ2xDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQ0FBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELDRDQUFnQixHQUFoQixVQUFpQixVQUFtQjtRQUNoQyxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDckUsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sQ0FBQyxzQkFBc0I7UUFFakQsSUFBSSxLQUFLLEdBQVksSUFBSSxDQUFDO1FBRTFCLElBQUksU0FBUyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxXQUFXLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakQsS0FBSyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztTQUNqQzthQUFNLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzVDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1NBQy9CO2FBQU07WUFDSCxPQUFPLENBQUMsaUJBQWlCO1NBQzVCO1FBRUQsT0FBTztRQUNQLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxXQUFXO1FBQ1gsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBUyxLQUFLLENBQUMsSUFBSSx3QkFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDVjtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUM3RixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDL0YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ2pGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUc3RixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFLRCwwQ0FBYyxHQUFkO1FBQ0ksSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLEtBQW9CLFVBQStCLEVBQS9CLEtBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBL0IsY0FBK0IsRUFBL0IsSUFBK0IsRUFBRTtZQUFoRCxJQUFNLEtBQUssU0FBQTtZQUNaLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNsQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDNUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1NBRUo7UUFFRCxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUM7UUFFNUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7U0FDOUI7YUFBTSxJQUFJLFFBQVEsRUFBRTtZQUNqQixPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztTQUNqQzthQUFNLElBQUksSUFBSSxFQUFFO1lBQ2IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxVQUFVLEVBQUU7WUFDbkIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7U0FDbEM7UUFHRCxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNaLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNWO1lBRUQsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQVEsT0FBTyxDQUFDLElBQUkseUNBQVEsQ0FBQyxDQUFDO1NBQzdDO0lBRUwsQ0FBQztJQU9ELHVDQUFXLEdBQVg7UUFBQSxpQkE4SEM7UUE3SEcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUMzQixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEMsSUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDZixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFFeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7UUFHRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUUxQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEQ7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ25ELHdCQUF3QjtZQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ3RELE9BQUEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVk7b0JBQ3BFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGVBQWU7b0JBQzVDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsU0FBUztpQkFDekQsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNiLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUE3QixDQUE2QixDQUNoQztZQUxBLENBS0EsQ0FDSixDQUFDO1lBQ0YsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3REO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QztTQUNKO2FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3ZFLElBQU0sV0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFdBQVMsRUFBRTtnQkFDWixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ2pDLE9BQU87YUFDVjtZQUVMLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO2dCQUN0RSxPQUFPLEtBQUssS0FBSyxXQUFTO29CQUN0QixLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxxQkFBcUI7b0JBQ2xELENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxZQUFZO3dCQUN4RSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlO3dCQUM1QyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLFNBQVM7cUJBQ3pELENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTt3QkFDUCxPQUFBLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUF6QyxDQUF5QyxDQUM1QyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7WUFHSCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUExQixDQUEwQixDQUFDLENBQUM7WUFFL0YsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ2pFLE9BQU8sS0FBSyxLQUFLLFdBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksSUFBSSxrQkFBa0IsRUFBRTtnQkFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFFRyxTQUFTO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBRWxELElBQU0sUUFBUSxHQUFHLFdBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtZQUNELHNCQUFzQjtZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDakQ7SUFHTCxDQUFDO0lBRUQsOENBQWtCLEdBQWxCO1FBQ0ksT0FBTztRQUNQLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEMsVUFBVTtRQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDM0UsSUFBSSxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQWxCLENBQWtCLENBQUM7YUFDOUIsS0FBSyxFQUFFLENBQUM7UUFHYixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUtELG9DQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUMvQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBRSxlQUFlO1lBQ3pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVEO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztTQUMvQzthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBRUwsQ0FBQztJQUlELHdDQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7UUFDN0MsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUM3QjthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFBTSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUN4RixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDSjthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFHTCxDQUFDO0lBNXlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNHO0lBRzFCO1FBREMsUUFBUTtvREFDVztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0VBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0VBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lFQUNpQjtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytEQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dEQUNGO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3REFDRjtJQVkvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tFQUNrQjtJQVF0QztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7eURBQ0Q7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzBEQUNBO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDRDtJQTNGZixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW16QnJDO0lBQUQsd0JBQUM7Q0FuekJELEFBbXpCQyxDQW56QjhDLEVBQUUsQ0FBQyxTQUFTLEdBbXpCMUQ7a0JBbnpCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9sczIgfSBmcm9tIFwiLi9LZXlib2FyZENvbnRyb2xzMlwiO1xuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlcjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBkb3VnaFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZmxhdGJyZWFkUHJlZmE6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNob3BCYXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7IFxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjaGVlc2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdyYXRlZENoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNsaWNlcHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIG11c2hyb29tUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzbGljZW11c2hyb29tUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjaGVlc2VQaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbXVzaHJvb21QaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcGVwcGVyUGl6emFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNtb2tlRWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21va2VQb2ludDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHRpcHNMYWJlbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdGlwc1BhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwaXp6YVN0ZWFtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGNob3BTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGJha2VTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG4gICAgcHJpdmF0ZSBjaG9wU291bmRUaW1lcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGJha2VTb3VuZElkOiBudW1iZXIgPSAtMTtcblxuXG4gICAgLy8g6LeR5q2lXG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHJ1bk11bHRpcGxpZXI6IG51bWJlciA9IDEuMzsgLy8g6LeR5q2l6YCf5bqm5YCN546HXG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBydW5EdXN0RWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBydW5EdXN0VGltZXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBydW5EdXN0SW50ZXJ2YWw6IG51bWJlciA9IDAuMjsgIC8vIOavjyAwLjIg56eS5YaS5LiA5qyhXG5cblxuICAgIC8vIEF1ZGlvXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgYmxpbmdTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHBpY2t1cFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgcGxhY2VTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG5cbiAgICBwcml2YXRlIGNhbkRlbGl2ZXI6IGJvb2xlYW4gPSBmYWxzZTsgICAvLyDmmK/lkKbnorDliLDlh7rppJDlj7DvvIh0YWcgOe+8iVxuICAgIHByaXZhdGUgbWVudU1hbmFnZXI6IGFueSA9IG51bGw7ICAgICAgIC8vIOWvpumamyBNZW51QmFyIOiFs+acrOW8leeUqFxuXG5cbiAgICBwcml2YXRlIG5lYXJieU92ZW46IGNjLk5vZGUgPSBudWxsOyAvLyDoqJjpjITnm67liY3pnaDov5Hlk6rlgIvng6TnrrFcblxuXG4gICAgcHJpdmF0ZSBzbW9rZVRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc21va2VJbnRlcnZhbDogbnVtYmVyID0gMC41OyAvLyDmr48gMC41IOenkuWGkuS4gOasoeeFmVxuXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBsYXN0RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgLTEpOyAvLyDpoJDoqK3lkJHkuIvvvIjliY3vvIlcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuXG4gICAgLy8g6bq15ZyYXG4gICAgcHJpdmF0ZSBjYW5QaWNrRG91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhbkRyb3BEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2FycmllZERvdWdoOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFnOiBudW1iZXIgPSBudWxsOyBcbiAgICBwcml2YXRlIGlzQ2hvcHBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNob3BQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGNob3BCYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8g6LW35Y+4XG4gICAgcHJpdmF0ZSBjYW5QaWNrQ2hlZXNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGNhblBpY2tQUDogYm9vbGVhbiA9IGZhbHNlOyAvLyB0YWcgNSDmi78gcHAg55qEIGZsYWdcblxuICAgIHByaXZhdGUgY2FuUGlja011c2hyb29tOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyDng6TmiqvolqlcbiAgICBwcml2YXRlIGlzQmFraW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBiYWtlUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpc05lYXJPdmVuOiBib29sZWFuID0gZmFsc2U7IC8vIHRhZyA9IDEyXG5cbiAgICBcbiAgICBwcml2YXRlIGxhc3RJbnRlcmFjdFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbnRlcmFjdENvb2xkb3duOiBudW1iZXIgPSAwLjI7IC8vIDAuMiDnp5LlhrfljbvmmYLplpNcblxuXG5cblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hbmltKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmICghdGhpcy5yYikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIFJpZ2lkQm9keTJEIOe1hOS7tu+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfYmFja1wiKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzMigpOyAgLy8g56ys5LqM5L2N5L2/55So5bCI5bGs5o6n5Yi25ZmoXG4gICAgICAgIFxuICAgICAgICBjb25zdCBiYXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaG9wQmFyUHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJhck5vZGUpO1xuICAgICAgICBiYXJOb2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7XG4gICAgICAgIHRoaXMuY2hvcEJhciA9IGJhck5vZGU7IC8vIOKchSDlrZjotbfkvoZcblxuICAgICAgICB0aGlzLmNob3BGaWxsID0gYmFyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZpbGxiYXJcIik7XG4gICAgICAgIGlmICghdGhpcy5jaG9wRmlsbCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIEZpbGxiYXLvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgYmFyTm9kZS5hY3RpdmUgPSBmYWxzZTsgLy8g6aCQ6Kit5LiN6aGv56S6XG5cblxuICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyID0gdGhpcy51aU1hbmFnZXI/LmdldENvbXBvbmVudChcIk1lbnVCYXJcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5pbnB1dC5nZXRNb3ZlRGlyZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdGhpcy5pbnB1dC5nZXRSdW5IZWxkKCk7XG5cbiAgICAgICAgaWYgKCFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCAqIHRoaXMucnVuTXVsdGlwbGllcik7XG5cbiAgICAgICAgICAgICAgICAvLyDinIUg6LeR5q2l54uA5oWL5LiL55Si55Sf57KJ5aG1XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgKz0gZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVuRHVzdFRpbWVyID49IHRoaXMucnVuRHVzdEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3blJ1bkR1c3QoKTsgIC8vIOKshe+4jyDoh6roqILnmoTnsonlobXlh73mlbhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwOyAgLy8g6Z2e6LeR5q2l54uA5oWL5bCx5LiN5YaS54WZXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDkvb/nlKjniannkIblvJXmk47nmoQgbGluZWFyVmVsb2NpdHkg5o6n5Yi256e75YuVXG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKGZpbmFsU3BlZWQpO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3REaXIgPSBkaXIuY2xvbmUoKTtcblxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlyLnkpID4gTWF0aC5hYnMoZGlyLngpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpci55ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9iYWNrXCIgOiBcImdpcmxfd2Fsa19iYWNrXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuXCIgOiBcImdpcmxfd2Fsa1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkaXIueCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fcmlnaHRcIiA6IFwiZ2lybF93YWxrX3JpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9sZWZ0XCIgOiBcImdpcmxfd2Fsa19sZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlgZzmraLnp7vli5XvvIjpgJ/luqbmrbjpm7bvvIlcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcblxuICAgICAgICAgICAgLy8g5pKt5pS+6Z2c5q2i5YuV55WrXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0RGlyLnkpID4gTWF0aC5hYnModGhpcy5sYXN0RGlyLngpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueCA+IDAgPyBcImdpcmxfaWRsZV9yaWdodFwiIDogXCJnaXJsX2lkbGVfbGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyppZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xuICAgICAgICB9Ki9cblxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0SW50ZXJhY3RUaW1lID4gdGhpcy5pbnRlcmFjdENvb2xkb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJiB0aGlzLmNhbkRyb3BEb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaCA9PSBudWxsICYmICF0aGlzLmlzQ2hvcHBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvcFByb2dyZXNzICs9IGR0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcHJvZ3Jlc3NSYXRpbztcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgKz0gZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kVGltZXIgPj0gMC4yKSB7ICAvLyDmr48gMC4yIOenklxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3BTb3VuZFRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2hvcFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaG9wUHJvZ3Jlc3MgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENob3BwaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbENob3BwaW5nKCk7ICAvLyDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDng5jng6TmtYHnqItcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXG4gICAgICAgICAgICB0aGlzLmlzUGl6emEodGhpcy5jYXJyaWVkRG91Z2gubmFtZSkgJiZcbiAgICAgICAgICAgICF0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdICYmIC8vIOKchSDkuI3og73mmK/lt7Lng6TpgY7nmoRcbiAgICAgICAgICAgICF0aGlzLmlzQmFraW5nXG4gICAgICAgICl7XG5cbiAgICAgICAgICAgIC8vIOWIneasoeaMieS4i++8jOmWi+Wni+eDmOeDpFxuICAgICAgICAgICAgdGhpcy5pc0Jha2luZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlU291bmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJha2VTb3VuZCwgdHJ1ZSk7IC8vIHRydWUg5Luj6KGo5b6q55Kw5pKt5pS+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IGZhbHNlOyAvLyDorpPmiqvolqnmtojlpLFcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaKq+iWqeaUvuWFpeeDpOeuseS4rS4uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDku6Xng5jng6Tmj5DnpLpcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXG4gICAgICAgICAgICB0aGlzLmlzUGl6emEodGhpcy5jYXJyaWVkRG91Z2gubmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKaoO+4jyDpgJnloYrmiqvolqnlt7LntpPng6TpgY7kuobvvIzkuI3og73ph43opIfng5jng6TvvIFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmlzQmFraW5nICYmIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgKz0gZHQ7XG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHRoaXMuYmFrZVByb2dyZXNzIC8gMywgMSk7XG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IHJhdGlvO1xuXG4gICAgICAgICAgICAvLyDlhpLnhZnpgo/ovK9cbiAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb2tlVGltZXIgPj0gdGhpcy5zbW9rZUludGVydmFsICYmIHRoaXMubmVhcmJ5T3Zlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdmVuUG9pbnQgPSB0aGlzLm5lYXJieU92ZW4uZ2V0Q2hpbGRCeU5hbWUoXCJvdmVuX3BvaW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChvdmVuUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc21va2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNtb2tlRWZmZWN0UHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgc21va2UubmFtZSA9IFwiU21va2VFZmZlY3RcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IG92ZW5Qb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgLTUpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5lYXJieU92ZW4uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNtb2tlLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuLmFkZENoaWxkKHNtb2tlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfkqgg54OY54Ok5Lit5YaS54WZ77yI5L6G6IeqIG92ZW5fcG9pbnTvvIlcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBvdmVuX3BvaW5077yM54Sh5rOV5YaS54WZXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYmFrZVByb2dyZXNzID49IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEJha2luZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNCYWtpbmcgJiYgIXRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5uRIOeDmOeDpOS4reaWt++8gVwiKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQmFraW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FuRGVsaXZlciAmJiB0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpICYmIHRoaXMuY2FycmllZERvdWdoKSB7XG4gICAgICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xuXG4gICAgICAgICAgICAvLyDmqqLmn6XmmK/lkKboiIfoj5zllq7lsI3mh4lcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRTbG90ID0gdGhpcy5tZW51TWFuYWdlci5zbG90cy5maW5kKHNsb3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzbG90LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROYW1lID0gc2xvdC5jaGlsZHJlblswXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROYW1lID09PSBwaXp6YU5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAvLyDlh7rppJDmiJDlip9cbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIG1hdGNoZWRTbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5hZGRTY29yZSg1MCk7ICAvLyDlgYfoqK3mr4/pgZPoj5zliqAgMTAg5YiGXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsaXZlcnlFZmZlY3QoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJsaW5nU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJsaW5nU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZW51QmFyID0gdGhpcy51aU1hbmFnZXIuZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVudUJhcikge1xuICAgICAgICAgICAgICAgICAgICBtZW51QmFyLmNoZWNrQW5kRmlsbFNsb3RzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDmiJDlip/lh7rppJDvvJpcIiArIHBpenphTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdjCDmraTmiqvolqnkuI3lnKjoj5zllq7kuIrvvIzkuI3og73lh7rppJDvvIFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3Bhd25SdW5EdXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGR1c3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpO1xuXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyBcbiAgICAgICAgcG9zLnkgLT0gNDA7ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7ICAgICAgICAgICAgICBcblxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGR1c3QpO1xuICAgIH1cblxuXG5cbiAgICBpc1BpenphKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gW1wiY2hlZXNlX3BpenphXCIsIFwibXVzaHJvb21fcGl6emFcIiwgXCJwZXBwZXJfcGl6emFcIl0uaW5jbHVkZXMobmFtZSk7XG4gICAgfVxuXG4gICAgY2FuY2VsQmFraW5nKCkge1xuICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XG4gICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5zbW9rZVRpbWVyID0gMDsgXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY2FycmllZERvdWdoKSB0aGlzLmNhcnJpZWREb3VnaC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgZmluaXNoQmFraW5nKCkge1xuICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XG4gICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8g5Zyo5oqr6Jap5LiK5Yqg5YaS54WZ54m55pWIXG4gICAgICAgICAgICBjb25zdCBzdGVhbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGl6emFTdGVhbVByZWZhYik7XG4gICAgICAgICAgICBzdGVhbS5uYW1lID0gXCJQaXp6YVN0ZWFtXCI7XG4gICAgICAgICAgICBzdGVhbS5zZXRQb3NpdGlvbihjYy52MygwLCA0MCwgMCkpOyAvLyDlhpLnhZnkvY3nva7nqI3lvq7lnKjmiqvolqnkuIrmlrlcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmFkZENoaWxkKHN0ZWFtKTtcblxuXG4gICAgICAgICAgICAvLyDng5jng6TntZDmnZ/vvIzmuIXpmaTlhpLnhZlcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiU21va2VFZmZlY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpOyAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5uZWFyYnlPdmVuKSB7XG4gICAgICAgICAgICB0aGlzLm5lYXJieU92ZW4uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiU21va2VFZmZlY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYOKchSAke3RoaXMuY2FycmllZERvdWdoLm5hbWV9IOeDmOeDpOWujOaIkO+8gWApO1xuICAgIH1cblxuXG4gICAgdHJ5QXNzZW1ibGVQaXp6YShwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnROYW1lcyA9IHBhcmVudE5vZGUuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm5hbWUpO1xuICAgICAgICBjb25zdCBoYXNGbGF0YnJlYWQgPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJGbGF0YnJlYWRcIik7XG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIkdyYXRlZENoZWVzZVwiKTtcbiAgICAgICAgY29uc3QgaGFzTXVzaHJvb20gPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJTbGljZU11c2hyb29tXCIpO1xuICAgICAgICBjb25zdCBoYXNQUCA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIlNsaWNlUFBcIik7XG5cbiAgICAgICAgaWYgKCFoYXNGbGF0YnJlYWQpIHJldHVybjsgLy8g5b+F6aCI5YWI5pyJIGZsYXRicmVhZCDmiY3og73lkIjmiJBcblxuICAgICAgICBsZXQgcGl6emE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIGlmIChoYXNDaGVlc2UgJiYgIWhhc011c2hyb29tICYmICFoYXNQUCkge1xuICAgICAgICAgICAgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoZWVzZVBpenphUHJlZmFiKTtcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcImNoZWVzZV9waXp6YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc011c2hyb29tICYmICFoYXNDaGVlc2UgJiYgIWhhc1BQKSB7XG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QaXp6YVByZWZhYik7XG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJtdXNocm9vbV9waXp6YVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc1BQICYmICFoYXNDaGVlc2UgJiYgIWhhc011c2hyb29tKSB7XG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVwcGVyUGl6emFQcmVmYWIpO1xuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwicGVwcGVyX3BpenphXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIOWwmuS4jeaUr+aPtOikh+WQiOWPo+WRsyBwaXp6YVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yiq6Zmk5Y6f5paZXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZiAoW1wiRmxhdGJyZWFkXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiU2xpY2VNdXNocm9vbVwiLCBcIlNsaWNlUFBcIl0uaW5jbHVkZXMoY2hpbGQubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWKoOWFpSBwaXp6YVxuICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHBpenphKTtcbiAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gcGFyZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcbiAgICAgICAgaWYgKGRyb3BQb2ludCkge1xuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gcGFyZW50Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICBwaXp6YS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhg8J+NlSDlkIjmiJAgJHtwaXp6YS5uYW1lfSDmiJDlip/vvIFgKTtcbiAgICB9XG5cblxuICAgIGNhbmNlbENob3BwaW5nKCkge1xuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5uRIOeOqeWutuaUvumWi+epuueZvemNte+8jOS4reaWt+WIh+m6te+8gVwiKTtcbiAgICB9XG5cbiAgICBzdGFydENob3BwaW5nKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREcm9wVGFyZ2V0IHx8IHRoaXMuY3VycmVudERyb3BUYWcgIT09IDgpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g5Y+q6IO95Zyo56Cn5p2/5LiK77yIdGFnID0gOO+8ieWIh+mjn+adkO+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc0RvdWdoID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJEb3VnaFwiKSk7XG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQ2hlZXNlXCIpKTtcbiAgICAgICAgY29uc3QgaGFzUFAgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJQUFwiKTtcbiAgICAgICAgY29uc3QgaGFzTXVzaHJvb20gPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJNdXNocm9vbVwiKTtcblxuXG4gICAgICAgIGlmICghaGFzRG91Z2ggJiYgIWhhc0NoZWVzZSAmJiAhaGFzUFAgJiYgIWhhc011c2hyb29tKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOmAmeWAi+egp+adv+S4iuaykuaciem6teWcmO+8jOS4jeiDveWIh++8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xuXG4gICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpOyAgLy8g6aGv56S65Zyo6KeS6Imy6aCt5LiKXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SqIOWcqOato+eiuuegp+adv+S4iumWi+Wni+WIh+m6teWcmO+8gVwiKTtcbiAgICB9XG5cblxuXG5cbiAgICBmaW5pc2hDaG9wcGluZygpIHtcbiAgICAgICAgbGV0IGlzQ2hlZXNlID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0RvdWdoID0gZmFsc2U7XG4gICAgICAgIGxldCBpc1BQID0gZmFsc2U7XG4gICAgICAgIGxldCBpc011c2hyb29tID0gZmFsc2U7XG5cblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBcIkRvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXNEb3VnaCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiQ2hlZXNlXCIpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXNDaGVlc2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIlBQXCIpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXNQUCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiTXVzaHJvb21cIikge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBpc011c2hyb29tID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0l0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgICAgIGlmIChpc0RvdWdoKSB7XG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5mbGF0YnJlYWRQcmVmYSk7XG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkZsYXRicmVhZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlZXNlKSB7XG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmF0ZWRDaGVlc2VQcmVmYWIpO1xuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJHcmF0ZWRDaGVlc2VcIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1BQKSB7XG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbGljZXBwUHJlZmFiKTtcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiU2xpY2VQUFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTXVzaHJvb20pIHtcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsaWNlbXVzaHJvb21QcmVmYWIpO1xuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZU11c2hyb29tXCI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChuZXdJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmFkZENoaWxkKG5ld0l0ZW0pO1xuXG4gICAgICAgICAgICBjb25zdCBkcm9wUG9pbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiRHJvcFBvaW50XCIpO1xuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBEcm9wUG9pbnTvvIznhKHms5XmlL7nva7liIflroznmoTnianlk4HvvIFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGRyb3BQb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgIG5ld0l0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIOWIh+WujCAke25ld0l0ZW0ubmFtZX3vvIzmlL7nva7miJDlip/vvIFgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxuICAgIHRyeUludGVyYWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QaWNrTXVzaHJvb20gJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XG4gICAgICAgICAgICBjb25zdCBtdXNocm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG11c2hyb29tKTtcbiAgICAgICAgICAgIG11c2hyb29tLm5hbWUgPSBcIk11c2hyb29tXCI7XG4gICAgICAgICAgICBtdXNocm9vbS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBtdXNocm9vbTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42EIOaLv+i1t+iYkeiPh1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tQUCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHBwID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcFByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHApO1xuICAgICAgICAgICAgcHAubmFtZSA9IFwiUFBcIjtcbiAgICAgICAgICAgIHBwLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBwO1xuXG4gICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYUg5ou/6LW355Wq6IyEXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja0NoZWVzZSAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWVzZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGVlc2UpO1xuICAgICAgICAgICAgY2hlZXNlLm5hbWUgPSBcIkNoZWVzZVwiO1xuICAgICAgICAgICAgY2hlZXNlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGNoZWVzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6eAIOaLv+i1t+i1t+WPuFwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja0RvdWdoICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgY29uc3QgZG91Z2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRvdWdoUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChkb3VnaCk7XG4gICAgICAgICAgICBkb3VnaC5uYW1lID0gXCJEb3VnaFwiO1xuICAgICAgICAgICAgZG91Z2guc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gZG91Z2g7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmi7/otbfpurXlnJhcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIPCflIQg5pK/6LW35Lu75L2VIG5hbWUg5Lul6aOf5p2Q6ZaL6aCt55qE5p2x6KW/XG4gICAgICAgICAgICBjb25zdCBwaWNrYWJsZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uZmluZChjaGlsZCA9PlxuICAgICAgICAgICAgICAgICBbXCJEb3VnaFwiLCBcIkZsYXRicmVhZFwiLCBcIkNoZWVzZVwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlRvbWF0b1wiLCBcIlBpenphU2F1Y2VcIiwgXG4gICAgICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2hlZXNlX3BpenphXCIsIFwibXVzaHJvb21fcGl6emFcIiwgXCJwZXBwZXJfcGl6emFcIiAvLyDihpAg5Yqg6YCZ5LiJ5YCLXG4gICAgICAgICAgICAgICAgICAgIF0uc29tZShwcmVmaXggPT5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZS5zdGFydHNXaXRoKHByZWZpeClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHBpY2thYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBwaWNrYWJsZTtcbiAgICAgICAgICAgICAgICBwaWNrYWJsZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBpY2thYmxlKTtcbiAgICAgICAgICAgICAgICBwaWNrYWJsZS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaSv+i1t+ahjOS4iueahOeJqeWTge+8mlwiICsgcGlja2FibGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jdXJyZW50RHJvcFRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcbiAgICAgICAgICAgIGlmICghZHJvcFBvaW50KSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuKdjCDmib7kuI3liLAgRHJvcFBvaW5077yM54Sh5rOV5pS+572u77yBXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbHJlYWR5SGFzT3RoZXJUb3BwaW5ncyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQgIT09IGRyb3BQb2ludCAmJlxuICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUgIT09IFwiRmxhdGJyZWFkXCIgJiYgLy8g4pyFIOWFgeioseaciSBGbGF0YnJlYWQg5Zyo5aC0XG4gICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcbiAgICAgICAgICAgICAgICBcIlBQXCIsIFwiU2xpY2VQUFwiLCBcIk11c2hyb29tXCIsIFwiU2xpY2VNdXNocm9vbVwiLFxuICAgICAgICAgICAgICAgIFwiY2hlZXNlX3BpenphXCIsIFwibXVzaHJvb21fcGl6emFcIiwgXCJwZXBwZXJfcGl6emFcIiAvLyDihpAg5Yqg6YCZ5LiJ5YCLXG4gICAgICAgICAgICAgICAgXS5zb21lKHR5cGUgPT5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZSAmJiBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgodHlwZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGhhc0ZsYXRicmVhZCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIkZsYXRicmVhZFwiKTtcblxuICAgICAgICBjb25zdCBhbHJlYWR5SGFzU2FtZVR5cGUgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkICE9PSBkcm9wUG9pbnQgJiYgY2hpbGQubmFtZSA9PT0gdGhpcy5jYXJyaWVkRG91Z2gubmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFoYXNGbGF0YnJlYWQgJiYgYWxyZWFkeUhhc1NhbWVUeXBlKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOeEoeazleaUvue9ru+8jOahjOS4iuW3suacieebuOWQjOmjn+adkO+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDinIUg5pS+572u6YKP6LyvXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5wYXJlbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0O1xuXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGRyb3BQb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcblxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5pS+5LiL54mp5ZOB5YiwIERyb3BQb2ludO+8mlwiICsgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g4pyFIOWYl+ippuWQiOaIkCBQaXp6Ye+8iOaUvue9ruW+jOinuOeZvO+8iVxuICAgICAgICAgICAgdGhpcy50cnlBc3NlbWJsZVBpenphKHRoaXMuY3VycmVudERyb3BUYXJnZXQpO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHNob3dEZWxpdmVyeUVmZmVjdCgpIHtcbiAgICAgICAgLy8g6aOE5a2X5pWI5p6cXG4gICAgICAgIGNvbnN0IHRpcHNOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzTGFiZWxQcmVmYWIpO1xuICAgICAgICB0aXBzTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjIoMCwgMTAwKSkpOyAvLyDlh7rnj77lnKjop5LoibLkuIrmlrlcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aXBzTm9kZSk7XG5cbiAgICAgICAgLy8g6aOE5rWuICsg5reh5Ye6XG4gICAgICAgIGNjLnR3ZWVuKHRpcHNOb2RlKVxuICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDYwLCAwKSwgb3BhY2l0eTogLTI1NSB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cblxuICAgICAgICAvLyDnspLlrZDnibnmlYhcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzUGFydGljbGVQcmVmYWIpO1xuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGVmZmVjdCk7XG4gICAgfVxuXG5cblxuXG4gICAgcGxheUFuaW0obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShuYW1lKTtcbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NoZWVzZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5Y+v5Lul5pK/6LW36LW35Y+4XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tQUCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYUg5Y+v5Lul5pK/6LW355Wq6IyE77yBXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tNdXNocm9vbSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA4IHx8IG90aGVyQ29sbGlkZXIudGFnID09PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBvdGhlckNvbGxpZGVyLnRhZzsgIC8vIOiomOS9j+ebruWJjeeisOWIsOWTquWAiyB0YWdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldCA9IG90aGVyQ29sbGlkZXIubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6WjIOaOpeinuOWIsOegp+advyBUYWcgPVwiLCBvdGhlckNvbGxpZGVyLnRhZyk7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gMTE7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xuICAgICAgICAgICAgdGhpcy5pc05lYXJPdmVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG90aGVyQ29sbGlkZXIubm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UpSDmjqXop7jliLDng6TnrrHvvIFcIik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ2hlZXNlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja1BQID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA4IHx8IG90aGVyQ29sbGlkZXIudGFnID09PSAxMCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gbnVsbDsgICBcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xuICAgICAgICAgICAgdGhpcy5pc05lYXJPdmVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5lYXJieU92ZW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuYmFrZVNvdW5kSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOSkge1xuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XG4gICAgICAgIH1cblxuXG4gICAgfSBcblxuXG5cblxufVxuIl19