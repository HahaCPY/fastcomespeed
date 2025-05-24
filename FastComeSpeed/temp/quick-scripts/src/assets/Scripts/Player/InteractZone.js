"use strict";
cc._RF.push(module, 'd9256EOahlFS6fNlf7qm+st', 'InteractZone');
// Scripts/Player/InteractZone.ts

"use strict";
// assets/Scripts/Player/InteractZone.ts
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
exports.InteractZone = void 0;
var cc_1 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var InteractZone = /** @class */ (function (_super) {
    __extends(InteractZone, _super);
    function InteractZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nearbyTable = null;
        return _this;
    }
    InteractZone.prototype.start = function () {
        var collider = this.getComponent(cc_1.Collider2D);
        if (collider) {
            collider.on(cc_1.Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(cc_1.Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    };
    InteractZone.prototype.onBeginContact = function (self, other, contact) {
        var tableComponent = other.getComponent(cc_1.Component);
        if (tableComponent) {
            this.nearbyTable = tableComponent;
        }
    };
    InteractZone.prototype.onEndContact = function (self, other, contact) {
        if (this.nearbyTable === other.getComponent(cc_1.Component)) {
            this.nearbyTable = null;
        }
    };
    InteractZone.prototype.getTarget = function () {
        return this.nearbyTable;
    };
    InteractZone = __decorate([
        ccclass('InteractZone')
    ], InteractZone);
    return InteractZone;
}(cc_1.Component));
exports.InteractZone = InteractZone;

cc._RF.pop();