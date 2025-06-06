
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/PlayerAnimationController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a348ewY38tOnYXPnHBjwP46', 'PlayerAnimationController');
// Script/script/PlayerAnimationController.ts

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
var PlayerAnimationController = /** @class */ (function (_super) {
    __extends(PlayerAnimationController, _super);
    function PlayerAnimationController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleGroupNode = null;
        _this.player1 = null;
        _this.player2 = null;
        _this.buttonGirl = null;
        _this.buttonGirl2 = null;
        _this.choosePlayerNode = null;
        return _this;
    }
    PlayerAnimationController_1 = PlayerAnimationController;
    PlayerAnimationController.prototype.start = function () {
        var _this = this;
        this.buttonGirl.node.on('click', function () {
            _this.assignCharIndex(0); // girl1
        }, this);
        this.buttonGirl2.node.on('click', function () {
            _this.assignCharIndex(1); // girl2
        }, this);
    };
    PlayerAnimationController.prototype.getSelectedPlayer = function () {
        if (this.choosePlayerNode.active === false) {
            return this.player1;
        }
        var toggles = this.toggleGroupNode.getComponentsInChildren(cc.Toggle);
        var selectedIdx = toggles.findIndex(function (t) { return t.isChecked; });
        return selectedIdx === 0 ? this.player1 : this.player2;
    };
    // ✅ 改這裡：根據選擇的玩家，記錄他選的角色，並切動畫
    PlayerAnimationController.prototype.assignCharIndex = function (index) {
        var player = this.getSelectedPlayer();
        if (player === this.player1) {
            PlayerAnimationController_1.player1CharIndex = index;
        }
        else {
            PlayerAnimationController_1.player2CharIndex = index;
        }
        var prefix = index === 0 ? "girl" : "girl2";
        this.changeAnimation(prefix + "_idle");
    };
    PlayerAnimationController.prototype.changeAnimation = function (animName) {
        var player = this.getSelectedPlayer();
        if (!player)
            return;
        var anim = player.getComponent(cc.Animation);
        if (anim) {
            anim.play(animName);
        }
    };
    var PlayerAnimationController_1;
    // ✅ 記錄 player1 / player2 各自的角色選擇
    PlayerAnimationController.player1CharIndex = 0; // 0 = girl1, 1 = girl2
    PlayerAnimationController.player2CharIndex = 1;
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "toggleGroupNode", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "player1", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "player2", void 0);
    __decorate([
        property(cc.Button)
    ], PlayerAnimationController.prototype, "buttonGirl", void 0);
    __decorate([
        property(cc.Button)
    ], PlayerAnimationController.prototype, "buttonGirl2", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerAnimationController.prototype, "choosePlayerNode", void 0);
    PlayerAnimationController = PlayerAnimationController_1 = __decorate([
        ccclass
    ], PlayerAnimationController);
    return PlayerAnimationController;
}(cc.Component));
exports.default = PlayerAnimationController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFBsYXllckFuaW1hdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBdUQsNkNBQVk7SUFBbkU7UUFBQSxxRUFnRUM7UUE5REcscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUErQ3JDLENBQUM7a0NBaEVvQix5QkFBeUI7SUF1QjFDLHlDQUFLLEdBQUw7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDN0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUM5QixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQscURBQWlCLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBWCxDQUFXLENBQUMsQ0FBQztRQUN4RCxPQUFPLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQUVELDZCQUE2QjtJQUM3QixtREFBZSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFeEMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN6QiwyQkFBeUIsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7U0FDdEQ7YUFBTTtZQUNILDJCQUF5QixDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUN0RDtRQUVELElBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUksTUFBTSxVQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbURBQWUsR0FBZixVQUFnQixRQUFnQjtRQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7SUE1Q0QsaUNBQWlDO0lBQ25CLDBDQUFnQixHQUFXLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtJQUNyRCwwQ0FBZ0IsR0FBVyxDQUFDLENBQUM7SUFuQjNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0VBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUVBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrRUFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VFQUNlO0lBakJoQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQWdFN0M7SUFBRCxnQ0FBQztDQWhFRCxBQWdFQyxDQWhFc0QsRUFBRSxDQUFDLFNBQVMsR0FnRWxFO2tCQWhFb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyLWxldmVsMVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvZ2dsZUdyb3VwTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXIxOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidXR0b25HaXJsOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidXR0b25HaXJsMjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNob29zZVBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOKchSDoqJjpjIQgcGxheWVyMSAvIHBsYXllcjIg5ZCE6Ieq55qE6KeS6Imy6YG45pOHXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllcjFDaGFySW5kZXg6IG51bWJlciA9IDA7IC8vIDAgPSBnaXJsMSwgMSA9IGdpcmwyXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllcjJDaGFySW5kZXg6IG51bWJlciA9IDE7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25HaXJsLm5vZGUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2lnbkNoYXJJbmRleCgwKTsgLy8gZ2lybDFcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25HaXJsMi5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hc3NpZ25DaGFySW5kZXgoMSk7IC8vIGdpcmwyXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRQbGF5ZXIoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hvb3NlUGxheWVyTm9kZS5hY3RpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSB0aGlzLnRvZ2dsZUdyb3VwTm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Ub2dnbGUpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWR4ID0gdG9nZ2xlcy5maW5kSW5kZXgodCA9PiB0LmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSWR4ID09PSAwID8gdGhpcy5wbGF5ZXIxIDogdGhpcy5wbGF5ZXIyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKchSDmlLnpgJnoo6HvvJrmoLnmk5rpgbjmk4fnmoTnjqnlrrbvvIzoqJjpjITku5bpgbjnmoTop5LoibLvvIzkuKbliIfli5XnlatcclxuICAgIGFzc2lnbkNoYXJJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRTZWxlY3RlZFBsYXllcigpO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyID09PSB0aGlzLnBsYXllcjEpIHtcclxuICAgICAgICAgICAgUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlci5wbGF5ZXIxQ2hhckluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUGxheWVyQW5pbWF0aW9uQ29udHJvbGxlci5wbGF5ZXIyQ2hhckluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmVmaXggPSBpbmRleCA9PT0gMCA/IFwiZ2lybFwiIDogXCJnaXJsMlwiO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uKGAke3ByZWZpeH1faWRsZWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUFuaW1hdGlvbihhbmltTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRTZWxlY3RlZFBsYXllcigpO1xyXG4gICAgICAgIGlmICghcGxheWVyKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgYW5pbSA9IHBsYXllci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBpZiAoYW5pbSkge1xyXG4gICAgICAgICAgICBhbmltLnBsYXkoYW5pbU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=