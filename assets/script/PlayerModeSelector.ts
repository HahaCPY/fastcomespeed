const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerModeSelector extends cc.Component {
    // 全域變數
    public static player_mode: number = 0;

     @property(cc.Node)
    player: cc.Node = null;

     @property(cc.Node)
    char_select: cc.Node = null;

    protected onLoad(): void {
        PlayerModeSelector.player_mode = 0;
        this.player.active = false; // 隱藏 player 節點
        this.char_select.active = false;
    }

    // 這個函式直接設為 ToggleGroup 的 checkEvents
    onToggleGroupChanged(toggle: cc.Toggle) {
        //console.log("ToggleGroup changed:", toggle);
        // 取得 ToggleGroup 下所有 Toggle
        const toggles = this.node.getComponentsInChildren(cc.Toggle);
        // 找到目前被選中的 Toggle
        const selectedIdx = toggles.findIndex(t => t.isChecked);

        // 你要的是：toggle 0 或 2 被選中時，player_mode = 1
        if (selectedIdx === 0) {
            PlayerModeSelector.player_mode = 0;
            console.log("選擇了單人模式");
            this.player.active = false; // 隱藏 player 節點
            this.char_select.active = false; // 顯示 char_select 節點
        } else {
            PlayerModeSelector.player_mode = 1;
            this.player.active = true; // 顯示 player 節點
            this.char_select.active = true; // 隱藏 char_select 節點
            console.log("PlayerModeSelector.player_mode = 0");
        }
        cc.log("player_mode:", PlayerModeSelector.player_mode);
    }
}