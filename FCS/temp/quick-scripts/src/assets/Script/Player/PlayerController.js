"use strict";
cc._RF.push(module, '49d73Terv9CSKbbSOPEQgbT', 'PlayerController');
// Script/Player/PlayerController.ts

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
var KeyboardControls_1 = require("./KeyboardControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 200;
        _this.input = null;
        _this.currentAnim = "";
        _this.lastDir = cc.v2(0, -1); // 預設向下（前）
        return _this;
    }
    PlayerController.prototype.start = function () {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        if (!this.anim) {
            cc.error("⚠️ 找不到 Animation 組件！");
            return;
        }
        this.playAnim("girl_idle_back"); // 一開始播放背面靜止
        this.input = new KeyboardControls_1.KeyboardControls();
    };
    PlayerController.prototype.update = function (dt) {
        var dir = this.input.getMoveDirection();
        if (!dir.equals(cc.Vec2.ZERO)) {
            // 移動中
            var delta = dir.clone().normalize().mul(this.speed * dt);
            this.node.x += delta.x;
            this.node.y += delta.y;
            this.lastDir = dir.clone();
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                // 垂直移動
                if (dir.y > 0) {
                    this.playAnim("girl_walk_back"); // 向上（後）
                }
                else {
                    this.playAnim("girl_idle_walk"); // 向下（前）
                }
                this.node.scaleX = 1;
            }
            else {
                // 水平移動
                if (dir.x > 0) {
                    this.playAnim("girl_walk_right");
                    this.node.scaleX = 1;
                }
                else {
                    this.playAnim("girl_walk_left");
                    this.node.scaleX = 1;
                }
            }
        }
        else {
            // 停止移動
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                if (this.lastDir.y > 0) {
                    this.playAnim("girl_idle_back");
                }
                else {
                    this.playAnim("girl_idle");
                }
                this.node.scaleX = 1;
            }
            else {
                if (this.lastDir.x > 0) {
                    this.playAnim("girl_idle_right");
                    this.node.scaleX = 1;
                }
                else {
                    this.playAnim("girl_idle_left");
                    this.node.scaleX = 1;
                }
            }
        }
    };
    PlayerController.prototype.playAnim = function (name) {
        if (this.currentAnim === name)
            return;
        this.currentAnim = name;
        this.anim.play(name);
    };
    __decorate([
        property(cc.Animation)
    ], PlayerController.prototype, "anim", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "speed", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();