// assets/Scripts/Tables/PlateTable.ts

import { _decorator, Component, Prefab, instantiate, Vec3 } from 'cc';
import { Table } from './Table';
import { Plate } from '../Objects/Plate';
const { ccclass, property } = _decorator;

@ccclass('PlateTable')
export class PlateTable extends Table {
    @property(Prefab)
    platePrefab: Prefab = null;

    public spawnPlate(): Plate | null {
        if (this.hasObject()) {
            return null; // 桌上已有盤子
        }

        const plateNode = instantiate(this.platePrefab);
        plateNode.setPosition(new Vec3(0, 0.5, 0));
        plateNode.setParent(this.node);

        const plate = plateNode.getComponent(Plate);
        this.placeObject(plate);
        return plate;
    }
}
