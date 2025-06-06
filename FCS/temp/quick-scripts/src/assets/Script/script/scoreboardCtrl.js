"use strict";
cc._RF.push(module, 'c754aJApt5Cs5F3KkujCpRm', 'scoreboardCtrl');
// Script/script/scoreboardCtrl.ts

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
var Leaderboard = /** @class */ (function (_super) {
    __extends(Leaderboard, _super);
    function Leaderboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null; // 這是你放排行榜列的容器，拖 scoreboardCtrl 進來
        _this.itemPrefab = null; // 每筆資料的 prefab，例如 leaderboardItem
        _this.backButton = null; // 返回按鈕
        return _this;
    }
    Leaderboard.prototype.start = function () {
        this.loadLeaderboard();
        // 返回按鈕事件
        this.backButton.node.on("click", this.onBackButtonClicked, this);
    };
    Leaderboard.prototype.onBackButtonClicked = function () {
        // 返回主畫面或其他操作
        cc.director.loadScene("Menu"); // 假設主畫面的場景名稱是 MainMenu
    };
    Leaderboard.prototype.loadLeaderboard = function () {
        var _this = this;
        var db = firebase.database();
        var leaderboardRef = db.ref("scores")
            .orderByChild("score")
            .limitToLast(5); // 取最後5筆，因為 Firebase 預設是由小到大排序
        leaderboardRef.once("value", function (snapshot) {
            var data = snapshot.val();
            if (!data)
                return;
            // 排序成由高到低
            var ranking = Object.values(data).sort(function (a, b) { return b.score - a.score; });
            // 清除舊節點
            _this.content.removeAllChildren();
            // 顯示資料
            ranking.forEach(function (entry, index) {
                var item = cc.instantiate(_this.itemPrefab);
                item.active = true;
                // 取得內部 Label 元件並設定文字
                var label = item.getComponentInChildren(cc.Label);
                if (label) {
                    // username and score has space between them
                    label.string = index + 1 + ". " + entry.username + "  " + entry.score;
                }
                item.setPosition(0, -index * 60); // 每個項目間隔 60 像素
                _this.content.addChild(item);
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Leaderboard.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], Leaderboard.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Button)
    ], Leaderboard.prototype, "backButton", void 0);
    Leaderboard = __decorate([
        ccclass
    ], Leaderboard);
    return Leaderboard;
}(cc.Component));
exports.default = Leaderboard;

cc._RF.pop();