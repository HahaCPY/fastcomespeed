const { ccclass, property } = cc._decorator;

@ccclass
export default class CloseButton extends cc.Component {
    @property(cc.Node)
    targetNode: cc.Node = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.closeTarget, this);
    }

    closeTarget() {
        if (this.targetNode) {
            this.targetNode.active = false;
        }
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.closeTarget, this);
    }
}