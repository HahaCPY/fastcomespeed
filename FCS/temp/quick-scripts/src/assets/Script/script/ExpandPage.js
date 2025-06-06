"use strict";
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