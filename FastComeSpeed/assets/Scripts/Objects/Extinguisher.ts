// assets/Scripts/Objects/Extinguisher.ts

import { _decorator, Component, Node, Collider, Contact2DType, IPhysics2DContact } from 'cc';
import { FireTable } from '../Tables/FireTable';
const { ccclass, property } = _decorator;

@ccclass('Extinguisher')
export class Extinguisher extends Component {
    onBeginContact(selfCollider: Collider, otherCollider: Collider, contact: IPhysics2DContact | null) {
        const tableNode = otherCollider.node;
        const fireTable = tableNode.getComponent(FireTable);
        if (fireTable && fireTable.isOnFire()) {
            fireTable.extinguish();
        }
    }
}
