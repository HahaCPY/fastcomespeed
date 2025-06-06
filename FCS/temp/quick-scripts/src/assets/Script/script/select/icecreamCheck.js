"use strict";
cc._RF.push(module, 'ff471ddThpIbaIeMmFb8m4E', 'icecreamCheck');
// Script/script/select/icecreamCheck.ts

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
var Stage1CheckUI = /** @class */ (function (_super) {
    __extends(Stage1CheckUI, _super);
    function Stage1CheckUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.backButton = null;
        _this.black = null;
        _this.mask = null;
        return _this;
    }
    Stage1CheckUI.prototype.onLoad = function () {
        if (this.startButton) {
            this.startButton.node.on('click', this.onStartClick, this);
        }
        if (this.backButton) {
            this.backButton.node.on('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.start = function () {
        var _this = this;
        // black sprite active 0.5s and dissapear
        // don't fade out, just set active to false
        if (this.black) {
            this.black.node.active = true;
            this.scheduleOnce(function () {
                _this.black.node.active = false;
            }, 0.5);
        }
        // wait 0.5s, mask sprite active
        // and, it will transmit from position(0, 0) to (159.748, -798.741), from scale (1, 1) to (100, 50) in 0.8s
        this.scheduleOnce(function () {
            if (_this.mask) {
                _this.mask.node.active = true;
                cc.tween(_this.mask.node)
                    .to(0.8, { position: cc.v3(91.285, -1255.166), scaleX: 80, scaleY: 80 })
                    .call(function () {
                    _this.mask.node.active = false; // after transition, set active to false
                })
                    .start();
            }
        }, 0.5);
    };
    Stage1CheckUI.prototype.onDestroy = function () {
        if (this.startButton && this.startButton.node) {
            this.startButton.node.off('click', this.onStartClick, this);
        }
        if (this.backButton && this.backButton.node) {
            this.backButton.node.off('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.onStartClick = function () {
        console.log("start-btn pressed！");
        cc.director.loadScene("level-1");
    };
    Stage1CheckUI.prototype.onBackClick = function () {
        console.log("back-btn pressed！");
        cc.director.loadScene("selectScene");
    };
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "startButton", void 0);
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "backButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "black", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "mask", void 0);
    Stage1CheckUI = __decorate([
        ccclass
    ], Stage1CheckUI);
    return Stage1CheckUI;
}(cc.Component));
exports.default = Stage1CheckUI;

cc._RF.pop();