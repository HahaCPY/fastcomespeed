"use strict";
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