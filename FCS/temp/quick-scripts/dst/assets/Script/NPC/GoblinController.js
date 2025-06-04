
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
            if (this.deskContactTimer > 4 && this.state !== "idle") {
                this.state = "idle";
                this.playAnim("goblin_idle");
            }
        }
        else {
            this.deskContactTimer = 0;
        }
    };
    GoblinController.prototype.moveTowards = function (target, dt) {
        var dir = target.sub(this.node.position);
        dir.y -= 30; // 偏下方
        dir = dir.normalize();
        this.node.x += dir.x * this.speed * dt;
        this.node.y += dir.y * this.speed * dt;
        if (Math.abs(dir.x) > 0.1) {
            this.node.scaleX = dir.x > 0 ? 0.8 : -0.8;
        }
    };
    GoblinController.prototype.die = function () {
        if (this.state === "dead")
            return;
        this.state = "dead";
        this.inDeskContact = false;
        this.unscheduleAllCallbacks();
        this.playAnim("goblin_die");
        this.anim.once("finished", this.onDieAnimationFinished, this);
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
        if (other.node.name === "DeskCollider") {
            this.inDeskContact = true;
        }
    };
    GoblinController.prototype.onEndContact = function (contact, self, other) {
        if (other.node.name === "DeskCollider") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXEdvYmxpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF5SEM7UUF2SEcsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxRQUFFLEdBQWlCLElBQUksQ0FBQztRQUN4QixXQUFLLEdBQVcsTUFBTSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsQyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7O0lBc0dyQyxDQUFDO0lBcEdHLGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFjLEVBQUUsS0FBYztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVU7O1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU07WUFBRSxPQUFPO1FBRWxDLElBQU0sT0FBTyxTQUFHLElBQUksQ0FBQyxLQUFLLDBDQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFNLE9BQU8sU0FBRyxJQUFJLENBQUMsS0FBSywwQ0FBRSxRQUFRLENBQUM7UUFFckMsSUFBTSxNQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU87WUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDckcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUM7UUFFekIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFDakMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXRELElBQUksUUFBUSxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTVCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDZDtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoQztTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxNQUFlLEVBQUUsRUFBVTtRQUNuQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQ25CLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVELDhCQUFHLEdBQUg7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTTtZQUFFLE9BQU87UUFFbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxpREFBc0IsR0FBdEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUk7WUFBRSxPQUFPO1FBRXBELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUF0SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFHdEI7UUFEQyxRQUFRO21EQUNVO0lBWEYsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F5SHBDO0lBQUQsdUJBQUM7Q0F6SEQsQUF5SEMsQ0F6SDZDLEVBQUUsQ0FBQyxTQUFTLEdBeUh6RDtrQkF6SG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb2JsaW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDE1O1xyXG5cclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBzdHJpbmcgPSBcImlkbGVcIjtcclxuICAgIHByaXZhdGUgZm9sbG93VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZvbGxvd1RocmVzaG9sZDogbnVtYmVyID0gNzsgLy8g56eS5pW4XHJcbiAgICBwcml2YXRlIGRlc2tDb250YWN0VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGluRGVza0NvbnRhY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcIndhbGtcIjtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ29ibGluX3J1blwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYXJnZXRQbGF5ZXJzKGdpcmwxOiBjYy5Ob2RlLCBnaXJsMjogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuZ2lybDEgPSBnaXJsMTtcclxuICAgICAgICB0aGlzLmdpcmwyID0gZ2lybDI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJkZWFkXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IHRoaXMuZ2lybDE/LnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSB0aGlzLmdpcmwyPy5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGxheWVyMSAmJiBwbGF5ZXIyXHJcbiAgICAgICAgICAgID8gKHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyMSkubWFnKCkgPCB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllcjIpLm1hZygpID8gcGxheWVyMSA6IHBsYXllcjIpXHJcbiAgICAgICAgICAgIDogcGxheWVyMSB8fCBwbGF5ZXIyO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuc3RhdGUgIT09IFwiaWRsZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yih0YXJnZXQpLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTUwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd1RpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dUaW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvd2FyZHModGFyZ2V0LCBkdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnb2JsaW5fcnVuXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9sbG93VGltZXIgPiB0aGlzLmZvbGxvd1RocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5EZXNrQ29udGFjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2tDb250YWN0VGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlc2tDb250YWN0VGltZXIgPiA0ICYmIHRoaXMuc3RhdGUgIT09IFwiaWRsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ29ibGluX2lkbGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2tDb250YWN0VGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG93YXJkcyh0YXJnZXQ6IGNjLlZlYzMsIGR0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGlyID0gdGFyZ2V0LnN1Yih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGRpci55IC09IDMwOyAvLyDlgY/kuIvmlrlcclxuICAgICAgICBkaXIgPSBkaXIubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRpci54ICogdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IGRpci55ICogdGhpcy5zcGVlZCAqIGR0O1xyXG5cclxuICAgICAgICAgaWYgKE1hdGguYWJzKGRpci54KSA+IDAuMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gZGlyLnggPiAwID8gMC44IDogLTAuODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGllKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBcImRlYWRcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJkZWFkXCI7XHJcbiAgICAgICAgdGhpcy5pbkRlc2tDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJnb2JsaW5fZGllXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0ub25jZShcImZpbmlzaGVkXCIsIHRoaXMub25EaWVBbmltYXRpb25GaW5pc2hlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaWVBbmltYXRpb25GaW5pc2hlZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltIHx8IHRoaXMuY3VycmVudEFuaW0gPT09IG5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUobmFtZSk7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSBcIkRlc2tDb2xsaWRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5EZXNrQ29udGFjdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT09IFwiRGVza0NvbGxpZGVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbkRlc2tDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGVza0NvbnRhY3RUaW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==