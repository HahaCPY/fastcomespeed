
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f8f2yDCAlIs4yr2CXSSdE+', 'UIManager');
// Scripts/UI/UIManager.ts

"use strict";
// assets/Scripts/UI/UIManager.ts
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
exports.UIManager = void 0;
var cc_1 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recipeLabel = null;
        _this.feedbackLabel = null;
        _this.cutProgressLabel = null;
        return _this;
    }
    UIManager.prototype.showRecipes = function (recipes) {
        var text = recipes.map(function (r, i) { return ; }, "${i + 1}. ${r.join(\" + \")}`).join('\n');\n        this.recipeLabel.string = text;\n    }\n\n    showCutProgress(percent: number) {\n        this.cutProgressLabel.string = percent >= 100 ? '\u2705 \u5B8C\u6210\uFF01' : `${Math.round(percent)}%`;\n    }\n\n    clearCutProgress() {\n        this.cutProgressLabel.string = '';\n    }\n\n    showFeedback(success: boolean) {\n        this.feedbackLabel.string = success ? '\u2705 \u9001\u9910\u6210\u529F\uFF01' : '\u274C \u9001\u932F\u4E86\uFF01';\n        this.scheduleOnce(() => {\n            this.feedbackLabel.string = '';\n        }, 1.5);\n    }\n}\n");
    };
    __decorate([
        property(cc_1.Label)
    ], UIManager.prototype, "recipeLabel", void 0);
    __decorate([
        property(cc_1.Label)
    ], UIManager.prototype, "feedbackLabel", void 0);
    __decorate([
        property(cc_1.Label)
    ], UIManager.prototype, "cutProgressLabel", void 0);
    UIManager = __decorate([
        ccclass('UIManager')
    ], UIManager);
    return UIManager;
}(cc_1.Component));
exports.UIManager = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJL1VJTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLHlCQUF3RDtBQUNoRCxJQUFBLE9BQU8sR0FBZSxlQUFVLFFBQXpCLEVBQUUsUUFBUSxHQUFLLGVBQVUsU0FBZixDQUFnQjtBQUd6QztJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQThCQTtRQTVCSSxpQkFBVyxHQUFVLElBQUksQ0FBQztRQUcxQixtQkFBYSxHQUFVLElBQUksQ0FBQztRQUc1QixzQkFBZ0IsR0FBVSxJQUFJLENBQUM7O0lBc0JuQyxDQUFBLEFBQUM7SUFwQkcsK0JBQVcsR0FBWCxVQUFZLE9BQW1CO1FBQzNCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUQsQUFBQyxFQUFBLENBQUQsRUFBRSxnbUJBbUI1QyxDQUFBLENBQUE7SUFBQSxDQUFBLEFBQUM7SUE1Qkc7UUFEQyxRQUFRLENBQUMsVUFBSyxDQUFDO2tEQUNVO0lBRzFCO1FBREMsUUFBUSxDQUFDLFVBQUssQ0FBQztvREFDWTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxVQUFLLENBQUM7dURBQ2U7SUFSdEIsU0FBUztRQURyQixPQUFPLENBQUMsV0FBVyxDQUFDO09BQ1IsU0FBUyxDQThCdEI7SUFBQSxnQkFBQztDQTlCRCxBQThCQSxDQTlCK0IsY0FBUyxHQThCeEM7QUE5QmEsOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGFzc2V0cy9TY3JpcHRzL1VJL1VJTWFuYWdlci50c1xuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIExhYmVsLCBOb2RlIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1VJTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoTGFiZWwpXG4gICAgcmVjaXBlTGFiZWw6IExhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShMYWJlbClcbiAgICBmZWVkYmFja0xhYmVsOiBMYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoTGFiZWwpXG4gICAgY3V0UHJvZ3Jlc3NMYWJlbDogTGFiZWwgPSBudWxsO1xuXG4gICAgc2hvd1JlY2lwZXMocmVjaXBlczogc3RyaW5nW11bXSkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gcmVjaXBlcy5tYXAoKHIsIGkpID0+IFxcYFxcJHtpICsgMX0uIFxcJHtyLmpvaW4oXCIgKyBcIil9XFxgKS5qb2luKCdcXG4nKTtcbiAgICAgICAgdGhpcy5yZWNpcGVMYWJlbC5zdHJpbmcgPSB0ZXh0O1xuICAgIH1cblxuICAgIHNob3dDdXRQcm9ncmVzcyhwZXJjZW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jdXRQcm9ncmVzc0xhYmVsLnN0cmluZyA9IHBlcmNlbnQgPj0gMTAwID8gJ+KchSDlrozmiJDvvIEnIDogXFxgXFwke01hdGgucm91bmQocGVyY2VudCl9JVxcYDtcbiAgICB9XG5cbiAgICBjbGVhckN1dFByb2dyZXNzKCkge1xuICAgICAgICB0aGlzLmN1dFByb2dyZXNzTGFiZWwuc3RyaW5nID0gJyc7XG4gICAgfVxuXG4gICAgc2hvd0ZlZWRiYWNrKHN1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja0xhYmVsLnN0cmluZyA9IHN1Y2Nlc3MgPyAn4pyFIOmAgemkkOaIkOWKn++8gScgOiAn4p2MIOmAgemMr+S6hu+8gSc7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgfSwgMS41KTtcbiAgICB9XG59XG4iXX0=