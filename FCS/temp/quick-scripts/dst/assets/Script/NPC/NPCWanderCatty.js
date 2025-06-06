
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NPCWanderCatty = /** @class */ (function (_super) {
    __extends(NPCWanderCatty, _super);
    function NPCWanderCatty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 50;
        _this.direction = cc.v3();
        _this.moveTimer = 0;
        _this.animTimer = 0;
        return _this;
    }
    NPCWanderCatty.prototype.onLoad = function () {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.pickRandomDirection();
        this.playAnim("cat_run");
    };
    NPCWanderCatty.prototype.update = function (dt) {
        // 🐾 移動
        var moving = this.direction.mag() > 0.1;
        if (moving) {
            this.node.x += this.direction.x * this.speed * dt;
            this.node.y += this.direction.y * this.speed * dt;
        }
        // ⏱️ 定時換方向
        this.moveTimer += dt;
        if (this.moveTimer >= 2 + Math.random() * 2) {
            this.pickRandomDirection();
            this.moveTimer = 0;
        }
        // 🎬 自動切動畫
        if (moving) {
            this.playAnim("cat_run");
        }
        else {
            this.playAnim("cat_idle");
        }
        // 👀 左右翻轉
        if (Math.abs(this.direction.x) > 0.1) {
            this.node.scaleX = this.direction.x > 0 ? 5 : -5;
        }
    };
    NPCWanderCatty.prototype.pickRandomDirection = function () {
        var angle = Math.random() * Math.PI * 2;
        this.direction = cc.v3(Math.cos(angle), Math.sin(angle), 0);
    };
    NPCWanderCatty.prototype.randomAnim = function () {
        var choices = ["cat_idle", "cat_run", "cat_jump"];
        var name = choices[Math.floor(Math.random() * choices.length)];
        this.playAnim(name);
    };
    NPCWanderCatty.prototype.playAnim = function (name) {
        if (!this.anim || !this.anim.getAnimationState(name))
            return;
        this.anim.play(name);
    };
    __decorate([
        property(cc.Animation)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTlBDL05QQ1dhbmRlckNhdHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBK0RDO1FBN0RHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFzRGxDLENBQUM7SUFwREcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVMLCtCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsUUFBUTtRQUNSLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDckQ7UUFFRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsV0FBVztRQUNYLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QjtRQUVELFVBQVU7UUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUdHLDRDQUFtQixHQUFuQjtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksSUFBTSxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0c7SUFHMUI7UUFEQyxRQUFRO2lEQUNVO0lBTEYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQStEbEM7SUFBRCxxQkFBQztDQS9ERCxBQStEQyxDQS9EMkMsRUFBRSxDQUFDLFNBQVMsR0ErRHZEO2tCQS9Eb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOUENXYW5kZXJDYXR0eSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDUwO1xuXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzMgPSBjYy52MygpO1xuICAgIHByaXZhdGUgbW92ZVRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYW5pbVRpbWVyOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpY2tSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5wbGF5QW5pbShcImNhdF9ydW5cIik7XG4gICAgfVxuXG51cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIC8vIPCfkL4g56e75YuVXG4gICAgY29uc3QgbW92aW5nID0gdGhpcy5kaXJlY3Rpb24ubWFnKCkgPiAwLjE7XG4gICAgaWYgKG1vdmluZykge1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLmRpcmVjdGlvbi54ICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy5zcGVlZCAqIGR0O1xuICAgIH1cblxuICAgIC8vIOKPse+4jyDlrprmmYLmj5vmlrnlkJFcbiAgICB0aGlzLm1vdmVUaW1lciArPSBkdDtcbiAgICBpZiAodGhpcy5tb3ZlVGltZXIgPj0gMiArIE1hdGgucmFuZG9tKCkgKiAyKSB7XG4gICAgICAgIHRoaXMucGlja1JhbmRvbURpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLm1vdmVUaW1lciA9IDA7XG4gICAgfVxuXG4gICAgLy8g8J+OrCDoh6rli5XliIfli5XnlatcbiAgICBpZiAobW92aW5nKSB7XG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJjYXRfcnVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJjYXRfaWRsZVwiKTtcbiAgICB9XG5cbiAgICAvLyDwn5GAIOW3puWPs+e/u+i9iVxuICAgIGlmIChNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IDAuMSkge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5kaXJlY3Rpb24ueCA+IDAgPyA1IDogLTU7XG4gICAgfVxufVxuXG5cbiAgICBwaWNrUmFuZG9tRGlyZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjYy52MyhNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZG9tQW5pbSgpIHtcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IFtcImNhdF9pZGxlXCIsIFwiY2F0X3J1blwiLCBcImNhdF9qdW1wXCJdO1xuICAgICAgICBjb25zdCBuYW1lID0gY2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaG9pY2VzLmxlbmd0aCldO1xuICAgICAgICB0aGlzLnBsYXlBbmltKG5hbWUpO1xuICAgIH1cblxuICAgIHBsYXlBbmltKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuYW5pbSB8fCAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpKSByZXR1cm47XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xuICAgIH1cbn1cbiJdfQ==