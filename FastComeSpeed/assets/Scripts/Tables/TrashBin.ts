
// assets/Scripts/Tables/TrashBin.ts

import { _decorator, Component } from 'cc';
import { Table } from './Table';
import { GameObject } from '../Objects/Object';

const { ccclass } = _decorator;

@ccclass('TrashBin')
export class TrashBin extends Table {
    public disposeObject(obj: GameObject): boolean {
        if (!obj) return false;
        obj.node.destroy();
        return true;
    }
}
