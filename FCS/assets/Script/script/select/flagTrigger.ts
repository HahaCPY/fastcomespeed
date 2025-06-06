const { ccclass, property } = cc._decorator;
import PositionManager from "./PositionManager";

@ccclass
export default class FlagTrigger extends cc.Component {
    @property(cc.Node)
    vehicle: cc.Node = null;

    @property(cc.Prefab)
    hintPrefab: cc.Prefab = null;

    // use Vec3 is better than Vec2 for 3D compatibility
    @property(cc.Vec3)
    hintOffset: cc.Vec3 = cc.v3(0.8, 0.1, 0);

    @property
    triggerDistance: number = 0.7;

    @property
    nowIn: number = 0;  // indicate the current stage number we step on

    private hintInstance: cc.Node = null;
    private hintScript: any = null;
    private inRange: boolean = false;
    private isLoadingScene: boolean = false;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        if (this.hintPrefab) {
            this.hintInstance = cc.instantiate(this.hintPrefab);
            this.node.addChild(this.hintInstance);

            this.hintInstance.setPosition(this.hintOffset);

            this.hintInstance.active = false;
            this.hintInstance.scale = 0;

            this.hintScript = this.hintInstance.getComponent("hintAnimation");
            this.hintScript.setKeyScale(this.nowIn);
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    update(dt: number) {
        if (!this.vehicle || !this.hintInstance || !this.hintScript) return;

        const posA = this.node.getPosition();
        const posB = this.vehicle.getPosition();
        const dist = posA.subtract(posB).mag();

        if (dist < this.triggerDistance) {
            if (!this.inRange) {
                this.hintInstance.active = true;
                this.hintScript.playShow();
                this.inRange = true;
            }
        } else {
            if (this.inRange) {
                this.hintScript.playHide();
                this.inRange = false;
            }
        }
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (this.inRange && event.keyCode === cc.macro.KEY.e) {
            cc.log("key E pressed");

            const worldPos = this.vehicle.convertToWorldSpaceAR(cc.Vec3.ZERO);
            const localPos = this.node.parent.convertToNodeSpaceAR(worldPos);
            PositionManager.savePosition(localPos.clone());

            if (!this.isLoadingScene) {
                this.isLoadingScene = true;

                const maskNode = cc.find("MainCamera/mask3D");
                const maskScript = maskNode?.getComponent("maskTransition3D");

                if (!maskScript) {
                    console.warn("⚠️ maskTransition script not found on mask3D node!");
                    return;
                }
                else {
                    maskScript.playTransition(() => {
                        switch (this.nowIn) {
                            case 1:
                                // need to add "select/" since it's what build settings use
                                cc.director.loadScene("ice-cream-check");
                                break;
                            case 2:
                                cc.director.loadScene("pizza-check");
                                break;
                            case 3:
                                cc.director.loadScene("Menu");
                                break;
                            default:
                                cc.director.loadScene("selectScene");
                                break;
                        }
                    });
                }
            }
        }
    }

    getNowIn() {
        return this.nowIn;
    }
}
