const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerAnimationController extends cc.Component {
    @property(cc.Node)
    toggleGroupNode: cc.Node = null; // 拖入 ToggleGroup 節點

    @property(cc.Node)
    player1: cc.Node = null; // 拖入 player1 節點

    @property(cc.Node)
    player2: cc.Node = null; // 拖入 player2 節點

    @property(cc.Button)
    buttonGirl: cc.Button = null; // 按鈕1（idle）

    @property(cc.Button)
    buttonGirl2: cc.Button = null; // 按鈕2（run）

    @property(cc.Node)
    choosePlayerNode: cc.Node = null; // 拖入選擇玩家節點

    start() {
        // 綁定按鈕事件
        this.buttonGirl.node.on('click', () => this.changeAnimation('girl_idle'), this);
        this.buttonGirl2.node.on('click', () => this.changeAnimation('girl2_idle'), this);
    }

    getSelectedPlayer(): cc.Node {
        if(this.choosePlayerNode.active === false) {
            return this.player1;
        }
        // 取得 ToggleGroup 下所有 Toggle
        const toggles = this.toggleGroupNode.getComponentsInChildren(cc.Toggle);
        const selectedIdx = toggles.findIndex(t => t.isChecked);
        // 根據選擇回傳 player1 或 player2
        if (selectedIdx === 0) {
            return this.player1;
        } else {
            return this.player2;
        }
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