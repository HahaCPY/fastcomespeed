// assets/Scripts/Objects/Ingredient.ts

import { _decorator } from 'cc';
import { GameObject } from './Object';
const { ccclass } = _decorator;

@ccclass('Ingredient')
export class Ingredient extends GameObject {
    isCut: boolean = false;
}
