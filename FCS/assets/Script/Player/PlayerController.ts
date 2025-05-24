import { KeyboardControls } from "./KeyboardControls";
import { IInputControls } from "./IInputControls";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property(sp.SkeletonAnimation)
    anim: sp.SkeletonAnimation = null;

    @property
    speed: number = 200;

    private input: IInputControls = null;

    start() {
        this.input = new KeyboardControls();
    }

    update(dt: number) {
        const dir = this.input.getMoveDirection();
        if (!dir.equals(cc.Vec2.ZERO)) {
            const delta = dir.clone().normalize().mul(this.speed * dt);
            this.node.x += delta.x;
            this.node.y += delta.y;

            const scale = this.node.scale;
            if (dir.x !== 0) {
                scale.x = Math.abs(scale.x) * (dir.x > 0 ? 1 : -1);
                this.node.setScale(scale);
            }


            if (!this.anim.getAnimationState('root|Stickman@Walking').isPlaying) {
                this.anim.play('root|Stickman@Walking');
            }
        } else {
            if (!this.anim.getAnimationState('root|Stickman@Idle').isPlaying) {
                this.anim.play('root|Stickman@Idle');
            }
        }
    }
}
