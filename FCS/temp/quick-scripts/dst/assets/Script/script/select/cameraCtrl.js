
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/cameraCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcY2FtZXJhQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXNEQztRQW5ERyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUd2QyxpQkFBVyxHQUFXLENBQUMsQ0FBQzs7SUE2QzVCLENBQUM7SUEzQ0csMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDVjtRQUVELGlFQUFpRTtRQUNqRSw4QkFBOEI7UUFDOUIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZFLHlDQUF5QztRQUN6QyxrREFBa0Q7UUFDbEQsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUM7UUFFN0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUV6QixxREFBcUQ7UUFDckQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZFLHFEQUFxRDtRQUNyRCxJQUFNLG9CQUFvQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0QsK0NBQStDO1FBQy9DLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpGLDRFQUE0RTtRQUM1RSxJQUFNLHFCQUFxQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFN0csc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUU3SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDcUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzttREFDRztJQVRQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzRDlCO0lBQUQsaUJBQUM7Q0F0REQsQUFzREMsQ0F0RHVDLEVBQUUsQ0FBQyxTQUFTLEdBc0RuRDtrQkF0RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FtZXJhQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMzKVxyXG4gICAgb2Zmc2V0OiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgNCwgNSk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBmb2xsb3dTcGVlZDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlJ3Mgbm8gdGFyZ2V0IG5vZGUgaW4gY2FtZXJhQ3RybCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHR1cm4gdGhlIGxvY2FsIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgbm9kZSBpbnRvIHdvcmxkIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gVmVjMy5aRVJPID0gdGFyZ2V0J3MgY2VudGVyXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcclxuICAgICAgICAvLyBpbml0aWFsQ2FtZXJhV29ybGRQb3MgPSB0YXJnZXRXb3JsZFBvcyArIG9mZnNldFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmFXb3JsZFBvcyA9IG5ldyBjYy5WZWMzKCk7XHJcbiAgICAgICAgY2MuVmVjMy5hZGQoaW5pdGlhbENhbWVyYVdvcmxkUG9zLCB0YXJnZXRXb3JsZFBvcywgdGhpcy5vZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBpbml0aWFsIGNhbWVyYSB3b3JsZCBwb3NpdGlvbiB0byBsb2NhbCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQgPyB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGluaXRpYWxDYW1lcmFXb3JsZFBvcykgOiBpbml0aWFsQ2FtZXJhV29ybGRQb3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmxvb2tBdCh0YXJnZXRXb3JsZFBvcywgY2MuVmVjMy5VUCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgd29ybGQgcG9zaXRpb24gb2YgdGhlIHRhcmdldCBub2RlIGV2ZXJ5IGR0XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBkZXNpcmVkIHdvcmxkIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcclxuICAgICAgICBjb25zdCBkZXNpcmVkV29ybGRQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKCk7XHJcbiAgICAgICAgY2MuVmVjMy5hZGQoZGVzaXJlZFdvcmxkUG9zaXRpb24sIHRhcmdldFdvcmxkUG9zLCB0aGlzLm9mZnNldCk7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhXHJcbiAgICAgICAgY29uc3QgY3VycmVudENhbWVyYVdvcmxkUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XHJcblxyXG4gICAgICAgIC8vIHNtb290aCB0aGUgY2FtZXJhJ3MgbW92ZW1lbnQgdG93YXJkcyB0aGUgZGVzaXJlZCBwb3NpdGlvbiBieSB1c2luZyBsZXJwKClcclxuICAgICAgICBjb25zdCBzbW9vdGhlZFdvcmxkUG9zaXRpb24gPSBuZXcgY2MuVmVjMygpO1xyXG4gICAgICAgIGNjLlZlYzMubGVycChzbW9vdGhlZFdvcmxkUG9zaXRpb24sIGN1cnJlbnRDYW1lcmFXb3JsZFBvc2l0aW9uLCBkZXNpcmVkV29ybGRQb3NpdGlvbiwgdGhpcy5mb2xsb3dTcGVlZCAqIGR0KTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgc21vb3RoZWQgd29ybGQgcG9zaXRpb24gdG8gbG9jYWwgcG9zaXRpb24gYW5kIHNldCBpdCB0byB0aGUgY2FtZXJhIG5vZGVcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50ID8gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzbW9vdGhlZFdvcmxkUG9zaXRpb24pIDogc21vb3RoZWRXb3JsZFBvc2l0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUubG9va0F0KHRhcmdldFdvcmxkUG9zLCBjYy5WZWMzLlVQKTtcclxuICAgIH1cclxufVxyXG4iXX0=