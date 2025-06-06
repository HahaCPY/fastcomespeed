
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
        _this.scoreboardButton = null;
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
        // 排行榜按鈕
        if (this.scoreboardButton) {
            this.scoreboardButton.node.on('click', this.onScoreboardButtonClicked, this);
        }
    };
    MenuManager.prototype.onScoreboardButtonClicked = function () {
        cc.director.loadScene('scoreboard'); // 假設排行榜場景名稱為 'scoreboard'
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
    __decorate([
        property(cc.Button)
    ], MenuManager.prototype, "scoreboardButton", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXE1lbnVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXVEQztRQXJERyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7O0lBMENwQyxDQUFDO0lBeENHLDJCQUFLLEdBQUw7UUFDSSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVGLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQix5RkFBeUY7WUFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxRjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQix5RkFBeUY7WUFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxRjtRQUVELFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hGO0lBQ0wsQ0FBQztJQUVELCtDQUF5QixHQUF6QjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsMEJBQTBCO0lBQ25FLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsTUFBaUI7UUFDaEMsc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW1CLE1BQWlCO1FBQ2hDLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdkQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7NENBQ1I7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2U7SUFYbEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXVEL0I7SUFBRCxrQkFBQztDQXZERCxBQXVEQyxDQXZEd0MsRUFBRSxDQUFDLFNBQVMsR0F1RHBEO2tCQXZEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ21TbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2Z4U2xpZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc2NvcmVib2FyZEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJnbUF1ZGlvSWQ6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOaSreaUviBCR03vvIzkvb/nlKjlhajln5/pn7Pph49cclxuICAgICAgICB0aGlzLmJnbUF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdtLCB0cnVlLCBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5iZ21Wb2x1bWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iZ21TbGlkZXIpIHtcclxuICAgICAgICAgICAgLy90aGlzLmJnbVNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcyA9IEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmJnbVZvbHVtZTtcclxuICAgICAgICAgICAgdGhpcy5iZ21TbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikubm9kZS5vbignc2xpZGUnLCB0aGlzLm9uQmdtU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNmeFNsaWRlcikge1xyXG4gICAgICAgICAgICAvL3RoaXMuc2Z4U2xpZGVyLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzID0gQXVkaW9NYW5hZ2VyLmdldEluc3RhbmNlKCkuc2Z4Vm9sdW1lO1xyXG4gICAgICAgICAgICB0aGlzLnNmeFNsaWRlci5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5ub2RlLm9uKCdzbGlkZScsIHRoaXMub25TZnhTbGlkZXJDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaOkuihjOamnOaMiemIlVxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlYm9hcmRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZWJvYXJkQnV0dG9uLm5vZGUub24oJ2NsaWNrJywgdGhpcy5vblNjb3JlYm9hcmRCdXR0b25DbGlja2VkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TY29yZWJvYXJkQnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3Njb3JlYm9hcmQnKTsgLy8g5YGH6Kit5o6S6KGM5qac5aC05pmv5ZCN56ix54K6ICdzY29yZWJvYXJkJ1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmdtU2xpZGVyQ2hhbmdlZChzbGlkZXI6IGNjLlNsaWRlcikge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmJnbVZvbHVtZSA9IHNsaWRlci5wcm9ncmVzcztcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lkICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5iZ21BdWRpb0lkLCBzbGlkZXIucHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNmeFNsaWRlckNoYW5nZWQoc2xpZGVyOiBjYy5TbGlkZXIpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZnhWb2x1bWUgPSBzbGlkZXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShzbGlkZXIucHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5iZ21BdWRpb0lkICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmdtQXVkaW9JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19