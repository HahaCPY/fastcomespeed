
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGF1c2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkNDO1FBekNHLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQVksS0FBSyxDQUFDOztJQXNDdEMsQ0FBQztJQXBDRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsS0FBNkI7UUFDbkMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9CLFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztTQUM3QjthQUFNO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUs7U0FDOUI7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4RSxDQUFDO0lBRU0sbUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNlO0lBRmxCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyQ2hDO0lBQUQsbUJBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBMkNyRDtrQkEzQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF1c2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBhdXNlUGFuZWxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBhdXNlUGFuZWxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlUGFuZWxQcmVmYWIpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VQYW5lbE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhdXNlUGFuZWxQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMucGF1c2VQYW5lbE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZVBhbmVsTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcblxuICAgICAgICAvLyDmlrDlop7pgJnkuIDmrrVcbiAgICAgICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7IC8vIOaaq+WBnFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7IC8vIOaBouW+qVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGF1c2VQYW5lbE5vZGUpIHRoaXMucGF1c2VQYW5lbE5vZGUuYWN0aXZlID0gdGhpcy5pc1BhdXNlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNHYW1lUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1BhdXNlZDtcbiAgICB9XG59XG4iXX0=