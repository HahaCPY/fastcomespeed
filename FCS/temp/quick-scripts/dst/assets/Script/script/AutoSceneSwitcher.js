
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/AutoSceneSwitcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e020aBolepIXan4LeAh3SiX', 'AutoSceneSwitcher');
// Script/script/AutoSceneSwitcher.ts

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
var AutoSceneSwitcher = /** @class */ (function (_super) {
    __extends(AutoSceneSwitcher, _super);
    function AutoSceneSwitcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waitSeconds = 4;
        _this.targetScene = "Menu";
        _this.fadeNode = null; // 請指定一個全螢幕黑色Sprite節點，alpha=0
        return _this;
    }
    AutoSceneSwitcher.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.fadeAndSwitch();
        }, this.waitSeconds);
    };
    AutoSceneSwitcher.prototype.fadeAndSwitch = function () {
        var _this = this;
        if (this.fadeNode) {
            // 先確保遮罩可見且透明
            this.fadeNode.active = true;
            this.fadeNode.opacity = 0;
            cc.tween(this.fadeNode)
                .to(1, { opacity: 255 }) // 1秒淡出
                .call(function () {
                cc.director.loadScene(_this.targetScene);
            })
                .start();
        }
        else {
            cc.director.loadScene(this.targetScene);
        }
    };
    __decorate([
        property
    ], AutoSceneSwitcher.prototype, "waitSeconds", void 0);
    __decorate([
        property
    ], AutoSceneSwitcher.prototype, "targetScene", void 0);
    __decorate([
        property(cc.Node)
    ], AutoSceneSwitcher.prototype, "fadeNode", void 0);
    AutoSceneSwitcher = __decorate([
        ccclass
    ], AutoSceneSwitcher);
    return AutoSceneSwitcher;
}(cc.Component));
exports.default = AutoSceneSwitcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEF1dG9TY2VuZVN3aXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBK0JDO1FBN0JHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGlCQUFXLEdBQVcsTUFBTSxDQUFDO1FBRzdCLGNBQVEsR0FBWSxJQUFJLENBQUMsQ0FBQyw2QkFBNkI7O0lBdUIzRCxDQUFDO0lBckJHLGlDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsYUFBYTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNsQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTztpQkFDL0IsSUFBSSxDQUFDO2dCQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUE1QkQ7UUFEQyxRQUFROzBEQUNlO0lBR3hCO1FBREMsUUFBUTswREFDb0I7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTztJQVJSLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBK0JyQztJQUFELHdCQUFDO0NBL0JELEFBK0JDLENBL0I4QyxFQUFFLENBQUMsU0FBUyxHQStCMUQ7a0JBL0JvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1NjZW5lU3dpdGNoZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB3YWl0U2Vjb25kczogbnVtYmVyID0gNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRhcmdldFNjZW5lOiBzdHJpbmcgPSBcIk1lbnVcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZhZGVOb2RlOiBjYy5Ob2RlID0gbnVsbDsgLy8g6KuL5oyH5a6a5LiA5YCL5YWo6J6i5bmV6buR6ImyU3ByaXRl56+A6bue77yMYWxwaGE9MFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlQW5kU3dpdGNoKCk7XHJcbiAgICAgICAgfSwgdGhpcy53YWl0U2Vjb25kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUFuZFN3aXRjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mYWRlTm9kZSkge1xyXG4gICAgICAgICAgICAvLyDlhYjnorrkv53pga7nvanlj6/opovkuJTpgI/mmI5cclxuICAgICAgICAgICAgdGhpcy5mYWRlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZhZGVOb2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pIC8vIDHnp5Lmt6Hlh7pcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy50YXJnZXRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMudGFyZ2V0U2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==