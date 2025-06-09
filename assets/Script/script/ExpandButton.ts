const { ccclass, property } = cc._decorator;

@ccclass
export default class DropdownButton extends cc.Component {
    @property(cc.Node)
    dropdownMenu: cc.Node = null;

    private isExpanded: boolean = false;

    onLoad() {
        this.dropdownMenu.active = false;
        this.node.on(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
    }

    start() {
        // 确保菜单初始状态
        this.dropdownMenu.active = false;
    }

    toggleMenu() {
        this.isExpanded = !this.isExpanded;
        
        if (this.isExpanded) {
            this.showMenu();
        } else {
            this.hideMenu();
        }
    }

    showMenu() {
        this.dropdownMenu.active = true;
        
        // 添加淡入动画
        this.dropdownMenu.opacity = 0;
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 255 })
            .start();

        // 监听全局触摸
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    }

    hideMenu() {
        // 添加淡出动画
        cc.tween(this.dropdownMenu)
            .to(0.2, { opacity: 0 })
            .call(() => {
                this.dropdownMenu.active = false;
                cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
            })
            .start();
    }

    onGlobalTouch(event: cc.Event.EventTouch) {
        const touchPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        
        if (!this.node.getBoundingBox().contains(touchPos)) {
            if (!this.dropdownMenu.active || 
                !this.dropdownMenu.getBoundingBox().contains(touchPos)) {
                this.isExpanded = false;
                this.hideMenu();
            }
        }
    }

    onDestroy() {
        // 移除所有监听
        this.node.off(cc.Node.EventType.TOUCH_END, this.toggleMenu, this);
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_START, this.onGlobalTouch, this);
    }
}