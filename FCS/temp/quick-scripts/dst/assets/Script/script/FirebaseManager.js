
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
var FirebaseManager = /** @class */ (function (_super) {
    __extends(FirebaseManager, _super);
    function FirebaseManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitialized = false;
        _this.firebaseConfig = {
            apiKey: "AIzaSyBDxNDyXpBYaxPqu_67VOdiBpHktm07Lvg",
            authDomain: "fastcomespeed.firebaseapp.com",
            databaseURL: "https://fastcomespeed-default-rtdb.firebaseio.com",
            projectId: "fastcomespeed",
            storageBucket: "fastcomespeed.firebasestorage.app",
            messagingSenderId: "1000911495183",
            appId: "1:1000911495183:web:8acc6cb6b915d6687e437a",
            measurementId: "G-JMECN9BKDF"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L0ZpcmViYXNlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQStFQztRQTdFVyxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV0QixvQkFBYyxHQUFFO1lBQ2pDLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsVUFBVSxFQUFFLCtCQUErQjtZQUMzQyxXQUFXLEVBQUUsbURBQW1EO1lBQ2hFLFNBQVMsRUFBRSxlQUFlO1lBQzFCLGFBQWEsRUFBRSxtQ0FBbUM7WUFDbEQsaUJBQWlCLEVBQUUsZUFBZTtZQUNsQyxLQUFLLEVBQUUsNENBQTRDO1lBQ25ELGFBQWEsRUFBRSxjQUFjO1NBQzVCLENBQUM7O0lBa0VOLENBQUM7d0JBL0VvQixlQUFlO0lBZ0JoQyxnQ0FBTSxHQUFOO1FBQ0ksa0NBQWtDO1FBQ2xDLElBQUksaUJBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25DLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTyw0Q0FBa0IsR0FBMUI7UUFDSSxJQUFJO1lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN4RCxhQUFhO2dCQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkQsdUJBQXVCO1lBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQzthQUM5RTtpQkFDRztnQkFDQSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEI7U0FDSjtJQUNMLENBQUM7SUFFYSwyQkFBVyxHQUF6QjtRQUNJLE9BQU8saUJBQWUsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0saUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFYSxrQ0FBa0IsR0FBaEM7UUFDSSxJQUFJLGlCQUFlLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7WUFDdEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxpQkFBZSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDOztJQTdFYyx3QkFBUSxHQUFvQixJQUFJLENBQUM7SUFEL0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStFbkM7SUFBRCxzQkFBQztDQS9FRCxBQStFQyxDQS9FNEMsRUFBRSxDQUFDLFNBQVMsR0ErRXhEO2tCQS9Fb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZWJhc2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRmlyZWJhc2VNYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlyZWJhc2VDb25maWc9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QkR4TkR5WHBCWWF4UHF1XzY3Vk9kaUJwSGt0bTA3THZnXCIsXG4gICAgYXV0aERvbWFpbjogXCJmYXN0Y29tZXNwZWVkLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZmFzdGNvbWVzcGVlZC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiZmFzdGNvbWVzcGVlZFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZmFzdGNvbWVzcGVlZC5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTAwMDkxMTQ5NTE4M1wiLFxuICAgIGFwcElkOiBcIjE6MTAwMDkxMTQ5NTE4Mzp3ZWI6OGFjYzZjYjZiOTE1ZDY2ODdlNDM3YVwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1KTUVDTjlCS0RGXCJcbiAgICB9O1xuICAgIFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL2FsZXJ0KFwiRmlyZWJhc2VNYW5hZ2VyIG9uTG9hZFwiKTtcbiAgICAgICAgaWYgKEZpcmViYXNlTWFuYWdlci5pbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgRmlyZWJhc2VNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVGaXJlYmFzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHRoaXMuZmlyZWJhc2VDb25maWcpO1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoYXBwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5OlwiLCBhcHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAvLyDlpoLmnpzlt7LntpPliJ3lp4vljJbpgY7vvIzmnIPmi4vlh7rpjK/oqqTvvIzpgJnmmK/mraPluLjnmoRcbiAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnYXBwL2R1cGxpY2F0ZS1hcHAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGaXJlYmFzZSBhcHAgYWxyZWFkeSBpbml0aWFsaXplZCwgdXNpbmcgZXhpc3RpbmcgaW5zdGFuY2UuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEZpcmViYXNlTWFuYWdlciB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZU1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRmlyZWJhc2VJbml0aWFsaXplZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXV0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcmViYXNlIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEZpcmViYXNlTWFuYWdlcigpOiBGaXJlYmFzZU1hbmFnZXIge1xuICAgICAgICBpZiAoRmlyZWJhc2VNYW5hZ2VyLmluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGaXJlYmFzZU1hbmFnZXIgaW5zdGFuY2UgaXMgbnVsbCwgY3JlYXRpbmcgYSBuZXcgb25lLlwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnRmlyZWJhc2VNYW5hZ2VyJyk7XG4gICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmFkZENvbXBvbmVudChGaXJlYmFzZU1hbmFnZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGaXJlYmFzZU1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxufSAiXX0=