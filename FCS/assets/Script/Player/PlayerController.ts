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
    private rb: cc.RigidBody = null;

    start() {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }

        this.rb = this.getComponent(cc.RigidBody);
        if (!this.rb) {
            cc.error("❌ 找不到 RigidBody2D 組件！");
            return;
        }

        this.playAnim("girl_idle_back");
        this.input = new KeyboardControls();
    }

    update(dt: number) {
        const dir = this.input.getMoveDirection();

        if (!dir.equals(cc.Vec2.ZERO)) {
            // 使用物理引擎的 linearVelocity 控制移動
            this.rb.linearVelocity = dir.clone().normalize().mul(this.speed);
            this.lastDir = dir.clone();

            // 動畫切換（與方向判斷無變）
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim("girl_walk_back");
                } else {
                    this.playAnim("girl_idle_walk");
                }
                this.node.scaleX = 1;
            } else {
                if (dir.x > 0) {
                    this.playAnim("girl_walk_right");
                    this.node.scaleX = 1;
                } else {
                    this.playAnim("girl_walk_left");
                    this.node.scaleX = 1;
                }
            }
        } else {
            // 停止移動（速度歸零）
            this.rb.linearVelocity = cc.v2(0, 0);

            // 播放靜止動畫
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "girl_idle_back" : "girl_idle");
            } else {
                this.playAnim(this.lastDir.x > 0 ? "girl_idle_right" : "girl_idle_left");
            }
            this.node.scaleX = 1;
        }
    }

    playAnim(name: string) {
        if (this.currentAnim === name) return;
        this.currentAnim = name;
        this.anim.play(name);
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 1) {
            console.log('撞到桌子！');
            // 若需要可以加入額外撞牆回彈邏輯
        } else if (otherCollider.tag === 2){
            console.log('在地板上');
        }
    }
}
