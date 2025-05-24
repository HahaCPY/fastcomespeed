"use strict";
cc._RF.push(module, '72a2eYRIxxI86oURursj8KG', 'CutTable');
// Scripts/Tables/CutTable.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutTable = void 0;
// assets/Scripts/Tables/CutTable.ts
var cc_1 = require("cc");
var Table_1 = require("./Table");
var Ingredient_1 = require("../Objects/Ingredient");
var UIManager_1 = require("../UI/UIManager");
var ccclass = cc_1._decorator.ccclass;
var CutTable = /** @class */ (function (_super) {
    __extends(CutTable, _super);
    function CutTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cuttingProgress = 0;
        _this.cuttingTime = 3;
        _this.ui = null;
        return _this;
    }
    CutTable.prototype.start = function () {
        this.ui = this.node.scene.getComponentInChildren(UIManager_1.UIManager);
    };
    CutTable.prototype.update = function (deltaTime) {
        var _a;
        if (this.currentObject && this.currentObject instanceof Ingredient_1.Ingredient && !this.currentObject.isCut) {
            this.cuttingProgress += deltaTime;
            var percent = Math.min(1, this.cuttingProgress / this.cuttingTime);
            (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showCutProgress(percent * 100);
            if (this.cuttingProgress >= this.cuttingTime) {
                this.cutIngredient(this.currentObject);
                this.cuttingProgress = 0;
            }
        }
    };
    CutTable.prototype.cutIngredient = function (ingredient) {
        var _a;
        ingredient.isCut = true;
        (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showCutProgress(100);
    };
    CutTable.prototype.removeObject = function () {
        var _a;
        this.cuttingProgress = 0;
        (_a = this.ui) === null || _a === void 0 ? void 0 : _a.clearCutProgress();
        return _super.prototype.removeObject.call(this);
    };
    CutTable = __decorate([
        ccclass('CutTable')
    ], CutTable);
    return CutTable;
}(Table_1.Table));
exports.CutTable = CutTable;

cc._RF.pop();