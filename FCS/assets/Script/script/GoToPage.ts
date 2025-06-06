const { ccclass, property } = cc._decorator;

@ccclass
export default class GoToPage extends cc.Component {
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.goToPage, this);
    }

    goToPage() {
        cc.sys.localStorage.setItem("fromMenu", "true");
        cc.director.loadScene("selectScene");
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.goToPage, this);
    }
}