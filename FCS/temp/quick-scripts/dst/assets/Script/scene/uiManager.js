
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/uiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f834buWLXlIMIgzpwunUQfn', 'uiManager');
// Script/scene/uiManager.ts

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
var MenuBar = /** @class */ (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slots = [];
        _this.dishPrefabs = [];
        _this.timerLabel = null; // 拖拉倒數時間的 Label
        _this.scoreLabel = null; // 拖拉分數的 Label
        _this.totalTime = 60; // 總倒數秒數
        _this.dishesPerGame = 3; // 格子數
        _this.dishInterval = 5; // 每隔幾秒產生一個
        _this.bgm = null;
        _this.currentDishIdx = 0;
        _this.currentTime = 0;
        _this.score = 0; // 加這行
        return _this;
        // ===================================
    }
    MenuBar.prototype.start = function () {
        this.resetMenu();
        this.startGame();
        if (this.bgm) {
            cc.audioEngine.playMusic(this.bgm, true);
        }
    };
    /** 確保場上一直維持 4 道菜 */
    MenuBar.prototype.checkAndFillSlots = function () {
        var currentCount = this.slots.filter(function (slot) { return slot.children.length > 0; }).length;
        while (currentCount < this.slots.length) {
            this.generateNextDish();
            currentCount++;
        }
    };
    MenuBar.prototype.resetMenu = function () {
        for (var _i = 0, _a = this.slots; _i < _a.length; _i++) {
            var slot = _a[_i];
            slot.removeAllChildren();
        }
        this.currentDishIdx = 0;
        this.unschedule(this.generateNextDish);
        this.unschedule(this.countdownStep);
        this.setScore(0); // 分數歸零
    };
    MenuBar.prototype.startGame = function () {
        this.currentTime = this.totalTime;
        this.updateLabel();
        this.schedule(this.countdownStep, 1);
        this.generateNextDish();
        this.schedule(this.generateNextDish, this.dishInterval);
        this.setScore(0); // 遊戲開始分數歸零
    };
    MenuBar.prototype.countdownStep = function () {
        if (this.currentTime > 0) {
            this.currentTime--;
            this.updateLabel();
            if (this.currentTime === 0) {
                this.timeUp();
            }
        }
    };
    MenuBar.prototype.updateLabel = function () {
        this.timerLabel.string = this.formatTime(this.currentTime);
    };
    MenuBar.prototype.formatTime = function (sec) {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        return m + ":" + (s < 10 ? '0' : '') + s;
    };
    MenuBar.prototype.generateNextDish = function () {
        // 找第一個空的 slot
        var emptySlotIndex = this.slots.findIndex(function (slot) { return slot.children.length === 0; });
        if (emptySlotIndex === -1)
            return;
        var prefabIdx = Math.floor(Math.random() * this.dishPrefabs.length);
        var dish = cc.instantiate(this.dishPrefabs[prefabIdx]);
        // 初始位置在螢幕右外側（z 軸設 0）
        dish.setPosition(cc.v3(800, 0, 0)); // ✅ 改成 Vec3
        this.slots[emptySlotIndex].addChild(dish);
        // 動畫滑進 slot 中心（也是 Vec3）
        cc.tween(dish)
            .to(0.5, { position: cc.v3(0, 0, 0) }, { easing: 'cubicOut' }) // ✅ Vec3
            .start();
    };
    MenuBar.prototype.timeUp = function () {
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!");
    };
    MenuBar.prototype.resetAndStart = function () {
        this.resetMenu();
        this.startGame();
    };
    // =============== 新增 ===============
    /** 設定分數，外部可呼叫 */
    MenuBar.prototype.setScore = function (newScore) {
        this.score = newScore;
        if (this.scoreLabel) {
            this.scoreLabel.string = "" + this.score;
        }
    };
    /** 取得目前分數 */
    MenuBar.prototype.getScore = function () {
        return this.score;
    };
    /** 分數加減 n，可依需求使用 */
    MenuBar.prototype.addScore = function (delta) {
        this.setScore(this.score + delta);
    };
    __decorate([
        property({ type: [cc.Node] })
    ], MenuBar.prototype, "slots", void 0);
    __decorate([
        property({ type: [cc.Prefab] })
    ], MenuBar.prototype, "dishPrefabs", void 0);
    __decorate([
        property({ type: cc.Label })
    ], MenuBar.prototype, "timerLabel", void 0);
    __decorate([
        property({ type: cc.Label })
    ], MenuBar.prototype, "scoreLabel", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "totalTime", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishesPerGame", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishInterval", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], MenuBar.prototype, "bgm", void 0);
    MenuBar = __decorate([
        ccclass("MenuBar")
    ], MenuBar);
    return MenuBar;
}(cc.Component));
exports.default = MenuBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NlbmUvdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBOElDO1FBNUlHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsY0FBYztRQUczQyxlQUFTLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUdoQyxtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFHakMsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBRSxXQUFXO1FBR3RDLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR2pCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNOztRQWlIakMsc0NBQXNDO0lBQzFDLENBQUM7SUFoSEcsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsbUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FB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QUFDO0lBRUQsb0JBQW9CO0lBQ3BCLDBCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBMUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7MENBQ1I7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnREFDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7K0NBQ0Q7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOytDQUNEO0lBRzVCO1FBREMsUUFBUTs4Q0FDYztJQUd2QjtRQURDLFFBQVE7a0RBQ2lCO0lBRzFCO1FBREMsUUFBUTtpREFDZ0I7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dDQUNSO0lBdkJSLE9BQU87UUFEM0IsT0FBTyxDQUFDLFNBQVMsQ0FBQztPQUNFLE9BQU8sQ0E4STNCO0lBQUQsY0FBQztDQTlJRCxBQThJQyxDQTlJb0MsRUFBRSxDQUFDLFNBQVMsR0E4SWhEO2tCQTlJb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiTWVudUJhclwiKSBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Ob2RlXSB9KVxuICAgIHNsb3RzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5QcmVmYWJdIH0pXG4gICAgZGlzaFByZWZhYnM6IGNjLlByZWZhYltdID0gW107XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDsgLy8g5ouW5ouJ5YCS5pW45pmC6ZaT55qEIExhYmVsXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDsgLy8g5ouW5ouJ5YiG5pW455qEIExhYmVsXG5cbiAgICBAcHJvcGVydHlcbiAgICB0b3RhbFRpbWU6IG51bWJlciA9IDYwOyAvLyDnuL3lgJLmlbjnp5LmlbhcblxuICAgIEBwcm9wZXJ0eVxuICAgIGRpc2hlc1BlckdhbWU6IG51bWJlciA9IDM7IC8vIOagvOWtkOaVuFxuXG4gICAgQHByb3BlcnR5XG4gICAgZGlzaEludGVydmFsOiBudW1iZXIgPSA1OyAgLy8g5q+P6ZqU5bm+56eS55Si55Sf5LiA5YCLXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgY3VycmVudERpc2hJZHg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwOyAvLyDliqDpgJnooYxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJlc2V0TWVudSgpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICBpZiAodGhpcy5iZ20pIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog56K65L+d5aC05LiK5LiA55u057at5oyBIDQg6YGT6I+cICovXG4gICAgY2hlY2tBbmRGaWxsU2xvdHMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q291bnQgPSB0aGlzLnNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoY3VycmVudENvdW50IDwgdGhpcy5zbG90cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCgpO1xuICAgICAgICAgICAgY3VycmVudENvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlc2V0TWVudSgpIHtcbiAgICAgICAgZm9yIChsZXQgc2xvdCBvZiB0aGlzLnNsb3RzKSB7XG4gICAgICAgICAgICBzbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50RGlzaElkeCA9IDA7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwKTtcblxuICAgICAgICB0aGlzLnNldFNjb3JlKDApOyAvLyDliIbmlbjmrbjpm7ZcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnRvdGFsVGltZTtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwLCAxKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHREaXNoKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoLCB0aGlzLmRpc2hJbnRlcnZhbCk7XG5cbiAgICAgICAgdGhpcy5zZXRTY29yZSgwKTsgLy8g6YGK5oiy6ZaL5aeL5YiG5pW45q246Zu2XG4gICAgfVxuXG4gICAgY291bnRkb3duU3RlcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lVXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUxhYmVsKCkge1xuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIGZvcm1hdFRpbWUoc2VjOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcihzZWMgLyA2MCk7XG4gICAgICAgIGNvbnN0IHMgPSBzZWMgJSA2MDtcbiAgICAgICAgcmV0dXJuIGAke219OiR7cyA8IDEwID8gJzAnIDogJyd9JHtzfWA7XG4gICAgfVxuXG4gICAgXG5cbiAgICBnZW5lcmF0ZU5leHREaXNoKCkge1xuICAgICAgICAvLyDmib7nrKzkuIDlgIvnqbrnmoQgc2xvdFxuICAgICAgICBsZXQgZW1wdHlTbG90SW5kZXggPSB0aGlzLnNsb3RzLmZpbmRJbmRleChzbG90ID0+IHNsb3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKTtcbiAgICAgICAgaWYgKGVtcHR5U2xvdEluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmVmYWJJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpc2hQcmVmYWJzLmxlbmd0aCk7XG4gICAgICAgIGxldCBkaXNoID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaXNoUHJlZmFic1twcmVmYWJJZHhdKTtcblxuICAgICAgICAvLyDliJ3lp4vkvY3nva7lnKjonqLluZXlj7PlpJblgbTvvIh6IOi7uOiorSAw77yJXG4gICAgICAgIGRpc2guc2V0UG9zaXRpb24oY2MudjMoODAwLCAwLCAwKSk7ICAvLyDinIUg5pS55oiQIFZlYzNcbiAgICAgICAgdGhpcy5zbG90c1tlbXB0eVNsb3RJbmRleF0uYWRkQ2hpbGQoZGlzaCk7XG5cbiAgICAgICAgLy8g5YuV55Wr5ruR6YCyIHNsb3Qg5Lit5b+D77yI5Lmf5pivIFZlYzPvvIlcbiAgICAgICAgY2MudHdlZW4oZGlzaClcbiAgICAgICAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsIDApIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pICAvLyDinIUgVmVjM1xuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICB0aW1lVXAoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoKTtcbiAgICAgICAgY2MubG9nKFwiVGltZSdzIHVwIVwiKTtcbiAgICB9XG5cbiAgICByZXNldEFuZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJlc2V0TWVudSgpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PSDmlrDlop4gPT09PT09PT09PT09PT09XG4gICAgLyoqIOioreWumuWIhuaVuO+8jOWklumDqOWPr+WRvOWPqyAqL1xuICAgIHNldFNjb3JlKG5ld1Njb3JlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IG5ld1Njb3JlO1xuICAgICAgICBpZiAodGhpcy5zY29yZUxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWPluW+l+ebruWJjeWIhuaVuCAqL1xuICAgIGdldFNjb3JlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xuICAgIH1cblxuICAgIC8qKiDliIbmlbjliqDmuJsgbu+8jOWPr+S+nemcgOaxguS9v+eUqCAqL1xuICAgIGFkZFNjb3JlKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLnNjb3JlICsgZGVsdGEpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufVxuIl19