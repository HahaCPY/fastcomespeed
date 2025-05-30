
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZGVidWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7O0lBU0EsQ0FBQztJQVJHLGdDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUUvQyx5QkFBeUI7UUFDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWM7WUFDOUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVTtnQkFDckMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFSZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQVNuQztJQUFELHNCQUFDO0NBVEQsQUFTQyxDQVQ0QyxFQUFFLENBQUMsU0FBUyxHQVN4RDtrQkFUb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1Z0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyDpoa/npLrnorDmkp7lvaLni4DvvIjntqDmoYYv6JeN5qGG77yJKyDpgornlYwgQUFCQlxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQgfFxuICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQ7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL0tleWJvYXJkQ29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFNSTtRQUxRLFlBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUdoQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFrQixLQUE2QjtRQUMzQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU8sa0NBQU8sR0FBZixVQUFnQixLQUE2QjtRQUN6QyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVNLDZDQUFrQixHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFDTSx5Q0FBYyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQXhFQSxBQXdFQyxJQUFBO0FBeEVZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcblxuZXhwb3J0IGNsYXNzIEtleWJvYXJkQ29udHJvbHMgaW1wbGVtZW50cyBJSW5wdXRDb250cm9scyB7XG4gICAgcHJpdmF0ZSBtb3ZlRGlyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XG4gICAgcHJpdmF0ZSBpc0ludGVyYWN0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNDaG9wUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNDaG9wSGVsZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH1cblxuICAgIGdldE1vdmVEaXJlY3Rpb24oKTogY2MuVmVjMiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVEaXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnkgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnkgPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpci54ID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyLnggPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZTpcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9wSGVsZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIueCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5lOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNJbnRlcmFjdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9wSGVsZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEludGVyYWN0UHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbnRlcmFjdFByZXNzZWQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDaG9wUHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaG9wSGVsZDtcbiAgICB9XG5cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL0lJbnB1dENvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElJbnB1dENvbnRyb2xzIHtcbiAgICBnZXRNb3ZlRGlyZWN0aW9uKCk6IGNjLlZlYzI7XG4gICAgZ2V0SW50ZXJhY3RQcmVzc2VkKCk6IGJvb2xlYW47IFxuICAgIGdldENob3BQcmVzc2VkKCk6IGJvb2xlYW47XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyL1BsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBR2hELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBcVBDO1FBblBHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUdoQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUM3QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDM0MsUUFBRSxHQUFpQixJQUFJLENBQUM7UUFFaEMsS0FBSztRQUNHLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxvQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDOztJQXVOckMsQ0FBQztJQXBORyxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9D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LHlDQUF5QztTQUM1QztJQUNMLENBQUM7SUE5T0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDRztJQUcxQjtRQURDLFFBQVE7bURBQ1c7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ007SUFkUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXFQcEM7SUFBRCx1QkFBQztDQXJQRCxBQXFQQyxDQXJQNkMsRUFBRSxDQUFDLFNBQVMsR0FxUHpEO2tCQXJQb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5Ym9hcmRDb250cm9scyB9IGZyb20gXCIuL0tleWJvYXJkQ29udHJvbHNcIjtcbmltcG9ydCB7IElJbnB1dENvbnRyb2xzIH0gZnJvbSBcIi4vSUlucHV0Q29udHJvbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBkb3VnaFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZmxhdGJyZWFkUHJlZmE6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaG9wQmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgcHJpdmF0ZSBpbnB1dDogSUlucHV0Q29udHJvbHMgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudEFuaW06IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBsYXN0RGlyOiBjYy5WZWMyID0gY2MudjIoMCwgLTEpOyAvLyDpoJDoqK3lkJHkuIvvvIjliY3vvIlcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuXG4gICAgLy8g6bq15ZyYXG4gICAgcHJpdmF0ZSBjYW5QaWNrRG91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhbkRyb3BEb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY2FycmllZERvdWdoOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnREcm9wVGFnOiBudW1iZXIgPSBudWxsOyBcbiAgICBwcml2YXRlIGlzQ2hvcHBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNob3BQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNob3BGaWxsOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hbmltKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmICghdGhpcy5yYikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIFJpZ2lkQm9keTJEIOe1hOS7tu+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX2lkbGVfYmFja1wiKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBLZXlib2FyZENvbnRyb2xzKCk7XG5cbiAgICAgICAgdGhpcy5jaG9wRmlsbCA9IHRoaXMuY2hvcEJhci5nZXRDaGlsZEJ5TmFtZShcIkZpbGxiYXJcIik7XG4gICAgICAgIGlmICghdGhpcy5jaG9wRmlsbCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLinYwg5om+5LiN5YiwIEZpbGxiYXLvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaG9wQmFyLmFjdGl2ZSA9IGZhbHNlOyAvLyDpoJDoqK3kuI3poa/npLpcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmlucHV0LmdldE1vdmVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoIWRpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xuICAgICAgICAgICAgLy8g5L2/55So54mp55CG5byV5pOO55qEIGxpbmVhclZlbG9jaXR5IOaOp+WItuenu+WLlVxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGRpci5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bCh0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMubGFzdERpciA9IGRpci5jbG9uZSgpO1xuXG4gICAgICAgICAgICAvLyDli5XnlavliIfmj5vvvIjoiIfmlrnlkJHliKTmlrfnhKHororvvIlcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXIueSkgPiBNYXRoLmFicyhkaXIueCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfYmFja1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltKFwiZ2lybF9pZGxlX3dhbGtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyLnggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfcmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0oXCJnaXJsX3dhbGtfbGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5YGc5q2i56e75YuV77yI6YCf5bqm5q246Zu277yJXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XG5cbiAgICAgICAgICAgIC8vIOaSreaUvumdnOatouWLleeVq1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdERpci55KSA+IE1hdGguYWJzKHRoaXMubGFzdERpci54KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnkgPiAwID8gXCJnaXJsX2lkbGVfYmFja1wiIDogXCJnaXJsX2lkbGVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5sYXN0RGlyLnggPiAwID8gXCJnaXJsX2lkbGVfcmlnaHRcIiA6IFwiZ2lybF9pZGxlX2xlZnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmdldEludGVyYWN0UHJlc3NlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnRyeUludGVyYWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnB1dC5nZXRDaG9wUHJlc3NlZCgpICYmIHRoaXMuY2FuRHJvcERvdWdoICYmIHRoaXMuY2FycmllZERvdWdoID09IG51bGwgJiYgIXRoaXMuaXNDaG9wcGluZykge1xuICAgICAgICAgICAgdGhpcy5zdGFydENob3BwaW5nKCk7XG4gICAgICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2hvcHBpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZ2V0Q2hvcFByZXNzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgKz0gZHQ7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc1JhdGlvID0gTWF0aC5taW4odGhpcy5jaG9wUHJvZ3Jlc3MgLyAyLCAxKTtcbiAgICAgICAgICAgIHRoaXMuY2hvcEZpbGwuc2NhbGVYID0gcHJvZ3Jlc3NSYXRpbztcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvcFByb2dyZXNzID49IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENob3BwaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbENob3BwaW5nKCk7ICAvLyDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurVcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICB9XG5cbiAgICBjYW5jZWxDaG9wcGluZygpIHtcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+bkSDnjqnlrrbmlL7plovnqbrnmb3pjbXvvIzkuK3mlrfliIfpurXvvIFcIik7XG4gICAgfVxuXG4gICAgc3RhcnRDaG9wcGluZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREcm9wVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYy53YXJuKFwi4pqg77iPIOaykuacieWwjeaHieeahOegp+adv++8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOKchSDlj6rmqqLmn6XjgIznm67liY3nq5nlnKjnmoTnoKfmnb/jgI3kuIrmmK/lkKbmnInpurXlnJjvvIjlgYfoqK3lkI3nqLHlkKsgXCJEb3VnaFwi77yJXG4gICAgICAgIGNvbnN0IGhhc0RvdWdoID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldC5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJEb3VnaFwiKSk7XG4gICAgICAgIGlmICghaGFzRG91Z2gpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8g6YCZ5YCL56Cn5p2/5LiK5rKS5pyJ6bq15ZyY77yM5LiN6IO95YiH77yBXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaG9wUHJvZ3Jlc3MgPSAwO1xuXG4gICAgICAgIHRoaXMuY2hvcEJhci5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuY2hvcEJhci5zZXRQb3NpdGlvbihjYy52MigwLCA4MCkpOyAgLy8g6aGv56S65Zyo6KeS6Imy6aCt5LiKXG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNob3BGaWxsLnNjYWxlWCA9IDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SqIOWcqOato+eiuuegp+adv+S4iumWi+Wni+WIh+m6teWcmO+8gVwiKTtcbiAgICB9XG5cblxuXG5cbiAgICBmaW5pc2hDaG9wcGluZygpIHtcbiAgICAgICAgdGhpcy5pc0Nob3BwaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hvcEJhci5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLimqDvuI8gY3VycmVudERyb3BUYXJnZXQg5pivIG51bGzvvIznhKHms5XliIfpurXlnJjvvIFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY3VycmVudERyb3BUYXJnZXQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lLmluY2x1ZGVzKFwiRG91Z2hcIikpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7ICAvLyDlj6rnoI3purXlnJjvvIzkuI3norDpurXppIVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgZmxhdGJyZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5mbGF0YnJlYWRQcmVmYSk7XG4gICAgICAgIHRoaXMuY3VycmVudERyb3BUYXJnZXQuYWRkQ2hpbGQoZmxhdGJyZWFkKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJvcFRhZyA9PT0gMTApIHtcbiAgICAgICAgICAgIGZsYXRicmVhZC5zZXRQb3NpdGlvbihjYy52MygtMjQ1LCAtMjkwLCA1MCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudERyb3BUYWcgPT09IDgpIHtcbiAgICAgICAgICAgIGZsYXRicmVhZC5zZXRQb3NpdGlvbihjYy52MygtNTA1LCAtMjkwLCA1MCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxhdGJyZWFkLnNldFBvc2l0aW9uKGNjLnYzKDAsIDApKTsgLy8g6aCQ6Kit5Lit5b+DXG4gICAgICAgICAgICBjYy53YXJuKFwi4p2TIOacquefpeegp+advyBUYWfvvIzpurXppIXmlL7lnKjkuK3lv4NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuICAgIHRyeUludGVyYWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QaWNrRG91Z2ggJiYgIXRoaXMuY2FycmllZERvdWdoKSB7XG4gICAgICAgICAgICBjb25zdCBkb3VnaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZG91Z2hQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGRvdWdoKTtcbiAgICAgICAgICAgIGRvdWdoLm5hbWUgPSBcIkRvdWdoXCI7XG4gICAgICAgICAgICBkb3VnaC5zZXRQb3NpdGlvbihjYy52MigwLCA1MCkpO1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2ggPSBkb3VnaDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+OkiDmi7/otbfpurXlnJhcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYW5Ecm9wRG91Z2ggJiYgdGhpcy5jYXJyaWVkRG91Z2ggJiYgdGhpcy5jdXJyZW50RHJvcFRhZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2gucGFyZW50ID0gdGhpcy5jdXJyZW50RHJvcFRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyb3BUYWcgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJyaWVkRG91Z2guc2V0UG9zaXRpb24oY2MudjMoLTI0NSwgLTI5MCwgNTApKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RHJvcFRhZyA9PT0gOCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FycmllZERvdWdoLnNldFBvc2l0aW9uKGNjLnYzKC01MDUsIC0yOTAsIDUwKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdkyDmnKrnn6XnoKfmnb8gdGFn77yM54Sh5rOV5pS+572uXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhcnJpZWREb3VnaCA9IG51bGw7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSDmlL7kuIvpurXlnJjmiJDlip/vvIFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBwbGF5QW5pbShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW0gPT09IG5hbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KG5hbWUpO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0RvdWdoID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+NniDlj6/ku6Xmkr/otbfpurXlnJhcIik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFnID0gb3RoZXJDb2xsaWRlci50YWc7ICAvLyDoqJjkvY/nm67liY3norDliLDlk6rlgIsgdGFnXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcm9wVGFyZ2V0ID0gb3RoZXJDb2xsaWRlci5ub2RlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn6WjIOaOpeinuOWIsOegp+advyBUYWcgPVwiLCBvdGhlckNvbGxpZGVyLnRhZyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuUGlja0RvdWdoID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXJDb2xsaWRlci50YWcgPT09IDggfHwgb3RoZXJDb2xsaWRlci50YWcgPT09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkRyb3BEb3VnaCA9IGZhbHNlO1xuICAgICAgICAgICAgLy90aGlzLmN1cnJlbnREcm9wVGFnID0gbnVsbDsgIC8vIPCfkYgg5riF6Zmk6KiY5oa2XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NlbmUvdWlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMkZDO1FBekZHLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDLENBQUMsZ0JBQWdCO1FBRzdDLGVBQVMsR0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBR2hDLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUdqQyxrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFFLFdBQVc7UUFFOUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBdUVwQyxDQUFDO0lBckVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksS0FBaUIsVUFBVSxFQUFWLEtBQUEsSUFBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO1lBQXhCLElBQUksSUFBSSxTQUFBO1lBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFBSSxD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QyxRQUFRO2tEQUNpQjtJQUcxQjtRQURDLFFBQVE7aURBQ2dCO0lBakJSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0EyRjNCO0lBQUQsY0FBQztDQTNGRCxBQTJGQyxDQTNGb0MsRUFBRSxDQUFDLFNBQVMsR0EyRmhEO2tCQTNGb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuTm9kZV0gfSlcbiAgICBzbG90czogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuUHJlZmFiXSB9KVxuICAgIGRpc2hQcmVmYWJzOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTGFiZWwgfSlcbiAgICB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7IC8vIOaLluaLieWAkuaVuOaZgumWk+eahCBMYWJlbFxuXG4gICAgQHByb3BlcnR5XG4gICAgdG90YWxUaW1lOiBudW1iZXIgPSA2MDsgLy8g57i95YCS5pW456eS5pW4XG5cbiAgICBAcHJvcGVydHlcbiAgICBkaXNoZXNQZXJHYW1lOiBudW1iZXIgPSAzOyAvLyDmoLzlrZDmlbhcblxuICAgIEBwcm9wZXJ0eVxuICAgIGRpc2hJbnRlcnZhbDogbnVtYmVyID0gNTsgIC8vIOavj+malOW5vuenkueUoueUn+S4gOWAi1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50RGlzaElkeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRNZW51KCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgcmVzZXRNZW51KCkge1xuICAgICAgICBmb3IgKGxldCBzbG90IG9mIHRoaXMuc2xvdHMpIHtcbiAgICAgICAgICAgIHNsb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4ID0gMDtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXApO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudG90YWxUaW1lO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50ZG93blN0ZXAsIDEpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV4dERpc2goKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdlbmVyYXRlTmV4dERpc2gsIHRoaXMuZGlzaEludGVydmFsKTtcbiAgICB9XG5cbiAgICBjb3VudGRvd25TdGVwKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTGFiZWwoKSB7XG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zdHJpbmcgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5jdXJyZW50VGltZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0VGltZShzZWM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKHNlYyAvIDYwKTtcbiAgICAgICAgY29uc3QgcyA9IHNlYyAlIDYwO1xuICAgICAgICByZXR1cm4gYCR7bX06JHtzIDwgMTAgPyAnMCcgOiAnJ30ke3N9YDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU5leHREaXNoKCkge1xuICAgICAgICAvLyDnlKggc2xvdHMubGVuZ3RoIOeVtuacgOWkp+agvOaVuFxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzaElkeCA+PSB0aGlzLnNsb3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZWZhYklkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzaFByZWZhYnMubGVuZ3RoKTtcbiAgICAgICAgbGV0IGRpc2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpc2hQcmVmYWJzW3ByZWZhYklkeF0pO1xuICAgICAgICB0aGlzLnNsb3RzW3RoaXMuY3VycmVudERpc2hJZHhdLmFkZENoaWxkKGRpc2gpO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXNoSWR4Kys7XG4gICAgfVxuXG5cbiAgICB0aW1lVXAoKSB7XG4gICAgICAgIC8vIOWBnOatouaJgOaciSBzY2hlZHVsZVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudGRvd25TdGVwKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVOZXh0RGlzaCk7XG4gICAgICAgIGNjLmxvZyhcIlRpbWUncyB1cCFcIik7IC8vIOS9oOWPr+S7peWKoOabtOWkmuWLleS9nFxuICAgIH1cblxuICAgIC8vIOiLpemcgOmHjeWVn1xuICAgIHJlc2V0QW5kU3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRNZW51KCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
