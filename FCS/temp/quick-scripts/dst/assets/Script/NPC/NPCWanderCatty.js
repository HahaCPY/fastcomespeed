
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/NPCWanderCatty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXE5QQ1dhbmRlckNhdHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNkLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBbUNDO1FBakNHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsNkJBQXVCLEdBQVcsQ0FBQyxDQUFDOztJQTJCaEQsQ0FBQztJQXpCRyw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Z0RBQ1A7SUFHMUI7UUFEQyxRQUFRO2lEQUNVO0lBTEYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1DbEM7SUFBRCxxQkFBQztDQW5DRCxBQW1DQyxDQW5DMkMsRUFBRSxDQUFDLFNBQVMsR0FtQ3ZEO2tCQW5Db0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5QQ1dhbmRlckNhdHR5LnRzXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOUENXYW5kZXJDYXR0eSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BbmltYXRpb24gfSlcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzIgPSBjYy52MigxLCAwKTtcclxuICAgIHByaXZhdGUgY2hhbmdlRGlyZWN0aW9uSW50ZXJ2YWw6IG51bWJlciA9IDI7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnBpY2tOZXdEaXJlY3Rpb24sIHRoaXMuY2hhbmdlRGlyZWN0aW9uSW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJjYXRfaWRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1vdmVtZW50ID0gdGhpcy5kaXJlY3Rpb24uY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCAqIGR0KTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkuYWRkKG1vdmVtZW50KSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiY2F0X3J1blwiKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbShcImNhdF9ydW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tOZXdEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuZGlyZWN0aW9uLnggPj0gMCA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltICYmIHRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=