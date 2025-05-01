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
    successFx: Node = null; // ✅ 成功特效（例如閃光）

    @property(Node)
    failFx: Node = null; // ❌ 失敗特效（例如紅燈）

    private engine: ReceiptsEngine;
    private ui: UIManager | null = null;

    start() {
        this.engine = this.node.scene.getComponentInChildren(ReceiptsEngine);
        this.ui = this.node.scene.getComponentInChildren(UIManager);
    }

    public deliverPlate(plate: Plate): boolean {
        const result = this.engine.checkPlate(plate);

        if (result) {
            console.log("✅ 配對成功！得分！");
            this.playSuccessFx();
            this.ui?.showFeedback(true);
            plate.node.destroy();
        } else {
            console.log("❌ 配對失敗！");
            this.playFailFx();
            this.ui?.showFeedback(false);
            // 可選：this.placeObject(plate);
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
