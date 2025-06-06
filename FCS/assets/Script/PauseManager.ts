const { ccclass, property } = cc._decorator;

@ccclass
export default class PauseManager extends cc.Component {
    @property(cc.Prefab)
    pausePanelPrefab: cc.Prefab = null;

    private pausePanelNode: cc.Node = null;
    private isPaused: boolean = false;

    onLoad() {
        if (this.pausePanelPrefab) {
            this.pausePanelNode = cc.instantiate(this.pausePanelPrefab);
            this.node.addChild(this.pausePanelNode);
            this.pausePanelNode.active = false;
        }
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

        // 新增這一段
        if (this.isPaused) {
            cc.director.pause(); // 暫停
        } else {
            cc.director.resume(); // 恢復
        }

        if (this.pausePanelNode) this.pausePanelNode.active = this.isPaused;
    }

    public isGamePaused() {
        return this.isPaused;
    }
}
