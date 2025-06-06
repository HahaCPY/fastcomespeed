
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
        _this.timeUpPrefab = null;
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
        var _this = this;
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!");
        // 顯示 Time Up prefab
        if (this.timeUpPrefab) {
            var node = cc.instantiate(this.timeUpPrefab);
            this.node.addChild(node);
            // 停止所有遊戲互動、物件動作（可選）
            // 例如暫停敵人、暫停玩家、按鈕不可點，自己加
            // 暫停 director，但先不要暫停到 delay 結束
            setTimeout(function () {
                // 這裡才換場景，不要用 cc.scheduleOnce，否則 pause 時不會動
                cc.director.loadScene('score-scene');
                _this.saveScoreAndGotoResult();
            }, 2000); // 2 秒
        }
    };
    MenuBar.prototype.saveScoreAndGotoResult = function () {
        // 取得 persist node
        var persistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (persistNode) {
            var persistScript = persistNode.getComponent('ScorePersist');
            persistScript.score = this.score;
            // persistScript.score = 150;
            persistScript.fromScene = cc.director.getScene().name;
        }
        else {
            cc.error('找不到 ScorePersist persist node');
        }
        cc.director.loadScene('ResultScene');
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
        property({ type: cc.Prefab })
    ], MenuBar.prototype, "timeUpPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBbVBDO1FBalBHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsY0FBYztRQUczQyxlQUFTLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUdoQyxtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFHakMsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBRSxXQUFXO1FBR3RDLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxlQUFTLEdBQVksSUFBSSxDQUFDLENBQUUseUJBQXlCO1FBQzdDLGVBQVMsR0FBWSxLQUFLLENBQUMsQ0FBQyxVQUFVO1FBR3RDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBSzdCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNOztRQXFNakMsc0NBQXNDO0lBQzFDLENBQUM7SUFwTUcsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFF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Q0Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOytDQUNEO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpREFDQztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7K0NBQ0Q7SUFHNUI7UUFEQyxRQUFROzhDQUNjO0lBR3ZCO1FBREMsUUFBUTtrREFDaUI7SUFHMUI7UUFEQyxRQUFRO2lEQUNnQjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7d0NBQ1I7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FEQUNLO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs4Q0FDRjtJQWhDVCxPQUFPO1FBRDNCLE9BQU8sQ0FBQyxTQUFTLENBQUM7T0FDRSxPQUFPLENBbVAzQjtJQUFELGNBQUM7Q0FuUEQsQUFtUEMsQ0FuUG9DLEVBQUUsQ0FBQyxTQUFTLEdBbVBoRDtrQkFuUG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJNZW51QmFyXCIpIFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Ob2RlXSB9KVxyXG4gICAgc2xvdHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5QcmVmYWJdIH0pXHJcbiAgICBkaXNoUHJlZmFiczogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDmi5bmi4nlgJLmlbjmmYLplpPnmoQgTGFiZWxcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICAgIHRpbWVVcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxyXG4gICAgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDmi5bmi4nliIbmlbjnmoQgTGFiZWxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvdGFsVGltZTogbnVtYmVyID0gNjA7IC8vIOe4veWAkuaVuOenkuaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGlzaGVzUGVyR2FtZTogbnVtYmVyID0gMzsgLy8g5qC85a2Q5pW4XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkaXNoSW50ZXJ2YWw6IG51bWJlciA9IDU7ICAvLyDmr4/pmpTlub7np5LnlKLnlJ/kuIDlgItcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICAgIGZpcmVFZmZlY3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxyXG4gICAgdGltZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDsgIC8vIOaLliB0aW1lckxhYmVsIOeahCBub2RlIOmAsuS+hlxyXG4gICAgcHJpdmF0ZSBpc1NoYWtpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8g6YG/5YWN6YeN6KSH5Yqg5YuV55WrXHJcblxyXG5cclxuICAgIHByaXZhdGUgZmlyZUVmZmVjdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgcHJpdmF0ZSBpc0ZpcmVTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgY3VycmVudERpc2hJZHg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDsgLy8g5Yqg6YCZ6KGMXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1lbnUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJnbSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog56K65L+d5aC05LiK5LiA55u057at5oyBIDQg6YGT6I+cICovXHJcbiAgICBjaGVja0FuZEZpbGxTbG90cygpIHtcclxuICAgICAgICBsZXQgY3VycmVudENvdW50ID0gdGhpcy5zbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90LmNoaWxkcmVuLmxlbmd0aCA+IDApLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoY3VycmVudENvdW50IDwgdGhpcy5zbG90cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHREaXNoKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVzZXRNZW51KCkge1xyXG4gICAgICAgIGZvciAobGV0IHNsb3Qgb2YgdGhpcy5zbG90cykge1xyXG4gICAgICAgICAgICBzbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudERpc2hJZHggPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNjb3JlKDApOyAvLyDliIbmlbjmrbjpm7ZcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudG90YWxUaW1lO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXAsIDEpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoLCB0aGlzLmRpc2hJbnRlcnZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2NvcmUoMCk7IC8vIOmBiuaIsumWi+Wni+WIhuaVuOatuOmbtlxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50ZG93blN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8g4o+x77iPIOWJqeS4iyAxNSDnp5LmmYLpoa/npLrngavnhLBcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDEwICYmICF0aGlzLmZpcmVFZmZlY3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRmlyZUVmZmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA9PT0gMTAgJiYgIXRoaXMuaXNTaGFraW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lclNoYWtlKCk7IC8vIPCfjqwg5ZWf5YuV6ZyH5YuVXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BUaW1lclNoYWtlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFRpbWVyU2hha2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnRpbWVyTm9kZSk7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy50aW1lck5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwgMCwgMCkpOyAvLyDph43oqK3kvY3nva5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1NoYWtpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgc3RhcnRUaW1lclNoYWtlKCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyTm9kZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzU2hha2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudGltZXJOb2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4wNSwgeyBwb3NpdGlvbjogY2MudjMoMiwgMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4wNSwgeyBwb3NpdGlvbjogY2MudjMoLTQsIDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDUsIHsgcG9zaXRpb246IGNjLnYzKDIsIDAsIDApIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25GaXJlRWZmZWN0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJlRWZmZWN0UHJlZmFiIHx8ICF0aGlzLnRpbWVyTm9kZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmZpcmVFZmZlY3ROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5maXJlRWZmZWN0UHJlZmFiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXJQb3MgPSB0aGlzLnRpbWVyTm9kZS5nZXRQb3NpdGlvbigpOyAvLyBWZWMyXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2MudjIoMCwgNTApOyAvLyDwn4aZIOW+gOS4iiA1MCDllrXllrVcclxuICAgICAgICBjb25zdCBmaW5hbFBvcyA9IHRpbWVyUG9zLmFkZChvZmZzZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmZpcmVFZmZlY3ROb2RlLnNldFBvc2l0aW9uKGZpbmFsUG9zKTtcclxuICAgICAgICB0aGlzLnRpbWVyTm9kZS5wYXJlbnQuYWRkQ2hpbGQodGhpcy5maXJlRWZmZWN0Tm9kZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGVMYWJlbCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuY3VycmVudFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRpbWUoc2VjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcclxuICAgICAgICBjb25zdCBzID0gc2VjICUgNjA7XHJcbiAgICAgICAgcmV0dXJuIGAke219OiR7cyA8IDEwID8gJzAnIDogJyd9JHtzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZ2VuZXJhdGVOZXh0RGlzaCgpIHtcclxuICAgICAgICAvLyDmib7nrKzkuIDlgIvnqbrnmoQgc2xvdFxyXG4gICAgICAgIGxldCBlbXB0eVNsb3RJbmRleCA9IHRoaXMuc2xvdHMuZmluZEluZGV4KHNsb3QgPT4gc2xvdC5jaGlsZHJlbi5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGlmIChlbXB0eVNsb3RJbmRleCA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHByZWZhYklkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzaFByZWZhYnMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgZGlzaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlzaFByZWZhYnNbcHJlZmFiSWR4XSk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+S9jee9ruWcqOieouW5leWPs+WkluWBtO+8iHog6Lu46KitIDDvvIlcclxuICAgICAgICBkaXNoLnNldFBvc2l0aW9uKGNjLnYzKDgwMCwgMCwgMCkpOyAgLy8g4pyFIOaUueaIkCBWZWMzXHJcbiAgICAgICAgdGhpcy5zbG90c1tlbXB0eVNsb3RJbmRleF0uYWRkQ2hpbGQoZGlzaCk7XHJcblxyXG4gICAgICAgIC8vIOWLleeVq+a7kemAsiBzbG90IOS4reW/g++8iOS5n+aYryBWZWMz77yJXHJcbiAgICAgICAgY2MudHdlZW4oZGlzaClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCkgfSwgeyBlYXNpbmc6ICdjdWJpY091dCcgfSkgIC8vIOKchSBWZWMzXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aW1lVXAoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRkb3duU3RlcCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XHJcbiAgICAgICAgY2MubG9nKFwiVGltZSdzIHVwIVwiKTtcclxuXHJcbiAgICAgICAgLy8g6aGv56S6IFRpbWUgVXAgcHJlZmFiXHJcbiAgICAgICAgaWYgKHRoaXMudGltZVVwUHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aW1lVXBQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAvLyDlgZzmraLmiYDmnInpgYrmiLLkupLli5XjgIHnianku7bli5XkvZzvvIjlj6/pgbjvvIlcclxuICAgICAgICAgICAgLy8g5L6L5aaC5pqr5YGc5pW15Lq644CB5pqr5YGc546p5a6244CB5oyJ6YiV5LiN5Y+v6bue77yM6Ieq5bex5YqgXHJcblxyXG4gICAgICAgICAgICAvLyDmmqvlgZwgZGlyZWN0b3LvvIzkvYblhYjkuI3opoHmmqvlgZzliLAgZGVsYXkg57WQ5p2fXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6YCZ6KOh5omN5o+b5aC05pmv77yM5LiN6KaB55SoIGNjLnNjaGVkdWxlT25jZe+8jOWQpuWJhyBwYXVzZSDmmYLkuI3mnIPli5VcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2NvcmUtc2NlbmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVNjb3JlQW5kR290b1Jlc3VsdCgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTsgLy8gMiDnp5JcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNjb3JlQW5kR290b1Jlc3VsdCgpIHtcclxuICAgICAgICAvLyDlj5blvpcgcGVyc2lzdCBub2RlXHJcbiAgICAgICAgY29uc3QgcGVyc2lzdE5vZGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdTY29yZVBlcnNpc3QnKTtcclxuICAgICAgICBpZiAocGVyc2lzdE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGVyc2lzdFNjcmlwdCA9IHBlcnNpc3ROb2RlLmdldENvbXBvbmVudCgnU2NvcmVQZXJzaXN0Jyk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RTY3JpcHQuc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgICAgICAvLyBwZXJzaXN0U2NyaXB0LnNjb3JlID0gMTUwO1xyXG4gICAgICAgICAgICBwZXJzaXN0U2NyaXB0LmZyb21TY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcign5om+5LiN5YiwIFNjb3JlUGVyc2lzdCBwZXJzaXN0IG5vZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdSZXN1bHRTY2VuZScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXNldEFuZFN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0g5paw5aKeID09PT09PT09PT09PT09PVxyXG4gICAgLyoqIOioreWumuWIhuaVuO+8jOWklumDqOWPr+WRvOWPqyAqL1xyXG4gICAgc2V0U2NvcmUobmV3U2NvcmU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSBuZXdTY29yZTtcclxuICAgICAgICBpZiAodGhpcy5zY29yZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLnNjb3JlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlj5blvpfnm67liY3liIbmlbggKi9cclxuICAgIGdldFNjb3JlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIhuaVuOWKoOa4myBu77yM5Y+v5L6d6ZyA5rGC5L2/55SoICovXHJcbiAgICBhZGRTY29yZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLnNjb3JlICsgZGVsdGEpO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxufVxyXG4iXX0=