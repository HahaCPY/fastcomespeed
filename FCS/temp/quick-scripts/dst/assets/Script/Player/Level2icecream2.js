
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/Level2icecream2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ca28HfNU9JoLEmEFSbIXJw', 'Level2icecream2');
// Script/Player/Level2icecream2.ts

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
var KeyboardControls2_1 = require("./KeyboardControls2");
var PlayerModeSelector_1 = require("../script/PlayerModeSelector");
var PlayerAnimationController_1 = require("../script/PlayerAnimationController");
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
        _this.pickupSound = null;
        _this.blingSound = null;
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
        if (PlayerModeSelector_1.default.player_mode === 0) {
            this.node.active = false; // 或者直接 return 停用邏輯
            return;
        }
        this.rb = this.getComponent(cc.RigidBody);
        this.menuManager = (_a = this.uiManager) === null || _a === void 0 ? void 0 : _a.getComponent("MenuBar");
        this.input = new KeyboardControls2_1.KeyboardControls2();
        var prefix = PlayerAnimationController_1.default.player2CharIndex === 0 ? "girl" : "girl2";
        this.playAnim(prefix + "_idle_back");
        var barNode = cc.instantiate(this.chopBarPrefab);
        this.node.addChild(barNode);
        barNode.setPosition(cc.v2(0, 80));
        this.chopBar = barNode;
        this.chopFill = barNode.getChildByName("Fillbar");
        barNode.active = false;
    };
    Level2icecream2.prototype.update = function (dt) {
        if (PlayerModeSelector_1.default.player_mode === 0) {
            this.node.active = false; // 或者直接 return 停用邏輯
            return;
        }
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
            var prefix = PlayerAnimationController_1.default.player2CharIndex === 0 ? "girl" : "girl2";
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim(this.isRunning ? prefix + "_run_back" : prefix + "_walk_back");
                }
                else {
                    this.playAnim(this.isRunning ? prefix + "_run" : prefix + "_walk");
                }
                this.node.scaleX = 1;
            }
            else {
                if (dir.x > 0) {
                    this.playAnim(this.isRunning ? prefix + "_run_right" : prefix + "_walk_right");
                    this.node.scaleX = 1;
                }
                else {
                    this.playAnim(this.isRunning ? prefix + "_run_left" : prefix + "_walk_left");
                    this.node.scaleX = 1;
                }
            }
        }
        else {
            this.rb.linearVelocity = cc.v2(0, 0);
            var prefix = PlayerAnimationController_1.default.player2CharIndex === 0 ? "girl" : "girl2";
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? prefix + "_idle_back" : prefix + "_idle");
            }
            else {
                this.playAnim(this.lastDir.x > 0 ? prefix + "_idle_right" : prefix + "_idle_left");
            }
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
                //if (this.anim) this.anim.play("girl_happy");
                if (this.blingSound) {
                    cc.audioEngine.playEffect(this.blingSound, false);
                }
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
            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }
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
            if (this.pickupSound) {
                cc.audioEngine.playEffect(this.pickupSound, false);
            }
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
        property({ type: cc.AudioClip })
    ], Level2icecream2.prototype, "pickupSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Level2icecream2.prototype, "blingSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXExldmVsMmljZWNyZWFtMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQseURBQXdEO0FBRXhELG1FQUE4RDtBQUM5RCxpRkFBNEU7QUFFdEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFpVEM7UUEvU0csZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQix5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxXQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUM3QixRQUFFLEdBQWlCLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVC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UUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDZTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ2U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ0c7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnRUFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7d0RBQ0E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNEO0lBR2hDO1FBREMsUUFBUTtrREFDVztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNrQjtJQXhDckIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWlUbkM7SUFBRCxzQkFBQztDQWpURCxBQWlUQyxDQWpUNEMsRUFBRSxDQUFDLFNBQVMsR0FpVHhEO2tCQWpUb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIPCfjaYg5Yaw5reH5reL6KO95L2c6IiH5Ye66aSQ6YKP6Lyv5pW05ZCI5q6177yI5Zau55CD54mI5pys77yJ5ZCr6KeS6Imy5o6n5Yi244CB5YuV55Wr6IiH57KS5a2Q54m55pWIICsg6KO95L2c6YCy5bqm5qKdIGNob3BCYXIgKyDlnoPlnL7mobbpgo/ovK9cclxuXHJcbmltcG9ydCB7IEtleWJvYXJkQ29udHJvbHMyIH0gZnJvbSBcIi4vS2V5Ym9hcmRDb250cm9sczJcIjtcclxuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5pbXBvcnQgUGxheWVyTW9kZVNlbGVjdG9yIGZyb20gXCIuLi9zY3JpcHQvUGxheWVyTW9kZVNlbGVjdG9yXCI7XHJcbmltcG9ydCBQbGF5ZXJBbmltYXRpb25Db250cm9sbGVyIGZyb20gXCIuLi9zY3JpcHQvUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMmljZWNyZWFtMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY29uZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB2YW5pbGxhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHN0cmF3YmVycnlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2hvY29sYXRlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0cmFzaFNtb2tlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsOyBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpcHNMYWJlbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aXBzUGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNyYWZ0UGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNob3BCYXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwaWNrdXBTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJsaW5nU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBydW5EdXN0RWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXQ6IElJbnB1dENvbnRyb2xzID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBbmltOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBsYXN0RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgLTEpO1xyXG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcnVuTXVsdGlwbGllcjogbnVtYmVyID0gMS4zO1xyXG4gICAgcHJpdmF0ZSBydW5EdXN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJ1bkR1c3RJbnRlcnZhbDogbnVtYmVyID0gMC4yO1xyXG5cclxuICAgIHByaXZhdGUgY2FycmllZERvdWdoOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FuUGlja0NvbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuQWRkVmFuaWxsYTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5BZGRTdHJhd2JlcnJ5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkFkZENob2NvbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5EZWxpdmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhblRyYXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGljZUNyZWFtUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1lbnVNYW5hZ2VyOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8vIOaIluiAheebtOaOpSByZXR1cm4g5YGc55So6YKP6LyvXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSB0aGlzLnVpTWFuYWdlcj8uZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IEtleWJvYXJkQ29udHJvbHMyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlci5wbGF5ZXIyQ2hhckluZGV4ID09PSAwID8gXCJnaXJsXCIgOiBcImdpcmwyXCI7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShgJHtwcmVmaXh9X2lkbGVfYmFja2ApO1xyXG5cclxuICAgICAgICBjb25zdCBiYXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaG9wQmFyUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmFyTm9kZSk7XHJcbiAgICAgICAgYmFyTm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhciA9IGJhck5vZGU7XHJcbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IGJhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xyXG4gICAgICAgIGJhck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTsgLy8g5oiW6ICF55u05o6lIHJldHVybiDlgZznlKjpgo/ovK9cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmlucHV0LmdldE1vdmVEaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRoaXMuaW5wdXQuZ2V0UnVuSGVsZCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykgZmluYWxTcGVlZCAqPSB0aGlzLnJ1bk11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwoZmluYWxTcGVlZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhc3REaXIgPSBkaXIuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydW5EdXN0VGltZXIgPj0gdGhpcy5ydW5EdXN0SW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3blJ1bkR1c3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlci5wbGF5ZXIyQ2hhckluZGV4ID09PSAwID8gXCJnaXJsXCIgOiBcImdpcmwyXCI7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gYCR7cHJlZml4fV9ydW5fYmFja2AgOiBgJHtwcmVmaXh9X3dhbGtfYmFja2ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gYCR7cHJlZml4fV9ydW5gIDogYCR7cHJlZml4fV93YWxrYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gYCR7cHJlZml4fV9ydW5fcmlnaHRgIDogYCR7cHJlZml4fV93YWxrX3JpZ2h0YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBgJHtwcmVmaXh9X3J1bl9sZWZ0YCA6IGAke3ByZWZpeH1fd2Fsa19sZWZ0YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBQbGF5ZXJBbmltYXRpb25Db250cm9sbGVyLnBsYXllcjJDaGFySW5kZXggPT09IDAgPyBcImdpcmxcIiA6IFwiZ2lybDJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3REaXIueSkgPiBNYXRoLmFicyh0aGlzLmxhc3REaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnkgPiAwID8gYCR7cHJlZml4fV9pZGxlX2JhY2tgIDogYCR7cHJlZml4fV9pZGxlYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci54ID4gMCA/IGAke3ByZWZpeH1faWRsZV9yaWdodGAgOiBgJHtwcmVmaXh9X2lkbGVfbGVmdGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSA9PT0gXCJDb25lXCIgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gTWF0aC5taW4odGhpcy5pY2VDcmVhbVByb2dyZXNzIC8gMSwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pY2VDcmVhbVByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbkFkZFZhbmlsbGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoSWNlQ3JlYW0oXCJ2YW5pbGxhLWljZWNyZWFtLW1lbnVcIiwgdGhpcy52YW5pbGxhUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRTdHJhd2JlcnJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aEljZUNyZWFtKFwic3RyYXdiZXJyeS1pY2VjcmVhbS1tZW51XCIsIHRoaXMuc3RyYXdiZXJyeVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FuQWRkQ2hvY29sYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aEljZUNyZWFtKFwiY2hvY29sYXRlLWljZWNyZWFtLW1lbnVcIiwgdGhpcy5jaG9jb2xhdGVQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5EZWxpdmVyICYmIHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkgJiYgdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nvb3BOYW1lID0gdGhpcy5jYXJyaWVkRG91Z2gubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFNsb3QgPSB0aGlzLm1lbnVNYW5hZ2VyLnNsb3RzLmZpbmQoc2xvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51TmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0/Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVudU5hbWUgPT09IHNjb29wTmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuYWRkU2NvcmUoMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsaXZlcnlFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMuYW5pbSkgdGhpcy5hbmltLnBsYXkoXCJnaXJsX2hhcHB5XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmdTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ibGluZ1NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5oiQ5Yqf5Ye66aSQ5Yaw5reH5reL77yaXCIgKyBzY29vcE5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4p2MIOWGsOa3h+a3i+iIh+iPnOWWruS4jeespu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuVHJhc2ggJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMudHJhc2hTbW9rZVByZWZhYikge1xyXG4gICAgICAgICAgICBjb25zdCBzbW9rZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudHJhc2hTbW9rZVByZWZhYik7XHJcbiAgICAgICAgICAgIHNtb2tlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzbW9rZSk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHNtb2tlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiBzbW9rZS5kZXN0cm95KCkpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuYWRkU2NvcmUoLTUwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfl5HvuI8g5Lif5qOE5omL5LiK54mp5ZOBXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnlJbnRlcmFjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrQ29uZSAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZVByZWZhYik7XHJcbiAgICAgICAgICAgIGNvbmUubmFtZSA9IFwiQ29uZVwiO1xyXG4gICAgICAgICAgICBjb25lLnNldFBvc2l0aW9uKGNjLnYzKDAsIDEwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY29uZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gY29uZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbSkgdGhpcy5hbmltLnBsYXkoXCJnaXJsX3BpY2tcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42mIOaLv+i1t+eUnOetklwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZVdpdGhJY2VDcmVhbShuYW1lOiBzdHJpbmcsIHByZWZhYjogY2MuUHJlZmFiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhcnJpZWREb3VnaCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICBjb25zdCBpY2VDcmVhbSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgaWNlQ3JlYW0ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgaWNlQ3JlYW0uc2V0UG9zaXRpb24oY2MudjIoMCwgMikpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpY2VDcmVhbSk7XHJcbiAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBpY2VDcmVhbTtcclxuICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyYWZ0RWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5jcmFmdFBhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBjcmFmdEVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChjcmFmdEVmZmVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYPCfjagg6KO95L2c5a6M5oiQ77yaJHtuYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxpdmVyeUVmZmVjdCgpIHtcclxuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcclxuICAgICAgICB0aXBzTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjIoMCwgMTAwKSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQodGlwc05vZGUpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRpcHNOb2RlKVxyXG4gICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgNjAsIDApLCBvcGFjaXR5OiAtMjU1IH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRpcHNOb2RlLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc1BhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBzcGF3blJ1bkR1c3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBkdXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ydW5EdXN0RWZmZWN0UHJlZmFiKTtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBwb3MueSAtPSA0MDtcclxuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChkdXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDb25lID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkVmFuaWxsYSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZFN0cmF3YmVycnkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRDaG9jb2xhdGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVHJhc2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NvbmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkVmFuaWxsYSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRTdHJhd2JlcnJ5ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZENob2NvbGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblRyYXNoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==