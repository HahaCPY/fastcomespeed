// assets/Scripts/Tables/Table.ts

import { _decorator, Component, Node } from 'cc';
import { GameObject } from '../Objects/Object';
const { ccclass, property } = _decorator;

@ccclass('Table')
export class Table extends Component {
    protected currentObject: GameObject | null = null;

    public hasObject(): boolean {
        return this.currentObject !== null;
    }

    public getObject(): GameObject | null {
        return this.currentObject;
    }

    public placeObject(obj: GameObject): boolean {
        if (this.hasObject()) {
            return false; // 桌上已經有物品
        }

        this.currentObject = obj;
        obj.node.setParent(this.node);
        obj.node.setPosition(0, 0.5, 0); // 放置位置（可微調）
        return true;
    }

    public removeObject(): GameObject | null {
        const obj = this.currentObject;
        this.currentObject = null;
        return obj;
    }
}
