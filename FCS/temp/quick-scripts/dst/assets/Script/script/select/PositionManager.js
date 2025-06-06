
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/select/PositionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb83cLzGUdGM5GpNKBYAtWQ', 'PositionManager');
// Script/script/select/PositionManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PositionManager.ts
var PositionManager = /** @class */ (function () {
    function PositionManager() {
    }
    PositionManager.savePosition = function (pos) {
        this.savedPos = pos.clone();
    };
    PositionManager.getSavedPosition = function () {
        return this.savedPos;
    };
    PositionManager.clear = function () {
        this.savedPos = null;
    };
    PositionManager.savedPos = null;
    return PositionManager;
}());
exports.default = PositionManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L3NlbGVjdC9Qb3NpdGlvbk1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDckI7SUFBQTtJQWNBLENBQUM7SUFYVSw0QkFBWSxHQUFuQixVQUFvQixHQUFZO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxnQ0FBZ0IsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBWmMsd0JBQVEsR0FBWSxJQUFJLENBQUM7SUFhNUMsc0JBQUM7Q0FkRCxBQWNDLElBQUE7a0JBZG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQb3NpdGlvbk1hbmFnZXIudHNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2F2ZWRQb3M6IGNjLlZlYzMgPSBudWxsO1xuXG4gICAgc3RhdGljIHNhdmVQb3NpdGlvbihwb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgdGhpcy5zYXZlZFBvcyA9IHBvcy5jbG9uZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTYXZlZFBvc2l0aW9uKCk6IGNjLlZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5zYXZlZFBvcztcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2F2ZWRQb3MgPSBudWxsO1xuICAgIH1cbn0iXX0=