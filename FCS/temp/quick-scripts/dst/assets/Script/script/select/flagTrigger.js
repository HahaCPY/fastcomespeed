
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcZmxhZ1RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscURBQWdEO0FBR2hEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNEdDO1FBMUdHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isb0RBQW9EO1FBRXBELGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBR3pDLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBRSwrQ0FBK0M7UUFFM0Qsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZ0JBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUF3RjVDLENBQUM7SUF0RkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUU1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXBFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNKO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7U0FDSjtJQUNMLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBNkI7UUFBdkMsaUJBdUNDO1FBdENHLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXhCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRSx5QkFBZSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBRTNCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDOUMsSUFBTSxVQUFVLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztvQkFDbkUsT0FBTztpQkFDVjtxQkFDSTtvQkFDRCxVQUFVLENBQUMsY0FBYyxDQUFDO3dCQUN0QixRQUFRLEtBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ2hCLEtBQUssQ0FBQztnQ0FDRiwyREFBMkQ7Z0NBQzNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0NBQ3pDLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUNyQyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDOUIsTUFBTTs0QkFDVjtnQ0FDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDckMsTUFBTTt5QkFDYjtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBekdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUztJQUk3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUN1QjtJQUd6QztRQURDLFFBQVE7d0RBQ3FCO0lBRzlCO1FBREMsUUFBUTs4Q0FDUztJQWZELFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Ry9CO0lBQUQsa0JBQUM7Q0E1R0QsQUE0R0MsQ0E1R3dDLEVBQUUsQ0FBQyxTQUFTLEdBNEdwRDtrQkE1R29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgUG9zaXRpb25NYW5hZ2VyIGZyb20gXCIuL1Bvc2l0aW9uTWFuYWdlclwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhZ1RyaWdnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB2ZWhpY2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgaGludFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyB1c2UgVmVjMyBpcyBiZXR0ZXIgdGhhbiBWZWMyIGZvciAzRCBjb21wYXRpYmlsaXR5XHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMylcclxuICAgIGhpbnRPZmZzZXQ6IGNjLlZlYzMgPSBjYy52MygwLjgsIDAuMSwgMCk7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0cmlnZ2VyRGlzdGFuY2U6IG51bWJlciA9IDAuNztcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG5vd0luOiBudW1iZXIgPSAwOyAgLy8gaW5kaWNhdGUgdGhlIGN1cnJlbnQgc3RhZ2UgbnVtYmVyIHdlIHN0ZXAgb25cclxuXHJcbiAgICBwcml2YXRlIGhpbnRJbnN0YW5jZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGhpbnRTY3JpcHQ6IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGluUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNMb2FkaW5nU2NlbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhpbnRQcmVmYWIpIHtcclxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmhpbnRQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5oaW50SW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2Uuc2V0UG9zaXRpb24odGhpcy5oaW50T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGludEluc3RhbmNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhpbnRJbnN0YW5jZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhpbnRTY3JpcHQgPSB0aGlzLmhpbnRJbnN0YW5jZS5nZXRDb21wb25lbnQoXCJoaW50QW5pbWF0aW9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpbnRTY3JpcHQuc2V0S2V5U2NhbGUodGhpcy5ub3dJbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudmVoaWNsZSB8fCAhdGhpcy5oaW50SW5zdGFuY2UgfHwgIXRoaXMuaGludFNjcmlwdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NBID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgcG9zQiA9IHRoaXMudmVoaWNsZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBwb3NBLnN1YnRyYWN0KHBvc0IpLm1hZygpO1xyXG5cclxuICAgICAgICBpZiAoZGlzdCA8IHRoaXMudHJpZ2dlckRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpbnRJbnN0YW5jZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0LnBsYXlTaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5SYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0LnBsYXlIaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluUmFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBpZiAodGhpcy5pblJhbmdlICYmIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImtleSBFIHByZXNzZWRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IHRoaXMudmVoaWNsZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICAgICAgUG9zaXRpb25NYW5hZ2VyLnNhdmVQb3NpdGlvbihsb2NhbFBvcy5jbG9uZSgpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmdTY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFza05vZGUgPSBjYy5maW5kKFwiTWFpbkNhbWVyYS9tYXNrM0RcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXNrU2NyaXB0ID0gbWFza05vZGU/LmdldENvbXBvbmVudChcIm1hc2tUcmFuc2l0aW9uM0RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXNrU2NyaXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIG1hc2tUcmFuc2l0aW9uIHNjcmlwdCBub3QgZm91bmQgb24gbWFzazNEIG5vZGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tTY3JpcHQucGxheVRyYW5zaXRpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMubm93SW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGFkZCBcInNlbGVjdC9cIiBzaW5jZSBpdCdzIHdoYXQgYnVpbGQgc2V0dGluZ3MgdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaWNlLWNyZWFtLWNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBpenphLWNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm93SW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm93SW47XHJcbiAgICB9XHJcbn1cclxuIl19