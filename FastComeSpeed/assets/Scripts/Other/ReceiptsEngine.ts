// assets/Scripts/Other/ReceiptsEngine.ts

import { _decorator, Component } from 'cc';
import { Plate } from '../Objects/Plate';

const { ccclass } = _decorator;

@ccclass('ReceiptsEngine')
export class ReceiptsEngine extends Component {
    private recipes: string[][] = [
        ['lettuce', 'tomato'],
        ['lettuce', 'carrot'],
        ['tomato', 'onion']
    ];

    // 檢查該盤子是否符合任一菜單
    public checkPlate(plate: Plate): boolean {
        const contents = plate.getContent().slice().sort();

        for (const recipe of this.recipes) {
            const sortedRecipe = recipe.slice().sort();
            if (this.arraysMatch(contents, sortedRecipe)) {
                return true; // 找到相符菜單
            }
        }

        return false;
    }

    // 工具函數：比對兩個陣列是否一樣（順序不影響）
    private arraysMatch(arr1: string[], arr2: string[]): boolean {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    // 顯示當前所有菜單（可用 UI 顯示）
    public getRecipes(): string[][] {
        return this.recipes;
    }
}
