
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
        _this.uiManagerNode = null; // 拖入你的 MenuBar 根節點
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
        this.menuManager = (_a = this.uiManagerNode) === null || _a === void 0 ? void 0 : _a.getComponent("MenuBar");
    };
    PlayerController.prototype.update = function (dt) {
        var dir = this.input.getMoveDirection();
        if (!dir.equals(cc.Vec2.ZERO)) {
            // 使用物理引擎的 linearVelocity 控制移動
            this.rb.linearVelocity = dir.clone().normalize().mul(this.speed);
            this.lastDir = dir.clone();
            // 動畫切換（與方向判斷無變）
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim("girl_walk_back");
                }
                else {
                    this.playAnim("girl_idle_walk");
                }
                this.node.scaleX = 1;
            }
            else {
                if (dir.x > 0) {
                    this.playAnim("girl_walk_right");
                    this.node.scaleX = 1;
                }
                else {
                    this.playAnim("girl_walk_left");
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
                this.menuManager.addScore(10); // 假設每道菜加 10 分
                console.log("🎉 成功出餐：" + pizzaName_1);
            }
            else {
                console.warn("❌ 此披薩不在菜單上，不能出餐！");
            }
        }
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
            console.log("🍄 拿起蘑菇");
        }
        if (this.canPickPP && !this.carriedDough) {
            var pp = cc.instantiate(this.ppPrefab);
            this.node.addChild(pp);
            pp.name = "PP";
            pp.setPosition(cc.v2(0, 50));
            this.carriedDough = pp;
            console.log("🍅 拿起番茄");
        }
        if (this.canPickCheese && !this.carriedDough) {
            var cheese = cc.instantiate(this.cheesePrefab);
            this.node.addChild(cheese);
            cheese.name = "Cheese";
            cheese.setPosition(cc.v2(0, 50));
            this.carriedDough = cheese;
            console.log("🧀 拿起起司");
        }
        if (this.canPickDough && !this.carriedDough) {
            var dough = cc.instantiate(this.doughPrefab);
            this.node.addChild(dough);
            dough.name = "Dough";
            dough.setPosition(cc.v2(0, 50));
            this.carriedDough = dough;
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
            // ✅ 嘗試合成 Pizza（放置後觸發）
            this.tryAssemblePizza(this.currentDropTarget);
        }
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
        property(cc.Node)
    ], PlayerController.prototype, "uiManagerNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBaW9CQztRQS9uQkcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsbUJBQWEsR0FBWSxJQUFJLENBQUMsQ0FBRSxtQkFBbUI7UUFFM0MsZ0JBQVUsR0FBWSxLQUFLLENBQUMsQ0FBRyxpQkFBaUI7UUFDaEQsaUJBQVcsR0FBUSxJQUFJLENBQUMsQ0FBTyxrQkFBa0I7UUFHakQsZ0JBQVUsR0FBWSxJQUFJLENBQUMsQ0FBQyxhQUFhO1FBR3pDLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFhLEdBQVcsR0FBRyxDQUFDLENBQUMsY0FB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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDWTtJQWxEYixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWlvQnBDO0lBQUQsdUJBQUM7Q0Fqb0JELEFBaW9CQyxDQWpvQjZDLEVBQUUsQ0FBQyxTQUFTLEdBaW9CekQ7a0JBam9Cb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZG91Z2hQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZsYXRicmVhZFByZWZhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ3JhdGVkQ2hlZXNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2xpY2VwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNsaWNlbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZWVzZVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBtdXNocm9vbVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZXBwZXJQaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc21va2VFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbW9rZVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTWFuYWdlck5vZGU6IGNjLk5vZGUgPSBudWxsOyAgLy8g5ouW5YWl5L2g55qEIE1lbnVCYXIg5qC556+A6bueXHJcblxyXG4gICAgcHJpdmF0ZSBjYW5EZWxpdmVyOiBib29sZWFuID0gZmFsc2U7ICAgLy8g5piv5ZCm56Kw5Yiw5Ye66aSQ5Y+w77yIdGFnIDnvvIlcclxuICAgIHByaXZhdGUgbWVudU1hbmFnZXI6IGFueSA9IG51bGw7ICAgICAgIC8vIOWvpumamyBNZW51QmFyIOiFs+acrOW8leeUqFxyXG5cclxuXHJcbiAgICBwcml2YXRlIG5lYXJieU92ZW46IGNjLk5vZGUgPSBudWxsOyAvLyDoqJjpjITnm67liY3pnaDov5Hlk6rlgIvng6TnrrFcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzbW9rZVRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzbW9rZUludGVydmFsOiBudW1iZXIgPSAwLjU7IC8vIOavjyAwLjUg56eS5YaS5LiA5qyh54WZXHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgbGFzdERpcjogY2MuVmVjMiA9IGNjLnYyKDAsIC0xKTsgLy8g6aCQ6Kit5ZCR5LiL77yI5YmN77yJXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIC8vIOm6teWcmFxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrRG91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuRHJvcERvdWdoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhcnJpZWREb3VnaDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudERyb3BUYWc6IG51bWJlciA9IG51bGw7IFxyXG4gICAgcHJpdmF0ZSBpc0Nob3BwaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNob3BQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2hvcEZpbGw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOi1t+WPuFxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrQ2hlZXNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrUFA6IGJvb2xlYW4gPSBmYWxzZTsgLy8gdGFnIDUg5ou/IHBwIOeahCBmbGFnXHJcblxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrTXVzaHJvb206IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDng6TmiqvolqlcclxuICAgIHByaXZhdGUgaXNCYWtpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYmFrZVByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc05lYXJPdmVuOiBib29sZWFuID0gZmFsc2U7IC8vIHRhZyA9IDEyXHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGxhc3RJbnRlcmFjdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGludGVyYWN0Q29vbGRvd246IG51bWJlciA9IDAuMjsgLy8gMC4yIOenkuWGt+WNu+aZgumWk1xyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXRoaXMucmIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIFJpZ2lkQm9keTJEIOe1hOS7tu+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdpcmxfaWRsZV9iYWNrXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgS2V5Ym9hcmRDb250cm9scygpO1xyXG5cclxuICAgICAgICB0aGlzLmNob3BGaWxsID0gdGhpcy5jaG9wQmFyLmdldENoaWxkQnlOYW1lKFwiRmlsbGJhclwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hvcEZpbGwpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIEZpbGxiYXLvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTsgLy8g6aCQ6Kit5LiN6aGv56S6XHJcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IHRoaXMudWlNYW5hZ2VyTm9kZT8uZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoIWRpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICAvLyDkvb/nlKjniannkIblvJXmk47nmoQgbGluZWFyVmVsb2NpdHkg5o6n5Yi256e75YuVXHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF93YWxrX2JhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfd2Fsa1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WLle+8iOmAn+W6puatuOmbtu+8iVxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmkq3mlL7pnZzmraLli5XnlatcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbnRlcmFjdFRpbWUgPiB0aGlzLmludGVyYWN0Q29vbGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiYgdGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggPT0gbnVsbCAmJiAhdGhpcy5pc0Nob3BwaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSBwcm9ncmVzc1JhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNob3BQcm9ncmVzcyA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDaG9wcGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxDaG9wcGluZygpOyAgLy8g546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g54OY54Ok5rWB56iLXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiZcclxuICAgICAgICAgICAgdGhpcy5pc05lYXJPdmVuICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXHJcbiAgICAgICAgICAgIHRoaXMuaXNQaXp6YSh0aGlzLmNhcnJpZWREb3VnaC5uYW1lKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSAmJiAvLyDinIUg5LiN6IO95piv5bey54Ok6YGO55qEXHJcbiAgICAgICAgICAgICF0aGlzLmlzQmFraW5nXHJcbiAgICAgICAgKXtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIneasoeaMieS4i++8jOmWi+Wni+eDmOeDpFxyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hY3RpdmUgPSBmYWxzZTsgLy8g6K6T5oqr6Jap5raI5aSxXHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflKUg5oqr6Jap5pS+5YWl54Ok566x5LitLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDku6Xng5jng6Tmj5DnpLpcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggJiZcclxuICAgICAgICAgICAgdGhpcy5pc1BpenphKHRoaXMuY2FycmllZERvdWdoLm5hbWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8g6YCZ5aGK5oqr6Jap5bey57aT54Ok6YGO5LqG77yM5LiN6IO96YeN6KSH54OY54Ok77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWtpbmcgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHRoaXMuYmFrZVByb2dyZXNzIC8gMywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcmF0aW87XHJcblxyXG4gICAgICAgICAgICAvLyDlhpLnhZnpgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5zbW9rZVRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbW9rZVRpbWVyID49IHRoaXMuc21va2VJbnRlcnZhbCAmJiB0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlblBvaW50ID0gdGhpcy5uZWFyYnlPdmVuLmdldENoaWxkQnlOYW1lKFwib3Zlbl9wb2ludFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbW9rZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc21va2VFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtb2tlLm5hbWUgPSBcIlNtb2tlRWZmZWN0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gb3ZlblBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAtNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5uZWFyYnlPdmVuLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmJ5T3Zlbi5hZGRDaGlsZChzbW9rZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SqCDng5jng6TkuK3lhpLnhZnvvIjkvoboh6ogb3Zlbl9wb2ludO+8iVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBvdmVuX3BvaW5077yM54Sh5rOV5YaS54WZXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlUHJvZ3Jlc3MgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hCYWtpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Jha2luZyAmJiAhdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDng5jng6TkuK3mlrfvvIFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQmFraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGl2ZXIgJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g5qqi5p+l5piv5ZCm6IiH6I+c5Zau5bCN5oeJXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRTbG90ID0gdGhpcy5tZW51TWFuYWdlci5zbG90cy5maW5kKHNsb3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROYW1lID09PSBwaXp6YU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlh7rppJDmiJDlip9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKDEwKTsgIC8vIOWBh+ioreavj+mBk+iPnOWKoCAxMCDliIZcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDmiJDlip/lh7rppJDvvJpcIiArIHBpenphTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5q2k5oqr6Jap5LiN5Zyo6I+c5Zau5LiK77yM5LiN6IO95Ye66aSQ77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzUGl6emEobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFtcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCJdLmluY2x1ZGVzKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbEJha2luZygpIHtcclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7IFxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmlzaEJha2luZygpIHtcclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyDng5jng6TntZDmnZ/vvIzmuIXpmaTlhpLnhZlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBcIlNtb2tlRWZmZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmVhcmJ5T3Zlbikge1xyXG4gICAgICAgICAgICB0aGlzLm5lYXJieU92ZW4uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJTbW9rZUVmZmVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYOKchSAke3RoaXMuY2FycmllZERvdWdoLm5hbWV9IOeDmOeDpOWujOaIkO+8gWApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cnlBc3NlbWJsZVBpenphKHBhcmVudE5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBpbmdyZWRpZW50TmFtZXMgPSBwYXJlbnROb2RlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5uYW1lKTtcclxuICAgICAgICBjb25zdCBoYXNGbGF0YnJlYWQgPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJGbGF0YnJlYWRcIik7XHJcbiAgICAgICAgY29uc3QgaGFzQ2hlZXNlID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiR3JhdGVkQ2hlZXNlXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc011c2hyb29tID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiU2xpY2VNdXNocm9vbVwiKTtcclxuICAgICAgICBjb25zdCBoYXNQUCA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIlNsaWNlUFBcIik7XHJcblxyXG4gICAgICAgIGlmICghaGFzRmxhdGJyZWFkKSByZXR1cm47IC8vIOW/hemgiOWFiOaciSBmbGF0YnJlYWQg5omN6IO95ZCI5oiQXHJcblxyXG4gICAgICAgIGxldCBwaXp6YTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChoYXNDaGVlc2UgJiYgIWhhc011c2hyb29tICYmICFoYXNQUCkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUGl6emFQcmVmYWIpO1xyXG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJjaGVlc2VfcGl6emFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc011c2hyb29tICYmICFoYXNDaGVlc2UgJiYgIWhhc1BQKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gY2MuaW5zdGFudGlhdGUodGhpcy5tdXNocm9vbVBpenphUHJlZmFiKTtcclxuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwibXVzaHJvb21fcGl6emFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc1BQICYmICFoYXNDaGVlc2UgJiYgIWhhc011c2hyb29tKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXBwZXJQaXp6YVByZWZhYik7XHJcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcInBlcHBlcl9waXp6YVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8g5bCa5LiN5pSv5o+06KSH5ZCI5Y+j5ZGzIHBpenphXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliKrpmaTljp/mlplcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoW1wiRmxhdGJyZWFkXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiU2xpY2VNdXNocm9vbVwiLCBcIlNsaWNlUFBcIl0uaW5jbHVkZXMoY2hpbGQubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDliqDlhaUgcGl6emFcclxuICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHBpenphKTtcclxuICAgICAgICBjb25zdCBkcm9wUG9pbnQgPSBwYXJlbnROb2RlLmdldENoaWxkQnlOYW1lKFwiRHJvcFBvaW50XCIpO1xyXG4gICAgICAgIGlmIChkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBwYXJlbnROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgcGl6emEuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYPCfjZUg5ZCI5oiQICR7cGl6emEubmFtZX0g5oiQ5Yqf77yBYCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbmNlbENob3BwaW5nKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaG9wcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurXvvIFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDaG9wcGluZygpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERyb3BUYXJnZXQgfHwgdGhpcy5jdXJyZW50RHJvcFRhZyAhPT0gOCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOWPquiDveWcqOegp+adv+S4iu+8iHRhZyA9IDjvvInliIfpo5/mnZDvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0RvdWdoID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJEb3VnaFwiKSk7XHJcbiAgICAgICAgY29uc3QgaGFzQ2hlZXNlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJDaGVlc2VcIikpO1xyXG4gICAgICAgIGNvbnN0IGhhc1BQID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IFwiUFBcIik7XHJcbiAgICAgICAgY29uc3QgaGFzTXVzaHJvb20gPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJNdXNocm9vbVwiKTtcclxuXHJcblxyXG4gICAgICAgIGlmICghaGFzRG91Z2ggJiYgIWhhc0NoZWVzZSAmJiAhaGFzUFAgJiYgIWhhc011c2hyb29tKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g6YCZ5YCL56Cn5p2/5LiK5rKS5pyJ6bq15ZyY77yM5LiN6IO95YiH77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNDaG9wcGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmNob3BCYXIucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpOyAgLy8g6aGv56S65Zyo6KeS6Imy6aCt5LiKXHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCflKog5Zyo5q2j56K656Cn5p2/5LiK6ZaL5aeL5YiH6bq15ZyY77yBXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGZpbmlzaENob3BwaW5nKCkge1xyXG4gICAgICAgIGxldCBpc0NoZWVzZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0RvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzUFAgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNNdXNocm9vbSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBcIkRvdWdoXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlzRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiQ2hlZXNlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlzQ2hlZXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIlBQXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlzUFAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiTXVzaHJvb21cIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNNdXNocm9vbSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3SXRlbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc0RvdWdoKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZsYXRicmVhZFByZWZhKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJGbGF0YnJlYWRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlZXNlKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyYXRlZENoZWVzZVByZWZhYik7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiR3JhdGVkQ2hlZXNlXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1BQKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsaWNlcHBQcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIlNsaWNlUFBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTXVzaHJvb20pIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2xpY2VtdXNocm9vbVByZWZhYik7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiU2xpY2VNdXNocm9vbVwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChuZXdJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQuYWRkQ2hpbGQobmV3SXRlbSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcm9wUG9pbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiRHJvcFBvaW50XCIpO1xyXG4gICAgICAgICAgICBpZiAoIWRyb3BQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDmib7kuI3liLAgRHJvcFBvaW5077yM54Sh5rOV5pS+572u5YiH5a6M55qE54mp5ZOB77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGRyb3BQb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinIUg5YiH5a6MICR7bmV3SXRlbS5uYW1lfe+8jOaUvue9ruaIkOWKn++8gWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB0cnlJbnRlcmFjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrTXVzaHJvb20gJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG11c2hyb29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5tdXNocm9vbVByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChtdXNocm9vbSk7XHJcbiAgICAgICAgICAgIG11c2hyb29tLm5hbWUgPSBcIk11c2hyb29tXCI7XHJcbiAgICAgICAgICAgIG11c2hyb29tLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbXVzaHJvb207XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDmi7/otbfomJHoj4dcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrUFAgJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBwID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcFByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcCk7XHJcbiAgICAgICAgICAgIHBwLm5hbWUgPSBcIlBQXCI7XHJcbiAgICAgICAgICAgIHBwLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gcHA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhSDmi7/otbfnlarojIRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrQ2hlZXNlICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVlc2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoZWVzZVByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGVlc2UpO1xyXG4gICAgICAgICAgICBjaGVlc2UubmFtZSA9IFwiQ2hlZXNlXCI7XHJcbiAgICAgICAgICAgIGNoZWVzZS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGNoZWVzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6eAIOaLv+i1t+i1t+WPuFwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrRG91Z2ggJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvdWdoID0gY2MuaW5zdGFudGlhdGUodGhpcy5kb3VnaFByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChkb3VnaCk7XHJcbiAgICAgICAgICAgIGRvdWdoLm5hbWUgPSBcIkRvdWdoXCI7XHJcbiAgICAgICAgICAgIGRvdWdoLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gZG91Z2g7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmi7/otbfpurXlnJhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vIPCflIQg5pK/6LW35Lu75L2VIG5hbWUg5Lul6aOf5p2Q6ZaL6aCt55qE5p2x6KW/XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2thYmxlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5maW5kKGNoaWxkID0+XHJcbiAgICAgICAgICAgICAgICAgW1wiRG91Z2hcIiwgXCJGbGF0YnJlYWRcIiwgXCJDaGVlc2VcIiwgXCJHcmF0ZWRDaGVlc2VcIiwgXCJUb21hdG9cIiwgXCJQaXp6YVNhdWNlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiIC8vIOKGkCDliqDpgJnkuInlgItcclxuICAgICAgICAgICAgICAgICAgICBdLnNvbWUocHJlZml4ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZS5zdGFydHNXaXRoKHByZWZpeClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHBpY2thYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBpY2thYmxlO1xyXG4gICAgICAgICAgICAgICAgcGlja2FibGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBpY2thYmxlKTtcclxuICAgICAgICAgICAgICAgIHBpY2thYmxlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjpIg5pK/6LW35qGM5LiK55qE54mp5ZOB77yaXCIgKyBwaWNrYWJsZS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNhbkRyb3BEb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BQb2ludCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJEcm9wUG9pbnRcIik7XHJcbiAgICAgICAgICAgIGlmICghZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi4p2MIOaJvuS4jeWIsCBEcm9wUG9pbnTvvIznhKHms5XmlL7nva7vvIFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWxyZWFkeUhhc090aGVyVG9wcGluZ3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQgIT09IGRyb3BQb2ludCAmJlxyXG4gICAgICAgICAgICAgICAgY2hpbGQubmFtZSAhPT0gXCJGbGF0YnJlYWRcIiAmJiAvLyDinIUg5YWB6Kix5pyJIEZsYXRicmVhZCDlnKjloLRcclxuICAgICAgICAgICAgICAgICBbXCJEb3VnaFwiLCBcIkZsYXRicmVhZFwiLCBcIkNoZWVzZVwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlRvbWF0b1wiLCBcIlBpenphU2F1Y2VcIiwgXHJcbiAgICAgICAgICAgICAgICBcIlBQXCIsIFwiU2xpY2VQUFwiLCBcIk11c2hyb29tXCIsIFwiU2xpY2VNdXNocm9vbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiIC8vIOKGkCDliqDpgJnkuInlgItcclxuICAgICAgICAgICAgICAgIF0uc29tZSh0eXBlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZSAmJiBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgodHlwZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBoYXNGbGF0YnJlYWQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJGbGF0YnJlYWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFscmVhZHlIYXNTYW1lVHlwZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZHJvcFBvaW50ICYmIGNoaWxkLm5hbWUgPT09IHRoaXMuY2FycmllZERvdWdoLm5hbWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaGFzRmxhdGJyZWFkICYmIGFscmVhZHlIYXNTYW1lVHlwZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOeEoeazleaUvue9ru+8jOahjOS4iuW3suacieebuOWQjOmjn+adkO+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOKchSDmlL7nva7pgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2gucGFyZW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIOaUvuS4i+eJqeWTgeWIsCBEcm9wUG9pbnTvvJpcIiArIHRoaXMuY2FycmllZERvdWdoLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIOKchSDlmJfoqablkIjmiJAgUGl6emHvvIjmlL7nva7lvozop7jnmbzvvIlcclxuICAgICAgICAgICAgdGhpcy50cnlBc3NlbWJsZVBpenphKHRoaXMuY3VycmVudERyb3BUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDaGVlc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5Y+v5Lul5pK/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYUg5Y+v5Lul5pK/6LW355Wq6IyE77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ecm9wRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBvdGhlckNvbGxpZGVyLnRhZzsgIC8vIOiomOS9j+ebruWJjeeisOWIsOWTquWAiyB0YWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+loyDmjqXop7jliLDnoKfmnb8gVGFnID1cIiwgb3RoZXJDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhZyA9IDExO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZWFyT3ZlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaOpeinuOWIsOeDpOeuse+8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NoZWVzZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDlj6/ku6Xmkr/otbfomJHoj4fvvIFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTAgfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBudWxsOyAgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSBcclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19