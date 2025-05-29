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
    private lastDir: cc.Vec2 = cc.v2(0, -1); // 預設向下（前）

    start() {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }

        if (!this.anim) {
            cc.error("⚠️ 找不到 Animation 組件！");
            return;
        }

        this.playAnim("girl_idle_back"); // 一開始播放背面靜止
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
                if (dir.y > 0) {
                    this.playAnim("girl_walk_back"); // 向上（後）
                } else {
                    this.playAnim("girl_idle_walk"); // 向下（前）
                }
                this.node.scaleX = 1;
            } else {
                // 水平移動
                if (dir.x > 0) {
                    this.playAnim("girl_walk_right");
                    this.node.scaleX = 1;
                } else {
                    this.playAnim("girl_walk_left");
                    this.node.scaleX = 1;
                }
            }
        } else {
            // 停止移動
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                if (this.lastDir.y > 0) {
                    this.playAnim("girl_idle_back");
                } else {
                    this.playAnim("girl_idle");
                }
                this.node.scaleX = 1;
            } else {
                if (this.lastDir.x > 0) {
                    this.playAnim("girl_idle_right");
                    this.node.scaleX = 1;
                } else {
                    this.playAnim("girl_idle_left");
                    this.node.scaleX = 1;
                }
            }
        }
    }

    playAnim(name: string) {
        if (this.currentAnim === name) return;
        this.currentAnim = name;
        this.anim.play(name);
    }
}
