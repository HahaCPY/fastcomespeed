const { ccclass, property } = cc._decorator;

@ccclass
export default class cameraCtrl extends cc.Component {

    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Vec3)
    offset: cc.Vec3 = new cc.Vec3(0, 4, 5);

    @property(cc.Integer)
    followSpeed: number = 5;

    start() {
        if (!this.target) {
            console.warn("There's no target node in cameraCtrl!");
            return;
        }

        // turn the local position of the target node into world position
        // Vec3.ZERO = target's center
        const targetWorldPos = this.target.convertToWorldSpaceAR(cc.Vec3.ZERO);

        // set the initial position of the camera
        // initialCameraWorldPos = targetWorldPos + offset
        const initialCameraWorldPos = new cc.Vec3();
        cc.Vec3.add(initialCameraWorldPos, targetWorldPos, this.offset);

        // convert the initial camera world position to local position
        this.node.position = this.node.parent ? this.node.parent.convertToNodeSpaceAR(initialCameraWorldPos) : initialCameraWorldPos;
        
        this.node.lookAt(targetWorldPos, cc.Vec3.UP);
    }

    update(dt: number) {
        if (!this.target) return;

        // get the world position of the target node every dt
        const targetWorldPos = this.target.convertToWorldSpaceAR(cc.Vec3.ZERO);

        // calculate the desired world position of the camera
        const desiredWorldPosition = new cc.Vec3();
        cc.Vec3.add(desiredWorldPosition, targetWorldPos, this.offset);

        // get the current world position of the camera
        const currentCameraWorldPosition = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO);

        // smooth the camera's movement towards the desired position by using lerp()
        const smoothedWorldPosition = new cc.Vec3();
        cc.Vec3.lerp(smoothedWorldPosition, currentCameraWorldPosition, desiredWorldPosition, this.followSpeed * dt);

        // convert the smoothed world position to local position and set it to the camera node
        this.node.position = this.node.parent ? this.node.parent.convertToNodeSpaceAR(smoothedWorldPosition) : smoothedWorldPosition;

        this.node.lookAt(targetWorldPos, cc.Vec3.UP);
    }
}
