const { ccclass, property } = cc._decorator;

@ccclass
export default class Leaderboard extends cc.Component {
    @property(cc.Node)
    content: cc.Node = null; // 這是你放排行榜列的容器，拖 scoreboardCtrl 進來

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null; // 每筆資料的 prefab，例如 leaderboardItem

    @property(cc.Button)
    backButton: cc.Button = null; // 返回按鈕

    start() {
        this.loadLeaderboard();

        // 返回按鈕事件
        this.backButton.node.on("click", this.onBackButtonClicked, this);
    }

    onBackButtonClicked() {
        // 返回主畫面或其他操作
        cc.director.loadScene("Menu"); // 假設主畫面的場景名稱是 MainMenu
    }

    loadLeaderboard() {
        const db = firebase.database();
        const leaderboardRef = db.ref("scores")
            .orderByChild("score")
            .limitToLast(5); // 取最後5筆，因為 Firebase 預設是由小到大排序

        leaderboardRef.once("value", (snapshot) => {
            const data = snapshot.val();
            if (!data) return;

            // 排序成由高到低
            const ranking = Object.values(data).sort((a: any, b: any) => b.score - a.score);

            // 清除舊節點
            this.content.removeAllChildren();

            // 顯示資料
            ranking.forEach((entry: any, index: number) => {
                const item = cc.instantiate(this.itemPrefab);
                item.active = true;

                // 取得內部 Label 元件並設定文字
                const label = item.getComponentInChildren(cc.Label);
                if (label) {
                    // username and score has space between them
                    label.string = `${index + 1}. ${entry.username}  ${entry.score}`;
                }

                item.setPosition(0, -index * 60); // 每個項目間隔 60 像素

                this.content.addChild(item);
            });
        });
    }
}
