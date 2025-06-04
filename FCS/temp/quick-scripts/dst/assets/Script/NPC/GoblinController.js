
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
        if (this.inDeskContact) {
            this.deskContactTimer += dt;
            if (this.deskContactTimer > 4 && this.state !== "dead") {
                this.die(); // ✅ 碰太久就死亡
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
            this.node.scaleX = dir.x > 0 ? 0.8 : -0.8;
        }
    };
    GoblinController.prototype.die = function () {
        var _this = this;
        if (this.state === "dead")
            return;
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
        // ✅ 播放動畫
        this.anim.play("goblin_die");
        // ✅ 不要檢查 clip.name，直接 destroy（因為某些版本 clip.name 會是 null）
        this.anim.once("finished", function () {
            _this.onDieAnimationFinished();
        }, this);
    };
    GoblinController.prototype.onDieAnimationFinished = function () {
        this.node.destroy();
    };
    GoblinController.prototype.playAnim = function (name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXEdvYmxpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUE4SUM7UUE1SUcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxRQUFFLEdBQWlCLElBQUksQ0FBQztRQUN4QixXQUFLLEdBQVcsTUFBTSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsQyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7O0lBMkhyQyxDQUFDO0lBekhHLGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFjLEVBQUUsS0FBYztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtB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QUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUM3QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBMUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ0c7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBR3RCO1FBREMsUUFBUTttREFDVTtJQVhGLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBOElwQztJQUFELHVCQUFDO0NBOUlELEFBOElDLENBOUk2QyxFQUFFLENBQUMsU0FBUyxHQThJekQ7a0JBOUlvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29ibGluQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdpcmwxOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdpcmwyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAxNTtcclxuXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogc3RyaW5nID0gXCJpZGxlXCI7XHJcbiAgICBwcml2YXRlIGZvbGxvd1RpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmb2xsb3dUaHJlc2hvbGQ6IG51bWJlciA9IDc7IC8vIOenkuaVuFxyXG4gICAgcHJpdmF0ZSBkZXNrQ29udGFjdFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpbkRlc2tDb250YWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBbmltOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJ3YWxrXCI7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImdvYmxpbl9ydW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0UGxheWVycyhnaXJsMTogY2MuTm9kZSwgZ2lybDI6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmdpcmwxID0gZ2lybDE7XHJcbiAgICAgICAgdGhpcy5naXJsMiA9IGdpcmwyO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiZGVhZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSB0aGlzLmdpcmwxPy5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBwbGF5ZXIyID0gdGhpcy5naXJsMj8ucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBsYXllcjEgJiYgcGxheWVyMlxyXG4gICAgICAgICAgICA/ICh0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllcjEpLm1hZygpIDwgdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXIyKS5tYWcoKSA/IHBsYXllcjEgOiBwbGF5ZXIyKVxyXG4gICAgICAgICAgICA6IHBsYXllcjEgfHwgcGxheWVyMjtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLnN0YXRlICE9PSBcImlkbGVcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIodGFyZ2V0KS5tYWcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93VGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb3dhcmRzKHRhcmdldCwgZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ29ibGluX3J1blwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbGxvd1RpbWVyID4gdGhpcy5mb2xsb3dUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmluRGVza0NvbnRhY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrQ29udGFjdFRpbWVyICs9IGR0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVza0NvbnRhY3RUaW1lciA+IDQgJiYgdGhpcy5zdGF0ZSAhPT0gXCJkZWFkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7IC8vIOKchSDnorDlpKrkuYXlsLHmrbvkuqFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG93YXJkcyh0YXJnZXQ6IGNjLlZlYzMsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIpIHJldHVybjsgXHJcbiAgICAgICAgbGV0IGRpciA9IHRhcmdldC5zdWIodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAvL2Rpci55IC09IDMwOyAvLyDlgY/kuIvmlrlcclxuICAgICAgICBkaXIgPSBkaXIubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRpci54ICogdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGRpci55ICogdGhpcy5zcGVlZCAqIGR0O1xyXG5cclxuICAgICAgICAgaWYgKE1hdGguYWJzKGRpci54KSA+IDAuMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gZGlyLnggPiAwID8gMC44IDogLTAuODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5kaWUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gXCJkZWFkXCI7XHJcbiAgICB0aGlzLmluRGVza0NvbnRhY3QgPSBmYWxzZTtcclxuICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZ29ibGluX2RpZVwiKTtcclxuICAgIGlmICghc3RhdGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLinZfmib7kuI3liLAgZ29ibGluX2RpZSDli5XnlavvvIznm7TmjqXpirfmr4Dnr4Dpu55cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50QW5pbSA9IFwiZ29ibGluX2RpZVwiO1xyXG5cclxuICAgIC8vIOKchSDmkq3mlL7li5XnlatcclxuICAgIHRoaXMuYW5pbS5wbGF5KFwiZ29ibGluX2RpZVwiKTtcclxuXHJcbiAgICAvLyDinIUg5LiN6KaB5qqi5p+lIGNsaXAubmFtZe+8jOebtOaOpSBkZXN0cm9577yI5Zug54K65p+Q5Lqb54mI5pysIGNsaXAubmFtZSDmnIPmmK8gbnVsbO+8iVxyXG4gICAgdGhpcy5hbmltLm9uY2UoXCJmaW5pc2hlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkRpZUFuaW1hdGlvbkZpbmlzaGVkKCk7XHJcbiAgICB9LCB0aGlzKTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgb25EaWVBbmltYXRpb25GaW5pc2hlZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltIHx8IHRoaXMuY3VycmVudEFuaW0gPT09IG5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5EZXNrQ29udGFjdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbkRlc2tDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=