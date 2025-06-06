
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcZmxhZ1RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscURBQWdEO0FBR2hEO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMkdDO1FBekdHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isb0RBQW9EO1FBRXBELGdCQUFVLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBR3pDLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRzlCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBRSwrQ0FBK0M7UUFFM0Qsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZ0JBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUF1RjVDLENBQUM7SUFyRkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJ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LEVBQUU7NEJBQ2hCLEtBQUssQ0FBQztnQ0FDRixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dDQUN6QyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDckMsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzlCLE1BQU07NEJBQ1Y7Z0NBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQ3JDLE1BQU07eUJBQ2I7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQXhHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1M7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDdUI7SUFHekM7UUFEQyxRQUFRO3dEQUNxQjtJQUc5QjtRQURDLFFBQVE7OENBQ1M7SUFmRCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkcvQjtJQUFELGtCQUFDO0NBM0dELEFBMkdDLENBM0d3QyxFQUFFLENBQUMsU0FBUyxHQTJHcEQ7a0JBM0dvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IFBvc2l0aW9uTWFuYWdlciBmcm9tIFwiLi9Qb3NpdGlvbk1hbmFnZXJcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYWdUcmlnZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmVoaWNsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGhpbnRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gdXNlIFZlYzMgaXMgYmV0dGVyIHRoYW4gVmVjMiBmb3IgM0QgY29tcGF0aWJpbGl0eVxyXG4gICAgQHByb3BlcnR5KGNjLlZlYzMpXHJcbiAgICBoaW50T2Zmc2V0OiBjYy5WZWMzID0gY2MudjMoMC44LCAwLjEsIDApO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdHJpZ2dlckRpc3RhbmNlOiBudW1iZXIgPSAwLjc7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBub3dJbjogbnVtYmVyID0gMDsgIC8vIGluZGljYXRlIHRoZSBjdXJyZW50IHN0YWdlIG51bWJlciB3ZSBzdGVwIG9uXHJcblxyXG4gICAgcHJpdmF0ZSBoaW50SW5zdGFuY2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBoaW50U2NyaXB0OiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpblJhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZ1NjZW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oaW50UHJlZmFiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGludEluc3RhbmNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5oaW50UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuaGludEluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGludEluc3RhbmNlLnNldFBvc2l0aW9uKHRoaXMuaGludE9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhpbnRJbnN0YW5jZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2Uuc2NhbGUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0ID0gdGhpcy5oaW50SW5zdGFuY2UuZ2V0Q29tcG9uZW50KFwiaGludEFuaW1hdGlvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5oaW50U2NyaXB0LnNldEtleVNjYWxlKHRoaXMubm93SW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZlaGljbGUgfHwgIXRoaXMuaGludEluc3RhbmNlIHx8ICF0aGlzLmhpbnRTY3JpcHQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zQSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHBvc0IgPSB0aGlzLnZlaGljbGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gcG9zQS5zdWJ0cmFjdChwb3NCKS5tYWcoKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3QgPCB0aGlzLnRyaWdnZXJEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5SYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaW50SW5zdGFuY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGludFNjcmlwdC5wbGF5U2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pblJhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGludFNjcmlwdC5wbGF5SGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pblJhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5SYW5nZSAmJiBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJrZXkgRSBwcmVzc2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRQb3MgPSB0aGlzLnZlaGljbGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIFBvc2l0aW9uTWFuYWdlci5zYXZlUG9zaXRpb24obG9jYWxQb3MuY2xvbmUoKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nU2NlbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hc2tOb2RlID0gY2MuZmluZChcIk1haW5DYW1lcmEvbWFzazNEXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFza1NjcmlwdCA9IG1hc2tOb2RlPy5nZXRDb21wb25lbnQoXCJtYXNrVHJhbnNpdGlvbjNEXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWFza1NjcmlwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKaoO+4jyBtYXNrVHJhbnNpdGlvbiBzY3JpcHQgbm90IGZvdW5kIG9uIG1hc2szRCBub2RlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrU2NyaXB0LnBsYXlUcmFuc2l0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLm5vd0luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaWNlLWNyZWFtLWNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBpenphLWNoZWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm93SW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm93SW47XHJcbiAgICB9XHJcbn1cclxuIl19