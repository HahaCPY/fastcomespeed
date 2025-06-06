"use strict";
cc._RF.push(module, 'e020aBolepIXan4LeAh3SiX', 'AutoSceneSwitcher');
// Script/script/AutoSceneSwitcher.ts

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
var AutoSceneSwitcher = /** @class */ (function (_super) {
    __extends(AutoSceneSwitcher, _super);
    function AutoSceneSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waitSeconds = 4;
        _this.targetScene = "Menu";
        _this.fadeNode = null; // 請指定一個全螢幕黑色Sprite節點，alpha=0
        return _this;
    }
    AutoSceneSwitcher.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.fadeAndSwitch();
        }, this.waitSeconds);
    };
    AutoSceneSwitcher.prototype.fadeAndSwitch = function () {
        var _this = this;
        if (this.fadeNode) {
            // 先確保遮罩可見且透明
            this.fadeNode.active = true;
            this.fadeNode.opacity = 0;
            cc.tween(this.fadeNode)
                .to(1, { opacity: 255 }) // 1秒淡出
                .call(function () {
                cc.director.loadScene(_this.targetScene);
            })
                .start();
        }
        else {
            cc.director.loadScene(this.targetScene);
        }
    };
    __decorate([
        property
    ], AutoSceneSwitcher.prototype, "waitSeconds", void 0);
    __decorate([
        property
    ], AutoSceneSwitcher.prototype, "targetScene", void 0);
    __decorate([
        property(cc.Node)
    ], AutoSceneSwitcher.prototype, "fadeNode", void 0);
    AutoSceneSwitcher = __decorate([
        ccclass
    ], AutoSceneSwitcher);
    return AutoSceneSwitcher;
}(cc.Component));
exports.default = AutoSceneSwitcher;

cc._RF.pop();