
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