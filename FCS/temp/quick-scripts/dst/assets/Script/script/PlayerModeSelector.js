
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L1BsYXllck1vZGVTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXNDQztRQWpDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQThCaEMsQ0FBQzsyQkF0Q29CLGtCQUFrQjtJQVV6QixtQ0FBTSxHQUFoQjtRQUNJLG9CQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxpREFBb0IsR0FBcEIsVUFBcUIsTUFBaUI7UUFDbEMsOENBQThDO1FBQzlDLDRCQUE0QjtRQUM1QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxrQkFBa0I7UUFDbEIsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFFeEQseUNBQXlDO1FBQ3pDLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNuQixvQkFBa0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsZUFBZTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxvQkFBb0I7U0FDeEQ7YUFBTTtZQUNILG9CQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZTtZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsb0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFwQ0QsT0FBTztJQUNPLDhCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBR3RDO1FBREUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0k7SUFHdkI7UUFERSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDUztJQVJYLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0N0QztJQUFELHlCQUFDO0NBdENELEFBc0NDLENBdEMrQyxFQUFFLENBQUMsU0FBUyxHQXNDM0Q7a0JBdENvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTW9kZVNlbGVjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyDlhajln5/orormlbhcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllcl9tb2RlOiBudW1iZXIgPSAwO1xuXG4gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcl9zZWxlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgUGxheWVyTW9kZVNlbGVjdG9yLnBsYXllcl9tb2RlID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWN0aXZlID0gZmFsc2U7IC8vIOmaseiXjyBwbGF5ZXIg56+A6bueXG4gICAgICAgIHRoaXMuY2hhcl9zZWxlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g6YCZ5YCL5Ye95byP55u05o6l6Kit54K6IFRvZ2dsZUdyb3VwIOeahCBjaGVja0V2ZW50c1xuICAgIG9uVG9nZ2xlR3JvdXBDaGFuZ2VkKHRvZ2dsZTogY2MuVG9nZ2xlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUb2dnbGVHcm91cCBjaGFuZ2VkOlwiLCB0b2dnbGUpO1xuICAgICAgICAvLyDlj5blvpcgVG9nZ2xlR3JvdXAg5LiL5omA5pyJIFRvZ2dsZVxuICAgICAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlRvZ2dsZSk7XG4gICAgICAgIC8vIOaJvuWIsOebruWJjeiiq+mBuOS4reeahCBUb2dnbGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHggPSB0b2dnbGVzLmZpbmRJbmRleCh0ID0+IHQuaXNDaGVja2VkKTtcblxuICAgICAgICAvLyDkvaDopoHnmoTmmK/vvJp0b2dnbGUgMCDmiJYgMiDooqvpgbjkuK3mmYLvvIxwbGF5ZXJfbW9kZSA9IDFcbiAgICAgICAgaWYgKHNlbGVjdGVkSWR4ID09PSAwKSB7XG4gICAgICAgICAgICBQbGF5ZXJNb2RlU2VsZWN0b3IucGxheWVyX21vZGUgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpgbjmk4fkuobllq7kurrmqKHlvI9cIik7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5hY3RpdmUgPSBmYWxzZTsgLy8g6Zqx6JePIHBsYXllciDnr4Dpu55cbiAgICAgICAgICAgIHRoaXMuY2hhcl9zZWxlY3QuYWN0aXZlID0gZmFsc2U7IC8vIOmhr+ekuiBjaGFyX3NlbGVjdCDnr4Dpu55cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSA9IDE7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5hY3RpdmUgPSB0cnVlOyAvLyDpoa/npLogcGxheWVyIOevgOm7nlxuICAgICAgICAgICAgdGhpcy5jaGFyX3NlbGVjdC5hY3RpdmUgPSB0cnVlOyAvLyDpmrHol48gY2hhcl9zZWxlY3Qg56+A6bueXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSA9IDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKFwicGxheWVyX21vZGU6XCIsIFBsYXllck1vZGVTZWxlY3Rvci5wbGF5ZXJfbW9kZSk7XG4gICAgfVxufSJdfQ==