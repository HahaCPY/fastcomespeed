
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/pizzaCheck.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffe13TzWdlKgaJEHUeYvP+7', 'pizzaCheck');
// Script/script/select/pizzaCheck.ts

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
var Stage1CheckUI = /** @class */ (function (_super) {
    __extends(Stage1CheckUI, _super);
    function Stage1CheckUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.backButton = null;
        _this.black = null;
        _this.mask = null;
        return _this;
    }
    Stage1CheckUI.prototype.onLoad = function () {
        if (this.startButton) {
            this.startButton.node.on('click', this.onStartClick, this);
        }
        if (this.backButton) {
            this.backButton.node.on('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.start = function () {
        var _this = this;
        // black sprite active 0.5s and dissapear
        // don't fade out, just set active to false
        if (this.black) {
            this.black.node.active = true;
            this.scheduleOnce(function () {
                _this.black.node.active = false;
            }, 0.5);
        }
        // wait 0.5s, mask sprite active
        // and, it will transmit from position(0, 0) to (159.748, -798.741), from scale (1, 1) to (100, 50) in 0.8s
        this.scheduleOnce(function () {
            if (_this.mask) {
                _this.mask.node.active = true;
                cc.tween(_this.mask.node)
                    .to(0.8, { position: cc.v3(91.285, -1255.166), scaleX: 80, scaleY: 80 })
                    .call(function () {
                    _this.mask.node.active = false; // after transition, set active to false
                })
                    .start();
            }
        }, 0.5);
    };
    Stage1CheckUI.prototype.onDestroy = function () {
        if (this.startButton && this.startButton.node) {
            this.startButton.node.off('click', this.onStartClick, this);
        }
        if (this.backButton && this.backButton.node) {
            this.backButton.node.off('click', this.onBackClick, this);
        }
    };
    Stage1CheckUI.prototype.onStartClick = function () {
        console.log("start-btn pressed！");
        cc.director.loadScene("level-2");
    };
    Stage1CheckUI.prototype.onBackClick = function () {
        console.log("back-btn pressed！");
        cc.director.loadScene("selectScene");
    };
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "startButton", void 0);
    __decorate([
        property(cc.Button)
    ], Stage1CheckUI.prototype, "backButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "black", void 0);
    __decorate([
        property(cc.Sprite)
    ], Stage1CheckUI.prototype, "mask", void 0);
    Stage1CheckUI = __decorate([
        ccclass
    ], Stage1CheckUI);
    return Stage1CheckUI;
}(cc.Component));
exports.default = Stage1CheckUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC9waXp6YUNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBa0VDO1FBaEVHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQzs7SUF1RDNCLENBQUM7SUFyREcsOEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFBQSxpQkFzQkM7UUFyQkcseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtRQUNELGdDQUFnQztRQUNoQywyR0FBMkc7UUFDM0csSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksS0FBSSxDQUFDLElBQUksRUFBRTtnQkFDWCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNuQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7cUJBQ3ZFLElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsd0NBQXdDO2dCQUMzRSxDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7YUFDaEI7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQS9ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNHO0lBWE4sYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWtFakM7SUFBRCxvQkFBQztDQWxFRCxBQWtFQyxDQWxFMEMsRUFBRSxDQUFDLFNBQVMsR0FrRXREO2tCQWxFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFnZTFDaGVja1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHN0YXJ0QnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBiYWNrQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBibGFjazogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgbWFzazogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uU3RhcnRDbGljaywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5iYWNrQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQmFja0NsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBibGFjayBzcHJpdGUgYWN0aXZlIDAuNXMgYW5kIGRpc3NhcGVhclxuICAgICAgICAvLyBkb24ndCBmYWRlIG91dCwganVzdCBzZXQgYWN0aXZlIHRvIGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmJsYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmJsYWNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWNrLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdhaXQgMC41cywgbWFzayBzcHJpdGUgYWN0aXZlXG4gICAgICAgIC8vIGFuZCwgaXQgd2lsbCB0cmFuc21pdCBmcm9tIHBvc2l0aW9uKDAsIDApIHRvICgxNTkuNzQ4LCAtNzk4Ljc0MSksIGZyb20gc2NhbGUgKDEsIDEpIHRvICgxMDAsIDUwKSBpbiAwLjhzXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFzay5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC44LCB7IHBvc2l0aW9uOiBjYy52Myg5MS4yODUsIC0xMjU1LjE2NiksIHNjYWxlWDogODAsIHNjYWxlWTogODAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8vIGFmdGVyIHRyYW5zaXRpb24sIHNldCBhY3RpdmUgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbiAmJiB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiAmJiB0aGlzLmJhY2tCdXR0b24ubm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYWNrQnV0dG9uLm5vZGUub2ZmKCdjbGljaycsIHRoaXMub25CYWNrQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydENsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LWJ0biBwcmVzc2Vk77yBXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsZXZlbC0yXCIpO1xuICAgIH1cblxuICAgIG9uQmFja0NsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJhY2stYnRuIHByZXNzZWTvvIFcIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xuICAgIH1cbn1cbiJdfQ==