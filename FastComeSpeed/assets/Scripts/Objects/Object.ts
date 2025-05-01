// assets/Scripts/Objects/Object.ts

import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameObject') // 因為 Object 是保留字，我們改成 GameObject
export class GameObject extends Component {
    isHeld: boolean = false;
    originalParent: Node | null = null;

    start() {
        this.originalParent = this.node.parent;
    }

    public pickUp(holder: Node) {
        this.isHeld = true;
        this.node.setParent(holder);
        this.node.setPosition(new Vec3(0, 0.5, 0)); // 微微浮起表示被拿起
    }

    public drop(targetPosition: Vec3) {
        this.isHeld = false;
        this.node.setParent(this.originalParent); // 回到場景中
        this.node.setWorldPosition(targetPosition);
    }

    public isPickedUp(): boolean {
        return this.isHeld;
    }
}
