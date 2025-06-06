
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC92ZWhpY2xlQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxxREFBZ0Q7QUFHaEQ7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUErRUM7UUE3RUcsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLFFBQUUsR0FBbUIsSUFBSSxDQUFDO1FBOEIxQixjQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztJQTZDL0IsQ0FBQztJQXpFRyxvQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssTUFBTSxDQUFDO1FBRXBFLGdEQUFnRDtRQUNoRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25FLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IseUJBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUVELDhCQUE4QjtRQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFT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VSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFaEQsMkJBQTJCO2dCQUMzQixJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLElBQU0sWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRTlELHdDQUF3QztnQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkM7U0FDSjtRQUNELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyRCxJQUFJLFdBQVcsRUFBRTtZQUNiLElBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hEO1NBQ0o7SUFDTCxDQUFDO0lBNUVEO1FBREMsUUFBUTtzREFDUztJQUZELG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBK0V2QztJQUFELDBCQUFDO0NBL0VELEFBK0VDLENBL0VnRCxFQUFFLENBQUMsU0FBUyxHQStFNUQ7a0JBL0VvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IFBvc2l0aW9uTWFuYWdlciBmcm9tIFwiLi9Qb3NpdGlvbk1hbmFnZXJcIjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAzO1xuXG4gICAgcHJpdmF0ZSByYjogY2MuUmlnaWRCb2R5M0QgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5M0QpO1xuXG4gICAgICAgIGNvbnN0IGZyb21NZW51ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZnJvbU1lbnVcIikgPT09IFwidHJ1ZVwiO1xuXG4gICAgICAgIC8vIGlmIHRoZSBjaGFyYWN0ZXIgaGFzIGEgc2F2ZWQgcG9zaXRpb24sIHNldCBpdFxuICAgICAgICBjb25zdCBzYXZlZCA9IGZyb21NZW51ID8gbnVsbCA6IFBvc2l0aW9uTWFuYWdlci5nZXRTYXZlZFBvc2l0aW9uKCk7XG4gICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHNhdmVkKTtcbiAgICAgICAgICAgIFBvc2l0aW9uTWFuYWdlci5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUkVNRU1CRVIgVE8gUkVNT1ZFIFRIRSBGTEFHXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZyb21NZW51XCIpO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlcidzIGZvcndhcmQ6IFwiLCB0aGlzLm5vZGUuZm9yd2FyZCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmVsb2NpdHkgPSBjYy52MygpO1xuXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5hKSB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5zcGVlZDtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5kKSB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLnNwZWVkO1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLncpIHRoaXMudmVsb2NpdHkueiA9IC10aGlzLnNwZWVkO1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnMpIHRoaXMudmVsb2NpdHkueiA9IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYSB8fCBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZCkgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS53IHx8IGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zKSB0aGlzLnZlbG9jaXR5LnogPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJiKSB7XG4gICAgICAgICAgICB0aGlzLnJiLnNldExpbmVhclZlbG9jaXR5KHRoaXMudmVsb2NpdHkpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudmVsb2NpdHkuZXF1YWxzKGNjLlZlYzMuWkVSTykpIHtcbiAgICAgICAgICAgICAgICAvLyBkaXIgPSB0aGUgZGlyZWN0aW9uIHRoYXQgY2hhcmFjdGVyIHNob3VsZCBmYWNlXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyID0gdGhpcy52ZWxvY2l0eS5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0UXVhdCA9IHRoZSB0YXJnZXQgcm90YXRpb24gcXVhdGVybmlvblxuICAgICAgICAgICAgICAgIC8vIGl0IGNhbiBtYWtlIHRoZSBjaGFyYWN0ZXIgZmFjZSB0aGUgZGlyZWN0aW9uIG9mIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UXVhdCA9IG5ldyBjYy5RdWF0KCk7XG4gICAgICAgICAgICAgICAgY2MuUXVhdC5mcm9tVmlld1VwKHRhcmdldFF1YXQsIGRpciwgY2MuVmVjMy5VUCk7XG5cbiAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSByb3RhdGlvbiBzbW9vdGhcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UXVhdCA9IG5ldyBjYy5RdWF0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFJvdGF0aW9uKGN1cnJlbnRRdWF0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbW9vdGhlZFF1YXQgPSBuZXcgY2MuUXVhdCgpO1xuICAgICAgICAgICAgICAgIGNjLlF1YXQuc2xlcnAoc21vb3RoZWRRdWF0LCBjdXJyZW50UXVhdCwgdGFyZ2V0UXVhdCwgZHQgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHNtb290aGVkIHJvdGF0aW9uIHRvIHRoZSBub2RlXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHNtb290aGVkUXVhdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmVoaWNsZU5vZGUgPSBjYy5maW5kKFwidmVoaWNsZS9nYXJiYWdlLXRydWNrXCIpO1xuICAgICAgICBpZiAodmVoaWNsZU5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlaGljbGVQb3MgPSB2ZWhpY2xlTm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgaWYgKHZlaGljbGVQb3MueSA8IC0yLjUpIHtcbiAgICAgICAgICAgICAgICB2ZWhpY2xlTm9kZS5zZXRQb3NpdGlvbigtMC4wNjksIDAuMTUsIDAuNDQ2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=