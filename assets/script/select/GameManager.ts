const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    onLoad() {
        cc.director.getPhysics3DManager().enabled = true;
        console.log("3D 物理系統啟用成功！");
    }

    start() {}
}
