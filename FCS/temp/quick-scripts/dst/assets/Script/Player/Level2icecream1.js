
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
                this.menuManager.addScore(50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL0xldmVsMmljZWNyZWFtMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd1FDO1FBdFFHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUVsQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBQzdCLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIscUJBQWUsR0FBVyxHQUFHLENBQUM7UUFFOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsaUJB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QUUsQ0FBQyxNQUFNLENBQUM7NERBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDZTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrREFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNrQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNZO0lBR2hDO1FBREMsUUFBUTtrREFDVztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNrQjtJQWxDckIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXdRbkM7SUFBRCxzQkFBQztDQXhRRCxBQXdRQyxDQXhRNEMsRUFBRSxDQUFDLFNBQVMsR0F3UXhEO2tCQXhRb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIPCfjaYg5Yaw5reH5reL6KO95L2c6IiH5Ye66aSQ6YKP6Lyv5pW05ZCI5q6177yI5Zau55CD54mI5pys77yJ5ZCr6KeS6Imy5o6n5Yi244CB5YuV55Wr6IiH57KS5a2Q54m55pWIICsg6KO95L2c6YCy5bqm5qKdIGNob3BCYXIgKyDlnoPlnL7mobbpgo/ovK9cblxuaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMmljZWNyZWFtMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjb25lUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdmFuaWxsYVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHN0cmF3YmVycnlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjaG9jb2xhdGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHRyYXNoU21va2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7IFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdWlNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdGlwc0xhYmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdGlwc1BhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjcmFmdFBhcnRpY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjaG9wQmFyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcnVuRHVzdEVmZmVjdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHByaXZhdGUgaW5wdXQ6IElJbnB1dENvbnRyb2xzID0gbnVsbDtcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBsYXN0RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgLTEpO1xuICAgIHByaXZhdGUgaXNSdW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBydW5NdWx0aXBsaWVyOiBudW1iZXIgPSAxLjM7XG4gICAgcHJpdmF0ZSBydW5EdXN0VGltZXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBydW5EdXN0SW50ZXJ2YWw6IG51bWJlciA9IDAuMjtcblxuICAgIHByaXZhdGUgY2FycmllZERvdWdoOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGNhblBpY2tDb25lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW5BZGRWYW5pbGxhOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW5BZGRTdHJhd2JlcnJ5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW5BZGRDaG9jb2xhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhbkRlbGl2ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhblRyYXNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpY2VDcmVhbVByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbWVudU1hbmFnZXI6IGFueSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNob3BCYXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2hvcEZpbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IHRoaXMudWlNYW5hZ2VyPy5nZXRDb21wb25lbnQoXCJNZW51QmFyXCIpO1xuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IEtleWJvYXJkQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdpcmxfaWRsZV9iYWNrXCIpO1xuXG4gICAgICAgIGNvbnN0IGJhck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNob3BCYXJQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIGJhck5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcbiAgICAgICAgdGhpcy5jaG9wQmFyID0gYmFyTm9kZTtcbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IGJhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xuICAgICAgICBiYXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRoaXMuaW5wdXQuZ2V0UnVuSGVsZCgpO1xuXG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bChmaW5hbFNwZWVkKTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gZGlyLmNsb25lKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyICs9IGR0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJ1bkR1c3RUaW1lciA+PSB0aGlzLnJ1bkR1c3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25SdW5EdXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKGRpci55ID4gMCA/ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fYmFja1wiIDogXCJnaXJsX3dhbGtfYmFja1wiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5cIiA6IFwiZ2lybF93YWxrXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbShkaXIueCA+IDAgPyAodGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3REaXIueSkgPiBNYXRoLmFicyh0aGlzLmxhc3REaXIueCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci55ID4gMCA/IFwiZ2lybF9pZGxlX2JhY2tcIiA6IFwiZ2lybF9pZGxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci54ID4gMCA/IFwiZ2lybF9pZGxlX3JpZ2h0XCIgOiBcImdpcmxfaWRsZV9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSA9PT0gXCJDb25lXCIgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgKz0gZHQ7XG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gTWF0aC5taW4odGhpcy5pY2VDcmVhbVByb2dyZXNzIC8gMSwgMSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5BZGRWYW5pbGxhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVdpdGhJY2VDcmVhbShcInZhbmlsbGEtaWNlY3JlYW0tbWVudVwiLCB0aGlzLnZhbmlsbGFQcmVmYWIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRTdHJhd2JlcnJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVdpdGhJY2VDcmVhbShcInN0cmF3YmVycnktaWNlY3JlYW0tbWVudVwiLCB0aGlzLnN0cmF3YmVycnlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRDaG9jb2xhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aEljZUNyZWFtKFwiY2hvY29sYXRlLWljZWNyZWFtLW1lbnVcIiwgdGhpcy5jaG9jb2xhdGVQcmVmYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYW5EZWxpdmVyICYmIHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkgJiYgdGhpcy5jYXJyaWVkRG91Z2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb29wTmFtZSA9IHRoaXMuY2FycmllZERvdWdoLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkU2xvdCA9IHRoaXMubWVudU1hbmFnZXIuc2xvdHMuZmluZChzbG90ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51TmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0/Lm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbnVOYW1lID09PSBzY29vcE5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkU2xvdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKDUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEZWxpdmVyeUVmZmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfaGFwcHlcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5oiQ5Yqf5Ye66aSQ5Yaw5reH5reL77yaXCIgKyBzY29vcE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5Yaw5reH5reL6IiH6I+c5Zau5LiN56ym77yBXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVHJhc2ggJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcbiAgICAgICAgaWYgKHRoaXMudHJhc2hTbW9rZVByZWZhYikge1xuICAgICAgICAgICAgY29uc3Qgc21va2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRyYXNoU21va2VQcmVmYWIpO1xuICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzbW9rZSk7XG4gICAgICAgICAgICBjYy50d2VlbihzbW9rZSlcbiAgICAgICAgICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiBzbW9rZS5kZXN0cm95KCkpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuYWRkU2NvcmUoLTUwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+Xke+4jyDkuJ/mo4TmiYvkuIrnianlk4FcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5SW50ZXJhY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDb25lICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgY29uc3QgY29uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZVByZWZhYik7XG4gICAgICAgICAgICBjb25lLm5hbWUgPSBcIkNvbmVcIjtcbiAgICAgICAgICAgIGNvbmUuc2V0UG9zaXRpb24oY2MudjMoMCwgMTAsIDUwKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY29uZSk7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGNvbmU7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfcGlja1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NpiDmi7/otbfnlJznrZJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBsYWNlV2l0aEljZUNyZWFtKG5hbWU6IHN0cmluZywgcHJlZmFiOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhcnJpZWREb3VnaCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XG4gICAgICAgIGNvbnN0IGljZUNyZWFtID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgaWNlQ3JlYW0ubmFtZSA9IG5hbWU7XG4gICAgICAgIGljZUNyZWFtLnNldFBvc2l0aW9uKGNjLnYyKDAsIDIpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGljZUNyZWFtKTtcbiAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBpY2VDcmVhbTtcbiAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG5cbiAgICAgICAgY29uc3QgY3JhZnRFZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyYWZ0UGFydGljbGVQcmVmYWIpO1xuICAgICAgICBjcmFmdEVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoY3JhZnRFZmZlY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhg8J+NqCDoo73kvZzlrozmiJDvvJoke25hbWV9YCk7XG4gICAgfVxuXG4gICAgc2hvd0RlbGl2ZXJ5RWZmZWN0KCkge1xuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcbiAgICAgICAgdGlwc05vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGNjLnYyKDAsIDEwMCkpKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aXBzTm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRpcHNOb2RlKVxuICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDYwLCAwKSwgb3BhY2l0eTogLTI1NSB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY29uc3QgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzUGFydGljbGVQcmVmYWIpO1xuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGVmZmVjdCk7XG4gICAgfVxuXG4gICAgc3Bhd25SdW5EdXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xuICAgICAgICBjb25zdCBkdXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ydW5EdXN0RWZmZWN0UHJlZmFiKTtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHBvcy55IC09IDQwO1xuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZHVzdCk7XG4gICAgfVxuXG4gICAgcGxheUFuaW0obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShuYW1lKTtcbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDb25lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRWYW5pbGxhID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRTdHJhd2JlcnJ5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRDaG9jb2xhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA3KSB7XG4gICAgICAgICAgICB0aGlzLmNhblRyYXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDb25lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkVmFuaWxsYSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbkFkZFN0cmF3YmVycnkgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRDaG9jb2xhdGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDcpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuVHJhc2ggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==