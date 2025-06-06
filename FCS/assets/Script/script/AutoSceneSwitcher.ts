const { ccclass, property } = cc._decorator;

@ccclass
export default class AutoSceneSwitcher extends cc.Component {
    @property
    waitSeconds: number = 4;

    @property
    targetScene: string = "Menu";

    @property(cc.Node)
    fadeNode: cc.Node = null; // 請指定一個全螢幕黑色Sprite節點，alpha=0

    start() {
        this.scheduleOnce(() => {
            this.fadeAndSwitch();
        }, this.waitSeconds);
    }

    fadeAndSwitch() {
        if (this.fadeNode) {
            // 先確保遮罩可見且透明
            this.fadeNode.active = true;
            this.fadeNode.opacity = 0;
            cc.tween(this.fadeNode)
                .to(1, { opacity: 255 }) // 1秒淡出
                .call(() => {
                    cc.director.loadScene(this.targetScene);
                })
                .start();
        } else {
            cc.director.loadScene(this.targetScene);
        }
    }
}