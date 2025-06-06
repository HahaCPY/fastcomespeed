const { ccclass, property } = cc._decorator;
import GameManager from "./GameManager-level1";

@ccclass
export default class PlayerAnimationController extends cc.Component {
    @property(cc.Node)
    toggleGroupNode: cc.Node = null;

    @property(cc.Node)
    player1: cc.Node = null;

    @property(cc.Node)
    player2: cc.Node = null;

    @property(cc.Button)
    buttonGirl: cc.Button = null;

    @property(cc.Button)
    buttonGirl2: cc.Button = null;

    @property(cc.Node)
    choosePlayerNode: cc.Node = null;

    // ✅ 記錄 player1 / player2 各自的角色選擇
    public static player1CharIndex: number = 0; // 0 = girl1, 1 = girl2
    public static player2CharIndex: number = 0;

    start() {
        this.buttonGirl.node.on('click', () => {
            this.assignCharIndex(0); // girl1
        }, this);

        this.buttonGirl2.node.on('click', () => {
            this.assignCharIndex(1); // girl2
        }, this);
    }

    getSelectedPlayer(): cc.Node {
        if (this.choosePlayerNode.active === false) {
            return this.player1;
        }
        const toggles = this.toggleGroupNode.getComponentsInChildren(cc.Toggle);
        const selectedIdx = toggles.findIndex(t => t.isChecked);
        return selectedIdx === 0 ? this.player1 : this.player2;
    }

    // ✅ 改這裡：根據選擇的玩家，記錄他選的角色，並切動畫
    assignCharIndex(index: number) {
        const player = this.getSelectedPlayer();

        if (player === this.player1) {
            PlayerAnimationController.player1CharIndex = index;
        } else {
            PlayerAnimationController.player2CharIndex = index;
        }

        const prefix = index === 0 ? "girl" : "girl2";
        this.changeAnimation(`${prefix}_idle`);
    }

    changeAnimation(animName: string) {
        const player = this.getSelectedPlayer();
        if (!player) return;
        const anim = player.getComponent(cc.Animation);
        if (anim) {
            anim.play(animName);
        }
    }
}
