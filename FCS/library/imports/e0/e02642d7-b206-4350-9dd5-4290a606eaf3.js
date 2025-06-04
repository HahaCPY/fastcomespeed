"use strict";
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