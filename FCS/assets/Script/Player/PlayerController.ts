import { KeyboardControls } from "./KeyboardControls";
import { IInputControls } from "./IInputControls";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property(cc.Animation)
    anim: cc.Animation = null;

    @property
    speed: number = 200;

    private input: IInputControls = null;
    private currentAnim: string = "";
    private lastDir: cc.Vec2 = cc.v2(0, -1); // 預設向下

    start() {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }

        if (!this.anim) {
            cc.error("⚠️ 找不到 Animation 組件！");
            return;
        }

        this.playAnim("idleFront");
        this.input = new KeyboardControls();
    }

    update(dt: number) {
        const dir = this.input.getMoveDirection();

        if (!dir.equals(cc.Vec2.ZERO)) {
            // 移動中
            const delta = dir.clone().normalize().mul(this.speed * dt);
            this.node.x += delta.x;
            this.node.y += delta.y;

            this.lastDir = dir.clone();

            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                // 垂直移動
                this.playAnim(dir.y > 0 ? "backWalk" : "frontWalk");
                this.node.scaleX = 1; // 垂直方向不需翻轉
            } else {
                // 水平移動
                this.playAnim("frontWalk");
                this.node.scaleX = dir.x > 0 ? -1 : 1;
            }
        } else {
            // 停下來，播放最後方向對應的 idle 動畫
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "backIdle" : "idleFront");
                this.node.scaleX = 1;
            } else {
                this.playAnim("idleFront");
                this.node.scaleX = this.lastDir.x > 0 ? -1 : 1;
            }
        }
    }

    playAnim(name: string) {
        if (this.currentAnim === name) return;
        this.currentAnim = name;
        this.anim.play(name);
    }
}
