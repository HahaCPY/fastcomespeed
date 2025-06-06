
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/GameManager-level1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEdhbWVNYW5hZ2VyLWxldmVsMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QywyREFBc0Q7QUFHdEQ7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2Q0M7UUEzQ0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBa0NoQyxDQUFDO29CQTdDb0IsV0FBVztJQWdCNUIsMkJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUdqRCxlQUFlO1FBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFZLEdBQVo7UUFDSSxJQUFNLFdBQVcsR0FBRyw0QkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBTSxTQUFTLEdBQUcsYUFBVyxDQUFDLGlCQUFpQixDQUFDO1FBRWhELElBQU0sTUFBTSxHQUFHLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFckUsa0JBQWtCO1FBQ2xCLElBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdkIsMkJBQTJCO1FBQzNCLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQzs7SUEvQkQsb0NBQW9DO0lBQ3RCLDZCQUFpQixHQUFXLENBQUMsQ0FBQztJQVo1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNVO0lBWFgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTZDL0I7SUFBRCxrQkFBQztDQTdDRCxBQTZDQyxDQTdDd0MsRUFBRSxDQUFDLFNBQVMsR0E2Q3BEO2tCQTdDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBQbGF5ZXJNb2RlU2VsZWN0b3IgZnJvbSBcIi4vUGxheWVyTW9kZVNlbGVjdG9yXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZ2lybDFQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdpcmwyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bhd25Qb2ludDE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3Bhd25Qb2ludDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOWtmOaUvumBuOaTh+inkuiJsueahCBpbmRleO+8iDA6IGdpcmwxLCAxOiBnaXJsMu+8iVxyXG4gICAgcHVibGljIHN0YXRpYyBzZWxlY3RlZENoYXJJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDinIUg6ZaL5ZWf54mp55CG57O757WxXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAvLyDinIUg6Zec6ZaJ6YeN5Yqb77yI6Kit5oiQIDDvvIlcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB0aGlzLnNwYXduUGxheWVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduUGxheWVycygpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb3VudCA9IFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZTtcclxuICAgICAgICBjb25zdCBjaGFySW5kZXggPSBHYW1lTWFuYWdlci5zZWxlY3RlZENoYXJJbmRleDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJlZmFiID0gY2hhckluZGV4ID09PSAwID8gdGhpcy5naXJsMVByZWZhYiA6IHRoaXMuZ2lybDJQcmVmYWI7XHJcblxyXG4gICAgICAgIC8vIEluc3RhbnRpYXRlIOeOqeWutjFcclxuICAgICAgICBjb25zdCBwMSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgcDEuc2V0UG9zaXRpb24odGhpcy5zcGF3blBvaW50MS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocDEpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YW50aWF0ZSDnjqnlrrYy77yI5aaC5p6c5piv6ZuZ5Lq65qih5byP77yJXHJcbiAgICAgICAgaWYgKHBsYXllckNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgcDIuc2V0UG9zaXRpb24odGhpcy5zcGF3blBvaW50Mi5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19