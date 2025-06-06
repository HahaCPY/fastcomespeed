const { ccclass, property } = cc._decorator;

@ccclass
export default class GamepadCharacterControl extends cc.Component {
    @property
    speed: number = 200;

    update(dt: number) {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];

        const gp = gamepads[0]; // 只取第一個搖桿（玩家1）
        if (!gp) return;

        const axisX = gp.axes[0]; // 左搖桿水平軸（-1 左, 1 右）
        const axisY = gp.axes[1]; // 左搖桿垂直軸（-1 上, 1 下）

        // 若搖桿位移小於死區，視為靜止
        const deadZone = 0.2;
        const moveX = Math.abs(axisX) > deadZone ? axisX : 0;
        const moveY = Math.abs(axisY) > deadZone ? axisY : 0;

        const dx = moveX * this.speed * dt;
        const dy = -moveY * this.speed * dt; // 注意 Y 軸方向相反

        this.node.x += dx;
        this.node.y += dy;

        // 可選：翻轉角色方向
        if (Math.abs(moveX) > 0.1) {
            this.node.scaleX = moveX > 0 ? 1 : -1;
        }
    }
}
