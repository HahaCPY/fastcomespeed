
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/FirebaseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a25420OsNtJyJ/DOoVJ/aos', 'FirebaseManager');
// Script/script/FirebaseManager.ts

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
//import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");
var FirebaseManager = /** @class */ (function (_super) {
    __extends(FirebaseManager, _super);
    function FirebaseManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitialized = false;
        _this.firebaseConfig = {
            apiKey: "AIzaSyAdc_uIvYNT9KXZ_m13xOBVmvJIrg5gwA8",
            authDomain: "fastcomespeed-f9362.firebaseapp.com",
            databaseURL: "https://fastcomespeed-f9362-default-rtdb.firebaseio.com",
            projectId: "fastcomespeed-f9362",
            storageBucket: "fastcomespeed-f9362.firebasestorage.app",
            messagingSenderId: "571200091740",
            appId: "1:571200091740:web:2eff9910f4ad1fdf7b9899",
            measurementId: "G-VM73CJP2KC"
        };
        return _this;
    }
    FirebaseManager_1 = FirebaseManager;
    FirebaseManager.prototype.onLoad = function () {
        //alert("FirebaseManager onLoad");
        if (FirebaseManager_1.instance === null) {
            FirebaseManager_1.instance = this;
            cc.game.addPersistRootNode(this.node);
            this.initializeFirebase();
        }
        else {
            this.node.destroy();
        }
    };
    FirebaseManager.prototype.initializeFirebase = function () {
        try {
            if (!this.isInitialized) {
                var app = firebase.initializeApp(this.firebaseConfig);
                //alert(app);
                this.isInitialized = true;
                console.log("Firebase initialized successfully:", app);
            }
        }
        catch (error) {
            console.error("Firebase initialization error:", error);
            // 如果已經初始化過，會拋出錯誤，這是正常的
            if (error.code === 'app/duplicate-app') {
                this.isInitialized = true;
                console.warn("Firebase app already initialized, using existing instance.");
            }
            else {
                alert(error);
            }
        }
    };
    FirebaseManager.getInstance = function () {
        return FirebaseManager_1.instance;
    };
    FirebaseManager.prototype.isFirebaseInitialized = function () {
        return this.isInitialized;
    };
    FirebaseManager.prototype.getAuth = function () {
        if (!this.isInitialized) {
            throw new Error("Firebase not initialized");
        }
        return firebase.auth();
    };
    FirebaseManager.prototype.getDatabase = function () {
        if (!this.isInitialized) {
            throw new Error("Firebase not initialized");
        }
        return firebase.database();
    };
    FirebaseManager.getFirebaseManager = function () {
        if (FirebaseManager_1.instance === null) {
            console.warn("FirebaseManager instance is null, creating a new one.");
            var node = new cc.Node('FirebaseManager');
            cc.game.addPersistRootNode(node);
            return node.addComponent(FirebaseManager_1);
        }
        return FirebaseManager_1.instance;
    };
    var FirebaseManager_1;
    FirebaseManager.instance = null;
    FirebaseManager = FirebaseManager_1 = __decorate([
        ccclass
    ], FirebaseManager);
    return FirebaseManager;
}(cc.Component));
exports.default = FirebaseManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXEZpcmViYXNlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxzQ0FBc0M7QUFDdEMseUJBQXVCO0FBQ3ZCLDZCQUEyQjtBQUczQjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQStFQztRQTdFVyxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV0QixvQkFBYyxHQUFHO1lBQ3BDLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsVUFBVSxFQUFFLHFDQUFxQztZQUNqRCxXQUFXLEVBQUUseURBQXlEO1lBQ3RFLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsYUFBYSxFQUFFLHlDQUF5QztZQUN4RCxpQkFBaUIsRUFBRSxjQUFjO1lBQ2pDLEtBQUssRUFBRSwyQ0FBMkM7WUFDbEQsYUFBYSxFQUFFLGNBQWM7U0FDOUIsQ0FBQzs7SUFrRUYsQ0FBQzt3QkEvRW9CLGVBQWU7SUFnQmhDLGdDQUFNLEdBQU47UUFDSSxrQ0FBa0M7UUFDbEMsSUFBSSxpQkFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDbkMsaUJBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVPLDRDQUFrQixHQUExQjtRQUNJLElBQUk7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDckIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3hELGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDMUQ7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCx1QkFBdUI7WUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLG1CQUFtQixFQUFFO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2FBQzlFO2lCQUNHO2dCQUNBLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtTQUNKO0lBQ0wsQ0FBQztJQUVhLDJCQUFXLEdBQXpCO1FBQ0ksT0FBTyxpQkFBZSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRU0sK0NBQXFCLEdBQTVCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHFDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVhLGtDQUFrQixHQUFoQztRQUNJLElBQUksaUJBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUMsQ0FBQztZQUN0RSxJQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1QyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBZSxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLGlCQUFlLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7O0lBN0VjLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQUQvQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBK0VuQztJQUFELHNCQUFDO0NBL0VELEFBK0VDLENBL0U0QyxFQUFFLENBQUMsU0FBUyxHQStFeEQ7a0JBL0VvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8vaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZWJhc2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBGaXJlYmFzZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QWRjX3VJdllOVDlLWFpfbTEzeE9CVm12SklyZzVnd0E4XCIsXHJcbiAgYXV0aERvbWFpbjogXCJmYXN0Y29tZXNwZWVkLWY5MzYyLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZmFzdGNvbWVzcGVlZC1mOTM2Mi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZmFzdGNvbWVzcGVlZC1mOTM2MlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZmFzdGNvbWVzcGVlZC1mOTM2Mi5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTcxMjAwMDkxNzQwXCIsXHJcbiAgYXBwSWQ6IFwiMTo1NzEyMDAwOTE3NDA6d2ViOjJlZmY5OTEwZjRhZDFmZGY3Yjk4OTlcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctVk03M0NKUDJLQ1wiXHJcbn07XHJcbiAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy9hbGVydChcIkZpcmViYXNlTWFuYWdlciBvbkxvYWRcIik7XHJcbiAgICAgICAgaWYgKEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBGaXJlYmFzZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVGaXJlYmFzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHRoaXMuZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgLy9hbGVydChhcHApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5OlwiLCBhcHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOW3sue2k+WIneWni+WMlumBju+8jOacg+aLi+WHuumMr+iqpO+8jOmAmeaYr+ato+W4uOeahFxyXG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ2FwcC9kdXBsaWNhdGUtYXBwJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZpcmViYXNlIGFwcCBhbHJlYWR5IGluaXRpYWxpemVkLCB1c2luZyBleGlzdGluZyBpbnN0YW5jZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEZpcmViYXNlTWFuYWdlciB7XHJcbiAgICAgICAgcmV0dXJuIEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGaXJlYmFzZUluaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1dGgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlyZWJhc2Ugbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RmlyZWJhc2VNYW5hZ2VyKCk6IEZpcmViYXNlTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGaXJlYmFzZU1hbmFnZXIgaW5zdGFuY2UgaXMgbnVsbCwgY3JlYXRpbmcgYSBuZXcgb25lLlwiKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdGaXJlYmFzZU1hbmFnZXInKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmFkZENvbXBvbmVudChGaXJlYmFzZU1hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRmlyZWJhc2VNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG59Il19