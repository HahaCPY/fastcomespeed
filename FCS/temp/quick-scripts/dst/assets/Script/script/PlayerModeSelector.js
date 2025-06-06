
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/PlayerModeSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aefe3x7WwFOkYl5ZGP0jnzm', 'PlayerModeSelector');
// Script/script/PlayerModeSelector.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerModeSelector = /** @class */ (function (_super) {
    __extends(PlayerModeSelector, _super);
    function PlayerModeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.char_select = null;
        return _this;
    }
    PlayerModeSelector_1 = PlayerModeSelector;
    PlayerModeSelector.prototype.onLoad = function () {
        PlayerModeSelector_1.player_mode = 0;
        this.player.active = false; // 隱藏 player 節點
        this.char_select.active = false;
    };
    // 這個函式直接設為 ToggleGroup 的 checkEvents
    PlayerModeSelector.prototype.onToggleGroupChanged = function (toggle) {
        //console.log("ToggleGroup changed:", toggle);
        // 取得 ToggleGroup 下所有 Toggle
        var toggles = this.node.getComponentsInChildren(cc.Toggle);
        // 找到目前被選中的 Toggle
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        // 你要的是：toggle 0 或 2 被選中時，player_mode = 1
        if (selectedIdx === 0) {
            PlayerModeSelector_1.player_mode = 0;
            console.log("選擇了單人模式");
            this.player.active = false; // 隱藏 player 節點
            this.char_select.active = false; // 顯示 char_select 節點
        }
        else {
            PlayerModeSelector_1.player_mode = 1;
            this.player.active = true; // 顯示 player 節點
            this.char_select.active = true; // 隱藏 char_select 節點
            console.log("PlayerModeSelector.player_mode = 0");
        }
        cc.log("player_mode:", PlayerModeSelector_1.player_mode);
    };
    var PlayerModeSelector_1;
    // 全域變數
    PlayerModeSelector.player_mode = 0;
    __decorate([
        property(cc.Node)
    ], PlayerModeSelector.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerModeSelector.prototype, "char_select", void 0);
    PlayerModeSelector = PlayerModeSelector_1 = __decorate([
        ccclass
    ], PlayerModeSelector);
    return PlayerModeSelector;
}(cc.Component));
exports.default = PlayerModeSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFBsYXllck1vZGVTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXNDQztRQWpDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQThCaEMsQ0FBQzsyQkF0Q29CLGtCQUFrQjtJQVV6QixtQ0FBTSxHQUFoQjtRQUNJLG9CQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxpREFBb0IsR0FBcEIsVUFBcUIsTUFBaUI7UUFDbEMsOENBQThDO1FBQzlDLDRCQUE0QjtRQUM1QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxrQkFBa0I7UUFDbEIsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFFeEQseUNBQXlDO1FBQ3pDLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNuQixvQkFBa0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxvQkFBb0I7U0FDeEQ7YUFBTTtZQUNILG9CQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZTtZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsb0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFwQ0QsT0FBTztJQUNPLDhCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBR3RDO1FBREUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0k7SUFHdkI7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDUztJQVJYLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0N0QztJQUFELHlCQUFDO0NBdENELEFBc0NDLENBdEMrQyxFQUFFLENBQUMsU0FBUyxHQXNDM0Q7a0JBdENvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTW9kZVNlbGVjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIOWFqOWfn+iuiuaVuFxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5ZXJfbW9kZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJfc2VsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWN0aXZlID0gZmFsc2U7IC8vIOmaseiXjyBwbGF5ZXIg56+A6bueXHJcbiAgICAgICAgdGhpcy5jaGFyX3NlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpgJnlgIvlh73lvI/nm7TmjqXoqK3ngrogVG9nZ2xlR3JvdXAg55qEIGNoZWNrRXZlbnRzXHJcbiAgICBvblRvZ2dsZUdyb3VwQ2hhbmdlZCh0b2dnbGU6IGNjLlRvZ2dsZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUb2dnbGVHcm91cCBjaGFuZ2VkOlwiLCB0b2dnbGUpO1xyXG4gICAgICAgIC8vIOWPluW+lyBUb2dnbGVHcm91cCDkuIvmiYDmnIkgVG9nZ2xlXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Ub2dnbGUpO1xyXG4gICAgICAgIC8vIOaJvuWIsOebruWJjeiiq+mBuOS4reeahCBUb2dnbGVcclxuICAgICAgICBjb25zdCBzZWxlY3RlZElkeCA9IHRvZ2dsZXMuZmluZEluZGV4KHQgPT4gdC5pc0NoZWNrZWQpO1xyXG5cclxuICAgICAgICAvLyDkvaDopoHnmoTmmK/vvJp0b2dnbGUgMCDmiJYgMiDooqvpgbjkuK3mmYLvvIxwbGF5ZXJfbW9kZSA9IDFcclxuICAgICAgICBpZiAoc2VsZWN0ZWRJZHggPT09IDApIHtcclxuICAgICAgICAgICAgUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpgbjmk4fkuobllq7kurrmqKHlvI9cIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFjdGl2ZSA9IGZhbHNlOyAvLyDpmrHol48gcGxheWVyIOevgOm7nlxyXG4gICAgICAgICAgICB0aGlzLmNoYXJfc2VsZWN0LmFjdGl2ZSA9IGZhbHNlOyAvLyDpoa/npLogY2hhcl9zZWxlY3Qg56+A6bueXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWN0aXZlID0gdHJ1ZTsgLy8g6aGv56S6IHBsYXllciDnr4Dpu55cclxuICAgICAgICAgICAgdGhpcy5jaGFyX3NlbGVjdC5hY3RpdmUgPSB0cnVlOyAvLyDpmrHol48gY2hhcl9zZWxlY3Qg56+A6bueXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwicGxheWVyX21vZGU6XCIsIFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSk7XHJcbiAgICB9XHJcbn0iXX0=