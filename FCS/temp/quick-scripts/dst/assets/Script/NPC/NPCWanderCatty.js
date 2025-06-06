
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOUENcXE5QQ1dhbmRlckNhdHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBK0RDO1FBN0RHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFWCxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFzRGxDLENBQUM7SUFwREcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVMLCtCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsUUFBUTtRQUNSLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDckQ7UUFFRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsV0FBVztRQUNYLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QjtRQUVELFVBQVU7UUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUdHLDRDQUFtQixHQUFuQjtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksSUFBTSxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0c7SUFHMUI7UUFEQyxRQUFRO2lEQUNVO0lBTEYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQStEbEM7SUFBRCxxQkFBQztDQS9ERCxBQStEQyxDQS9EMkMsRUFBRSxDQUFDLFNBQVMsR0ErRHZEO2tCQS9Eb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOUENXYW5kZXJDYXR0eSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMyA9IGNjLnYzKCk7XHJcbiAgICBwcml2YXRlIG1vdmVUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYW5pbVRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBpY2tSYW5kb21EaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiY2F0X3J1blwiKTtcclxuICAgIH1cclxuXHJcbnVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAvLyDwn5C+IOenu+WLlVxyXG4gICAgY29uc3QgbW92aW5nID0gdGhpcy5kaXJlY3Rpb24ubWFnKCkgPiAwLjE7XHJcbiAgICBpZiAobW92aW5nKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5kaXJlY3Rpb24ueCAqIHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLmRpcmVjdGlvbi55ICogdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKPse+4jyDlrprmmYLmj5vmlrnlkJFcclxuICAgIHRoaXMubW92ZVRpbWVyICs9IGR0O1xyXG4gICAgaWYgKHRoaXMubW92ZVRpbWVyID49IDIgKyBNYXRoLnJhbmRvbSgpICogMikge1xyXG4gICAgICAgIHRoaXMucGlja1JhbmRvbURpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubW92ZVRpbWVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDwn46sIOiHquWLleWIh+WLleeVq1xyXG4gICAgaWYgKG1vdmluZykge1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJjYXRfcnVuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiY2F0X2lkbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g8J+RgCDlt6blj7Pnv7vovYlcclxuICAgIGlmIChNYXRoLmFicyh0aGlzLmRpcmVjdGlvbi54KSA+IDAuMSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLmRpcmVjdGlvbi54ID4gMCA/IDUgOiAtNTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICBwaWNrUmFuZG9tRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MudjMoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbUFuaW0oKSB7XHJcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IFtcImNhdF9pZGxlXCIsIFwiY2F0X3J1blwiLCBcImNhdF9qdW1wXCJdO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNob2ljZXMubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYW5pbSB8fCAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKG5hbWUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICB9XHJcbn1cclxuIl19