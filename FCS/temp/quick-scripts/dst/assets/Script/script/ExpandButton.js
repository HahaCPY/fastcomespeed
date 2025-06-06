
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/ExpandButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9222DM7tlGSJxp6TxFNNS4', 'ExpandButton');
// Script/script/ExpandButton.ts

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
var DropdownButton = /** @class */ (function (_super) {
    __extends(DropdownButton, _super);
    function DropdownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropdownMenu = null;
        _this.isExpanded = false;
        return _this;
    }
    DropdownButton.prototype.onLoad = function () {
        this.dropdownMenu.active = false;
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
    };
    DropdownButton.prototype.start = function () {
        // 确保菜单初始状态
        this.dropdownMenu.active = false;
    };
    DropdownButton.prototype.toggleMenu = function () {
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.showMenu();
        }
        else {
            this.hideMenu();
        }
    };
    DropdownButton.prototype.showMenu = function () {
        this.dropdownMenu.active = true;
        // 添加淡入动画
        this.dropdownMenu.opacity = 0;
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 255 })
            .start();
        // 监听全局触摸
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    };
    DropdownButton.prototype.hideMenu = function () {
        var _this = this;
        // 添加淡出动画
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.dropdownMenu.active = false;
            cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, _this.onGlobalTouch, _this);
        })
            .start();
    };
    DropdownButton.prototype.onGlobalTouch = function (event) {
        var touchPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        if (!this.node.getBoundingBox().contains(touchPos)) {
            if (!this.dropdownMenu.active ||
                !this.dropdownMenu.getBoundingBox().contains(touchPos)) {
                this.isExpanded = false;
                this.hideMenu();
            }
        }
    };
    DropdownButton.prototype.onDestroy = function () {
        // 移除所有监听
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    };
    __decorate([
        property(cc.Node)
    ], DropdownButton.prototype, "dropdownMenu", void 0);
    DropdownButton = __decorate([
        ccclass
    ], DropdownButton);
    return DropdownButton;
}(cc.Component));
exports.default = DropdownButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L0V4cGFuZEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1FQztRQWpFRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFZLEtBQUssQ0FBQzs7SUErRHhDLENBQUM7SUE3REcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVoQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN0QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3pCLEtBQUssRUFBRSxDQUFDO1FBRWIsU0FBUztRQUNULEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLFNBQVM7UUFDVCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQTBCO1FBQ3BDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUN6QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1NBQ0o7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFoRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVztJQUZaLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtRWxDO0lBQUQscUJBQUM7Q0FuRUQsQUFtRUMsQ0FuRTJDLEVBQUUsQ0FBQyxTQUFTLEdBbUV2RDtrQkFuRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25CdXR0b24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyb3Bkb3duTWVudTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlzRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG9nZ2xlTWVudSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIOehruS/neiPnOWNleWIneWni+eKtuaAgVxuICAgICAgICB0aGlzLmRyb3Bkb3duTWVudS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSAhdGhpcy5pc0V4cGFuZGVkO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd01lbnUoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyDmt7vliqDmt6HlhaXliqjnlLtcbiAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUub3BhY2l0eSA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZHJvcGRvd25NZW51KVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIC8vIOebkeWQrOWFqOWxgOinpuaRuFxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkdsb2JhbFRvdWNoLCB0aGlzKTtcbiAgICB9XG5cbiAgICBoaWRlTWVudSgpIHtcbiAgICAgICAgLy8g5re75Yqg5reh5Ye65Yqo55S7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZHJvcGRvd25NZW51KVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uR2xvYmFsVG91Y2gsIHRoaXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIG9uR2xvYmFsVG91Y2goZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3goKS5jb250YWlucyh0b3VjaFBvcykpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93bk1lbnUuYWN0aXZlIHx8IFxuICAgICAgICAgICAgICAgICF0aGlzLmRyb3Bkb3duTWVudS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKHRvdWNoUG9zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8g56e76Zmk5omA5pyJ55uR5ZCsXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvZ2dsZU1lbnUsIHRoaXMpO1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25HbG9iYWxUb3VjaCwgdGhpcyk7XG4gICAgfVxufSJdfQ==