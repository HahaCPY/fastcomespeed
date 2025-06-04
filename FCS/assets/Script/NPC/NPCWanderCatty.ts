// NPCWanderCatty.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class NPCWanderCatty extends cc.Component {
    @property({ type: cc.Animation })
    anim: cc.Animation = null;

    @property
    speed: number = 50;

    private direction: cc.Vec2 = cc.v2(1, 0);
    private changeDirectionInterval: number = 2;

    start() {
        this.schedule(this.pickNewDirection, this.changeDirectionInterval);
        this.playAnim("cat_idle");
    }

    update(dt: number) {
        const movement = this.direction.clone().normalize().mul(this.speed * dt);
        this.node.setPosition(this.node.getPosition().add(movement));

        if (!this.anim.getAnimationState("cat_run").isPlaying) {
            this.playAnim("cat_run");
        }
    }

    pickNewDirection() {
        const angle = Math.random() * 2 * Math.PI;
        this.direction = cc.v2(Math.cos(angle), Math.sin(angle));
        this.node.scaleX = this.direction.x >= 0 ? 1 : -1;
    }

    playAnim(name: string) {
        if (this.anim && this.anim.getAnimationState(name)) {
            this.anim.play(name);
        }
    }
}