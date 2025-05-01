// assets/Scripts/Tables/FireTable.ts

import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { Table } from './Table';
const { ccclass, property } = _decorator;

@ccclass('FireTable')
export class FireTable extends Table {
    @property(Prefab)
    fireEffect: Prefab = null;

    private fireNode: Node | null = null;
    private isBurning: boolean = false;

    start() {
        this.startFire();
    }

    startFire() {
        if (this.isBurning) return;

        this.fireNode = instantiate(this.fireEffect);
        this.fireNode.setPosition(0, 1, 0);
        this.node.addChild(this.fireNode);
        this.isBurning = true;
    }

    extinguish() {
        if (!this.isBurning) return;

        this.fireNode?.destroy();
        this.fireNode = null;
        this.isBurning = false;
    }

    public isOnFire(): boolean {
        return this.isBurning;
    }
}
