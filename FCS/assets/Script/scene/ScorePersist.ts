const { ccclass, property } = cc._decorator;

@ccclass
export default class ScorePersist extends cc.Component {
    public score: number = 0;
    public fromScene: string = "";
    onLoad() {
        cc.game.addPersistRootNode(this.node); // 讓這個 node 換場景不會被移除
    }
}