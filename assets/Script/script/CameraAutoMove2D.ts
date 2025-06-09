const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraAutoMove2D extends cc.Component {
    @property(cc.Node)
    cameraNode: cc.Node = null;

    @property
    moveDuration: number = 5.0; // 攝影機移動所需秒數

    @property
    rotateDuration: number = 3.0; // 攝影機旋轉所需秒數

    start() {
        this.moveCamera();
    }

    moveCamera() {
        // 取得目前攝影機位置
        let startPos = this.cameraNode.position;
        let targetPos = new cc.Vec3(startPos.x, startPos.y, 3000);

        cc.tween(this.cameraNode)
            .to(this.moveDuration, { position: targetPos })
            .start();
    }
}