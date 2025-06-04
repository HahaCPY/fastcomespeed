const { ccclass, property } = cc._decorator;

@ccclass
export default class GoblinController extends cc.Component {
    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.Node)
    girl1: cc.Node = null;

    @property(cc.Node)
    girl2: cc.Node = null;

    @property
    speed: number = 15;

    private rb: cc.RigidBody = null;
    private state: string = "idle";
    private followTimer: number = 0;
    private followThreshold: number = 7; // 秒數
    private deskContactTimer: number = 0;
    private inDeskContact: boolean = false;
    private currentAnim: string = "";

    onLoad() {
        this.rb = this.getComponent(cc.RigidBody);
        this.state = "walk";
        this.playAnim("goblin_run");
    }

    setTargetPlayers(girl1: cc.Node, girl2: cc.Node) {
        this.girl1 = girl1;
        this.girl2 = girl2;
    }

    update(dt: number) {
        if (this.state === "dead") return;

        const player1 = this.girl1?.position;
        const player2 = this.girl2?.position;

        const target = player1 && player2
            ? (this.node.position.sub(player1).mag() < this.node.position.sub(player2).mag() ? player1 : player2)
            : player1 || player2;

        if (target && this.state !== "idle") {
            const distance = this.node.position.sub(target).mag();

            if (distance < 150) {
                this.followTimer += dt;
            } else {
                this.followTimer = 0;
            }

            this.moveTowards(target, dt);
            this.playAnim("goblin_run");

            if (this.followTimer > this.followThreshold) {
                this.die();
            }
        }

        if (this.inDeskContact) {
            this.deskContactTimer += dt;
            if (this.deskContactTimer > 4 && this.state !== "idle") {
                this.state = "idle";
                this.playAnim("goblin_idle");
            }
        } else {
            this.deskContactTimer = 0;
        }
    }

    moveTowards(target: cc.Vec3, dt: number) {
        let dir = target.sub(this.node.position);
        dir.y -= 30; // 偏下方
        dir = dir.normalize();

        this.node.x += dir.x * this.speed * dt;
        this.node.y += dir.y * this.speed * dt;

         if (Math.abs(dir.x) > 0.1) {
            this.node.scaleX = dir.x > 0 ? 0.8 : -0.8;
        }
    }

    die() {
        if (this.state === "dead") return;

        this.state = "dead";
        this.inDeskContact = false;
        this.unscheduleAllCallbacks();

        this.playAnim("goblin_die");

        this.anim.once("finished", this.onDieAnimationFinished, this);
    }

    onDieAnimationFinished() {
        this.node.destroy();
    }

    playAnim(name: string) {
        if (!this.anim || this.currentAnim === name) return;

        const state = this.anim.getAnimationState(name);
        if (state) {
            this.anim.play(name);
            this.currentAnim = name;
        }
    }

    onBeginContact(contact, self, other) {
        if (other.node.name === "DeskCollider") {
            this.inDeskContact = true;
        }
    }

    onEndContact(contact, self, other) {
        if (other.node.name === "DeskCollider") {
            this.inDeskContact = false;
            this.deskContactTimer = 0;
        }
    }
}
