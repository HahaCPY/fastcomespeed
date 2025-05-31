const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuBar extends cc.Component {
    @property({ type: [cc.Node] })
    slots: cc.Node[] = [];

    @property({ type: [cc.Prefab] })
    dishPrefabs: cc.Prefab[] = [];

    @property({ type: cc.Label })
    timerLabel: cc.Label = null; // 拖拉倒數時間的 Label

    @property
    totalTime: number = 60; // 總倒數秒數

    @property
    dishesPerGame: number = 3; // 格子數

    @property
    dishInterval: number = 5;  // 每隔幾秒產生一個

    private currentDishIdx: number = 0;
    private currentTime: number = 0;

    start() {
        this.resetMenu();
        this.startGame();
    }

    resetMenu() {
        for (let slot of this.slots) {
            slot.removeAllChildren();
        }
        this.currentDishIdx = 0;
        this.unschedule(this.generateNextDish);
        this.unschedule(this.countdownStep);
    }

    startGame() {
        this.currentTime = this.totalTime;
        this.updateLabel();

        this.schedule(this.countdownStep, 1);
        this.generateNextDish();
        this.schedule(this.generateNextDish, this.dishInterval);
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
        // 用 slots.length 當最大格數
        if (this.currentDishIdx >= this.slots.length) {
            this.unschedule(this.generateNextDish);
            return;
        }
        let prefabIdx = Math.floor(Math.random() * this.dishPrefabs.length);
        let dish = cc.instantiate(this.dishPrefabs[prefabIdx]);
        this.slots[this.currentDishIdx].addChild(dish);
        this.currentDishIdx++;
    }


    timeUp() {
        // 停止所有 schedule
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!"); // 你可以加更多動作
    }

    // 若需重啟
    resetAndStart() {
        this.resetMenu();
        this.startGame();
    }
}
