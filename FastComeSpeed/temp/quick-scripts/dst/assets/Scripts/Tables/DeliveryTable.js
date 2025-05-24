
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tables/DeliveryTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RhYmxlcy9EZWxpdmVyeVRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMseUJBQWlEO0FBQ2pELGlDQUFnQztBQUVoQywwREFBeUQ7QUFDekQsNkNBQTRDO0FBRXBDLElBQUEsT0FBTyxHQUFlLGVBQVUsUUFBekIsRUFBRSxRQUFRLEdBQUssZUFBVSxTQUFmLENBQWdCO0FBR3pDO0lBQW1DLGlDQUFLO0lBQXhDO1FBQUEscUVBeUNDO1FBdkNHLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFTLElBQUksQ0FBQztRQUdaLFFBQUUsR0FBcUIsSUFBSSxDQUFDOztJQWlDeEMsQ0FBQztJQS9CRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQywrQkFBYyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQVk7O1FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE1BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsWUFBWSxDQUFDLElBQUksRUFBRTtZQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxZQUFZLENBQUMsS0FBSyxFQUFFO1NBQ2hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFBQSxpQkFLQztRQUpHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvRDtJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJBS0M7UUFKRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsU0FBSSxDQUFDO29EQUNRO0lBR3ZCO1FBREMsUUFBUSxDQUFDLFNBQUksQ0FBQztpREFDSztJQUxYLGFBQWE7UUFEekIsT0FBTyxDQUFDLGVBQWUsQ0FBQztPQUNaLGFBQWEsQ0F5Q3pCO0lBQUQsb0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q2tDLGFBQUssR0F5Q3ZDO0FBekNZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL1NjcmlwdHMvVGFibGVzL0RlbGl2ZXJ5VGFibGUudHNcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi9UYWJsZSc7XG5pbXBvcnQgeyBQbGF0ZSB9IGZyb20gJy4uL09iamVjdHMvUGxhdGUnO1xuaW1wb3J0IHsgUmVjZWlwdHNFbmdpbmUgfSBmcm9tICcuLi9PdGhlci9SZWNlaXB0c0VuZ2luZSc7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi9VSS9VSU1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRGVsaXZlcnlUYWJsZScpXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlUYWJsZSBleHRlbmRzIFRhYmxlIHtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBzdWNjZXNzRng6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgZmFpbEZ4OiBOb2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZW5naW5lOiBSZWNlaXB0c0VuZ2luZTtcbiAgICBwcml2YXRlIHVpOiBVSU1hbmFnZXIgfCBudWxsID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IHRoaXMubm9kZS5zY2VuZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJlY2VpcHRzRW5naW5lKTtcbiAgICAgICAgdGhpcy51aSA9IHRoaXMubm9kZS5zY2VuZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFVJTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGl2ZXJQbGF0ZShwbGF0ZTogUGxhdGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbmdpbmUuY2hlY2tQbGF0ZShwbGF0ZSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVN1Y2Nlc3NGeCgpO1xuICAgICAgICAgICAgdGhpcy51aT8uc2hvd0ZlZWRiYWNrKHRydWUpO1xuICAgICAgICAgICAgcGxhdGUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlGYWlsRngoKTtcbiAgICAgICAgICAgIHRoaXMudWk/LnNob3dGZWVkYmFjayhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwbGF5U3VjY2Vzc0Z4KCkge1xuICAgICAgICBpZiAodGhpcy5zdWNjZXNzRngpIHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0Z4LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiAodGhpcy5zdWNjZXNzRnguYWN0aXZlID0gZmFsc2UpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlGYWlsRngoKSB7XG4gICAgICAgIGlmICh0aGlzLmZhaWxGeCkge1xuICAgICAgICAgICAgdGhpcy5mYWlsRnguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+ICh0aGlzLmZhaWxGeC5hY3RpdmUgPSBmYWxzZSksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19