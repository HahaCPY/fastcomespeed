const { ccclass, property } = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    start () {
        // 選擇性：可以在這裡播放背景音樂或動畫
    }

    // 🔘 這是按鈕按下時要呼叫的函式
    onClickStart () {
        cc.director.loadScene("level1-1");  // 注意大小寫要與場景檔案一致！
    }
}
