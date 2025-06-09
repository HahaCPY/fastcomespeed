const { ccclass, property } = cc._decorator;

@ccclass
export default class hintAnimation extends cc.Component {
    private stage: number = 0;
    private keyScale: number = 0.01; // default scale

    onLoad() {
        this.node.scale = 0;
        this.node.active = false;
    }

    // small -> big
    playShow() {
        this.node.active = true;
        cc.Tween.stopAllByTarget(this.node);

        this.node.scale = 0;
        cc.tween(this.node)
            .to(0.2, { scale: this.keyScale }, { easing: 'backOut' })
            .start();
        
            console.log("E show up!!");
    }

    // big -> small
    playHide() {
        cc.Tween.stopAllByTarget(this.node);

        cc.tween(this.node)
            .to(0.2, { scale: 0 }, { easing: 'backIn' })
            .call(() => {
                this.node.active = false;
            })
            .start();
    }

    public setKeyScale(stage: number) {
        this.stage = stage;

        switch (this.stage) {
            case 1:
                this.keyScale = 0.01;
                break;
            case 2:
                this.keyScale = 0.0125;
                break;
            case 3:
                this.keyScale = 0.006;
                break;
            default:
                this.keyScale = 0.01;
                break;
        }
    }
}