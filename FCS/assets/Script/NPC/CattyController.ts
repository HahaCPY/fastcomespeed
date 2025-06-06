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
    private isDying: boolean = false; // 👉 加在 class 裡


    onLoad() {
        this.rb = this.getComponent(cc.RigidBody);
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
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

        if (this.inDeskContact && !this.isDying) {
            this.deskContactTimer += dt;

            if (this.deskContactTimer > 1 && this.state !== "dead") {
                this.die();
            }
        } else {
            this.deskContactTimer = 0;
        }


    }

    moveTowards(target: cc.Vec3, dt: number) {
        if (this.state === "dead") return; 
        let dir = target.sub(this.node.position);
        //dir.y -= 30; // 偏下方
        dir = dir.normalize();

        this.node.x += dir.x * this.speed * dt;
        this.node.y += dir.y * this.speed * dt;

         if (Math.abs(dir.x) > 0.1) {
            this.node.scaleX = dir.x > 0 ? 1 : -1;
        }
    }

die() {
    if (this.state === "dead" || this.isDying) return;

    this.isDying = true;
    this.state = "dead";
    this.inDeskContact = false;
    this.unscheduleAllCallbacks();

    const state = this.anim.getAnimationState("goblin_die");
    if (!state) {
        console.warn("❗找不到 goblin_die 動畫，直接銷毀節點");
        this.node.destroy();
        return;
    }

    this.currentAnim = "goblin_die";
    this.anim.play("goblin_die");

    this.anim.once("finished", () => {
        this.node.destroy();
    }, this);
}


playAnim(name: string) {
    // 🛑 如果已死亡，不准再切動畫
    if (this.state === "dead") return;

    if (!this.anim || this.currentAnim === name) return;

    const state = this.anim.getAnimationState(name);
    if (state) {
        this.anim.play(name);
        this.currentAnim = name;
    }
}


    onBeginContact(contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = true;
        }
    }

    onEndContact(contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = false;
            this.deskContactTimer = 0;
        }
    }

}
