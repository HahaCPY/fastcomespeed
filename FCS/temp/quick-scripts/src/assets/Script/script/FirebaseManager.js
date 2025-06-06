"use strict";
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