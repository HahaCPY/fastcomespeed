
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXHNlbGVjdFxcUG9zaXRpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ3JCO0lBQUE7SUFjQSxDQUFDO0lBWFUsNEJBQVksR0FBbkIsVUFBb0IsR0FBWTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZ0NBQWdCLEdBQXZCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQVpjLHdCQUFRLEdBQVksSUFBSSxDQUFDO0lBYTVDLHNCQUFDO0NBZEQsQUFjQyxJQUFBO2tCQWRvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9zaXRpb25NYW5hZ2VyLnRzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzYXZlZFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIHNhdmVQb3NpdGlvbihwb3M6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLnNhdmVkUG9zID0gcG9zLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNhdmVkUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZWRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZWRQb3MgPSBudWxsO1xyXG4gICAgfVxyXG59Il19