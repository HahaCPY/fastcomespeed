"use strict";
cc._RF.push(module, '24435wrjCBF/6fJ8zyY5wjP', 'CameraAutoMove2D');
// Script/script/CameraAutoMove2D.ts

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
var CameraAutoMove2D = /** @class */ (function (_super) {
    __extends(CameraAutoMove2D, _super);
    function CameraAutoMove2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameraNode = null;
        _this.moveDuration = 5.0; // 攝影機移動所需秒數
        _this.rotateDuration = 3.0; // 攝影機旋轉所需秒數
        return _this;
    }
    CameraAutoMove2D.prototype.start = function () {
        this.moveCamera();
    };
    CameraAutoMove2D.prototype.moveCamera = function () {
        // 取得目前攝影機位置
        var startPos = this.cameraNode.position;
        var targetPos = new cc.Vec3(startPos.x, startPos.y, 3000);
        cc.tween(this.cameraNode)
            .to(this.moveDuration, { position: targetPos })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], CameraAutoMove2D.prototype, "cameraNode", void 0);
    __decorate([
        property
    ], CameraAutoMove2D.prototype, "moveDuration", void 0);
    __decorate([
        property
    ], CameraAutoMove2D.prototype, "rotateDuration", void 0);
    CameraAutoMove2D = __decorate([
        ccclass
    ], CameraAutoMove2D);
    return CameraAutoMove2D;
}(cc.Component));
exports.default = CameraAutoMove2D;

cc._RF.pop();