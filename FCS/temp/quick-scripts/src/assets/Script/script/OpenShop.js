"use strict";
cc._RF.push(module, '28e99itR19BcrP2D1EDaxIE', 'OpenShop');
// Script/script/OpenShop.ts

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
var MoveDownOnLoad = /** @class */ (function (_super) {
    __extends(MoveDownOnLoad, _super);
    function MoveDownOnLoad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // add a audio clip
        _this.opendoor = null;
        _this.opendoorAudioId = -1;
        return _this;
    }
    MoveDownOnLoad.prototype.onLoad = function () {
        var _this = this;
        this.node.setPosition(0, 0);
        this.moveDown();
        // play audio when the animation starts
        this.opendoorAudioId = cc.audioEngine.play(this.opendoor, false, 1.0);
        // after 6s, stop the opendoor audio
        this.scheduleOnce(function () {
            cc.audioEngine.stop(_this.opendoorAudioId);
        }, 6); // 假設動畫持續時間為 6 秒
    };
    // play audio when the animation starts, and audio stop when the animation ends
    MoveDownOnLoad.prototype.moveDown = function () {
        cc.tween(this.node)
            .to(6, { position: cc.v3(0, 400, 0) }) // z 設 0
            .start();
    };
    __decorate([
        property(cc.AudioClip)
    ], MoveDownOnLoad.prototype, "opendoor", void 0);
    MoveDownOnLoad = __decorate([
        ccclass
    ], MoveDownOnLoad);
    return MoveDownOnLoad;
}(cc.Component));
exports.default = MoveDownOnLoad;

cc._RF.pop();