
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tables/TrashBin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RhYmxlcy9UcmFzaEJpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLHlCQUEyQztBQUMzQyxpQ0FBZ0M7QUFHeEIsSUFBQSxPQUFPLEdBQUssZUFBVSxRQUFmLENBQWdCO0FBRy9CO0lBQThCLDRCQUFLO0lBQW5DOztJQU1BLENBQUM7SUFMVSxnQ0FBYSxHQUFwQixVQUFxQixHQUFlO1FBQ2hDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBTFEsUUFBUTtRQURwQixPQUFPLENBQUMsVUFBVSxDQUFDO09BQ1AsUUFBUSxDQU1wQjtJQUFELGVBQUM7Q0FORCxBQU1DLENBTjZCLGFBQUssR0FNbEM7QUFOWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gYXNzZXRzL1NjcmlwdHMvVGFibGVzL1RyYXNoQmluLnRzXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi9UYWJsZSc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vT2JqZWN0cy9PYmplY3QnO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdUcmFzaEJpbicpXG5leHBvcnQgY2xhc3MgVHJhc2hCaW4gZXh0ZW5kcyBUYWJsZSB7XG4gICAgcHVibGljIGRpc3Bvc2VPYmplY3Qob2JqOiBHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIG9iai5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19