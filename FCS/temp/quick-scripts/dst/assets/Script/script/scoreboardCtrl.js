
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/scoreboardCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNjb3JlYm9hcmRDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBd0RDO1FBdERHLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxrQ0FBa0M7UUFHM0QsZ0JBQVUsR0FBYyxJQUFJLENBQUMsQ0FBQyxrQ0FBa0M7UUFHaEUsZ0JBQVUsR0FBYyxJQUFJLENBQUMsQ0FBQyxPQUFPOztJQWdEekMsQ0FBQztJQTlDRywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLFNBQVM7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQseUNBQW1CLEdBQW5CO1FBQ0ksYUFBYTtRQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQXVCO0lBQzFELENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQUEsaUJBaUNDO1FBaENHLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQzthQUNsQyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQ3JCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtRQUVuRCxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7WUFDbEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFFbEIsVUFBVTtZQUNWLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1lBRWhGLFFBQVE7WUFDUixLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFakMsT0FBTztZQUNQLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVLEVBQUUsS0FBYTtnQkFDdEMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUVuQixxQkFBcUI7Z0JBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELElBQUksS0FBSyxFQUFFO29CQUNQLDRDQUE0QztvQkFDNUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLEdBQUcsQ0FBQyxVQUFLLEtBQUssQ0FBQyxRQUFRLFVBQUssS0FBSyxDQUFDLEtBQU8sQ0FBQztpQkFDcEU7Z0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlO2dCQUVqRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUztJQVJaLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3RC9CO0lBQUQsa0JBQUM7Q0F4REQsQUF3REMsQ0F4RHdDLEVBQUUsQ0FBQyxTQUFTLEdBd0RwRDtrQkF4RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyYm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDsgLy8g6YCZ5piv5L2g5pS+5o6S6KGM5qac5YiX55qE5a655Zmo77yM5ouWIHNjb3JlYm9hcmRDdHJsIOmAsuS+hlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsOyAvLyDmr4/nrYbos4fmlpnnmoQgcHJlZmFi77yM5L6L5aaCIGxlYWRlcmJvYXJkSXRlbVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBiYWNrQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsOyAvLyDov5Tlm57mjInpiJVcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRMZWFkZXJib2FyZCgpO1xyXG5cclxuICAgICAgICAvLyDov5Tlm57mjInpiJXkuovku7ZcclxuICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vbihcImNsaWNrXCIsIHRoaXMub25CYWNrQnV0dG9uQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrQnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgICAvLyDov5Tlm57kuLvnlavpnaLmiJblhbbku5bmk43kvZxcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNZW51XCIpOyAvLyDlgYfoqK3kuLvnlavpnaLnmoTloLTmma/lkI3nqLHmmK8gTWFpbk1lbnVcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGVhZGVyYm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IGxlYWRlcmJvYXJkUmVmID0gZGIucmVmKFwic2NvcmVzXCIpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5Q2hpbGQoXCJzY29yZVwiKVxyXG4gICAgICAgICAgICAubGltaXRUb0xhc3QoNSk7IC8vIOWPluacgOW+jDXnrYbvvIzlm6DngrogRmlyZWJhc2Ug6aCQ6Kit5piv55Sx5bCP5Yiw5aSn5o6S5bqPXHJcblxyXG4gICAgICAgIGxlYWRlcmJvYXJkUmVmLm9uY2UoXCJ2YWx1ZVwiLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIC8vIOaOkuW6j+aIkOeUsemrmOWIsOS9jlxyXG4gICAgICAgICAgICBjb25zdCByYW5raW5nID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xyXG5cclxuICAgICAgICAgICAgLy8g5riF6Zmk6IiK56+A6bueXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgLy8g6aGv56S66LOH5paZXHJcbiAgICAgICAgICAgIHJhbmtpbmcuZm9yRWFjaCgoZW50cnk6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5Y+W5b6X5YWn6YOoIExhYmVsIOWFg+S7tuS4puioreWumuaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlcm5hbWUgYW5kIHNjb3JlIGhhcyBzcGFjZSBiZXR3ZWVuIHRoZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBgJHtpbmRleCArIDF9LiAke2VudHJ5LnVzZXJuYW1lfSAgJHtlbnRyeS5zY29yZX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oMCwgLWluZGV4ICogNjApOyAvLyDmr4/lgIvpoIXnm67plpPpmpQgNjAg5YOP57SgXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=