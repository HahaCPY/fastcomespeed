"use strict";
cc._RF.push(module, '1e36eDJejpBEKpG1o5PIgVg', 'PlayerModeWatcher');
// Script/script/PlayerModeWatcher.ts

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
var PlayerModeSelector_1 = require("./PlayerModeSelector");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerModeWatcher = /** @class */ (function (_super) {
    __extends(PlayerModeWatcher, _super);
    function PlayerModeWatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerModeWatcher.prototype.update = function () {
        // player_mode 為 1 時 unenable（隱藏），為 0 時 enable（顯示）
        this.node.active = PlayerModeSelector_1.default.player_mode === 0;
    };
    PlayerModeWatcher = __decorate([
        ccclass
    ], PlayerModeWatcher);
    return PlayerModeWatcher;
}(cc.Component));
exports.default = PlayerModeWatcher;

cc._RF.pop();