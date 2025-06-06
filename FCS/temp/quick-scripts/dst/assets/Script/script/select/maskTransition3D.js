
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/maskTransition3D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '963b2io3I9NfaOldJtdCuQy', 'maskTransition3D');
// Script/script/select/maskTransition3D.ts

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
var MaskTransition = /** @class */ (function (_super) {
    __extends(MaskTransition, _super);
    function MaskTransition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startZ = 0;
        _this.endZ = -2.419;
        return _this;
    }
    MaskTransition.prototype.onLoad = function () {
        // since it's MainCamera's child node, use LocalPosition
        this.node.setPosition(0, 0, this.startZ);
    };
    MaskTransition.prototype.playTransition = function (onComplete) {
        cc.tween(this.node)
            .to(0.8, { position: cc.v3(0, 0, this.endZ) })
            .call(function () {
            if (onComplete)
                onComplete();
        })
            .start();
    };
    __decorate([
        property
    ], MaskTransition.prototype, "startZ", void 0);
    __decorate([
        property
    ], MaskTransition.prototype, "endZ", void 0);
    MaskTransition = __decorate([
        ccclass
    ], MaskTransition);
    return MaskTransition;
}(cc.Component));
exports.default = MaskTransition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcbWFza1RyYW5zaXRpb24zRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9CQztRQWxCRyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLFVBQUksR0FBVyxDQUFDLEtBQUssQ0FBQzs7SUFlMUIsQ0FBQztJQWJHLCtCQUFNLEdBQU47UUFDSSx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxVQUFxQjtRQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM3QyxJQUFJLENBQUM7WUFDRixJQUFJLFVBQVU7Z0JBQUUsVUFBVSxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWpCRDtRQURDLFFBQVE7a0RBQ1U7SUFHbkI7UUFEQyxRQUFRO2dEQUNhO0lBTEwsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9CbEM7SUFBRCxxQkFBQztDQXBCRCxBQW9CQyxDQXBCMkMsRUFBRSxDQUFDLFNBQVMsR0FvQnZEO2tCQXBCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrVHJhbnNpdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHN0YXJ0WjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVuZFo6IG51bWJlciA9IC0yLjQxOTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gc2luY2UgaXQncyBNYWluQ2FtZXJhJ3MgY2hpbGQgbm9kZSwgdXNlIExvY2FsUG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgMCwgdGhpcy5zdGFydFopO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUcmFuc2l0aW9uKG9uQ29tcGxldGU/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuOCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgdGhpcy5lbmRaKSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=