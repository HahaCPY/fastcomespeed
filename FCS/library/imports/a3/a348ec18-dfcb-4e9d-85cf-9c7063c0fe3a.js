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
var PlayerAnimationController = /** @class */ (function (_super) {
    __extends(PlayerAnimationController, _super);
    function PlayerAnimationController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleGroupNode = null;
        _this.player1 = null;
        _this.player2 = null;
        _this.buttonGirl = null;
        _this.buttonGirl2 = null;
        _this.choosePlayerNode = null;
        return _this;
    }
    PlayerAnimationController_1 = PlayerAnimationController;
    PlayerAnimationController.prototype.start = function () {
        var _this = this;
        this.buttonGirl.node.on('click', function () {
            _this.assignCharIndex(0); // girl1
        }, this);
        this.buttonGirl2.node.on('click', function () {
            _this.assignCharIndex(1); // girl2
        }, this);
    };
    PlayerAnimationController.prototype.getSelectedPlayer = function () {
        if (this.choosePlayerNode.active === false) {
            return this.player1;
        }
        var toggles = this.toggleGroupNode.getComponentsInChildren(cc.Toggle);
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        return selectedIdx === 0 ? this.player1 : this.player2;
    };
    // ✅ 改這裡：根據選擇的玩家，記錄他選的角色，並切動畫
    PlayerAnimationController.prototype.assignCharIndex = function (index) {
        var player = this.getSelectedPlayer();
        if (player === this.player1) {
            PlayerAnimationController_1.player1CharIndex = index;
        }
        else {
            PlayerAnimationController_1.player2CharIndex = index;
        }
        var prefix = index === 0 ? "girl" : "girl2";
        this.changeAnimation(prefix + "_idle");
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
    var PlayerAnimationController_1;
    // ✅ 記錄 player1 / player2 各自的角色選擇
    PlayerAnimationController.player1CharIndex = 0; // 0 = girl1, 1 = girl2
    PlayerAnimationController.player2CharIndex = 1;
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
    PlayerAnimationController = PlayerAnimationController_1 = __decorate([
        ccclass
    ], PlayerAnimationController);
    return PlayerAnimationController;
}(cc.Component));
exports.default = PlayerAnimationController;

cc._RF.pop();