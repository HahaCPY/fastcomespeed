
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC9mbGFnVHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxxREFBZ0Q7QUFHaEQ7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEyR0M7UUF6R0csYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixvREFBb0Q7UUFFcEQsZ0JBQVUsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHekMscUJBQWUsR0FBVyxHQUFHLENBQUM7UUFHOUIsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFFLCtDQUErQztRQUUzRCxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixnQkFBVSxHQUFRLElBQUksQ0FBQztRQUN2QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLG9CQUFjLEdBQVksS0FBSyxDQUFDOztJQXVGNUMsQ0FBQztJQXJGRyw0QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFFcEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0o7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUF2QyxpQkFzQ0M7UUFyQ0csSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xELEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLHlCQUFlLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFFM0IsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUM5QyxJQUFNLFVBQVUsR0FBRyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBRTlELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO29CQUNuRSxPQUFPO2lCQUNWO3FCQUNJO29CQUNELFVBQVUsQ0FBQyxjQUFjLENBQUM7d0JBQ3RCLFFBQVEsS0FBSSxDQUFDLEtBQUssRUFBRTs0QkFDaEIsS0FBSyxDQUFDO2dDQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0NBQ3pDLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUNyQyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDOUIsTUFBTTs0QkFDVjtnQ0FDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDckMsTUFBTTt5QkFDYjtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBeEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUztJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUN1QjtJQUd6QztRQURDLFFBQVE7d0RBQ3FCO0lBRzlCO1FBREMsUUFBUTs4Q0FDUztJQWZELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyRy9CO0lBQUQsa0JBQUM7Q0EzR0QsQUEyR0MsQ0EzR3dDLEVBQUUsQ0FBQyxTQUFTLEdBMkdwRDtrQkEzR29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IFBvc2l0aW9uTWFuYWdlciBmcm9tIFwiLi9Qb3NpdGlvbk1hbmFnZXJcIjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYWdUcmlnZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB2ZWhpY2xlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaGludFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIHVzZSBWZWMzIGlzIGJldHRlciB0aGFuIFZlYzIgZm9yIDNEIGNvbXBhdGliaWxpdHlcbiAgICBAcHJvcGVydHkoY2MuVmVjMylcbiAgICBoaW50T2Zmc2V0OiBjYy5WZWMzID0gY2MudjMoMC44LCAwLjEsIDApO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdHJpZ2dlckRpc3RhbmNlOiBudW1iZXIgPSAwLjc7XG5cbiAgICBAcHJvcGVydHlcbiAgICBub3dJbjogbnVtYmVyID0gMDsgIC8vIGluZGljYXRlIHRoZSBjdXJyZW50IHN0YWdlIG51bWJlciB3ZSBzdGVwIG9uXG5cbiAgICBwcml2YXRlIGhpbnRJbnN0YW5jZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBoaW50U2NyaXB0OiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgaW5SYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNMb2FkaW5nU2NlbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGludFByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhpbnRQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuaGludEluc3RhbmNlKTtcblxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2Uuc2V0UG9zaXRpb24odGhpcy5oaW50T2Zmc2V0KTtcblxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhpbnRJbnN0YW5jZS5zY2FsZSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuaGludFNjcmlwdCA9IHRoaXMuaGludEluc3RhbmNlLmdldENvbXBvbmVudChcImhpbnRBbmltYXRpb25cIik7XG4gICAgICAgICAgICB0aGlzLmhpbnRTY3JpcHQuc2V0S2V5U2NhbGUodGhpcy5ub3dJbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMudmVoaWNsZSB8fCAhdGhpcy5oaW50SW5zdGFuY2UgfHwgIXRoaXMuaGludFNjcmlwdCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHBvc0EgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgcG9zQiA9IHRoaXMudmVoaWNsZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBkaXN0ID0gcG9zQS5zdWJ0cmFjdChwb3NCKS5tYWcoKTtcblxuICAgICAgICBpZiAoZGlzdCA8IHRoaXMudHJpZ2dlckRpc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGludEluc3RhbmNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0LnBsYXlTaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpbnRTY3JpcHQucGxheUhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluUmFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBpZiAodGhpcy5pblJhbmdlICYmIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJrZXkgRSBwcmVzc2VkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IHRoaXMudmVoaWNsZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICBQb3NpdGlvbk1hbmFnZXIuc2F2ZVBvc2l0aW9uKGxvY2FsUG9zLmNsb25lKCkpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hc2tOb2RlID0gY2MuZmluZChcIk1haW5DYW1lcmEvbWFzazNEXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hc2tTY3JpcHQgPSBtYXNrTm9kZT8uZ2V0Q29tcG9uZW50KFwibWFza1RyYW5zaXRpb24zRFwiKTtcblxuICAgICAgICAgICAgICAgIGlmICghbWFza1NjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8gbWFza1RyYW5zaXRpb24gc2NyaXB0IG5vdCBmb3VuZCBvbiBtYXNrM0Qgbm9kZSFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tTY3JpcHQucGxheVRyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLm5vd0luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpY2UtY3JlYW0tY2hlY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicGl6emEtY2hlY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWVudVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2VsZWN0U2NlbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb3dJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm93SW47XG4gICAgfVxufVxuIl19