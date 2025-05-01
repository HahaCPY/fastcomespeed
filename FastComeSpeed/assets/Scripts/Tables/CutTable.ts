// assets/Scripts/Tables/CutTable.ts

import { _decorator, Component } from 'cc';
import { Table } from './Table';
import { Ingredient } from '../Objects/Ingredient';
import { UIManager } from '../UI/UIManager';

const { ccclass } = _decorator;

@ccclass('CutTable')
export class CutTable extends Table {
    private cuttingProgress: number = 0;
    private readonly cuttingTime: number = 3; // 切菜需 3 秒

    private ui: UIManager | null = null;

    start() {
        this.ui = this.node.scene.getComponentInChildren(UIManager);
    }

    update(deltaTime: number) {
        if (this.currentObject && this.currentObject instanceof Ingredient && !this.currentObject.isCut) {
            this.cuttingProgress += deltaTime;

            const percent = Math.min(1, this.cuttingProgress / this.cuttingTime);
            this.ui?.showCutProgress(percent * 100);

            if (this.cuttingProgress >= this.cuttingTime) {
                this.cutIngredient(this.currentObject);
                this.cuttingProgress = 0;
            }
        }
    }

    private cutIngredient(ingredient: Ingredient) {
        ingredient.isCut = true;
        this.ui?.showCutProgress(100); // ✅ 顯示切完
    }

    override removeObject() {
        this.cuttingProgress = 0;
        this.ui?.clearCutProgress();
        return super.removeObject();
    }
}
