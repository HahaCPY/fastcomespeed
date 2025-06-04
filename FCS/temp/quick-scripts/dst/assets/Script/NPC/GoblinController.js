
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/GoblinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0264LXsgZDUJ3VQpCmBurz', 'GoblinController');
// Script/NPC/GoblinController.ts

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
var GoblinController = /** @class */ (function (_super) {
    __extends(GoblinController, _super);
    function GoblinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.girl1 = null;
        _this.girl2 = null;
        _this.speed = 15;
        _this.rb = null;
        _this.state = "idle";
        _this.followTimer = 0;
        _this.followThreshold = 7; // 秒數
        _this.deskContactTimer = 0;
        _this.inDeskContact = false;
        _this.currentAnim = "";
        _this.isDying = false; // 👉 加在 class 裡
        return _this;
    }
    GoblinController.prototype.onLoad = function () {
        this.rb = this.getComponent(cc.RigidBody);
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.state = "walk";
        this.playAnim("goblin_run");
    };
    GoblinController.prototype.setTargetPlayers = function (girl1, girl2) {
        this.girl1 = girl1;
        this.girl2 = girl2;
    };
    GoblinController.prototype.update = function (dt) {
        var _a, _b;
        if (this.state === "dead")
            return;
        var player1 = (_a = this.girl1) === null || _a === void 0 ? void 0 : _a.position;
        var player2 = (_b = this.girl2) === null || _b === void 0 ? void 0 : _b.position;
        var target = player1 && player2
            ? (this.node.position.sub(player1).mag() < this.node.position.sub(player2).mag() ? player1 : player2)
            : player1 || player2;
        if (target && this.state !== "idle") {
            var distance = this.node.position.sub(target).mag();
            if (distance < 150) {
                this.followTimer += dt;
            }
            else {
                this.followTimer = 0;
            }
            this.moveTowards(target, dt);
            this.playAnim("goblin_run");
            if (this.followTimer > this.followThreshold) {
                this.die();
            }
        }
        if (this.inDeskContact && !this.isDying) {
            this.deskContactTimer += dt;
            if (this.deskContactTimer > 1 && this.state !== "dead") {
                this.die();
            }
        }
        else {
            this.deskContactTimer = 0;
        }
    };
    GoblinController.prototype.moveTowards = function (target, dt) {
        if (this.state === "dead")
            return;
        var dir = target.sub(this.node.position);
        //dir.y -= 30; // 偏下方
        dir = dir.normalize();
        this.node.x += dir.x * this.speed * dt;
        this.node.y += dir.y * this.speed * dt;
        if (Math.abs(dir.x) > 0.1) {
            this.node.scaleX = dir.x > 0 ? 1 : -1;
        }
    };
    GoblinController.prototype.die = function () {
        var _this = this;
        if (this.state === "dead" || this.isDying)
            return;
        this.isDying = true;
        this.state = "dead";
        this.inDeskContact = false;
        this.unscheduleAllCallbacks();
        var state = this.anim.getAnimationState("goblin_die");
        if (!state) {
            console.warn("❗找不到 goblin_die 動畫，直接銷毀節點");
            this.node.destroy();
            return;
        }
        this.currentAnim = "goblin_die";
        this.anim.play("goblin_die");
        this.anim.once("finished", function () {
            _this.node.destroy();
        }, this);
    };
    GoblinController.prototype.playAnim = function (name) {
        // 🛑 如果已死亡，不准再切動畫
        if (this.state === "dead")
            return;
        if (!this.anim || this.currentAnim === name)
            return;
        var state = this.anim.getAnimationState(name);
        if (state) {
            this.anim.play(name);
            this.currentAnim = name;
        }
    };
    GoblinController.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = true;
        }
    };
    GoblinController.prototype.onEndContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.inDeskContact = false;
            this.deskContactTimer = 0;
        }
    };
    __decorate([
        property(cc.Animation)
    ], GoblinController.prototype, "anim", void 0);
    __decorate([
        property(cc.Node)
    ], GoblinController.prototype, "girl1", void 0);
    __decorate([
        property(cc.Node)
    ], GoblinController.prototype, "girl2", void 0);
    __decorate([
        property
    ], GoblinController.prototype, "speed", void 0);
    GoblinController = __decorate([
        ccclass
    ], GoblinController);
    return GoblinController;
}(cc.Component));
exports.default = GoblinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXEdvYmxpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUE4SUM7UUE1SUcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxRQUFFLEdBQWlCLElBQUksQ0FBQztRQUN4QixXQUFLLEdBQVcsTUFBTSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsQyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQjs7SUEwSHRELENBQUM7SUF2SEcsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQWMs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QUNoRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUdHLHlDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQzdCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUExSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFHdEI7UUFEQyxRQUFRO21EQUNVO0lBWEYsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E4SXBDO0lBQUQsdUJBQUM7Q0E5SUQsQUE4SUMsQ0E5STZDLEVBQUUsQ0FBQyxTQUFTLEdBOEl6RDtrQkE5SW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb2JsaW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDE1O1xyXG5cclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBzdHJpbmcgPSBcImlkbGVcIjtcclxuICAgIHByaXZhdGUgZm9sbG93VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZvbGxvd1RocmVzaG9sZDogbnVtYmVyID0gNzsgLy8g56eS5pW4XHJcbiAgICBwcml2YXRlIGRlc2tDb250YWN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGluRGVza0NvbnRhY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGlzRHlpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8g8J+RiSDliqDlnKggY2xhc3Mg6KOhXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJ3YWxrXCI7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdvYmxpbl9ydW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0UGxheWVycyhnaXJsMTogY2MuTm9kZSwgZ2lybDI6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmdpcmwxID0gZ2lybDE7XHJcbiAgICAgICAgdGhpcy5naXJsMiA9IGdpcmwyO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSB0aGlzLmdpcmwxPy5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBwbGF5ZXIyID0gdGhpcy5naXJsMj8ucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBsYXllcjEgJiYgcGxheWVyMlxyXG4gICAgICAgICAgICA/ICh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllcjEpLm1hZygpIDwgdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXIyKS5tYWcoKSA/IHBsYXllcjEgOiBwbGF5ZXIyKVxyXG4gICAgICAgICAgICA6IHBsYXllcjEgfHwgcGxheWVyMjtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLnN0YXRlICE9PSBcImlkbGVcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIodGFyZ2V0KS5tYWcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93VGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKHRhcmdldCwgZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ29ibGluX3J1blwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbGxvd1RpbWVyID4gdGhpcy5mb2xsb3dUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluRGVza0NvbnRhY3QgJiYgIXRoaXMuaXNEeWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2tDb250YWN0VGltZXIgKz0gZHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNrQ29udGFjdFRpbWVyID4gMSAmJiB0aGlzLnN0YXRlICE9PSBcImRlYWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvd2FyZHModGFyZ2V0OiBjYy5WZWMzLCBkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47IFxyXG4gICAgICAgIGxldCBkaXIgPSB0YXJnZXQuc3ViKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgLy9kaXIueSAtPSAzMDsgLy8g5YGP5LiL5pa5XHJcbiAgICAgICAgZGlyID0gZGlyLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSBkaXIueCAqIHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBkaXIueSAqIHRoaXMuc3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueCkgPiAwLjEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IGRpci54ID4gMCA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5kaWUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIgfHwgdGhpcy5pc0R5aW5nKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5pc0R5aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBcImRlYWRcIjtcclxuICAgIHRoaXMuaW5EZXNrQ29udGFjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJnb2JsaW5fZGllXCIpO1xyXG4gICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIuKdl+aJvuS4jeWIsCBnb2JsaW5fZGllIOWLleeVq++8jOebtOaOpemKt+avgOevgOm7nlwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRBbmltID0gXCJnb2JsaW5fZGllXCI7XHJcbiAgICB0aGlzLmFuaW0ucGxheShcImdvYmxpbl9kaWVcIik7XHJcblxyXG4gICAgdGhpcy5hbmltLm9uY2UoXCJmaW5pc2hlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sIHRoaXMpO1xyXG59XHJcblxyXG5cclxucGxheUFuaW0obmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyDwn5uRIOWmguaenOW3suatu+S6oe+8jOS4jeWHhuWGjeWIh+WLleeVq1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCF0aGlzLmFuaW0gfHwgdGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5EZXNrQ29udGFjdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbkRlc2tDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=