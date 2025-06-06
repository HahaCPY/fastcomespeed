
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/GamepadControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00044YejV5CopjyAHjis/Qj', 'GamepadControls');
// Script/Player/GamepadControls.ts

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
var GamepadCharacterControl = /** @class */ (function (_super) {
    __extends(GamepadCharacterControl, _super);
    function GamepadCharacterControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        return _this;
    }
    GamepadCharacterControl.prototype.update = function (dt) {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        var gp = gamepads[0]; // 只取第一個搖桿（玩家1）
        if (!gp)
            return;
        var axisX = gp.axes[0]; // 左搖桿水平軸（-1 左, 1 右）
        var axisY = gp.axes[1]; // 左搖桿垂直軸（-1 上, 1 下）
        // 若搖桿位移小於死區，視為靜止
        var deadZone = 0.2;
        var moveX = Math.abs(axisX) > deadZone ? axisX : 0;
        var moveY = Math.abs(axisY) > deadZone ? axisY : 0;
        var dx = moveX * this.speed * dt;
        var dy = -moveY * this.speed * dt; // 注意 Y 軸方向相反
        this.node.x += dx;
        this.node.y += dy;
        // 可選：翻轉角色方向
        if (Math.abs(moveX) > 0.1) {
            this.node.scaleX = moveX > 0 ? 1 : -1;
        }
    };
    __decorate([
        property
    ], GamepadCharacterControl.prototype, "speed", void 0);
    GamepadCharacterControl = __decorate([
        ccclass
    ], GamepadCharacterControl);
    return GamepadCharacterControl;
}(cc.Component));
exports.default = GamepadCharacterControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL0dhbWVwYWRDb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQTZCQztRQTNCRyxXQUFLLEdBQVcsR0FBRyxDQUFDOztJQTJCeEIsQ0FBQztJQXpCRyx3Q0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXRFLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDdkMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1FBRWhCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDOUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUU5QyxpQkFBaUI7UUFDakIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckQsSUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsYUFBYTtRQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxCLFlBQVk7UUFDWixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBMUJEO1FBREMsUUFBUTswREFDVztJQUZILHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBNkIzQztJQUFELDhCQUFDO0NBN0JELEFBNkJDLENBN0JvRCxFQUFFLENBQUMsU0FBUyxHQTZCaEU7a0JBN0JvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBhZENoYXJhY3RlckNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBnYW1lcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcyA/IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpIDogW107XG5cbiAgICAgICAgY29uc3QgZ3AgPSBnYW1lcGFkc1swXTsgLy8g5Y+q5Y+W56ys5LiA5YCL5pCW5qG/77yI546p5a62Me+8iVxuICAgICAgICBpZiAoIWdwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgYXhpc1ggPSBncC5heGVzWzBdOyAvLyDlt6bmkJbmob/msLTlubPou7jvvIgtMSDlt6YsIDEg5Y+z77yJXG4gICAgICAgIGNvbnN0IGF4aXNZID0gZ3AuYXhlc1sxXTsgLy8g5bem5pCW5qG/5Z6C55u06Lu477yILTEg5LiKLCAxIOS4i++8iVxuXG4gICAgICAgIC8vIOiLpeaQluahv+S9jeenu+Wwj+aWvOatu+WNgO+8jOimlueCuumdnOatolxuICAgICAgICBjb25zdCBkZWFkWm9uZSA9IDAuMjtcbiAgICAgICAgY29uc3QgbW92ZVggPSBNYXRoLmFicyhheGlzWCkgPiBkZWFkWm9uZSA/IGF4aXNYIDogMDtcbiAgICAgICAgY29uc3QgbW92ZVkgPSBNYXRoLmFicyhheGlzWSkgPiBkZWFkWm9uZSA/IGF4aXNZIDogMDtcblxuICAgICAgICBjb25zdCBkeCA9IG1vdmVYICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICBjb25zdCBkeSA9IC1tb3ZlWSAqIHRoaXMuc3BlZWQgKiBkdDsgLy8g5rOo5oSPIFkg6Lu45pa55ZCR55u45Y+NXG5cbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZHg7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IGR5O1xuXG4gICAgICAgIC8vIOWPr+mBuO+8mue/u+i9ieinkuiJsuaWueWQkVxuICAgICAgICBpZiAoTWF0aC5hYnMobW92ZVgpID4gMC4xKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gbW92ZVggPiAwID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19