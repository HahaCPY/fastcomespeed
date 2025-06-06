"use strict";
cc._RF.push(module, '2f5aaaZVYxLzIWb7asCBIU3', 'cameraCtrl');
// Script/script/select/cameraCtrl.ts

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
var cameraCtrl = /** @class */ (function (_super) {
    __extends(cameraCtrl, _super);
    function cameraCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.offset = new cc.Vec3(0, 4, 5);
        _this.followSpeed = 5;
        return _this;
    }
    cameraCtrl.prototype.start = function () {
        if (!this.target) {
            console.warn("There's no target node in cameraCtrl!");
            return;
        }
        // turn the local position of the target node into world position
        // Vec3.ZERO = target's center
        var targetWorldPos = this.target.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // set the initial position of the camera
        // initialCameraWorldPos = targetWorldPos + offset
        var initialCameraWorldPos = new cc.Vec3();
        cc.Vec3.add(initialCameraWorldPos, targetWorldPos, this.offset);
        // convert the initial camera world position to local position
        this.node.position = this.node.parent ? this.node.parent.convertToNodeSpaceAR(initialCameraWorldPos) : initialCameraWorldPos;
        this.node.lookAt(targetWorldPos, cc.Vec3.UP);
    };
    cameraCtrl.prototype.update = function (dt) {
        if (!this.target)
            return;
        // get the world position of the target node every dt
        var targetWorldPos = this.target.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // calculate the desired world position of the camera
        var desiredWorldPosition = new cc.Vec3();
        cc.Vec3.add(desiredWorldPosition, targetWorldPos, this.offset);
        // get the current world position of the camera
        var currentCameraWorldPosition = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // smooth the camera's movement towards the desired position by using lerp()
        var smoothedWorldPosition = new cc.Vec3();
        cc.Vec3.lerp(smoothedWorldPosition, currentCameraWorldPosition, desiredWorldPosition, this.followSpeed * dt);
        // convert the smoothed world position to local position and set it to the camera node
        this.node.position = this.node.parent ? this.node.parent.convertToNodeSpaceAR(smoothedWorldPosition) : smoothedWorldPosition;
        this.node.lookAt(targetWorldPos, cc.Vec3.UP);
    };
    __decorate([
        property(cc.Node)
    ], cameraCtrl.prototype, "target", void 0);
    __decorate([
        property(cc.Vec3)
    ], cameraCtrl.prototype, "offset", void 0);
    __decorate([
        property(cc.Integer)
    ], cameraCtrl.prototype, "followSpeed", void 0);
    cameraCtrl = __decorate([
        ccclass
    ], cameraCtrl);
    return cameraCtrl;
}(cc.Component));
exports.default = cameraCtrl;

cc._RF.pop();