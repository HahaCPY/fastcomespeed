"use strict";
cc._RF.push(module, 'fc9d6LHzU9NFqrwSXg8sxMN', 'TrashBin');
// Scripts/Tables/TrashBin.ts

"use strict";
// assets/Scripts/Tables/TrashBin.ts
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
exports.TrashBin = void 0;
var cc_1 = require("cc");
var Table_1 = require("./Table");
var ccclass = cc_1._decorator.ccclass;
var TrashBin = /** @class */ (function (_super) {
    __extends(TrashBin, _super);
    function TrashBin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrashBin.prototype.disposeObject = function (obj) {
        if (!obj)
            return false;
        obj.node.destroy();
        return true;
    };
    TrashBin = __decorate([
        ccclass('TrashBin')
    ], TrashBin);
    return TrashBin;
}(Table_1.Table));
exports.TrashBin = TrashBin;

cc._RF.pop();