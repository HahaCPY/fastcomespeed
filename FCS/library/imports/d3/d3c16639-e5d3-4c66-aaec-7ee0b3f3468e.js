"use strict";
cc._RF.push(module, 'd3c16Y55dNMZqrsfuCz80aO', 'GameManager-level1');
// Script/script/GameManager-level1.ts

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
var PlayerModeSelector_1 = require("./PlayerModeSelector");
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.girl1Prefab = null;
        _this.girl2Prefab = null;
        _this.spawnPoint1 = null;
        _this.spawnPoint2 = null;
        return _this;
    }
    GameManager_1 = GameManager;
    GameManager.prototype.start = function () {
        // ✅ 開啟物理系統
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        // ✅ 關閉重力（設成 0）
        cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
        this.spawnPlayers();
    };
    GameManager.prototype.spawnPlayers = function () {
        var playerCount = PlayerModeSelector_1.default.player_mode;
        var charIndex = GameManager_1.selectedCharIndex;
        var prefab = charIndex === 0 ? this.girl1Prefab : this.girl2Prefab;
        // Instantiate 玩家1
        var p1 = cc.instantiate(prefab);
        p1.setPosition(this.spawnPoint1.getPosition());
        this.node.addChild(p1);
        // Instantiate 玩家2（如果是雙人模式）
        if (playerCount === 1) {
            var p2 = cc.instantiate(prefab);
            p2.setPosition(this.spawnPoint2.getPosition());
            this.node.addChild(p2);
        }
    };
    var GameManager_1;
    // 存放選擇角色的 index（0: girl1, 1: girl2）
    GameManager.selectedCharIndex = 0;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "girl1Prefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "girl2Prefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "spawnPoint1", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "spawnPoint2", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();