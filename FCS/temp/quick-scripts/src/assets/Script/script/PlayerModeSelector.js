"use strict";
cc._RF.push(module, 'aefe3x7WwFOkYl5ZGP0jnzm', 'PlayerModeSelector');
// Script/script/PlayerModeSelector.ts

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
var PlayerModeSelector = /** @class */ (function (_super) {
    __extends(PlayerModeSelector, _super);
    function PlayerModeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.char_select = null;
        return _this;
    }
    PlayerModeSelector_1 = PlayerModeSelector;
    PlayerModeSelector.prototype.onLoad = function () {
        PlayerModeSelector_1.player_mode = 0;
        this.player.active = false; // 隱藏 player 節點
        this.char_select.active = false;
    };
    // 這個函式直接設為 ToggleGroup 的 checkEvents
    PlayerModeSelector.prototype.onToggleGroupChanged = function (toggle) {
        //console.log("ToggleGroup changed:", toggle);
        // 取得 ToggleGroup 下所有 Toggle
        var toggles = this.node.getComponentsInChildren(cc.Toggle);
        // 找到目前被選中的 Toggle
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        // 你要的是：toggle 0 或 2 被選中時，player_mode = 1
        if (selectedIdx === 0) {
            PlayerModeSelector_1.player_mode = 0;
            console.log("選擇了單人模式");
            this.player.active = false; // 隱藏 player 節點
            this.char_select.active = false; // 顯示 char_select 節點
        }
        else {
            PlayerModeSelector_1.player_mode = 1;
            this.player.active = true; // 顯示 player 節點
            this.char_select.active = true; // 隱藏 char_select 節點
            console.log("PlayerModeSelector.player_mode = 0");
        }
        cc.log("player_mode:", PlayerModeSelector_1.player_mode);
    };
    var PlayerModeSelector_1;
    // 全域變數
    PlayerModeSelector.player_mode = 0;
    __decorate([
        property(cc.Node)
    ], PlayerModeSelector.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerModeSelector.prototype, "char_select", void 0);
    PlayerModeSelector = PlayerModeSelector_1 = __decorate([
        ccclass
    ], PlayerModeSelector);
    return PlayerModeSelector;
}(cc.Component));
exports.default = PlayerModeSelector;

cc._RF.pop();