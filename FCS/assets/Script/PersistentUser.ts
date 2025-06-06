const { ccclass, property } = cc._decorator;

@ccclass
export default class PersistentUser extends cc.Component {
    public userId: string = "";
    public email: string = "";
    public nickname: string = "";

    onLoad() {
        // 避免重複掛 persist node
        if (!cc.game.isPersistRootNode(this.node)) {
            cc.game.addPersistRootNode(this.node);
            cc.log('[PersistentUser] addPersistRootNode');
        }
    }

    setUserInfo(userId: string, email: string = "", nickname: string = "") {
        this.userId = userId;
        this.email = email;
        this.nickname = nickname;
        // 也可以同步存本地端
        cc.sys.localStorage.setItem('userId', userId);
        cc.sys.localStorage.setItem('email', email);
        cc.sys.localStorage.setItem('nickname', nickname);
    }
}