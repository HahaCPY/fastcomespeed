export { }; // Make this file an external module

declare global {
    interface Window {
        __BGM_LOADED__?: boolean;
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        bgm: {
            default: null,
            type: cc.AudioSource
        }
    },

    onLoad() {
        if (!cc.sys.isNative && window.__BGM_LOADED__) {
            // if existed, don't load again
            this.node.destroy();
            return;
        }

        cc.game.addPersistRootNode(this.node);  // persist the BGM node across scenes
        window.__BGM_LOADED__ = true;

        if (!this.bgm.isPlaying) {
            this.bgm.play();
        }
    },

    onDestroy() {
        console.warn("⚠️ BGMManager 被摧毀了！！音樂會中斷喔！");
    }
});
