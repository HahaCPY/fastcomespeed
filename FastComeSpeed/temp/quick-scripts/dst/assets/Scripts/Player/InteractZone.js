
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player/InteractZone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BsYXllci9JbnRlcmFjdFpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4Qyx5QkFBeUY7QUFDakYsSUFBQSxPQUFPLEdBQWUsZUFBVSxRQUF6QixFQUFFLFFBQVEsR0FBSyxlQUFVLFNBQWYsQ0FBZ0I7QUFHekM7SUFBa0MsZ0NBQVM7SUFBM0M7UUFBQSxxRUEyQkM7UUExQlUsaUJBQVcsR0FBcUIsSUFBSSxDQUFDOztJQTBCaEQsQ0FBQztJQXhCRyw0QkFBSyxHQUFMO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLFFBQVEsRUFBRTtZQUNWLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRSxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkU7SUFDTCxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLElBQWdCLEVBQUUsS0FBaUIsRUFBRSxPQUFpQztRQUNqRixJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksY0FBYyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxJQUFnQixFQUFFLEtBQWlCLEVBQUUsT0FBaUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBUyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRU0sZ0NBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQTFCUSxZQUFZO1FBRHhCLE9BQU8sQ0FBQyxjQUFjLENBQUM7T0FDWCxZQUFZLENBMkJ4QjtJQUFELG1CQUFDO0NBM0JELEFBMkJDLENBM0JpQyxjQUFTLEdBMkIxQztBQTNCWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gYXNzZXRzL1NjcmlwdHMvUGxheWVyL0ludGVyYWN0Wm9uZS50c1xuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIENvbGxpZGVyMkQsIENvbnRhY3QyRFR5cGUsIElQaHlzaWNzMkRDb250YWN0IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0ludGVyYWN0Wm9uZScpXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rab25lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgbmVhcmJ5VGFibGU6IENvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoQ29sbGlkZXIyRCk7XG4gICAgICAgIGlmIChjb2xsaWRlcikge1xuICAgICAgICAgICAgY29sbGlkZXIub24oQ29udGFjdDJEVHlwZS5CRUdJTl9DT05UQUNULCB0aGlzLm9uQmVnaW5Db250YWN0LCB0aGlzKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLm9uKENvbnRhY3QyRFR5cGUuRU5EX0NPTlRBQ1QsIHRoaXMub25FbmRDb250YWN0LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KHNlbGY6IENvbGxpZGVyMkQsIG90aGVyOiBDb2xsaWRlcjJELCBjb250YWN0OiBJUGh5c2ljczJEQ29udGFjdCB8IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGFibGVDb21wb25lbnQgPSBvdGhlci5nZXRDb21wb25lbnQoQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKHRhYmxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5lYXJieVRhYmxlID0gdGFibGVDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVuZENvbnRhY3Qoc2VsZjogQ29sbGlkZXIyRCwgb3RoZXI6IENvbGxpZGVyMkQsIGNvbnRhY3Q6IElQaHlzaWNzMkRDb250YWN0IHwgbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5uZWFyYnlUYWJsZSA9PT0gb3RoZXIuZ2V0Q29tcG9uZW50KENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubmVhcmJ5VGFibGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRhcmdldCgpOiBDb21wb25lbnQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmVhcmJ5VGFibGU7XG4gICAgfVxufVxuIl19