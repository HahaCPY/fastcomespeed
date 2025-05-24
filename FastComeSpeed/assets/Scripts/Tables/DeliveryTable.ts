// assets/Scripts/Tables/DeliveryTable.ts
import { _decorator, Component, Node } from 'cc';
import { Table } from './Table';
import { Plate } from '../Objects/Plate';
import { ReceiptsEngine } from '../Other/ReceiptsEngine';
import { UIManager } from '../UI/UIManager';

const { ccclass, property } = _decorator;

@ccclass('DeliveryTable')
export class DeliveryTable extends Table {
    @property(Node)
    successFx: Node = null;

    @property(Node)
    failFx: Node = null;

    private engine: ReceiptsEngine;
    private ui: UIManager | null = null;

    start() {
        this.engine = this.node.scene.getComponentInChildren(ReceiptsEngine);
        this.ui = this.node.scene.getComponentInChildren(UIManager);
    }

    public deliverPlate(plate: Plate): boolean {
        const result = this.engine.checkPlate(plate);
        if (result) {
            this.playSuccessFx();
            this.ui?.showFeedback(true);
            plate.node.destroy();
        } else {
            this.playFailFx();
            this.ui?.showFeedback(false);
        }
        return result;
    }

    playSuccessFx() {
        if (this.successFx) {
            this.successFx.active = true;
            this.scheduleOnce(() => (this.successFx.active = false), 1);
        }
    }

    playFailFx() {
        if (this.failFx) {
            this.failFx.active = true;
            this.scheduleOnce(() => (this.failFx.active = false), 1);
        }
    }
}
