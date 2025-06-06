
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/CameraAutoMove2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24435wrjCBF/6fJ8zyY5wjP', 'CameraAutoMove2D');
// Script/script/CameraAutoMove2D.ts

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
var CameraAutoMove2D = /** @class */ (function (_super) {
    __extends(CameraAutoMove2D, _super);
    function CameraAutoMove2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameraNode = null;
        _this.moveDuration = 5.0; // 攝影機移動所需秒數
        _this.rotateDuration = 3.0; // 攝影機旋轉所需秒數
        return _this;
    }
    CameraAutoMove2D.prototype.start = function () {
        this.moveCamera();
    };
    CameraAutoMove2D.prototype.moveCamera = function () {
        // 取得目前攝影機位置
        var startPos = this.cameraNode.position;
        var targetPos = new cc.Vec3(startPos.x, startPos.y, 3000);
        cc.tween(this.cameraNode)
            .to(this.moveDuration, { position: targetPos })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], CameraAutoMove2D.prototype, "cameraNode", void 0);
    __decorate([
        property
    ], CameraAutoMove2D.prototype, "moveDuration", void 0);
    __decorate([
        property
    ], CameraAutoMove2D.prototype, "rotateDuration", void 0);
    CameraAutoMove2D = __decorate([
        ccclass
    ], CameraAutoMove2D);
    return CameraAutoMove2D;
}(cc.Component));
exports.default = CameraAutoMove2D;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXENhbWVyYUF1dG9Nb3ZlMkQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF1QkM7UUFyQkcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZO1FBR3hDLG9CQUFjLEdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7SUFlOUMsQ0FBQztJQWJHLGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxZQUFZO1FBQ1osSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDOUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNTO0lBRzNCO1FBREMsUUFBUTswREFDa0I7SUFHM0I7UUFEQyxRQUFROzREQUNvQjtJQVJaLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBdUJwQztJQUFELHVCQUFDO0NBdkJELEFBdUJDLENBdkI2QyxFQUFFLENBQUMsU0FBUyxHQXVCekQ7a0JBdkJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQXV0b01vdmUyRCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbW92ZUR1cmF0aW9uOiBudW1iZXIgPSA1LjA7IC8vIOaUneW9seapn+enu+WLleaJgOmcgOenkuaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcm90YXRlRHVyYXRpb246IG51bWJlciA9IDMuMDsgLy8g5pSd5b2x5qmf5peL6L2J5omA6ZyA56eS5pW4XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ2FtZXJhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUNhbWVyYSgpIHtcclxuICAgICAgICAvLyDlj5blvpfnm67liY3mlJ3lvbHmqZ/kvY3nva5cclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmNhbWVyYU5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IG5ldyBjYy5WZWMzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnksIDMwMDApO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYU5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLm1vdmVEdXJhdGlvbiwgeyBwb3NpdGlvbjogdGFyZ2V0UG9zIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19