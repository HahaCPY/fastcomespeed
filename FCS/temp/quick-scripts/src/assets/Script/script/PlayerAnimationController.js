"use strict";
cc._RF.push(module, 'a348ewY38tOnYXPnHBjwP46', 'PlayerAnimationController');
// Script/script/PlayerAnimationController.ts

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
var GameManager_level1_1 = require("./GameManager-level1");
var PlayerAnimationController = /** @class */ (function (_super) {
    __extends(PlayerAnimationController, _super);
    function PlayerAnimationController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleGroupNode = null; // 拖入 ToggleGroup 節點
        _this.player1 = null; // 拖入 player1 節點
        _this.player2 = null; // 拖入 player2 節點
        _this.buttonGirl = null; // 按鈕1（idle）
        _this.buttonGirl2 = null; // 按鈕2（run）
        _this.choosePlayerNode = null; // 拖入選擇玩家節點
        return _this;
    }
    PlayerAnimationController.prototype.start = function () {
        var _this = this;
        this.buttonGirl.node.on('click', function () {
            GameManager_level1_1.default.selectedCharIndex = 0;
            _this.changeAnimation('girl_idle');
        }, this);
        this.buttonGirl2.node.on('click', function () {
            GameManager_level1_1.default.selectedCharIndex = 1;
            _this.changeAnimation('girl2_idle');
        }, this);
    };
    PlayerAnimationController.prototype.getSelectedPlayer = function () {
        if (this.choosePlayerNode.active === false) {
            return this.player1;
        }
        // 取得 ToggleGroup 下所有 Toggle
        var toggles = this.toggleGroupNode.getComponentsInChildren(cc.Toggle);
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        // 根據選擇回傳 player1 或 player2
        if (selectedIdx === 0) {
            return this.player1;
        }
        else {
            return this.player2;
        }
    };
    PlayerAnimationController.prototype.changeAnimation = function (animName) {
        var player = this.getSelectedPlayer();
        if (!player)
            return;
        var anim = player.getComponent(cc.Animation);
        if (anim) {
            anim.play(animName);
        }
    };
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "toggleGroupNode", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "player1", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "player2", void 0);
    __decorate([
        property(cc.Button)
    ], PlayerAnimationController.prototype, "buttonGirl", void 0);
    __decorate([
        property(cc.Button)
    ], PlayerAnimationController.prototype, "buttonGirl2", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "choosePlayerNode", void 0);
    PlayerAnimationController = __decorate([
        ccclass
    ], PlayerAnimationController);
    return PlayerAnimationController;
}(cc.Component));
exports.default = PlayerAnimationController;

cc._RF.pop();