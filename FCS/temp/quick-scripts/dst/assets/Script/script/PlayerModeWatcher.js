
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/PlayerModeWatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e36eDJejpBEKpG1o5PIgVg', 'PlayerModeWatcher');
// Script/script/PlayerModeWatcher.ts

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
var PlayerModeSelector_1 = require("./PlayerModeSelector");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerModeWatcher = /** @class */ (function (_super) {
    __extends(PlayerModeWatcher, _super);
    function PlayerModeWatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerModeWatcher.prototype.update = function () {
        // player_mode 為 1 時 unenable（隱藏），為 0 時 enable（顯示）
        this.node.active = PlayerModeSelector_1.default.player_mode === 0;
    };
    PlayerModeWatcher = __decorate([
        ccclass
    ], PlayerModeWatcher);
    return PlayerModeWatcher;
}(cc.Component));
exports.default = PlayerModeWatcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFBsYXllck1vZGVXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUNoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDs7SUFLQSxDQUFDO0lBSkcsa0NBQU0sR0FBTjtRQUNJLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBa0IsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFKZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FLckM7SUFBRCx3QkFBQztDQUxELEFBS0MsQ0FMOEMsRUFBRSxDQUFDLFNBQVMsR0FLMUQ7a0JBTG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJNb2RlU2VsZWN0b3IgZnJvbSBcIi4vUGxheWVyTW9kZVNlbGVjdG9yXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNb2RlV2F0Y2hlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gcGxheWVyX21vZGUg54K6IDEg5pmCIHVuZW5hYmxl77yI6Zqx6JeP77yJ77yM54K6IDAg5pmCIGVuYWJsZe+8iOmhr+ekuu+8iVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBQbGF5ZXJNb2RlU2VsZWN0b3IucGxheWVyX21vZGUgPT09IDA7XHJcbiAgICB9XHJcbn0iXX0=