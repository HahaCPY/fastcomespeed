"use strict";
cc._RF.push(module, 'a4e7blT7VtAm7dLpKzVc9HU', 'NPCWanderCatty');
// Script/NPC/NPCWanderCatty.ts

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
// NPCWanderCatty.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NPCWanderCatty = /** @class */ (function (_super) {
    __extends(NPCWanderCatty, _super);
    function NPCWanderCatty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 50;
        _this.direction = cc.v2(1, 0);
        _this.changeDirectionInterval = 2;
        return _this;
    }
    NPCWanderCatty.prototype.start = function () {
        this.schedule(this.pickNewDirection, this.changeDirectionInterval);
        this.playAnim("cat_idle");
    };
    NPCWanderCatty.prototype.update = function (dt) {
        var movement = this.direction.clone().normalize().mul(this.speed * dt);
        this.node.setPosition(this.node.getPosition().add(movement));
        if (!this.anim.getAnimationState("cat_run").isPlaying) {
            this.playAnim("cat_run");
        }
    };
    NPCWanderCatty.prototype.pickNewDirection = function () {
        var angle = Math.random() * 2 * Math.PI;
        this.direction = cc.v2(Math.cos(angle), Math.sin(angle));
        this.node.scaleX = this.direction.x >= 0 ? 1 : -1;
    };
    NPCWanderCatty.prototype.playAnim = function (name) {
        if (this.anim && this.anim.getAnimationState(name)) {
            this.anim.play(name);
        }
    };
    __decorate([
        property({ type: cc.Animation })
    ], NPCWanderCatty.prototype, "anim", void 0);
    __decorate([
        property
    ], NPCWanderCatty.prototype, "speed", void 0);
    NPCWanderCatty = __decorate([
        ccclass
    ], NPCWanderCatty);
    return NPCWanderCatty;
}(cc.Component));
exports.default = NPCWanderCatty;

cc._RF.pop();