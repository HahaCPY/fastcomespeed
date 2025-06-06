import PlayerModeSelector from "./PlayerModeSelector";
const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerModeWatcher extends cc.Component {
    update() {
        // player_mode 為 1 時 unenable（隱藏），為 0 時 enable（顯示）
        this.node.active = PlayerModeSelector.player_mode === 0;
    }
}