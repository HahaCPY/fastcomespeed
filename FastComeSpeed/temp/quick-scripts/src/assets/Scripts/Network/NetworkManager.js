"use strict";
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