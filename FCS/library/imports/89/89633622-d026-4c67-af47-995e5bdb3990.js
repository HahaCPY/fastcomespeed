"use strict";
cc._RF.push(module, '89633Yi0CZMZ69HmV5b2zmQ', 'hintAnimation');
// Script/script/select/hintAnimation.ts

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
var hintAnimation = /** @class */ (function (_super) {
    __extends(hintAnimation, _super);
    function hintAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = 0;
        _this.keyScale = 0.01; // default scale
        return _this;
    }
    hintAnimation.prototype.onLoad = function () {
        this.node.scale = 0;
        this.node.active = false;
    };
    // small -> big
    hintAnimation.prototype.playShow = function () {
        this.node.active = true;
        cc.Tween.stopAllByTarget(this.node);
        this.node.scale = 0;
        cc.tween(this.node)
            .to(0.2, { scale: this.keyScale }, { easing: 'backOut' })
            .start();
        console.log("E show up!!");
    };
    // big -> small
    hintAnimation.prototype.playHide = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .to(0.2, { scale: 0 }, { easing: 'backIn' })
            .call(function () {
            _this.node.active = false;
        })
            .start();
    };
    hintAnimation.prototype.setKeyScale = function (stage) {
        this.stage = stage;
        switch (this.stage) {
            case 1:
                this.keyScale = 0.01;
                break;
            case 2:
                this.keyScale = 0.0125;
                break;
            case 3:
                this.keyScale = 0.006;
                break;
            default:
                this.keyScale = 0.01;
                break;
        }
    };
    hintAnimation = __decorate([
        ccclass
    ], hintAnimation);
    return hintAnimation;
}(cc.Component));
exports.default = hintAnimation;

cc._RF.pop();