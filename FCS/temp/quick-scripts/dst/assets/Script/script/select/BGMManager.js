
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC9CR01NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNMLE9BQU8sRUFBRSxFQUFFLENBQUMsU0FBUztJQUVyQixVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVztTQUN2QjtLQUNKO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQzNDLCtCQUErQjtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDVjtRQUVELEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUscUNBQXFDO1FBQzdFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH07IC8vIE1ha2UgdGhpcyBmaWxlIGFuIGV4dGVybmFsIG1vZHVsZVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIF9fQkdNX0xPQURFRF9fPzogYm9vbGVhbjtcbiAgICB9XG59XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJnbToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSAmJiB3aW5kb3cuX19CR01fTE9BREVEX18pIHtcbiAgICAgICAgICAgIC8vIGlmIGV4aXN0ZWQsIGRvbid0IGxvYWQgYWdhaW5cbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpOyAgLy8gcGVyc2lzdCB0aGUgQkdNIG5vZGUgYWNyb3NzIHNjZW5lc1xuICAgICAgICB3aW5kb3cuX19CR01fTE9BREVEX18gPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5iZ20uaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJnbS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCLimqDvuI8gQkdNTWFuYWdlciDooqvmkafmr4DkuobvvIHvvIHpn7PmqILmnIPkuK3mlrfllpTvvIFcIik7XG4gICAgfVxufSk7XG4iXX0=