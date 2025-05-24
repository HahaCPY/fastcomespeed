
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
require('./assets/Scripts/Network/NetworkManager');
require('./assets/Scripts/Tables/CutTable');
require('./assets/Scripts/Tables/DeliveryTable');

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
                    var __filename = 'preview-scripts/assets/Scripts/Tables/DeliveryTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9882SdLeBA4pjTminVa7OC', 'DeliveryTable');
// Scripts/Tables/DeliveryTable.ts

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
exports.DeliveryTable = void 0;
// assets/Scripts/Tables/DeliveryTable.ts
var cc_1 = require("cc");
var Table_1 = require("./Table");
var ReceiptsEngine_1 = require("../Other/ReceiptsEngine");
var UIManager_1 = require("../UI/UIManager");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var DeliveryTable = /** @class */ (function (_super) {
    __extends(DeliveryTable, _super);
    function DeliveryTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.successFx = null;
        _this.failFx = null;
        _this.ui = null;
        return _this;
    }
    DeliveryTable.prototype.start = function () {
        this.engine = this.node.scene.getComponentInChildren(ReceiptsEngine_1.ReceiptsEngine);
        this.ui = this.node.scene.getComponentInChildren(UIManager_1.UIManager);
    };
    DeliveryTable.prototype.deliverPlate = function (plate) {
        var _a, _b;
        var result = this.engine.checkPlate(plate);
        if (result) {
            this.playSuccessFx();
            (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showFeedback(true);
            plate.node.destroy();
        }
        else {
            this.playFailFx();
            (_b = this.ui) === null || _b === void 0 ? void 0 : _b.showFeedback(false);
        }
        return result;
    };
    DeliveryTable.prototype.playSuccessFx = function () {
        var _this = this;
        if (this.successFx) {
            this.successFx.active = true;
            this.scheduleOnce(function () { return (_this.successFx.active = false); }, 1);
        }
    };
    DeliveryTable.prototype.playFailFx = function () {
        var _this = this;
        if (this.failFx) {
            this.failFx.active = true;
            this.scheduleOnce(function () { return (_this.failFx.active = false); }, 1);
        }
    };
    __decorate([
        property(cc_1.Node)
    ], DeliveryTable.prototype, "successFx", void 0);
    __decorate([
        property(cc_1.Node)
    ], DeliveryTable.prototype, "failFx", void 0);
    DeliveryTable = __decorate([
        ccclass('DeliveryTable')
    ], DeliveryTable);
    return DeliveryTable;
}(Table_1.Table));
exports.DeliveryTable = DeliveryTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RhYmxlcy9EZWxpdmVyeVRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMseUJBQWlEO0FBQ2pELGlDQUFnQztBQUVoQywwREFBeUQ7QUFDekQsNkNBQTRDO0FBRXBDLElBQUEsT0FBTyxHQUFlLGVBQVUsUUFBekIsRUFBRSxRQUFRLEdBQUssZUFBVSxTQUFmLENBQWdCO0FBR3pDO0lBQW1DLGlDQUFLO0lBQXhDO1FBQUEscUVBeUNDO1FBdkNHLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFTLElBQUksQ0FBQztRQUdaLFFBQUUsR0FBcUIsSUFBSSxDQUFDOztJQWlDeEMsQ0FBQztJQS9CRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQywrQkFBYyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQVk7O1FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE1BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsWUFBWSxDQUFDLElBQUksRUFBRTtZQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxZQUFZLENBQUMsS0FBSyxFQUFFO1NBQ2hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFBQSxpQkFLQztRQUpHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvRDtJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJBS0M7UUFKRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsU0FBSSxDQUFDO29EQUNRO0lBR3ZCO1FBREMsUUFBUSxDQUFDLFNBQUksQ0FBQztpREFDSztJQUxYLGFBQWE7UUFEekIsT0FBTyxDQUFDLGVBQWUsQ0FBQztPQUNaLGFBQWEsQ0F5Q3pCO0lBQUQsb0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q2tDLGFBQUssR0F5Q3ZDO0FBekNZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL1NjcmlwdHMvVGFibGVzL0RlbGl2ZXJ5VGFibGUudHNcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi9UYWJsZSc7XG5pbXBvcnQgeyBQbGF0ZSB9IGZyb20gJy4uL09iamVjdHMvUGxhdGUnO1xuaW1wb3J0IHsgUmVjZWlwdHNFbmdpbmUgfSBmcm9tICcuLi9PdGhlci9SZWNlaXB0c0VuZ2luZSc7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi9VSS9VSU1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRGVsaXZlcnlUYWJsZScpXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlUYWJsZSBleHRlbmRzIFRhYmxlIHtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBzdWNjZXNzRng6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgZmFpbEZ4OiBOb2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZW5naW5lOiBSZWNlaXB0c0VuZ2luZTtcbiAgICBwcml2YXRlIHVpOiBVSU1hbmFnZXIgfCBudWxsID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IHRoaXMubm9kZS5zY2VuZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJlY2VpcHRzRW5naW5lKTtcbiAgICAgICAgdGhpcy51aSA9IHRoaXMubm9kZS5zY2VuZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFVJTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGl2ZXJQbGF0ZShwbGF0ZTogUGxhdGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbmdpbmUuY2hlY2tQbGF0ZShwbGF0ZSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVN1Y2Nlc3NGeCgpO1xuICAgICAgICAgICAgdGhpcy51aT8uc2hvd0ZlZWRiYWNrKHRydWUpO1xuICAgICAgICAgICAgcGxhdGUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlGYWlsRngoKTtcbiAgICAgICAgICAgIHRoaXMudWk/LnNob3dGZWVkYmFjayhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwbGF5U3VjY2Vzc0Z4KCkge1xuICAgICAgICBpZiAodGhpcy5zdWNjZXNzRngpIHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0Z4LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiAodGhpcy5zdWNjZXNzRnguYWN0aXZlID0gZmFsc2UpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlGYWlsRngoKSB7XG4gICAgICAgIGlmICh0aGlzLmZhaWxGeCkge1xuICAgICAgICAgICAgdGhpcy5mYWlsRnguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+ICh0aGlzLmZhaWxGeC5hY3RpdmUgPSBmYWxzZSksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Network/NetworkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21f71W6hDZGIoj68IxY+V17', 'NetworkManager');
// Scripts/Network/NetworkManager.ts

"use strict";
// assets/Scripts/Network/NetworkManager.ts
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
exports.NetworkManager = void 0;
var cc_1 = require("cc");
var app_1 = require("firebase/app");
var database_1 = require("firebase/database");
var auth_1 = require("firebase/auth");
var ccclass = cc_1._decorator.ccclass;
var NetworkManager = /** @class */ (function (_super) {
    __extends(NetworkManager, _super);
    function NetworkManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_PROJECT.firebaseapp.com",
            databaseURL: "https://YOUR_PROJECT.firebaseio.com",
            projectId: "YOUR_PROJECT",
            storageBucket: "YOUR_PROJECT.appspot.com",
            messagingSenderId: "YOUR_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        _this.app = null;
        _this.db = null;
        _this.auth = null;
        _this.uid = '';
        _this.roomId = 'room1';
        return _this;
    }
    NetworkManager.prototype.onLoad = function () {
        this.initFirebase();
    };
    NetworkManager.prototype.initFirebase = function () {
        var _this = this;
        this.app = app_1.initializeApp(this.firebaseConfig);
        this.db = database_1.getDatabase(this.app);
        this.auth = auth_1.getAuth(this.app);
        auth_1.signInAnonymously(this.auth).then(function () {
            console.log('🔐 Signed in anonymously');
        });
        auth_1.onAuthStateChanged(this.auth, function (user) {
            if (user) {
                _this.uid = user.uid;
                _this.joinRoom(_this.roomId);
            }
        });
    };
    NetworkManager.prototype.joinRoom = function (roomId) {
        var playerRef = database_1.ref(this.db, "rooms/" + roomId + "/players/" + this.uid);
        database_1.set(playerRef, {
            x: 0,
            y: 0,
            heldObject: null
        });
        console.log("\u2705 Joined room: " + roomId);
    };
    NetworkManager.prototype.syncPlayerPosition = function (x, y, heldObject) {
        if (heldObject === void 0) { heldObject = null; }
        if (!this.uid)
            return;
        var posRef = database_1.ref(this.db, "rooms/" + this.roomId + "/players/" + this.uid);
        database_1.update(posRef, { x: x, y: y, heldObject: heldObject });
    };
    NetworkManager.prototype.watchPlayers = function (callback) {
        var playersRef = database_1.ref(this.db, "rooms/" + this.roomId + "/players");
        database_1.onValue(playersRef, function (snapshot) {
            var data = snapshot.val();
            callback(data);
        });
    };
    NetworkManager.prototype.getUid = function () {
        return this.uid;
    };
    NetworkManager = __decorate([
        ccclass('NetworkManager')
    ], NetworkManager);
    return NetworkManager;
}(cc_1.Component));
exports.NetworkManager = NetworkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL05ldHdvcmsvTmV0d29ya01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyx5QkFBMkM7QUFDM0Msb0NBQTZDO0FBQzdDLDhDQUEyRTtBQUMzRSxzQ0FBK0U7QUFFdkUsSUFBQSxPQUFPLEdBQUssZUFBVSxRQUFmLENBQWdCO0FBRy9CO0lBQW9DLGtDQUFTO0lBQTdDO1FBQUEscUVBaUVDO1FBaEVXLG9CQUFjLEdBQUc7WUFDckIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsVUFBVSxFQUFFLDhCQUE4QjtZQUMxQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxjQUFjO1lBQ3pCLGFBQWEsRUFBRSwwQkFBMEI7WUFDekMsaUJBQWlCLEVBQUUsZ0JBQWdCO1lBQ25DLEtBQUssRUFBRSxhQUFhO1NBQ3ZCLENBQUM7UUFFTSxTQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsUUFBRSxHQUFHLElBQUksQ0FBQztRQUNWLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixTQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsWUFBTSxHQUFHLE9BQU8sQ0FBQzs7SUFrRDdCLENBQUM7SUFoREcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsRUFBRSxHQUFHLHNCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5Qix3QkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVILHlCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxJQUFJO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNOLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNuQixJQUFNLFNBQVMsR0FBRyxjQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFTLE1BQU0saUJBQVksSUFBSSxDQUFDLEdBQUssQ0FBQyxDQUFDO1FBQ3RFLGNBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDWCxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBa0IsTUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixDQUFTLEVBQUUsQ0FBUyxFQUFFLFVBQWdDO1FBQWhDLDJCQUFBLEVBQUEsaUJBQWdDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBTSxNQUFNLEdBQUcsY0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBUyxJQUFJLENBQUMsTUFBTSxpQkFBWSxJQUFJLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDeEUsaUJBQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxRQUE2QjtRQUN0QyxJQUFNLFVBQVUsR0FBRyxjQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFTLElBQUksQ0FBQyxNQUFNLGFBQVUsQ0FBQyxDQUFDO1FBQ2hFLGtCQUFPLENBQUMsVUFBVSxFQUFFLFVBQUMsUUFBUTtZQUN6QixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQWhFUSxjQUFjO1FBRDFCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztPQUNiLGNBQWMsQ0FpRTFCO0lBQUQscUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRW1DLGNBQVMsR0FpRTVDO0FBakVZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBhc3NldHMvU2NyaXB0cy9OZXR3b3JrL05ldHdvcmtNYW5hZ2VyLnRzXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgb25WYWx1ZSwgc2V0LCB1cGRhdGUgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XG5pbXBvcnQgeyBnZXRBdXRoLCBzaWduSW5Bbm9ueW1vdXNseSwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ05ldHdvcmtNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBOZXR3b3JrTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICAgICAgYXBpS2V5OiBcIllPVVJfQVBJX0tFWVwiLFxuICAgICAgICBhdXRoRG9tYWluOiBcIllPVVJfUFJPSkVDVC5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9ZT1VSX1BST0pFQ1QuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgICAgcHJvamVjdElkOiBcIllPVVJfUFJPSkVDVFwiLFxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcIllPVVJfUFJPSkVDVC5hcHBzcG90LmNvbVwiLFxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCJZT1VSX1NFTkRFUl9JRFwiLFxuICAgICAgICBhcHBJZDogXCJZT1VSX0FQUF9JRFwiXG4gICAgfTtcblxuICAgIHByaXZhdGUgYXBwID0gbnVsbDtcbiAgICBwcml2YXRlIGRiID0gbnVsbDtcbiAgICBwcml2YXRlIGF1dGggPSBudWxsO1xuICAgIHByaXZhdGUgdWlkID0gJyc7XG4gICAgcHJpdmF0ZSByb29tSWQgPSAncm9vbTEnO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXRGaXJlYmFzZSgpO1xuICAgIH1cblxuICAgIGluaXRGaXJlYmFzZSgpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBpbml0aWFsaXplQXBwKHRoaXMuZmlyZWJhc2VDb25maWcpO1xuICAgICAgICB0aGlzLmRiID0gZ2V0RGF0YWJhc2UodGhpcy5hcHApO1xuICAgICAgICB0aGlzLmF1dGggPSBnZXRBdXRoKHRoaXMuYXBwKTtcblxuICAgICAgICBzaWduSW5Bbm9ueW1vdXNseSh0aGlzLmF1dGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ/CflJAgU2lnbmVkIGluIGFub255bW91c2x5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCh0aGlzLmF1dGgsICh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudWlkID0gdXNlci51aWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5qb2luUm9vbSh0aGlzLnJvb21JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGpvaW5Sb29tKHJvb21JZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlZiA9IHJlZih0aGlzLmRiLCBgcm9vbXMvJHtyb29tSWR9L3BsYXllcnMvJHt0aGlzLnVpZH1gKTtcbiAgICAgICAgc2V0KHBsYXllclJlZiwge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBoZWxkT2JqZWN0OiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhg4pyFIEpvaW5lZCByb29tOiAke3Jvb21JZH1gKTtcbiAgICB9XG5cbiAgICBzeW5jUGxheWVyUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIGhlbGRPYmplY3Q6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG4gICAgICAgIGlmICghdGhpcy51aWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgcG9zUmVmID0gcmVmKHRoaXMuZGIsIGByb29tcy8ke3RoaXMucm9vbUlkfS9wbGF5ZXJzLyR7dGhpcy51aWR9YCk7XG4gICAgICAgIHVwZGF0ZShwb3NSZWYsIHsgeCwgeSwgaGVsZE9iamVjdCB9KTtcbiAgICB9XG5cbiAgICB3YXRjaFBsYXllcnMoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgcGxheWVyc1JlZiA9IHJlZih0aGlzLmRiLCBgcm9vbXMvJHt0aGlzLnJvb21JZH0vcGxheWVyc2ApO1xuICAgICAgICBvblZhbHVlKHBsYXllcnNSZWYsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tables/CutTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72a2eYRIxxI86oURursj8KG', 'CutTable');
// Scripts/Tables/CutTable.ts

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
exports.CutTable = void 0;
// assets/Scripts/Tables/CutTable.ts
var cc_1 = require("cc");
var Table_1 = require("./Table");
var Ingredient_1 = require("../Objects/Ingredient");
var UIManager_1 = require("../UI/UIManager");
var ccclass = cc_1._decorator.ccclass;
var CutTable = /** @class */ (function (_super) {
    __extends(CutTable, _super);
    function CutTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cuttingProgress = 0;
        _this.cuttingTime = 3;
        _this.ui = null;
        return _this;
    }
    CutTable.prototype.start = function () {
        this.ui = this.node.scene.getComponentInChildren(UIManager_1.UIManager);
    };
    CutTable.prototype.update = function (deltaTime) {
        var _a;
        if (this.currentObject && this.currentObject instanceof Ingredient_1.Ingredient && !this.currentObject.isCut) {
            this.cuttingProgress += deltaTime;
            var percent = Math.min(1, this.cuttingProgress / this.cuttingTime);
            (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showCutProgress(percent * 100);
            if (this.cuttingProgress >= this.cuttingTime) {
                this.cutIngredient(this.currentObject);
                this.cuttingProgress = 0;
            }
        }
    };
    CutTable.prototype.cutIngredient = function (ingredient) {
        var _a;
        ingredient.isCut = true;
        (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showCutProgress(100);
    };
    CutTable.prototype.removeObject = function () {
        var _a;
        this.cuttingProgress = 0;
        (_a = this.ui) === null || _a === void 0 ? void 0 : _a.clearCutProgress();
        return _super.prototype.removeObject.call(this);
    };
    CutTable = __decorate([
        ccclass('CutTable')
    ], CutTable);
    return CutTable;
}(Table_1.Table));
exports.CutTable = CutTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RhYmxlcy9DdXRUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLHlCQUEyQztBQUMzQyxpQ0FBZ0M7QUFDaEMsb0RBQW1EO0FBQ25ELDZDQUE0QztBQUVwQyxJQUFBLE9BQU8sR0FBSyxlQUFVLFFBQWYsQ0FBZ0I7QUFHL0I7SUFBOEIsNEJBQUs7SUFBbkM7UUFBQSxxRUFpQ0M7UUFoQ1cscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDbkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFakMsUUFBRSxHQUFxQixJQUFJLENBQUM7O0lBNkJ4QyxDQUFDO0lBM0JHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLHFCQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLFNBQWlCOztRQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSx1QkFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDN0YsSUFBSSxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUM7WUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUV4QyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sZ0NBQWEsR0FBckIsVUFBc0IsVUFBc0I7O1FBQ3hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsZUFBZSxDQUFDLEdBQUcsRUFBRTtJQUNsQyxDQUFDO0lBRVEsK0JBQVksR0FBWjs7UUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixNQUFBLElBQUksQ0FBQyxFQUFFLDBDQUFFLGdCQUFnQixHQUFHO1FBQzVCLE9BQU8saUJBQU0sWUFBWSxXQUFFLENBQUM7SUFDaEMsQ0FBQztJQWhDUSxRQUFRO1FBRHBCLE9BQU8sQ0FBQyxVQUFVLENBQUM7T0FDUCxRQUFRLENBaUNwQjtJQUFELGVBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzZCLGFBQUssR0FpQ2xDO0FBakNZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL1NjcmlwdHMvVGFibGVzL0N1dFRhYmxlLnRzXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4vVGFibGUnO1xuaW1wb3J0IHsgSW5ncmVkaWVudCB9IGZyb20gJy4uL09iamVjdHMvSW5ncmVkaWVudCc7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi9VSS9VSU1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdDdXRUYWJsZScpXG5leHBvcnQgY2xhc3MgQ3V0VGFibGUgZXh0ZW5kcyBUYWJsZSB7XG4gICAgcHJpdmF0ZSBjdXR0aW5nUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdXR0aW5nVGltZTogbnVtYmVyID0gMztcblxuICAgIHByaXZhdGUgdWk6IFVJTWFuYWdlciB8IG51bGwgPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuc2NlbmUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihVSU1hbmFnZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0ICYmIHRoaXMuY3VycmVudE9iamVjdCBpbnN0YW5jZW9mIEluZ3JlZGllbnQgJiYgIXRoaXMuY3VycmVudE9iamVjdC5pc0N1dCkge1xuICAgICAgICAgICAgdGhpcy5jdXR0aW5nUHJvZ3Jlc3MgKz0gZGVsdGFUaW1lO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWluKDEsIHRoaXMuY3V0dGluZ1Byb2dyZXNzIC8gdGhpcy5jdXR0aW5nVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVpPy5zaG93Q3V0UHJvZ3Jlc3MocGVyY2VudCAqIDEwMCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1dHRpbmdQcm9ncmVzcyA+PSB0aGlzLmN1dHRpbmdUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXRJbmdyZWRpZW50KHRoaXMuY3VycmVudE9iamVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXR0aW5nUHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjdXRJbmdyZWRpZW50KGluZ3JlZGllbnQ6IEluZ3JlZGllbnQpIHtcbiAgICAgICAgaW5ncmVkaWVudC5pc0N1dCA9IHRydWU7XG4gICAgICAgIHRoaXMudWk/LnNob3dDdXRQcm9ncmVzcygxMDApO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHJlbW92ZU9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5jdXR0aW5nUHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnVpPy5jbGVhckN1dFByb2dyZXNzKCk7XG4gICAgICAgIHJldHVybiBzdXBlci5yZW1vdmVPYmplY3QoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
