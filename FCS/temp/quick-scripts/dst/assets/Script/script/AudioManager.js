
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
        _this.defaultBgm = null;
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
    AudioManager.prototype.start = function () {
        cc.audioEngine.playMusic(this.defaultBgm, true);
    };
    var AudioManager_1;
    AudioManager._instance = null;
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioManager.prototype, "defaultBgm", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXNCQztRQXBCRyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFjekIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixlQUFTLEdBQVcsR0FBRyxDQUFDOztJQUtuQyxDQUFDO3FCQXRCb0IsWUFBWTtJQU1mLHdCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGNBQVksQ0FBQyxTQUFTLEVBQUU7WUFDekIscUNBQXFDO1lBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2QyxjQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBWSxDQUFDLENBQUM7WUFDekQsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sY0FBWSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBS0QsNEJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7SUFqQmMsc0JBQVMsR0FBaUIsSUFBSSxDQUFDO0lBRjlDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvREFDRDtJQUZmLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FzQmhDO0lBQUQsbUJBQUM7Q0F0QkQsQUFzQkMsQ0F0QnlDLEVBQUUsQ0FBQyxTQUFTLEdBc0JyRDtrQkF0Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgZGVmYXVsdEJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBdWRpb01hbmFnZXIge1xyXG4gICAgICAgIGlmICghQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAvLyDlnKjnrKzkuIDlgIvloLTmma8gQ2FudmFzIOaOmyBBdWRpb01hbmFnZXLvvIzmiJbli5XmhYvlu7rnq4tcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZShcIkF1ZGlvTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZSA9IG5vZGUuYWRkQ29tcG9uZW50KEF1ZGlvTWFuYWdlcik7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmdtVm9sdW1lOiBudW1iZXIgPSAwLjU7XHJcbiAgICBwdWJsaWMgc2Z4Vm9sdW1lOiBudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5kZWZhdWx0QmdtLCB0cnVlKTtcclxuICAgIH1cclxufSJdfQ==