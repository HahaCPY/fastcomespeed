
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC9jYW1lcmFDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBc0RDO1FBbkRHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBR3ZDLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQTZDNUIsQ0FBQztJQTNDRywwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNWO1FBRUQsaUVBQWlFO1FBQ2pFLDhCQUE4QjtRQUM5QixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkUseUNBQXlDO1FBQ3pDLGtEQUFrRDtRQUNsRCxJQUFNLHFCQUFxQixHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEUsOERBQThEO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUU3SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRXpCLHFEQUFxRDtRQUNyRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkUscURBQXFEO1FBQ3JELElBQU0sb0JBQW9CLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0MsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRCwrQ0FBK0M7UUFDL0MsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakYsNEVBQTRFO1FBQzVFLElBQU0scUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUU3RyxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBRTdILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNxQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO21EQUNHO0lBVFAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXNEOUI7SUFBRCxpQkFBQztDQXRERCxBQXNEQyxDQXREdUMsRUFBRSxDQUFDLFNBQVMsR0FzRG5EO2tCQXREb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjYW1lcmFDdHJsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVmVjMylcbiAgICBvZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwLCA0LCA1KTtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIGZvbGxvd1NwZWVkOiBudW1iZXIgPSA1O1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlJ3Mgbm8gdGFyZ2V0IG5vZGUgaW4gY2FtZXJhQ3RybCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0dXJuIHRoZSBsb2NhbCBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IG5vZGUgaW50byB3b3JsZCBwb3NpdGlvblxuICAgICAgICAvLyBWZWMzLlpFUk8gPSB0YXJnZXQncyBjZW50ZXJcbiAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3MgPSB0aGlzLnRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMy5aRVJPKTtcblxuICAgICAgICAvLyBzZXQgdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIGNhbWVyYVxuICAgICAgICAvLyBpbml0aWFsQ2FtZXJhV29ybGRQb3MgPSB0YXJnZXRXb3JsZFBvcyArIG9mZnNldFxuICAgICAgICBjb25zdCBpbml0aWFsQ2FtZXJhV29ybGRQb3MgPSBuZXcgY2MuVmVjMygpO1xuICAgICAgICBjYy5WZWMzLmFkZChpbml0aWFsQ2FtZXJhV29ybGRQb3MsIHRhcmdldFdvcmxkUG9zLCB0aGlzLm9mZnNldCk7XG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgaW5pdGlhbCBjYW1lcmEgd29ybGQgcG9zaXRpb24gdG8gbG9jYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBhcmVudCA/IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaW5pdGlhbENhbWVyYVdvcmxkUG9zKSA6IGluaXRpYWxDYW1lcmFXb3JsZFBvcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5sb29rQXQodGFyZ2V0V29ybGRQb3MsIGNjLlZlYzMuVVApO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpIHJldHVybjtcblxuICAgICAgICAvLyBnZXQgdGhlIHdvcmxkIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgbm9kZSBldmVyeSBkdFxuICAgICAgICBjb25zdCB0YXJnZXRXb3JsZFBvcyA9IHRoaXMudGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMzLlpFUk8pO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGVzaXJlZCB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhXG4gICAgICAgIGNvbnN0IGRlc2lyZWRXb3JsZFBvc2l0aW9uID0gbmV3IGNjLlZlYzMoKTtcbiAgICAgICAgY2MuVmVjMy5hZGQoZGVzaXJlZFdvcmxkUG9zaXRpb24sIHRhcmdldFdvcmxkUG9zLCB0aGlzLm9mZnNldCk7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHdvcmxkIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmFcbiAgICAgICAgY29uc3QgY3VycmVudENhbWVyYVdvcmxkUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XG5cbiAgICAgICAgLy8gc21vb3RoIHRoZSBjYW1lcmEncyBtb3ZlbWVudCB0b3dhcmRzIHRoZSBkZXNpcmVkIHBvc2l0aW9uIGJ5IHVzaW5nIGxlcnAoKVxuICAgICAgICBjb25zdCBzbW9vdGhlZFdvcmxkUG9zaXRpb24gPSBuZXcgY2MuVmVjMygpO1xuICAgICAgICBjYy5WZWMzLmxlcnAoc21vb3RoZWRXb3JsZFBvc2l0aW9uLCBjdXJyZW50Q2FtZXJhV29ybGRQb3NpdGlvbiwgZGVzaXJlZFdvcmxkUG9zaXRpb24sIHRoaXMuZm9sbG93U3BlZWQgKiBkdCk7XG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgc21vb3RoZWQgd29ybGQgcG9zaXRpb24gdG8gbG9jYWwgcG9zaXRpb24gYW5kIHNldCBpdCB0byB0aGUgY2FtZXJhIG5vZGVcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBhcmVudCA/IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoc21vb3RoZWRXb3JsZFBvc2l0aW9uKSA6IHNtb290aGVkV29ybGRQb3NpdGlvbjtcblxuICAgICAgICB0aGlzLm5vZGUubG9va0F0KHRhcmdldFdvcmxkUG9zLCBjYy5WZWMzLlVQKTtcbiAgICB9XG59XG4iXX0=