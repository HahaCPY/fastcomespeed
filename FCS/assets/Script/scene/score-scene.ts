const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultScene extends cc.Component {
    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    sceneLabel: cc.Label = null;  // 拖 UI Label 進來

    @property({ type: cc.AudioClip })
    resultBgm: cc.AudioClip = null;

    @property({ type: cc.Prefab })
    star1Prefab: cc.Prefab = null;

    @property({ type: cc.Prefab })
    star2Prefab: cc.Prefab = null;

    @property({ type: cc.Prefab })
    star3Prefab: cc.Prefab = null;

    @property({ type: cc.Node })
    starParent: cc.Node = null;

    @property({ type: cc.Node })
    char1Node: cc.Node = null;
    @property({ type: [cc.SpriteFrame] })
    char1Frames: cc.SpriteFrame[] = [];   // 3張圖片

    @property({ type: cc.Node })
    char2Node: cc.Node = null;
    @property({ type: [cc.SpriteFrame] })
    char2Frames: cc.SpriteFrame[] = [];   // 3張圖片

    private char1FrameIdx = 0;
    private char2FrameIdx = 0;
    private _sceneChanged = false;

    async start() {
        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(this.resultBgm, true);

        // 拿分數和來源場景
        const scorePersistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (!scorePersistNode) {
            cc.error('找不到 ScorePersist persist node');
            return;
        }
        const scorePersistScript = scorePersistNode.getComponent('ScorePersist');
        const score = scorePersistScript.score || 0;
        const fromScene = scorePersistScript.fromScene || '';

        // 拿 userId
        const userPersistNode = cc.director.getScene().getChildByName('PersistentUser');
        if (!userPersistNode) {
            cc.warn('找不到 PersistentUser persist node，無法同步分數');
        } else {
            const userScript = userPersistNode.getComponent('PersistentUser');
            const userId = userScript.userId;
            const username = userScript.nickname || ""; // <-- 這裡

            if (userId) {
                try {
                    const db = firebase.database();
                    const scoreRef = db.ref(`scores/${userId}`);
                    const snapshot = await scoreRef.once("value");
                    const oldScore = snapshot.val() ? snapshot.val().score : 0;
                    if (score > oldScore) {
                        await scoreRef.set({
                            score,
                            scene: fromScene,
                            username    // <== 寫入 username
                        });
                        cc.log("分數已刷新到 Firebase");
                    } else {
                        cc.log("分數未刷新（未超過舊分數）");
                    }
                } catch (err) {
                    cc.error("Firebase 更新分數失敗", err);
                }
            } else {
                cc.warn("userId 尚未設定，無法同步分數");
            }
        }


        // 顯示分數
        if (this.scoreLabel) {
            this.scoreLabel.string = `${score}`;
        }

        // 顯示來源場景名稱
        if (this.sceneLabel) {
            this.sceneLabel.string = fromScene;
        }

        // 根據分數顯示 n 顆星
        let starPrefabs = [];
        if (score >= 500) {
            starPrefabs = [this.star3Prefab, this.star2Prefab, this.star1Prefab];
        } else if (score >= 200) {
            starPrefabs = [this.star2Prefab, this.star1Prefab];
        } else if (score >= 50) {
            starPrefabs = [this.star1Prefab];
        }

        // 實例化並顯示
        if (this.starParent) {
            for (let prefab of starPrefabs) {
                if (prefab) {
                    const node = cc.instantiate(prefab);
                    this.starParent.addChild(node);
                }
            }
        }

        this.schedule(this.updateCharFrames, 0.25);

        // 1. 註冊空白鍵監聽
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        // 2. 十秒自動跳場景
        this.scheduleOnce(() => {
            this.gotoMenu();
        }, 10);
    }


    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        // 空白鍵是 cc.macro.KEY.space
        if (event.keyCode === cc.macro.KEY.space) {
            this.gotoMenu();
        }
    }

    gotoMenu() {
        if (this._sceneChanged) return;
        this._sceneChanged = true;
        cc.director.loadScene('selectScene');  // 你的主選單場景名
    }

    updateCharFrames() {
        // 角色1
        if (this.char1Node && this.char1Frames.length > 0) {
            let sprite1 = this.char1Node.getComponent(cc.Sprite);
            if (sprite1) {
                sprite1.spriteFrame = this.char1Frames[this.char1FrameIdx];
                this.char1FrameIdx = (this.char1FrameIdx + 1) % this.char1Frames.length;
            }
        }

        // 角色2
        if (this.char2Node && this.char2Frames.length > 0) {
            let sprite2 = this.char2Node.getComponent(cc.Sprite);
            if (sprite2) {
                sprite2.spriteFrame = this.char2Frames[this.char2FrameIdx];
                this.char2FrameIdx = (this.char2FrameIdx + 1) % this.char2Frames.length;
            }
        }
    }
}
