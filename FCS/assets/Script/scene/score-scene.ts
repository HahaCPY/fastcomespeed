const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultScene extends cc.Component {
    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    sceneLabel: cc.Label = null;  // <== 新增，拖 UI Label 進來

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

    start() {
        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(this.resultBgm, true);

        // 取得 persist node
        const persistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (!persistNode) {
            cc.error('找不到 ScorePersist persist node');
            return;
        }
        const persistScript = persistNode.getComponent('ScorePersist');
        const score = persistScript.score || 0;
        const fromScene = persistScript.fromScene || '';

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
        if (score >= 150) {
            starPrefabs = [this.star3Prefab, this.star2Prefab, this.star1Prefab];
        } else if (score >= 100) {
            starPrefabs = [this.star2Prefab, this.star1Prefab];
        } else if (score > 60) {
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
