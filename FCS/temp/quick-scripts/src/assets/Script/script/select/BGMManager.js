"use strict";
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