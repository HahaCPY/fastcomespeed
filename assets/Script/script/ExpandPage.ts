// SimpleToggleButton.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleToggleButton extends cc.Component {
    @property(cc.Node)
    content: cc.Node = null; // 要控制的內容節點

    onLoad() {
        // 初始狀態（可選）
        if (this.content) {
            this.content.active = false;
        }
        
        // 綁定按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleContent, this);
    }

    toggleContent() {
        if (this.content) {
            this.content.active = !this.content.active; // 切換顯示狀態
        }
    }

    onDestroy() {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleContent, this);
    }
}