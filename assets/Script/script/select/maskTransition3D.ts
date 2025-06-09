const { ccclass, property } = cc._decorator;

@ccclass
export default class MaskTransition extends cc.Component {
    @property
    startZ: number = 0;

    @property
    endZ: number = -2.419;

    onLoad() {
        // since it's MainCamera's child node, use LocalPosition
        this.node.setPosition(0, 0, this.startZ);
    }

    playTransition(onComplete?: Function) {
        cc.tween(this.node)
            .to(0.8, { position: cc.v3(0, 0, this.endZ) })
            .call(() => {
                if (onComplete) onComplete();
            })
            .start();
    }
}
