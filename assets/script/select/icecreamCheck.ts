const { ccclass, property } = cc._decorator;

@ccclass
export default class Stage1CheckUI extends cc.Component {
    @property(cc.Button)
    startButton: cc.Button = null;

    @property(cc.Button)
    backButton: cc.Button = null;

    @property(cc.Sprite)
    black: cc.Sprite = null;

    @property(cc.Sprite)
    mask: cc.Sprite = null;

    onLoad() {
        if (this.startButton) {
            this.startButton.node.on('click', this.onStartClick, this);
        }

        if (this.backButton) {
            this.backButton.node.on('click', this.onBackClick, this);
        }
    }

    start() {
        // black sprite active 0.5s and dissapear
        // don't fade out, just set active to false
        if (this.black) {
            this.black.node.active = true;
            this.scheduleOnce(() => {
                this.black.node.active = false;
            }, 0.5);
        }
        // wait 0.5s, mask sprite active
        // and, it will transmit from position(0, 0) to (159.748, -798.741), from scale (1, 1) to (100, 50) in 0.8s
        this.scheduleOnce(() => {
            if (this.mask) {
                this.mask.node.active = true;
                cc.tween(this.mask.node)
                    .to(0.8, { position: cc.v3(91.285, -1255.166), scaleX: 80, scaleY: 80 })
                    .call(() => {
                        this.mask.node.active = false; // after transition, set active to false
                    })
                    .start();
            }
        }, 0.5);
    }

    onDestroy() {
        if (this.startButton && this.startButton.node) {
            this.startButton.node.off('click', this.onStartClick, this);
        }

        if (this.backButton && this.backButton.node) {
            this.backButton.node.off('click', this.onBackClick, this);
        }
    }

    onStartClick() {
        console.log("start-btn pressed！");
        // cc.director.loadScene("stage2");
    }

    onBackClick() {
        console.log("back-btn pressed！");
        cc.director.loadScene("select/selectScene");
    }
}
