// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

cc.Class({
    extends: cc.Component,

    start () {
        const camera = this.getComponent(cc.Camera);
        if (camera) {
            camera.ortho = true;
            camera.orthoHeight = 320;
        } else {
            cc.warn("找不到 Camera 元件");
        }
    }
});
