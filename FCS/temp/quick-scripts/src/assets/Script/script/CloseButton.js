"use strict";
cc._RF.push(module, '97e3an7XxlAkK98hmIpqpkU', 'CloseButton');
// Script/script/CloseButton.ts

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
var CloseButton = /** @class */ (function (_super) {
    __extends(CloseButton, _super);
    function CloseButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        return _this;
    }
    CloseButton.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.closeTarget, this);
    };
    CloseButton.prototype.closeTarget = function () {
        if (this.targetNode) {
            this.targetNode.active = false;
        }
    };
    CloseButton.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.closeTarget, this);
    };
    __decorate([
        property(cc.Node)
    ], CloseButton.prototype, "targetNode", void 0);
    CloseButton = __decorate([
        ccclass
    ], CloseButton);
    return CloseButton;
}(cc.Component));
exports.default = CloseButton;

cc._RF.pop();