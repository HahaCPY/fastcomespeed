
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXE1lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTJDQztRQXpDRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFpQ3BDLENBQUM7SUEvQkcsMkJBQUssR0FBTDtRQUNJLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLHlGQUF5RjtZQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLHlGQUF5RjtZQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFGO0lBQ0wsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixNQUFpQjtRQUNoQyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsTUFBaUI7UUFDaEMsc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0Q0FDUjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1E7SUFSVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkMvQjtJQUFELGtCQUFDO0NBM0NELEFBMkNDLENBM0N3QyxFQUFFLENBQUMsU0FBUyxHQTJDcEQ7a0JBM0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnbVNsaWRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzZnhTbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYmdtQXVkaW9JZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+IEJHTe+8jOS9v+eUqOWFqOWfn+mfs+mHj1xyXG4gICAgICAgIHRoaXMuYmdtQXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ20sIHRydWUsIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmJnbVZvbHVtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJnbVNsaWRlcikge1xyXG4gICAgICAgICAgICAvL3RoaXMuYmdtU2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzID0gQXVkaW9NYW5hZ2VyLmdldEluc3RhbmNlKCkuYmdtVm9sdW1lO1xyXG4gICAgICAgICAgICB0aGlzLmJnbVNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25CZ21TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2Z4U2xpZGVyKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zZnhTbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3MgPSBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZnhWb2x1bWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4U2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLm5vZGUub24oJ3NsaWRlJywgdGhpcy5vblNmeFNsaWRlckNoYW5nZWQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJnbVNsaWRlckNoYW5nZWQoc2xpZGVyOiBjYy5TbGlkZXIpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5iZ21Wb2x1bWUgPSBzbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuYmdtQXVkaW9JZCwgc2xpZGVyLnByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZnhTbGlkZXJDaGFuZ2VkKHNsaWRlcjogY2MuU2xpZGVyKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmdldEluc3RhbmNlKCkuc2Z4Vm9sdW1lID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoc2xpZGVyLnByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmJnbUF1ZGlvSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==