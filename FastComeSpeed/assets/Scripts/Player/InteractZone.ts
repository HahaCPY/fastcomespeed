
// assets/Scripts/Player/InteractZone.ts

import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InteractZone')
export class InteractZone extends Component {
    public nearbyTable: Component | null = null;

    start() {
        const collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    onBeginContact(self: Collider2D, other: Collider2D, contact: IPhysics2DContact | null) {
        const tableComponent = other.getComponent(Component);
        if (tableComponent) {
            this.nearbyTable = tableComponent;
        }
    }

    onEndContact(self: Collider2D, other: Collider2D, contact: IPhysics2DContact | null) {
        if (this.nearbyTable === other.getComponent(Component)) {
            this.nearbyTable = null;
        }
    }

    public getTarget(): Component | null {
        return this.nearbyTable;
    }
}
