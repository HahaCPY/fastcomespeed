// assets/Scripts/Player/Player.ts

import {
    _decorator, Component, Node, input, Input,
    KeyCode, EventKeyboard
} from 'cc';

import { IngredientTable } from '../Tables/IngredientTable';
import { PlateTable } from '../Tables/PlateTable';
import { CutTable } from '../Tables/CutTable';
import { FireTable } from '../Tables/FireTable';
import { DeliveryTable } from '../Tables/DeliveryTable';
import { TrashBin } from '../Tables/TrashBin';

import { GameObject } from '../Objects/Object';
import { Plate } from '../Objects/Plate';
import { Extinguisher } from '../Objects/Extinguisher';
import { InteractZone } from './InteractZone';

const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(Node)
    interactZone: Node = null;

    heldObject: GameObject | null = null;

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode === KeyCode.KEY_E) {
            this.tryInteract();
        }
    }

    tryInteract() {
        const targetTable = this.detectNearbyTable();
        if (!targetTable) return;

        const held = this.heldObject;

        // 👉 沒拿東西：撿取
        if (!held) {
            if (targetTable instanceof IngredientTable) {
                const newIngredient = targetTable.spawnIngredient();
                if (newIngredient) this.pickUp(newIngredient);

            } else if (targetTable instanceof PlateTable) {
                const newPlate = targetTable.spawnPlate();
                if (newPlate) this.pickUp(newPlate);

            } else if (targetTable instanceof CutTable && targetTable.hasObject()) {
                const obj = targetTable.removeObject();
                if (obj) this.pickUp(obj);
            }
        }

        // 👉 有拿東西：互動或放置
        else {
            // 🔥 滅火器對火桌
            if (held instanceof Extinguisher && targetTable instanceof FireTable) {
                if (targetTable.isOnFire()) {
                    targetTable.extinguish();
                    held.node.destroy();
                    this.heldObject = null;
                }
            }

            // ✅ 將盤子放到送餐桌
            else if (held instanceof Plate && targetTable instanceof DeliveryTable) {
                const delivered = targetTable.deliverPlate(held);
                if (delivered) this.heldObject = null;
            }

            // 🗑️ 丟掉物品
            else if (targetTable instanceof TrashBin) {
                const disposed = targetTable.disposeObject(held);
                if (disposed) this.heldObject = null;
            }

            // 🧱 其他通用桌面
            else if ('placeObject' in targetTable && typeof targetTable.placeObject === 'function') {
                const placed = targetTable.placeObject(held);
                if (placed) this.heldObject = null;
            }
        }
    }

    pickUp(obj: GameObject) {
        this.heldObject = obj;
        obj.pickUp(this.node);
    }

    detectNearbyTable(): any {
        const zone = this.interactZone?.getComponent(InteractZone);
        return zone?.getTarget?.() ?? null;
    }
}
