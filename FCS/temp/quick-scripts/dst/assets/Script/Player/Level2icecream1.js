
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/Level2icecream1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f76ecjoFtBKYLLQLsri7mn', 'Level2icecream1');
// Script/Player/Level2icecream1.ts

"use strict";
// 🍦 冰淇淋製作與出餐邏輯整合段（單球版本）含角色控制、動畫與粒子特效 + 製作進度條 chopBar + 垃圾桶邏輯
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
var Level2icecream2 = /** @class */ (function (_super) {
    __extends(Level2icecream2, _super);
    function Level2icecream2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.conePrefab = null;
        _this.vanillaPrefab = null;
        _this.strawberryPrefab = null;
        _this.chocolatePrefab = null;
        _this.trashSmokePrefab = null;
        _this.uiManager = null;
        _this.tipsLabelPrefab = null;
        _this.tipsParticlePrefab = null;
        _this.anim = null;
        _this.craftParticlePrefab = null;
        _this.chopBarPrefab = null;
        _this.speed = 200;
        _this.runDustEffectPrefab = null;
        _this.input = null;
        _this.rb = null;
        _this.currentAnim = "";
        _this.lastDir = cc.v2(0, -1);
        _this.isRunning = false;
        _this.runMultiplier = 1.3;
        _this.runDustTimer = 0;
        _this.runDustInterval = 0.2;
        _this.carriedDough = null;
        _this.canPickCone = false;
        _this.canAddVanilla = false;
        _this.canAddStrawberry = false;
        _this.canAddChocolate = false;
        _this.canDeliver = false;
        _this.canTrash = false;
        _this.iceCreamProgress = 0;
        _this.menuManager = null;
        _this.chopBar = null;
        _this.chopFill = null;
        return _this;
    }
    Level2icecream2.prototype.onLoad = function () {
        var _a;
        this.rb = this.getComponent(cc.RigidBody);
        this.menuManager = (_a = this.uiManager) === null || _a === void 0 ? void 0 : _a.getComponent("MenuBar");
        this.input = new KeyboardControls_1.KeyboardControls();
        this.playAnim("girl_idle_back");
        var barNode = cc.instantiate(this.chopBarPrefab);
        this.node.addChild(barNode);
        barNode.setPosition(cc.v2(0, 80));
        this.chopBar = barNode;
        this.chopFill = barNode.getChildByName("Fillbar");
        barNode.active = false;
    };
    Level2icecream2.prototype.update = function (dt) {
        var dir = this.input.getMoveDirection();
        this.isRunning = this.input.getRunHeld();
        if (!dir.equals(cc.Vec2.ZERO)) {
            var finalSpeed = this.speed;
            if (this.isRunning)
                finalSpeed *= this.runMultiplier;
            this.rb.linearVelocity = dir.clone().normalize().mul(finalSpeed);
            this.lastDir = dir.clone();
            if (this.isRunning) {
                this.runDustTimer += dt;
                if (this.runDustTimer >= this.runDustInterval) {
                    this.runDustTimer = 0;
                    this.spawnRunDust();
                }
            }
            else {
                this.runDustTimer = 0;
            }
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                this.playAnim(dir.y > 0 ? (this.isRunning ? "girl_run_back" : "girl_walk_back") : (this.isRunning ? "girl_run" : "girl_walk"));
            }
            else {
                this.playAnim(dir.x > 0 ? (this.isRunning ? "girl_run_right" : "girl_walk_right") : (this.isRunning ? "girl_run_left" : "girl_walk_left"));
            }
            this.node.scaleX = 1;
        }
        else {
            this.rb.linearVelocity = cc.v2(0, 0);
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "girl_idle_back" : "girl_idle");
            }
            else {
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
                }
                else if (this.canAddStrawberry) {
                    this.replaceWithIceCream("strawberry-icecream-menu", this.strawberryPrefab);
                }
                else if (this.canAddChocolate) {
                    this.replaceWithIceCream("chocolate-icecream-menu", this.chocolatePrefab);
                }
            }
        }
        else {
            this.chopBar.active = false;
            this.iceCreamProgress = 0;
            this.chopFill.scaleX = 0;
        }
        if (this.canDeliver && this.input.getInteractPressed() && this.carriedDough) {
            var scoopName_1 = this.carriedDough.name;
            var matchedSlot = this.menuManager.slots.find(function (slot) {
                var _a;
                var menuName = (_a = slot.children[0]) === null || _a === void 0 ? void 0 : _a.name;
                return menuName === scoopName_1;
            });
            if (matchedSlot) {
                this.carriedDough.destroy();
                this.carriedDough = null;
                matchedSlot.removeAllChildren();
                this.menuManager.addScore(30);
                this.showDeliveryEffect();
                this.menuManager.checkAndFillSlots();
                if (this.anim)
                    this.anim.play("girl_happy");
                console.log("✅ 成功出餐冰淇淋：" + scoopName_1);
            }
            else {
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
                var smoke_1 = cc.instantiate(this.trashSmokePrefab);
                smoke_1.setPosition(this.node.getPosition());
                this.node.parent.addChild(smoke_1);
                cc.tween(smoke_1)
                    .to(1.5, { opacity: 0 })
                    .call(function () { return smoke_1.destroy(); })
                    .start();
            }
            this.menuManager.addScore(-50);
            console.log("🗑️ 丟棄手上物品");
        }
        if (this.input.getInteractPressed()) {
            this.tryInteract();
        }
    };
    Level2icecream2.prototype.tryInteract = function () {
        if (this.canPickCone && !this.carriedDough) {
            var cone = cc.instantiate(this.conePrefab);
            cone.name = "Cone";
            cone.setPosition(cc.v3(0, 10, 50));
            this.node.addChild(cone);
            this.carriedDough = cone;
            if (this.anim)
                this.anim.play("girl_pick");
            console.log("🍦 拿起甜筒");
        }
    };
    Level2icecream2.prototype.replaceWithIceCream = function (name, prefab) {
        if (!this.carriedDough)
            return;
        this.carriedDough.destroy();
        var iceCream = cc.instantiate(prefab);
        iceCream.name = name;
        iceCream.setPosition(cc.v2(0, 2));
        this.node.addChild(iceCream);
        this.carriedDough = iceCream;
        this.iceCreamProgress = 0;
        this.chopBar.active = false;
        this.chopFill.scaleX = 0;
        var craftEffect = cc.instantiate(this.craftParticlePrefab);
        craftEffect.setPosition(this.node.getPosition());
        this.node.parent.addChild(craftEffect);
        console.log("\uD83C\uDF68 \u88FD\u4F5C\u5B8C\u6210\uFF1A" + name);
    };
    Level2icecream2.prototype.showDeliveryEffect = function () {
        var tipsNode = cc.instantiate(this.tipsLabelPrefab);
        tipsNode.setPosition(this.node.getPosition().add(cc.v2(0, 100)));
        this.node.parent.addChild(tipsNode);
        cc.tween(tipsNode)
            .by(1, { position: cc.v3(0, 60, 0), opacity: -255 }, { easing: 'cubicOut' })
            .call(function () { return tipsNode.destroy(); })
            .start();
        var effect = cc.instantiate(this.tipsParticlePrefab);
        effect.setPosition(this.node.getPosition());
        this.node.parent.addChild(effect);
    };
    Level2icecream2.prototype.spawnRunDust = function () {
        if (!this.runDustEffectPrefab)
            return;
        var dust = cc.instantiate(this.runDustEffectPrefab);
        var pos = this.node.getPosition();
        pos.y -= 40;
        dust.setPosition(pos);
        this.node.parent.addChild(dust);
    };
    Level2icecream2.prototype.playAnim = function (name) {
        if (this.currentAnim === name)
            return;
        this.currentAnim = name;
        this.anim.play(name);
    };
    Level2icecream2.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 2) {
            this.canPickCone = true;
        }
        else if (otherCollider.tag === 3) {
            this.canAddVanilla = true;
        }
        else if (otherCollider.tag === 4) {
            this.canAddStrawberry = true;
        }
        else if (otherCollider.tag === 5) {
            this.canAddChocolate = true;
        }
        else if (otherCollider.tag === 6) {
            this.canDeliver = true;
        }
        else if (otherCollider.tag === 7) {
            this.canTrash = true;
        }
    };
    Level2icecream2.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 2) {
            this.canPickCone = false;
        }
        else if (otherCollider.tag === 3) {
            this.canAddVanilla = false;
        }
        else if (otherCollider.tag === 4) {
            this.canAddStrawberry = false;
        }
        else if (otherCollider.tag === 5) {
            this.canAddChocolate = false;
        }
        else if (otherCollider.tag === 6) {
            this.canDeliver = false;
        }
        else if (otherCollider.tag === 7) {
            this.canTrash = false;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "conePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "vanillaPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "strawberryPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "chocolatePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "trashSmokePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Level2icecream2.prototype, "uiManager", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "tipsLabelPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "tipsParticlePrefab", void 0);
    __decorate([
        property(cc.Animation)
    ], Level2icecream2.prototype, "anim", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "craftParticlePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "chopBarPrefab", void 0);
    __decorate([
        property
    ], Level2icecream2.prototype, "speed", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level2icecream2.prototype, "runDustEffectPrefab", void 0);
    Level2icecream2 = __decorate([
        ccclass
    ], Level2icecream2);
    return Level2icecream2;
}(cc.Component));
exports.default = Level2icecream2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXExldmVsMmljZWNyZWFtMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd1FDO1FBdFFHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUVsQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBQzdCLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIscUJBQWUsR0FBVyxHQUFHLENBQUM7UUFFOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Is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LEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDZTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrREFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNZO0lBR2hDO1FBREMsUUFBUTtrREFDVztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNrQjtJQWxDckIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXdRbkM7SUFBRCxzQkFBQztDQXhRRCxBQXdRQyxDQXhRNEMsRUFBRSxDQUFDLFNBQVMsR0F3UXhEO2tCQXhRb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIPCfjaYg5Yaw5reH5reL6KO95L2c6IiH5Ye66aSQ6YKP6Lyv5pW05ZCI5q6177yI5Zau55CD54mI5pys77yJ5ZCr6KeS6Imy5o6n5Yi244CB5YuV55Wr6IiH57KS5a2Q54m55pWIICsg6KO95L2c6YCy5bqm5qKdIGNob3BCYXIgKyDlnoPlnL7mobbpgo/ovK9cclxuXHJcbmltcG9ydCB7IEtleWJvYXJkQ29udHJvbHMgfSBmcm9tIFwiLi9LZXlib2FyZENvbnRyb2xzXCI7XHJcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbDJpY2VjcmVhbTIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNvbmVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdmFuaWxsYVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdHJhd2JlcnJ5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNob2NvbGF0ZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdHJhc2hTbW9rZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aXBzTGFiZWxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGlwc1BhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjcmFmdFBhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaG9wQmFyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcnVuRHVzdEVmZmVjdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlucHV0OiBJSW5wdXRDb250cm9scyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgbGFzdERpcjogY2MuVmVjMiA9IGNjLnYyKDAsIC0xKTtcclxuICAgIHByaXZhdGUgaXNSdW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJ1bk11bHRpcGxpZXI6IG51bWJlciA9IDEuMztcclxuICAgIHByaXZhdGUgcnVuRHVzdFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBydW5EdXN0SW50ZXJ2YWw6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgICBwcml2YXRlIGNhcnJpZWREb3VnaDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhblBpY2tDb25lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkFkZFZhbmlsbGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuQWRkU3RyYXdiZXJyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5BZGRDaG9jb2xhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuRGVsaXZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5UcmFzaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpY2VDcmVhbVByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtZW51TWFuYWdlcjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNob3BCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaG9wRmlsbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSB0aGlzLnVpTWFuYWdlcj8uZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IEtleWJvYXJkQ29udHJvbHMoKTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF9pZGxlX2JhY2tcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNob3BCYXJQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChiYXJOb2RlKTtcclxuICAgICAgICBiYXJOb2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyID0gYmFyTm9kZTtcclxuICAgICAgICB0aGlzLmNob3BGaWxsID0gYmFyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZpbGxiYXJcIik7XHJcbiAgICAgICAgYmFyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdGhpcy5pbnB1dC5nZXRSdW5IZWxkKCk7XHJcblxyXG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFNwZWVkID0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSBmaW5hbFNwZWVkICo9IHRoaXMucnVuTXVsdGlwbGllcjtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bChmaW5hbFNwZWVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJ1bkR1c3RUaW1lciA+PSB0aGlzLnJ1bkR1c3RJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduUnVuRHVzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlyLnkpID4gTWF0aC5hYnMoZGlyLngpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKGRpci55ID4gMCA/ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fYmFja1wiIDogXCJnaXJsX3dhbGtfYmFja1wiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5cIiA6IFwiZ2lybF93YWxrXCIpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oZGlyLnggPiAwID8gKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9yaWdodFwiIDogXCJnaXJsX3dhbGtfcmlnaHRcIikgOiAodGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX2xlZnRcIiA6IFwiZ2lybF93YWxrX2xlZnRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSA9PT0gXCJDb25lXCIgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gTWF0aC5taW4odGhpcy5pY2VDcmVhbVByb2dyZXNzIC8gMSwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pY2VDcmVhbVByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbkFkZFZhbmlsbGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoSWNlQ3JlYW0oXCJ2YW5pbGxhLWljZWNyZWFtLW1lbnVcIiwgdGhpcy52YW5pbGxhUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRTdHJhd2JlcnJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aEljZUNyZWFtKFwic3RyYXdiZXJyeS1pY2VjcmVhbS1tZW51XCIsIHRoaXMuc3RyYXdiZXJyeVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FuQWRkQ2hvY29sYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aEljZUNyZWFtKFwiY2hvY29sYXRlLWljZWNyZWFtLW1lbnVcIiwgdGhpcy5jaG9jb2xhdGVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5EZWxpdmVyICYmIHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkgJiYgdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nvb3BOYW1lID0gdGhpcy5jYXJyaWVkRG91Z2gubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFNsb3QgPSB0aGlzLm1lbnVNYW5hZ2VyLnNsb3RzLmZpbmQoc2xvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51TmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0/Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVudU5hbWUgPT09IHNjb29wTmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuYWRkU2NvcmUoMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsaXZlcnlFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW0pIHRoaXMuYW5pbS5wbGF5KFwiZ2lybF9oYXBweVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIOaIkOWKn+WHuumkkOWGsOa3h+a3i++8mlwiICsgc2Nvb3BOYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdjCDlhrDmt4fmt4voiIfoj5zllq7kuI3nrKbvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblRyYXNoICYmIHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkgJiYgdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLnRyYXNoU21va2VQcmVmYWIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc21va2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRyYXNoU21va2VQcmVmYWIpO1xyXG4gICAgICAgICAgICBzbW9rZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc21va2UpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihzbW9rZSlcclxuICAgICAgICAgICAgICAgIC50bygxLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gc21va2UuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKC01MCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+Xke+4jyDkuJ/mo4TmiYvkuIrnianlk4FcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeUludGVyYWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDb25lICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25lUHJlZmFiKTtcclxuICAgICAgICAgICAgY29uZS5uYW1lID0gXCJDb25lXCI7XHJcbiAgICAgICAgICAgIGNvbmUuc2V0UG9zaXRpb24oY2MudjMoMCwgMTAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjb25lKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBjb25lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfcGlja1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42mIOaLv+i1t+eUnOetklwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZVdpdGhJY2VDcmVhbShuYW1lOiBzdHJpbmcsIHByZWZhYjogY2MuUHJlZmFiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhcnJpZWREb3VnaCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICBjb25zdCBpY2VDcmVhbSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgaWNlQ3JlYW0ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgaWNlQ3JlYW0uc2V0UG9zaXRpb24oY2MudjIoMCwgMikpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpY2VDcmVhbSk7XHJcbiAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBpY2VDcmVhbTtcclxuICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyYWZ0RWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5jcmFmdFBhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBjcmFmdEVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChjcmFmdEVmZmVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYPCfjagg6KO95L2c5a6M5oiQ77yaJHtuYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxpdmVyeUVmZmVjdCgpIHtcclxuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcclxuICAgICAgICB0aXBzTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjIoMCwgMTAwKSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQodGlwc05vZGUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRpcHNOb2RlKVxyXG4gICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgNjAsIDApLCBvcGFjaXR5OiAtMjU1IH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRpcHNOb2RlLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc1BhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBzcGF3blJ1bkR1c3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBkdXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ydW5EdXN0RWZmZWN0UHJlZmFiKTtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBwb3MueSAtPSA0MDtcclxuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChkdXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDb25lID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkVmFuaWxsYSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZFN0cmF3YmVycnkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRDaG9jb2xhdGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVHJhc2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NvbmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkVmFuaWxsYSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRTdHJhd2JlcnJ5ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZENob2NvbGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRyYXNoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==