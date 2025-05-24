
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