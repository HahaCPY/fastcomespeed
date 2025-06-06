const { ccclass, property } = cc._decorator;

@ccclass
export default class MoveDownOnLoad extends cc.Component {
    onLoad() {
        this.node.setPosition(0, 0);
        this.moveDown();
    }

    moveDown() {
    cc.tween(this.node)
        .to(6, { position: cc.v3(0, 400, 0) }) // z 設 0
        .start();
    }
}