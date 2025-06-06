
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
        this.input = new KeyboardControls2_1.KeyboardControls2();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL0xldmVsMmljZWNyZWFtMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUF3UUM7UUF0UUcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQix5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQix5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFOUIsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFDN0IsUUFBRSxHQUFpQixJQUFJLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUU5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixpQkFBVyxHQUFZLEtBQUss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Q0FBQzs0REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytEQUNpQjtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ1k7SUFHaEM7UUFEQyxRQUFRO2tEQUNXO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2tCO0lBbENyQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd1FuQztJQUFELHNCQUFDO0NBeFFELEFBd1FDLENBeFE0QyxFQUFFLENBQUMsU0FBUyxHQXdReEQ7a0JBeFFvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9sczIgfSBmcm9tIFwiLi9LZXlib2FyZENvbnRyb2xzMlwiO1xuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwyaWNlY3JlYW0yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNvbmVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB2YW5pbGxhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc3RyYXdiZXJyeVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNob2NvbGF0ZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgdHJhc2hTbW9rZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDsgXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1aU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0aXBzTGFiZWxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0aXBzUGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNyYWZ0UGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNob3BCYXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBydW5EdXN0RWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGxhc3REaXI6IGNjLlZlYzIgPSBjYy52MigwLCAtMSk7XG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHJ1bk11bHRpcGxpZXI6IG51bWJlciA9IDEuMztcbiAgICBwcml2YXRlIHJ1bkR1c3RUaW1lcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHJ1bkR1c3RJbnRlcnZhbDogbnVtYmVyID0gMC4yO1xuXG4gICAgcHJpdmF0ZSBjYXJyaWVkRG91Z2g6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2FuUGlja0NvbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhbkFkZFZhbmlsbGE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhbkFkZFN0cmF3YmVycnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhbkFkZENob2NvbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2FuRGVsaXZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2FuVHJhc2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGljZUNyZWFtUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBtZW51TWFuYWdlcjogYW55ID0gbnVsbDtcblxuICAgIHByaXZhdGUgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaG9wRmlsbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyID0gdGhpcy51aU1hbmFnZXI/LmdldENvbXBvbmVudChcIk1lbnVCYXJcIik7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgS2V5Ym9hcmRDb250cm9sczIoKTtcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdpcmxfaWRsZV9iYWNrXCIpO1xuXG4gICAgICAgIGNvbnN0IGJhck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNob3BCYXJQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIGJhck5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcbiAgICAgICAgdGhpcy5jaG9wQmFyID0gYmFyTm9kZTtcbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IGJhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xuICAgICAgICBiYXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRoaXMuaW5wdXQuZ2V0UnVuSGVsZCgpO1xuXG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bChmaW5hbFNwZWVkKTtcblxuICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gZGlyLmNsb25lKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyICs9IGR0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJ1bkR1c3RUaW1lciA+PSB0aGlzLnJ1bkR1c3RJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25SdW5EdXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKGRpci55ID4gMCA/ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fYmFja1wiIDogXCJnaXJsX3dhbGtfYmFja1wiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5cIiA6IFwiZ2lybF93YWxrXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbShkaXIueCA+IDAgPyAodGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3REaXIueSkgPiBNYXRoLmFicyh0aGlzLmxhc3REaXIueCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci55ID4gMCA/IFwiZ2lybF9pZGxlX2JhY2tcIiA6IFwiZ2lybF9pZGxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci54ID4gMCA/IFwiZ2lybF9pZGxlX3JpZ2h0XCIgOiBcImdpcmxfaWRsZV9sZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSA9PT0gXCJDb25lXCIgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgKz0gZHQ7XG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gTWF0aC5taW4odGhpcy5pY2VDcmVhbVByb2dyZXNzIC8gMSwgMSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5BZGRWYW5pbGxhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVdpdGhJY2VDcmVhbShcInZhbmlsbGEtaWNlY3JlYW0tbWVudVwiLCB0aGlzLnZhbmlsbGFQcmVmYWIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRTdHJhd2JlcnJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVdpdGhJY2VDcmVhbShcInN0cmF3YmVycnktaWNlY3JlYW0tbWVudVwiLCB0aGlzLnN0cmF3YmVycnlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRDaG9jb2xhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aEljZUNyZWFtKFwiY2hvY29sYXRlLWljZWNyZWFtLW1lbnVcIiwgdGhpcy5jaG9jb2xhdGVQcmVmYWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYW5EZWxpdmVyICYmIHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkgJiYgdGhpcy5jYXJyaWVkRG91Z2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb29wTmFtZSA9IHRoaXMuY2FycmllZERvdWdoLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkU2xvdCA9IHRoaXMubWVudU1hbmFnZXIuc2xvdHMuZmluZChzbG90ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51TmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0/Lm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbnVOYW1lID09PSBzY29vcE5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkU2xvdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEZWxpdmVyeUVmZmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfaGFwcHlcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5oiQ5Yqf5Ye66aSQ5Yaw5reH5reL77yaXCIgKyBzY29vcE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5Yaw5reH5reL6IiH6I+c5Zau5LiN56ym77yBXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVHJhc2ggJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcbiAgICAgICAgaWYgKHRoaXMudHJhc2hTbW9rZVByZWZhYikge1xuICAgICAgICAgICAgY29uc3Qgc21va2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRyYXNoU21va2VQcmVmYWIpO1xuICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzbW9rZSk7XG4gICAgICAgICAgICBjYy50d2VlbihzbW9rZSlcbiAgICAgICAgICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiBzbW9rZS5kZXN0cm95KCkpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuYWRkU2NvcmUoLTUwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+Xke+4jyDkuJ/mo4TmiYvkuIrnianlk4FcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50cnlJbnRlcmFjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5SW50ZXJhY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDb25lICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xuICAgICAgICAgICAgY29uc3QgY29uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZVByZWZhYik7XG4gICAgICAgICAgICBjb25lLm5hbWUgPSBcIkNvbmVcIjtcbiAgICAgICAgICAgIGNvbmUuc2V0UG9zaXRpb24oY2MudjMoMCwgMTAsIDUwKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY29uZSk7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGNvbmU7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfcGlja1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NpiDmi7/otbfnlJznrZJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBsYWNlV2l0aEljZUNyZWFtKG5hbWU6IHN0cmluZywgcHJlZmFiOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhcnJpZWREb3VnaCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XG4gICAgICAgIGNvbnN0IGljZUNyZWFtID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgaWNlQ3JlYW0ubmFtZSA9IG5hbWU7XG4gICAgICAgIGljZUNyZWFtLnNldFBvc2l0aW9uKGNjLnYyKDAsIDIpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGljZUNyZWFtKTtcbiAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBpY2VDcmVhbTtcbiAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG5cbiAgICAgICAgY29uc3QgY3JhZnRFZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyYWZ0UGFydGljbGVQcmVmYWIpO1xuICAgICAgICBjcmFmdEVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoY3JhZnRFZmZlY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhg8J+NqCDoo73kvZzlrozmiJDvvJoke25hbWV9YCk7XG4gICAgfVxuXG4gICAgc2hvd0RlbGl2ZXJ5RWZmZWN0KCkge1xuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcbiAgICAgICAgdGlwc05vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGNjLnYyKDAsIDEwMCkpKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aXBzTm9kZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRpcHNOb2RlKVxuICAgICAgICAgICAgLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDYwLCAwKSwgb3BhY2l0eTogLTI1NSB9LCB7IGVhc2luZzogJ2N1YmljT3V0JyB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY29uc3QgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzUGFydGljbGVQcmVmYWIpO1xuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGVmZmVjdCk7XG4gICAgfVxuXG4gICAgc3Bhd25SdW5EdXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xuICAgICAgICBjb25zdCBkdXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ydW5EdXN0RWZmZWN0UHJlZmFiKTtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHBvcy55IC09IDQwO1xuICAgICAgICBkdXN0LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZHVzdCk7XG4gICAgfVxuXG4gICAgcGxheUFuaW0obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xuICAgICAgICB0aGlzLmFuaW0ucGxheShuYW1lKTtcbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDb25lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRWYW5pbGxhID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRTdHJhd2JlcnJ5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRDaG9jb2xhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA3KSB7XG4gICAgICAgICAgICB0aGlzLmNhblRyYXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDb25lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkVmFuaWxsYSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbkFkZFN0cmF3YmVycnkgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5jYW5BZGRDaG9jb2xhdGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDcpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuVHJhc2ggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==