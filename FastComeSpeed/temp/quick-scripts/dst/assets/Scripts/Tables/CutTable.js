
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tables/CutTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RhYmxlcy9DdXRUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLHlCQUEyQztBQUMzQyxpQ0FBZ0M7QUFDaEMsb0RBQW1EO0FBQ25ELDZDQUE0QztBQUVwQyxJQUFBLE9BQU8sR0FBSyxlQUFVLFFBQWYsQ0FBZ0I7QUFHL0I7SUFBOEIsNEJBQUs7SUFBbkM7UUFBQSxxRUFpQ0M7UUFoQ1cscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDbkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFakMsUUFBRSxHQUFxQixJQUFJLENBQUM7O0lBNkJ4QyxDQUFDO0lBM0JHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLHFCQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFNBQWlCOztRQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSx1QkFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDN0YsSUFBSSxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUM7WUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUV4QyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sZ0NBQWEsR0FBckIsVUFBc0IsVUFBc0I7O1FBQ3hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsZUFBZSxDQUFDLEdBQUcsRUFBRTtJQUNsQyxDQUFDO0lBRVEsK0JBQVksR0FBWjs7UUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixNQUFBLElBQUksQ0FBQyxFQUFFLDBDQUFFLGdCQUFnQixHQUFHO1FBQzVCLE9BQU8saUJBQU0sWUFBWSxXQUFFLENBQUM7SUFDaEMsQ0FBQztJQWhDUSxRQUFRO1FBRHBCLE9BQU8sQ0FBQyxVQUFVLENBQUM7T0FDUCxRQUFRLENBaUNwQjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzZCLGFBQUssR0FpQ2xDO0FBakNZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL1NjcmlwdHMvVGFibGVzL0N1dFRhYmxlLnRzXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4vVGFibGUnO1xuaW1wb3J0IHsgSW5ncmVkaWVudCB9IGZyb20gJy4uL09iamVjdHMvSW5ncmVkaWVudCc7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi9VSS9VSU1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdDdXRUYWJsZScpXG5leHBvcnQgY2xhc3MgQ3V0VGFibGUgZXh0ZW5kcyBUYWJsZSB7XG4gICAgcHJpdmF0ZSBjdXR0aW5nUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdXR0aW5nVGltZTogbnVtYmVyID0gMztcblxuICAgIHByaXZhdGUgdWk6IFVJTWFuYWdlciB8IG51bGwgPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuc2NlbmUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihVSU1hbmFnZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0ICYmIHRoaXMuY3VycmVudE9iamVjdCBpbnN0YW5jZW9mIEluZ3JlZGllbnQgJiYgIXRoaXMuY3VycmVudE9iamVjdC5pc0N1dCkge1xuICAgICAgICAgICAgdGhpcy5jdXR0aW5nUHJvZ3Jlc3MgKz0gZGVsdGFUaW1lO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWluKDEsIHRoaXMuY3V0dGluZ1Byb2dyZXNzIC8gdGhpcy5jdXR0aW5nVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVpPy5zaG93Q3V0UHJvZ3Jlc3MocGVyY2VudCAqIDEwMCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1dHRpbmdQcm9ncmVzcyA+PSB0aGlzLmN1dHRpbmdUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXRJbmdyZWRpZW50KHRoaXMuY3VycmVudE9iamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXR0aW5nUHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjdXRJbmdyZWRpZW50KGluZ3JlZGllbnQ6IEluZ3JlZGllbnQpIHtcbiAgICAgICAgaW5ncmVkaWVudC5pc0N1dCA9IHRydWU7XG4gICAgICAgIHRoaXMudWk/LnNob3dDdXRQcm9ncmVzcygxMDApO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHJlbW92ZU9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5jdXR0aW5nUHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnVpPy5jbGVhckN1dFByb2dyZXNzKCk7XG4gICAgICAgIHJldHVybiBzdXBlci5yZW1vdmVPYmplY3QoKTtcbiAgICB9XG59XG4iXX0=