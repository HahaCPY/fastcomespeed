
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/NPC/CattyController');
require('./assets/Script/NPC/CattySpawner');
require('./assets/Script/NPC/GoblinController');
require('./assets/Script/NPC/GoblinSpawner');
require('./assets/Script/NPC/NPCWanderCatty');
require('./assets/Script/NPC/NPCWanderGoblin');
require('./assets/Script/PauseManager');
require('./assets/Script/Player/GamepadControls');
require('./assets/Script/Player/IInputControls');
require('./assets/Script/Player/KeyboardControls');
require('./assets/Script/Player/KeyboardControls2');
require('./assets/Script/Player/Level2icecream1');
require('./assets/Script/Player/Level2icecream2');
require('./assets/Script/Player/PlayerController 2');
require('./assets/Script/Player/PlayerController');
require('./assets/Script/debug');
require('./assets/Script/scene/ScorePersist');
require('./assets/Script/scene/score-scene');
require('./assets/Script/scene/uiManager');
require('./assets/Script/script/AudioManager');
require('./assets/Script/script/AutoSceneSwitcher');
require('./assets/Script/script/CameraAutoMove2D');
require('./assets/Script/script/CloseButton');
require('./assets/Script/script/ExpandButton');
require('./assets/Script/script/ExpandPage');
require('./assets/Script/script/FirebaseManager');
require('./assets/Script/script/GoToPage');
require('./assets/Script/script/Login');
require('./assets/Script/script/MenuManager');
require('./assets/Script/script/PlayerAnimationController');
require('./assets/Script/script/PlayerModeSelector');
require('./assets/Script/script/PlayerModeWatcher');
require('./assets/Script/script/ShowImageOnPlane');
require('./assets/Script/script/Signup');
require('./assets/Script/script/select/BGMManager');
require('./assets/Script/script/select/GameManager');
require('./assets/Script/script/select/PositionManager');
require('./assets/Script/script/select/cameraCtrl');
require('./assets/Script/script/select/flagTrigger');
require('./assets/Script/script/select/hintAnimation');
require('./assets/Script/script/select/icecreamCheck');
require('./assets/Script/script/select/maskTransition3D');
require('./assets/Script/script/select/pizzaCheck');
require('./assets/Script/script/select/vehicleCtrl');

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
//------QC-SOURCE-SPLIT------

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
                this.menuManager.addScore(50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXExldmVsMmljZWNyZWFtMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQseURBQXdEO0FBR2xELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMFJDO1FBeFJHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUVsQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQix5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFOUIsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFDN0IsUUFBRSxHQUFpQixJQUFJLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6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QU87T0FDYSxlQUFlLENBMFJuQztJQUFELHNCQUFDO0NBMVJELEFBMFJDLENBMVI0QyxFQUFFLENBQUMsU0FBUyxHQTBSeEQ7a0JBMVJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g8J+NpiDlhrDmt4fmt4voo73kvZzoiIflh7rppJDpgo/ovK/mlbTlkIjmrrXvvIjllq7nkIPniYjmnKzvvInlkKvop5LoibLmjqfliLbjgIHli5XnlavoiIfnspLlrZDnibnmlYggKyDoo73kvZzpgLLluqbmop0gY2hvcEJhciArIOWeg+WcvuahtumCj+i8r1xyXG5cclxuaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9sczIgfSBmcm9tIFwiLi9LZXlib2FyZENvbnRyb2xzMlwiO1xyXG5pbXBvcnQgeyBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwyaWNlY3JlYW0yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjb25lUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHZhbmlsbGFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3RyYXdiZXJyeVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaG9jb2xhdGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRyYXNoU21va2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWlNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGlwc0xhYmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpcHNQYXJ0aWNsZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY3JhZnRQYXJ0aWNsZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2hvcEJhclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHBpY2t1cFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmxpbmdTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHJ1bkR1c3RFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGxhc3REaXI6IGNjLlZlYzIgPSBjYy52MigwLCAtMSk7XHJcbiAgICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBydW5NdWx0aXBsaWVyOiBudW1iZXIgPSAxLjM7XHJcbiAgICBwcml2YXRlIHJ1bkR1c3RUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcnVuRHVzdEludGVydmFsOiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJyaWVkRG91Z2g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjYW5QaWNrQ29uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5BZGRWYW5pbGxhOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkFkZFN0cmF3YmVycnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuQWRkQ2hvY29sYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkRlbGl2ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuVHJhc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaWNlQ3JlYW1Qcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbWVudU1hbmFnZXI6IGFueSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaG9wQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hvcEZpbGw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyID0gdGhpcy51aU1hbmFnZXI/LmdldENvbXBvbmVudChcIk1lbnVCYXJcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzMigpO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfYmFja1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hvcEJhclByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJhck5vZGUpO1xyXG4gICAgICAgIGJhck5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcclxuICAgICAgICB0aGlzLmNob3BCYXIgPSBiYXJOb2RlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwgPSBiYXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmlsbGJhclwiKTtcclxuICAgICAgICBiYXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5pbnB1dC5nZXRNb3ZlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0aGlzLmlucHV0LmdldFJ1bkhlbGQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgbGV0IGZpbmFsU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKGZpbmFsU3BlZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gZGlyLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVuRHVzdFRpbWVyID49IHRoaXMucnVuRHVzdEludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25SdW5EdXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oZGlyLnkgPiAwID8gKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9iYWNrXCIgOiBcImdpcmxfd2Fsa19iYWNrXCIpIDogKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1blwiIDogXCJnaXJsX3dhbGtcIikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbShkaXIueCA+IDAgPyAodGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0RGlyLnkpID4gTWF0aC5hYnModGhpcy5sYXN0RGlyLngpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci55ID4gMCA/IFwiZ2lybF9pZGxlX2JhY2tcIiA6IFwiZ2lybF9pZGxlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueCA+IDAgPyBcImdpcmxfaWRsZV9yaWdodFwiIDogXCJnaXJsX2lkbGVfbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaC5uYW1lID09PSBcIkNvbmVcIiAmJiB0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSBNYXRoLm1pbih0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgLyAxLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuQWRkVmFuaWxsYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVdpdGhJY2VDcmVhbShcInZhbmlsbGEtaWNlY3JlYW0tbWVudVwiLCB0aGlzLnZhbmlsbGFQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhbkFkZFN0cmF3YmVycnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoSWNlQ3JlYW0oXCJzdHJhd2JlcnJ5LWljZWNyZWFtLW1lbnVcIiwgdGhpcy5zdHJhd2JlcnJ5UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRDaG9jb2xhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoSWNlQ3JlYW0oXCJjaG9jb2xhdGUtaWNlY3JlYW0tbWVudVwiLCB0aGlzLmNob2NvbGF0ZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGl2ZXIgJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBzY29vcE5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkU2xvdCA9IHRoaXMubWVudU1hbmFnZXIuc2xvdHMuZmluZChzbG90ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVOYW1lID0gc2xvdC5jaGlsZHJlblswXT8ubmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZW51TmFtZSA9PT0gc2Nvb3BOYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVkU2xvdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5hZGRTY29yZSg1MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEZWxpdmVyeUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5jaGVja0FuZEZpbGxTbG90cygpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfaGFwcHlcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibGluZ1NvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJsaW5nU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSDmiJDlip/lh7rppJDlhrDmt4fmt4vvvJpcIiArIHNjb29wTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5Yaw5reH5reL6IiH6I+c5Zau5LiN56ym77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5UcmFzaCAmJiB0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpICYmIHRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICBpZiAodGhpcy50cmFzaFNtb2tlUHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNtb2tlID0gY2MuaW5zdGFudGlhdGUodGhpcy50cmFzaFNtb2tlUHJlZmFiKTtcclxuICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHNtb2tlKTtcclxuICAgICAgICAgICAgY2MudHdlZW4oc21va2UpXHJcbiAgICAgICAgICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHNtb2tlLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5hZGRTY29yZSgtNTApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+Xke+4jyDkuJ/mo4TmiYvkuIrnianlk4FcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeUludGVyYWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDb25lICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25lUHJlZmFiKTtcclxuICAgICAgICAgICAgY29uZS5uYW1lID0gXCJDb25lXCI7XHJcbiAgICAgICAgICAgIGNvbmUuc2V0UG9zaXRpb24oY2MudjMoMCwgMTAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjb25lKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBjb25lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfcGlja1wiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjaYg5ou/6LW355Sc562SXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlV2l0aEljZUNyZWFtKG5hbWU6IHN0cmluZywgcHJlZmFiOiBjYy5QcmVmYWIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FycmllZERvdWdoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IGljZUNyZWFtID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICBpY2VDcmVhbS5uYW1lID0gbmFtZTtcclxuICAgICAgICBpY2VDcmVhbS5zZXRQb3NpdGlvbihjYy52MigwLCAyKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGljZUNyZWFtKTtcclxuICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGljZUNyZWFtO1xyXG4gICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgY3JhZnRFZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyYWZ0UGFydGljbGVQcmVmYWIpO1xyXG4gICAgICAgIGNyYWZ0RWZmZWN0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGNyYWZ0RWZmZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+NqCDoo73kvZzlrozmiJDvvJoke25hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGl2ZXJ5RWZmZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHRpcHNOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzTGFiZWxQcmVmYWIpO1xyXG4gICAgICAgIHRpcHNOb2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChjYy52MigwLCAxMDApKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aXBzTm9kZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGlwc05vZGUpXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MCwgMCksIG9wYWNpdHk6IC0yNTUgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzUGFydGljbGVQcmVmYWIpO1xyXG4gICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChlZmZlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduUnVuRHVzdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGR1c3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHBvcy55IC09IDQwO1xyXG4gICAgICAgIGR1c3Quc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGR1c3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NvbmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRWYW5pbGxhID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkU3RyYXdiZXJyeSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZENob2NvbGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5UcmFzaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ29uZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRWYW5pbGxhID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZFN0cmF3YmVycnkgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkQ2hvY29sYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVHJhc2ggPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e7e8lp5ApCrrVO9eszSaPM', 'GameManager');
// Script/script/select/GameManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameManager.prototype.onLoad = function () {
        cc.director.getPhysics3DManager().enabled = true;
        console.log("3D 物理系統啟用成功！");
    };
    GameManager.prototype.start = function () { };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBUUEsQ0FBQztJQU5HLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBSyxHQUFMLGNBQVMsQ0FBQztJQVBPLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FRL0I7SUFBRCxrQkFBQztDQVJELEFBUUMsQ0FSd0MsRUFBRSxDQUFDLFNBQVMsR0FRcEQ7a0JBUm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzM0RNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIzRCDniannkIbns7vntbHllZ/nlKjmiJDlip/vvIFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PauseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2aaefiP01D+7ECjkmppp4/', 'PauseManager');
// Script/PauseManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PauseManager = /** @class */ (function (_super) {
    __extends(PauseManager, _super);
    function PauseManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pausePanelPrefab = null;
        _this.pausePanelNode = null;
        _this.isPaused = false;
        return _this;
    }
    PauseManager.prototype.onLoad = function () {
        if (this.pausePanelPrefab) {
            this.pausePanelNode = cc.instantiate(this.pausePanelPrefab);
            this.node.addChild(this.pausePanelNode);
            this.pausePanelNode.active = false;
        }
        this.isPaused = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    PauseManager.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    PauseManager.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.escape) {
            this.togglePause();
        }
    };
    PauseManager.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        // 新增這一段
        if (this.isPaused) {
            cc.director.pause(); // 暫停
        }
        else {
            cc.director.resume(); // 恢復
        }
        if (this.pausePanelNode)
            this.pausePanelNode.active = this.isPaused;
    };
    PauseManager.prototype.isGamePaused = function () {
        return this.isPaused;
    };
    __decorate([
        property(cc.Prefab)
    ], PauseManager.prototype, "pausePanelPrefab", void 0);
    PauseManager = __decorate([
        ccclass
    ], PauseManager);
    return PauseManager;
}(cc.Component));
exports.default = PauseManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQYXVzZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEyQ0M7UUF6Q0csc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRTNCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBc0N0QyxDQUFDO0lBcENHLDZCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNuQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0IsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1NBQzdCO2FBQU07WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSztTQUM5QjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3hFLENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ2U7SUFGbEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJDaEM7SUFBRCxtQkFBQztDQTNDRCxBQTJDQyxDQTNDeUMsRUFBRSxDQUFDLFNBQVMsR0EyQ3JEO2tCQTNDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBhdXNlUGFuZWxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXVzZVBhbmVsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlUGFuZWxQcmVmYWIpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZVBhbmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGF1c2VQYW5lbFByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnBhdXNlUGFuZWxOb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZVBhbmVsTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lc2NhcGUpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQYXVzZSgpIHtcclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XHJcblxyXG4gICAgICAgIC8vIOaWsOWinumAmeS4gOautVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7IC8vIOaaq+WBnFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpOyAvLyDmgaLlvqlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlUGFuZWxOb2RlKSB0aGlzLnBhdXNlUGFuZWxOb2RlLmFjdGl2ZSA9IHRoaXMuaXNQYXVzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzR2FtZVBhdXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1BhdXNlZDtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/score-scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0f45GVtTlBsaW0SAQ1D0w5', 'score-scene');
// Script/scene/score-scene.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResultScene = /** @class */ (function (_super) {
    __extends(ResultScene, _super);
    function ResultScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.sceneLabel = null; // <== 新增，拖 UI Label 進來
        _this.resultBgm = null;
        _this.star1Prefab = null;
        _this.star2Prefab = null;
        _this.star3Prefab = null;
        _this.starParent = null;
        _this.char1Node = null;
        _this.char1Frames = []; // 3張圖片
        _this.char2Node = null;
        _this.char2Frames = []; // 3張圖片
        _this.char1FrameIdx = 0;
        _this.char2FrameIdx = 0;
        _this._sceneChanged = false;
        return _this;
    }
    ResultScene.prototype.start = function () {
        var _this = this;
        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(this.resultBgm, true);
        // 取得 persist node
        var persistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (!persistNode) {
            cc.error('找不到 ScorePersist persist node');
            return;
        }
        var persistScript = persistNode.getComponent('ScorePersist');
        var score = persistScript.score || 0;
        var fromScene = persistScript.fromScene || '';
        // 顯示分數
        if (this.scoreLabel) {
            this.scoreLabel.string = "" + score;
        }
        // 顯示來源場景名稱
        if (this.sceneLabel) {
            this.sceneLabel.string = fromScene;
        }
        // 根據分數顯示 n 顆星
        var starPrefabs = [];
        if (score >= 500) {
            starPrefabs = [this.star3Prefab, this.star2Prefab, this.star1Prefab];
        }
        else if (score >= 300) {
            starPrefabs = [this.star2Prefab, this.star1Prefab];
        }
        else if (score >= 200) {
            starPrefabs = [this.star1Prefab];
        }
        // 實例化並顯示
        if (this.starParent) {
            for (var _i = 0, starPrefabs_1 = starPrefabs; _i < starPrefabs_1.length; _i++) {
                var prefab = starPrefabs_1[_i];
                if (prefab) {
                    var node = cc.instantiate(prefab);
                    this.starParent.addChild(node);
                }
            }
        }
        this.schedule(this.updateCharFrames, 0.25);
        // 1. 註冊空白鍵監聽
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        // 2. 十秒自動跳場景
        this.scheduleOnce(function () {
            _this.gotoMenu();
        }, 10);
    };
    ResultScene.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    ResultScene.prototype.onKeyDown = function (event) {
        // 空白鍵是 cc.macro.KEY.space
        if (event.keyCode === cc.macro.KEY.space) {
            this.gotoMenu();
        }
    };
    ResultScene.prototype.gotoMenu = function () {
        if (this._sceneChanged)
            return;
        this._sceneChanged = true;
        cc.director.loadScene('selectScene'); // 你的主選單場景名
    };
    ResultScene.prototype.updateCharFrames = function () {
        // 角色1
        if (this.char1Node && this.char1Frames.length > 0) {
            var sprite1 = this.char1Node.getComponent(cc.Sprite);
            if (sprite1) {
                sprite1.spriteFrame = this.char1Frames[this.char1FrameIdx];
                this.char1FrameIdx = (this.char1FrameIdx + 1) % this.char1Frames.length;
            }
        }
        // 角色2
        if (this.char2Node && this.char2Frames.length > 0) {
            var sprite2 = this.char2Node.getComponent(cc.Sprite);
            if (sprite2) {
                sprite2.spriteFrame = this.char2Frames[this.char2FrameIdx];
                this.char2FrameIdx = (this.char2FrameIdx + 1) % this.char2Frames.length;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], ResultScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], ResultScene.prototype, "sceneLabel", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], ResultScene.prototype, "resultBgm", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], ResultScene.prototype, "star1Prefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], ResultScene.prototype, "star2Prefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], ResultScene.prototype, "star3Prefab", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ResultScene.prototype, "starParent", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ResultScene.prototype, "char1Node", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], ResultScene.prototype, "char1Frames", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ResultScene.prototype, "char2Node", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], ResultScene.prototype, "char2Frames", void 0);
    ResultScene = __decorate([
        ccclass
    ], ResultScene);
    return ResultScene;
}(cc.Component));
exports.default = ResultScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcc2NvcmUtc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFnSUM7UUE5SEcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUMsQ0FBRSx1QkFBdUI7UUFHckQsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFxQixFQUFFLENBQUMsQ0FBRyxPQUFPO1FBRzdDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBcUIsRUFBRSxDQUFDLENBQUcsT0FBTztRQUVyQyxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUE4RmxDLENBQUM7SUE1RkcsMkJBQUssR0FBTDtRQUFBLGlCQXFEQztRQXBERyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0Msa0JBQWtCO1FBQ2xCLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FB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SSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvREFDQTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7b0RBQ0E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO29EQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzttREFDRDtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7a0RBQ0Y7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztvREFDRjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7a0RBQ0Y7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztvREFDRjtJQTlCbEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWdJL0I7SUFBRCxrQkFBQztDQWhJRCxBQWdJQyxDQWhJd0MsRUFBRSxDQUFDLFNBQVMsR0FnSXBEO2tCQWhJb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NlbmVMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAgLy8gPD09IOaWsOWinu+8jOaLliBVSSBMYWJlbCDpgLLkvoZcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHJlc3VsdEJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICAgIHN0YXIxUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiB9KVxyXG4gICAgc3RhcjJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiIH0pXHJcbiAgICBzdGFyM1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlIH0pXHJcbiAgICBzdGFyUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlIH0pXHJcbiAgICBjaGFyMU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLlNwcml0ZUZyYW1lXSB9KVxyXG4gICAgY2hhcjFGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTsgICAvLyAz5by15ZyW54mHXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxyXG4gICAgY2hhcjJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0gfSlcclxuICAgIGNoYXIyRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107ICAgLy8gM+W8teWclueJh1xyXG5cclxuICAgIHByaXZhdGUgY2hhcjFGcmFtZUlkeCA9IDA7XHJcbiAgICBwcml2YXRlIGNoYXIyRnJhbWVJZHggPSAwO1xyXG4gICAgcHJpdmF0ZSBfc2NlbmVDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMucmVzdWx0QmdtLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8g5Y+W5b6XIHBlcnNpc3Qgbm9kZVxyXG4gICAgICAgIGNvbnN0IHBlcnNpc3ROb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnU2NvcmVQZXJzaXN0Jyk7XHJcbiAgICAgICAgaWYgKCFwZXJzaXN0Tm9kZSkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcign5om+5LiN5YiwIFNjb3JlUGVyc2lzdCBwZXJzaXN0IG5vZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwZXJzaXN0U2NyaXB0ID0gcGVyc2lzdE5vZGUuZ2V0Q29tcG9uZW50KCdTY29yZVBlcnNpc3QnKTtcclxuICAgICAgICBjb25zdCBzY29yZSA9IHBlcnNpc3RTY3JpcHQuc2NvcmUgfHwgMDtcclxuICAgICAgICBjb25zdCBmcm9tU2NlbmUgPSBwZXJzaXN0U2NyaXB0LmZyb21TY2VuZSB8fCAnJztcclxuXHJcbiAgICAgICAgLy8g6aGv56S65YiG5pW4XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7c2NvcmV9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmhr+ekuuS+hua6kOWgtOaZr+WQjeeosVxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lTGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZUxhYmVsLnN0cmluZyA9IGZyb21TY2VuZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagueaTmuWIhuaVuOmhr+ekuiBuIOmhhuaYn1xyXG4gICAgICAgIGxldCBzdGFyUHJlZmFicyA9IFtdO1xyXG4gICAgICAgIGlmIChzY29yZSA+PSA1MDApIHtcclxuICAgICAgICAgICAgc3RhclByZWZhYnMgPSBbdGhpcy5zdGFyM1ByZWZhYiwgdGhpcy5zdGFyMlByZWZhYiwgdGhpcy5zdGFyMVByZWZhYl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29yZSA+PSAzMDApIHtcclxuICAgICAgICAgICAgc3RhclByZWZhYnMgPSBbdGhpcy5zdGFyMlByZWZhYiwgdGhpcy5zdGFyMVByZWZhYl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29yZSA+PSAyMDApIHtcclxuICAgICAgICAgICAgc3RhclByZWZhYnMgPSBbdGhpcy5zdGFyMVByZWZhYl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlr6bkvovljJbkuKbpoa/npLpcclxuICAgICAgICBpZiAodGhpcy5zdGFyUGFyZW50KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByZWZhYiBvZiBzdGFyUHJlZmFicykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhclBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNoYXJGcmFtZXMsIDAuMjUpO1xyXG5cclxuICAgICAgICAvLyAxLiDoqLvlhornqbrnmb3pjbXnm6Pogb1cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gMi4g5Y2B56eS6Ieq5YuV6Lez5aC05pmvXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9NZW51KCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIC8vIOepuueZvemNteaYryBjYy5tYWNyby5LRVkuc3BhY2VcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnNwYWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ290b01lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ290b01lbnUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lQ2hhbmdlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzZWxlY3RTY2VuZScpOyAgLy8g5L2g55qE5Li76YG45Zau5aC05pmv5ZCNXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2hhckZyYW1lcygpIHtcclxuICAgICAgICAvLyDop5LoibIxXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcjFOb2RlICYmIHRoaXMuY2hhcjFGcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlMSA9IHRoaXMuY2hhcjFOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlMSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlMS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjFGcmFtZXNbdGhpcy5jaGFyMUZyYW1lSWR4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjFGcmFtZUlkeCA9ICh0aGlzLmNoYXIxRnJhbWVJZHggKyAxKSAlIHRoaXMuY2hhcjFGcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDop5LoibIyXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcjJOb2RlICYmIHRoaXMuY2hhcjJGcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlMiA9IHRoaXMuY2hhcjJOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlMikge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlMi5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjJGcmFtZXNbdGhpcy5jaGFyMkZyYW1lSWR4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjJGcmFtZUlkeCA9ICh0aGlzLmNoYXIyRnJhbWVJZHggKyAxKSAlIHRoaXMuY2hhcjJGcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/CameraAutoMove2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24435wrjCBF/6fJ8zyY5wjP', 'CameraAutoMove2D');
// Script/script/CameraAutoMove2D.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CameraAutoMove2D = /** @class */ (function (_super) {
    __extends(CameraAutoMove2D, _super);
    function CameraAutoMove2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameraNode = null;
        _this.moveDuration = 5.0; // 攝影機移動所需秒數
        _this.rotateDuration = 3.0; // 攝影機旋轉所需秒數
        return _this;
    }
    CameraAutoMove2D.prototype.start = function () {
        this.moveCamera();
    };
    CameraAutoMove2D.prototype.moveCamera = function () {
        // 取得目前攝影機位置
        var startPos = this.cameraNode.position;
        var targetPos = new cc.Vec3(startPos.x, startPos.y, 3000);
        cc.tween(this.cameraNode)
            .to(this.moveDuration, { position: targetPos })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], CameraAutoMove2D.prototype, "cameraNode", void 0);
    __decorate([
        property
    ], CameraAutoMove2D.prototype, "moveDuration", void 0);
    __decorate([
        property
    ], CameraAutoMove2D.prototype, "rotateDuration", void 0);
    CameraAutoMove2D = __decorate([
        ccclass
    ], CameraAutoMove2D);
    return CameraAutoMove2D;
}(cc.Component));
exports.default = CameraAutoMove2D;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXENhbWVyYUF1dG9Nb3ZlMkQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF1QkM7UUFyQkcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZO1FBR3hDLG9CQUFjLEdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7SUFlOUMsQ0FBQztJQWJHLGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxZQUFZO1FBQ1osSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDOUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNTO0lBRzNCO1FBREMsUUFBUTswREFDa0I7SUFHM0I7UUFEQyxRQUFROzREQUNvQjtJQVJaLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBdUJwQztJQUFELHVCQUFDO0NBdkJELEFBdUJDLENBdkI2QyxFQUFFLENBQUMsU0FBUyxHQXVCekQ7a0JBdkJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQXV0b01vdmUyRCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSA1LjA7IC8vIOaUneW9seapn+enu+WLleaJgOmcgOenkuaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcm90YXRlRHVyYXRpb246IG51bWJlciA9IDMuMDsgLy8g5pSd5b2x5qmf5peL6L2J5omA6ZyA56eS5pW4XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ2FtZXJhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUNhbWVyYSgpIHtcclxuICAgICAgICAvLyDlj5blvpfnm67liY3mlJ3lvbHmqZ/kvY3nva5cclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnksIDMwMDApO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLm1vdmVEdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBSWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc3pCQztRQXB6QkcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQix3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUVuQyxLQUFLO1FBQ0csZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFXLEdBQUcsQ0FBQyxDQUFDLFNBQVM7UUFHOUMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHFCQUFlLEdBQVcsR0FBRyxDQUFDLENBQUUsYUFBYTtRQUdyRCxRQUFRO1FBRVIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHdkIsaUJBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixnQkFBVSxHQUFZLEtBQUssQ0FBQyxDQUFHLGlCQUFpQjtRQUNoRCxpQkFBVyxHQUFRLElBQUksQ0FBQyxDQUFPLGtCQUFrQjtRQUdqRCxnQkFBVSxHQUFZLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFHekMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsbUJBQWEsR0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFjO1FBRTNDLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBQzdCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUMzQyxRQUFFLEdBQWlCLElBQUksQ0FBQztRQUVoQyxLQUFLO1FBQ0csa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBQ2xDLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQzlCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQyxLQUFLO1FBQ0csbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsZUFBUyxHQUFZLEtBQUssQ0FBQyxDQUFDLG9CQUFvQjtRQUVoRCxxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUV6QyxNQUFNO1FBQ0UsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVSxHQUFZLEtBQUssQ0FBQyxDQUFDLFdBQVc7UUFHeEMsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQyxDQUFDLFlBQVk7O0lBa3JCeEQsQ0FBQztJQS9xQkcsZ0NBQUssR0FBTDs7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVoQyxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRXZDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsU0FBRyxJQUFJLENBQUMsU0FBUywwQ0FBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFVO1FBRWIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUQ7YUFBTTtZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRkFBa0IsR0FBRyxDQUFDLENBQUMsWUFBTyxHQUFHLENBQUMsQ0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUV0RixjQUFjO2dCQUNkLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO2dCQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFFLGFBQWE7aUJBQ3RDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUUsWUFBWTthQUN2QztZQUNELDhCQUE4QjtZQUM5QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQUUsVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7WUFFckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVqRSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUzQixnQkFBZ0I7WUFDaEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDdEU7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RDtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7U0FJSjthQUFNO1lBQ0gsYUFBYTtZQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJDLFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdEU7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzVFO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQ7O1dBRUc7UUFFSCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUNqQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQzthQUMvQjtTQUNKO1FBR0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25HLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO2dCQUN4QixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO2dCQUMxQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksR0FBRyxFQUFFLEVBQUcsVUFBVTtvQkFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDcEQ7aUJBQ0o7Z0JBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN6QjthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFFLGVBQWU7YUFDMUM7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPO1FBQ1AsSUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxZQUFZO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFlBQVk7WUFDM0MsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNqQjtZQUVHLFlBQVk7WUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBUTtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsUUFBUTtRQUNSLElBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsWUFBWTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ3RDO1lBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDeEM7U0FDSjtRQUdELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRTdCLE9BQU87WUFDUCxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFFcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELElBQUksU0FBUyxFQUFFO29CQUNYLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3JELEtBQUssQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO29CQUUzQixJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFaEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUMxQzthQUNKO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pFLElBQU0sV0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRXpDLFlBQVk7WUFDWixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDMUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLE9BQU8sU0FBUyxLQUFLLFdBQVMsQ0FBQztpQkFDbEM7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLFdBQVcsRUFBRTtnQkFDYixPQUFPO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxjQUFjO2dCQUM5QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNyRDtnQkFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFdBQVMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNwQztTQUNKO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQjtZQUFFLE9BQU87UUFFdEMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV0RCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUlELGtDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUdELHVDQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztZQUVsQyxZQUFZO1lBQ1osSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztZQUMxQixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUdsQyxZQUFZO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ25DLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUVOO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ2xDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQ0FBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELDJDQUFnQixHQUFoQixVQUFpQixVQUFtQjtRQUNoQyxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDckUsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sQ0FBQyxzQkFBc0I7UUFFakQsSUFBSSxLQUFLLEdBQVksSUFBSSxDQUFDO1FBRTFCLElBQUksU0FBUyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxXQUFXLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakQsS0FBSyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztTQUNqQzthQUFNLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzVDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1NBQy9CO2FBQU07WUFDSCxPQUFPLENBQUMsaUJBQWlCO1NBQzVCO1FBRUQsT0FBTztRQUNQLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxXQUFXO1FBQ1gsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBUyxLQUFLLENBQUMsSUFBSSx3QkFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDVjtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUM3RixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFDL0YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ2pGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUc3RixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFLRCx5Q0FBYyxHQUFkO1FBQ0ksSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLEtBQW9CLFVBQStCLEVBQS9CLEtBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBL0IsY0FBK0IsRUFBL0IsSUFBK0IsRUFBRTtZQUFoRCxJQUFNLEtBQUssU0FBQTtZQUNaLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNsQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDNUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDbEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1NBRUo7UUFFRCxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUM7UUFFNUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7U0FDOUI7YUFBTSxJQUFJLFFBQVEsRUFBRTtZQUNqQixPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztTQUNqQzthQUFNLElBQUksSUFBSSxFQUFFO1lBQ2IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxVQUFVLEVBQUU7WUFDbkIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7U0FDbEM7UUFHRCxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNaLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNWO1lBRUQsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQVEsT0FBTyxDQUFDLElBQUkseUNBQVEsQ0FBQyxDQUFDO1NBQzdDO0lBRUwsQ0FBQztJQU9ELHNDQUFXLEdBQVg7UUFBQSxpQkE4SEM7UUE3SEcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUMzQixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEMsSUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDZixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFFeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7UUFHRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUUxQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEQ7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ25ELHdCQUF3QjtZQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ3RELE9BQUEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVk7b0JBQ3BFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGVBQWU7b0JBQzVDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsU0FBUztpQkFDekQsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNiLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUE3QixDQUE2QixDQUNoQztZQUxBLENBS0EsQ0FDSixDQUFDO1lBQ0YsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3REO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QztTQUNKO2FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3ZFLElBQU0sV0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFdBQVMsRUFBRTtnQkFDWixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ2pDLE9BQU87YUFDVjtZQUVMLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO2dCQUN0RSxPQUFPLEtBQUssS0FBSyxXQUFTO29CQUN0QixLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxxQkFBcUI7b0JBQ2xELENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxZQUFZO3dCQUN4RSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlO3dCQUM1QyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLFNBQVM7cUJBQ3pELENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTt3QkFDUCxPQUFBLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUF6QyxDQUF5QyxDQUM1QyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7WUFHSCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUExQixDQUEwQixDQUFDLENBQUM7WUFFL0YsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ2pFLE9BQU8sS0FBSyxLQUFLLFdBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksSUFBSSxrQkFBa0IsRUFBRTtnQkFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFFRyxTQUFTO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBRWxELElBQU0sUUFBUSxHQUFHLFdBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtZQUNELHNCQUFzQjtZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDakQ7SUFHTCxDQUFDO0lBRUQsNkNBQWtCLEdBQWxCO1FBQ0ksT0FBTztRQUNQLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEMsVUFBVTtRQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDM0UsSUFBSSxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQWxCLENBQWtCLENBQUM7YUFDOUIsS0FBSyxFQUFFLENBQUM7UUFHYixPQUFPO1FBQ1AsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUtELG1DQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUMvQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBRSxlQUFlO1lBQ3pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVEO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztTQUMvQzthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFekIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDSjthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFFTCxDQUFDO0lBSUQsdUNBQVksR0FBWixVQUFhLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUM3QyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7YUFBTSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0I7YUFBTSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ3hGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDOUI7YUFBTSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMvQjthQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFHTCxDQUFDO0lBL3lCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNHO0lBRzFCO1FBREMsUUFBUTttREFDVztJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2dCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNpQjtJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNGO0lBUy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ2tCO0lBUXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3REFDRDtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7eURBQ0E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dEQUNEO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt1REFDRjtJQXhGZCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXN6QnBDO0lBQUQsdUJBQUM7Q0F0ekJELEFBc3pCQyxDQXR6QjZDLEVBQUUsQ0FBQyxTQUFTLEdBc3pCekQ7a0JBdHpCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRvdWdoUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmbGF0YnJlYWRQcmVmYTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2hvcEJhclByZWZhYjogY2MuUHJlZmFiID0gbnVsbDsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ3JhdGVkQ2hlZXNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2xpY2VwcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNsaWNlbXVzaHJvb21QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNoZWVzZVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBtdXNocm9vbVBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwZXBwZXJQaXp6YVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc21va2VFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbW9rZVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdGlwc0xhYmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aXBzUGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBpenphU3RlYW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgY2hvcFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2hvcFNvdW5kVGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8g6LeR5q2lXHJcbiAgICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBydW5NdWx0aXBsaWVyOiBudW1iZXIgPSAxLjM7IC8vIOi3keatpemAn+W6puWAjeeOh1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcnVuRHVzdEVmZmVjdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJ1bkR1c3RUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcnVuRHVzdEludGVydmFsOiBudW1iZXIgPSAwLjI7ICAvLyDmr48gMC4yIOenkuWGkuS4gOasoVxyXG5cclxuXHJcbiAgICAvLyBBdWRpb1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBibGluZ1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgcGlja3VwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwbGFjZVNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmFrZVNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGJha2VTb3VuZElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgY2FuRGVsaXZlcjogYm9vbGVhbiA9IGZhbHNlOyAgIC8vIOaYr+WQpueisOWIsOWHuumkkOWPsO+8iHRhZyA577yJXHJcbiAgICBwcml2YXRlIG1lbnVNYW5hZ2VyOiBhbnkgPSBudWxsOyAgICAgICAvLyDlr6bpmpsgTWVudUJhciDohbPmnKzlvJXnlKhcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBuZWFyYnlPdmVuOiBjYy5Ob2RlID0gbnVsbDsgLy8g6KiY6YyE55uu5YmN6Z2g6L+R5ZOq5YCL54Ok566xXHJcblxyXG5cclxuICAgIHByaXZhdGUgc21va2VUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc21va2VJbnRlcnZhbDogbnVtYmVyID0gMC41OyAvLyDmr48gMC41IOenkuWGkuS4gOasoeeFmVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXQ6IElJbnB1dENvbnRyb2xzID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGxhc3REaXI6IGNjLlZlYzIgPSBjYy52MigwLCAtMSk7IC8vIOmgkOioreWQkeS4i++8iOWJje+8iVxyXG4gICAgcHJpdmF0ZSByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICAvLyDpurXlnJhcclxuICAgIHByaXZhdGUgY2FuUGlja0RvdWdoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkRyb3BEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYXJyaWVkRG91Z2g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RHJvcFRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFnOiBudW1iZXIgPSBudWxsOyBcclxuICAgIHByaXZhdGUgaXNDaG9wcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaG9wUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8g6LW35Y+4XHJcbiAgICBwcml2YXRlIGNhblBpY2tDaGVlc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGNhblBpY2tQUDogYm9vbGVhbiA9IGZhbHNlOyAvLyB0YWcgNSDmi78gcHAg55qEIGZsYWdcclxuXHJcbiAgICBwcml2YXRlIGNhblBpY2tNdXNocm9vbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIOeDpOaKq+iWqVxyXG4gICAgcHJpdmF0ZSBpc0Jha2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBiYWtlUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGlzTmVhck92ZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gdGFnID0gMTJcclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgbGFzdEludGVyYWN0VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaW50ZXJhY3RDb29sZG93bjogbnVtYmVyID0gMC4yOyAvLyAwLjIg56eS5Ya35Y275pmC6ZaTXHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXRoaXMucmIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIFJpZ2lkQm9keTJEIOe1hOS7tu+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdpcmxfaWRsZV9iYWNrXCIpO1xyXG5cclxuICAgICAgICAvLyDwn5KhIOebtOaOpeS9v+eUqOmNteebpOaOp+WItuWZqO+8gVxyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgS2V5Ym9hcmRDb250cm9scygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi4oyo77iPIOS9v+eUqCBLZXlib2FyZENvbnRyb2xz77yBXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBiYXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaG9wQmFyUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYmFyTm9kZSk7XHJcbiAgICAgICAgYmFyTm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhciA9IGJhck5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwgPSBiYXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmlsbGJhclwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hvcEZpbGwpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIEZpbGxiYXLvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSB0aGlzLnVpTWFuYWdlcj8uZ2V0Q29tcG9uZW50KFwiTWVudUJhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmlucHV0LmdldE1vdmVEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoIWRpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYPCfk6Yg5o6n5Yi25Zmo6Ly45Ye655qE5pa55ZCR5piv77yaeD0ke2Rpci54fSwgeT0ke2Rpci55fWApO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdGhpcy5pbnB1dC5nZXRSdW5IZWxkKCk7XHJcblxyXG4gICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkICogdGhpcy5ydW5NdWx0aXBsaWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDinIUg6LeR5q2l54uA5oWL5LiL55Si55Sf57KJ5aG1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJ1bkR1c3RUaW1lciA+PSB0aGlzLnJ1bkR1c3RJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduUnVuRHVzdCgpOyAgLy8g4qyF77iPIOiHquiogueahOeyieWhteWHveaVuFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyID0gMDsgIC8vIOmdnui3keatpeeLgOaFi+WwseS4jeWGkueFmVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOeJqeeQhuW8leaTjueahCBsaW5lYXJWZWxvY2l0eSDmjqfliLbnp7vli5VcclxuICAgICAgICAgICAgbGV0IGZpbmFsU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bChmaW5hbFNwZWVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9iYWNrXCIgOiBcImdpcmxfd2Fsa19iYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1blwiIDogXCJnaXJsX3dhbGtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9yaWdodFwiIDogXCJnaXJsX3dhbGtfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX2xlZnRcIiA6IFwiZ2lybF93YWxrX2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlgZzmraLnp7vli5XvvIjpgJ/luqbmrbjpm7bvvIlcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgLy8g5pKt5pS+6Z2c5q2i5YuV55WrXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmxhc3REaXIueSkgPiBNYXRoLmFicyh0aGlzLmxhc3REaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnkgPiAwID8gXCJnaXJsX2lkbGVfYmFja1wiIDogXCJnaXJsX2lkbGVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci54ID4gMCA/IFwiZ2lybF9pZGxlX3JpZ2h0XCIgOiBcImdpcmxfaWRsZV9sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyppZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0SW50ZXJhY3RUaW1lID4gdGhpcy5pbnRlcmFjdENvb2xkb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RJbnRlcmFjdFRpbWUgPSBub3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmIHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoID09IG51bGwgJiYgIXRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q2hvcHBpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hvcHBpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1JhdGlvID0gTWF0aC5taW4odGhpcy5jaG9wUHJvZ3Jlc3MgLyAyLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcHJvZ3Jlc3NSYXRpbztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob3BTb3VuZFRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kVGltZXIgPj0gMC4yKSB7ICAvLyDmr48gMC4yIOenklxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNob3BTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2hvcFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNob3BQcm9ncmVzcyA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDaG9wcGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxDaG9wcGluZygpOyAgLy8g546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNob3BTb3VuZFRpbWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g54OY54Ok5rWB56iLXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiZcclxuICAgICAgICAgICAgdGhpcy5pc05lYXJPdmVuICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoICYmXHJcbiAgICAgICAgICAgIHRoaXMuaXNQaXp6YSh0aGlzLmNhcnJpZWREb3VnaC5uYW1lKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSAmJiAvLyDinIUg5LiN6IO95piv5bey54Ok6YGO55qEXHJcbiAgICAgICAgICAgICF0aGlzLmlzQmFraW5nXHJcbiAgICAgICAgKXtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIneasoeaMieS4i++8jOmWi+Wni+eDmOeDpFxyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJha2VTb3VuZCAmJiB0aGlzLmJha2VTb3VuZElkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmFrZVNvdW5kLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hY3RpdmUgPSBmYWxzZTsgLy8g6K6T5oqr6Jap5raI5aSxXHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflKUg5oqr6Jap5pS+5YWl54Ok566x5LitLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDku6Xng5jng6Tmj5DnpLpcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggJiZcclxuICAgICAgICAgICAgdGhpcy5pc1BpenphKHRoaXMuY2FycmllZERvdWdoLm5hbWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8g6YCZ5aGK5oqr6Jap5bey57aT54Ok6YGO5LqG77yM5LiN6IO96YeN6KSH54OY54Ok77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWtpbmcgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHRoaXMuYmFrZVByb2dyZXNzIC8gMywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcmF0aW87XHJcblxyXG4gICAgICAgICAgICAvLyDlhpLnhZnpgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5zbW9rZVRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbW9rZVRpbWVyID49IHRoaXMuc21va2VJbnRlcnZhbCAmJiB0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlblBvaW50ID0gdGhpcy5uZWFyYnlPdmVuLmdldENoaWxkQnlOYW1lKFwib3Zlbl9wb2ludFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbW9rZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc21va2VFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtb2tlLm5hbWUgPSBcIlNtb2tlRWZmZWN0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gb3ZlblBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAtNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5uZWFyYnlPdmVuLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmJ5T3Zlbi5hZGRDaGlsZChzbW9rZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SqCDng5jng6TkuK3lhpLnhZnvvIjkvoboh6ogb3Zlbl9wb2ludO+8iVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBvdmVuX3BvaW5077yM54Sh5rOV5YaS54WZXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlUHJvZ3Jlc3MgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hCYWtpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Jha2luZyAmJiAhdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDng5jng6TkuK3mlrfvvIFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQmFraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGl2ZXIgJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g5qqi5p+l5piv5ZCm6IiH6I+c5Zau5bCN5oeJXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRTbG90ID0gdGhpcy5tZW51TWFuYWdlci5zbG90cy5maW5kKHNsb3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROYW1lID09PSBwaXp6YU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlh7rppJDmiJDlip9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKDUwKTsgIC8vIOWBh+ioreavj+mBk+iPnOWKoCAxMCDliIZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RlbGl2ZXJ5RWZmZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmdTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ibGluZ1NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUJhciA9IHRoaXMudWlNYW5hZ2VyLmdldENvbXBvbmVudChcIk1lbnVCYXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVudUJhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVCYXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDmiJDlip/lh7rppJDvvJpcIiArIHBpenphTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5q2k5oqr6Jap5LiN5Zyo6I+c5Zau5LiK77yM5LiN6IO95Ye66aSQ77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGF3blJ1bkR1c3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHVzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucnVuRHVzdEVmZmVjdFByZWZhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyBcclxuICAgICAgICBwb3MueSAtPSA0MDsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZHVzdC5zZXRQb3NpdGlvbihwb3MpOyAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZHVzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpc1BpenphKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBbXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiXS5pbmNsdWRlcyhuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxCYWtpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFrZVNvdW5kSWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0Jha2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLnNtb2tlVGltZXIgPSAwOyBcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FycmllZERvdWdoKSB0aGlzLmNhcnJpZWREb3VnaC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmaW5pc2hCYWtpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFrZVNvdW5kSWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0Jha2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoW1wiYmFrZWRcIl0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8g5Zyo5oqr6Jap5LiK5Yqg5YaS54WZ54m55pWIXHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZWFtID0gY2MuaW5zdGFudGlhdGUodGhpcy5waXp6YVN0ZWFtUHJlZmFiKTtcclxuICAgICAgICAgICAgc3RlYW0ubmFtZSA9IFwiUGl6emFTdGVhbVwiO1xyXG4gICAgICAgICAgICBzdGVhbS5zZXRQb3NpdGlvbihjYy52MygwLCA0MCwgMCkpOyAvLyDlhpLnhZnkvY3nva7nqI3lvq7lnKjmiqvolqnkuIrmlrlcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWRkQ2hpbGQoc3RlYW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIOeDmOeDpOe1kOadn++8jOa4hemZpOWGkueFmVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiU21va2VFZmZlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5uZWFyYnlPdmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3Zlbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBcIlNtb2tlRWZmZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhg4pyFICR7dGhpcy5jYXJyaWVkRG91Z2gubmFtZX0g54OY54Ok5a6M5oiQ77yBYCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyeUFzc2VtYmxlUGl6emEocGFyZW50Tm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnROYW1lcyA9IHBhcmVudE5vZGUuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGhhc0ZsYXRicmVhZCA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIkZsYXRicmVhZFwiKTtcclxuICAgICAgICBjb25zdCBoYXNDaGVlc2UgPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJHcmF0ZWRDaGVlc2VcIik7XHJcbiAgICAgICAgY29uc3QgaGFzTXVzaHJvb20gPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJTbGljZU11c2hyb29tXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc1BQID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiU2xpY2VQUFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNGbGF0YnJlYWQpIHJldHVybjsgLy8g5b+F6aCI5YWI5pyJIGZsYXRicmVhZCDmiY3og73lkIjmiJBcclxuXHJcbiAgICAgICAgbGV0IHBpenphOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGhhc0NoZWVzZSAmJiAhaGFzTXVzaHJvb20gJiYgIWhhc1BQKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaGVlc2VQaXp6YVByZWZhYik7XHJcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcImNoZWVzZV9waXp6YVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzTXVzaHJvb20gJiYgIWhhc0NoZWVzZSAmJiAhaGFzUFApIHtcclxuICAgICAgICAgICAgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm11c2hyb29tUGl6emFQcmVmYWIpO1xyXG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJtdXNocm9vbV9waXp6YVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzUFAgJiYgIWhhc0NoZWVzZSAmJiAhaGFzTXVzaHJvb20pIHtcclxuICAgICAgICAgICAgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcHBlclBpenphUHJlZmFiKTtcclxuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwicGVwcGVyX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyDlsJrkuI3mlK/mj7TopIflkIjlj6PlkbMgcGl6emFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIqumZpOWOn+aWmVxyXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChbXCJGbGF0YnJlYWRcIiwgXCJHcmF0ZWRDaGVlc2VcIiwgXCJTbGljZU11c2hyb29tXCIsIFwiU2xpY2VQUFwiXS5pbmNsdWRlcyhjaGlsZC5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOWKoOWFpSBwaXp6YVxyXG4gICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQocGl6emEpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BQb2ludCA9IHBhcmVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEcm9wUG9pbnRcIik7XHJcbiAgICAgICAgaWYgKGRyb3BQb2ludCkge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGRyb3BQb2ludC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHBhcmVudE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgICAgICBwaXp6YS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+NlSDlkIjmiJAgJHtwaXp6YS5uYW1lfSDmiJDlip/vvIFgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FuY2VsQ2hvcHBpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5uRIOeOqeWutuaUvumWi+epuueZvemNte+8jOS4reaWt+WIh+m6te+8gVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydENob3BwaW5nKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RHJvcFRhcmdldCB8fCB0aGlzLmN1cnJlbnREcm9wVGFnICE9PSA4KSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g5Y+q6IO95Zyo56Cn5p2/5LiK77yIdGFnID0gOO+8ieWIh+mjn+adkO+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFzRG91Z2ggPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIkRvdWdoXCIpKTtcclxuICAgICAgICBjb25zdCBoYXNDaGVlc2UgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIkNoZWVzZVwiKSk7XHJcbiAgICAgICAgY29uc3QgaGFzUFAgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJQUFwiKTtcclxuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIk11c2hyb29tXCIpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCFoYXNEb3VnaCAmJiAhaGFzQ2hlZXNlICYmICFoYXNQUCAmJiAhaGFzTXVzaHJvb20pIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDpgJnlgIvnoKfmnb/kuIrmspLmnInpurXlnJjvvIzkuI3og73liIfvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7ICAvLyDpoa/npLrlnKjop5LoibLpoK3kuIpcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+UqiDlnKjmraPnorrnoKfmnb/kuIrplovlp4vliIfpurXlnJjvvIFcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZmluaXNoQ2hvcHBpbmcoKSB7XHJcbiAgICAgICAgbGV0IGlzQ2hlZXNlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNQUCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc011c2hyb29tID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiRG91Z2hcIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJDaGVlc2VcIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNDaGVlc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiUFBcIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNQUCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJNdXNocm9vbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc011c2hyb29tID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzRG91Z2gpIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmxhdGJyZWFkUHJlZmEpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkZsYXRicmVhZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNDaGVlc2UpIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhdGVkQ2hlZXNlUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJHcmF0ZWRDaGVlc2VcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUFApIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2xpY2VwcFByZWZhYik7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiU2xpY2VQUFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbGljZW11c2hyb29tUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZU11c2hyb29tXCI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKG5ld0l0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldC5hZGRDaGlsZChuZXdJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BQb2ludCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJEcm9wUG9pbnRcIik7XHJcbiAgICAgICAgICAgIGlmICghZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBEcm9wUG9pbnTvvIznhKHms5XmlL7nva7liIflroznmoTnianlk4HvvIFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYOKchSDliIflrowgJHtuZXdJdGVtLm5hbWV977yM5pS+572u5oiQ5Yqf77yBYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHRyeUludGVyYWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tNdXNocm9vbSAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgbXVzaHJvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm11c2hyb29tUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG11c2hyb29tKTtcclxuICAgICAgICAgICAgbXVzaHJvb20ubmFtZSA9IFwiTXVzaHJvb21cIjtcclxuICAgICAgICAgICAgbXVzaHJvb20uc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBtdXNocm9vbTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42EIOaLv+i1t+iYkeiPh1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tQUCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgcHAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBwUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBwKTtcclxuICAgICAgICAgICAgcHAubmFtZSA9IFwiUFBcIjtcclxuICAgICAgICAgICAgcHAuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBwcDtcclxuXHJcbiAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhSDmi7/otbfnlarojIRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrQ2hlZXNlICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVlc2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoZWVzZVByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGVlc2UpO1xyXG4gICAgICAgICAgICBjaGVlc2UubmFtZSA9IFwiQ2hlZXNlXCI7XHJcbiAgICAgICAgICAgIGNoZWVzZS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGNoZWVzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6eAIOaLv+i1t+i1t+WPuFwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5QaWNrRG91Z2ggJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvdWdoID0gY2MuaW5zdGFudGlhdGUodGhpcy5kb3VnaFByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChkb3VnaCk7XHJcbiAgICAgICAgICAgIGRvdWdoLm5hbWUgPSBcIkRvdWdoXCI7XHJcbiAgICAgICAgICAgIGRvdWdoLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gZG91Z2g7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmi7/otbfpurXlnJhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vIPCflIQg5pK/6LW35Lu75L2VIG5hbWUg5Lul6aOf5p2Q6ZaL6aCt55qE5p2x6KW/XHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2thYmxlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5maW5kKGNoaWxkID0+XHJcbiAgICAgICAgICAgICAgICAgW1wiRG91Z2hcIiwgXCJGbGF0YnJlYWRcIiwgXCJDaGVlc2VcIiwgXCJHcmF0ZWRDaGVlc2VcIiwgXCJUb21hdG9cIiwgXCJQaXp6YVNhdWNlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiIC8vIOKGkCDliqDpgJnkuInlgItcclxuICAgICAgICAgICAgICAgICAgICBdLnNvbWUocHJlZml4ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZS5zdGFydHNXaXRoKHByZWZpeClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHBpY2thYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBpY2thYmxlO1xyXG4gICAgICAgICAgICAgICAgcGlja2FibGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBpY2thYmxlKTtcclxuICAgICAgICAgICAgICAgIHBpY2thYmxlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjpIg5pK/6LW35qGM5LiK55qE54mp5ZOB77yaXCIgKyBwaWNrYWJsZS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNhbkRyb3BEb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BQb2ludCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJEcm9wUG9pbnRcIik7XHJcbiAgICAgICAgICAgIGlmICghZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi4p2MIOaJvuS4jeWIsCBEcm9wUG9pbnTvvIznhKHms5XmlL7nva7vvIFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWxyZWFkeUhhc090aGVyVG9wcGluZ3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQgIT09IGRyb3BQb2ludCAmJlxyXG4gICAgICAgICAgICAgICAgY2hpbGQubmFtZSAhPT0gXCJGbGF0YnJlYWRcIiAmJiAvLyDinIUg5YWB6Kix5pyJIEZsYXRicmVhZCDlnKjloLRcclxuICAgICAgICAgICAgICAgICBbXCJEb3VnaFwiLCBcIkZsYXRicmVhZFwiLCBcIkNoZWVzZVwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlRvbWF0b1wiLCBcIlBpenphU2F1Y2VcIiwgXHJcbiAgICAgICAgICAgICAgICBcIlBQXCIsIFwiU2xpY2VQUFwiLCBcIk11c2hyb29tXCIsIFwiU2xpY2VNdXNocm9vbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiIC8vIOKGkCDliqDpgJnkuInlgItcclxuICAgICAgICAgICAgICAgIF0uc29tZSh0eXBlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZSAmJiBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgodHlwZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBoYXNGbGF0YnJlYWQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJGbGF0YnJlYWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFscmVhZHlIYXNTYW1lVHlwZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZHJvcFBvaW50ICYmIGNoaWxkLm5hbWUgPT09IHRoaXMuY2FycmllZERvdWdoLm5hbWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaGFzRmxhdGJyZWFkICYmIGFscmVhZHlIYXNTYW1lVHlwZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOeEoeazleaUvue9ru+8jOahjOS4iuW3suacieebuOWQjOmjn+adkO+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOKchSDmlL7nva7pgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2gucGFyZW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIOaUvuS4i+eJqeWTgeWIsCBEcm9wUG9pbnTvvJpcIiArIHRoaXMuY2FycmllZERvdWdoLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDinIUg5ZiX6Kmm5ZCI5oiQIFBpenph77yI5pS+572u5b6M6Ke455m877yJXHJcbiAgICAgICAgICAgIHRoaXMudHJ5QXNzZW1ibGVQaXp6YSh0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93RGVsaXZlcnlFZmZlY3QoKSB7XHJcbiAgICAgICAgLy8g6aOE5a2X5pWI5p6cXHJcbiAgICAgICAgY29uc3QgdGlwc05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpcHNMYWJlbFByZWZhYik7XHJcbiAgICAgICAgdGlwc05vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKGNjLnYyKDAsIDEwMCkpKTsgLy8g5Ye654++5Zyo6KeS6Imy5LiK5pa5XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aXBzTm9kZSk7XHJcblxyXG4gICAgICAgIC8vIOmjhOa1riArIOa3oeWHulxyXG4gICAgICAgIGNjLnR3ZWVuKHRpcHNOb2RlKVxyXG4gICAgICAgICAgICAuYnkoMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgNjAsIDApLCBvcGFjaXR5OiAtMjU1IH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHRpcHNOb2RlLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICAvLyDnspLlrZDnibnmlYhcclxuICAgICAgICBjb25zdCBlZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpcHNQYXJ0aWNsZVByZWZhYik7XHJcbiAgICAgICAgZWZmZWN0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGVmZmVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcGxheUFuaW0obmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW0gPT09IG5hbWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gbmFtZTtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ2hlZXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6eAIOWPr+S7peaSv+i1t+i1t+WPuFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja1BQID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42FIOWPr+S7peaSv+i1t+eVquiMhO+8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42EIOWPr+S7peaSv+i1t+iYkeiPh++8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA4IHx8IG90aGVyQ29sbGlkZXIudGFnID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gb3RoZXJDb2xsaWRlci50YWc7ICAvLyDoqJjkvY/nm67liY3norDliLDlk6rlgIsgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldCA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfpaMg5o6l6Ke45Yiw56Cn5p2/IFRhZyA9XCIsIG90aGVyQ29sbGlkZXIudGFnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSAxMTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldCA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5lYXJieU92ZW4gPSBvdGhlckNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UpSDmjqXop7jliLDng6TnrrHvvIFcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlU291bmRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NoZWVzZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDlj6/ku6Xmkr/otbfomJHoj4fvvIFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTAgfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBudWxsOyAgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSBcclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/uiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f834buWLXlIMIgzpwunUQfn', 'uiManager');
// Script/scene/uiManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuBar = /** @class */ (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slots = [];
        _this.dishPrefabs = [];
        _this.timerLabel = null; // 拖拉倒數時間的 Label
        _this.timeUpPrefab = null;
        _this.scoreLabel = null; // 拖拉分數的 Label
        _this.totalTime = 60; // 總倒數秒數
        _this.dishesPerGame = 3; // 格子數
        _this.dishInterval = 5; // 每隔幾秒產生一個
        _this.bgm = null;
        _this.tenSecBgm = null;
        _this.fireEffectPrefab = null;
        _this.timerNode = null; // 拖 timerLabel 的 node 進來
        _this.isShaking = false; // 避免重複加動畫
        _this.fireEffectNode = null;
        _this.isFireShown = false;
        _this.currentDishIdx = 0;
        _this.currentTime = 0;
        _this.score = 0; // 加這行
        return _this;
        // ===================================
    }
    MenuBar.prototype.start = function () {
        this.resetMenu();
        this.startGame();
        if (this.bgm) {
            cc.audioEngine.playMusic(this.bgm, true);
        }
    };
    /** 確保場上一直維持 4 道菜 */
    MenuBar.prototype.checkAndFillSlots = function () {
        var currentCount = this.slots.filter(function (slot) { return slot.children.length > 0; }).length;
        while (currentCount < this.slots.length) {
            this.generateNextDish();
            currentCount++;
        }
    };
    MenuBar.prototype.resetMenu = function () {
        for (var _i = 0, _a = this.slots; _i < _a.length; _i++) {
            var slot = _a[_i];
            slot.removeAllChildren();
        }
        this.currentDishIdx = 0;
        this.unschedule(this.generateNextDish);
        this.unschedule(this.countdownStep);
        this.setScore(0); // 分數歸零
    };
    MenuBar.prototype.startGame = function () {
        var _this = this;
        this.currentTime = this.totalTime;
        this.updateLabel();
        this.schedule(this.countdownStep, 1);
        this.generateNextDish();
        this.schedule(this.generateNextDish, this.dishInterval);
        this.setScore(0); // 遊戲開始分數歸零
        var tenSec = 10;
        if (this.tenSecBgm && this.totalTime > tenSec) {
            this.scheduleOnce(function () {
                cc.audioEngine.stopMusic();
                cc.audioEngine.playMusic(_this.tenSecBgm, true);
            }, this.totalTime - tenSec);
        }
    };
    MenuBar.prototype.countdownStep = function () {
        if (this.currentTime > 0) {
            this.currentTime--;
            this.updateLabel();
            // ⏱️ 剩下 15 秒時顯示火焰
            if (this.currentTime === 10 && !this.fireEffectNode) {
                this.spawnFireEffect();
            }
            if (this.currentTime === 10 && !this.isShaking) {
                this.startTimerShake(); // 🎬 啟動震動
            }
            if (this.currentTime === 0) {
                this.timeUp();
                this.stopTimerShake();
            }
        }
    };
    MenuBar.prototype.stopTimerShake = function () {
        if (this.timerNode) {
            cc.Tween.stopAllByTarget(this.timerNode);
            //   this.timerNode.setPosition(cc.v3(0, 0, 0)); // 重設位置
        }
        this.isShaking = false;
    };
    MenuBar.prototype.startTimerShake = function () {
        if (!this.timerNode)
            return;
        this.isShaking = true;
        cc.tween(this.timerNode)
            .repeatForever(cc.tween()
            .by(0.05, { position: cc.v3(2, 0, 0) })
            .by(0.05, { position: cc.v3(-4, 0, 0) })
            .by(0.05, { position: cc.v3(2, 0, 0) }))
            .start();
    };
    MenuBar.prototype.spawnFireEffect = function () {
        if (!this.fireEffectPrefab || !this.timerNode)
            return;
        this.fireEffectNode = cc.instantiate(this.fireEffectPrefab);
        var timerPos = this.timerNode.getPosition(); // Vec2
        var offset = cc.v2(0, 50); // 🆙 往上 50 喵喵
        var finalPos = timerPos.add(offset);
        this.fireEffectNode.setPosition(finalPos);
        this.timerNode.parent.addChild(this.fireEffectNode);
    };
    MenuBar.prototype.updateLabel = function () {
        this.timerLabel.string = this.formatTime(this.currentTime);
    };
    MenuBar.prototype.formatTime = function (sec) {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        return m + ":" + (s < 10 ? '0' : '') + s;
    };
    MenuBar.prototype.generateNextDish = function () {
        // 找第一個空的 slot
        var emptySlotIndex = this.slots.findIndex(function (slot) { return slot.children.length === 0; });
        if (emptySlotIndex === -1)
            return;
        var prefabIdx = Math.floor(Math.random() * this.dishPrefabs.length);
        var dish = cc.instantiate(this.dishPrefabs[prefabIdx]);
        // 初始位置在螢幕右外側（z 軸設 0）
        dish.setPosition(cc.v3(800, 0, 0)); // ✅ 改成 Vec3
        this.slots[emptySlotIndex].addChild(dish);
        // 動畫滑進 slot 中心（也是 Vec3）
        cc.tween(dish)
            .to(0.5, { position: cc.v3(0, 0, 0) }, { easing: 'cubicOut' }) // ✅ Vec3
            .start();
    };
    MenuBar.prototype.timeUp = function () {
        var _this = this;
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!");
        // 顯示 Time Up prefab
        if (this.timeUpPrefab) {
            var node = cc.instantiate(this.timeUpPrefab);
            this.node.addChild(node);
            // 停止所有遊戲互動、物件動作（可選）
            // 例如暫停敵人、暫停玩家、按鈕不可點，自己加
            cc.director.pause();
            // 暫停 director，但先不要暫停到 delay 結束
            setTimeout(function () {
                // 這裡才換場景，不要用 cc.scheduleOnce，否則 pause 時不會動
                cc.director.resume();
                cc.director.loadScene('score-scene');
                _this.saveScoreAndGotoResult();
            }, 2000); // 2 秒
        }
    };
    MenuBar.prototype.saveScoreAndGotoResult = function () {
        // 取得 persist node
        var persistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (persistNode) {
            var persistScript = persistNode.getComponent('ScorePersist');
            persistScript.score = this.score;
            // persistScript.score = 150;
            persistScript.fromScene = cc.director.getScene().name;
        }
        else {
            cc.error('找不到 ScorePersist persist node');
        }
        cc.director.loadScene('ResultScene');
    };
    MenuBar.prototype.resetAndStart = function () {
        this.resetMenu();
        this.startGame();
    };
    // =============== 新增 ===============
    /** 設定分數，外部可呼叫 */
    MenuBar.prototype.setScore = function (newScore) {
        this.score = newScore;
        if (this.scoreLabel) {
            this.scoreLabel.string = "" + this.score;
        }
    };
    /** 取得目前分數 */
    MenuBar.prototype.getScore = function () {
        return this.score;
    };
    /** 分數加減 n，可依需求使用 */
    MenuBar.prototype.addScore = function (delta) {
        this.setScore(this.score + delta);
    };
    __decorate([
        property({ type: [cc.Node] })
    ], MenuBar.prototype, "slots", void 0);
    __decorate([
        property({ type: [cc.Prefab] })
    ], MenuBar.prototype, "dishPrefabs", void 0);
    __decorate([
        property({ type: cc.Label })
    ], MenuBar.prototype, "timerLabel", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], MenuBar.prototype, "timeUpPrefab", void 0);
    __decorate([
        property({ type: cc.Label })
    ], MenuBar.prototype, "scoreLabel", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "totalTime", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishesPerGame", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishInterval", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], MenuBar.prototype, "bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], MenuBar.prototype, "tenSecBgm", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], MenuBar.prototype, "fireEffectPrefab", void 0);
    __decorate([
        property({ type: cc.Node })
    ], MenuBar.prototype, "timerNode", void 0);
    MenuBar = __decorate([
        ccclass("MenuBar")
    ], MenuBar);
    return MenuBar;
}(cc.Component));
exports.default = MenuBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ1FDO1FBOVBHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsY0FBYztRQUczQyxlQUFTLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUdoQyxtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFHakMsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBRSxXQUFXO1FBR3RDLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDLENBQUUseUJBQXlCO1FBQzdDLGVBQVMsR0FBWSxLQUFLLENBQUMsQ0FBQyxVQUFVO1FBR3RDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBSzdCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNOztRQStNakMsc0NBQXNDO0lBQzFDLENBQUM7SUE5TUcsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFD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QUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs4Q0FDRjtJQW5DVCxPQUFPO1FBRDNCLE9BQU8sQ0FBQyxTQUFTLENBQUM7T0FDRSxPQUFPLENBZ1EzQjtJQUFELGNBQUM7Q0FoUUQsQUFnUUMsQ0FoUW9DLEVBQUUsQ0FBQyxTQUFTLEdBZ1FoRDtrQkFoUW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJNZW51QmFyXCIpIFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Ob2RlXSB9KVxyXG4gICAgc2xvdHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5QcmVmYWJdIH0pXHJcbiAgICBkaXNoUHJlZmFiczogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDmi5bmi4nlgJLmlbjmmYLplpPnmoQgTGFiZWxcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICAgIHRpbWVVcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDmi5bmi4nliIbmlbjnmoQgTGFiZWxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvdGFsVGltZTogbnVtYmVyID0gNjA7IC8vIOe4veWAkuaVuOenkuaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGlzaGVzUGVyR2FtZTogbnVtYmVyID0gMzsgLy8g5qC85a2Q5pW4XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkaXNoSW50ZXJ2YWw6IG51bWJlciA9IDU7ICAvLyDmr4/pmpTlub7np5LnlKLnlJ/kuIDlgItcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHRlblNlY0JnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICAgIGZpcmVFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxyXG4gICAgdGltZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDsgIC8vIOaLliB0aW1lckxhYmVsIOeahCBub2RlIOmAsuS+hlxyXG4gICAgcHJpdmF0ZSBpc1NoYWtpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8g6YG/5YWN6YeN6KSH5Yqg5YuV55WrXHJcblxyXG5cclxuICAgIHByaXZhdGUgZmlyZUVmZmVjdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgcHJpdmF0ZSBpc0ZpcmVTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudERpc2hJZHg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDsgLy8g5Yqg6YCZ6KGMXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1lbnUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJnbSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog56K65L+d5aC05LiK5LiA55u057at5oyBIDQg6YGT6I+cICovXHJcbiAgICBjaGVja0FuZEZpbGxTbG90cygpIHtcclxuICAgICAgICBsZXQgY3VycmVudENvdW50ID0gdGhpcy5zbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90LmNoaWxkcmVuLmxlbmd0aCA+IDApLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoY3VycmVudENvdW50IDwgdGhpcy5zbG90cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHREaXNoKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVzZXRNZW51KCkge1xyXG4gICAgICAgIGZvciAobGV0IHNsb3Qgb2YgdGhpcy5zbG90cykge1xyXG4gICAgICAgICAgICBzbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudERpc2hJZHggPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNjb3JlKDApOyAvLyDliIbmlbjmrbjpm7ZcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXAsIDEpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoLCB0aGlzLmRpc2hJbnRlcnZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2NvcmUoMCk7IC8vIOmBiuaIsumWi+Wni+WIhuaVuOatuOmbtlxyXG5cclxuICAgICAgICBjb25zdCB0ZW5TZWMgPSAxMDtcclxuICAgICAgICBpZiAodGhpcy50ZW5TZWNCZ20gJiYgdGhpcy50b3RhbFRpbWUgPiB0ZW5TZWMpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy50ZW5TZWNCZ20sIHRydWUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLnRvdGFsVGltZSAtIHRlblNlYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50ZG93blN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8g4o+x77iPIOWJqeS4iyAxNSDnp5LmmYLpoa/npLrngavnhLBcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDEwICYmICF0aGlzLmZpcmVFZmZlY3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRmlyZUVmZmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA9PT0gMTAgJiYgIXRoaXMuaXNTaGFraW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lclNoYWtlKCk7IC8vIPCfjqwg5ZWf5YuV6ZyH5YuVXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BUaW1lclNoYWtlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFRpbWVyU2hha2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnRpbWVyTm9kZSk7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy50aW1lck5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwgMCwgMCkpOyAvLyDph43oqK3kvY3nva5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1NoYWtpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgc3RhcnRUaW1lclNoYWtlKCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyTm9kZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzU2hha2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGltZXJOb2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4wNSwgeyBwb3NpdGlvbjogY2MudjMoMiwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4wNSwgeyBwb3NpdGlvbjogY2MudjMoLTQsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgcG9zaXRpb246IGNjLnYzKDIsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25GaXJlRWZmZWN0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJlRWZmZWN0UHJlZmFiIHx8ICF0aGlzLnRpbWVyTm9kZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmZpcmVFZmZlY3ROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5maXJlRWZmZWN0UHJlZmFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXJQb3MgPSB0aGlzLnRpbWVyTm9kZS5nZXRQb3NpdGlvbigpOyAvLyBWZWMyXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2MudjIoMCwgNTApOyAvLyDwn4aZIOW+gOS4iiA1MCDllrXllrVcclxuICAgICAgICBjb25zdCBmaW5hbFBvcyA9IHRpbWVyUG9zLmFkZChvZmZzZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmZpcmVFZmZlY3ROb2RlLnNldFBvc2l0aW9uKGZpbmFsUG9zKTtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5wYXJlbnQuYWRkQ2hpbGQodGhpcy5maXJlRWZmZWN0Tm9kZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGVMYWJlbCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuY3VycmVudFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRpbWUoc2VjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcclxuICAgICAgICBjb25zdCBzID0gc2VjICUgNjA7XHJcbiAgICAgICAgcmV0dXJuIGAke219OiR7cyA8IDEwID8gJzAnIDogJyd9JHtzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZ2VuZXJhdGVOZXh0RGlzaCgpIHtcclxuICAgICAgICAvLyDmib7nrKzkuIDlgIvnqbrnmoQgc2xvdFxyXG4gICAgICAgIGxldCBlbXB0eVNsb3RJbmRleCA9IHRoaXMuc2xvdHMuZmluZEluZGV4KHNsb3QgPT4gc2xvdC5jaGlsZHJlbi5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGlmIChlbXB0eVNsb3RJbmRleCA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHByZWZhYklkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzaFByZWZhYnMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgZGlzaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlzaFByZWZhYnNbcHJlZmFiSWR4XSk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+S9jee9ruWcqOieouW5leWPs+WkluWBtO+8iHog6Lu46KitIDDvvIlcclxuICAgICAgICBkaXNoLnNldFBvc2l0aW9uKGNjLnYzKDgwMCwgMCwgMCkpOyAgLy8g4pyFIOaUueaIkCBWZWMzXHJcbiAgICAgICAgdGhpcy5zbG90c1tlbXB0eVNsb3RJbmRleF0uYWRkQ2hpbGQoZGlzaCk7XHJcblxyXG4gICAgICAgIC8vIOWLleeVq+a7kemAsiBzbG90IOS4reW/g++8iOS5n+aYryBWZWMz77yJXHJcbiAgICAgICAgY2MudHdlZW4oZGlzaClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSkgIC8vIOKchSBWZWMzXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aW1lVXAoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRkb3duU3RlcCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XHJcbiAgICAgICAgY2MubG9nKFwiVGltZSdzIHVwIVwiKTtcclxuXHJcbiAgICAgICAgLy8g6aGv56S6IFRpbWUgVXAgcHJlZmFiXHJcbiAgICAgICAgaWYgKHRoaXMudGltZVVwUHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aW1lVXBQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAvLyDlgZzmraLmiYDmnInpgYrmiLLkupLli5XjgIHnianku7bli5XkvZzvvIjlj6/pgbjvvIlcclxuICAgICAgICAgICAgLy8g5L6L5aaC5pqr5YGc5pW15Lq644CB5pqr5YGc546p5a6244CB5oyJ6YiV5LiN5Y+v6bue77yM6Ieq5bex5YqgXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmmqvlgZwgZGlyZWN0b3LvvIzkvYblhYjkuI3opoHmmqvlgZzliLAgZGVsYXkg57WQ5p2fXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6YCZ6KOh5omN5o+b5aC05pmv77yM5LiN6KaB55SoIGNjLnNjaGVkdWxlT25jZe+8jOWQpuWJhyBwYXVzZSDmmYLkuI3mnIPli5VcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzY29yZS1zY2VuZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU2NvcmVBbmRHb3RvUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApOyAvLyAyIOenklxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlU2NvcmVBbmRHb3RvUmVzdWx0KCkge1xyXG4gICAgICAgIC8vIOWPluW+lyBwZXJzaXN0IG5vZGVcclxuICAgICAgICBjb25zdCBwZXJzaXN0Tm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ1Njb3JlUGVyc2lzdCcpO1xyXG4gICAgICAgIGlmIChwZXJzaXN0Tm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwZXJzaXN0U2NyaXB0ID0gcGVyc2lzdE5vZGUuZ2V0Q29tcG9uZW50KCdTY29yZVBlcnNpc3QnKTtcclxuICAgICAgICAgICAgcGVyc2lzdFNjcmlwdC5zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgIC8vIHBlcnNpc3RTY3JpcHQuc2NvcmUgPSAxNTA7XHJcbiAgICAgICAgICAgIHBlcnNpc3RTY3JpcHQuZnJvbVNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKCfmib7kuI3liLAgU2NvcmVQZXJzaXN0IHBlcnNpc3Qgbm9kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1Jlc3VsdFNjZW5lJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlc2V0QW5kU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1lbnUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSDmlrDlop4gPT09PT09PT09PT09PT09XHJcbiAgICAvKiog6Kit5a6a5YiG5pW477yM5aSW6YOo5Y+v5ZG85Y+rICovXHJcbiAgICBzZXRTY29yZShuZXdTY29yZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IG5ld1Njb3JlO1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPluW+l+ebruWJjeWIhuaVuCAqL1xyXG4gICAgZ2V0U2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5YiG5pW45Yqg5ribIG7vvIzlj6/kvp3pnIDmsYLkvb/nlKggKi9cclxuICAgIGFkZFNjb3JlKGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFNjb3JlKHRoaXMuc2NvcmUgKyBkZWx0YSk7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/AutoSceneSwitcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e020aBolepIXan4LeAh3SiX', 'AutoSceneSwitcher');
// Script/script/AutoSceneSwitcher.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AutoSceneSwitcher = /** @class */ (function (_super) {
    __extends(AutoSceneSwitcher, _super);
    function AutoSceneSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waitSeconds = 4;
        _this.targetScene = "Menu";
        _this.fadeNode = null; // 請指定一個全螢幕黑色Sprite節點，alpha=0
        return _this;
    }
    AutoSceneSwitcher.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.fadeAndSwitch();
        }, this.waitSeconds);
    };
    AutoSceneSwitcher.prototype.fadeAndSwitch = function () {
        var _this = this;
        if (this.fadeNode) {
            // 先確保遮罩可見且透明
            this.fadeNode.active = true;
            this.fadeNode.opacity = 0;
            cc.tween(this.fadeNode)
                .to(1, { opacity: 255 }) // 1秒淡出
                .call(function () {
                cc.director.loadScene(_this.targetScene);
            })
                .start();
        }
        else {
            cc.director.loadScene(this.targetScene);
        }
    };
    __decorate([
        property
    ], AutoSceneSwitcher.prototype, "waitSeconds", void 0);
    __decorate([
        property
    ], AutoSceneSwitcher.prototype, "targetScene", void 0);
    __decorate([
        property(cc.Node)
    ], AutoSceneSwitcher.prototype, "fadeNode", void 0);
    AutoSceneSwitcher = __decorate([
        ccclass
    ], AutoSceneSwitcher);
    return AutoSceneSwitcher;
}(cc.Component));
exports.default = AutoSceneSwitcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEF1dG9TY2VuZVN3aXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBK0JDO1FBN0JHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGlCQUFXLEdBQVcsTUFBTSxDQUFDO1FBRzdCLGNBQVEsR0FBWSxJQUFJLENBQUMsQ0FBQyw2QkFBNkI7O0lBdUIzRCxDQUFDO0lBckJHLGlDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsYUFBYTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNsQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTztpQkFDL0IsSUFBSSxDQUFDO2dCQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUE1QkQ7UUFEQyxRQUFROzBEQUNlO0lBR3hCO1FBREMsUUFBUTswREFDb0I7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTztJQVJSLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBK0JyQztJQUFELHdCQUFDO0NBL0JELEFBK0JDLENBL0I4QyxFQUFFLENBQUMsU0FBUyxHQStCMUQ7a0JBL0JvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1NjZW5lU3dpdGNoZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB3YWl0U2Vjb25kczogbnVtYmVyID0gNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRhcmdldFNjZW5lOiBzdHJpbmcgPSBcIk1lbnVcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhZGVOb2RlOiBjYy5Ob2RlID0gbnVsbDsgLy8g6KuL5oyH5a6a5LiA5YCL5YWo6J6i5bmV6buR6ImyU3ByaXRl56+A6bue77yMYWxwaGE9MFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlQW5kU3dpdGNoKCk7XHJcbiAgICAgICAgfSwgdGhpcy53YWl0U2Vjb25kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUFuZFN3aXRjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mYWRlTm9kZSkge1xyXG4gICAgICAgICAgICAvLyDlhYjnorrkv53pga7nvanlj6/opovkuJTpgI/mmI5cclxuICAgICAgICAgICAgdGhpcy5mYWRlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhZGVOb2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pIC8vIDHnp5Lmt6Hlh7pcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy50YXJnZXRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMudGFyZ2V0U2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/GamepadControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00044YejV5CopjyAHjis/Qj', 'GamepadControls');
// Script/Player/GamepadControls.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamepadCharacterControl = /** @class */ (function (_super) {
    __extends(GamepadCharacterControl, _super);
    function GamepadCharacterControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        return _this;
    }
    GamepadCharacterControl.prototype.update = function (dt) {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        var gp = gamepads[0]; // 只取第一個搖桿（玩家1）
        if (!gp)
            return;
        var axisX = gp.axes[0]; // 左搖桿水平軸（-1 左, 1 右）
        var axisY = gp.axes[1]; // 左搖桿垂直軸（-1 上, 1 下）
        // 若搖桿位移小於死區，視為靜止
        var deadZone = 0.2;
        var moveX = Math.abs(axisX) > deadZone ? axisX : 0;
        var moveY = Math.abs(axisY) > deadZone ? axisY : 0;
        var dx = moveX * this.speed * dt;
        var dy = -moveY * this.speed * dt; // 注意 Y 軸方向相反
        this.node.x += dx;
        this.node.y += dy;
        // 可選：翻轉角色方向
        if (Math.abs(moveX) > 0.1) {
            this.node.scaleX = moveX > 0 ? 1 : -1;
        }
    };
    __decorate([
        property
    ], GamepadCharacterControl.prototype, "speed", void 0);
    GamepadCharacterControl = __decorate([
        ccclass
    ], GamepadCharacterControl);
    return GamepadCharacterControl;
}(cc.Component));
exports.default = GamepadCharacterControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEdhbWVwYWRDb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQTZCQztRQTNCRyxXQUFLLEdBQVcsR0FBRyxDQUFDOztJQTJCeEIsQ0FBQztJQXpCRyx3Q0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXRFLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDdkMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1FBRWhCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDOUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUU5QyxpQkFBaUI7UUFDakIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckQsSUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsYUFBYTtRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxCLFlBQVk7UUFDWixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBMUJEO1FBREMsUUFBUTswREFDVztJQUZILHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBNkIzQztJQUFELDhCQUFDO0NBN0JELEFBNkJDLENBN0JvRCxFQUFFLENBQUMsU0FBUyxHQTZCaEU7a0JBN0JvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBhZENoYXJhY3RlckNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgPyBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKSA6IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBncCA9IGdhbWVwYWRzWzBdOyAvLyDlj6rlj5bnrKzkuIDlgIvmkJbmob/vvIjnjqnlrrYx77yJXHJcbiAgICAgICAgaWYgKCFncCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBheGlzWCA9IGdwLmF4ZXNbMF07IC8vIOW3puaQluahv+awtOW5s+i7uO+8iC0xIOW3piwgMSDlj7PvvIlcclxuICAgICAgICBjb25zdCBheGlzWSA9IGdwLmF4ZXNbMV07IC8vIOW3puaQluahv+WeguebtOi7uO+8iC0xIOS4iiwgMSDkuIvvvIlcclxuXHJcbiAgICAgICAgLy8g6Iul5pCW5qG/5L2N56e75bCP5pa85q275Y2A77yM6KaW54K66Z2c5q2iXHJcbiAgICAgICAgY29uc3QgZGVhZFpvbmUgPSAwLjI7XHJcbiAgICAgICAgY29uc3QgbW92ZVggPSBNYXRoLmFicyhheGlzWCkgPiBkZWFkWm9uZSA/IGF4aXNYIDogMDtcclxuICAgICAgICBjb25zdCBtb3ZlWSA9IE1hdGguYWJzKGF4aXNZKSA+IGRlYWRab25lID8gYXhpc1kgOiAwO1xyXG5cclxuICAgICAgICBjb25zdCBkeCA9IG1vdmVYICogdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gLW1vdmVZICogdGhpcy5zcGVlZCAqIGR0OyAvLyDms6jmhI8gWSDou7jmlrnlkJHnm7jlj41cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZHg7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gZHk7XHJcblxyXG4gICAgICAgIC8vIOWPr+mBuO+8mue/u+i9ieinkuiJsuaWueWQkVxyXG4gICAgICAgIGlmIChNYXRoLmFicyhtb3ZlWCkgPiAwLjEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IG1vdmVYID4gMCA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/ScorePersist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72632a25jtMR4xv91HIBR4O', 'ScorePersist');
// Script/scene/ScorePersist.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScorePersist = /** @class */ (function (_super) {
    __extends(ScorePersist, _super);
    function ScorePersist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.score = 0;
        _this.fromScene = "";
        return _this;
    }
    ScorePersist.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node); // 讓這個 node 換場景不會被移除
    };
    ScorePersist = __decorate([
        ccclass
    ], ScorePersist);
    return ScorePersist;
}(cc.Component));
exports.default = ScorePersist;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcU2NvcmVQZXJzaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBTUM7UUFMVSxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVMsR0FBVyxFQUFFLENBQUM7O0lBSWxDLENBQUM7SUFIRyw2QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDL0QsQ0FBQztJQUxnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBTWhDO0lBQUQsbUJBQUM7Q0FORCxBQU1DLENBTnlDLEVBQUUsQ0FBQyxTQUFTLEdBTXJEO2tCQU5vQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlUGVyc2lzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZnJvbVNjZW5lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7IC8vIOiuk+mAmeWAiyBub2RlIOaPm+WgtOaZr+S4jeacg+iiq+enu+mZpFxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/CloseButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97e3an7XxlAkK98hmIpqpkU', 'CloseButton');
// Script/script/CloseButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CloseButton = /** @class */ (function (_super) {
    __extends(CloseButton, _super);
    function CloseButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        return _this;
    }
    CloseButton.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.closeTarget, this);
    };
    CloseButton.prototype.closeTarget = function () {
        if (this.targetNode) {
            this.targetNode.active = false;
        }
    };
    CloseButton.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.closeTarget, this);
    };
    __decorate([
        property(cc.Node)
    ], CloseButton.prototype, "targetNode", void 0);
    CloseButton = __decorate([
        ccclass
    ], CloseButton);
    return CloseButton;
}(cc.Component));
exports.default = CloseButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXENsb3NlQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBaUJDO1FBZkcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBZS9CLENBQUM7SUFiRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUztJQUZWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpQi9CO0lBQUQsa0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQndDLEVBQUUsQ0FBQyxTQUFTLEdBaUJwRDtrQkFqQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbG9zZVRhcmdldCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VUYXJnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbG9zZVRhcmdldCwgdGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/ExpandButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9222DM7tlGSJxp6TxFNNS4', 'ExpandButton');
// Script/script/ExpandButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DropdownButton = /** @class */ (function (_super) {
    __extends(DropdownButton, _super);
    function DropdownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropdownMenu = null;
        _this.isExpanded = false;
        return _this;
    }
    DropdownButton.prototype.onLoad = function () {
        this.dropdownMenu.active = false;
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
    };
    DropdownButton.prototype.start = function () {
        // 确保菜单初始状态
        this.dropdownMenu.active = false;
    };
    DropdownButton.prototype.toggleMenu = function () {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.showMenu();
        }
        else {
            this.hideMenu();
        }
    };
    DropdownButton.prototype.showMenu = function () {
        this.dropdownMenu.active = true;
        // 添加淡入动画
        this.dropdownMenu.opacity = 0;
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 255 })
            .start();
        // 监听全局触摸
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    };
    DropdownButton.prototype.hideMenu = function () {
        var _this = this;
        // 添加淡出动画
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.dropdownMenu.active = false;
            cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, _this.onGlobalTouch, _this);
        })
            .start();
    };
    DropdownButton.prototype.onGlobalTouch = function (event) {
        var touchPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        if (!this.node.getBoundingBox().contains(touchPos)) {
            if (!this.dropdownMenu.active ||
                !this.dropdownMenu.getBoundingBox().contains(touchPos)) {
                this.isExpanded = false;
                this.hideMenu();
            }
        }
    };
    DropdownButton.prototype.onDestroy = function () {
        // 移除所有监听
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    };
    __decorate([
        property(cc.Node)
    ], DropdownButton.prototype, "dropdownMenu", void 0);
    DropdownButton = __decorate([
        ccclass
    ], DropdownButton);
    return DropdownButton;
}(cc.Component));
exports.default = DropdownButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEV4cGFuZEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1FQztRQWpFRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFZLEtBQUssQ0FBQzs7SUErRHhDLENBQUM7SUE3REcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVoQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN0QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3pCLEtBQUssRUFBRSxDQUFDO1FBRWIsU0FBUztRQUNULEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLFNBQVM7UUFDVCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQTBCO1FBQ3BDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUN6QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1NBQ0o7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFoRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVztJQUZaLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtRWxDO0lBQUQscUJBQUM7Q0FuRUQsQUFtRUMsQ0FuRTJDLEVBQUUsQ0FBQyxTQUFTLEdBbUV2RDtrQkFuRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25CdXR0b24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkcm9wZG93bk1lbnU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duTWVudS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvZ2dsZU1lbnUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOehruS/neiPnOWNleWIneWni+eKtuaAgVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5pc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZW51KCkge1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5re75Yqg5reh5YWl5Yqo55S7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5kcm9wZG93bk1lbnUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDnm5HlkKzlhajlsYDop6bmkbhcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkdsb2JhbFRvdWNoLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudSgpIHtcclxuICAgICAgICAvLyDmt7vliqDmt6Hlh7rliqjnlLtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyb3Bkb3duTWVudSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uR2xvYmFsVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdsb2JhbFRvdWNoKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnModG91Y2hQb3MpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93bk1lbnUuYWN0aXZlIHx8IFxyXG4gICAgICAgICAgICAgICAgIXRoaXMuZHJvcGRvd25NZW51LmdldEJvdW5kaW5nQm94KCkuY29udGFpbnModG91Y2hQb3MpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g56e76Zmk5omA5pyJ55uR5ZCsXHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG9nZ2xlTWVudSwgdGhpcyk7XHJcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uR2xvYmFsVG91Y2gsIHRoaXMpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/FirebaseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a25420OsNtJyJ/DOoVJ/aos', 'FirebaseManager');
// Script/script/FirebaseManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FirebaseManager = /** @class */ (function (_super) {
    __extends(FirebaseManager, _super);
    function FirebaseManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitialized = false;
        _this.firebaseConfig = {
            apiKey: "AIzaSyBDxNDyXpBYaxPqu_67VOdiBpHktm07Lvg",
            authDomain: "fastcomespeed.firebaseapp.com",
            databaseURL: "https://fastcomespeed-default-rtdb.firebaseio.com",
            projectId: "fastcomespeed",
            storageBucket: "fastcomespeed.firebasestorage.app",
            messagingSenderId: "1000911495183",
            appId: "1:1000911495183:web:8acc6cb6b915d6687e437a",
            measurementId: "G-JMECN9BKDF"
        };
        return _this;
    }
    FirebaseManager_1 = FirebaseManager;
    FirebaseManager.prototype.onLoad = function () {
        //alert("FirebaseManager onLoad");
        if (FirebaseManager_1.instance === null) {
            FirebaseManager_1.instance = this;
            cc.game.addPersistRootNode(this.node);
            this.initializeFirebase();
        }
        else {
            this.node.destroy();
        }
    };
    FirebaseManager.prototype.initializeFirebase = function () {
        try {
            if (!this.isInitialized) {
                var app = firebase.initializeApp(this.firebaseConfig);
                //alert(app);
                this.isInitialized = true;
                console.log("Firebase initialized successfully:", app);
            }
        }
        catch (error) {
            console.error("Firebase initialization error:", error);
            // 如果已經初始化過，會拋出錯誤，這是正常的
            if (error.code === 'app/duplicate-app') {
                this.isInitialized = true;
                console.warn("Firebase app already initialized, using existing instance.");
            }
            else {
                alert(error);
            }
        }
    };
    FirebaseManager.getInstance = function () {
        return FirebaseManager_1.instance;
    };
    FirebaseManager.prototype.isFirebaseInitialized = function () {
        return this.isInitialized;
    };
    FirebaseManager.prototype.getAuth = function () {
        if (!this.isInitialized) {
            throw new Error("Firebase not initialized");
        }
        return firebase.auth();
    };
    FirebaseManager.prototype.getDatabase = function () {
        if (!this.isInitialized) {
            throw new Error("Firebase not initialized");
        }
        return firebase.database();
    };
    FirebaseManager.getFirebaseManager = function () {
        if (FirebaseManager_1.instance === null) {
            console.warn("FirebaseManager instance is null, creating a new one.");
            var node = new cc.Node('FirebaseManager');
            cc.game.addPersistRootNode(node);
            return node.addComponent(FirebaseManager_1);
        }
        return FirebaseManager_1.instance;
    };
    var FirebaseManager_1;
    FirebaseManager.instance = null;
    FirebaseManager = FirebaseManager_1 = __decorate([
        ccclass
    ], FirebaseManager);
    return FirebaseManager;
}(cc.Component));
exports.default = FirebaseManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEZpcmViYXNlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQStFQztRQTdFVyxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV0QixvQkFBYyxHQUFFO1lBQ2pDLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsVUFBVSxFQUFFLCtCQUErQjtZQUMzQyxXQUFXLEVBQUUsbURBQW1EO1lBQ2hFLFNBQVMsRUFBRSxlQUFlO1lBQzFCLGFBQWEsRUFBRSxtQ0FBbUM7WUFDbEQsaUJBQWlCLEVBQUUsZUFBZTtZQUNsQyxLQUFLLEVBQUUsNENBQTRDO1lBQ25ELGFBQWEsRUFBRSxjQUFjO1NBQzVCLENBQUM7O0lBa0VOLENBQUM7d0JBL0VvQixlQUFlO0lBZ0JoQyxnQ0FBTSxHQUFOO1FBQ0ksa0NBQWtDO1FBQ2xDLElBQUksaUJBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25DLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTyw0Q0FBa0IsR0FBMUI7UUFDSSxJQUFJO1lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN4RCxhQUFhO2dCQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkQsdUJBQXVCO1lBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQzthQUM5RTtpQkFDRztnQkFDQSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEI7U0FDSjtJQUNMLENBQUM7SUFFYSwyQkFBVyxHQUF6QjtRQUNJLE9BQU8saUJBQWUsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0saUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFYSxrQ0FBa0IsR0FBaEM7UUFDSSxJQUFJLGlCQUFlLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7WUFDdEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxpQkFBZSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDOztJQTdFYyx3QkFBUSxHQUFvQixJQUFJLENBQUM7SUFEL0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStFbkM7SUFBRCxzQkFBQztDQS9FRCxBQStFQyxDQS9FNEMsRUFBRSxDQUFDLFNBQVMsR0ErRXhEO2tCQS9Fb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZWJhc2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBGaXJlYmFzZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlYmFzZUNvbmZpZz0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJEeE5EeVhwQllheFBxdV82N1ZPZGlCcEhrdG0wN0x2Z1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJmYXN0Y29tZXNwZWVkLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9mYXN0Y29tZXNwZWVkLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImZhc3Rjb21lc3BlZWRcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZmFzdGNvbWVzcGVlZC5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDAwOTExNDk1MTgzXCIsXHJcbiAgICBhcHBJZDogXCIxOjEwMDA5MTE0OTUxODM6d2ViOjhhY2M2Y2I2YjkxNWQ2Njg3ZTQzN2FcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1KTUVDTjlCS0RGXCJcclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy9hbGVydChcIkZpcmViYXNlTWFuYWdlciBvbkxvYWRcIik7XHJcbiAgICAgICAgaWYgKEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBGaXJlYmFzZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVGaXJlYmFzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHRoaXMuZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgLy9hbGVydChhcHApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5OlwiLCBhcHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOW3sue2k+WIneWni+WMlumBju+8jOacg+aLi+WHuumMr+iqpO+8jOmAmeaYr+ato+W4uOeahFxyXG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ2FwcC9kdXBsaWNhdGUtYXBwJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZpcmViYXNlIGFwcCBhbHJlYWR5IGluaXRpYWxpemVkLCB1c2luZyBleGlzdGluZyBpbnN0YW5jZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEZpcmViYXNlTWFuYWdlciB7XHJcbiAgICAgICAgcmV0dXJuIEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGaXJlYmFzZUluaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1dGgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RmlyZWJhc2VNYW5hZ2VyKCk6IEZpcmViYXNlTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGaXJlYmFzZU1hbmFnZXIgaW5zdGFuY2UgaXMgbnVsbCwgY3JlYXRpbmcgYSBuZXcgb25lLlwiKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdGaXJlYmFzZU1hbmFnZXInKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmFkZENvbXBvbmVudChGaXJlYmFzZU1hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRmlyZWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG59ICJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/ExpandPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcf08e/VE9J3Ja2mgUVSEyE', 'ExpandPage');
// Script/script/ExpandPage.ts

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
// SimpleToggleButton.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleToggleButton = /** @class */ (function (_super) {
    __extends(SimpleToggleButton, _super);
    function SimpleToggleButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null; // 要控制的內容節點
        return _this;
    }
    SimpleToggleButton.prototype.onLoad = function () {
        // 初始狀態（可選）
        if (this.content) {
            this.content.active = false;
        }
        // 綁定按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleContent, this);
    };
    SimpleToggleButton.prototype.toggleContent = function () {
        if (this.content) {
            this.content.active = !this.content.active; // 切換顯示狀態
        }
    };
    SimpleToggleButton.prototype.onDestroy = function () {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleContent, this);
    };
    __decorate([
        property(cc.Node)
    ], SimpleToggleButton.prototype, "content", void 0);
    SimpleToggleButton = __decorate([
        ccclass
    ], SimpleToggleButton);
    return SimpleToggleButton;
}(cc.Component));
exports.default = SimpleToggleButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEV4cGFuZFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCO0FBQ2xCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBd0JDO1FBdEJHLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxXQUFXOztJQXNCeEMsQ0FBQztJQXBCRyxtQ0FBTSxHQUFOO1FBQ0ksV0FBVztRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMvQjtRQUVELFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO1NBQ3hEO0lBQ0wsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDSSxTQUFTO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRlAsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F3QnRDO0lBQUQseUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QitDLEVBQUUsQ0FBQyxTQUFTLEdBd0IzRDtrQkF4Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbXBsZVRvZ2dsZUJ1dHRvbi50c1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlVG9nZ2xlQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7IC8vIOimgeaOp+WItueahOWFp+WuueevgOm7nlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDliJ3lp4vni4DmhYvvvIjlj6/pgbjvvIlcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g57aB5a6a5oyJ6YiV6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b2dnbGVDb250ZW50LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb250ZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9ICF0aGlzLmNvbnRlbnQuYWN0aXZlOyAvLyDliIfmj5vpoa/npLrni4DmhYtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIOenu+mZpOS6i+S7tuebo+iBvVxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvZ2dsZUNvbnRlbnQsIHRoaXMpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7834lHPaBEErNbv6LSfhg7', 'Login');
// Script/script/Login.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FirebaseManager_1 = require("./FirebaseManager");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firebaseManager = null;
        return _this;
    }
    Login.prototype.start = function () {
        //cc.director.loadScene("Loading"); 
        // 使用新的方式獲取 FirebaseManager 實例
        this.firebaseManager = FirebaseManager_1.default.getFirebaseManager();
        if (!this.firebaseManager.isFirebaseInitialized()) {
            console.error("Firebase not initialized!");
            return;
        }
        var continueButton = new cc.Component.EventHandler();
        continueButton.target = this.node;
        continueButton.component = "Login";
        continueButton.handler = "onLogin";
        cc.find("Canvas/Login/Submit").getComponent(cc.Button).clickEvents.push(continueButton);
    };
    Login.prototype.onLogin = function () {
        var _this = this;
        // 檢查輸入是否為空
        var email = cc.find("Canvas/Login/Email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/Login/Password").getComponent(cc.EditBox).string;
        if (!email || !password) {
            alert("請填寫所有欄位");
            return;
        }
        // 檢查 email 格式
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("請輸入有效的電子郵件地址");
            return;
        }
        console.log("嘗試登入:", email);
        // 使用 FirebaseManager 進行登入
        this.firebaseManager.getAuth().signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            console.log("登入成功:", userCredential.user.email);
            _this.loadMenuPage();
        })
            .catch(function (error) {
            console.error("登入錯誤:", error);
            switch (error.code) {
                case 'auth/invalid-credential':
                    alert("帳號或密碼錯誤");
                    break;
                case 'auth/user-not-found':
                    alert("找不到此用戶");
                    break;
                case 'auth/wrong-password':
                    alert("密碼錯誤");
                    break;
                default:
                    alert(error.message);
            }
        });
    };
    Login.prototype.loadMenuPage = function () {
        cc.director.loadScene("Loading");
    };
    Login = __decorate([
        ccclass
    ], Login);
    return Login;
}(cc.Component));
exports.default = Login;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXExvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLHFEQUFnRDtBQUdoRDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWtFQztRQWpFVyxxQkFBZSxHQUFvQixJQUFJLENBQUM7O0lBaUVwRCxDQUFDO0lBL0RHLHFCQUFLLEdBQUw7UUFDSyxvQ0FBb0M7UUFDckMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzNDLE9BQU87U0FDVjtRQUVELElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsY0FBYyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDbkMsY0FBYyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFFbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUFBLGlCQXlDQztRQXhDRyxXQUFXO1FBQ1gsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVsRixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCxjQUFjO1FBQ2QsSUFBTSxVQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDckUsSUFBSSxDQUFDLFVBQUMsY0FBYztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNoQixLQUFLLHlCQUF5QjtvQkFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2dCQUNWLEtBQUsscUJBQXFCO29CQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hCLE1BQU07Z0JBQ1YsS0FBSyxxQkFBcUI7b0JBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDZCxNQUFNO2dCQUNWO29CQUNJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQWpFZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWtFekI7SUFBRCxZQUFDO0NBbEVELEFBa0VDLENBbEVrQyxFQUFFLENBQUMsU0FBUyxHQWtFOUM7a0JBbEVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBGaXJlYmFzZU1hbmFnZXIgZnJvbSAnLi9GaXJlYmFzZU1hbmFnZXInO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZU1hbmFnZXI6IEZpcmViYXNlTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTsgXHJcbiAgICAgICAgLy8g5L2/55So5paw55qE5pa55byP542y5Y+WIEZpcmViYXNlTWFuYWdlciDlr6bkvotcclxuICAgICAgICB0aGlzLmZpcmViYXNlTWFuYWdlciA9IEZpcmViYXNlTWFuYWdlci5nZXRGaXJlYmFzZU1hbmFnZXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyZWJhc2VNYW5hZ2VyLmlzRmlyZWJhc2VJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb250aW51ZUJ1dHRvbi5jb21wb25lbnQgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgY29udGludWVCdXR0b24uaGFuZGxlciA9IFwib25Mb2dpblwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTG9naW4vU3VibWl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29udGludWVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9naW4oKSB7XHJcbiAgICAgICAgLy8g5qqi5p+l6Ly45YWl5piv5ZCm54K656m6XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL5aGr5a+r5omA5pyJ5qyE5L2NXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmqqLmn6UgZW1haWwg5qC85byPXHJcbiAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuiri+i8uOWFpeacieaViOeahOmbu+WtkOmDteS7tuWcsOWdgFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlmJfoqabnmbvlhaU6XCIsIGVtYWlsKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDkvb/nlKggRmlyZWJhc2VNYW5hZ2VyIOmAsuihjOeZu+WFpVxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VNYW5hZ2VyLmdldEF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvlhaXmiJDlip86XCIsIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVudVBhZ2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIueZu+WFpemMr+iqpDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXV0aC9pbnZhbGlkLWNyZWRlbnRpYWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIuW4s+iZn+aIluWvhueivOmMr+iqpFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXV0aC91c2VyLW5vdC1mb3VuZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi5om+5LiN5Yiw5q2k55So5oi2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdXRoL3dyb25nLXBhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLlr4bnorzpjK/oqqRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWVudVBhZ2UoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTtcclxuICAgIH1cclxufVxyXG4gXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/GoToPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '356c2MftY9EJYle3Icb0Eh8', 'GoToPage');
// Script/script/GoToPage.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoToPage = /** @class */ (function (_super) {
    __extends(GoToPage, _super);
    function GoToPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoToPage.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.goToPage, this);
    };
    GoToPage.prototype.goToPage = function () {
        cc.sys.localStorage.setItem("fromMenu", "true");
        cc.director.loadScene("selectScene");
    };
    GoToPage.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.goToPage, this);
    };
    GoToPage = __decorate([
        ccclass
    ], GoToPage);
    return GoToPage;
}(cc.Component));
exports.default = GoToPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEdvVG9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWFBLENBQUM7SUFaRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQVpnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBYTVCO0lBQUQsZUFBQztDQWJELEFBYUMsQ0FicUMsRUFBRSxDQUFDLFNBQVMsR0FhakQ7a0JBYm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29Ub1BhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuZ29Ub1BhZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QYWdlKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZyb21NZW51XCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzZWxlY3RTY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuZ29Ub1BhZ2UsIHRoaXMpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/MenuManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65d86/Kq/FIHZLi3KNNf8TX', 'MenuManager');
// Script/script/MenuManager.ts

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
var AudioManager_1 = require("./AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuManager = /** @class */ (function (_super) {
    __extends(MenuManager, _super);
    function MenuManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.bgmSlider = null;
        _this.sfxSlider = null;
        _this.bgmAudioId = -1;
        return _this;
    }
    MenuManager.prototype.start = function () {
        // 播放 BGM，使用全域音量
        this.bgmAudioId = cc.audioEngine.play(this.bgm, true, AudioManager_1.default.getInstance().bgmVolume);
        if (this.bgmSlider) {
            //this.bgmSlider.getComponent(cc.Slider).progress = AudioManager.getInstance().bgmVolume;
            this.bgmSlider.getComponent(cc.Slider).node.on('slide', this.onBgmSliderChanged, this);
        }
        if (this.sfxSlider) {
            //this.sfxSlider.getComponent(cc.Slider).progress = AudioManager.getInstance().sfxVolume;
            this.sfxSlider.getComponent(cc.Slider).node.on('slide', this.onSfxSliderChanged, this);
        }
    };
    MenuManager.prototype.onBgmSliderChanged = function (slider) {
        AudioManager_1.default.getInstance().bgmVolume = slider.progress;
        if (this.bgmAudioId !== -1) {
            cc.audioEngine.setVolume(this.bgmAudioId, slider.progress);
        }
    };
    MenuManager.prototype.onSfxSliderChanged = function (slider) {
        AudioManager_1.default.getInstance().sfxVolume = slider.progress;
        cc.audioEngine.setEffectsVolume(slider.progress);
    };
    MenuManager.prototype.onDestroy = function () {
        if (this.bgmAudioId !== -1) {
            cc.audioEngine.stop(this.bgmAudioId);
        }
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], MenuManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], MenuManager.prototype, "bgmSlider", void 0);
    __decorate([
        property(cc.Node)
    ], MenuManager.prototype, "sfxSlider", void 0);
    MenuManager = __decorate([
        ccclass
    ], MenuManager);
    return MenuManager;
}(cc.Component));
exports.default = MenuManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXE1lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTJDQztRQXpDRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFpQ3BDLENBQUM7SUEvQkcsMkJBQUssR0FBTDtRQUNJLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLHlGQUF5RjtZQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLHlGQUF5RjtZQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFGO0lBQ0wsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixNQUFpQjtRQUNoQyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsTUFBaUI7UUFDaEMsc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDUjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1E7SUFSVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkMvQjtJQUFELGtCQUFDO0NBM0NELEFBMkNDLENBM0N3QyxFQUFFLENBQUMsU0FBUyxHQTJDcEQ7a0JBM0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnbVNsaWRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZnhTbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmdtQXVkaW9JZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+IEJHTe+8jOS9v+eUqOWFqOWfn+mfs+mHj1xyXG4gICAgICAgIHRoaXMuYmdtQXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ20sIHRydWUsIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmJnbVZvbHVtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJnbVNsaWRlcikge1xyXG4gICAgICAgICAgICAvL3RoaXMuYmdtU2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzID0gQXVkaW9NYW5hZ2VyLmdldEluc3RhbmNlKCkuYmdtVm9sdW1lO1xyXG4gICAgICAgICAgICB0aGlzLmJnbVNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25CZ21TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2Z4U2xpZGVyKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zZnhTbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3MgPSBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZnhWb2x1bWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4U2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblNmeFNsaWRlckNoYW5nZWQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJnbVNsaWRlckNoYW5nZWQoc2xpZGVyOiBjYy5TbGlkZXIpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5iZ21Wb2x1bWUgPSBzbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuYmdtQXVkaW9JZCwgc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZnhTbGlkZXJDaGFuZ2VkKHNsaWRlcjogY2MuU2xpZGVyKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmdldEluc3RhbmNlKCkuc2Z4Vm9sdW1lID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/PlayerAnimationController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a348ewY38tOnYXPnHBjwP46', 'PlayerAnimationController');
// Script/script/PlayerAnimationController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerAnimationController = /** @class */ (function (_super) {
    __extends(PlayerAnimationController, _super);
    function PlayerAnimationController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleGroupNode = null; // 拖入 ToggleGroup 節點
        _this.player1 = null; // 拖入 player1 節點
        _this.player2 = null; // 拖入 player2 節點
        _this.buttonGirl = null; // 按鈕1（idle）
        _this.buttonGirl2 = null; // 按鈕2（run）
        _this.choosePlayerNode = null; // 拖入選擇玩家節點
        return _this;
    }
    PlayerAnimationController.prototype.start = function () {
        var _this = this;
        // 綁定按鈕事件
        this.buttonGirl.node.on('click', function () { return _this.changeAnimation('girl_idle'); }, this);
        this.buttonGirl2.node.on('click', function () { return _this.changeAnimation('girl2_idle'); }, this);
    };
    PlayerAnimationController.prototype.getSelectedPlayer = function () {
        if (this.choosePlayerNode.active === false) {
            return this.player1;
        }
        // 取得 ToggleGroup 下所有 Toggle
        var toggles = this.toggleGroupNode.getComponentsInChildren(cc.Toggle);
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        // 根據選擇回傳 player1 或 player2
        if (selectedIdx === 0) {
            return this.player1;
        }
        else {
            return this.player2;
        }
    };
    PlayerAnimationController.prototype.changeAnimation = function (animName) {
        var player = this.getSelectedPlayer();
        if (!player)
            return;
        var anim = player.getComponent(cc.Animation);
        if (anim) {
            anim.play(animName);
        }
    };
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "toggleGroupNode", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "player1", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "player2", void 0);
    __decorate([
        property(cc.Button)
    ], PlayerAnimationController.prototype, "buttonGirl", void 0);
    __decorate([
        property(cc.Button)
    ], PlayerAnimationController.prototype, "buttonGirl2", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "choosePlayerNode", void 0);
    PlayerAnimationController = __decorate([
        ccclass
    ], PlayerAnimationController);
    return PlayerAnimationController;
}(cc.Component));
exports.default = PlayerAnimationController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFBsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUQsNkNBQVk7SUFBbkU7UUFBQSxxRUFnREM7UUE5Q0cscUJBQWUsR0FBWSxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7UUFHckQsYUFBTyxHQUFZLElBQUksQ0FBQyxDQUFDLGdCQUFnQjtRQUd6QyxhQUFPLEdBQVksSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBR3pDLGdCQUFVLEdBQWMsSUFBSSxDQUFDLENBQUMsWUFBWTtRQUcxQyxpQkFBVyxHQUFjLElBQUksQ0FBQyxDQUFDLFdBQVc7UUFHMUMsc0JBQWdCLEdBQVksSUFBSSxDQUFDLENBQUMsV0FBVzs7SUErQmpELENBQUM7SUE3QkcseUNBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEcsU0FBUztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQWpDLENBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBbEMsQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQscURBQWlCLEdBQWpCO1FBQ0ksSUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFDRCw0QkFBNEI7UUFDNUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEUsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDeEQsMkJBQTJCO1FBQzNCLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxtREFBZSxHQUFmLFVBQWdCLFFBQWdCO1FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNwQixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0VBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrRUFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VFQUNlO0lBakJoQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQWdEN0M7SUFBRCxnQ0FBQztDQWhERCxBQWdEQyxDQWhEc0QsRUFBRSxDQUFDLFNBQVMsR0FnRGxFO2tCQWhEb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b2dnbGVHcm91cE5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyDmi5blhaUgVG9nZ2xlR3JvdXAg56+A6bueXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXIxOiBjYy5Ob2RlID0gbnVsbDsgLy8g5ouW5YWlIHBsYXllcjEg56+A6bueXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXIyOiBjYy5Ob2RlID0gbnVsbDsgLy8g5ouW5YWlIHBsYXllcjIg56+A6bueXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ1dHRvbkdpcmw6IGNjLkJ1dHRvbiA9IG51bGw7IC8vIOaMiemIlTHvvIhpZGxl77yJXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ1dHRvbkdpcmwyOiBjYy5CdXR0b24gPSBudWxsOyAvLyDmjInpiJUy77yIcnVu77yJXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaG9vc2VQbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDsgLy8g5ouW5YWl6YG45pOH546p5a6256+A6bueXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g57aB5a6a5oyJ6YiV5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5idXR0b25HaXJsLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5jaGFuZ2VBbmltYXRpb24oJ2dpcmxfaWRsZScpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkdpcmwyLm5vZGUub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5jaGFuZ2VBbmltYXRpb24oJ2dpcmwyX2lkbGUnKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRQbGF5ZXIoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYodGhpcy5jaG9vc2VQbGF5ZXJOb2RlLmFjdGl2ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y+W5b6XIFRvZ2dsZUdyb3VwIOS4i+aJgOaciSBUb2dnbGVcclxuICAgICAgICBjb25zdCB0b2dnbGVzID0gdGhpcy50b2dnbGVHcm91cE5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuVG9nZ2xlKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZElkeCA9IHRvZ2dsZXMuZmluZEluZGV4KHQgPT4gdC5pc0NoZWNrZWQpO1xyXG4gICAgICAgIC8vIOagueaTmumBuOaTh+WbnuWCsyBwbGF5ZXIxIOaIliBwbGF5ZXIyXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSWR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcjE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQW5pbWF0aW9uKGFuaW1OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdldFNlbGVjdGVkUGxheWVyKCk7XHJcbiAgICAgICAgaWYgKCFwbGF5ZXIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBhbmltID0gcGxheWVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmIChhbmltKSB7XHJcbiAgICAgICAgICAgIGFuaW0ucGxheShhbmltTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/PlayerModeWatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e36eDJejpBEKpG1o5PIgVg', 'PlayerModeWatcher');
// Script/script/PlayerModeWatcher.ts

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
var PlayerModeSelector_1 = require("./PlayerModeSelector");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerModeWatcher = /** @class */ (function (_super) {
    __extends(PlayerModeWatcher, _super);
    function PlayerModeWatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerModeWatcher.prototype.update = function () {
        // player_mode 為 1 時 unenable（隱藏），為 0 時 enable（顯示）
        this.node.active = PlayerModeSelector_1.default.player_mode === 0;
    };
    PlayerModeWatcher = __decorate([
        ccclass
    ], PlayerModeWatcher);
    return PlayerModeWatcher;
}(cc.Component));
exports.default = PlayerModeWatcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFBsYXllck1vZGVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUNoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDs7SUFLQSxDQUFDO0lBSkcsa0NBQU0sR0FBTjtRQUNJLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBa0IsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFKZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FLckM7SUFBRCx3QkFBQztDQUxELEFBS0MsQ0FMOEMsRUFBRSxDQUFDLFNBQVMsR0FLMUQ7a0JBTG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJNb2RlU2VsZWN0b3IgZnJvbSBcIi4vUGxheWVyTW9kZVNlbGVjdG9yXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb2RlV2F0Y2hlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gcGxheWVyX21vZGUg54K6IDEg5pmCIHVuZW5hYmxl77yI6Zqx6JeP77yJ77yM54K6IDAg5pmCIGVuYWJsZe+8iOmhr+ekuu+8iVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBQbGF5ZXJNb2RlU2VsZWN0b3IucGxheWVyX21vZGUgPT09IDA7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/ShowImageOnPlane.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5fb8gzmbZFAIkc+ZmPjljF', 'ShowImageOnPlane');
// Script/script/ShowImageOnPlane.ts

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
// ShowImageOnPlane.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShowImageOnPlane = /** @class */ (function (_super) {
    __extends(ShowImageOnPlane, _super);
    function ShowImageOnPlane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texture = null;
        return _this;
    }
    ShowImageOnPlane.prototype.start = function () {
        var _this = this;
        // 若未指定，則動態加載
        if (!this.texture) {
            cc.loader.loadRes("background/brickWall", cc.Texture2D, function (err, tex) {
                if (err) {
                    cc.error("載入圖片失敗", err);
                    return;
                }
                _this.applyTexture(tex);
            });
        }
        else {
            this.applyTexture(this.texture);
        }
    };
    ShowImageOnPlane.prototype.applyTexture = function (tex) {
        var meshRenderer = this.node.getComponent(cc.MeshRenderer);
        if (!meshRenderer) {
            cc.error("本節點沒有 MeshRenderer 組件！");
            return;
        }
        // 取得材質
        var material = meshRenderer.getMaterial(0);
        if (!material) {
            cc.error("MeshRenderer 沒有材質！");
            return;
        }
        // 設定貼圖，Unlit 材質屬性名稱是 texture
        material.setProperty("texture", tex);
        meshRenderer.setMaterial(0, material);
    };
    __decorate([
        property({ type: cc.Texture2D })
    ], ShowImageOnPlane.prototype, "texture", void 0);
    ShowImageOnPlane = __decorate([
        ccclass
    ], ShowImageOnPlane);
    return ShowImageOnPlane;
}(cc.Component));
exports.default = ShowImageOnPlane;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFNob3dJbWFnZU9uUGxhbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ2hCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBbUNDO1FBakNHLGFBQU8sR0FBaUIsSUFBSSxDQUFDOztJQWlDakMsQ0FBQztJQS9CRyxnQ0FBSyxHQUFMO1FBQUEsaUJBYUM7UUFaRyxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQWlCO2dCQUMzRSxJQUFJLEdBQUcsRUFBRTtvQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDeEIsT0FBTztpQkFDVjtnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxHQUFpQjtRQUMxQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1Y7UUFDRCxPQUFPO1FBQ1AsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQy9CLE9BQU87U0FDVjtRQUNELDZCQUE2QjtRQUM3QixRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztxREFDSjtJQUZaLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbUNwQztJQUFELHVCQUFDO0NBbkNELEFBbUNDLENBbkM2QyxFQUFFLENBQUMsU0FBUyxHQW1DekQ7a0JBbkNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaG93SW1hZ2VPblBsYW5lLnRzXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93SW1hZ2VPblBsYW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlRleHR1cmUyRCB9KVxyXG4gICAgdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDoi6XmnKrmjIflrprvvIzliYfli5XmhYvliqDovIlcclxuICAgICAgICBpZiAoIXRoaXMudGV4dHVyZSkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJhY2tncm91bmQvYnJpY2tXYWxsXCIsIGNjLlRleHR1cmUyRCwgKGVyciwgdGV4OiBjYy5UZXh0dXJlMkQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIui8ieWFpeWclueJh+WkseaVl1wiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUZXh0dXJlKHRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VGV4dHVyZSh0ZXg6IGNjLlRleHR1cmUyRCkge1xyXG4gICAgICAgIGNvbnN0IG1lc2hSZW5kZXJlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKTtcclxuICAgICAgICBpZiAoIW1lc2hSZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuacrOevgOm7nuaykuaciSBNZXNoUmVuZGVyZXIg57WE5Lu277yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWPluW+l+adkOizqlxyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbWVzaFJlbmRlcmVyLmdldE1hdGVyaWFsKDApO1xyXG4gICAgICAgIGlmICghbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJNZXNoUmVuZGVyZXIg5rKS5pyJ5p2Q6LOq77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOioreWumuiyvOWclu+8jFVubGl0IOadkOizquWxrOaAp+WQjeeoseaYryB0ZXh0dXJlXHJcbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJ0ZXh0dXJlXCIsIHRleCk7XHJcbiAgICAgICAgbWVzaFJlbmRlcmVyLnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/PlayerModeSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aefe3x7WwFOkYl5ZGP0jnzm', 'PlayerModeSelector');
// Script/script/PlayerModeSelector.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerModeSelector = /** @class */ (function (_super) {
    __extends(PlayerModeSelector, _super);
    function PlayerModeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.char_select = null;
        return _this;
    }
    PlayerModeSelector_1 = PlayerModeSelector;
    PlayerModeSelector.prototype.onLoad = function () {
        PlayerModeSelector_1.player_mode = 0;
        this.player.active = false; // 隱藏 player 節點
        this.char_select.active = false;
    };
    // 這個函式直接設為 ToggleGroup 的 checkEvents
    PlayerModeSelector.prototype.onToggleGroupChanged = function (toggle) {
        //console.log("ToggleGroup changed:", toggle);
        // 取得 ToggleGroup 下所有 Toggle
        var toggles = this.node.getComponentsInChildren(cc.Toggle);
        // 找到目前被選中的 Toggle
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        // 你要的是：toggle 0 或 2 被選中時，player_mode = 1
        if (selectedIdx === 0) {
            PlayerModeSelector_1.player_mode = 0;
            console.log("選擇了單人模式");
            this.player.active = false; // 隱藏 player 節點
            this.char_select.active = false; // 顯示 char_select 節點
        }
        else {
            PlayerModeSelector_1.player_mode = 1;
            this.player.active = true; // 顯示 player 節點
            this.char_select.active = true; // 隱藏 char_select 節點
            console.log("PlayerModeSelector.player_mode = 0");
        }
        cc.log("player_mode:", PlayerModeSelector_1.player_mode);
    };
    var PlayerModeSelector_1;
    // 全域變數
    PlayerModeSelector.player_mode = 0;
    __decorate([
        property(cc.Node)
    ], PlayerModeSelector.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerModeSelector.prototype, "char_select", void 0);
    PlayerModeSelector = PlayerModeSelector_1 = __decorate([
        ccclass
    ], PlayerModeSelector);
    return PlayerModeSelector;
}(cc.Component));
exports.default = PlayerModeSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFBsYXllck1vZGVTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXNDQztRQWpDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQThCaEMsQ0FBQzsyQkF0Q29CLGtCQUFrQjtJQVV6QixtQ0FBTSxHQUFoQjtRQUNJLG9CQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxpREFBb0IsR0FBcEIsVUFBcUIsTUFBaUI7UUFDbEMsOENBQThDO1FBQzlDLDRCQUE0QjtRQUM1QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxrQkFBa0I7UUFDbEIsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFFeEQseUNBQXlDO1FBQ3pDLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNuQixvQkFBa0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxvQkFBb0I7U0FDeEQ7YUFBTTtZQUNILG9CQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZTtZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsb0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFwQ0QsT0FBTztJQUNPLDhCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBR3RDO1FBREUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0k7SUFHdkI7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDUztJQVJYLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0N0QztJQUFELHlCQUFDO0NBdENELEFBc0NDLENBdEMrQyxFQUFFLENBQUMsU0FBUyxHQXNDM0Q7a0JBdENvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTW9kZVNlbGVjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIOWFqOWfn+iuiuaVuFxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5ZXJfbW9kZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJfc2VsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWN0aXZlID0gZmFsc2U7IC8vIOmaseiXjyBwbGF5ZXIg56+A6bueXHJcbiAgICAgICAgdGhpcy5jaGFyX3NlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpgJnlgIvlh73lvI/nm7TmjqXoqK3ngrogVG9nZ2xlR3JvdXAg55qEIGNoZWNrRXZlbnRzXHJcbiAgICBvblRvZ2dsZUdyb3VwQ2hhbmdlZCh0b2dnbGU6IGNjLlRvZ2dsZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUb2dnbGVHcm91cCBjaGFuZ2VkOlwiLCB0b2dnbGUpO1xyXG4gICAgICAgIC8vIOWPluW+lyBUb2dnbGVHcm91cCDkuIvmiYDmnIkgVG9nZ2xlXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Ub2dnbGUpO1xyXG4gICAgICAgIC8vIOaJvuWIsOebruWJjeiiq+mBuOS4reeahCBUb2dnbGVcclxuICAgICAgICBjb25zdCBzZWxlY3RlZElkeCA9IHRvZ2dsZXMuZmluZEluZGV4KHQgPT4gdC5pc0NoZWNrZWQpO1xyXG5cclxuICAgICAgICAvLyDkvaDopoHnmoTmmK/vvJp0b2dnbGUgMCDmiJYgMiDooqvpgbjkuK3mmYLvvIxwbGF5ZXJfbW9kZSA9IDFcclxuICAgICAgICBpZiAoc2VsZWN0ZWRJZHggPT09IDApIHtcclxuICAgICAgICAgICAgUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpgbjmk4fkuobllq7kurrmqKHlvI9cIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFjdGl2ZSA9IGZhbHNlOyAvLyDpmrHol48gcGxheWVyIOevgOm7nlxyXG4gICAgICAgICAgICB0aGlzLmNoYXJfc2VsZWN0LmFjdGl2ZSA9IGZhbHNlOyAvLyDpoa/npLogY2hhcl9zZWxlY3Qg56+A6bueXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWN0aXZlID0gdHJ1ZTsgLy8g6aGv56S6IHBsYXllciDnr4Dpu55cclxuICAgICAgICAgICAgdGhpcy5jaGFyX3NlbGVjdC5hY3RpdmUgPSB0cnVlOyAvLyDpmrHol48gY2hhcl9zZWxlY3Qg56+A6bueXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwicGxheWVyX21vZGU6XCIsIFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSk7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/flagTrigger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '916fftxgi1HoLctc3cyvdGA', 'flagTrigger');
// Script/script/select/flagTrigger.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PositionManager_1 = require("./PositionManager");
var FlagTrigger = /** @class */ (function (_super) {
    __extends(FlagTrigger, _super);
    function FlagTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vehicle = null;
        _this.hintPrefab = null;
        // use Vec3 is better than Vec2 for 3D compatibility
        _this.hintOffset = cc.v3(0.8, 0.1, 0);
        _this.triggerDistance = 0.7;
        _this.nowIn = 0; // indicate the current stage number we step on
        _this.hintInstance = null;
        _this.hintScript = null;
        _this.inRange = false;
        _this.isLoadingScene = false;
        return _this;
    }
    FlagTrigger.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        if (this.hintPrefab) {
            this.hintInstance = cc.instantiate(this.hintPrefab);
            this.node.addChild(this.hintInstance);
            this.hintInstance.setPosition(this.hintOffset);
            this.hintInstance.active = false;
            this.hintInstance.scale = 0;
            this.hintScript = this.hintInstance.getComponent("hintAnimation");
            this.hintScript.setKeyScale(this.nowIn);
        }
    };
    FlagTrigger.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    FlagTrigger.prototype.update = function (dt) {
        if (!this.vehicle || !this.hintInstance || !this.hintScript)
            return;
        var posA = this.node.getPosition();
        var posB = this.vehicle.getPosition();
        var dist = posA.subtract(posB).mag();
        if (dist < this.triggerDistance) {
            if (!this.inRange) {
                this.hintInstance.active = true;
                this.hintScript.playShow();
                this.inRange = true;
            }
        }
        else {
            if (this.inRange) {
                this.hintScript.playHide();
                this.inRange = false;
            }
        }
    };
    FlagTrigger.prototype.onKeyDown = function (event) {
        var _this = this;
        if (this.inRange && event.keyCode === cc.macro.KEY.e) {
            cc.log("key E pressed");
            var worldPos = this.vehicle.convertToWorldSpaceAR(cc.Vec3.ZERO);
            var localPos = this.node.parent.convertToNodeSpaceAR(worldPos);
            PositionManager_1.default.savePosition(localPos.clone());
            if (!this.isLoadingScene) {
                this.isLoadingScene = true;
                var maskNode = cc.find("MainCamera/mask3D");
                var maskScript = maskNode === null || maskNode === void 0 ? void 0 : maskNode.getComponent("maskTransition3D");
                if (!maskScript) {
                    console.warn("⚠️ maskTransition script not found on mask3D node!");
                    return;
                }
                else {
                    maskScript.playTransition(function () {
                        switch (_this.nowIn) {
                            case 1:
                                // need to add "select/" since it's what build settings use
                                cc.director.loadScene("ice-cream-check");
                                break;
                            case 2:
                                cc.director.loadScene("pizza-check");
                                break;
                            case 3:
                                cc.director.loadScene("Menu");
                                break;
                            default:
                                cc.director.loadScene("selectScene");
                                break;
                        }
                    });
                }
            }
        }
    };
    FlagTrigger.prototype.getNowIn = function () {
        return this.nowIn;
    };
    __decorate([
        property(cc.Node)
    ], FlagTrigger.prototype, "vehicle", void 0);
    __decorate([
        property(cc.Prefab)
    ], FlagTrigger.prototype, "hintPrefab", void 0);
    __decorate([
        property(cc.Vec3)
    ], FlagTrigger.prototype, "hintOffset", void 0);
    __decorate([
        property
    ], FlagTrigger.prototype, "triggerDistance", void 0);
    __decorate([
        property
    ], FlagTrigger.prototype, "nowIn", void 0);
    FlagTrigger = __decorate([
        ccclass
    ], FlagTrigger);
    return FlagTrigger;
}(cc.Component));
exports.default = FlagTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcZmxhZ1RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscURBQWdEO0FBR2hEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNEdDO1FBMUdHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isb0RBQW9EO1FBRXBELGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBR3pDLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBRSwrQ0FBK0M7UUFFM0Qsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZ0JBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUF3RjVDLENBQUM7SUF0RkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJ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LEVBQUU7NEJBQ2hCLEtBQUssQ0FBQztnQ0FDRiwyREFBMkQ7Z0NBQzNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0NBQ3pDLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUNyQyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDOUIsTUFBTTs0QkFDVjtnQ0FDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDckMsTUFBTTt5QkFDYjtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBekdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUztJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUN1QjtJQUd6QztRQURDLFFBQVE7d0RBQ3FCO0lBRzlCO1FBREMsUUFBUTs4Q0FDUztJQWZELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Ry9CO0lBQUQsa0JBQUM7Q0E1R0QsQUE0R0MsQ0E1R3dDLEVBQUUsQ0FBQyxTQUFTLEdBNEdwRDtrQkE1R29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUG9zaXRpb25NYW5hZ2VyIGZyb20gXCIuL1Bvc2l0aW9uTWFuYWdlclwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhZ1RyaWdnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2ZWhpY2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgaGludFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyB1c2UgVmVjMyBpcyBiZXR0ZXIgdGhhbiBWZWMyIGZvciAzRCBjb21wYXRpYmlsaXR5XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMylcclxuICAgIGhpbnRPZmZzZXQ6IGNjLlZlYzMgPSBjYy52MygwLjgsIDAuMSwgMCk7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0cmlnZ2VyRGlzdGFuY2U6IG51bWJlciA9IDAuNztcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG5vd0luOiBudW1iZXIgPSAwOyAgLy8gaW5kaWNhdGUgdGhlIGN1cnJlbnQgc3RhZ2UgbnVtYmVyIHdlIHN0ZXAgb25cclxuXHJcbiAgICBwcml2YXRlIGhpbnRJbnN0YW5jZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGhpbnRTY3JpcHQ6IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGluUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nU2NlbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhpbnRQcmVmYWIpIHtcclxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhpbnRQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5oaW50SW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2Uuc2V0UG9zaXRpb24odGhpcy5oaW50T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGludEluc3RhbmNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhpbnRJbnN0YW5jZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhpbnRTY3JpcHQgPSB0aGlzLmhpbnRJbnN0YW5jZS5nZXRDb21wb25lbnQoXCJoaW50QW5pbWF0aW9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpbnRTY3JpcHQuc2V0S2V5U2NhbGUodGhpcy5ub3dJbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudmVoaWNsZSB8fCAhdGhpcy5oaW50SW5zdGFuY2UgfHwgIXRoaXMuaGludFNjcmlwdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NBID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgcG9zQiA9IHRoaXMudmVoaWNsZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBwb3NBLnN1YnRyYWN0KHBvc0IpLm1hZygpO1xyXG5cclxuICAgICAgICBpZiAoZGlzdCA8IHRoaXMudHJpZ2dlckRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpbnRJbnN0YW5jZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0LnBsYXlTaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5SYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0LnBsYXlIaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluUmFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBpZiAodGhpcy5pblJhbmdlICYmIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImtleSBFIHByZXNzZWRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IHRoaXMudmVoaWNsZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgUG9zaXRpb25NYW5hZ2VyLnNhdmVQb3NpdGlvbihsb2NhbFBvcy5jbG9uZSgpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmdTY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFza05vZGUgPSBjYy5maW5kKFwiTWFpbkNhbWVyYS9tYXNrM0RcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXNrU2NyaXB0ID0gbWFza05vZGU/LmdldENvbXBvbmVudChcIm1hc2tUcmFuc2l0aW9uM0RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXNrU2NyaXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIG1hc2tUcmFuc2l0aW9uIHNjcmlwdCBub3QgZm91bmQgb24gbWFzazNEIG5vZGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tTY3JpcHQucGxheVRyYW5zaXRpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMubm93SW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGFkZCBcInNlbGVjdC9cIiBzaW5jZSBpdCdzIHdoYXQgYnVpbGQgc2V0dGluZ3MgdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaWNlLWNyZWFtLWNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBpenphLWNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm93SW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm93SW47XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/PositionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb83cLzGUdGM5GpNKBYAtWQ', 'PositionManager');
// Script/script/select/PositionManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PositionManager.ts
var PositionManager = /** @class */ (function () {
    function PositionManager() {
    }
    PositionManager.savePosition = function (pos) {
        this.savedPos = pos.clone();
    };
    PositionManager.getSavedPosition = function () {
        return this.savedPos;
    };
    PositionManager.clear = function () {
        this.savedPos = null;
    };
    PositionManager.savedPos = null;
    return PositionManager;
}());
exports.default = PositionManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcUG9zaXRpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ3JCO0lBQUE7SUFjQSxDQUFDO0lBWFUsNEJBQVksR0FBbkIsVUFBb0IsR0FBWTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZ0NBQWdCLEdBQXZCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQVpjLHdCQUFRLEdBQVksSUFBSSxDQUFDO0lBYTVDLHNCQUFDO0NBZEQsQUFjQyxJQUFBO2tCQWRvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9zaXRpb25NYW5hZ2VyLnRzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzYXZlZFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIHNhdmVQb3NpdGlvbihwb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLnNhdmVkUG9zID0gcG9zLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNhdmVkUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZWRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZWRQb3MgPSBudWxsO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/debug.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b6fW5GdBHsbub2zcs1Nl7', 'debug');
// Script/debug.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DebugController = /** @class */ (function (_super) {
    __extends(DebugController, _super);
    function DebugController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugController.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // 顯示碰撞形狀（綠框/藍框）+ 邊界 AABB
        /*cc.director.getPhysicsManager().debugDrawFlags =
        cc.PhysicsManager.DrawBits.e_shapeBit |
        cc.PhysicsManager.DrawBits.e_aabbBit;*/
    };
    DebugController = __decorate([
        ccclass
    ], DebugController);
    return DebugController;
}(cc.Component));
exports.default = DebugController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDs7SUFTQSxDQUFDO0lBUkcsZ0NBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRS9DLHlCQUF5QjtRQUN6Qjs7K0NBRXVDO0lBQzNDLENBQUM7SUFSZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQVNuQztJQUFELHNCQUFDO0NBVEQsQUFTQyxDQVQ0QyxFQUFFLENBQUMsU0FBUyxHQVN4RDtrQkFUb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1Z0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOmhr+ekuueisOaSnuW9oueLgO+8iOe2oOahhi/ol43moYbvvIkrIOmCiueVjCBBQUJCXHJcbiAgICAgICAgLypjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gXHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdCB8XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0OyovXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd66a0PmN2FL+6JFPHl/Q3Ek', 'AudioManager');
// Script/script/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgmVolume = 0.5;
        _this.sfxVolume = 0.5;
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.getInstance = function () {
        if (!AudioManager_1._instance) {
            // 在第一個場景 Canvas 掛 AudioManager，或動態建立
            var node = new cc.Node("AudioManager");
            AudioManager_1._instance = node.addComponent(AudioManager_1);
            cc.game.addPersistRootNode(node);
        }
        return AudioManager_1._instance;
    };
    var AudioManager_1;
    AudioManager._instance = null;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWVDO1FBRlUsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixlQUFTLEdBQVcsR0FBRyxDQUFDOztJQUNuQyxDQUFDO3FCQWZvQixZQUFZO0lBR2Ysd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsY0FBWSxDQUFDLFNBQVMsRUFBRTtZQUN6QixxQ0FBcUM7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZDLGNBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFZLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxjQUFZLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7O0lBVmMsc0JBQVMsR0FBaUIsSUFBSSxDQUFDO0lBRDdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FlaEM7SUFBRCxtQkFBQztDQWZELEFBZUMsQ0FmeUMsRUFBRSxDQUFDLFNBQVMsR0FlckQ7a0JBZm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1ZGlvTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFBdWRpb01hbmFnZXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIC8vIOWcqOesrOS4gOWAi+WgtOaZryBDYW52YXMg5o6bIEF1ZGlvTWFuYWdlcu+8jOaIluWLleaFi+W7uueri1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXVkaW9NYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuX2luc3RhbmNlID0gbm9kZS5hZGRDb21wb25lbnQoQXVkaW9NYW5hZ2VyKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBdWRpb01hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiZ21Wb2x1bWU6IG51bWJlciA9IDAuNTtcclxuICAgIHB1YmxpYyBzZnhWb2x1bWU6IG51bWJlciA9IDAuNTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/Signup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f89cT6uh1LY4cSDkbEcqj7', 'Signup');
// Script/script/Signup.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FirebaseManager_1 = require("./FirebaseManager");
var Signup = /** @class */ (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firebaseManager = null;
        return _this;
    }
    Signup.prototype.start = function () {
        console.log("Signup component started");
        // 使用新的方式獲取 FirebaseManager 實例
        this.firebaseManager = FirebaseManager_1.default.getFirebaseManager();
        if (!this.firebaseManager.isFirebaseInitialized()) {
            console.error("Firebase not initialized!");
            return;
        }
        var continueButton = new cc.Component.EventHandler();
        continueButton.target = this.node;
        continueButton.component = "Signup";
        continueButton.handler = "onSignUp";
        cc.find("Canvas/Signup/Submit").getComponent(cc.Button).clickEvents.push(continueButton);
    };
    Signup.prototype.onSignUp = function () {
        var _this = this;
        var email = cc.find("Canvas/Signup/Email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/Signup/Password").getComponent(cc.EditBox).string;
        var nickname = cc.find("Canvas/Signup/Nickname").getComponent(cc.EditBox).string;
        console.log(email, password, nickname);
        // 檢查輸入是否為空
        if (!email || !password || !nickname) {
            alert("請填寫所有欄位");
            return;
        }
        // 使用 FirebaseManager 進行註冊
        this.firebaseManager.getAuth().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            // 保存用戶數據到 Realtime Database
            var userId = userCredential.user.uid;
            return _this.firebaseManager.getDatabase().ref('users/' + userId).set({
                nickname: nickname,
                email: email
            });
        })
            .then(function () {
            console.log('註冊成功');
            alert("註冊成功");
            cc.director.loadScene("Loading");
        })
            .catch(function (error) {
            console.error("註冊錯誤:", error);
            alert(error.message);
            //alert(this.getErrorMessage(error.code));
        });
    };
    Signup.prototype.getErrorMessage = function (errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email':
                return '無效的電子郵件地址';
            case 'auth/email-already-in-use':
                return '此電子郵件已被使用';
            case 'auth/weak-password':
                return '密碼強度太弱';
            default:
                return '註冊失敗，請稍後再試';
        }
    };
    Signup = __decorate([
        ccclass
    ], Signup);
    return Signup;
}(cc.Component));
exports.default = Signup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFNpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxxREFBZ0Q7QUFHaEQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFxRUM7UUFwRVcscUJBQWUsR0FBb0IsSUFBSSxDQUFDOztJQW9FcEQsQ0FBQztJQWxFRyxzQkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLHlCQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckQsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFtQ0M7UUFqQ0csSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuRixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVc7UUFFWCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFDLGNBQWM7WUFDakIsNEJBQTRCO1lBQzVCLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDakUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQiwwQ0FBMEM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRU8sZ0NBQWUsR0FBdkIsVUFBd0IsU0FBaUI7UUFDckMsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLG9CQUFvQjtnQkFDckIsT0FBTyxXQUFXLENBQUM7WUFDdkIsS0FBSywyQkFBMkI7Z0JBQzVCLE9BQU8sV0FBVyxDQUFDO1lBQ3ZCLEtBQUssb0JBQW9CO2dCQUNyQixPQUFPLFFBQVEsQ0FBQztZQUNwQjtnQkFDSSxPQUFPLFlBQVksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFwRWdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FxRTFCO0lBQUQsYUFBQztDQXJFRCxBQXFFQyxDQXJFbUMsRUFBRSxDQUFDLFNBQVMsR0FxRS9DO2tCQXJFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgRmlyZWJhc2VNYW5hZ2VyIGZyb20gJy4vRmlyZWJhc2VNYW5hZ2VyJztcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWdudXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZU1hbmFnZXI6IEZpcmViYXNlTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgY29tcG9uZW50IHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgLy8g5L2/55So5paw55qE5pa55byP542y5Y+WIEZpcmViYXNlTWFuYWdlciDlr6bkvotcclxuICAgICAgICB0aGlzLmZpcmViYXNlTWFuYWdlciA9IEZpcmViYXNlTWFuYWdlci5nZXRGaXJlYmFzZU1hbmFnZXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyZWJhc2VNYW5hZ2VyLmlzRmlyZWJhc2VJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb250aW51ZUJ1dHRvbi5jb21wb25lbnQgPSBcIlNpZ251cFwiO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmhhbmRsZXIgPSBcIm9uU2lnblVwXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWdudXAvU3VibWl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29udGludWVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnblVwKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gY2MuZmluZChcIkNhbnZhcy9TaWdudXAvRW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNjLmZpbmQoXCJDYW52YXMvU2lnbnVwL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBjYy5maW5kKFwiQ2FudmFzL1NpZ251cC9OaWNrbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lKTtcclxuICAgICAgICAvLyDmqqLmn6XovLjlhaXmmK/lkKbngrrnqbpcclxuXHJcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIW5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL5aGr5a+r5omA5pyJ5qyE5L2NXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkvb/nlKggRmlyZWJhc2VNYW5hZ2VyIOmAsuihjOiou+WGilxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VNYW5hZ2VyLmdldEF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS/neWtmOeUqOaItuaVuOaTmuWIsCBSZWFsdGltZSBEYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gdXNlckNyZWRlbnRpYWwudXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZU1hbmFnZXIuZ2V0RGF0YWJhc2UoKS5yZWYoJ3VzZXJzLycgKyB1c2VySWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfoqLvlhormiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6Ki75YaK5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuiou+WGiumMr+iqpDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVycm9yLmNvZGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RXJyb3JNZXNzYWdlKGVycm9yQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKGVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICBjYXNlICdhdXRoL2ludmFsaWQtZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfnhKHmlYjnmoTpm7vlrZDpg7Xku7blnLDlnYAnO1xyXG4gICAgICAgICAgICBjYXNlICdhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn5q2k6Zu75a2Q6YO15Lu25bey6KKr5L2/55SoJztcclxuICAgICAgICAgICAgY2FzZSAnYXV0aC93ZWFrLXBhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn5a+G56K85by35bqm5aSq5byxJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn6Ki75YaK5aSx5pWX77yM6KuL56iN5b6M5YaN6KmmJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/icecreamCheck.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff471ddThpIbaIeMmFb8m4E', 'icecreamCheck');
// Script/script/select/icecreamCheck.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stage1CheckUI = /** @class */ (function (_super) {
    __extends(Stage1CheckUI, _super);
    function Stage1CheckUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.backButton = null;
        _this.black = null;
        _this.mask = null;
        return _this;
    }
    Stage1CheckUI.prototype.onLoad = function () {
        if (this.startButton) {
            this.startButton.node.on('click', this.onStartClick, this);
        }
        if (this.backButton) {
            this.backButton.node.on('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.start = function () {
        var _this = this;
        // black sprite active 0.5s and dissapear
        // don't fade out, just set active to false
        if (this.black) {
            this.black.node.active = true;
            this.scheduleOnce(function () {
                _this.black.node.active = false;
            }, 0.5);
        }
        // wait 0.5s, mask sprite active
        // and, it will transmit from position(0, 0) to (159.748, -798.741), from scale (1, 1) to (100, 50) in 0.8s
        this.scheduleOnce(function () {
            if (_this.mask) {
                _this.mask.node.active = true;
                cc.tween(_this.mask.node)
                    .to(0.8, { position: cc.v3(91.285, -1255.166), scaleX: 80, scaleY: 80 })
                    .call(function () {
                    _this.mask.node.active = false; // after transition, set active to false
                })
                    .start();
            }
        }, 0.5);
    };
    Stage1CheckUI.prototype.onDestroy = function () {
        if (this.startButton && this.startButton.node) {
            this.startButton.node.off('click', this.onStartClick, this);
        }
        if (this.backButton && this.backButton.node) {
            this.backButton.node.off('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.onStartClick = function () {
        console.log("start-btn pressed！");
        cc.director.loadScene("level-1");
    };
    Stage1CheckUI.prototype.onBackClick = function () {
        console.log("back-btn pressed！");
        cc.director.loadScene("selectScene");
    };
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "startButton", void 0);
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "backButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "black", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "mask", void 0);
    Stage1CheckUI = __decorate([
        ccclass
    ], Stage1CheckUI);
    return Stage1CheckUI;
}(cc.Component));
exports.default = Stage1CheckUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcaWNlY3JlYW1DaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWtFQztRQWhFRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYyxJQUFJLENBQUM7O0lBdUQzQixDQUFDO0lBckRHLDhCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQUEsaUJBc0JDO1FBckJHLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxnQ0FBZ0M7UUFDaEMsMkdBQTJHO1FBQzNHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO3FCQUN2RSxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLHdDQUF3QztnQkFDM0UsQ0FBQyxDQUFDO3FCQUNELEtBQUssRUFBRSxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDRztJQVhOLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FrRWpDO0lBQUQsb0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRTBDLEVBQUUsQ0FBQyxTQUFTLEdBa0V0RDtrQkFsRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2UxQ2hlY2tVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2tCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJsYWNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtYXNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQmFja0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gYmxhY2sgc3ByaXRlIGFjdGl2ZSAwLjVzIGFuZCBkaXNzYXBlYXJcclxuICAgICAgICAvLyBkb24ndCBmYWRlIG91dCwganVzdCBzZXQgYWN0aXZlIHRvIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuYmxhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5ibGFjay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2subm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2FpdCAwLjVzLCBtYXNrIHNwcml0ZSBhY3RpdmVcclxuICAgICAgICAvLyBhbmQsIGl0IHdpbGwgdHJhbnNtaXQgZnJvbSBwb3NpdGlvbigwLCAwKSB0byAoMTU5Ljc0OCwgLTc5OC43NDEpLCBmcm9tIHNjYWxlICgxLCAxKSB0byAoMTAwLCA1MCkgaW4gMC44c1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFzay5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDkxLjI4NSwgLTEyNTUuMTY2KSwgc2NhbGVYOiA4MCwgc2NhbGVZOiA4MCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8vIGFmdGVyIHRyYW5zaXRpb24sIHNldCBhY3RpdmUgdG8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24gJiYgdGhpcy5zdGFydEJ1dHRvbi5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiAmJiB0aGlzLmJhY2tCdXR0b24ubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkJhY2tDbGljaywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnRDbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LWJ0biBwcmVzc2Vk77yBXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxldmVsLTFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWNrLWJ0biBwcmVzc2Vk77yBXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/hintAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89633Yi0CZMZ69HmV5b2zmQ', 'hintAnimation');
// Script/script/select/hintAnimation.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hintAnimation = /** @class */ (function (_super) {
    __extends(hintAnimation, _super);
    function hintAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = 0;
        _this.keyScale = 0.01; // default scale
        return _this;
    }
    hintAnimation.prototype.onLoad = function () {
        this.node.scale = 0;
        this.node.active = false;
    };
    // small -> big
    hintAnimation.prototype.playShow = function () {
        this.node.active = true;
        cc.Tween.stopAllByTarget(this.node);
        this.node.scale = 0;
        cc.tween(this.node)
            .to(0.2, { scale: this.keyScale }, { easing: 'backOut' })
            .start();
        console.log("E show up!!");
    };
    // big -> small
    hintAnimation.prototype.playHide = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .to(0.2, { scale: 0 }, { easing: 'backIn' })
            .call(function () {
            _this.node.active = false;
        })
            .start();
    };
    hintAnimation.prototype.setKeyScale = function (stage) {
        this.stage = stage;
        switch (this.stage) {
            case 1:
                this.keyScale = 0.01;
                break;
            case 2:
                this.keyScale = 0.0125;
                break;
            case 3:
                this.keyScale = 0.006;
                break;
            default:
                this.keyScale = 0.01;
                break;
        }
    };
    hintAnimation = __decorate([
        ccclass
    ], hintAnimation);
    return hintAnimation;
}(cc.Component));
exports.default = hintAnimation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcaGludEFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQW9EQztRQW5EVyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVEsR0FBVyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7O0lBa0RyRCxDQUFDO0lBaERHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO0lBQ2YsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZUFBZTtJQUNmLGdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzNDLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixNQUFNO1lBQ1Y7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFuRGdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FvRGpDO0lBQUQsb0JBQUM7Q0FwREQsQUFvREMsQ0FwRDBDLEVBQUUsQ0FBQyxTQUFTLEdBb0R0RDtrQkFwRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGludEFuaW1hdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN0YWdlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBrZXlTY2FsZTogbnVtYmVyID0gMC4wMTsgLy8gZGVmYXVsdCBzY2FsZVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzbWFsbCAtPiBiaWdcclxuICAgIHBsYXlTaG93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogdGhpcy5rZXlTY2FsZSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkUgc2hvdyB1cCEhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJpZyAtPiBzbWFsbFxyXG4gICAgcGxheUhpZGUoKSB7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2JhY2tJbicgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0S2V5U2NhbGUoc3RhZ2U6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBzdGFnZTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5U2NhbGUgPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5U2NhbGUgPSAwLjAxMjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTY2FsZSA9IDAuMDA2O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleVNjYWxlID0gMC4wMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/maskTransition3D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '963b2io3I9NfaOldJtdCuQy', 'maskTransition3D');
// Script/script/select/maskTransition3D.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskTransition = /** @class */ (function (_super) {
    __extends(MaskTransition, _super);
    function MaskTransition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startZ = 0;
        _this.endZ = -2.419;
        return _this;
    }
    MaskTransition.prototype.onLoad = function () {
        // since it's MainCamera's child node, use LocalPosition
        this.node.setPosition(0, 0, this.startZ);
    };
    MaskTransition.prototype.playTransition = function (onComplete) {
        cc.tween(this.node)
            .to(0.8, { position: cc.v3(0, 0, this.endZ) })
            .call(function () {
            if (onComplete)
                onComplete();
        })
            .start();
    };
    __decorate([
        property
    ], MaskTransition.prototype, "startZ", void 0);
    __decorate([
        property
    ], MaskTransition.prototype, "endZ", void 0);
    MaskTransition = __decorate([
        ccclass
    ], MaskTransition);
    return MaskTransition;
}(cc.Component));
exports.default = MaskTransition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcbWFza1RyYW5zaXRpb24zRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9CQztRQWxCRyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFVBQUksR0FBVyxDQUFDLEtBQUssQ0FBQzs7SUFlMUIsQ0FBQztJQWJHLCtCQUFNLEdBQU47UUFDSSx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxVQUFxQjtRQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM3QyxJQUFJLENBQUM7WUFDRixJQUFJLFVBQVU7Z0JBQUUsVUFBVSxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWpCRDtRQURDLFFBQVE7a0RBQ1U7SUFHbkI7UUFEQyxRQUFRO2dEQUNhO0lBTEwsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9CbEM7SUFBRCxxQkFBQztDQXBCRCxBQW9CQyxDQXBCMkMsRUFBRSxDQUFDLFNBQVMsR0FvQnZEO2tCQXBCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrVHJhbnNpdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHN0YXJ0WjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVuZFo6IG51bWJlciA9IC0yLjQxOTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gc2luY2UgaXQncyBNYWluQ2FtZXJhJ3MgY2hpbGQgbm9kZSwgdXNlIExvY2FsUG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgMCwgdGhpcy5zdGFydFopO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUcmFuc2l0aW9uKG9uQ29tcGxldGU/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgdGhpcy5lbmRaKSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/cameraCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f5aaaZVYxLzIWb7asCBIU3', 'cameraCtrl');
// Script/script/select/cameraCtrl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cameraCtrl = /** @class */ (function (_super) {
    __extends(cameraCtrl, _super);
    function cameraCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.offset = new cc.Vec3(0, 4, 5);
        _this.followSpeed = 5;
        return _this;
    }
    cameraCtrl.prototype.start = function () {
        if (!this.target) {
            console.warn("There's no target node in cameraCtrl!");
            return;
        }
        // turn the local position of the target node into world position
        // Vec3.ZERO = target's center
        var targetWorldPos = this.target.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // set the initial position of the camera
        // initialCameraWorldPos = targetWorldPos + offset
        var initialCameraWorldPos = new cc.Vec3();
        cc.Vec3.add(initialCameraWorldPos, targetWorldPos, this.offset);
        // convert the initial camera world position to local position
        this.node.position = this.node.parent ? this.node.parent.convertToNodeSpaceAR(initialCameraWorldPos) : initialCameraWorldPos;
        this.node.lookAt(targetWorldPos, cc.Vec3.UP);
    };
    cameraCtrl.prototype.update = function (dt) {
        if (!this.target)
            return;
        // get the world position of the target node every dt
        var targetWorldPos = this.target.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // calculate the desired world position of the camera
        var desiredWorldPosition = new cc.Vec3();
        cc.Vec3.add(desiredWorldPosition, targetWorldPos, this.offset);
        // get the current world position of the camera
        var currentCameraWorldPosition = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // smooth the camera's movement towards the desired position by using lerp()
        var smoothedWorldPosition = new cc.Vec3();
        cc.Vec3.lerp(smoothedWorldPosition, currentCameraWorldPosition, desiredWorldPosition, this.followSpeed * dt);
        // convert the smoothed world position to local position and set it to the camera node
        this.node.position = this.node.parent ? this.node.parent.convertToNodeSpaceAR(smoothedWorldPosition) : smoothedWorldPosition;
        this.node.lookAt(targetWorldPos, cc.Vec3.UP);
    };
    __decorate([
        property(cc.Node)
    ], cameraCtrl.prototype, "target", void 0);
    __decorate([
        property(cc.Vec3)
    ], cameraCtrl.prototype, "offset", void 0);
    __decorate([
        property(cc.Integer)
    ], cameraCtrl.prototype, "followSpeed", void 0);
    cameraCtrl = __decorate([
        ccclass
    ], cameraCtrl);
    return cameraCtrl;
}(cc.Component));
exports.default = cameraCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcY2FtZXJhQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXNEQztRQW5ERyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUd2QyxpQkFBVyxHQUFXLENBQUMsQ0FBQzs7SUE2QzVCLENBQUM7SUEzQ0csMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDVjtRQUVELGlFQUFpRTtRQUNqRSw4QkFBOEI7UUFDOUIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZFLHlDQUF5QztRQUN6QyxrREFBa0Q7UUFDbEQsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUM7UUFFN0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUV6QixxREFBcUQ7UUFDckQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZFLHFEQUFxRDtRQUNyRCxJQUFNLG9CQUFvQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0QsK0NBQStDO1FBQy9DLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpGLDRFQUE0RTtRQUM1RSxJQUFNLHFCQUFxQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFN0csc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUU3SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDcUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzttREFDRztJQVRQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzRDlCO0lBQUQsaUJBQUM7Q0F0REQsQUFzREMsQ0F0RHVDLEVBQUUsQ0FBQyxTQUFTLEdBc0RuRDtrQkF0RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FtZXJhQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMzKVxyXG4gICAgb2Zmc2V0OiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgNCwgNSk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBmb2xsb3dTcGVlZDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlJ3Mgbm8gdGFyZ2V0IG5vZGUgaW4gY2FtZXJhQ3RybCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHR1cm4gdGhlIGxvY2FsIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgbm9kZSBpbnRvIHdvcmxkIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gVmVjMy5aRVJPID0gdGFyZ2V0J3MgY2VudGVyXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcclxuICAgICAgICAvLyBpbml0aWFsQ2FtZXJhV29ybGRQb3MgPSB0YXJnZXRXb3JsZFBvcyArIG9mZnNldFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmFXb3JsZFBvcyA9IG5ldyBjYy5WZWMzKCk7XHJcbiAgICAgICAgY2MuVmVjMy5hZGQoaW5pdGlhbENhbWVyYVdvcmxkUG9zLCB0YXJnZXRXb3JsZFBvcywgdGhpcy5vZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBpbml0aWFsIGNhbWVyYSB3b3JsZCBwb3NpdGlvbiB0byBsb2NhbCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQgPyB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGluaXRpYWxDYW1lcmFXb3JsZFBvcykgOiBpbml0aWFsQ2FtZXJhV29ybGRQb3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmxvb2tBdCh0YXJnZXRXb3JsZFBvcywgY2MuVmVjMy5VUCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgd29ybGQgcG9zaXRpb24gb2YgdGhlIHRhcmdldCBub2RlIGV2ZXJ5IGR0XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkZXNpcmVkIHdvcmxkIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcclxuICAgICAgICBjb25zdCBkZXNpcmVkV29ybGRQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKCk7XHJcbiAgICAgICAgY2MuVmVjMy5hZGQoZGVzaXJlZFdvcmxkUG9zaXRpb24sIHRhcmdldFdvcmxkUG9zLCB0aGlzLm9mZnNldCk7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhXHJcbiAgICAgICAgY29uc3QgY3VycmVudENhbWVyYVdvcmxkUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XHJcblxyXG4gICAgICAgIC8vIHNtb290aCB0aGUgY2FtZXJhJ3MgbW92ZW1lbnQgdG93YXJkcyB0aGUgZGVzaXJlZCBwb3NpdGlvbiBieSB1c2luZyBsZXJwKClcclxuICAgICAgICBjb25zdCBzbW9vdGhlZFdvcmxkUG9zaXRpb24gPSBuZXcgY2MuVmVjMygpO1xyXG4gICAgICAgIGNjLlZlYzMubGVycChzbW9vdGhlZFdvcmxkUG9zaXRpb24sIGN1cnJlbnRDYW1lcmFXb3JsZFBvc2l0aW9uLCBkZXNpcmVkV29ybGRQb3NpdGlvbiwgdGhpcy5mb2xsb3dTcGVlZCAqIGR0KTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgc21vb3RoZWQgd29ybGQgcG9zaXRpb24gdG8gbG9jYWwgcG9zaXRpb24gYW5kIHNldCBpdCB0byB0aGUgY2FtZXJhIG5vZGVcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50ID8gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzbW9vdGhlZFdvcmxkUG9zaXRpb24pIDogc21vb3RoZWRXb3JsZFBvc2l0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUubG9va0F0KHRhcmdldFdvcmxkUG9zLCBjYy5WZWMzLlVQKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/pizzaCheck.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffe13TzWdlKgaJEHUeYvP+7', 'pizzaCheck');
// Script/script/select/pizzaCheck.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stage1CheckUI = /** @class */ (function (_super) {
    __extends(Stage1CheckUI, _super);
    function Stage1CheckUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.backButton = null;
        _this.black = null;
        _this.mask = null;
        return _this;
    }
    Stage1CheckUI.prototype.onLoad = function () {
        if (this.startButton) {
            this.startButton.node.on('click', this.onStartClick, this);
        }
        if (this.backButton) {
            this.backButton.node.on('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.start = function () {
        var _this = this;
        // black sprite active 0.5s and dissapear
        // don't fade out, just set active to false
        if (this.black) {
            this.black.node.active = true;
            this.scheduleOnce(function () {
                _this.black.node.active = false;
            }, 0.5);
        }
        // wait 0.5s, mask sprite active
        // and, it will transmit from position(0, 0) to (159.748, -798.741), from scale (1, 1) to (100, 50) in 0.8s
        this.scheduleOnce(function () {
            if (_this.mask) {
                _this.mask.node.active = true;
                cc.tween(_this.mask.node)
                    .to(0.8, { position: cc.v3(91.285, -1255.166), scaleX: 80, scaleY: 80 })
                    .call(function () {
                    _this.mask.node.active = false; // after transition, set active to false
                })
                    .start();
            }
        }, 0.5);
    };
    Stage1CheckUI.prototype.onDestroy = function () {
        if (this.startButton && this.startButton.node) {
            this.startButton.node.off('click', this.onStartClick, this);
        }
        if (this.backButton && this.backButton.node) {
            this.backButton.node.off('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.onStartClick = function () {
        console.log("start-btn pressed！");
        cc.director.loadScene("level-2");
    };
    Stage1CheckUI.prototype.onBackClick = function () {
        console.log("back-btn pressed！");
        cc.director.loadScene("selectScene");
    };
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "startButton", void 0);
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "backButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "black", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "mask", void 0);
    Stage1CheckUI = __decorate([
        ccclass
    ], Stage1CheckUI);
    return Stage1CheckUI;
}(cc.Component));
exports.default = Stage1CheckUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxccGl6emFDaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWtFQztRQWhFRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYyxJQUFJLENBQUM7O0lBdUQzQixDQUFDO0lBckRHLDhCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQUEsaUJBc0JDO1FBckJHLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxnQ0FBZ0M7UUFDaEMsMkdBQTJHO1FBQzNHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO3FCQUN2RSxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLHdDQUF3QztnQkFDM0UsQ0FBQyxDQUFDO3FCQUNELEtBQUssRUFBRSxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDRztJQVhOLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FrRWpDO0lBQUQsb0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRTBDLEVBQUUsQ0FBQyxTQUFTLEdBa0V0RDtrQkFsRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2UxQ2hlY2tVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2tCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJsYWNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtYXNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQmFja0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gYmxhY2sgc3ByaXRlIGFjdGl2ZSAwLjVzIGFuZCBkaXNzYXBlYXJcclxuICAgICAgICAvLyBkb24ndCBmYWRlIG91dCwganVzdCBzZXQgYWN0aXZlIHRvIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuYmxhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5ibGFjay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2subm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2FpdCAwLjVzLCBtYXNrIHNwcml0ZSBhY3RpdmVcclxuICAgICAgICAvLyBhbmQsIGl0IHdpbGwgdHJhbnNtaXQgZnJvbSBwb3NpdGlvbigwLCAwKSB0byAoMTU5Ljc0OCwgLTc5OC43NDEpLCBmcm9tIHNjYWxlICgxLCAxKSB0byAoMTAwLCA1MCkgaW4gMC44c1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFzay5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDkxLjI4NSwgLTEyNTUuMTY2KSwgc2NhbGVYOiA4MCwgc2NhbGVZOiA4MCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8vIGFmdGVyIHRyYW5zaXRpb24sIHNldCBhY3RpdmUgdG8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24gJiYgdGhpcy5zdGFydEJ1dHRvbi5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiAmJiB0aGlzLmJhY2tCdXR0b24ubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkJhY2tDbGljaywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnRDbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LWJ0biBwcmVzc2Vk77yBXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxldmVsLTJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWNrLWJ0biBwcmVzc2Vk77yBXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/vehicleCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b911baxZ3VAmZg5mjT3jvdC', 'vehicleCtrl');
// Script/script/select/vehicleCtrl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PositionManager_1 = require("./PositionManager");
var CharacterController = /** @class */ (function (_super) {
    __extends(CharacterController, _super);
    function CharacterController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 3;
        _this.rb = null;
        _this.velocity = cc.v3();
        return _this;
    }
    CharacterController.prototype.onLoad = function () {
        this.rb = this.getComponent(cc.RigidBody3D);
        var fromMenu = cc.sys.localStorage.getItem("fromMenu") === "true";
        // if the character has a saved position, set it
        var saved = fromMenu ? null : PositionManager_1.default.getSavedPosition();
        if (saved) {
            this.node.setPosition(saved);
            PositionManager_1.default.clear();
        }
        // REMEMBER TO REMOVE THE FLAG
        cc.sys.localStorage.removeItem("fromMenu");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    CharacterController.prototype.start = function () {
        console.log("character's forward: ", this.node.forward);
    };
    CharacterController.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    CharacterController.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.a)
            this.velocity.x = -this.speed;
        if (event.keyCode === cc.macro.KEY.d)
            this.velocity.x = this.speed;
        if (event.keyCode === cc.macro.KEY.w)
            this.velocity.z = -this.speed;
        if (event.keyCode === cc.macro.KEY.s)
            this.velocity.z = this.speed;
    };
    CharacterController.prototype.onKeyUp = function (event) {
        if (event.keyCode === cc.macro.KEY.a || event.keyCode === cc.macro.KEY.d)
            this.velocity.x = 0;
        if (event.keyCode === cc.macro.KEY.w || event.keyCode === cc.macro.KEY.s)
            this.velocity.z = 0;
    };
    CharacterController.prototype.update = function (dt) {
        if (this.rb) {
            this.rb.setLinearVelocity(this.velocity);
            if (!this.velocity.equals(cc.Vec3.ZERO)) {
                // dir = the direction that character should face
                var dir = this.velocity.clone().normalize();
                // targetQuat = the target rotation quaternion
                // it can make the character face the direction of movement
                var targetQuat = new cc.Quat();
                cc.Quat.fromViewUp(targetQuat, dir, cc.Vec3.UP);
                // make the rotation smooth
                var currentQuat = new cc.Quat();
                this.node.getRotation(currentQuat);
                var smoothedQuat = new cc.Quat();
                cc.Quat.slerp(smoothedQuat, currentQuat, targetQuat, dt * 10);
                // set the smoothed rotation to the node
                this.node.setRotation(smoothedQuat);
            }
        }
    };
    __decorate([
        property
    ], CharacterController.prototype, "speed", void 0);
    CharacterController = __decorate([
        ccclass
    ], CharacterController);
    return CharacterController;
}(cc.Component));
exports.default = CharacterController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcdmVoaWNsZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscURBQWdEO0FBR2hEO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBd0VDO1FBdEVHLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFVixRQUFFLEdBQW1CLElBQUksQ0FBQztRQThCMUIsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7SUFzQy9CLENBQUM7SUFsRUcsb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLE1BQU0sQ0FBQztRQUVwRSxnREFBZ0Q7UUFDaEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHlCQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuRSxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLHlCQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFFRCw4QkFBOEI7UUFDOUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMs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LFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRWhELDJCQUEyQjtnQkFDM0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFNLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUU5RCx3Q0FBd0M7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0o7SUFDTCxDQUFDO0lBckVEO1FBREMsUUFBUTtzREFDUztJQUZELG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBd0V2QztJQUFELDBCQUFDO0NBeEVELEFBd0VDLENBeEVnRCxFQUFFLENBQUMsU0FBUyxHQXdFNUQ7a0JBeEVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUG9zaXRpb25NYW5hZ2VyIGZyb20gXCIuL1Bvc2l0aW9uTWFuYWdlclwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAzO1xyXG5cclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keTNEID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keTNEKTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJvbU1lbnUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmcm9tTWVudVwiKSA9PT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBjaGFyYWN0ZXIgaGFzIGEgc2F2ZWQgcG9zaXRpb24sIHNldCBpdFxyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gZnJvbU1lbnUgPyBudWxsIDogUG9zaXRpb25NYW5hZ2VyLmdldFNhdmVkUG9zaXRpb24oKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHNhdmVkKTtcclxuICAgICAgICAgICAgUG9zaXRpb25NYW5hZ2VyLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSRU1FTUJFUiBUTyBSRU1PVkUgVEhFIEZMQUdcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmcm9tTWVudVwiKTtcclxuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlcidzIGZvcndhcmQ6IFwiLCB0aGlzLm5vZGUuZm9yd2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZlbG9jaXR5ID0gY2MudjMoKTtcclxuXHJcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYSkgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5kKSB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudykgdGhpcy52ZWxvY2l0eS56ID0gLXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zKSB0aGlzLnZlbG9jaXR5LnogPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYSB8fCBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZCkgdGhpcy52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLncgfHwgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnMpIHRoaXMudmVsb2NpdHkueiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5yYikge1xyXG4gICAgICAgICAgICB0aGlzLnJiLnNldExpbmVhclZlbG9jaXR5KHRoaXMudmVsb2NpdHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZlbG9jaXR5LmVxdWFscyhjYy5WZWMzLlpFUk8pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXIgPSB0aGUgZGlyZWN0aW9uIHRoYXQgY2hhcmFjdGVyIHNob3VsZCBmYWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnZlbG9jaXR5LmNsb25lKCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0UXVhdCA9IHRoZSB0YXJnZXQgcm90YXRpb24gcXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgLy8gaXQgY2FuIG1ha2UgdGhlIGNoYXJhY3RlciBmYWNlIHRoZSBkaXJlY3Rpb24gb2YgbW92ZW1lbnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFF1YXQgPSBuZXcgY2MuUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuUXVhdC5mcm9tVmlld1VwKHRhcmdldFF1YXQsIGRpciwgY2MuVmVjMy5VUCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSB0aGUgcm90YXRpb24gc21vb3RoXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UXVhdCA9IG5ldyBjYy5RdWF0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Um90YXRpb24oY3VycmVudFF1YXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc21vb3RoZWRRdWF0ID0gbmV3IGNjLlF1YXQoKTtcclxuICAgICAgICAgICAgICAgIGNjLlF1YXQuc2xlcnAoc21vb3RoZWRRdWF0LCBjdXJyZW50UXVhdCwgdGFyZ2V0UXVhdCwgZHQgKiAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBzbW9vdGhlZCByb3RhdGlvbiB0byB0aGUgbm9kZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHNtb290aGVkUXVhdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/BGMManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a41a5Oxl5lNS7zD38mi0DH1', 'BGMManager');
// Script/script/select/BGMManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
cc.Class({
    extends: cc.Component,
    properties: {
        bgm: {
            default: null,
            type: cc.AudioSource
        }
    },
    onLoad: function () {
        if (!cc.sys.isNative && window.__BGM_LOADED__) {
            // if existed, don't load again
            this.node.destroy();
            return;
        }
        cc.game.addPersistRootNode(this.node); // persist the BGM node across scenes
        window.__BGM_LOADED__ = true;
        if (!this.bgm.isPlaying) {
            this.bgm.play();
        }
    },
    onDestroy: function () {
        console.warn("⚠️ BGMManager 被摧毀了！！音樂會中斷喔！");
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcQkdNTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDTCxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVM7SUFFckIsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVc7U0FDdkI7S0FDSjtJQUVELE1BQU07UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUMzQywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLHFDQUFxQztRQUM3RSxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9OyAvLyBNYWtlIHRoaXMgZmlsZSBhbiBleHRlcm5hbCBtb2R1bGVcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIF9fQkdNX0xPQURFRF9fPzogYm9vbGVhbjtcclxuICAgIH1cclxufVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ206IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSAmJiB3aW5kb3cuX19CR01fTE9BREVEX18pIHtcclxuICAgICAgICAgICAgLy8gaWYgZXhpc3RlZCwgZG9uJ3QgbG9hZCBhZ2FpblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpOyAgLy8gcGVyc2lzdCB0aGUgQkdNIG5vZGUgYWNyb3NzIHNjZW5lc1xyXG4gICAgICAgIHdpbmRvdy5fX0JHTV9MT0FERURfXyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5iZ20uaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdtLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8gQkdNTWFuYWdlciDooqvmkafmr4DkuobvvIHvvIHpn7PmqILmnIPkuK3mlrfllpTvvIFcIik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/GoblinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0264LXsgZDUJ3VQpCmBurz', 'GoblinController');
// Script/NPC/GoblinController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoblinController = /** @class */ (function (_super) {
    __extends(GoblinController, _super);
    function GoblinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.girl1 = null;
        _this.girl2 = null;
        _this.speed = 15;
        _this.rb = null;
        _this.state = "idle";
        _this.followTimer = 0;
        _this.followThreshold = 7; // 秒數
        _this.deskContactTimer = 0;
        _this.inDeskContact = false;
        _this.currentAnim = "";
        _this.isDying = false; // 👉 加在 class 裡
        return _this;
    }
    GoblinController.prototype.onLoad = function () {
        this.rb = this.getComponent(cc.RigidBody);
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.state = "walk";
        this.playAnim("goblin_run");
    };
    GoblinController.prototype.setTargetPlayers = function (girl1, girl2) {
        this.girl1 = girl1;
        this.girl2 = girl2;
    };
    GoblinController.prototype.update = function (dt) {
        var _a, _b;
        if (this.state === "dead")
            return;
        var player1 = (_a = this.girl1) === null || _a === void 0 ? void 0 : _a.position;
        var player2 = (_b = this.girl2) === null || _b === void 0 ? void 0 : _b.position;
        var target = player1 && player2
            ? (this.node.position.sub(player1).mag() < this.node.position.sub(player2).mag() ? player1 : player2)
            : player1 || player2;
        if (target && this.state !== "idle") {
            var distance = this.node.position.sub(target).mag();
            if (distance < 150) {
                this.followTimer += dt;
            }
            else {
                this.followTimer = 0;
            }
            this.moveTowards(target, dt);
            this.playAnim("goblin_run");
            if (this.followTimer > this.followThreshold) {
                this.die();
            }
        }
        if (this.inDeskContact && !this.isDying) {
            this.deskContactTimer += dt;
            if (this.deskContactTimer > 1 && this.state !== "dead") {
                this.die();
            }
        }
        else {
            this.deskContactTimer = 0;
        }
    };
    GoblinController.prototype.moveTowards = function (target, dt) {
        if (this.state === "dead")
            return;
        var dir = target.sub(this.node.position);
        //dir.y -= 30; // 偏下方
        dir = dir.normalize();
        this.node.x += dir.x * this.speed * dt;
        this.node.y += dir.y * this.speed * dt;
        if (Math.abs(dir.x) > 0.1) {
            this.node.scaleX = dir.x > 0 ? 1 : -1;
        }
    };
    GoblinController.prototype.die = function () {
        var _this = this;
        if (this.state === "dead" || this.isDying)
            return;
        this.isDying = true;
        this.state = "dead";
        this.inDeskContact = false;
        this.unscheduleAllCallbacks();
        var state = this.anim.getAnimationState("goblin_die");
        if (!state) {
            console.warn("❗找不到 goblin_die 動畫，直接銷毀節點");
            this.node.destroy();
            return;
        }
        this.currentAnim = "goblin_die";
        this.anim.play("goblin_die");
        this.anim.once("finished", function () {
            _this.node.destroy();
        }, this);
    };
    GoblinController.prototype.playAnim = function (name) {
        // 🛑 如果已死亡，不准再切動畫
        if (this.state === "dead")
            return;
        if (!this.anim || this.currentAnim === name)
            return;
        var state = this.anim.getAnimationState(name);
        if (state) {
            this.anim.play(name);
            this.currentAnim = name;
        }
    };
    GoblinController.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = true;
        }
    };
    GoblinController.prototype.onEndContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = false;
            this.deskContactTimer = 0;
        }
    };
    __decorate([
        property(cc.Animation)
    ], GoblinController.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], GoblinController.prototype, "girl1", void 0);
    __decorate([
        property(cc.Node)
    ], GoblinController.prototype, "girl2", void 0);
    __decorate([
        property
    ], GoblinController.prototype, "speed", void 0);
    GoblinController = __decorate([
        ccclass
    ], GoblinController);
    return GoblinController;
}(cc.Component));
exports.default = GoblinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXEdvYmxpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUE4SUM7UUE1SUcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxRQUFFLEdBQWlCLElBQUksQ0FBQztRQUN4QixXQUFLLEdBQVcsTUFBTSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsQyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQjs7SUEwSHRELENBQUM7SUF2SEcsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQWMs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QUNoRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUdHLHlDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQzdCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUExSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFHdEI7UUFEQyxRQUFRO21EQUNVO0lBWEYsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E4SXBDO0lBQUQsdUJBQUM7Q0E5SUQsQUE4SUMsQ0E5STZDLEVBQUUsQ0FBQyxTQUFTLEdBOEl6RDtrQkE5SW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb2JsaW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDE1O1xyXG5cclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBzdHJpbmcgPSBcImlkbGVcIjtcclxuICAgIHByaXZhdGUgZm9sbG93VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZvbGxvd1RocmVzaG9sZDogbnVtYmVyID0gNzsgLy8g56eS5pW4XHJcbiAgICBwcml2YXRlIGRlc2tDb250YWN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGluRGVza0NvbnRhY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGlzRHlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8g8J+RiSDliqDlnKggY2xhc3Mg6KOhXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJ3YWxrXCI7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdvYmxpbl9ydW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0UGxheWVycyhnaXJsMTogY2MuTm9kZSwgZ2lybDI6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmdpcmwxID0gZ2lybDE7XHJcbiAgICAgICAgdGhpcy5naXJsMiA9IGdpcmwyO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSB0aGlzLmdpcmwxPy5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBwbGF5ZXIyID0gdGhpcy5naXJsMj8ucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBsYXllcjEgJiYgcGxheWVyMlxyXG4gICAgICAgICAgICA/ICh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllcjEpLm1hZygpIDwgdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXIyKS5tYWcoKSA/IHBsYXllcjEgOiBwbGF5ZXIyKVxyXG4gICAgICAgICAgICA6IHBsYXllcjEgfHwgcGxheWVyMjtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLnN0YXRlICE9PSBcImlkbGVcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIodGFyZ2V0KS5tYWcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93VGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKHRhcmdldCwgZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ29ibGluX3J1blwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbGxvd1RpbWVyID4gdGhpcy5mb2xsb3dUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluRGVza0NvbnRhY3QgJiYgIXRoaXMuaXNEeWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2tDb250YWN0VGltZXIgKz0gZHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNrQ29udGFjdFRpbWVyID4gMSAmJiB0aGlzLnN0YXRlICE9PSBcImRlYWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvd2FyZHModGFyZ2V0OiBjYy5WZWMzLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47IFxyXG4gICAgICAgIGxldCBkaXIgPSB0YXJnZXQuc3ViKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgLy9kaXIueSAtPSAzMDsgLy8g5YGP5LiL5pa5XHJcbiAgICAgICAgZGlyID0gZGlyLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSBkaXIueCAqIHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBkaXIueSAqIHRoaXMuc3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueCkgPiAwLjEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IGRpci54ID4gMCA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5kaWUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIgfHwgdGhpcy5pc0R5aW5nKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5pc0R5aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBcImRlYWRcIjtcclxuICAgIHRoaXMuaW5EZXNrQ29udGFjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJnb2JsaW5fZGllXCIpO1xyXG4gICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIuKdl+aJvuS4jeWIsCBnb2JsaW5fZGllIOWLleeVq++8jOebtOaOpemKt+avgOevgOm7nlwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRBbmltID0gXCJnb2JsaW5fZGllXCI7XHJcbiAgICB0aGlzLmFuaW0ucGxheShcImdvYmxpbl9kaWVcIik7XHJcblxyXG4gICAgdGhpcy5hbmltLm9uY2UoXCJmaW5pc2hlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sIHRoaXMpO1xyXG59XHJcblxyXG5cclxucGxheUFuaW0obmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyDwn5uRIOWmguaenOW3suatu+S6oe+8jOS4jeWHhuWGjeWIh+WLleeVq1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCF0aGlzLmFuaW0gfHwgdGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5EZXNrQ29udGFjdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbkRlc2tDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/CattySpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '919b9Wo7K1LVKr8wpkg7M+p', 'CattySpawner');
// Script/NPC/CattySpawner.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CattySpawner = /** @class */ (function (_super) {
    __extends(CattySpawner, _super);
    function CattySpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cattyPrefab = null;
        _this.spawnPoints = [];
        _this.spawnInterval = 6;
        _this.timer = 0;
        return _this;
    }
    CattySpawner.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            this.spawnCatty();
        }
    };
    CattySpawner.prototype.spawnCatty = function () {
        if (!this.cattyPrefab || this.spawnPoints.length === 0)
            return;
        var index = Math.floor(Math.random() * this.spawnPoints.length);
        var spawnPoint = this.spawnPoints[index];
        var catty = cc.instantiate(this.cattyPrefab);
        catty.setPosition(spawnPoint.getPosition());
        catty.parent = this.node;
        console.log("🐱 生成一隻閒晃中的 Catty");
    };
    __decorate([
        property({ type: cc.Prefab })
    ], CattySpawner.prototype, "cattyPrefab", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], CattySpawner.prototype, "spawnPoints", void 0);
    __decorate([
        property
    ], CattySpawner.prototype, "spawnInterval", void 0);
    CattySpawner = __decorate([
        ccclass
    ], CattySpawner);
    return CattySpawner;
}(cc.Component));
exports.default = CattySpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXENhdHR5U3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWdDQztRQTlCRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXNCOUIsQ0FBQztJQXBCRyw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUUvRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FEQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7cURBQ0Y7SUFHNUI7UUFEQyxRQUFRO3VEQUNpQjtJQVJULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnQ2hDO0lBQUQsbUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NyRDtrQkFoQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0dHlTcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiB9KVxyXG4gICAgY2F0dHlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLk5vZGVdIH0pXHJcbiAgICBzcGF3blBvaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGF3bkludGVydmFsOiBudW1iZXIgPSA2O1xyXG5cclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuc3Bhd25JbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zcGF3bkNhdHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduQ2F0dHkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhdHR5UHJlZmFiIHx8IHRoaXMuc3Bhd25Qb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zcGF3blBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHNwYXduUG9pbnQgPSB0aGlzLnNwYXduUG9pbnRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgY29uc3QgY2F0dHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhdHR5UHJlZmFiKTtcclxuICAgICAgICBjYXR0eS5zZXRQb3NpdGlvbihzcGF3blBvaW50LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGNhdHR5LnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5CxIOeUn+aIkOS4gOmau+mWkuaZg+S4reeahCBDYXR0eVwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/IInputControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edf51f17O5PSo+huFJiPwhC', 'IInputControls');
// Script/Player/IInputControls.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXElJbnB1dENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElJbnB1dENvbnRyb2xzIHtcclxuICAgIGdldE1vdmVEaXJlY3Rpb24oKTogY2MuVmVjMjtcclxuICAgIGdldEludGVyYWN0UHJlc3NlZCgpOiBib29sZWFuOyBcclxuICAgIGdldENob3BQcmVzc2VkKCk6IGJvb2xlYW47XHJcbiAgICBnZXRSdW5IZWxkKCk6IGJvb2xlYW47XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXExldmVsMmljZWNyZWFtMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMFJDO1FBeFJHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUVsQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQix5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFOUIsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFDN0IsUUFBRSxHQUFpQixJQUFJLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6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QU87T0FDYSxlQUFlLENBMFJuQztJQUFELHNCQUFDO0NBMVJELEFBMFJDLENBMVI0QyxFQUFFLENBQUMsU0FBUyxHQTBSeEQ7a0JBMVJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g8J+NpiDlhrDmt4fmt4voo73kvZzoiIflh7rppJDpgo/ovK/mlbTlkIjmrrXvvIjllq7nkIPniYjmnKzvvInlkKvop5LoibLmjqfliLbjgIHli5XnlavoiIfnspLlrZDnibnmlYggKyDoo73kvZzpgLLluqbmop0gY2hvcEJhciArIOWeg+WcvuahtumCj+i8r1xyXG5cclxuaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsMmljZWNyZWFtMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY29uZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB2YW5pbGxhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHN0cmF3YmVycnlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2hvY29sYXRlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0cmFzaFNtb2tlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsOyBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpcHNMYWJlbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aXBzUGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNyYWZ0UGFydGljbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNob3BCYXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwaWNrdXBTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJsaW5nU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBydW5EdXN0RWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXQ6IElJbnB1dENvbnRyb2xzID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBbmltOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBsYXN0RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgLTEpO1xyXG4gICAgcHJpdmF0ZSBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcnVuTXVsdGlwbGllcjogbnVtYmVyID0gMS4zO1xyXG4gICAgcHJpdmF0ZSBydW5EdXN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJ1bkR1c3RJbnRlcnZhbDogbnVtYmVyID0gMC4yO1xyXG5cclxuICAgIHByaXZhdGUgY2FycmllZERvdWdoOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FuUGlja0NvbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuQWRkVmFuaWxsYTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5BZGRTdHJhd2JlcnJ5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkFkZENob2NvbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYW5EZWxpdmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhblRyYXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGljZUNyZWFtUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1lbnVNYW5hZ2VyOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IHRoaXMudWlNYW5hZ2VyPy5nZXRDb21wb25lbnQoXCJNZW51QmFyXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgS2V5Ym9hcmRDb250cm9scygpO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfYmFja1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hvcEJhclByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJhck5vZGUpO1xyXG4gICAgICAgIGJhck5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcclxuICAgICAgICB0aGlzLmNob3BCYXIgPSBiYXJOb2RlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwgPSBiYXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmlsbGJhclwiKTtcclxuICAgICAgICBiYXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5pbnB1dC5nZXRNb3ZlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0aGlzLmlucHV0LmdldFJ1bkhlbGQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgbGV0IGZpbmFsU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIGZpbmFsU3BlZWQgKj0gdGhpcy5ydW5NdWx0aXBsaWVyO1xyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKGZpbmFsU3BlZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gZGlyLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVuRHVzdFRpbWVyID49IHRoaXMucnVuRHVzdEludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25SdW5EdXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkR1c3RUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oZGlyLnkgPiAwID8gKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1bl9iYWNrXCIgOiBcImdpcmxfd2Fsa19iYWNrXCIpIDogKHRoaXMuaXNSdW5uaW5nID8gXCJnaXJsX3J1blwiIDogXCJnaXJsX3dhbGtcIikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbShkaXIueCA+IDAgPyAodGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKSA6ICh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0RGlyLnkpID4gTWF0aC5hYnModGhpcy5sYXN0RGlyLngpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMubGFzdERpci55ID4gMCA/IFwiZ2lybF9pZGxlX2JhY2tcIiA6IFwiZ2lybF9pZGxlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueCA+IDAgPyBcImdpcmxfaWRsZV9yaWdodFwiIDogXCJnaXJsX2lkbGVfbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaCAmJiB0aGlzLmNhcnJpZWREb3VnaC5uYW1lID09PSBcIkNvbmVcIiAmJiB0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pY2VDcmVhbVByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSBNYXRoLm1pbih0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgLyAxLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuQWRkVmFuaWxsYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVdpdGhJY2VDcmVhbShcInZhbmlsbGEtaWNlY3JlYW0tbWVudVwiLCB0aGlzLnZhbmlsbGFQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhbkFkZFN0cmF3YmVycnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoSWNlQ3JlYW0oXCJzdHJhd2JlcnJ5LWljZWNyZWFtLW1lbnVcIiwgdGhpcy5zdHJhd2JlcnJ5UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5BZGRDaG9jb2xhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoSWNlQ3JlYW0oXCJjaG9jb2xhdGUtaWNlY3JlYW0tbWVudVwiLCB0aGlzLmNob2NvbGF0ZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGl2ZXIgJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBzY29vcE5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkU2xvdCA9IHRoaXMubWVudU1hbmFnZXIuc2xvdHMuZmluZChzbG90ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVOYW1lID0gc2xvdC5jaGlsZHJlblswXT8ubmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZW51TmFtZSA9PT0gc2Nvb3BOYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVkU2xvdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5hZGRTY29yZSg1MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEZWxpdmVyeUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5jaGVja0FuZEZpbGxTbG90cygpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfaGFwcHlcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibGluZ1NvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJsaW5nU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSDmiJDlip/lh7rppJDlhrDmt4fmt4vvvJpcIiArIHNjb29wTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5Yaw5reH5reL6IiH6I+c5Zau5LiN56ym77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5UcmFzaCAmJiB0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpICYmIHRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmljZUNyZWFtUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICBpZiAodGhpcy50cmFzaFNtb2tlUHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNtb2tlID0gY2MuaW5zdGFudGlhdGUodGhpcy50cmFzaFNtb2tlUHJlZmFiKTtcclxuICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHNtb2tlKTtcclxuICAgICAgICAgICAgY2MudHdlZW4oc21va2UpXHJcbiAgICAgICAgICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHNtb2tlLmRlc3Ryb3koKSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5hZGRTY29yZSgtNTApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+Xke+4jyDkuJ/mo4TmiYvkuIrnianlk4FcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeUludGVyYWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDb25lICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25lUHJlZmFiKTtcclxuICAgICAgICAgICAgY29uZS5uYW1lID0gXCJDb25lXCI7XHJcbiAgICAgICAgICAgIGNvbmUuc2V0UG9zaXRpb24oY2MudjMoMCwgMTAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjb25lKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBjb25lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltKSB0aGlzLmFuaW0ucGxheShcImdpcmxfcGlja1wiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjaYg5ou/6LW355Sc562SXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlV2l0aEljZUNyZWFtKG5hbWU6IHN0cmluZywgcHJlZmFiOiBjYy5QcmVmYWIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FycmllZERvdWdoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guZGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IGljZUNyZWFtID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICBpY2VDcmVhbS5uYW1lID0gbmFtZTtcclxuICAgICAgICBpY2VDcmVhbS5zZXRQb3NpdGlvbihjYy52MigwLCAyKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGljZUNyZWFtKTtcclxuICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IGljZUNyZWFtO1xyXG4gICAgICAgIHRoaXMuaWNlQ3JlYW1Qcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgY3JhZnRFZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyYWZ0UGFydGljbGVQcmVmYWIpO1xyXG4gICAgICAgIGNyYWZ0RWZmZWN0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGNyYWZ0RWZmZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+NqCDoo73kvZzlrozmiJDvvJoke25hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlbGl2ZXJ5RWZmZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHRpcHNOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzTGFiZWxQcmVmYWIpO1xyXG4gICAgICAgIHRpcHNOb2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZChjYy52MigwLCAxMDApKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aXBzTm9kZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGlwc05vZGUpXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MCwgMCksIG9wYWNpdHk6IC0yNTUgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBzUGFydGljbGVQcmVmYWIpO1xyXG4gICAgICAgIGVmZmVjdC5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChlZmZlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduUnVuRHVzdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVuRHVzdEVmZmVjdFByZWZhYikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGR1c3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHBvcy55IC09IDQwO1xyXG4gICAgICAgIGR1c3Quc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGR1c3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NvbmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRWYW5pbGxhID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkU3RyYXdiZXJyeSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZENob2NvbGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5UcmFzaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrQ29uZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGRWYW5pbGxhID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkFkZFN0cmF3YmVycnkgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQWRkQ2hvY29sYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRlbGl2ZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVHJhc2ggPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/KeyboardControls2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8afc0tsPRMa4xzEslWQpMl', 'KeyboardControls2');
// Script/Player/KeyboardControls2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardControls2 = void 0;
var KeyboardControls2 = /** @class */ (function () {
    function KeyboardControls2() {
        this.moveDir = cc.v2(0, 0);
        this.isInteractPressed = false;
        this.isChopPressed = false;
        this.isChopHeld = false;
        this.isRunHeld = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    KeyboardControls2.prototype.getMoveDirection = function () {
        return this.moveDir;
    };
    KeyboardControls2.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.moveDir.y = 1;
                break;
            case cc.macro.KEY.down:
                this.moveDir.y = -1;
                break;
            case cc.macro.KEY.left:
                this.moveDir.x = -1;
                break;
            case cc.macro.KEY.right:
                this.moveDir.x = 1;
                break;
            case cc.macro.KEY.l: // 出餐、互動
                this.isInteractPressed = true;
                break;
            case cc.macro.KEY.k: // 切食材
                this.isChopHeld = true;
                break;
            case cc.macro.KEY.shift: // 跑步
                this.isRunHeld = true;
                break;
        }
    };
    KeyboardControls2.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
            case cc.macro.KEY.down:
                this.moveDir.y = 0;
                break;
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.moveDir.x = 0;
                break;
            case cc.macro.KEY.l:
                this.isInteractPressed = false;
                break;
            case cc.macro.KEY.k:
                this.isChopHeld = false;
                break;
            case cc.macro.KEY.shift:
                this.isRunHeld = false;
                break;
        }
    };
    KeyboardControls2.prototype.getInteractPressed = function () {
        return this.isInteractPressed;
    };
    KeyboardControls2.prototype.getChopPressed = function () {
        return this.isChopHeld;
    };
    KeyboardControls2.prototype.getRunHeld = function () {
        return this.isRunHeld;
    };
    return KeyboardControls2;
}());
exports.KeyboardControls2 = KeyboardControls2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEtleWJvYXJkQ29udHJvbHMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBT0k7UUFOUSxZQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0Isc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUcvQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsNENBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxxQ0FBUyxHQUFqQixVQUFrQixLQUE2QjtRQUMzQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUTtnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU07Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTyxtQ0FBTyxHQUFmLFVBQWdCLEtBQTZCO1FBQ3pDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU0sOENBQWtCLEdBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTSxzQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBO0FBM0VZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZENvbnRyb2xzMiBpbXBsZW1lbnRzIElJbnB1dENvbnRyb2xzIHtcclxuICAgIHByaXZhdGUgbW92ZURpcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xyXG4gICAgcHJpdmF0ZSBpc0ludGVyYWN0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0Nob3BQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzQ2hvcEhlbGQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNSdW5IZWxkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3ZlRGlyZWN0aW9uKCk6IGNjLlZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVEaXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpci55ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpci54ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueCA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubDogLy8g5Ye66aSQ44CB5LqS5YuVXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5rOiAvLyDliIfpo5/mnZBcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9wSGVsZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc2hpZnQ6IC8vIOi3keatpVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1J1bkhlbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpci55ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpci54ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ludGVyYWN0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLms6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hvcEhlbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zaGlmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSdW5IZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEludGVyYWN0UHJlc3NlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0ludGVyYWN0UHJlc3NlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hvcFByZXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaG9wSGVsZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UnVuSGVsZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1J1bkhlbGQ7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIgMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFHbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFtekJDO1FBanpCRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBR3BCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUd0Qyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBR3RDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBR3ZCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxD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QUFDOzBEQUNBO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDRDtJQTNGZixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW16QnJDO0lBQUQsd0JBQUM7Q0FuekJELEFBbXpCQyxDQW56QjhDLEVBQUUsQ0FBQyxTQUFTLEdBbXpCMUQ7a0JBbnpCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9sczIgfSBmcm9tIFwiLi9LZXlib2FyZENvbnRyb2xzMlwiO1xyXG5pbXBvcnQgeyBJSW5wdXRDb250cm9scyB9IGZyb20gXCIuL0lJbnB1dENvbnRyb2xzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlcjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZG91Z2hQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZsYXRicmVhZFByZWZhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaG9wQmFyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsOyBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2hlZXNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBncmF0ZWRDaGVlc2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBwUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzbGljZXBwUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBtdXNocm9vbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2xpY2VtdXNocm9vbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2hlZXNlUGl6emFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIG11c2hyb29tUGl6emFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBlcHBlclBpenphUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzbW9rZUVmZmVjdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNtb2tlUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aXBzTGFiZWxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpcHNQYXJ0aWNsZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcGl6emFTdGVhbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBjaG9wU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBiYWtlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hvcFNvdW5kVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGJha2VTb3VuZElkOiBudW1iZXIgPSAtMTtcclxuXHJcblxyXG4gICAgLy8g6LeR5q2lXHJcbiAgICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBydW5NdWx0aXBsaWVyOiBudW1iZXIgPSAxLjM7IC8vIOi3keatpemAn+W6puWAjeeOh1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcnVuRHVzdEVmZmVjdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJ1bkR1c3RUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcnVuRHVzdEludGVydmFsOiBudW1iZXIgPSAwLjI7ICAvLyDmr48gMC4yIOenkuWGkuS4gOasoVxyXG5cclxuXHJcbiAgICAvLyBBdWRpb1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBibGluZ1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgcGlja3VwU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBwbGFjZVNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjYW5EZWxpdmVyOiBib29sZWFuID0gZmFsc2U7ICAgLy8g5piv5ZCm56Kw5Yiw5Ye66aSQ5Y+w77yIdGFnIDnvvIlcclxuICAgIHByaXZhdGUgbWVudU1hbmFnZXI6IGFueSA9IG51bGw7ICAgICAgIC8vIOWvpumamyBNZW51QmFyIOiFs+acrOW8leeUqFxyXG5cclxuXHJcbiAgICBwcml2YXRlIG5lYXJieU92ZW46IGNjLk5vZGUgPSBudWxsOyAvLyDoqJjpjITnm67liY3pnaDov5Hlk6rlgIvng6TnrrFcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzbW9rZVRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzbW9rZUludGVydmFsOiBudW1iZXIgPSAwLjU7IC8vIOavjyAwLjUg56eS5YaS5LiA5qyh54WZXHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgbGFzdERpcjogY2MuVmVjMiA9IGNjLnYyKDAsIC0xKTsgLy8g6aCQ6Kit5ZCR5LiL77yI5YmN77yJXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIC8vIOm6teWcmFxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrRG91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuRHJvcERvdWdoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhcnJpZWREb3VnaDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudERyb3BUYWc6IG51bWJlciA9IG51bGw7IFxyXG4gICAgcHJpdmF0ZSBpc0Nob3BwaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNob3BQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2hvcEZpbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaG9wQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyDotbflj7hcclxuICAgIHByaXZhdGUgY2FuUGlja0NoZWVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgY2FuUGlja1BQOiBib29sZWFuID0gZmFsc2U7IC8vIHRhZyA1IOaLvyBwcCDnmoQgZmxhZ1xyXG5cclxuICAgIHByaXZhdGUgY2FuUGlja011c2hyb29tOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8g54Ok5oqr6JapXHJcbiAgICBwcml2YXRlIGlzQmFraW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJha2VQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNOZWFyT3ZlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyB0YWcgPSAxMlxyXG5cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsYXN0SW50ZXJhY3RUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpbnRlcmFjdENvb2xkb3duOiBudW1iZXIgPSAwLjI7IC8vIDAuMiDnp5LlhrfljbvmmYLplpNcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5yYikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgUmlnaWRCb2R5MkQg57WE5Lu277yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF9pZGxlX2JhY2tcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzMigpOyAgLy8g56ys5LqM5L2N5L2/55So5bCI5bGs5o6n5Yi25ZmoXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hvcEJhclByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJhck5vZGUpO1xyXG4gICAgICAgIGJhck5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTtcclxuICAgICAgICB0aGlzLmNob3BCYXIgPSBiYXJOb2RlOyAvLyDinIUg5a2Y6LW35L6GXHJcblxyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwgPSBiYXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmlsbGJhclwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hvcEZpbGwpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIEZpbGxiYXLvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhck5vZGUuYWN0aXZlID0gZmFsc2U7IC8vIOmgkOioreS4jemhr+ekulxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IHRoaXMudWlNYW5hZ2VyPy5nZXRDb21wb25lbnQoXCJNZW51QmFyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5pbnB1dC5nZXRNb3ZlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0aGlzLmlucHV0LmdldFJ1bkhlbGQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiB0aGlzLnJ1bk11bHRpcGxpZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOKchSDot5HmraXni4DmhYvkuIvnlKLnlJ/nsonlobVcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRHVzdFRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVuRHVzdFRpbWVyID49IHRoaXMucnVuRHVzdEludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25SdW5EdXN0KCk7ICAvLyDirIXvuI8g6Ieq6KiC55qE57KJ5aG15Ye95pW4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5EdXN0VGltZXIgPSAwOyAgLy8g6Z2e6LeR5q2l54uA5oWL5bCx5LiN5YaS54WZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5L2/55So54mp55CG5byV5pOO55qEIGxpbmVhclZlbG9jaXR5IOaOp+WItuenu+WLlVxyXG4gICAgICAgICAgICBsZXQgZmluYWxTcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykgZmluYWxTcGVlZCAqPSB0aGlzLnJ1bk11bHRpcGxpZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gZGlyLmNsb25lKCkubm9ybWFsaXplKCkubXVsKGZpbmFsU3BlZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gZGlyLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDli5XnlavliIfmj5vvvIjoiIfmlrnlkJHliKTmlrfnhKHororvvIlcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpci55KSA+IE1hdGguYWJzKGRpci54KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX2JhY2tcIiA6IFwiZ2lybF93YWxrX2JhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuXCIgOiBcImdpcmxfd2Fsa1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5pc1J1bm5pbmcgPyBcImdpcmxfcnVuX3JpZ2h0XCIgOiBcImdpcmxfd2Fsa19yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmlzUnVubmluZyA/IFwiZ2lybF9ydW5fbGVmdFwiIDogXCJnaXJsX3dhbGtfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WLle+8iOmAn+W6puatuOmbtu+8iVxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmkq3mlL7pnZzmraLli5XnlatcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbnRlcmFjdFRpbWUgPiB0aGlzLmludGVyYWN0Q29vbGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiYgdGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggPT0gbnVsbCAmJiAhdGhpcy5pc0Nob3BwaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSBwcm9ncmVzc1JhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaG9wU291bmRUaW1lciA+PSAwLjIpIHsgIC8vIOavjyAwLjIg56eSXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9wU291bmRUaW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jaG9wU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFByb2dyZXNzID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENob3BwaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbENob3BwaW5nKCk7ICAvLyDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcFNvdW5kVGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyDng5jng6TmtYHnqItcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggJiZcclxuICAgICAgICAgICAgdGhpcy5pc1BpenphKHRoaXMuY2FycmllZERvdWdoLm5hbWUpICYmXHJcbiAgICAgICAgICAgICF0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdICYmIC8vIOKchSDkuI3og73mmK/lt7Lng6TpgY7nmoRcclxuICAgICAgICAgICAgIXRoaXMuaXNCYWtpbmdcclxuICAgICAgICApe1xyXG5cclxuICAgICAgICAgICAgLy8g5Yid5qyh5oyJ5LiL77yM6ZaL5aeL54OY54OkXHJcbiAgICAgICAgICAgIHRoaXMuaXNCYWtpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlU291bmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmFrZVNvdW5kLCB0cnVlKTsgLy8gdHJ1ZSDku6PooajlvqrnkrDmkq3mlL5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hY3RpdmUgPSBmYWxzZTsgLy8g6K6T5oqr6Jap5raI5aSxXHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflKUg5oqr6Jap5pS+5YWl54Ok566x5LitLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDku6Xng5jng6Tmj5DnpLpcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gJiZcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggJiZcclxuICAgICAgICAgICAgdGhpcy5pc1BpenphKHRoaXMuY2FycmllZERvdWdoLm5hbWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaFtcImJha2VkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8g6YCZ5aGK5oqr6Jap5bey57aT54Ok6YGO5LqG77yM5LiN6IO96YeN6KSH54OY54Ok77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWtpbmcgJiYgdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVByb2dyZXNzICs9IGR0O1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHRoaXMuYmFrZVByb2dyZXNzIC8gMywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcmF0aW87XHJcblxyXG4gICAgICAgICAgICAvLyDlhpLnhZnpgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5zbW9rZVRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbW9rZVRpbWVyID49IHRoaXMuc21va2VJbnRlcnZhbCAmJiB0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc21va2VUaW1lciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlblBvaW50ID0gdGhpcy5uZWFyYnlPdmVuLmdldENoaWxkQnlOYW1lKFwib3Zlbl9wb2ludFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVuUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbW9rZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc21va2VFZmZlY3RQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtb2tlLm5hbWUgPSBcIlNtb2tlRWZmZWN0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gb3ZlblBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAtNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5uZWFyYnlPdmVuLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc21va2Uuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmJ5T3Zlbi5hZGRDaGlsZChzbW9rZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+SqCDng5jng6TkuK3lhpLnhZnvvIjkvoboh6ogb3Zlbl9wb2ludO+8iVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBvdmVuX3BvaW5077yM54Sh5rOV5YaS54WZXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWtlUHJvZ3Jlc3MgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hCYWtpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Jha2luZyAmJiAhdGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDng5jng6TkuK3mlrfvvIFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQmFraW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGl2ZXIgJiYgdGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSAmJiB0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSB0aGlzLmNhcnJpZWREb3VnaC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g5qqi5p+l5piv5ZCm6IiH6I+c5Zau5bCN5oeJXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRTbG90ID0gdGhpcy5tZW51TWFuYWdlci5zbG90cy5maW5kKHNsb3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTmFtZSA9IHNsb3QuY2hpbGRyZW5bMF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROYW1lID09PSBwaXp6YU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlh7rppJDmiJDlip9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmFkZFNjb3JlKDUwKTsgIC8vIOWBh+ioreavj+mBk+iPnOWKoCAxMCDliIZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RlbGl2ZXJ5RWZmZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxpbmdTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ibGluZ1NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUJhciA9IHRoaXMudWlNYW5hZ2VyLmdldENvbXBvbmVudChcIk1lbnVCYXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVudUJhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVCYXIuY2hlY2tBbmRGaWxsU2xvdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OiSDmiJDlip/lh7rppJDvvJpcIiArIHBpenphTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwg5q2k5oqr6Jap5LiN5Zyo6I+c5Zau5LiK77yM5LiN6IO95Ye66aSQ77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGF3blJ1bkR1c3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bkR1c3RFZmZlY3RQcmVmYWIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHVzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucnVuRHVzdEVmZmVjdFByZWZhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyBcclxuICAgICAgICBwb3MueSAtPSA0MDsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZHVzdC5zZXRQb3NpdGlvbihwb3MpOyAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZHVzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpc1BpenphKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBbXCJjaGVlc2VfcGl6emFcIiwgXCJtdXNocm9vbV9waXp6YVwiLCBcInBlcHBlcl9waXp6YVwiXS5pbmNsdWRlcyhuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxCYWtpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFrZVNvdW5kSWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5iYWtlU291bmRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNCYWtpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJha2VQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zbW9rZVRpbWVyID0gMDsgXHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmNhcnJpZWREb3VnaCkgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmluaXNoQmFraW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJha2VTb3VuZElkICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuYmFrZVNvdW5kSWQpO1xyXG4gICAgICAgICAgICB0aGlzLmJha2VTb3VuZElkID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFrZVByb2dyZXNzID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2hbXCJiYWtlZFwiXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyDlnKjmiqvolqnkuIrliqDlhpLnhZnnibnmlYhcclxuICAgICAgICAgICAgY29uc3Qgc3RlYW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpenphU3RlYW1QcmVmYWIpO1xyXG4gICAgICAgICAgICBzdGVhbS5uYW1lID0gXCJQaXp6YVN0ZWFtXCI7XHJcbiAgICAgICAgICAgIHN0ZWFtLnNldFBvc2l0aW9uKGNjLnYzKDAsIDQwLCAwKSk7IC8vIOWGkueFmeS9jee9rueojeW+ruWcqOaKq+iWqeS4iuaWuVxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5hZGRDaGlsZChzdGVhbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8g54OY54Ok57WQ5p2f77yM5riF6Zmk5YaS54WZXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJTbW9rZUVmZmVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5lYXJieU92ZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5uZWFyYnlPdmVuLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiU21va2VFZmZlY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDinIUgJHt0aGlzLmNhcnJpZWREb3VnaC5uYW1lfSDng5jng6TlrozmiJDvvIFgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJ5QXNzZW1ibGVQaXp6YShwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubmFtZSk7XHJcbiAgICAgICAgY29uc3QgaGFzRmxhdGJyZWFkID0gaW5ncmVkaWVudE5hbWVzLmluY2x1ZGVzKFwiRmxhdGJyZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIkdyYXRlZENoZWVzZVwiKTtcclxuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IGluZ3JlZGllbnROYW1lcy5pbmNsdWRlcyhcIlNsaWNlTXVzaHJvb21cIik7XHJcbiAgICAgICAgY29uc3QgaGFzUFAgPSBpbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMoXCJTbGljZVBQXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWhhc0ZsYXRicmVhZCkgcmV0dXJuOyAvLyDlv4XpoIjlhYjmnIkgZmxhdGJyZWFkIOaJjeiDveWQiOaIkFxyXG5cclxuICAgICAgICBsZXQgcGl6emE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaGFzQ2hlZXNlICYmICFoYXNNdXNocm9vbSAmJiAhaGFzUFApIHtcclxuICAgICAgICAgICAgcGl6emEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoZWVzZVBpenphUHJlZmFiKTtcclxuICAgICAgICAgICAgcGl6emEubmFtZSA9IFwiY2hlZXNlX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNNdXNocm9vbSAmJiAhaGFzQ2hlZXNlICYmICFoYXNQUCkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QaXp6YVByZWZhYik7XHJcbiAgICAgICAgICAgIHBpenphLm5hbWUgPSBcIm11c2hyb29tX3BpenphXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNQUCAmJiAhaGFzQ2hlZXNlICYmICFoYXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVwcGVyUGl6emFQcmVmYWIpO1xyXG4gICAgICAgICAgICBwaXp6YS5uYW1lID0gXCJwZXBwZXJfcGl6emFcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIOWwmuS4jeaUr+aPtOikh+WQiOWPo+WRsyBwaXp6YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yiq6Zmk5Y6f5paZXHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKFtcIkZsYXRicmVhZFwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlNsaWNlTXVzaHJvb21cIiwgXCJTbGljZVBQXCJdLmluY2x1ZGVzKGNoaWxkLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yqg5YWlIHBpenphXHJcbiAgICAgICAgcGFyZW50Tm9kZS5hZGRDaGlsZChwaXp6YSk7XHJcbiAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gcGFyZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICBpZiAoZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gcGFyZW50Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIHBpenphLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn42VIOWQiOaIkCAke3BpenphLm5hbWV9IOaIkOWKn++8gWApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYW5jZWxDaG9wcGluZygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfm5Eg546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq177yBXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Q2hvcHBpbmcoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREcm9wVGFyZ2V0IHx8IHRoaXMuY3VycmVudERyb3BUYWcgIT09IDgpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDlj6rog73lnKjnoKfmnb/kuIrvvIh0YWcgPSA477yJ5YiH6aOf5p2Q77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYXNEb3VnaCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiRG91Z2hcIikpO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoZWVzZSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQ2hlZXNlXCIpKTtcclxuICAgICAgICBjb25zdCBoYXNQUCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIlBQXCIpO1xyXG4gICAgICAgIGNvbnN0IGhhc011c2hyb29tID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IFwiTXVzaHJvb21cIik7XHJcblxyXG5cclxuICAgICAgICBpZiAoIWhhc0RvdWdoICYmICFoYXNDaGVlc2UgJiYgIWhhc1BQICYmICFoYXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOmAmeWAi+egp+adv+S4iuaykuaciem6teWcmO+8jOS4jeiDveWIh++8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTsgIC8vIOmhr+ekuuWcqOinkuiJsumgreS4ilxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SqIOWcqOato+eiuuegp+adv+S4iumWi+Wni+WIh+m6teWcmO+8gVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBmaW5pc2hDaG9wcGluZygpIHtcclxuICAgICAgICBsZXQgaXNDaGVlc2UgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNEb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc1BQID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzTXVzaHJvb20gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJEb3VnaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc0RvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIkNoZWVzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc0NoZWVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJQUFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc1BQID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBcIk11c2hyb29tXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGlzTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0l0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaXNEb3VnaCkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5mbGF0YnJlYWRQcmVmYSk7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiRmxhdGJyZWFkXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0NoZWVzZSkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmF0ZWRDaGVlc2VQcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkdyYXRlZENoZWVzZVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQUCkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbGljZXBwUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZVBQXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc011c2hyb29tKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNsaWNlbXVzaHJvb21QcmVmYWIpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIlNsaWNlTXVzaHJvb21cIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAobmV3SXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmFkZENoaWxkKG5ld0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ruWIh+WujOeahOeJqeWTge+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIOWIh+WujCAke25ld0l0ZW0ubmFtZX3vvIzmlL7nva7miJDlip/vvIFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdHJ5SW50ZXJhY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja011c2hyb29tICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtdXNocm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXVzaHJvb21QcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobXVzaHJvb20pO1xyXG4gICAgICAgICAgICBtdXNocm9vbS5uYW1lID0gXCJNdXNocm9vbVwiO1xyXG4gICAgICAgICAgICBtdXNocm9vbS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG11c2hyb29tO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5ou/6LW36JiR6I+HXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuUGlja1BQICYmICF0aGlzLmNhcnJpZWREb3VnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHBQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHApO1xyXG4gICAgICAgICAgICBwcC5uYW1lID0gXCJQUFwiO1xyXG4gICAgICAgICAgICBwcC5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IHBwO1xyXG5cclxuICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBpY2t1cFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42FIOaLv+i1t+eVquiMhFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDaGVlc2UgJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWVzZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoZWVzZSk7XHJcbiAgICAgICAgICAgIGNoZWVzZS5uYW1lID0gXCJDaGVlc2VcIjtcclxuICAgICAgICAgICAgY2hlZXNlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gY2hlZXNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5ou/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tEb3VnaCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgZG91Z2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRvdWdoUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcclxuICAgICAgICAgICAgZG91Z2gubmFtZSA9IFwiRG91Z2hcIjtcclxuICAgICAgICAgICAgZG91Z2guc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2t1cFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGlja3VwU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaLv+i1t+m6teWcmFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgLy8g8J+UhCDmkr/otbfku7vkvZUgbmFtZSDku6Xpo5/mnZDplovpoK3nmoTmnbHopb9cclxuICAgICAgICAgICAgY29uc3QgcGlja2FibGUgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLmZpbmQoY2hpbGQgPT5cclxuICAgICAgICAgICAgICAgICBbXCJEb3VnaFwiLCBcIkZsYXRicmVhZFwiLCBcIkNoZWVzZVwiLCBcIkdyYXRlZENoZWVzZVwiLCBcIlRvbWF0b1wiLCBcIlBpenphU2F1Y2VcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQUFwiLCBcIlNsaWNlUFBcIiwgXCJNdXNocm9vbVwiLCBcIlNsaWNlTXVzaHJvb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCIgLy8g4oaQIOWKoOmAmeS4ieWAi1xyXG4gICAgICAgICAgICAgICAgICAgIF0uc29tZShwcmVmaXggPT5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgocHJlZml4KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAocGlja2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gcGlja2FibGU7XHJcbiAgICAgICAgICAgICAgICBwaWNrYWJsZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGlja2FibGUpO1xyXG4gICAgICAgICAgICAgICAgcGlja2FibGUuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWNrdXBTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmkr/otbfmoYzkuIrnmoTnianlk4HvvJpcIiArIHBpY2thYmxlLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIkRyb3BQb2ludFwiKTtcclxuICAgICAgICAgICAgaWYgKCFkcm9wUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLinYwg5om+5LiN5YiwIERyb3BQb2ludO+8jOeEoeazleaUvue9ru+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbHJlYWR5SGFzT3RoZXJUb3BwaW5ncyA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZHJvcFBvaW50ICYmXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICE9PSBcIkZsYXRicmVhZFwiICYmIC8vIOKchSDlhYHoqLHmnIkgRmxhdGJyZWFkIOWcqOWgtFxyXG4gICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcclxuICAgICAgICAgICAgICAgIFwiUFBcIiwgXCJTbGljZVBQXCIsIFwiTXVzaHJvb21cIiwgXCJTbGljZU11c2hyb29tXCIsXHJcbiAgICAgICAgICAgICAgICBcImNoZWVzZV9waXp6YVwiLCBcIm11c2hyb29tX3BpenphXCIsIFwicGVwcGVyX3BpenphXCIgLy8g4oaQIOWKoOmAmeS4ieWAi1xyXG4gICAgICAgICAgICAgICAgXS5zb21lKHR5cGUgPT5cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lICYmIGNoaWxkLm5hbWUuc3RhcnRzV2l0aCh0eXBlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0ZsYXRicmVhZCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIkZsYXRicmVhZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxyZWFkeUhhc1NhbWVUeXBlID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkICE9PSBkcm9wUG9pbnQgJiYgY2hpbGQubmFtZSA9PT0gdGhpcy5jYXJyaWVkRG91Z2gubmFtZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNGbGF0YnJlYWQgJiYgYWxyZWFkeUhhc1NhbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g54Sh5rOV5pS+572u77yM5qGM5LiK5bey5pyJ55u45ZCM6aOf5p2Q77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g4pyFIOaUvue9rumCj+i8r1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5wYXJlbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBkcm9wUG9pbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5pS+5LiL54mp5ZOB5YiwIERyb3BQb2ludO+8mlwiICsgdGhpcy5jYXJyaWVkRG91Z2gubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGlja3VwU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5waWNrdXBTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOKchSDlmJfoqablkIjmiJAgUGl6emHvvIjmlL7nva7lvozop7jnmbzvvIlcclxuICAgICAgICAgICAgdGhpcy50cnlBc3NlbWJsZVBpenphKHRoaXMuY3VycmVudERyb3BUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWxpdmVyeUVmZmVjdCgpIHtcclxuICAgICAgICAvLyDpo4TlrZfmlYjmnpxcclxuICAgICAgICBjb25zdCB0aXBzTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc0xhYmVsUHJlZmFiKTtcclxuICAgICAgICB0aXBzTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjIoMCwgMTAwKSkpOyAvLyDlh7rnj77lnKjop5LoibLkuIrmlrlcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRpcHNOb2RlKTtcclxuXHJcbiAgICAgICAgLy8g6aOE5rWuICsg5reh5Ye6XHJcbiAgICAgICAgY2MudHdlZW4odGlwc05vZGUpXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MygwLCA2MCwgMCksIG9wYWNpdHk6IC0yNTUgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGlwc05vZGUuZGVzdHJveSgpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIOeykuWtkOeJueaViFxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwc1BhcnRpY2xlUHJlZmFiKTtcclxuICAgICAgICBlZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoZWZmZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDaGVlc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5Y+v5Lul5pK/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYUg5Y+v5Lul5pK/6LW355Wq6IyE77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrTXVzaHJvb20gPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5Ecm9wRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYWcgPSBvdGhlckNvbGxpZGVyLnRhZzsgIC8vIOiomOS9j+ebruWJjeeisOWIsOWTquWAiyB0YWdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+loyDmjqXop7jliLDnoKfmnb8gVGFnID1cIiwgb3RoZXJDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhZyA9IDExO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOZWFyT3ZlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5SlIOaOpeinuOWIsOeDpOeuse+8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsaXZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NoZWVzZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrUFAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja011c2hyb29tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDlj6/ku6Xmkr/otbfomJHoj4fvvIFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTAgfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDExKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBudWxsOyAgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTmVhck92ZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYWtlUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmFraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5T3ZlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJha2VTb3VuZElkICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmJha2VTb3VuZElkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFrZVNvdW5kSWQgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5EZWxpdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9IFxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/GoblinSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e9cdyIB/NJs4XS87zuYtQ0', 'GoblinSpawner');
// Script/NPC/GoblinSpawner.ts

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
var GoblinController_1 = require("./GoblinController"); // ✅ 放在最上面沒問題
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoblinSpawner = /** @class */ (function (_super) {
    __extends(GoblinSpawner, _super);
    function GoblinSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goblinPrefab = null;
        _this.dropPoints = [];
        _this.player1 = null;
        _this.player2 = null;
        _this.spawnInterval = 5;
        _this.timer = 0;
        return _this;
    }
    GoblinSpawner.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            this.spawnGoblin();
        }
    };
    GoblinSpawner.prototype.spawnGoblin = function () {
        if (!this.goblinPrefab || this.dropPoints.length === 0)
            return;
        var index = Math.floor(Math.random() * this.dropPoints.length);
        var dropPoint = this.dropPoints[index];
        var goblin = cc.instantiate(this.goblinPrefab);
        goblin.setPosition(dropPoint.getPosition());
        goblin.parent = this.node;
        var controller = goblin.getComponent(GoblinController_1.default);
        if (controller && this.player1 && this.player2) {
            controller.setTargetPlayers(this.player1, this.player2);
        }
    };
    __decorate([
        property({ type: cc.Prefab })
    ], GoblinSpawner.prototype, "goblinPrefab", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], GoblinSpawner.prototype, "dropPoints", void 0);
    __decorate([
        property({ type: cc.Node })
    ], GoblinSpawner.prototype, "player1", void 0);
    __decorate([
        property({ type: cc.Node })
    ], GoblinSpawner.prototype, "player2", void 0);
    __decorate([
        property
    ], GoblinSpawner.prototype, "spawnInterval", void 0);
    GoblinSpawner = __decorate([
        ccclass
    ], GoblinSpawner);
    return GoblinSpawner;
}(cc.Component));
exports.default = GoblinSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXEdvYmxpblNwYXduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtELENBQUMsYUFBYTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXlDQztRQXZDRyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUczQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF5QjlCLENBQUM7SUF2QkcsOEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFL0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTFCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsMEJBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7dURBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztxREFDSDtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7a0RBQ0o7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2tEQUNKO0lBR3hCO1FBREMsUUFBUTt3REFDaUI7SUFkVCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUNqQztJQUFELG9CQUFDO0NBekNELEFBeUNDLENBekMwQyxFQUFFLENBQUMsU0FBUyxHQXlDdEQ7a0JBekNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvYmxpbkNvbnRyb2xsZXIgZnJvbSBcIi4vR29ibGluQ29udHJvbGxlclwiOyAvLyDinIUg5pS+5Zyo5pyA5LiK6Z2i5rKS5ZWP6aGMXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29ibGluU3Bhd25lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICAgIGdvYmxpblByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuTm9kZV0gfSlcclxuICAgIGRyb3BQb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcclxuICAgIHBsYXllcjE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcclxuICAgIHBsYXllcjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3Bhd25JbnRlcnZhbDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnNwYXduSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25Hb2JsaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25Hb2JsaW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdvYmxpblByZWZhYiB8fCB0aGlzLmRyb3BQb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kcm9wUG9pbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgZHJvcFBvaW50ID0gdGhpcy5kcm9wUG9pbnRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgY29uc3QgZ29ibGluID0gY2MuaW5zdGFudGlhdGUodGhpcy5nb2JsaW5QcmVmYWIpO1xyXG4gICAgICAgIGdvYmxpbi5zZXRQb3NpdGlvbihkcm9wUG9pbnQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgZ29ibGluLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGdvYmxpbi5nZXRDb21wb25lbnQoR29ibGluQ29udHJvbGxlcik7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgdGhpcy5wbGF5ZXIxICYmIHRoaXMucGxheWVyMikge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLnNldFRhcmdldFBsYXllcnModGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/KeyboardControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c1a40Icb9Ko6LW+Qjg7m6O', 'KeyboardControls');
// Script/Player/KeyboardControls.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardControls = void 0;
var KeyboardControls = /** @class */ (function () {
    function KeyboardControls() {
        this.moveDir = cc.v2(0, 0);
        this.isInteractPressed = false;
        this.isChopPressed = false;
        this.isChopHeld = false;
        this.isRunHeld = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    KeyboardControls.prototype.getMoveDirection = function () {
        return this.moveDir;
    };
    KeyboardControls.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.moveDir.y = 1;
                break;
            case cc.macro.KEY.s:
                this.moveDir.y = -1;
                break;
            case cc.macro.KEY.a:
                this.moveDir.x = -1;
                break;
            case cc.macro.KEY.d:
                this.moveDir.x = 1;
                break;
            case cc.macro.KEY.e:
                this.isInteractPressed = true;
                break;
            case cc.macro.KEY.space:
                this.isChopHeld = true;
                break;
            case cc.macro.KEY.ctrl:
                this.isRunHeld = true;
                break;
        }
    };
    KeyboardControls.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
            case cc.macro.KEY.s:
                this.moveDir.y = 0;
                break;
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                this.moveDir.x = 0;
                break;
            case cc.macro.KEY.e:
                this.isInteractPressed = false;
                break;
            case cc.macro.KEY.space:
                this.isChopHeld = false;
                break;
            case cc.macro.KEY.ctrl:
                this.isRunHeld = false;
                break;
        }
    };
    KeyboardControls.prototype.getInteractPressed = function () {
        return this.isInteractPressed;
    };
    KeyboardControls.prototype.getChopPressed = function () {
        return this.isChopHeld;
    };
    KeyboardControls.prototype.getRunHeld = function () {
        return this.isRunHeld;
    };
    return KeyboardControls;
}());
exports.KeyboardControls = KeyboardControls;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEtleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFRSTtRQVBRLFlBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBSS9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVPLG9DQUFTLEdBQWpCLFVBQWtCLEtBQTZCO1FBQzNDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWdCLEtBQTZCO1FBQ3pDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLE1BQU07U0FFYjtJQUNMLENBQUM7SUFFTSw2Q0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBQ00seUNBQWMsR0FBckI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUNNLHFDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCx1QkFBQztBQUFELENBM0VBLEFBMkVDLElBQUE7QUEzRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkQ29udHJvbHMgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XHJcbiAgICBwcml2YXRlIG1vdmVEaXI6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgaXNJbnRlcmFjdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNDaG9wUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0Nob3BIZWxkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzUnVuSGVsZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVEaXJlY3Rpb24oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZURpcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnkgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueCA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbnRlcmFjdFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Nob3BIZWxkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5jdHJsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1J1bkhlbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueCA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbnRlcmFjdFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9wSGVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmN0cmw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVuSGVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW50ZXJhY3RQcmVzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW50ZXJhY3RQcmVzc2VkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENob3BQcmVzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hvcEhlbGQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0UnVuSGVsZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1J1bkhlbGQ7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/NPCWanderGoblin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e63bAs29tP5I9SVWngM+bj', 'NPCWanderGoblin');
// Script/NPC/NPCWanderGoblin.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NPCWanderGoblin = /** @class */ (function (_super) {
    __extends(NPCWanderGoblin, _super);
    function NPCWanderGoblin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minSpeed = 30;
        _this.maxSpeed = 40;
        _this.anim = null;
        _this.dir = cc.v2(0, 0);
        _this.speed = 0;
        _this.rb = null;
        return _this;
    }
    NPCWanderGoblin.prototype.start = function () {
        this.rb = this.getComponent(cc.RigidBody);
        this.schedule(this.pickRandomDirection, Math.random() * 2 + 1); // 每 1~3 秒換方向
        this.pickRandomDirection();
    };
    NPCWanderGoblin.prototype.pickRandomDirection = function () {
        var angle = Math.random() * Math.PI * 2;
        this.dir = cc.v2(Math.cos(angle), Math.sin(angle)).normalize();
        this.speed = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);
        if (this.anim)
            this.anim.play("goblin_run");
    };
    NPCWanderGoblin.prototype.update = function (dt) {
        if (this.rb) {
            this.rb.linearVelocity = this.dir.mul(this.speed);
            if (Math.abs(this.dir.x) > Math.abs(this.dir.y)) {
                this.node.scaleX = this.dir.x > 0 ? 1 : -1;
            }
        }
    };
    NPCWanderGoblin.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === "DeskCollider") {
            this.dir = cc.v2(0, 0);
            this.speed = 0;
            if (this.anim)
                this.anim.play("goblin_idle");
        }
    };
    __decorate([
        property
    ], NPCWanderGoblin.prototype, "minSpeed", void 0);
    __decorate([
        property
    ], NPCWanderGoblin.prototype, "maxSpeed", void 0);
    __decorate([
        property(cc.Animation)
    ], NPCWanderGoblin.prototype, "anim", void 0);
    NPCWanderGoblin = __decorate([
        ccclass
    ], NPCWanderGoblin);
    return NPCWanderGoblin;
}(cc.Component));
exports.default = NPCWanderGoblin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXE5QQ1dhbmRlckdvYmxpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQThDQztRQTVDRyxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFbEIsU0FBRyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsUUFBRSxHQUFpQixJQUFJLENBQUM7O0lBa0NwQyxDQUFDO0lBaENHLCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQzdFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw2Q0FBbUIsR0FBbkI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3RSxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBR0Qsd0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUMvQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUEzQ0Q7UUFEQyxRQUFRO3FEQUNhO0lBR3RCO1FBREMsUUFBUTtxREFDYTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNHO0lBUlQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQThDbkM7SUFBRCxzQkFBQztDQTlDRCxBQThDQyxDQTlDNEMsRUFBRSxDQUFDLFNBQVMsR0E4Q3hEO2tCQTlDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOUENXYW5kZXJHb2JsaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5TcGVlZDogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTcGVlZDogbnVtYmVyID0gNDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5waWNrUmFuZG9tRGlyZWN0aW9uLCBNYXRoLnJhbmRvbSgpICogMiArIDEpOyAvLyDmr48gMX4zIOenkuaPm+aWueWQkVxyXG4gICAgICAgIHRoaXMucGlja1JhbmRvbURpcmVjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tSYW5kb21EaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgdGhpcy5kaXIgPSBjYy52MihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWluU3BlZWQgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3BlZWQgLSB0aGlzLm1pblNwZWVkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbSkgdGhpcy5hbmltLnBsYXkoXCJnb2JsaW5fcnVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmIpIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IHRoaXMuZGlyLm11bCh0aGlzLnNwZWVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmRpci54KSA+IE1hdGguYWJzKHRoaXMuZGlyLnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5kaXIueCA+IDAgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gXCJEZXNrQ29sbGlkZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbSkgdGhpcy5hbmltLnBsYXkoXCJnb2JsaW5faWRsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/CattyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3d1eJPN6FIUJBMKY8Z1E0o', 'CattyController');
// Script/NPC/CattyController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoblinController = /** @class */ (function (_super) {
    __extends(GoblinController, _super);
    function GoblinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.girl1 = null;
        _this.girl2 = null;
        _this.speed = 15;
        _this.rb = null;
        _this.state = "idle";
        _this.followTimer = 0;
        _this.followThreshold = 7; // 秒數
        _this.deskContactTimer = 0;
        _this.inDeskContact = false;
        _this.currentAnim = "";
        _this.isDying = false; // 👉 加在 class 裡
        return _this;
    }
    GoblinController.prototype.onLoad = function () {
        this.rb = this.getComponent(cc.RigidBody);
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.state = "walk";
        this.playAnim("goblin_run");
    };
    GoblinController.prototype.setTargetPlayers = function (girl1, girl2) {
        this.girl1 = girl1;
        this.girl2 = girl2;
    };
    GoblinController.prototype.update = function (dt) {
        var _a, _b;
        if (this.state === "dead")
            return;
        var player1 = (_a = this.girl1) === null || _a === void 0 ? void 0 : _a.position;
        var player2 = (_b = this.girl2) === null || _b === void 0 ? void 0 : _b.position;
        var target = player1 && player2
            ? (this.node.position.sub(player1).mag() < this.node.position.sub(player2).mag() ? player1 : player2)
            : player1 || player2;
        if (target && this.state !== "idle") {
            var distance = this.node.position.sub(target).mag();
            if (distance < 150) {
                this.followTimer += dt;
            }
            else {
                this.followTimer = 0;
            }
            this.moveTowards(target, dt);
            this.playAnim("goblin_run");
            if (this.followTimer > this.followThreshold) {
                this.die();
            }
        }
        if (this.inDeskContact && !this.isDying) {
            this.deskContactTimer += dt;
            if (this.deskContactTimer > 1 && this.state !== "dead") {
                this.die();
            }
        }
        else {
            this.deskContactTimer = 0;
        }
    };
    GoblinController.prototype.moveTowards = function (target, dt) {
        if (this.state === "dead")
            return;
        var dir = target.sub(this.node.position);
        //dir.y -= 30; // 偏下方
        dir = dir.normalize();
        this.node.x += dir.x * this.speed * dt;
        this.node.y += dir.y * this.speed * dt;
        if (Math.abs(dir.x) > 0.1) {
            this.node.scaleX = dir.x > 0 ? 1 : -1;
        }
    };
    GoblinController.prototype.die = function () {
        var _this = this;
        if (this.state === "dead" || this.isDying)
            return;
        this.isDying = true;
        this.state = "dead";
        this.inDeskContact = false;
        this.unscheduleAllCallbacks();
        var state = this.anim.getAnimationState("goblin_die");
        if (!state) {
            console.warn("❗找不到 goblin_die 動畫，直接銷毀節點");
            this.node.destroy();
            return;
        }
        this.currentAnim = "goblin_die";
        this.anim.play("goblin_die");
        this.anim.once("finished", function () {
            _this.node.destroy();
        }, this);
    };
    GoblinController.prototype.playAnim = function (name) {
        // 🛑 如果已死亡，不准再切動畫
        if (this.state === "dead")
            return;
        if (!this.anim || this.currentAnim === name)
            return;
        var state = this.anim.getAnimationState(name);
        if (state) {
            this.anim.play(name);
            this.currentAnim = name;
        }
    };
    GoblinController.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = true;
        }
    };
    GoblinController.prototype.onEndContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = false;
            this.deskContactTimer = 0;
        }
    };
    __decorate([
        property(cc.Animation)
    ], GoblinController.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], GoblinController.prototype, "girl1", void 0);
    __decorate([
        property(cc.Node)
    ], GoblinController.prototype, "girl2", void 0);
    __decorate([
        property
    ], GoblinController.prototype, "speed", void 0);
    GoblinController = __decorate([
        ccclass
    ], GoblinController);
    return GoblinController;
}(cc.Component));
exports.default = GoblinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXENhdHR5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQThJQztRQTVJRyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUVYLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLFdBQUssR0FBVyxNQUFNLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIscUJBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ2xDLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFPLEdBQVksS0FBSyxDQUFDLENBQUMsZ0JBQWdCOztJQTBIdEQsQ0FBQztJQXZIRyxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBYyxF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Q2hELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBR0cseUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQTFJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQUd0QjtRQURDLFFBQVE7bURBQ1U7SUFYRixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQThJcEM7SUFBRCx1QkFBQztDQTlJRCxBQThJQyxDQTlJNkMsRUFBRSxDQUFDLFNBQVMsR0E4SXpEO2tCQTlJb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYmxpbkNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaXJsMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaXJsMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgcHJpdmF0ZSByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGU6IHN0cmluZyA9IFwiaWRsZVwiO1xyXG4gICAgcHJpdmF0ZSBmb2xsb3dUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZm9sbG93VGhyZXNob2xkOiBudW1iZXIgPSA3OyAvLyDnp5LmlbhcclxuICAgIHByaXZhdGUgZGVza0NvbnRhY3RUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaW5EZXNrQ29udGFjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgaXNEeWluZzogYm9vbGVhbiA9IGZhbHNlOyAvLyDwn5GJIOWKoOWcqCBjbGFzcyDoo6FcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcIndhbGtcIjtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ29ibGluX3J1blwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYXJnZXRQbGF5ZXJzKGdpcmwxOiBjYy5Ob2RlLCBnaXJsMjogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuZ2lybDEgPSBnaXJsMTtcclxuICAgICAgICB0aGlzLmdpcmwyID0gZ2lybDI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IHRoaXMuZ2lybDE/LnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSB0aGlzLmdpcmwyPy5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGxheWVyMSAmJiBwbGF5ZXIyXHJcbiAgICAgICAgICAgID8gKHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyMSkubWFnKCkgPCB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllcjIpLm1hZygpID8gcGxheWVyMSA6IHBsYXllcjIpXHJcbiAgICAgICAgICAgIDogcGxheWVyMSB8fCBwbGF5ZXIyO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuc3RhdGUgIT09IFwiaWRsZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yih0YXJnZXQpLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTUwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd1RpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0LCBkdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnb2JsaW5fcnVuXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9sbG93VGltZXIgPiB0aGlzLmZvbGxvd1RocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5EZXNrQ29udGFjdCAmJiAhdGhpcy5pc0R5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciArPSBkdDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlc2tDb250YWN0VGltZXIgPiAxICYmIHRoaXMuc3RhdGUgIT09IFwiZGVhZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrQ29udGFjdFRpbWVyID0gMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG93YXJkcyh0YXJnZXQ6IGNjLlZlYzMsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIpIHJldHVybjsgXHJcbiAgICAgICAgbGV0IGRpciA9IHRhcmdldC5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAvL2Rpci55IC09IDMwOyAvLyDlgY/kuIvmlrlcclxuICAgICAgICBkaXIgPSBkaXIubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRpci54ICogdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGRpci55ICogdGhpcy5zcGVlZCAqIGR0O1xyXG5cclxuICAgICAgICAgaWYgKE1hdGguYWJzKGRpci54KSA+IDAuMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gZGlyLnggPiAwID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmRpZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBcImRlYWRcIiB8fCB0aGlzLmlzRHlpbmcpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmlzRHlpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IFwiZGVhZFwiO1xyXG4gICAgdGhpcy5pbkRlc2tDb250YWN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuXHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImdvYmxpbl9kaWVcIik7XHJcbiAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi4p2X5om+5LiN5YiwIGdvYmxpbl9kaWUg5YuV55Wr77yM55u05o6l6Yq35q+A56+A6bueXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudEFuaW0gPSBcImdvYmxpbl9kaWVcIjtcclxuICAgIHRoaXMuYW5pbS5wbGF5KFwiZ29ibGluX2RpZVwiKTtcclxuXHJcbiAgICB0aGlzLmFuaW0ub25jZShcImZpbmlzaGVkXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSwgdGhpcyk7XHJcbn1cclxuXHJcblxyXG5wbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vIPCfm5Eg5aaC5p6c5bey5q275Lqh77yM5LiN5YeG5YaN5YiH5YuV55WrXHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIpIHJldHVybjtcclxuXHJcbiAgICBpZiAoIXRoaXMuYW5pbSB8fCB0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheShuYW1lKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbkRlc2tDb250YWN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmluRGVza0NvbnRhY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNrQ29udGFjdFRpbWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/NPCWanderCatty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4e7blT7VtAm7dLpKzVc9HU', 'NPCWanderCatty');
// Script/NPC/NPCWanderCatty.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NPCWanderCatty = /** @class */ (function (_super) {
    __extends(NPCWanderCatty, _super);
    function NPCWanderCatty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 50;
        _this.direction = cc.v3();
        _this.moveTimer = 0;
        _this.animTimer = 0;
        return _this;
    }
    NPCWanderCatty.prototype.onLoad = function () {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.pickRandomDirection();
        this.playAnim("cat_run");
    };
    NPCWanderCatty.prototype.update = function (dt) {
        // 🐾 移動
        var moving = this.direction.mag() > 0.1;
        if (moving) {
            this.node.x += this.direction.x * this.speed * dt;
            this.node.y += this.direction.y * this.speed * dt;
        }
        // ⏱️ 定時換方向
        this.moveTimer += dt;
        if (this.moveTimer >= 2 + Math.random() * 2) {
            this.pickRandomDirection();
            this.moveTimer = 0;
        }
        // 🎬 自動切動畫
        if (moving) {
            this.playAnim("cat_run");
        }
        else {
            this.playAnim("cat_idle");
        }
        // 👀 左右翻轉
        if (Math.abs(this.direction.x) > 0.1) {
            this.node.scaleX = this.direction.x > 0 ? 5 : -5;
        }
    };
    NPCWanderCatty.prototype.pickRandomDirection = function () {
        var angle = Math.random() * Math.PI * 2;
        this.direction = cc.v3(Math.cos(angle), Math.sin(angle), 0);
    };
    NPCWanderCatty.prototype.randomAnim = function () {
        var choices = ["cat_idle", "cat_run", "cat_jump"];
        var name = choices[Math.floor(Math.random() * choices.length)];
        this.playAnim(name);
    };
    NPCWanderCatty.prototype.playAnim = function (name) {
        if (!this.anim || !this.anim.getAnimationState(name))
            return;
        this.anim.play(name);
    };
    __decorate([
        property(cc.Animation)
    ], NPCWanderCatty.prototype, "anim", void 0);
    __decorate([
        property
    ], NPCWanderCatty.prototype, "speed", void 0);
    NPCWanderCatty = __decorate([
        ccclass
    ], NPCWanderCatty);
    return NPCWanderCatty;
}(cc.Component));
exports.default = NPCWanderCatty;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXE5QQ1dhbmRlckNhdHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBK0RDO1FBN0RHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFzRGxDLENBQUM7SUFwREcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVMLCtCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsUUFBUTtRQUNSLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDckQ7UUFFRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsV0FBVztRQUNYLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QjtRQUVELFVBQVU7UUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUdHLDRDQUFtQixHQUFuQjtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksSUFBTSxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0c7SUFHMUI7UUFEQyxRQUFRO2lEQUNVO0lBTEYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQStEbEM7SUFBRCxxQkFBQztDQS9ERCxBQStEQyxDQS9EMkMsRUFBRSxDQUFDLFNBQVMsR0ErRHZEO2tCQS9Eb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOUENXYW5kZXJDYXR0eSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMyA9IGNjLnYzKCk7XHJcbiAgICBwcml2YXRlIG1vdmVUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYW5pbVRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBpY2tSYW5kb21EaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiY2F0X3J1blwiKTtcclxuICAgIH1cclxuXHJcbnVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAvLyDwn5C+IOenu+WLlVxyXG4gICAgY29uc3QgbW92aW5nID0gdGhpcy5kaXJlY3Rpb24ubWFnKCkgPiAwLjE7XHJcbiAgICBpZiAobW92aW5nKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKPse+4jyDlrprmmYLmj5vmlrnlkJFcclxuICAgIHRoaXMubW92ZVRpbWVyICs9IGR0O1xyXG4gICAgaWYgKHRoaXMubW92ZVRpbWVyID49IDIgKyBNYXRoLnJhbmRvbSgpICogMikge1xyXG4gICAgICAgIHRoaXMucGlja1JhbmRvbURpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubW92ZVRpbWVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDwn46sIOiHquWLleWIh+WLleeVq1xyXG4gICAgaWYgKG1vdmluZykge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJjYXRfcnVuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiY2F0X2lkbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g8J+RgCDlt6blj7Pnv7vovYlcclxuICAgIGlmIChNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IDAuMSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLmRpcmVjdGlvbi54ID4gMCA/IDUgOiAtNTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICBwaWNrUmFuZG9tRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjMoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFuaW0oKSB7XHJcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IFtcImNhdF9pZGxlXCIsIFwiY2F0X3J1blwiLCBcImNhdF9qdW1wXCJdO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNob2ljZXMubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSB8fCAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
