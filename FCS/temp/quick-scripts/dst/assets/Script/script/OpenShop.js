
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/OpenShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28e99itR19BcrP2D1EDaxIE', 'OpenShop');
// Script/script/OpenShop.ts

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
var MoveDownOnLoad = /** @class */ (function (_super) {
    __extends(MoveDownOnLoad, _super);
    function MoveDownOnLoad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // add a audio clip
        _this.opendoor = null;
        _this.opendoorAudioId = -1;
        return _this;
    }
    MoveDownOnLoad.prototype.onLoad = function () {
        var _this = this;
        this.node.setPosition(0, 0);
        this.moveDown();
        // play audio when the animation starts
        this.opendoorAudioId = cc.audioEngine.play(this.opendoor, false, 1.0);
        // after 6s, stop the opendoor audio
        this.scheduleOnce(function () {
            cc.audioEngine.stop(_this.opendoorAudioId);
        }, 6); // 假設動畫持續時間為 6 秒
    };
    // play audio when the animation starts, and audio stop when the animation ends
    MoveDownOnLoad.prototype.moveDown = function () {
        cc.tween(this.node)
            .to(6, { position: cc.v3(0, 400, 0) }) // z 設 0
            .start();
    };
    __decorate([
        property(cc.AudioClip)
    ], MoveDownOnLoad.prototype, "opendoor", void 0);
    MoveDownOnLoad = __decorate([
        ccclass
    ], MoveDownOnLoad);
    return MoveDownOnLoad;
}(cc.Component));
exports.default = MoveDownOnLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXE9wZW5TaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBd0JDO1FBdkJHLG1CQUFtQjtRQUVuQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUV0QixxQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDOztJQW1CekMsQ0FBQztJQWpCRywrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtJQUMzQixDQUFDO0lBRUQsK0VBQStFO0lBQy9FLGlDQUFRLEdBQVI7UUFDQSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUTthQUM5QyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDTztJQUhiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F3QmxDO0lBQUQscUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QjJDLEVBQUUsQ0FBQyxTQUFTLEdBd0J2RDtrQkF4Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZURvd25PbkxvYWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gYWRkIGEgYXVkaW8gY2xpcFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG9wZW5kb29yOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgb3BlbmRvb3JBdWRpb0lkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIHRoaXMubW92ZURvd24oKTtcclxuICAgICAgICAvLyBwbGF5IGF1ZGlvIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHNcclxuICAgICAgICB0aGlzLm9wZW5kb29yQXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5vcGVuZG9vciwgZmFsc2UsIDEuMCk7XHJcbiAgICAgICAgLy8gYWZ0ZXIgNnMsIHN0b3AgdGhlIG9wZW5kb29yIGF1ZGlvXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMub3BlbmRvb3JBdWRpb0lkKTtcclxuICAgICAgICB9LCA2KTsgLy8g5YGH6Kit5YuV55Wr5oyB57qM5pmC6ZaT54K6IDYg56eSXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGxheSBhdWRpbyB3aGVuIHRoZSBhbmltYXRpb24gc3RhcnRzLCBhbmQgYXVkaW8gc3RvcCB3aGVuIHRoZSBhbmltYXRpb24gZW5kc1xyXG4gICAgbW92ZURvd24oKSB7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDYsIHsgcG9zaXRpb246IGNjLnYzKDAsIDQwMCwgMCkgfSkgLy8geiDoqK0gMFxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19