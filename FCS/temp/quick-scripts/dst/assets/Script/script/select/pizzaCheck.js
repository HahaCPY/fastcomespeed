
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
        cc.director.loadScene("level-1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxccGl6emFDaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWtFQztRQWhFRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYyxJQUFJLENBQUM7O0lBdUQzQixDQUFDO0lBckRHLDhCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQUEsaUJBc0JDO1FBckJHLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxnQ0FBZ0M7UUFDaEMsMkdBQTJHO1FBQzNHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO3FCQUN2RSxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLHdDQUF3QztnQkFDM0UsQ0FBQyxDQUFDO3FCQUNELEtBQUssRUFBRSxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDRztJQVhOLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FrRWpDO0lBQUQsb0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRTBDLEVBQUUsQ0FBQyxTQUFTLEdBa0V0RDtrQkFsRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2UxQ2hlY2tVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc3RhcnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2tCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJsYWNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtYXNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLm9uQmFja0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gYmxhY2sgc3ByaXRlIGFjdGl2ZSAwLjVzIGFuZCBkaXNzYXBlYXJcclxuICAgICAgICAvLyBkb24ndCBmYWRlIG91dCwganVzdCBzZXQgYWN0aXZlIHRvIGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuYmxhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5ibGFjay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2subm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2FpdCAwLjVzLCBtYXNrIHNwcml0ZSBhY3RpdmVcclxuICAgICAgICAvLyBhbmQsIGl0IHdpbGwgdHJhbnNtaXQgZnJvbSBwb3NpdGlvbigwLCAwKSB0byAoMTU5Ljc0OCwgLTc5OC43NDEpLCBmcm9tIHNjYWxlICgxLCAxKSB0byAoMTAwLCA1MCkgaW4gMC44c1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFzay5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDkxLjI4NSwgLTEyNTUuMTY2KSwgc2NhbGVYOiA4MCwgc2NhbGVZOiA4MCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7IC8vIGFmdGVyIHRyYW5zaXRpb24sIHNldCBhY3RpdmUgdG8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24gJiYgdGhpcy5zdGFydEJ1dHRvbi5ub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vblN0YXJ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiAmJiB0aGlzLmJhY2tCdXR0b24ubm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkJhY2tDbGljaywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnRDbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LWJ0biBwcmVzc2Vk77yBXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxldmVsLTFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWNrLWJ0biBwcmVzc2Vk77yBXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNlbGVjdFNjZW5lXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==