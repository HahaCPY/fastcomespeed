
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
        _this.fireEffectPrefab = null;
        _this.timerNode = null; // 拖 timerLabel 的 node 進來
        _this.isShaking = false; // 避免重複加動畫
        _this.fireEffectNode = null;
        _this.isFireShown = false;
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
            // ⏱️ 剩下 15 秒時顯示火焰
            if (this.currentTime === 10 && !this.fireEffectNode) {
                this.spawnFireEffect();
            }
            if (this.currentTime === 10 && !this.isShaking) {
                this.startTimerShake(); // 🎬 啟動震動
            }
            if (this.currentTime === 0) {
                this.timeUp();
                this.stopTimerShake();
            }
        }
    };
    MenuBar.prototype.stopTimerShake = function () {
        if (this.timerNode) {
            cc.Tween.stopAllByTarget(this.timerNode);
            //   this.timerNode.setPosition(cc.v3(0, 0, 0)); // 重設位置
        }
        this.isShaking = false;
    };
    MenuBar.prototype.startTimerShake = function () {
        if (!this.timerNode)
            return;
        this.isShaking = true;
        cc.tween(this.timerNode)
            .repeatForever(cc.tween()
            .by(0.05, { position: cc.v3(2, 0, 0) })
            .by(0.05, { position: cc.v3(-4, 0, 0) })
            .by(0.05, { position: cc.v3(2, 0, 0) }))
            .start();
    };
    MenuBar.prototype.spawnFireEffect = function () {
        if (!this.fireEffectPrefab || !this.timerNode)
            return;
        this.fireEffectNode = cc.instantiate(this.fireEffectPrefab);
        var timerPos = this.timerNode.getPosition(); // Vec2
        var offset = cc.v2(0, 50); // 🆙 往上 50 喵喵
        var finalPos = timerPos.add(offset);
        this.fireEffectNode.setPosition(finalPos);
        this.timerNode.parent.addChild(this.fireEffectNode);
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
    __decorate([
        property({ type: cc.Prefab })
    ], MenuBar.prototype, "fireEffectPrefab", void 0);
    __decorate([
        property({ type: cc.Node })
    ], MenuBar.prototype, "timerNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBaU5DO1FBL01HLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsY0FBYztRQUczQyxlQUFTLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUdoQyxtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFHakMsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBRSxXQUFXO1FBR3RDLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDLENBQUUseUJBQXlCO1FBQzdDLGVBQVMsR0FBWSxLQUFLLENBQUMsQ0FBQyxVQUFVO1FBR3RDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBSzdCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNOztRQXNLakMsc0NBQXNDO0lBQzFDLENBQUM7SUFyS0csdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsRUFBRSxDQUFDLFdBQVcsQ0FBQyxT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QUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnREFDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7K0NBQ0Q7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOytDQUNEO0lBRzVCO1FBREMsUUFBUTs4Q0FDYztJQUd2QjtRQURDLFFBQVE7a0RBQ2lCO0lBRzFCO1FBREMsUUFBUTtpREFDZ0I7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dDQUNSO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztxREFDSztJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7OENBQ0Y7SUE3QlQsT0FBTztRQUQzQixPQUFPLENBQUMsU0FBUyxDQUFDO09BQ0UsT0FBTyxDQWlOM0I7SUFBRCxjQUFDO0NBak5ELEFBaU5DLENBak5vQyxFQUFFLENBQUMsU0FBUyxHQWlOaEQ7a0JBak5vQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiTWVudUJhclwiKSBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuTm9kZV0gfSlcclxuICAgIHNsb3RzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuUHJlZmFiXSB9KVxyXG4gICAgZGlzaFByZWZhYnM6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTGFiZWwgfSlcclxuICAgIHRpbWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDsgLy8g5ouW5ouJ5YCS5pW45pmC6ZaT55qEIExhYmVsXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTGFiZWwgfSlcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDsgLy8g5ouW5ouJ5YiG5pW455qEIExhYmVsXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0b3RhbFRpbWU6IG51bWJlciA9IDYwOyAvLyDnuL3lgJLmlbjnp5LmlbhcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRpc2hlc1BlckdhbWU6IG51bWJlciA9IDM7IC8vIOagvOWtkOaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGlzaEludGVydmFsOiBudW1iZXIgPSA1OyAgLy8g5q+P6ZqU5bm+56eS55Si55Sf5LiA5YCLXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiIH0pXHJcbiAgICBmaXJlRWZmZWN0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcclxuICAgIHRpbWVyTm9kZTogY2MuTm9kZSA9IG51bGw7ICAvLyDmi5YgdGltZXJMYWJlbCDnmoQgbm9kZSDpgLLkvoZcclxuICAgIHByaXZhdGUgaXNTaGFraW5nOiBib29sZWFuID0gZmFsc2U7IC8vIOmBv+WFjemHjeikh+WKoOWLleeVq1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGZpcmVFZmZlY3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICBcclxuICAgIHByaXZhdGUgaXNGaXJlU2hvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnREaXNoSWR4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7IC8vIOWKoOmAmeihjFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICBpZiAodGhpcy5iZ20pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOeiuuS/neWgtOS4iuS4gOebtOe2reaMgSA0IOmBk+iPnCAqL1xyXG4gICAgY2hlY2tBbmRGaWxsU2xvdHMoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb3VudCA9IHRoaXMuc2xvdHMuZmlsdGVyKHNsb3QgPT4gc2xvdC5jaGlsZHJlbi5sZW5ndGggPiAwKS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRDb3VudCA8IHRoaXMuc2xvdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCgpO1xyXG4gICAgICAgICAgICBjdXJyZW50Q291bnQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlc2V0TWVudSgpIHtcclxuICAgICAgICBmb3IgKGxldCBzbG90IG9mIHRoaXMuc2xvdHMpIHtcclxuICAgICAgICAgICAgc2xvdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4ID0gMDtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTY29yZSgwKTsgLy8g5YiG5pW45q246Zu2XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnRvdGFsVGltZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwLCAxKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlTmV4dERpc2goKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCwgdGhpcy5kaXNoSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNjb3JlKDApOyAvLyDpgYrmiLLplovlp4vliIbmlbjmrbjpm7ZcclxuICAgIH1cclxuXHJcbiAgICBjb3VudGRvd25TdGVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOKPse+4jyDliankuIsgMTUg56eS5pmC6aGv56S654Gr54SwXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID09PSAxMCAmJiAhdGhpcy5maXJlRWZmZWN0Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkZpcmVFZmZlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDEwICYmICF0aGlzLmlzU2hha2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXJTaGFrZSgpOyAvLyDwn46sIOWVn+WLlemch+WLlVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wVGltZXJTaGFrZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BUaW1lclNoYWtlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyTm9kZSkge1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy50aW1lck5vZGUpO1xyXG4gICAgICAgICAgICAvLyAgIHRoaXMudGltZXJOb2RlLnNldFBvc2l0aW9uKGNjLnYzKDAsIDAsIDApKTsgLy8g6YeN6Kit5L2N572uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTaGFraW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHN0YXJ0VGltZXJTaGFrZSgpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy50aW1lck5vZGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1NoYWtpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnRpbWVyTm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgcG9zaXRpb246IGNjLnYzKDIsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgcG9zaXRpb246IGNjLnYzKC00LCAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjA1LCB7IHBvc2l0aW9uOiBjYy52MygyLCAwLCAwKSB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduRmlyZUVmZmVjdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyZUVmZmVjdFByZWZhYiB8fCAhdGhpcy50aW1lck5vZGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5maXJlRWZmZWN0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmlyZUVmZmVjdFByZWZhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVyUG9zID0gdGhpcy50aW1lck5vZGUuZ2V0UG9zaXRpb24oKTsgLy8gVmVjMlxyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNjLnYyKDAsIDUwKTsgLy8g8J+GmSDlvoDkuIogNTAg5Za15Za1XHJcbiAgICAgICAgY29uc3QgZmluYWxQb3MgPSB0aW1lclBvcy5hZGQob2Zmc2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5maXJlRWZmZWN0Tm9kZS5zZXRQb3NpdGlvbihmaW5hbFBvcyk7XHJcbiAgICAgICAgdGhpcy50aW1lck5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZmlyZUVmZmVjdE5vZGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlTGFiZWwoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmN1cnJlbnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRUaW1lKHNlYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcihzZWMgLyA2MCk7XHJcbiAgICAgICAgY29uc3QgcyA9IHNlYyAlIDYwO1xyXG4gICAgICAgIHJldHVybiBgJHttfToke3MgPCAxMCA/ICcwJyA6ICcnfSR7c31gO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGdlbmVyYXRlTmV4dERpc2goKSB7XHJcbiAgICAgICAgLy8g5om+56ys5LiA5YCL56m655qEIHNsb3RcclxuICAgICAgICBsZXQgZW1wdHlTbG90SW5kZXggPSB0aGlzLnNsb3RzLmZpbmRJbmRleChzbG90ID0+IHNsb3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBpZiAoZW1wdHlTbG90SW5kZXggPT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwcmVmYWJJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpc2hQcmVmYWJzLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IGRpc2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpc2hQcmVmYWJzW3ByZWZhYklkeF0pO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vkvY3nva7lnKjonqLluZXlj7PlpJblgbTvvIh6IOi7uOiorSAw77yJXHJcbiAgICAgICAgZGlzaC5zZXRQb3NpdGlvbihjYy52Myg4MDAsIDAsIDApKTsgIC8vIOKchSDmlLnmiJAgVmVjM1xyXG4gICAgICAgIHRoaXMuc2xvdHNbZW1wdHlTbG90SW5kZXhdLmFkZENoaWxkKGRpc2gpO1xyXG5cclxuICAgICAgICAvLyDli5Xnlavmu5HpgLIgc2xvdCDkuK3lv4PvvIjkuZ/mmK8gVmVjM++8iVxyXG4gICAgICAgIGNjLnR3ZWVuKGRpc2gpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsIDApIH0sIHsgZWFzaW5nOiAnY3ViaWNPdXQnIH0pICAvLyDinIUgVmVjM1xyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGltZVVwKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gpO1xyXG4gICAgICAgIGNjLmxvZyhcIlRpbWUncyB1cCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBbmRTdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0TWVudSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IOaWsOWiniA9PT09PT09PT09PT09PT1cclxuICAgIC8qKiDoqK3lrprliIbmlbjvvIzlpJbpg6jlj6/lkbzlj6sgKi9cclxuICAgIHNldFNjb3JlKG5ld1Njb3JlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gbmV3U2NvcmU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5zY29yZX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Y+W5b6X55uu5YmN5YiG5pW4ICovXHJcbiAgICBnZXRTY29yZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliIbmlbjliqDmuJsgbu+8jOWPr+S+nemcgOaxguS9v+eUqCAqL1xyXG4gICAgYWRkU2NvcmUoZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U2NvcmUodGhpcy5zY29yZSArIGRlbHRhKTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn1cclxuIl19