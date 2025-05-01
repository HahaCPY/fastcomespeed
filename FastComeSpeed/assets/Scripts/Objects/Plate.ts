// assets/Scripts/Objects/Plate.ts

import { _decorator } from 'cc';
import { GameObject } from './Object';
const { ccclass } = _decorator;

@ccclass('Plate')
export class Plate extends GameObject {
    ingredients: string[] = []; // 可改成 Ingredient[] 看需求

    addIngredient(name: string) {
        this.ingredients.push(name);
    }

    getContent(): string[] {
        return this.ingredients;
    }

    resetPlate() {
        this.ingredients = [];
    }
}
