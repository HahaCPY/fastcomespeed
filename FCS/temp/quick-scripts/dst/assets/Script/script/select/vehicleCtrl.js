
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
        var vehicleNode = cc.find("vehicle/garbage-truck");
        if (vehicleNode) {
            var vehiclePos = vehicleNode.getPosition();
            if (vehiclePos.y < -2.5) {
                vehicleNode.setPosition(-0.069, 0.15, 0.446);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcdmVoaWNsZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscURBQWdEO0FBR2hEO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBK0VDO1FBN0VHLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFVixRQUFFLEdBQW1CLElBQUksQ0FBQztRQThCMUIsY0FBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7SUE2Qy9CLENBQUM7SUF6RUcsb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLE1BQU0sQ0FBQztRQUVwRSxnREFBZ0Q7UUFDaEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHlCQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuRSxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLHlCQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFFRCw4QkFBOEI7UUFDOUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMs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LFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRWhELDJCQUEyQjtnQkFDM0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFNLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUU5RCx3Q0FBd0M7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0o7UUFDRCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckQsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0MsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNyQixXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRDtTQUNKO0lBQ0wsQ0FBQztJQTVFRDtRQURDLFFBQVE7c0RBQ1M7SUFGRCxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQStFdkM7SUFBRCwwQkFBQztDQS9FRCxBQStFQyxDQS9FZ0QsRUFBRSxDQUFDLFNBQVMsR0ErRTVEO2tCQS9Fb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFBvc2l0aW9uTWFuYWdlciBmcm9tIFwiLi9Qb3NpdGlvbk1hbmFnZXJcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMztcclxuXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkzRCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkzRCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb21NZW51ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZnJvbU1lbnVcIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgY2hhcmFjdGVyIGhhcyBhIHNhdmVkIHBvc2l0aW9uLCBzZXQgaXRcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGZyb21NZW51ID8gbnVsbCA6IFBvc2l0aW9uTWFuYWdlci5nZXRTYXZlZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihzYXZlZCk7XHJcbiAgICAgICAgICAgIFBvc2l0aW9uTWFuYWdlci5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUkVNRU1CRVIgVE8gUkVNT1ZFIFRIRSBGTEFHXHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZnJvbU1lbnVcIik7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXIncyBmb3J3YXJkOiBcIiwgdGhpcy5ub2RlLmZvcndhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2ZWxvY2l0eSA9IGNjLnYzKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmEpIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZCkgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5zcGVlZDtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLncpIHRoaXMudmVsb2NpdHkueiA9IC10aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkucykgdGhpcy52ZWxvY2l0eS56ID0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmEgfHwgZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmQpIHRoaXMudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS53IHx8IGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zKSB0aGlzLnZlbG9jaXR5LnogPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmIpIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5zZXRMaW5lYXJWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy52ZWxvY2l0eS5lcXVhbHMoY2MuVmVjMy5aRVJPKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGlyID0gdGhlIGRpcmVjdGlvbiB0aGF0IGNoYXJhY3RlciBzaG91bGQgZmFjZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyID0gdGhpcy52ZWxvY2l0eS5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRhcmdldFF1YXQgPSB0aGUgdGFyZ2V0IHJvdGF0aW9uIHF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgIC8vIGl0IGNhbiBtYWtlIHRoZSBjaGFyYWN0ZXIgZmFjZSB0aGUgZGlyZWN0aW9uIG9mIG1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRRdWF0ID0gbmV3IGNjLlF1YXQoKTtcclxuICAgICAgICAgICAgICAgIGNjLlF1YXQuZnJvbVZpZXdVcCh0YXJnZXRRdWF0LCBkaXIsIGNjLlZlYzMuVVApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJvdGF0aW9uIHNtb290aFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFF1YXQgPSBuZXcgY2MuUXVhdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFJvdGF0aW9uKGN1cnJlbnRRdWF0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNtb290aGVkUXVhdCA9IG5ldyBjYy5RdWF0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy5RdWF0LnNsZXJwKHNtb290aGVkUXVhdCwgY3VycmVudFF1YXQsIHRhcmdldFF1YXQsIGR0ICogMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgc21vb3RoZWQgcm90YXRpb24gdG8gdGhlIG5vZGVcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbihzbW9vdGhlZFF1YXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZlaGljbGVOb2RlID0gY2MuZmluZChcInZlaGljbGUvZ2FyYmFnZS10cnVja1wiKTtcclxuICAgICAgICBpZiAodmVoaWNsZU5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdmVoaWNsZVBvcyA9IHZlaGljbGVOb2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh2ZWhpY2xlUG9zLnkgPCAtMi41KSB7XHJcbiAgICAgICAgICAgICAgICB2ZWhpY2xlTm9kZS5zZXRQb3NpdGlvbigtMC4wNjksIDAuMTUsIDAuNDQ2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==