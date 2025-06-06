const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    @property({ type: cc.AudioClip })
    defaultBgm: cc.AudioClip = null;

    onLoad() {
        cc.director.getPhysics3DManager().enabled = true;
        console.log("3D 物理系統啟用成功！");
    }

    start(){
        cc.audioEngine.playMusic(this.defaultBgm, true);
    }
}
