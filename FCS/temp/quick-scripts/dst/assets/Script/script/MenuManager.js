
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/MenuManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65d86/Kq/FIHZLi3KNNf8TX', 'MenuManager');
// Script/script/MenuManager.ts

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
var AudioManager_1 = require("./AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuManager = /** @class */ (function (_super) {
    __extends(MenuManager, _super);
    function MenuManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.bgmSlider = null;
        _this.sfxSlider = null;
        _this.bgmAudioId = -1;
        return _this;
    }
    MenuManager.prototype.start = function () {
        // 播放 BGM，使用全域音量
        this.bgmAudioId = cc.audioEngine.play(this.bgm, true, AudioManager_1.default.getInstance().bgmVolume);
        if (this.bgmSlider) {
            //this.bgmSlider.getComponent(cc.Slider).progress = AudioManager.getInstance().bgmVolume;
            this.bgmSlider.getComponent(cc.Slider).node.on('slide', this.onBgmSliderChanged, this);
        }
        if (this.sfxSlider) {
            //this.sfxSlider.getComponent(cc.Slider).progress = AudioManager.getInstance().sfxVolume;
            this.sfxSlider.getComponent(cc.Slider).node.on('slide', this.onSfxSliderChanged, this);
        }
    };
    MenuManager.prototype.onBgmSliderChanged = function (slider) {
        AudioManager_1.default.getInstance().bgmVolume = slider.progress;
        if (this.bgmAudioId !== -1) {
            cc.audioEngine.setVolume(this.bgmAudioId, slider.progress);
        }
    };
    MenuManager.prototype.onSfxSliderChanged = function (slider) {
        AudioManager_1.default.getInstance().sfxVolume = slider.progress;
        cc.audioEngine.setEffectsVolume(slider.progress);
    };
    MenuManager.prototype.onDestroy = function () {
        if (this.bgmAudioId !== -1) {
            cc.audioEngine.stop(this.bgmAudioId);
        }
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], MenuManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], MenuManager.prototype, "bgmSlider", void 0);
    __decorate([
        property(cc.Node)
    ], MenuManager.prototype, "sfxSlider", void 0);
    MenuManager = __decorate([
        ccclass
    ], MenuManager);
    return MenuManager;
}(cc.Component));
exports.default = MenuManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L01lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTJDQztRQXpDRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFpQ3BDLENBQUM7SUEvQkcsMkJBQUssR0FBTDtRQUNJLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLHlGQUF5RjtZQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLHlGQUF5RjtZQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFGO0lBQ0wsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixNQUFpQjtRQUNoQyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsTUFBaUI7UUFDaEMsc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDUjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1E7SUFSVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkMvQjtJQUFELGtCQUFDO0NBM0NELEFBMkNDLENBM0N3QyxFQUFFLENBQUMsU0FBUyxHQTJDcEQ7a0JBM0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZ21TbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2Z4U2xpZGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgYmdtQXVkaW9JZDogbnVtYmVyID0gLTE7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8g5pKt5pS+IEJHTe+8jOS9v+eUqOWFqOWfn+mfs+mHj1xuICAgICAgICB0aGlzLmJnbUF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdtLCB0cnVlLCBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5iZ21Wb2x1bWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmJnbVNsaWRlcikge1xuICAgICAgICAgICAgLy90aGlzLmJnbVNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmJnbVZvbHVtZTtcbiAgICAgICAgICAgIHRoaXMuYmdtU2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vbkJnbVNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNmeFNsaWRlcikge1xuICAgICAgICAgICAgLy90aGlzLnNmeFNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNmeFZvbHVtZTtcbiAgICAgICAgICAgIHRoaXMuc2Z4U2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblNmeFNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CZ21TbGlkZXJDaGFuZ2VkKHNsaWRlcjogY2MuU2xpZGVyKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmJnbVZvbHVtZSA9IHNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUF1ZGlvSWQsIHNsaWRlci5wcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNmeFNsaWRlckNoYW5nZWQoc2xpZGVyOiBjYy5TbGlkZXIpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmdldEluc3RhbmNlKCkuc2Z4Vm9sdW1lID0gc2xpZGVyLnByb2dyZXNzO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHNsaWRlci5wcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lkICE9PSAtMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSWQpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==