"use strict";
cc._RF.push(module, '2e63bAs29tP5I9SVWngM+bj', 'NPCWanderGoblin');
// Script/NPC/NPCWanderGoblin.ts

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
var NPCWanderGoblin = /** @class */ (function (_super) {
    __extends(NPCWanderGoblin, _super);
    function NPCWanderGoblin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minSpeed = 30;
        _this.maxSpeed = 40;
        _this.anim = null;
        _this.dir = cc.v2(0, 0);
        _this.speed = 0;
        _this.rb = null;
        return _this;
    }
    NPCWanderGoblin.prototype.start = function () {
        this.rb = this.getComponent(cc.RigidBody);
        this.schedule(this.pickRandomDirection, Math.random() * 2 + 1); // 每 1~3 秒換方向
        this.pickRandomDirection();
    };
    NPCWanderGoblin.prototype.pickRandomDirection = function () {
        var angle = Math.random() * Math.PI * 2;
        this.dir = cc.v2(Math.cos(angle), Math.sin(angle)).normalize();
        this.speed = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);
        if (this.anim)
            this.anim.play("goblin_run");
    };
    NPCWanderGoblin.prototype.update = function (dt) {
        if (this.rb) {
            this.rb.linearVelocity = this.dir.mul(this.speed);
            if (Math.abs(this.dir.x) > Math.abs(this.dir.y)) {
                this.node.scaleX = this.dir.x > 0 ? 1 : -1;
            }
        }
    };
    NPCWanderGoblin.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === "DeskCollider") {
            this.dir = cc.v2(0, 0);
            this.speed = 0;
            if (this.anim)
                this.anim.play("goblin_idle");
        }
    };
    __decorate([
        property
    ], NPCWanderGoblin.prototype, "minSpeed", void 0);
    __decorate([
        property
    ], NPCWanderGoblin.prototype, "maxSpeed", void 0);
    __decorate([
        property(cc.Animation)
    ], NPCWanderGoblin.prototype, "anim", void 0);
    NPCWanderGoblin = __decorate([
        ccclass
    ], NPCWanderGoblin);
    return NPCWanderGoblin;
}(cc.Component));
exports.default = NPCWanderGoblin;

cc._RF.pop();