const { ccclass, property } = cc._decorator;

@ccclass("MenuBar") 
export default class MenuBar extends cc.Component {
    @property({ type: [cc.Node] })
    slots: cc.Node[] = [];

    @property({ type: [cc.Prefab] })
    dishPrefabs: cc.Prefab[] = [];

    @property({ type: cc.Label })
    timerLabel: cc.Label = null; // 拖拉倒數時間的 Label

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

            if (this.currentTime === 0) {
                this.timeUp();
            }
        }
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
