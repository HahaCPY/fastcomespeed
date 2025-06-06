
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