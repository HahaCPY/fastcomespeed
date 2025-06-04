import { IInputControls } from "./IInputControls";

export class KeyboardControls2 implements IInputControls {
    private moveDir: cc.Vec2 = cc.v2(0, 0);
    private isInteractPressed: boolean = false;
    private isChopPressed: boolean = false;
    private isChopHeld: boolean = false;
    private isRunHeld: boolean = false;

    constructor() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    getMoveDirection(): cc.Vec2 {
        return this.moveDir;
    }

    private onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.moveDir.y = 1;
                break;
            case cc.macro.KEY.down:
                this.moveDir.y = -1;
                break;
            case cc.macro.KEY.left:
                this.moveDir.x = -1;
                break;
            case cc.macro.KEY.right:
                this.moveDir.x = 1;
                break;
            case cc.macro.KEY.l: // 出餐、互動
                this.isInteractPressed = true;
                break;
            case cc.macro.KEY.k: // 切食材
                this.isChopHeld = true;
                break;
            case cc.macro.KEY.shift: // 跑步
                this.isRunHeld = true;
                break;
        }
    }

    private onKeyUp(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
            case cc.macro.KEY.down:
                this.moveDir.y = 0;
                break;
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.moveDir.x = 0;
                break;
            case cc.macro.KEY.l:
                this.isInteractPressed = false;
                break;
            case cc.macro.KEY.k:
                this.isChopHeld = false;
                break;
            case cc.macro.KEY.shift:
                this.isRunHeld = false;
                break;
        }
    }

    public getInteractPressed(): boolean {
        return this.isInteractPressed;
    }

    public getChopPressed(): boolean {
        return this.isChopHeld;
    }

    public getRunHeld(): boolean {
        return this.isRunHeld;
    }
}
