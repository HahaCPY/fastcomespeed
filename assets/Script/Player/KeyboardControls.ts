import { IInputControls } from "./IInputControls";

export class KeyboardControls implements IInputControls {
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
            case cc.macro.KEY.w:
                this.moveDir.y = 1;
                break;
            case cc.macro.KEY.s:
                this.moveDir.y = -1;
                break;
            case cc.macro.KEY.a:
                this.moveDir.x = -1;
                break;
            case cc.macro.KEY.d:
                this.moveDir.x = 1;
                break;
            case cc.macro.KEY.e:
                this.isInteractPressed = true;
                break;
            case cc.macro.KEY.space:
                this.isChopHeld = true;
                break;
            case cc.macro.KEY.ctrl:
                this.isRunHeld = true;
                break;
        }
    }

    private onKeyUp(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
            case cc.macro.KEY.s:
                this.moveDir.y = 0;
                break;
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                this.moveDir.x = 0;
                break;
            case cc.macro.KEY.e:
                this.isInteractPressed = false;
                break;
            case cc.macro.KEY.space:
                this.isChopHeld = false;
                break;
            case cc.macro.KEY.ctrl:
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
