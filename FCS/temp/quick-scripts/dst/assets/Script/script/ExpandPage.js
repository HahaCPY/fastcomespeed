
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/ExpandPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcf08e/VE9J3Ja2mgUVSEyE', 'ExpandPage');
// Script/script/ExpandPage.ts

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
// SimpleToggleButton.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleToggleButton = /** @class */ (function (_super) {
    __extends(SimpleToggleButton, _super);
    function SimpleToggleButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null; // 要控制的內容節點
        return _this;
    }
    SimpleToggleButton.prototype.onLoad = function () {
        // 初始狀態（可選）
        if (this.content) {
            this.content.active = false;
        }
        // 綁定按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleContent, this);
    };
    SimpleToggleButton.prototype.toggleContent = function () {
        if (this.content) {
            this.content.active = !this.content.active; // 切換顯示狀態
        }
    };
    SimpleToggleButton.prototype.onDestroy = function () {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleContent, this);
    };
    __decorate([
        property(cc.Node)
    ], SimpleToggleButton.prototype, "content", void 0);
    SimpleToggleButton = __decorate([
        ccclass
    ], SimpleToggleButton);
    return SimpleToggleButton;
}(cc.Component));
exports.default = SimpleToggleButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L0V4cGFuZFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCO0FBQ2xCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBd0JDO1FBdEJHLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxXQUFXOztJQXNCeEMsQ0FBQztJQXBCRyxtQ0FBTSxHQUFOO1FBQ0ksV0FBVztRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMvQjtRQUVELFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO1NBQ3hEO0lBQ0wsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDSSxTQUFTO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRlAsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F3QnRDO0lBQUQseUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QitDLEVBQUUsQ0FBQyxTQUFTLEdBd0IzRDtrQkF4Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpbXBsZVRvZ2dsZUJ1dHRvbi50c1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZVRvZ2dsZUJ1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7IC8vIOimgeaOp+WItueahOWFp+WuueevgOm7nlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDliJ3lp4vni4DmhYvvvIjlj6/pgbjvvIlcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDntoHlrprmjInpiJXpu57mk4rkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b2dnbGVDb250ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVDb250ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWN0aXZlID0gIXRoaXMuY29udGVudC5hY3RpdmU7IC8vIOWIh+aPm+mhr+ekuueLgOaFi1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyDnp7vpmaTkuovku7bnm6Pogb1cbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG9nZ2xlQ29udGVudCwgdGhpcyk7XG4gICAgfVxufSJdfQ==