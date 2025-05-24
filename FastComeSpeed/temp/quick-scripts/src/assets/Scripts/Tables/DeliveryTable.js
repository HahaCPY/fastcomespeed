"use strict";
cc._RF.push(module, 'd9882SdLeBA4pjTminVa7OC', 'DeliveryTable');
// Scripts/Tables/DeliveryTable.ts

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
exports.DeliveryTable = void 0;
// assets/Scripts/Tables/DeliveryTable.ts
var cc_1 = require("cc");
var Table_1 = require("./Table");
var ReceiptsEngine_1 = require("../Other/ReceiptsEngine");
var UIManager_1 = require("../UI/UIManager");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var DeliveryTable = /** @class */ (function (_super) {
    __extends(DeliveryTable, _super);
    function DeliveryTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.successFx = null;
        _this.failFx = null;
        _this.ui = null;
        return _this;
    }
    DeliveryTable.prototype.start = function () {
        this.engine = this.node.scene.getComponentInChildren(ReceiptsEngine_1.ReceiptsEngine);
        this.ui = this.node.scene.getComponentInChildren(UIManager_1.UIManager);
    };
    DeliveryTable.prototype.deliverPlate = function (plate) {
        var _a, _b;
        var result = this.engine.checkPlate(plate);
        if (result) {
            this.playSuccessFx();
            (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showFeedback(true);
            plate.node.destroy();
        }
        else {
            this.playFailFx();
            (_b = this.ui) === null || _b === void 0 ? void 0 : _b.showFeedback(false);
        }
        return result;
    };
    DeliveryTable.prototype.playSuccessFx = function () {
        var _this = this;
        if (this.successFx) {
            this.successFx.active = true;
            this.scheduleOnce(function () { return (_this.successFx.active = false); }, 1);
        }
    };
    DeliveryTable.prototype.playFailFx = function () {
        var _this = this;
        if (this.failFx) {
            this.failFx.active = true;
            this.scheduleOnce(function () { return (_this.failFx.active = false); }, 1);
        }
    };
    __decorate([
        property(cc_1.Node)
    ], DeliveryTable.prototype, "successFx", void 0);
    __decorate([
        property(cc_1.Node)
    ], DeliveryTable.prototype, "failFx", void 0);
    DeliveryTable = __decorate([
        ccclass('DeliveryTable')
    ], DeliveryTable);
    return DeliveryTable;
}(Table_1.Table));
exports.DeliveryTable = DeliveryTable;

cc._RF.pop();