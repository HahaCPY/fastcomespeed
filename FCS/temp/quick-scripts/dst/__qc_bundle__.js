
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Player/IInputControls');
require('./assets/Script/Player/KeyboardControls');
require('./assets/Script/Player/PlayerController');
require('./assets/Script/debug');
require('./assets/Script/gameManager');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/gameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f834buWLXlIMIgzpwunUQfn', 'gameManager');
// Script/gameManager.ts



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/debug.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b6fW5GdBHsbub2zcs1Nl7', 'debug');
// Script/debug.ts

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
var DebugController = /** @class */ (function (_super) {
    __extends(DebugController, _super);
    function DebugController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugController.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // 顯示碰撞形狀（綠框/藍框）+ 邊界 AABB
        cc.director.getPhysicsManager().debugDrawFlags =
            cc.PhysicsManager.DrawBits.e_shapeBit |
                cc.PhysicsManager.DrawBits.e_aabbBit;
    };
    DebugController = __decorate([
        ccclass
    ], DebugController);
    return DebugController;
}(cc.Component));
exports.default = DebugController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDs7SUFTQSxDQUFDO0lBUkcsZ0NBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRS9DLHlCQUF5QjtRQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsY0FBYztZQUM5QyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVO2dCQUNyQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQVJnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBU25DO0lBQUQsc0JBQUM7Q0FURCxBQVNDLENBVDRDLEVBQUUsQ0FBQyxTQUFTLEdBU3hEO2tCQVRvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g6aGv56S656Kw5pKe5b2i54uA77yI57ag5qGGL+iXjeahhu+8iSsg6YKK55WMIEFBQkJcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gXHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdCB8XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/IInputControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edf51f17O5PSo+huFJiPwhC', 'IInputControls');
// Script/Player/IInputControls.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXElJbnB1dENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElJbnB1dENvbnRyb2xzIHtcclxuICAgIGdldE1vdmVEaXJlY3Rpb24oKTogY2MuVmVjMjtcclxuICAgIGdldEludGVyYWN0UHJlc3NlZCgpOiBib29sZWFuOyBcclxuICAgIGdldENob3BQcmVzc2VkKCk6IGJvb2xlYW47XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/KeyboardControls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c1a40Icb9Ko6LW+Qjg7m6O', 'KeyboardControls');
// Script/Player/KeyboardControls.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardControls = void 0;
var KeyboardControls = /** @class */ (function () {
    function KeyboardControls() {
        this.moveDir = cc.v2(0, 0);
        this.isInteractPressed = false;
        this.isChopPressed = false;
        this.isChopHeld = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    KeyboardControls.prototype.getMoveDirection = function () {
        return this.moveDir;
    };
    KeyboardControls.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
            case cc.macro.KEY.up:
                this.moveDir.y = 1;
                break;
            case cc.macro.KEY.s:
            case cc.macro.KEY.down:
                this.moveDir.y = -1;
                break;
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                this.moveDir.x = -1;
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this.moveDir.x = 1;
                break;
            case cc.macro.KEY.e:
                this.isInteractPressed = true;
                break;
            case cc.macro.KEY.space:
                this.isChopHeld = true;
                break;
        }
    };
    KeyboardControls.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
            case cc.macro.KEY.up:
            case cc.macro.KEY.s:
            case cc.macro.KEY.down:
                this.moveDir.y = 0;
                break;
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this.moveDir.x = 0;
                break;
            case cc.macro.KEY.e:
                this.isInteractPressed = false;
                break;
            case cc.macro.KEY.space:
                this.isChopHeld = false;
                break;
        }
    };
    KeyboardControls.prototype.getInteractPressed = function () {
        return this.isInteractPressed;
    };
    KeyboardControls.prototype.getChopPressed = function () {
        return this.isChopHeld;
    };
    return KeyboardControls;
}());
exports.KeyboardControls = KeyboardControls;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXEtleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFNSTtRQUxRLFlBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUdoQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFrQixLQUE2QjtRQUMzQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU8sa0NBQU8sR0FBZixVQUFnQixLQUE2QjtRQUN6QyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLDZDQUFrQixHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFDTSx5Q0FBYyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQXhFQSxBQXdFQyxJQUFBO0FBeEVZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZENvbnRyb2xzIGltcGxlbWVudHMgSUlucHV0Q29udHJvbHMge1xyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcbiAgICBwcml2YXRlIGlzSW50ZXJhY3RQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzQ2hvcFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNDaG9wSGVsZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW92ZURpcmVjdGlvbigpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlRGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnkgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnggPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9wSGVsZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW50ZXJhY3RQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hvcEhlbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW50ZXJhY3RQcmVzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW50ZXJhY3RQcmVzc2VkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENob3BQcmVzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hvcEhlbGQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49d73Terv9CSKbbSOPEQgbT', 'PlayerController');
// Script/Player/PlayerController.ts

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
var KeyboardControls_1 = require("./KeyboardControls");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.speed = 200;
        _this.doughPrefab = null;
        _this.flatbreadPrefa = null;
        _this.chopBar = null;
        _this.input = null;
        _this.currentAnim = "";
        _this.lastDir = cc.v2(0, -1); // 預設向下（前）
        _this.rb = null;
        // 麵團
        _this.canPickDough = false;
        _this.canDropDough = false;
        _this.carriedDough = null;
        _this.currentDropTarget = null;
        _this.currentDropTag = null;
        _this.isChopping = false;
        _this.chopProgress = 0;
        _this.chopFill = null;
        return _this;
    }
    PlayerController.prototype.start = function () {
        if (!this.anim) {
            this.anim = this.getComponent(cc.Animation);
        }
        this.rb = this.getComponent(cc.RigidBody);
        if (!this.rb) {
            cc.error("❌ 找不到 RigidBody2D 組件！");
            return;
        }
        this.playAnim("girl_idle_back");
        this.input = new KeyboardControls_1.KeyboardControls();
        this.chopFill = this.chopBar.getChildByName("Fillbar");
        if (!this.chopFill) {
            cc.error("❌ 找不到 Fillbar！");
        }
        this.chopBar.active = false; // 預設不顯示
    };
    PlayerController.prototype.update = function (dt) {
        var dir = this.input.getMoveDirection();
        if (!dir.equals(cc.Vec2.ZERO)) {
            // 使用物理引擎的 linearVelocity 控制移動
            this.rb.linearVelocity = dir.clone().normalize().mul(this.speed);
            this.lastDir = dir.clone();
            // 動畫切換（與方向判斷無變）
            if (Math.abs(dir.y) > Math.abs(dir.x)) {
                if (dir.y > 0) {
                    this.playAnim("girl_walk_back");
                }
                else {
                    this.playAnim("girl_idle_walk");
                }
                this.node.scaleX = 1;
            }
            else {
                if (dir.x > 0) {
                    this.playAnim("girl_walk_right");
                    this.node.scaleX = 1;
                }
                else {
                    this.playAnim("girl_walk_left");
                    this.node.scaleX = 1;
                }
            }
        }
        else {
            // 停止移動（速度歸零）
            this.rb.linearVelocity = cc.v2(0, 0);
            // 播放靜止動畫
            if (Math.abs(this.lastDir.y) > Math.abs(this.lastDir.x)) {
                this.playAnim(this.lastDir.y > 0 ? "girl_idle_back" : "girl_idle");
            }
            else {
                this.playAnim(this.lastDir.x > 0 ? "girl_idle_right" : "girl_idle_left");
            }
            this.node.scaleX = 1;
        }
        if (this.input.getInteractPressed()) {
            this.tryInteract();
        }
        if (this.input.getChopPressed() && this.canDropDough && this.carriedDough == null && !this.isChopping) {
            this.startChopping();
        }
        if (this.isChopping) {
            if (this.input.getChopPressed()) {
                this.chopProgress += dt;
                var progressRatio = Math.min(this.chopProgress / 2, 1);
                this.chopFill.scaleX = progressRatio;
                if (this.chopProgress >= 2) {
                    this.finishChopping();
                }
            }
            else {
                this.cancelChopping(); // 玩家放開空白鍵，中斷切麵
            }
        }
    };
    PlayerController.prototype.cancelChopping = function () {
        this.isChopping = false;
        this.chopBar.active = false;
        this.chopProgress = 0;
        this.chopFill.scaleX = 0;
        console.log("🛑 玩家放開空白鍵，中斷切麵！");
    };
    PlayerController.prototype.startChopping = function () {
        if (!this.currentDropTarget) {
            cc.warn("⚠️ 沒有對應的砧板！");
            return;
        }
        // ✅ 只檢查「目前站在的砧板」上是否有麵團（假設名稱含 "Dough"）
        var hasDough = this.currentDropTarget.children.some(function (child) { return child.name.includes("Dough"); });
        if (!hasDough) {
            cc.warn("⚠️ 這個砧板上沒有麵團，不能切！");
            return;
        }
        this.isChopping = true;
        this.chopProgress = 0;
        this.chopBar.parent = this.node;
        this.chopBar.setPosition(cc.v2(0, 80)); // 顯示在角色頭上
        this.chopBar.active = true;
        this.chopFill.scaleX = 0;
        console.log("🔪 在正確砧板上開始切麵團！");
    };
    PlayerController.prototype.finishChopping = function () {
        this.isChopping = false;
        this.chopBar.active = false;
        if (!this.currentDropTarget) {
            cc.warn("⚠️ currentDropTarget 是 null，無法切麵團！");
            return;
        }
        for (var _i = 0, _a = this.currentDropTarget.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name.includes("Dough")) {
                child.destroy(); // 只砍麵團，不碰麵餅
            }
        }
        var flatbread = cc.instantiate(this.flatbreadPrefa);
        this.currentDropTarget.addChild(flatbread);
        if (this.currentDropTag === 10) {
            flatbread.setPosition(cc.v3(-245, -290, 50));
        }
        else if (this.currentDropTag === 8) {
            flatbread.setPosition(cc.v3(-505, -290, 50));
        }
        else {
            flatbread.setPosition(cc.v3(0, 0)); // 預設中心
            cc.warn("❓ 未知砧板 Tag，麵餅放在中心");
        }
    };
    PlayerController.prototype.tryInteract = function () {
        if (this.canPickDough && !this.carriedDough) {
            var dough = cc.instantiate(this.doughPrefab);
            this.node.addChild(dough);
            dough.name = "Dough";
            dough.setPosition(cc.v2(0, 50));
            this.carriedDough = dough;
            console.log("🎒 拿起麵團");
        }
        else if (this.canDropDough && this.carriedDough && this.currentDropTag !== null) {
            this.carriedDough.parent = this.currentDropTarget;
            if (this.currentDropTag === 10) {
                this.carriedDough.setPosition(cc.v3(-245, -290, 50));
            }
            else if (this.currentDropTag === 8) {
                this.carriedDough.setPosition(cc.v3(-505, -290, 50));
            }
            else {
                console.warn("❓ 未知砧板 tag，無法放置");
            }
            this.carriedDough = null;
            console.log("✅ 放下麵團成功！");
        }
    };
    PlayerController.prototype.playAnim = function (name) {
        if (this.currentAnim === name)
            return;
        this.currentAnim = name;
        this.anim.play(name);
    };
    PlayerController.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = true;
            console.log("🍞 可以撿起麵團");
        }
        else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = true;
            this.currentDropTag = otherCollider.tag; // 記住目前碰到哪個 tag
            this.currentDropTarget = otherCollider.node;
            console.log("🥣 接觸到砧板 Tag =", otherCollider.tag);
        }
    };
    PlayerController.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = false;
        }
        else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = false;
            //this.currentDropTag = null;  // 👈 清除記憶
        }
    };
    __decorate([
        property(cc.Animation)
    ], PlayerController.prototype, "anim", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "speed", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "doughPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "flatbreadPrefa", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "chopBar", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBcVBDO1FBblBHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUdoQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUM3QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDM0MsUUFBRSxHQUFpQixJQUFJLENBQUM7UUFFaEMsS0FBSztRQUNHLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxvQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDOztJQXVOckMsQ0FBQztJQXBORyxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NB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QzFCLHlDQUF5QztTQUM1QztJQUNMLENBQUM7SUE5T0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDRztJQUcxQjtRQURDLFFBQVE7bURBQ1c7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ007SUFkUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXFQcEM7SUFBRCx1QkFBQztDQXJQRCxBQXFQQyxDQXJQNkMsRUFBRSxDQUFDLFNBQVMsR0FxUHpEO2tCQXJQb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcclxuaW1wb3J0IHsgSUlucHV0Q29udHJvbHMgfSBmcm9tIFwiLi9JSW5wdXRDb250cm9sc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZG91Z2hQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGZsYXRicmVhZFByZWZhOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hvcEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgaW5wdXQ6IElJbnB1dENvbnRyb2xzID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGxhc3REaXI6IGNjLlZlYzIgPSBjYy52MigwLCAtMSk7IC8vIOmgkOioreWQkeS4i++8iOWJje+8iVxyXG4gICAgcHJpdmF0ZSByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICAvLyDpurXlnJhcclxuICAgIHByaXZhdGUgY2FuUGlja0RvdWdoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhbkRyb3BEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjYXJyaWVkRG91Z2g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RHJvcFRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFnOiBudW1iZXIgPSBudWxsOyBcclxuICAgIHByaXZhdGUgaXNDaG9wcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaG9wUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5yYikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgUmlnaWRCb2R5MkQg57WE5Lu277yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF9pZGxlX2JhY2tcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwgPSB0aGlzLmNob3BCYXIuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5jaG9wRmlsbCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgRmlsbGJhcu+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlOyAvLyDpoJDoqK3kuI3poa/npLpcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoIWRpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICAvLyDkvb/nlKjniannkIblvJXmk47nmoQgbGluZWFyVmVsb2NpdHkg5o6n5Yi256e75YuVXHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF93YWxrX2JhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfd2Fsa1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WLle+8iOmAn+W6puatuOmbtu+8iVxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmkq3mlL7pnZzmraLli5XnlatcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRJbnRlcmFjdFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmIHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoID09IG51bGwgJiYgIXRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q2hvcHBpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDaG9wcGluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgKz0gZHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUmF0aW8gPSBNYXRoLm1pbih0aGlzLmNob3BQcm9ncmVzcyAvIDIsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IHByb2dyZXNzUmF0aW87XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaG9wUHJvZ3Jlc3MgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDaG9wcGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxDaG9wcGluZygpOyAgLy8g546p5a625pS+6ZaL56m655m96Y2177yM5Lit5pa35YiH6bq1XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbENob3BwaW5nKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaG9wcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5jaG9wRmlsbC5zY2FsZVggPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurXvvIFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDaG9wcGluZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDmspLmnInlsI3mh4nnmoTnoKfmnb/vvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOKchSDlj6rmqqLmn6XjgIznm67liY3nq5nlnKjnmoTnoKfmnb/jgI3kuIrmmK/lkKbmnInpurXlnJjvvIjlgYfoqK3lkI3nqLHlkKsgXCJEb3VnaFwi77yJXHJcbiAgICAgICAgY29uc3QgaGFzRG91Z2ggPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIkRvdWdoXCIpKTtcclxuICAgICAgICBpZiAoIWhhc0RvdWdoKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g6YCZ5YCL56Cn5p2/5LiK5rKS5pyJ6bq15ZyY77yM5LiN6IO95YiH77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuc2V0UG9zaXRpb24oY2MudjIoMCwgODApKTsgIC8vIOmhr+ekuuWcqOinkuiJsumgreS4ilxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SqIOWcqOato+eiuuegp+adv+S4iumWi+Wni+WIh+m6teWcmO+8gVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBmaW5pc2hDaG9wcGluZygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hvcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIGN1cnJlbnREcm9wVGFyZ2V0IOaYryBudWxs77yM54Sh5rOV5YiH6bq15ZyY77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJEb3VnaFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpOyAgLy8g5Y+q56CN6bq15ZyY77yM5LiN56Kw6bq16aSFXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBmbGF0YnJlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZsYXRicmVhZFByZWZhKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmFkZENoaWxkKGZsYXRicmVhZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREcm9wVGFnID09PSAxMCkge1xyXG4gICAgICAgICAgICBmbGF0YnJlYWQuc2V0UG9zaXRpb24oY2MudjMoLTI0NSwgLTI5MCwgNTApKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudERyb3BUYWcgPT09IDgpIHtcclxuICAgICAgICAgICAgZmxhdGJyZWFkLnNldFBvc2l0aW9uKGNjLnYzKC01MDUsIC0yOTAsIDUwKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmxhdGJyZWFkLnNldFBvc2l0aW9uKGNjLnYzKDAsIDApKTsgLy8g6aCQ6Kit5Lit5b+DXHJcbiAgICAgICAgICAgIGNjLndhcm4oXCLinZMg5pyq55+l56Cn5p2/IFRhZ++8jOm6temkheaUvuWcqOS4reW/g1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHRyeUludGVyYWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tEb3VnaCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgZG91Z2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRvdWdoUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcclxuICAgICAgICAgICAgZG91Z2gubmFtZSA9IFwiRG91Z2hcIjtcclxuICAgICAgICAgICAgZG91Z2guc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaLv+i1t+m6teWcmFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYWcgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2gucGFyZW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcm9wVGFnID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guc2V0UG9zaXRpb24oY2MudjMoLTI0NSwgLTI5MCwgNTApKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnREcm9wVGFnID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5zZXRQb3NpdGlvbihjYy52MygtNTA1LCAtMjkwLCA1MCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4p2TIOacquefpeegp+advyB0YWfvvIznhKHms5XmlL7nva5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUg5pS+5LiL6bq15ZyY5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PT0gbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NniDlj6/ku6Xmkr/otbfpurXlnJhcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ecm9wRG91Z2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gb3RoZXJDb2xsaWRlci50YWc7ICAvLyDoqJjkvY/nm67liY3norDliLDlk6rlgIsgdGFnXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBvdGhlckNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+loyDmjqXop7jliLDnoKfmnb8gVGFnID1cIiwgb3RoZXJDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5QaWNrRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA4IHx8IG90aGVyQ29sbGlkZXIudGFnID09PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudERyb3BUYWcgPSBudWxsOyAgLy8g8J+RiCDmuIXpmaToqJjmhrZcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
