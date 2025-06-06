const { ccclass, property } = cc._decorator;

@ccclass("MenuBar") 
export default class MenuBar extends cc.Component {
    @property({ type: [cc.Node] })
    slots: cc.Node[] = [];

    @property({ type: [cc.Prefab] })
    dishPrefabs: cc.Prefab[] = [];

    @property({ type: cc.Label })
    timerLabel: cc.Label = null; // 拖拉倒數時間的 Label

    @property({ type: cc.Prefab })
    timeUpPrefab: cc.Prefab = null;

    @property({ type: cc.Label })
    scoreLabel: cc.Label = null; // 拖拉分數的 Label

    @property
    totalTime: number = 60; // 總倒數秒數

    @property
    dishesPerGame: number = 3; // 格子數

    @property
    dishInterval: number = 5;  // 每隔幾秒產生一個

    @property({ type: cc.AudioClip })
    bgm: cc.AudioClip = null;

    @property({ type: cc.Prefab })
    fireEffectPrefab: cc.Prefab = null;

    @property({ type: cc.Node })
    timerNode: cc.Node = null;  // 拖 timerLabel 的 node 進來
    private isShaking: boolean = false; // 避免重複加動畫


    private fireEffectNode: cc.Node = null;
        
    private isFireShown: boolean = false;




    private currentDishIdx: number = 0;
    private currentTime: number = 0;
    private score: number = 0; // 加這行

    start() {
        this.resetMenu();
        this.startGame();
        if (this.bgm) {
            cc.audioEngine.playMusic(this.bgm, true);
        }
    }

    /** 確保場上一直維持 4 道菜 */
    checkAndFillSlots() {
        let currentCount = this.slots.filter(slot => slot.children.length > 0).length;
        while (currentCount < this.slots.length) {
            this.generateNextDish();
            currentCount++;
        }
    }


    resetMenu() {
        for (let slot of this.slots) {
            slot.removeAllChildren();
        }
        this.currentDishIdx = 0;
        this.unschedule(this.generateNextDish);
        this.unschedule(this.countdownStep);

        this.setScore(0); // 分數歸零
    }

    startGame() {
        this.currentTime = this.totalTime;
        this.updateLabel();

        this.schedule(this.countdownStep, 1);
        this.generateNextDish();
        this.schedule(this.generateNextDish, this.dishInterval);

        this.setScore(0); // 遊戲開始分數歸零
    }

    countdownStep() {
        if (this.currentTime > 0) {
            this.currentTime--;
            this.updateLabel();

            // ⏱️ 剩下 15 秒時顯示火焰
            if (this.currentTime === 10 && !this.fireEffectNode) {
                this.spawnFireEffect();
            }

            
        if (this.currentTime === 10 && !this.isShaking) {
            this.startTimerShake(); // 🎬 啟動震動
        }

            if (this.currentTime === 0) {
                this.timeUp();
                this.stopTimerShake();
            }
        }
    }

    stopTimerShake() {
        if (this.timerNode) {
            cc.Tween.stopAllByTarget(this.timerNode);
            //   this.timerNode.setPosition(cc.v3(0, 0, 0)); // 重設位置
        }
        this.isShaking = false;
    }

   
    startTimerShake() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        if (!this.timerNode) return;

        this.isShaking = true;

        cc.tween(this.timerNode)
            .repeatForever(
                cc.tween()
                    .by(0.05, { position: cc.v3(2, 0, 0) })
                    .by(0.05, { position: cc.v3(-4, 0, 0) })
                    .by(0.05, { position: cc.v3(2, 0, 0) })
            )
            .start();
    }

    spawnFireEffect() {
        if (!this.fireEffectPrefab || !this.timerNode) return;

        this.fireEffectNode = cc.instantiate(this.fireEffectPrefab);

        const timerPos = this.timerNode.getPosition(); // Vec2
        const offset = cc.v2(0, 50); // 🆙 往上 50 喵喵
        const finalPos = timerPos.add(offset);

        this.fireEffectNode.setPosition(finalPos);
        this.timerNode.parent.addChild(this.fireEffectNode);
    }






    updateLabel() {
        this.timerLabel.string = this.formatTime(this.currentTime);
    }

    formatTime(sec: number): string {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    

    generateNextDish() {
        // 找第一個空的 slot
        let emptySlotIndex = this.slots.findIndex(slot => slot.children.length === 0);
        if (emptySlotIndex === -1) return;

        let prefabIdx = Math.floor(Math.random() * this.dishPrefabs.length);
        let dish = cc.instantiate(this.dishPrefabs[prefabIdx]);

        // 初始位置在螢幕右外側（z 軸設 0）
        dish.setPosition(cc.v3(800, 0, 0));  // ✅ 改成 Vec3
        this.slots[emptySlotIndex].addChild(dish);

        // 動畫滑進 slot 中心（也是 Vec3）
        cc.tween(dish)
            .to(0.5, { position: cc.v3(0, 0, 0) }, { easing: 'cubicOut' })  // ✅ Vec3
            .start();
    }


    timeUp() {
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!");

        // 顯示 Time Up prefab
        if (this.timeUpPrefab) {
            let node = cc.instantiate(this.timeUpPrefab);
            this.node.addChild(node);

            // 停止所有遊戲互動、物件動作（可選）
            // 例如暫停敵人、暫停玩家、按鈕不可點，自己加

            // 暫停 director，但先不要暫停到 delay 結束
            setTimeout(() => {
                // 這裡才換場景，不要用 cc.scheduleOnce，否則 pause 時不會動
                cc.director.loadScene('score-scene');
                this.saveScoreAndGotoResult();
            }, 2000); // 2 秒
        }
    }

    saveScoreAndGotoResult() {
        // 取得 persist node
        const persistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (persistNode) {
            const persistScript = persistNode.getComponent('ScorePersist');
            persistScript.score = this.score;
            // persistScript.score = 150;
            persistScript.fromScene = cc.director.getScene().name;
        } else {
            cc.error('找不到 ScorePersist persist node');
        }
        cc.director.loadScene('ResultScene');
    }


    resetAndStart() {
        this.resetMenu();
        this.startGame();
    }

    // =============== 新增 ===============
    /** 設定分數，外部可呼叫 */
    setScore(newScore: number) {
        this.score = newScore;
        if (this.scoreLabel) {
            this.scoreLabel.string = `${this.score}`;
        }
    }

    /** 取得目前分數 */
    getScore(): number {
        return this.score;
    }

    /** 分數加減 n，可依需求使用 */
    addScore(delta: number) {
        this.setScore(this.score + delta);
    }
    // ===================================
}
