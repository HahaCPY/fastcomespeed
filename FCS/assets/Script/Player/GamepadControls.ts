const { ccclass, property } = cc._decorator;
import { IInputControls } from "./IInputControls";

@ccclass
export class GamepadControls extends cc.Component implements IInputControls {
    public x: number = 0;
    public y: number = 0;
    private moveDir: cc.Vec2 = cc.v2(0, 0);
    private isInteractPressed: boolean = false;
    private isChopPressed: boolean = false;
    private isRunHeld: boolean = false;
    private readonly deadZone: number = 0.2;

    // 儲存前一幀的 D-pad 狀態
    private prevUp: boolean = false;
    private prevDown: boolean = false;
    private prevLeft: boolean = false;
    private prevRight: boolean = false;

    update() {
        const pads = navigator.getGamepads?.();
        const gp = pads && pads[0];
        if (!gp) return;

        let x = 0;
        let y = 0;

        const up = gp.buttons[12]?.pressed ?? false;
        const down = gp.buttons[13]?.pressed ?? false;
        const left = gp.buttons[14]?.pressed ?? false;
        const right = gp.buttons[15]?.pressed ?? false;

        // ✅ 模擬 D-pad onKeyDown / onKeyUp
        this.simulateKey("Up", up, this.prevUp);
        this.simulateKey("Down", down, this.prevDown);
        this.simulateKey("Left", left, this.prevLeft);
        this.simulateKey("Right", right, this.prevRight);

        // 更新方向
        if (up) y = 1;
        else if (down) y = -1;

        if (left) x = -1;
        else if (right) x = 1;

        // 若無 D-pad 輸入，檢查左搖桿
        if (x === 0 && y === 0) {
            const ax = gp.axes[0] || 0;
            const ay = gp.axes[1] || 0;

            if (Math.abs(ax) > this.deadZone) x = ax;
            if (Math.abs(ay) > this.deadZone) y = -ay; // Y 軸反轉
        }

        this.x = x;
        this.y = y;
       this.moveDir = cc.v2(x, y);

        // 更新前一幀狀態
        this.prevUp = up;
        this.prevDown = down;
        this.prevLeft = left;
        this.prevRight = right;

        console.log(`🎮 搖桿 or D-pad 控制：x=${x.toFixed(2)}, y=${y.toFixed(2)}`);
    }

    // 🔁 封裝成一個方法模擬鍵盤事件
    private simulateKey(direction: string, current: boolean, previous: boolean) {
        if (current && !previous) {
            console.log(`⬅️ D-pad ${direction} Pressed (onKeyDown)`);
        }
        if (!current && previous) {
            console.log(`⬅️ D-pad ${direction} Released (onKeyUp)`);
        }
    }

    getMoveDirection(): cc.Vec2 {
        return this.moveDir.clone();
    }

    getInteractPressed(): boolean {
        return this.isInteractPressed;
    }

    getChopPressed(): boolean {
        return this.isChopPressed;
    }

    getRunHeld(): boolean {
        return this.isRunHeld;
    }
}
