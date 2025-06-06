
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC9tYXNrVHJhbnNpdGlvbjNELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBb0JDO1FBbEJHLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsVUFBSSxHQUFXLENBQUMsS0FBSyxDQUFDOztJQWUxQixDQUFDO0lBYkcsK0JBQU0sR0FBTjtRQUNJLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFVBQXFCO1FBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQzdDLElBQUksQ0FBQztZQUNGLElBQUksVUFBVTtnQkFBRSxVQUFVLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBakJEO1FBREMsUUFBUTtrREFDVTtJQUduQjtRQURDLFFBQVE7Z0RBQ2E7SUFMTCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBb0JsQztJQUFELHFCQUFDO0NBcEJELEFBb0JDLENBcEIyQyxFQUFFLENBQUMsU0FBUyxHQW9CdkQ7a0JBcEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tUcmFuc2l0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHlcbiAgICBzdGFydFo6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBlbmRaOiBudW1iZXIgPSAtMi40MTk7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIHNpbmNlIGl0J3MgTWFpbkNhbWVyYSdzIGNoaWxkIG5vZGUsIHVzZSBMb2NhbFBvc2l0aW9uXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCAwLCB0aGlzLnN0YXJ0Wik7XG4gICAgfVxuXG4gICAgcGxheVRyYW5zaXRpb24ob25Db21wbGV0ZT86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjgsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsIHRoaXMuZW5kWikgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==