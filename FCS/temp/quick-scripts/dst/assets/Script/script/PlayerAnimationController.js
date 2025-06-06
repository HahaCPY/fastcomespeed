
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
var GameManager_level1_1 = require("./GameManager-level1");
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
        this.buttonGirl.node.on('click', function () {
            GameManager_level1_1.default.selectedCharIndex = 0;
            _this.changeAnimation('girl_idle');
        }, this);
        this.buttonGirl2.node.on('click', function () {
            GameManager_level1_1.default.selectedCharIndex = 1;
            _this.changeAnimation('girl2_idle');
        }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L1BsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsMkRBQStDO0FBRy9DO0lBQXVELDZDQUFZO0lBQW5FO1FBQUEscUVBdURDO1FBckRHLHFCQUFlLEdBQVksSUFBSSxDQUFDLENBQUMsb0JBQW9CO1FBR3JELGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7UUFHekMsYUFBTyxHQUFZLElBQUksQ0FBQyxDQUFDLGdCQUFnQjtRQUd6QyxnQkFBVSxHQUFjLElBQUksQ0FBQyxDQUFDLFlBQVk7UUFHMUMsaUJBQVcsR0FBYyxJQUFJLENBQUMsQ0FBQyxXQUFXO1FBRzFDLHNCQUFnQixHQUFZLElBQUksQ0FBQyxDQUFDLFdBQVc7O0lBc0NqRCxDQUFDO0lBcENHLHlDQUFLLEdBQUw7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDN0IsNEJBQVcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzlCLDRCQUFXLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUdELHFEQUFpQixHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBQ0QsNEJBQTRCO1FBQzVCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ3hELDJCQUEyQjtRQUMzQixJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsbURBQWUsR0FBZixVQUFnQixRQUFnQjtRQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NFQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lFQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0VBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1RUFDZTtJQWpCaEIseUJBQXlCO1FBRDdDLE9BQU87T0FDYSx5QkFBeUIsQ0F1RDdDO0lBQUQsZ0NBQUM7Q0F2REQsQUF1REMsQ0F2RHNELEVBQUUsQ0FBQyxTQUFTLEdBdURsRTtrQkF2RG9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXItbGV2ZWwxXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBbmltYXRpb25Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b2dnbGVHcm91cE5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyDmi5blhaUgVG9nZ2xlR3JvdXAg56+A6bueXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF5ZXIxOiBjYy5Ob2RlID0gbnVsbDsgLy8g5ouW5YWlIHBsYXllcjEg56+A6bueXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF5ZXIyOiBjYy5Ob2RlID0gbnVsbDsgLy8g5ouW5YWlIHBsYXllcjIg56+A6bueXG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbkdpcmw6IGNjLkJ1dHRvbiA9IG51bGw7IC8vIOaMiemIlTHvvIhpZGxl77yJXG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbkdpcmwyOiBjYy5CdXR0b24gPSBudWxsOyAvLyDmjInpiJUy77yIcnVu77yJXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaG9vc2VQbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDsgLy8g5ouW5YWl6YG45pOH546p5a6256+A6bueXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5idXR0b25HaXJsLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIuc2VsZWN0ZWRDaGFySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb24oJ2dpcmxfaWRsZScpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbkdpcmwyLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIuc2VsZWN0ZWRDaGFySW5kZXggPSAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb24oJ2dpcmwyX2lkbGUnKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG5cbiAgICBnZXRTZWxlY3RlZFBsYXllcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYodGhpcy5jaG9vc2VQbGF5ZXJOb2RlLmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcjE7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+W5b6XIFRvZ2dsZUdyb3VwIOS4i+aJgOaciSBUb2dnbGVcbiAgICAgICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMudG9nZ2xlR3JvdXBOb2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlRvZ2dsZSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWR4ID0gdG9nZ2xlcy5maW5kSW5kZXgodCA9PiB0LmlzQ2hlY2tlZCk7XG4gICAgICAgIC8vIOagueaTmumBuOaTh+WbnuWCsyBwbGF5ZXIxIOaIliBwbGF5ZXIyXG4gICAgICAgIGlmIChzZWxlY3RlZElkeCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcjI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VBbmltYXRpb24oYW5pbU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdldFNlbGVjdGVkUGxheWVyKCk7XG4gICAgICAgIGlmICghcGxheWVyKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGFuaW0gPSBwbGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGlmIChhbmltKSB7XG4gICAgICAgICAgICBhbmltLnBsYXkoYW5pbU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==