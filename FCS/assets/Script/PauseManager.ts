const { ccclass, property } = cc._decorator;

@ccclass
export default class PauseManager extends cc.Component {
    @property(cc.Node)
    pausePanel: cc.Node = null;

    private isPaused: boolean = false;

    onLoad() {
        this.pausePanel.active = false;
        this.isPaused = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.escape) {
            this.togglePause();
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        this.pausePanel.active = this.isPaused;
        cc.director.pause();  // 暫停遊戲邏輯

        if (!this.isPaused) {
            cc.director.resume();  // 恢復遊戲邏輯
        }
    }
}
