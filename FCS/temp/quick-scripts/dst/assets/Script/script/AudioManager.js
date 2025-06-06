
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd66a0PmN2FL+6JFPHl/Q3Ek', 'AudioManager');
// Script/script/AudioManager.ts

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
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgmVolume = 0.5;
        _this.sfxVolume = 0.5;
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.getInstance = function () {
        if (!AudioManager_1._instance) {
            // 在第一個場景 Canvas 掛 AudioManager，或動態建立
            var node = new cc.Node("AudioManager");
            AudioManager_1._instance = node.addComponent(AudioManager_1);
            cc.game.addPersistRootNode(node);
        }
        return AudioManager_1._instance;
    };
    var AudioManager_1;
    AudioManager._instance = null;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWVDO1FBRlUsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixlQUFTLEdBQVcsR0FBRyxDQUFDOztJQUNuQyxDQUFDO3FCQWZvQixZQUFZO0lBR2Ysd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsY0FBWSxDQUFDLFNBQVMsRUFBRTtZQUN6QixxQ0FBcUM7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZDLGNBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFZLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxjQUFZLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7O0lBVmMsc0JBQVMsR0FBaUIsSUFBSSxDQUFDO0lBRDdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FlaEM7SUFBRCxtQkFBQztDQWZELEFBZUMsQ0FmeUMsRUFBRSxDQUFDLFNBQVMsR0FlckQ7a0JBZm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1ZGlvTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFBdWRpb01hbmFnZXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIC8vIOWcqOesrOS4gOWAi+WgtOaZryBDYW52YXMg5o6bIEF1ZGlvTWFuYWdlcu+8jOaIluWLleaFi+W7uueri1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKFwiQXVkaW9NYW5hZ2VyXCIpO1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuX2luc3RhbmNlID0gbm9kZS5hZGRDb21wb25lbnQoQXVkaW9NYW5hZ2VyKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBBdWRpb01hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiZ21Wb2x1bWU6IG51bWJlciA9IDAuNTtcclxuICAgIHB1YmxpYyBzZnhWb2x1bWU6IG51bWJlciA9IDAuNTtcclxufSJdfQ==