
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NlbmUvdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMkZDO1FBekZHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGVBQVMsR0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBR2hDLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUdqQyxrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFFLFdBQVc7UUFFOUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBdUVwQyxDQUFDO0lBckVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksS0FBaUIsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO1lBQXhCLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFBSSxD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QyxRQUFRO2tEQUNpQjtJQUcxQjtRQURDLFFBQVE7aURBQ2dCO0lBakJSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0EyRjNCO0lBQUQsY0FBQztDQTNGRCxBQTJGQyxDQTNGb0MsRUFBRSxDQUFDLFNBQVMsR0EyRmhEO2tCQTNGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuTm9kZV0gfSlcbiAgICBzbG90czogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuUHJlZmFiXSB9KVxuICAgIGRpc2hQcmVmYWJzOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTGFiZWwgfSlcbiAgICB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7IC8vIOaLluaLieWAkuaVuOaZgumWk+eahCBMYWJlbFxuXG4gICAgQHByb3BlcnR5XG4gICAgdG90YWxUaW1lOiBudW1iZXIgPSA2MDsgLy8g57i95YCS5pW456eS5pW4XG5cbiAgICBAcHJvcGVydHlcbiAgICBkaXNoZXNQZXJHYW1lOiBudW1iZXIgPSAzOyAvLyDmoLzlrZDmlbhcblxuICAgIEBwcm9wZXJ0eVxuICAgIGRpc2hJbnRlcnZhbDogbnVtYmVyID0gNTsgIC8vIOavj+malOW5vuenkueUoueUn+S4gOWAi1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlzaElkeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRNZW51KCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgcmVzZXRNZW51KCkge1xuICAgICAgICBmb3IgKGxldCBzbG90IG9mIHRoaXMuc2xvdHMpIHtcbiAgICAgICAgICAgIHNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4ID0gMDtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudG90YWxUaW1lO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXAsIDEpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV4dERpc2goKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gsIHRoaXMuZGlzaEludGVydmFsKTtcbiAgICB9XG5cbiAgICBjb3VudGRvd25TdGVwKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTGFiZWwoKSB7XG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5jdXJyZW50VGltZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0VGltZShzZWM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcbiAgICAgICAgY29uc3QgcyA9IHNlYyAlIDYwO1xuICAgICAgICByZXR1cm4gYCR7bX06JHtzIDwgMTAgPyAnMCcgOiAnJ30ke3N9YDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU5leHREaXNoKCkge1xuICAgICAgICAvLyDnlKggc2xvdHMubGVuZ3RoIOeVtuacgOWkp+agvOaVuFxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzaElkeCA+PSB0aGlzLnNsb3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZWZhYklkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzaFByZWZhYnMubGVuZ3RoKTtcbiAgICAgICAgbGV0IGRpc2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpc2hQcmVmYWJzW3ByZWZhYklkeF0pO1xuICAgICAgICB0aGlzLnNsb3RzW3RoaXMuY3VycmVudERpc2hJZHhdLmFkZENoaWxkKGRpc2gpO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4Kys7XG4gICAgfVxuXG5cbiAgICB0aW1lVXAoKSB7XG4gICAgICAgIC8vIOWBnOatouaJgOaciSBzY2hlZHVsZVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XG4gICAgICAgIGNjLmxvZyhcIlRpbWUncyB1cCFcIik7IC8vIOS9oOWPr+S7peWKoOabtOWkmuWLleS9nFxuICAgIH1cblxuICAgIC8vIOiLpemcgOmHjeWVn1xuICAgIHJlc2V0QW5kU3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRNZW51KCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxufVxuIl19