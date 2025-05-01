// assets/Scripts/Tables/IngredientTable.ts

import { _decorator, Component, Prefab, instantiate, Vec3 } from 'cc';
import { Table } from './Table';
import { Ingredient } from '../Objects/Ingredient';
const { ccclass, property } = _decorator;

@ccclass('IngredientTable')
export class IngredientTable extends Table {
    @property(Prefab)
    ingredientPrefab: Prefab = null;

    public spawnIngredient(): Ingredient | null {
        if (this.hasObject()) {
            return null; // 桌上已經有食材
        }

        const ingredientNode = instantiate(this.ingredientPrefab);
        ingredientNode.setPosition(new Vec3(0, 0.5, 0));
        ingredientNode.setParent(this.node);

        const ingredient = ingredientNode.getComponent(Ingredient);
        this.placeObject(ingredient);
        return ingredient;
    }
}
