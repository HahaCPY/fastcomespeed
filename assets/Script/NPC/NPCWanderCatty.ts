const { ccclass, property } = cc._decorator;

@ccclass
export default class NPCWanderCatty extends cc.Component {
    @property(cc.Animation)
    anim: cc.Animation = null;

    @property
    speed: number = 50;

    private direction: cc.Vec3 = cc.v3();
    private moveTimer: number = 0;
    private animTimer: number = 0;

    onLoad() {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.pickRandomDirection();
        this.playAnim("cat_run");
    }

update(dt: number) {
    // 🐾 移動
    const moving = this.direction.mag() > 0.1;
    if (moving) {
        this.node.x += this.direction.x * this.speed * dt;
        this.node.y += this.direction.y * this.speed * dt;
    }

    // ⏱️ 定時換方向
    this.moveTimer += dt;
    if (this.moveTimer >= 2 + Math.random() * 2) {
        this.pickRandomDirection();
        this.moveTimer = 0;
    }

    // 🎬 自動切動畫
    if (moving) {
        this.playAnim("cat_run");
    } else {
        this.playAnim("cat_idle");
    }

    // 👀 左右翻轉
    if (Math.abs(this.direction.x) > 0.1) {
        this.node.scaleX = this.direction.x > 0 ? 5 : -5;
    }
}


    pickRandomDirection() {
        const angle = Math.random() * Math.PI * 2;
        this.direction = cc.v3(Math.cos(angle), Math.sin(angle), 0);
    }

    randomAnim() {
        const choices = ["cat_idle", "cat_run", "cat_jump"];
        const name = choices[Math.floor(Math.random() * choices.length)];
        this.playAnim(name);
    }

    playAnim(name: string) {
        if (!this.anim || !this.anim.getAnimationState(name)) return;
        this.anim.play(name);
    }
}
