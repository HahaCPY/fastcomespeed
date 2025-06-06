
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/BGMManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a41a5Oxl5lNS7zD38mi0DH1', 'BGMManager');
// Script/script/select/BGMManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
cc.Class({
    extends: cc.Component,
    properties: {
        bgm: {
            default: null,
            type: cc.AudioSource
        }
    },
    onLoad: function () {
        if (!cc.sys.isNative && window.__BGM_LOADED__) {
            // if existed, don't load again
            this.node.destroy();
            return;
        }
        cc.game.addPersistRootNode(this.node); // persist the BGM node across scenes
        window.__BGM_LOADED__ = true;
        if (!this.bgm.isPlaying) {
            this.bgm.play();
        }
    },
    onDestroy: function () {
        console.warn("⚠️ BGMManager 被摧毀了！！音樂會中斷喔！");
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcQkdNTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDTCxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVM7SUFFckIsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVc7U0FDdkI7S0FDSjtJQUVELE1BQU07UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUMzQywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLHFDQUFxQztRQUM3RSxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9OyAvLyBNYWtlIHRoaXMgZmlsZSBhbiBleHRlcm5hbCBtb2R1bGVcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIF9fQkdNX0xPQURFRF9fPzogYm9vbGVhbjtcclxuICAgIH1cclxufVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ206IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSAmJiB3aW5kb3cuX19CR01fTE9BREVEX18pIHtcclxuICAgICAgICAgICAgLy8gaWYgZXhpc3RlZCwgZG9uJ3QgbG9hZCBhZ2FpblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpOyAgLy8gcGVyc2lzdCB0aGUgQkdNIG5vZGUgYWNyb3NzIHNjZW5lc1xyXG4gICAgICAgIHdpbmRvdy5fX0JHTV9MT0FERURfXyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5iZ20uaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdtLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8gQkdNTWFuYWdlciDooqvmkafmr4DkuobvvIHvvIHpn7PmqILmnIPkuK3mlrfllpTvvIFcIik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=