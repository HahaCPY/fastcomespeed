const { ccclass, property } = cc._decorator;

@ccclass
export default class MoveDownOnLoad extends cc.Component {
    // add a audio clip
    @property(cc.AudioClip)
    opendoor: cc.AudioClip = null;

    private opendoorAudioId: number = -1;

    onLoad() {
        this.node.setPosition(0, 0);
        this.moveDown();
        // play audio when the animation starts
        this.opendoorAudioId = cc.audioEngine.play(this.opendoor, false, 1.0);
        // after 6s, stop the opendoor audio
        this.scheduleOnce(() => {
            cc.audioEngine.stop(this.opendoorAudioId);
        }, 6); // 假設動畫持續時間為 6 秒
    }

    // play audio when the animation starts, and audio stop when the animation ends
    moveDown() {
    cc.tween(this.node)
        .to(6, { position: cc.v3(0, 400, 0) }) // z 設 0
        .start();
    }
}