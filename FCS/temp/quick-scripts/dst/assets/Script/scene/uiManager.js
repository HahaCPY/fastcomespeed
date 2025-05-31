
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
        _this.totalTime = 60; // 總倒數秒數
        _this.dishesPerGame = 3; // 格子數
        _this.dishInterval = 5; // 每隔幾秒產生一個
        _this.currentDishIdx = 0;
        _this.currentTime = 0;
        return _this;
    }
    MenuBar.prototype.start = function () {
        this.resetMenu();
        this.startGame();
    };
    MenuBar.prototype.resetMenu = function () {
        for (var _i = 0, _a = this.slots; _i < _a.length; _i++) {
            var slot = _a[_i];
            slot.removeAllChildren();
        }
        this.currentDishIdx = 0;
        this.unschedule(this.generateNextDish);
        this.unschedule(this.countdownStep);
    };
    MenuBar.prototype.startGame = function () {
        this.currentTime = this.totalTime;
        this.updateLabel();
        this.schedule(this.countdownStep, 1);
        this.generateNextDish();
        this.schedule(this.generateNextDish, this.dishInterval);
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
        // 用 slots.length 當最大格數
        if (this.currentDishIdx >= this.slots.length) {
            this.unschedule(this.generateNextDish);
            return;
        }
        var prefabIdx = Math.floor(Math.random() * this.dishPrefabs.length);
        var dish = cc.instantiate(this.dishPrefabs[prefabIdx]);
        this.slots[this.currentDishIdx].addChild(dish);
        this.currentDishIdx++;
    };
    MenuBar.prototype.timeUp = function () {
        // 停止所有 schedule
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!"); // 你可以加更多動作
    };
    // 若需重啟
    MenuBar.prototype.resetAndStart = function () {
        this.resetMenu();
        this.startGame();
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
        property
    ], MenuBar.prototype, "totalTime", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishesPerGame", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishInterval", void 0);
    MenuBar = __decorate([
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMkZDO1FBekZHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGVBQVMsR0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBR2hDLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUdqQyxrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFFLFdBQVc7UUFFOUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBdUVwQyxDQUFDO0lBckVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksS0FBaUIsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO1lBQXhCLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFB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UUFEQyxRQUFRO2tEQUNpQjtJQUcxQjtRQURDLFFBQVE7aURBQ2dCO0lBakJSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0EyRjNCO0lBQUQsY0FBQztDQTNGRCxBQTJGQyxDQTNGb0MsRUFBRSxDQUFDLFNBQVMsR0EyRmhEO2tCQTNGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Ob2RlXSB9KVxyXG4gICAgc2xvdHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5QcmVmYWJdIH0pXHJcbiAgICBkaXNoUHJlZmFiczogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDmi5bmi4nlgJLmlbjmmYLplpPnmoQgTGFiZWxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvdGFsVGltZTogbnVtYmVyID0gNjA7IC8vIOe4veWAkuaVuOenkuaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGlzaGVzUGVyR2FtZTogbnVtYmVyID0gMzsgLy8g5qC85a2Q5pW4XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkaXNoSW50ZXJ2YWw6IG51bWJlciA9IDU7ICAvLyDmr4/pmpTlub7np5LnlKLnlJ/kuIDlgItcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnREaXNoSWR4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0TWVudSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRNZW51KCkge1xyXG4gICAgICAgIGZvciAobGV0IHNsb3Qgb2YgdGhpcy5zbG90cykge1xyXG4gICAgICAgICAgICBzbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudERpc2hJZHggPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50b3RhbFRpbWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRkb3duU3RlcCwgMSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHREaXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gsIHRoaXMuZGlzaEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudGRvd25TdGVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5jdXJyZW50VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VGltZShzZWM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3Ioc2VjIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWMgJSA2MDtcclxuICAgICAgICByZXR1cm4gYCR7bX06JHtzIDwgMTAgPyAnMCcgOiAnJ30ke3N9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZU5leHREaXNoKCkge1xyXG4gICAgICAgIC8vIOeUqCBzbG90cy5sZW5ndGgg55W25pyA5aSn5qC85pW4XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpc2hJZHggPj0gdGhpcy5zbG90cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZWZhYklkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzaFByZWZhYnMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgZGlzaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlzaFByZWZhYnNbcHJlZmFiSWR4XSk7XHJcbiAgICAgICAgdGhpcy5zbG90c1t0aGlzLmN1cnJlbnREaXNoSWR4XS5hZGRDaGlsZChkaXNoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4Kys7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRpbWVVcCgpIHtcclxuICAgICAgICAvLyDlgZzmraLmiYDmnIkgc2NoZWR1bGVcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoKTtcclxuICAgICAgICBjYy5sb2coXCJUaW1lJ3MgdXAhXCIpOyAvLyDkvaDlj6/ku6XliqDmm7TlpJrli5XkvZxcclxuICAgIH1cclxuXHJcbiAgICAvLyDoi6XpnIDph43llZ9cclxuICAgIHJlc2V0QW5kU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1lbnUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==