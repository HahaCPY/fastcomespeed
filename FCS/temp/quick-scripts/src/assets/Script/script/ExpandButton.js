"use strict";
cc._RF.push(module, 'd9222DM7tlGSJxp6TxFNNS4', 'ExpandButton');
// Script/script/ExpandButton.ts

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
var DropdownButton = /** @class */ (function (_super) {
    __extends(DropdownButton, _super);
    function DropdownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropdownMenu = null;
        _this.isExpanded = false;
        return _this;
    }
    DropdownButton.prototype.onLoad = function () {
        this.dropdownMenu.active = false;
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
    };
    DropdownButton.prototype.start = function () {
        // 确保菜单初始状态
        this.dropdownMenu.active = false;
    };
    DropdownButton.prototype.toggleMenu = function () {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.showMenu();
        }
        else {
            this.hideMenu();
        }
    };
    DropdownButton.prototype.showMenu = function () {
        this.dropdownMenu.active = true;
        // 添加淡入动画
        this.dropdownMenu.opacity = 0;
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 255 })
            .start();
        // 监听全局触摸
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    };
    DropdownButton.prototype.hideMenu = function () {
        var _this = this;
        // 添加淡出动画
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.dropdownMenu.active = false;
            cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, _this.onGlobalTouch, _this);
        })
            .start();
    };
    DropdownButton.prototype.onGlobalTouch = function (event) {
        var touchPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        if (!this.node.getBoundingBox().contains(touchPos)) {
            if (!this.dropdownMenu.active ||
                !this.dropdownMenu.getBoundingBox().contains(touchPos)) {
                this.isExpanded = false;
                this.hideMenu();
            }
        }
    };
    DropdownButton.prototype.onDestroy = function () {
        // 移除所有监听
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    };
    __decorate([
        property(cc.Node)
    ], DropdownButton.prototype, "dropdownMenu", void 0);
    DropdownButton = __decorate([
        ccclass
    ], DropdownButton);
    return DropdownButton;
}(cc.Component));
exports.default = DropdownButton;

cc._RF.pop();