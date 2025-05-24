"use strict";
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