
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
require('./assets/Script/scene/uiManager');

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
                    var __filename = 'preview-scripts/assets/Script/scene/uiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f834buWLXlIMIgzpwunUQfn', 'uiManager');
// Script/scene/uiManager.ts

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
var MenuBar = /** @class */ (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slots = [];
        _this.dishPrefabs = [];
        _this.timerLabel = null; // 拖拉倒數時間的 Label
        _this.totalTime = 60; // 總倒數秒數
        _this.dishesPerGame = 3; // 格子數
        _this.dishInterval = 5; // 每隔幾秒產生一個
        _this.currentDishIdx = 0;
        _this.currentTime = 0;
        return _this;
    }
    MenuBar.prototype.start = function () {
        this.resetMenu();
        this.startGame();
    };
    MenuBar.prototype.resetMenu = function () {
        for (var _i = 0, _a = this.slots; _i < _a.length; _i++) {
            var slot = _a[_i];
            slot.removeAllChildren();
        }
        this.currentDishIdx = 0;
        this.unschedule(this.generateNextDish);
        this.unschedule(this.countdownStep);
    };
    MenuBar.prototype.startGame = function () {
        this.currentTime = this.totalTime;
        this.updateLabel();
        this.schedule(this.countdownStep, 1);
        this.generateNextDish();
        this.schedule(this.generateNextDish, this.dishInterval);
    };
    MenuBar.prototype.countdownStep = function () {
        if (this.currentTime > 0) {
            this.currentTime--;
            this.updateLabel();
            if (this.currentTime === 0) {
                this.timeUp();
            }
        }
    };
    MenuBar.prototype.updateLabel = function () {
        this.timerLabel.string = this.formatTime(this.currentTime);
    };
    MenuBar.prototype.formatTime = function (sec) {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        return m + ":" + (s < 10 ? '0' : '') + s;
    };
    MenuBar.prototype.generateNextDish = function () {
        // 用 slots.length 當最大格數
        if (this.currentDishIdx >= this.slots.length) {
            this.unschedule(this.generateNextDish);
            return;
        }
        var prefabIdx = Math.floor(Math.random() * this.dishPrefabs.length);
        var dish = cc.instantiate(this.dishPrefabs[prefabIdx]);
        this.slots[this.currentDishIdx].addChild(dish);
        this.currentDishIdx++;
    };
    MenuBar.prototype.timeUp = function () {
        // 停止所有 schedule
        this.unschedule(this.countdownStep);
        this.unschedule(this.generateNextDish);
        cc.log("Time's up!"); // 你可以加更多動作
    };
    // 若需重啟
    MenuBar.prototype.resetAndStart = function () {
        this.resetMenu();
        this.startGame();
    };
    __decorate([
        property({ type: [cc.Node] })
    ], MenuBar.prototype, "slots", void 0);
    __decorate([
        property({ type: [cc.Prefab] })
    ], MenuBar.prototype, "dishPrefabs", void 0);
    __decorate([
        property({ type: cc.Label })
    ], MenuBar.prototype, "timerLabel", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "totalTime", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishesPerGame", void 0);
    __decorate([
        property
    ], MenuBar.prototype, "dishInterval", void 0);
    MenuBar = __decorate([
        ccclass
    ], MenuBar);
    return MenuBar;
}(cc.Component));
exports.default = MenuBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMkZDO1FBekZHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGVBQVMsR0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBR2hDLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUdqQyxrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFFLFdBQVc7UUFFOUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBdUVwQyxDQUFDO0lBckVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksS0FBaUIsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO1lBQXhCLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFB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UUFEQyxRQUFRO2tEQUNpQjtJQUcxQjtRQURDLFFBQVE7aURBQ2dCO0lBakJSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0EyRjNCO0lBQUQsY0FBQztDQTNGRCxBQTJGQyxDQTNGb0MsRUFBRSxDQUFDLFNBQVMsR0EyRmhEO2tCQTNGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Ob2RlXSB9KVxyXG4gICAgc2xvdHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5QcmVmYWJdIH0pXHJcbiAgICBkaXNoUHJlZmFiczogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCB9KVxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDmi5bmi4nlgJLmlbjmmYLplpPnmoQgTGFiZWxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvdGFsVGltZTogbnVtYmVyID0gNjA7IC8vIOe4veWAkuaVuOenkuaVuFxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGlzaGVzUGVyR2FtZTogbnVtYmVyID0gMzsgLy8g5qC85a2Q5pW4XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkaXNoSW50ZXJ2YWw6IG51bWJlciA9IDU7ICAvLyDmr4/pmpTlub7np5LnlKLnlJ/kuIDlgItcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnREaXNoSWR4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0TWVudSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRNZW51KCkge1xyXG4gICAgICAgIGZvciAobGV0IHNsb3Qgb2YgdGhpcy5zbG90cykge1xyXG4gICAgICAgICAgICBzbG90LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudERpc2hJZHggPSAwO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50b3RhbFRpbWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRkb3duU3RlcCwgMSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHREaXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gsIHRoaXMuZGlzaEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudGRvd25TdGVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxhYmVsKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5jdXJyZW50VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0VGltZShzZWM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3Ioc2VjIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWMgJSA2MDtcclxuICAgICAgICByZXR1cm4gYCR7bX06JHtzIDwgMTAgPyAnMCcgOiAnJ30ke3N9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZU5leHREaXNoKCkge1xyXG4gICAgICAgIC8vIOeUqCBzbG90cy5sZW5ndGgg55W25pyA5aSn5qC85pW4XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpc2hJZHggPj0gdGhpcy5zbG90cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZWZhYklkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzaFByZWZhYnMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgZGlzaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlzaFByZWZhYnNbcHJlZmFiSWR4XSk7XHJcbiAgICAgICAgdGhpcy5zbG90c1t0aGlzLmN1cnJlbnREaXNoSWR4XS5hZGRDaGlsZChkaXNoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4Kys7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRpbWVVcCgpIHtcclxuICAgICAgICAvLyDlgZzmraLmiYDmnIkgc2NoZWR1bGVcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5leHREaXNoKTtcclxuICAgICAgICBjYy5sb2coXCJUaW1lJ3MgdXAhXCIpOyAvLyDkvaDlj6/ku6XliqDmm7TlpJrli5XkvZxcclxuICAgIH1cclxuXHJcbiAgICAvLyDoi6XpnIDph43llZ9cclxuICAgIHJlc2V0QW5kU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1lbnUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        _this.cheesePrefab = null;
        _this.gratedCheesePrefab = null;
        _this.ppPrefab = null;
        _this.sliceppPrefab = null;
        _this.mushroomPrefab = null;
        _this.slicemushroomPrefab = null;
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
        // 起司
        _this.canPickCheese = false;
        _this.canPickPP = false; // tag 5 拿 pp 的 flag
        _this.canPickMushroom = false;
        _this.lastInteractTime = 0;
        _this.interactCooldown = 0.2; // 0.2 秒冷卻時間
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
        /*if (this.input.getInteractPressed()) {
            this.tryInteract();
        }*/
        if (this.input.getInteractPressed()) {
            var now = Date.now() / 1000;
            if (now - this.lastInteractTime > this.interactCooldown) {
                this.tryInteract();
                this.lastInteractTime = now;
            }
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
        var hasDough = this.currentDropTarget.children.some(function (child) { return child.name.includes("Dough"); });
        var hasCheese = this.currentDropTarget.children.some(function (child) { return child.name.includes("Cheese"); });
        var hasPP = this.currentDropTarget.children.some(function (child) { return child.name === "PP"; });
        var hasMushroom = this.currentDropTarget.children.some(function (child) { return child.name === "Mushroom"; });
        if (!hasDough && !hasCheese && !hasPP && !hasMushroom) {
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
        var isCheese = false;
        var isDough = false;
        var isPP = false;
        var isMushroom = false;
        for (var _i = 0, _a = this.currentDropTarget.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name === "Dough") {
                child.destroy();
                isDough = true;
            }
            else if (child.name === "Cheese") {
                child.destroy();
                isCheese = true;
            }
            else if (child.name === "PP") {
                child.destroy();
                isPP = true;
            }
            else if (child.name === "Mushroom") {
                child.destroy();
                isMushroom = true;
            }
        }
        var newItem = null;
        if (isDough) {
            newItem = cc.instantiate(this.flatbreadPrefa);
            newItem.name = "Flatbread";
        }
        else if (isCheese) {
            newItem = cc.instantiate(this.gratedCheesePrefab);
            newItem.name = "GratedCheese";
        }
        else if (isPP) {
            newItem = cc.instantiate(this.sliceppPrefab);
            newItem.name = "SlicePP";
        }
        else if (isMushroom) {
            newItem = cc.instantiate(this.slicemushroomPrefab);
            newItem.name = "SliceMushroom";
        }
        if (newItem) {
            this.currentDropTarget.addChild(newItem);
            var dropPoint = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint) {
                cc.warn("⚠️ 找不到 DropPoint，無法放置切完的物品！");
                return;
            }
            var worldPos = dropPoint.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);
            newItem.setPosition(localPos);
            console.log("\u2705 \u5207\u5B8C " + newItem.name + "\uFF0C\u653E\u7F6E\u6210\u529F\uFF01");
        }
    };
    PlayerController.prototype.tryInteract = function () {
        if (this.canPickMushroom && !this.carriedDough) {
            var mushroom = cc.instantiate(this.mushroomPrefab);
            this.node.addChild(mushroom);
            mushroom.name = "Mushroom";
            mushroom.setPosition(cc.v2(0, 50));
            this.carriedDough = mushroom;
            console.log("🍄 拿起蘑菇");
        }
        if (this.canPickPP && !this.carriedDough) {
            var pp = cc.instantiate(this.ppPrefab);
            this.node.addChild(pp);
            pp.name = "PP";
            pp.setPosition(cc.v2(0, 50));
            this.carriedDough = pp;
            console.log("🍅 拿起番茄");
        }
        if (this.canPickCheese && !this.carriedDough) {
            var cheese = cc.instantiate(this.cheesePrefab);
            this.node.addChild(cheese);
            cheese.name = "Cheese";
            cheese.setPosition(cc.v2(0, 50));
            this.carriedDough = cheese;
            console.log("🧀 拿起起司");
        }
        if (this.canPickDough && !this.carriedDough) {
            var dough = cc.instantiate(this.doughPrefab);
            this.node.addChild(dough);
            dough.name = "Dough";
            dough.setPosition(cc.v2(0, 50));
            this.carriedDough = dough;
            console.log("🎒 拿起麵團");
        }
        else if (!this.carriedDough && this.currentDropTarget) {
            // 🔄 撿起任何 name 以食材開頭的東西
            var pickable = this.currentDropTarget.children.find(function (child) {
                return ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce", "PP", "SlicePP", "Mushroom", "SliceMushroom"].some(function (prefix) {
                    return child.name.startsWith(prefix);
                });
            });
            if (pickable) {
                this.carriedDough = pickable;
                pickable.removeFromParent();
                this.node.addChild(pickable);
                pickable.setPosition(cc.v2(0, 50));
                console.log("🎒 撿起桌上的物品：" + pickable.name);
            }
        }
        else if (this.canDropDough && this.carriedDough && this.currentDropTarget) {
            var dropPoint_1 = this.currentDropTarget.getChildByName("DropPoint");
            if (!dropPoint_1) {
                cc.warn("❌ 找不到 DropPoint，無法放置！");
                return;
            }
            // ✅ 判斷 DropPoint 是否已經被放過東西（排除 DropPoint 本身）
            var alreadyHasFood = this.currentDropTarget.children.some(function (child) {
                return child !== dropPoint_1 &&
                    ["Dough", "Flatbread", "Cheese", "GratedCheese", "Tomato", "PizzaSauce", "PP", "SlicePP", "Mushroom", "SliceMushroom"].some(function (type) {
                        return child.name && child.name.startsWith(type);
                    });
            });
            if (alreadyHasFood) {
                cc.warn("⚠️ 砧板已經有食材了，不能再放！");
                return;
            }
            // ✅ 放置邏輯
            this.carriedDough.parent = this.currentDropTarget;
            var worldPos = dropPoint_1.convertToWorldSpaceAR(cc.v3(0, 0, 0));
            var localPos = this.currentDropTarget.convertToNodeSpaceAR(worldPos);
            this.carriedDough.setPosition(localPos);
            console.log("✅ 放下物品到 DropPoint：" + this.carriedDough.name);
            this.carriedDough = null;
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
        }
        else if (otherCollider.tag === 4) {
            this.canPickCheese = true;
            console.log("🧀 可以撿起起司");
        }
        else if (otherCollider.tag === 5) {
            this.canPickPP = true;
            console.log("🍅 可以撿起番茄！");
        }
        else if (otherCollider.tag === 6) {
            this.canPickMushroom = true;
            console.log("🍄 可以撿起蘑菇！");
        }
        else if (otherCollider.tag === 8 || otherCollider.tag === 10) {
            this.canDropDough = true;
            this.currentDropTag = otherCollider.tag; // 記住目前碰到哪個 tag
            this.currentDropTarget = otherCollider.node;
            console.log("🥣 接觸到砧板 Tag =", otherCollider.tag);
        }
        else if (otherCollider.tag === 11) {
            this.canDropDough = true;
            this.currentDropTag = 11;
            this.currentDropTarget = otherCollider.node;
        }
    };
    PlayerController.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag === 3) {
            this.canPickDough = false;
        }
        else if (otherCollider.tag === 4) {
            this.canPickCheese = false;
        }
        else if (otherCollider.tag === 5) {
            this.canPickPP = false;
        }
        else if (otherCollider.tag === 6) {
            this.canPickMushroom = false;
            console.log("🍄 可以撿起蘑菇！");
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
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "cheesePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "gratedCheesePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "ppPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "sliceppPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "mushroomPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "slicemushroomPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJcXFBsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBcVpDO1FBblpHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQix3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFJOUIsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFDN0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQzNDLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLEtBQUs7UUFDRyxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFDbEMsb0JBQWMsR0FBVyxJQUFJLENBQUM7UUFDOUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsa0JBQVksR0FBVyxDQUFDLENBQUM7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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleWJvYXJkQ29udHJvbHMgfSBmcm9tIFwiLi9LZXlib2FyZENvbnRyb2xzXCI7XHJcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRvdWdoUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBmbGF0YnJlYWRQcmVmYTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNob3BCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaGVlc2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGdyYXRlZENoZWVzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNsaWNlcHBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIG11c2hyb29tUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzbGljZW11c2hyb29tUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgbGFzdERpcjogY2MuVmVjMiA9IGNjLnYyKDAsIC0xKTsgLy8g6aCQ6Kit5ZCR5LiL77yI5YmN77yJXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIC8vIOm6teWcmFxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrRG91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FuRHJvcERvdWdoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNhcnJpZWREb3VnaDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudERyb3BUYWc6IG51bWJlciA9IG51bGw7IFxyXG4gICAgcHJpdmF0ZSBpc0Nob3BwaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNob3BQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2hvcEZpbGw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIOi1t+WPuFxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrQ2hlZXNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrUFA6IGJvb2xlYW4gPSBmYWxzZTsgLy8gdGFnIDUg5ou/IHBwIOeahCBmbGFnXHJcblxyXG4gICAgcHJpdmF0ZSBjYW5QaWNrTXVzaHJvb206IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGxhc3RJbnRlcmFjdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGludGVyYWN0Q29vbGRvd246IG51bWJlciA9IDAuMjsgLy8gMC4yIOenkuWGt+WNu+aZgumWk1xyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5yYikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgUmlnaWRCb2R5MkQg57WE5Lu277yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF9pZGxlX2JhY2tcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hvcEZpbGwgPSB0aGlzLmNob3BCYXIuZ2V0Q2hpbGRCeU5hbWUoXCJGaWxsYmFyXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5jaG9wRmlsbCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuKdjCDmib7kuI3liLAgRmlsbGJhcu+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlOyAvLyDpoJDoqK3kuI3poa/npLpcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuaW5wdXQuZ2V0TW92ZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoIWRpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICAvLyDkvb/nlKjniannkIblvJXmk47nmoQgbGluZWFyVmVsb2NpdHkg5o6n5Yi256e75YuVXHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBkaXIuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWwodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g5YuV55Wr5YiH5o+b77yI6IiH5pa55ZCR5Yik5pa354Sh6K6K77yJXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF93YWxrX2JhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfd2Fsa1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpci54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWBnOatouenu+WLle+8iOmAn+W6puatuOmbtu+8iVxyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmkq3mlL7pnZzmraLli5XnlatcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmxhc3REaXIueSA+IDAgPyBcImdpcmxfaWRsZV9iYWNrXCIgOiBcImdpcmxfaWRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0SW50ZXJhY3RQcmVzc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbnRlcmFjdFRpbWUgPiB0aGlzLmludGVyYWN0Q29vbGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5SW50ZXJhY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldENob3BQcmVzc2VkKCkgJiYgdGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggPT0gbnVsbCAmJiAhdGhpcy5pc0Nob3BwaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaG9wcGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0Nob3BwaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyArPSBkdDtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NSYXRpbyA9IE1hdGgubWluKHRoaXMuY2hvcFByb2dyZXNzIC8gMiwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcHJvZ3Jlc3NSYXRpbztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNob3BQcm9ncmVzcyA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENob3BwaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbENob3BwaW5nKCk7ICAvLyDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsQ2hvcHBpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvcFByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5uRIOeOqeWutuaUvumWi+epuueZvemNte+8jOS4reaWt+WIh+m6te+8gVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydENob3BwaW5nKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOaykuacieWwjeaHieeahOegp+adv++8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFzRG91Z2ggPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIkRvdWdoXCIpKTtcclxuICAgICAgICBjb25zdCBoYXNDaGVlc2UgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZS5pbmNsdWRlcyhcIkNoZWVzZVwiKSk7XHJcbiAgICAgICAgY29uc3QgaGFzUFAgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQubmFtZSA9PT0gXCJQUFwiKTtcclxuICAgICAgICBjb25zdCBoYXNNdXNocm9vbSA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5uYW1lID09PSBcIk11c2hyb29tXCIpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCFoYXNEb3VnaCAmJiAhaGFzQ2hlZXNlICYmICFoYXNQUCAmJiAhaGFzTXVzaHJvb20pIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDpgJnlgIvnoKfmnb/kuIrmspLmnInpurXlnJjvvIzkuI3og73liIfvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNob3BQcm9ncmVzcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5jaG9wQmFyLnNldFBvc2l0aW9uKGNjLnYyKDAsIDgwKSk7ICAvLyDpoa/npLrlnKjop5LoibLpoK3kuIpcclxuICAgICAgICB0aGlzLmNob3BCYXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+UqiDlnKjmraPnorrnoKfmnb/kuIrplovlp4vliIfpurXlnJjvvIFcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZmluaXNoQ2hvcHBpbmcoKSB7XHJcbiAgICAgICAgbGV0IGlzQ2hlZXNlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzRG91Z2ggPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNQUCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc011c2hyb29tID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiRG91Z2hcIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJDaGVlc2VcIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNDaGVlc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLm5hbWUgPT09IFwiUFBcIikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaXNQUCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQubmFtZSA9PT0gXCJNdXNocm9vbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBpc011c2hyb29tID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGlzRG91Z2gpIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmxhdGJyZWFkUHJlZmEpO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5hbWUgPSBcIkZsYXRicmVhZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNDaGVlc2UpIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhdGVkQ2hlZXNlUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJHcmF0ZWRDaGVlc2VcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUFApIHtcclxuICAgICAgICAgICAgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2xpY2VwcFByZWZhYik7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0ubmFtZSA9IFwiU2xpY2VQUFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNNdXNocm9vbSkge1xyXG4gICAgICAgICAgICBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbGljZW11c2hyb29tUHJlZmFiKTtcclxuICAgICAgICAgICAgbmV3SXRlbS5uYW1lID0gXCJTbGljZU11c2hyb29tXCI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKG5ld0l0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldC5hZGRDaGlsZChuZXdJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BQb2ludCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJEcm9wUG9pbnRcIik7XHJcbiAgICAgICAgICAgIGlmICghZHJvcFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOaJvuS4jeWIsCBEcm9wUG9pbnTvvIznhKHms5XmlL7nva7liIflroznmoTnianlk4HvvIFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgICAgIG5ld0l0ZW0uc2V0UG9zaXRpb24obG9jYWxQb3MpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYOKchSDliIflrowgJHtuZXdJdGVtLm5hbWV977yM5pS+572u5oiQ5Yqf77yBYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHRyeUludGVyYWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tNdXNocm9vbSAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgbXVzaHJvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm11c2hyb29tUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG11c2hyb29tKTtcclxuICAgICAgICAgICAgbXVzaHJvb20ubmFtZSA9IFwiTXVzaHJvb21cIjtcclxuICAgICAgICAgICAgbXVzaHJvb20uc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBtdXNocm9vbTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42EIOaLv+i1t+iYkeiPh1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tQUCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgcHAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBwUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBwKTtcclxuICAgICAgICAgICAgcHAubmFtZSA9IFwiUFBcIjtcclxuICAgICAgICAgICAgcHAuc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBwcDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn42FIOaLv+i1t+eVquiMhFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tDaGVlc2UgJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWVzZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2hlZXNlUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoZWVzZSk7XHJcbiAgICAgICAgICAgIGNoZWVzZS5uYW1lID0gXCJDaGVlc2VcIjtcclxuICAgICAgICAgICAgY2hlZXNlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoID0gY2hlZXNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfp4Ag5ou/6LW36LW35Y+4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhblBpY2tEb3VnaCAmJiAhdGhpcy5jYXJyaWVkRG91Z2gpIHtcclxuICAgICAgICAgICAgY29uc3QgZG91Z2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRvdWdoUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcclxuICAgICAgICAgICAgZG91Z2gubmFtZSA9IFwiRG91Z2hcIjtcclxuICAgICAgICAgICAgZG91Z2guc2V0UG9zaXRpb24oY2MudjIoMCwgNTApKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaLv+i1t+m6teWcmFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY2FycmllZERvdWdoICYmIHRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcclxuICAgICAgICAgICAgLy8g8J+UhCDmkr/otbfku7vkvZUgbmFtZSDku6Xpo5/mnZDplovpoK3nmoTmnbHopb9cclxuICAgICAgICAgICAgY29uc3QgcGlja2FibGUgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmNoaWxkcmVuLmZpbmQoY2hpbGQgPT5cclxuICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcIlBQXCIsIFwiU2xpY2VQUFwiLCBcIk11c2hyb29tXCIsIFwiU2xpY2VNdXNocm9vbVwiXS5zb21lKHByZWZpeCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUuc3RhcnRzV2l0aChwcmVmaXgpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChwaWNrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBwaWNrYWJsZTtcclxuICAgICAgICAgICAgICAgIHBpY2thYmxlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWNrYWJsZSk7XHJcbiAgICAgICAgICAgICAgICBwaWNrYWJsZS5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn46SIOaSv+i1t+ahjOS4iueahOeJqeWTge+8mlwiICsgcGlja2FibGUubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jdXJyZW50RHJvcFRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUG9pbnQgPSB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiRHJvcFBvaW50XCIpO1xyXG4gICAgICAgICAgICBpZiAoIWRyb3BQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuKdjCDmib7kuI3liLAgRHJvcFBvaW5077yM54Sh5rOV5pS+572u77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDinIUg5Yik5pa3IERyb3BQb2ludCDmmK/lkKblt7LntpPooqvmlL7pgY7mnbHopb/vvIjmjpLpmaQgRHJvcFBvaW50IOacrOi6q++8iVxyXG4gICAgICAgICAgICBjb25zdCBhbHJlYWR5SGFzRm9vZCA9IHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQgIT09IGRyb3BQb2ludCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFtcIkRvdWdoXCIsIFwiRmxhdGJyZWFkXCIsIFwiQ2hlZXNlXCIsIFwiR3JhdGVkQ2hlZXNlXCIsIFwiVG9tYXRvXCIsIFwiUGl6emFTYXVjZVwiLCBcIlBQXCIsIFwiU2xpY2VQUFwiLCBcIk11c2hyb29tXCIsIFwiU2xpY2VNdXNocm9vbVwiXS5zb21lKHR5cGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZSAmJiBjaGlsZC5uYW1lLnN0YXJ0c1dpdGgodHlwZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbHJlYWR5SGFzRm9vZCkge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuKaoO+4jyDnoKfmnb/lt7LntpPmnInpo5/mnZDkuobvvIzkuI3og73lho3mlL7vvIFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOKchSDmlL7nva7pgo/ovK9cclxuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2gucGFyZW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gZHJvcFBvaW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaC5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIOaUvuS4i+eJqeWTgeWIsCBEcm9wUG9pbnTvvJpcIiArIHRoaXMuY2FycmllZERvdWdoLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHBsYXlBbmltKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09PSBuYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0RvdWdoID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0NoZWVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+ngCDlj6/ku6Xmkr/otbfotbflj7hcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tQUCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhSDlj6/ku6Xmkr/otbfnlarojITvvIFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tNdXNocm9vbSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NhCDlj6/ku6Xmkr/otbfomJHoj4fvvIFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gOCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PT0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhZyA9IG90aGVyQ29sbGlkZXIudGFnOyAgLy8g6KiY5L2P55uu5YmN56Kw5Yiw5ZOq5YCLIHRhZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQgPSBvdGhlckNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6WjIOaOpeinuOWIsOegp+advyBUYWcgPVwiLCBvdGhlckNvbGxpZGVyLnRhZyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJvcFRhcmdldCA9IG90aGVyQ29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0RvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tDaGVlc2UgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyQ29sbGlkZXIudGFnID09PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja1BQID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmNhblBpY2tNdXNocm9vbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjYQg5Y+v5Lul5pK/6LW36JiR6I+H77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRHJvcERvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50RHJvcFRhZyA9IG51bGw7ICAvLyDwn5GIIOa4hemZpOiomOaGtlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
