"use strict";
cc._RF.push(module, 'c8afc0tsPRMa4xzEslWQpMl', 'KeyboardControls2');
// Script/Player/KeyboardControls2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardControls2 = void 0;
var KeyboardControls2 = /** @class */ (function () {
    function KeyboardControls2() {
        this.moveDir = cc.v2(0, 0);
        this.isInteractPressed = false;
        this.isChopPressed = false;
        this.isChopHeld = false;
        this.isRunHeld = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    KeyboardControls2.prototype.getMoveDirection = function () {
        return this.moveDir;
    };
    KeyboardControls2.prototype.onKeyDown = function (event) {
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
    };
    KeyboardControls2.prototype.onKeyUp = function (event) {
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
    };
    KeyboardControls2.prototype.getInteractPressed = function () {
        return this.isInteractPressed;
    };
    KeyboardControls2.prototype.getChopPressed = function () {
        return this.isChopHeld;
    };
    KeyboardControls2.prototype.getRunHeld = function () {
        return this.isRunHeld;
    };
    return KeyboardControls2;
}());
exports.KeyboardControls2 = KeyboardControls2;

cc._RF.pop();