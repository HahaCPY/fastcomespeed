"use strict";
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