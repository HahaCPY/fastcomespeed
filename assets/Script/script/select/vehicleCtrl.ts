const { ccclass, property } = cc._decorator;
import PositionManager from "./PositionManager";

@ccclass
export default class CharacterController extends cc.Component {
    @property
    speed: number = 3;

    private rb: cc.RigidBody3D = null;

    onLoad() {
        this.rb = this.getComponent(cc.RigidBody3D);

        const fromMenu = cc.sys.localStorage.getItem("fromMenu") === "true";

        // if the character has a saved position, set it
        const saved = fromMenu ? null : PositionManager.getSavedPosition();
        if (saved) {
            this.node.setPosition(saved);
            PositionManager.clear();
        }

        // REMEMBER TO REMOVE THE FLAG
        cc.sys.localStorage.removeItem("fromMenu");

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start() {
        console.log("character's forward: ", this.node.forward);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    private velocity = cc.v3();

    private onKeyDown(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.a) this.velocity.x = -this.speed;
        if (event.keyCode === cc.macro.KEY.d) this.velocity.x = this.speed;
        if (event.keyCode === cc.macro.KEY.w) this.velocity.z = -this.speed;
        if (event.keyCode === cc.macro.KEY.s) this.velocity.z = this.speed;
    }

    private onKeyUp(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.a || event.keyCode === cc.macro.KEY.d) this.velocity.x = 0;
        if (event.keyCode === cc.macro.KEY.w || event.keyCode === cc.macro.KEY.s) this.velocity.z = 0;
    }

    update(dt: number) {
        if (this.rb) {
            this.rb.setLinearVelocity(this.velocity);

            if (!this.velocity.equals(cc.Vec3.ZERO)) {
                // dir = the direction that character should face
                const dir = this.velocity.clone().normalize();

                // targetQuat = the target rotation quaternion
                // it can make the character face the direction of movement
                const targetQuat = new cc.Quat();
                cc.Quat.fromViewUp(targetQuat, dir, cc.Vec3.UP);

                // make the rotation smooth
                const currentQuat = new cc.Quat();
                this.node.getRotation(currentQuat);
                const smoothedQuat = new cc.Quat();
                cc.Quat.slerp(smoothedQuat, currentQuat, targetQuat, dt * 10);

                // set the smoothed rotation to the node
                this.node.setRotation(smoothedQuat);
            }
        }
        const vehicleNode = cc.find("vehicle/garbage-truck");
        if (vehicleNode) {
            const vehiclePos = vehicleNode.getPosition();
            if (vehiclePos.y < -2.5) {
                vehicleNode.setPosition(-0.069, 0.15, 0.446);
            }
        }
    }
}