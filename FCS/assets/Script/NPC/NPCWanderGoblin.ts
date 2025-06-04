const { ccclass, property } = cc._decorator;

@ccclass
export default class NPCWanderGoblin extends cc.Component {
    @property
    minSpeed: number = 30;

    @property
    maxSpeed: number = 40;

    @property(cc.Animation)
    anim: cc.Animation = null;

    private dir: cc.Vec2 = cc.v2(0, 0);
    private speed: number = 0;
    private rb: cc.RigidBody = null;

    start() {
        this.rb = this.getComponent(cc.RigidBody);
        this.schedule(this.pickRandomDirection, Math.random() * 2 + 1); // 每 1~3 秒換方向
        this.pickRandomDirection();
    }

    pickRandomDirection() {
        const angle = Math.random() * Math.PI * 2;
        this.dir = cc.v2(Math.cos(angle), Math.sin(angle)).normalize();
        this.speed = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);

        if (this.anim) this.anim.play("goblin_run");
    }

    update(dt: number) {
        if (this.rb) {
            this.rb.linearVelocity = this.dir.mul(this.speed);

            if (Math.abs(this.dir.x) > Math.abs(this.dir.y)) {
                this.node.scaleX = this.dir.x > 0 ? 1 : -1;
            }
        }
    }


    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === "DeskCollider") {
            this.dir = cc.v2(0, 0);
            this.speed = 0;
            if (this.anim) this.anim.play("goblin_idle");
        }
    }
}
