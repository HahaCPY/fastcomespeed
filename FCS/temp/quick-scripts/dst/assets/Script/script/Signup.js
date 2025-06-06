
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/Signup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f89cT6uh1LY4cSDkbEcqj7', 'Signup');
// Script/script/Signup.ts

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
var FirebaseManager_1 = require("./FirebaseManager");
var Signup = /** @class */ (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firebaseManager = null;
        return _this;
    }
    Signup.prototype.start = function () {
        console.log("Signup component started");
        // 使用新的方式獲取 FirebaseManager 實例
        this.firebaseManager = FirebaseManager_1.default.getFirebaseManager();
        if (!this.firebaseManager.isFirebaseInitialized()) {
            console.error("Firebase not initialized!");
            return;
        }
        var continueButton = new cc.Component.EventHandler();
        continueButton.target = this.node;
        continueButton.component = "Signup";
        continueButton.handler = "onSignUp";
        cc.find("Canvas/Signup/Submit").getComponent(cc.Button).clickEvents.push(continueButton);
    };
    Signup.prototype.onSignUp = function () {
        var _this = this;
        var email = cc.find("Canvas/Signup/Email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/Signup/Password").getComponent(cc.EditBox).string;
        var nickname = cc.find("Canvas/Signup/Nickname").getComponent(cc.EditBox).string;
        console.log(email, password, nickname);
        // 檢查輸入是否為空
        if (!email || !password || !nickname) {
            alert("請填寫所有欄位");
            return;
        }
        // 使用 FirebaseManager 進行註冊
        this.firebaseManager.getAuth().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            var userId = userCredential.user.uid;
            return _this.firebaseManager.getDatabase().ref('users/' + userId).set({
                nickname: nickname,
                email: email
            }).then(function () {
                // 存到 PersistentUser
                var persistNode = cc.director.getScene().getChildByName('PersistentUser');
                if (persistNode) {
                    var persistScript = persistNode.getComponent('PersistentUser');
                    persistScript.setUserInfo(userId, email, nickname);
                }
                else {
                    console.warn("找不到 PersistentUser persist node！");
                }
            });
        })
            .then(function () {
            console.log('註冊成功');
            alert("註冊成功");
            cc.director.loadScene("Loading");
        });
    };
    Signup.prototype.getErrorMessage = function (errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email':
                return '無效的電子郵件地址';
            case 'auth/email-already-in-use':
                return '此電子郵件已被使用';
            case 'auth/weak-password':
                return '密碼強度太弱';
            default:
                return '註冊失敗，請稍後再試';
        }
    };
    Signup = __decorate([
        ccclass
    ], Signup);
    return Signup;
}(cc.Component));
exports.default = Signup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L1NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxxREFBZ0Q7QUFHaEQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF3RUM7UUF2RVcscUJBQWUsR0FBb0IsSUFBSSxDQUFDOztJQXVFcEQsQ0FBQztJQXJFRyxzQkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLHlCQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckQsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFzQ0M7UUFwQ0csSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuRixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVc7UUFFWCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFDLGNBQWM7WUFDN0IsSUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkMsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNqRSxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLG9CQUFvQjtnQkFDcEIsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNqRSxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQztpQkFDcEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNLLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRU8sZ0NBQWUsR0FBdkIsVUFBd0IsU0FBaUI7UUFDckMsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLG9CQUFvQjtnQkFDckIsT0FBTyxXQUFXLENBQUM7WUFDdkIsS0FBSywyQkFBMkI7Z0JBQzVCLE9BQU8sV0FBVyxDQUFDO1lBQ3ZCLEtBQUssb0JBQW9CO2dCQUNyQixPQUFPLFFBQVEsQ0FBQztZQUNwQjtnQkFDSSxPQUFPLFlBQVksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUF2RWdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F3RTFCO0lBQUQsYUFBQztDQXhFRCxBQXdFQyxDQXhFbUMsRUFBRSxDQUFDLFNBQVMsR0F3RS9DO2tCQXhFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEZpcmViYXNlTWFuYWdlciBmcm9tICcuL0ZpcmViYXNlTWFuYWdlcic7XG4gXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbnVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGZpcmViYXNlTWFuYWdlcjogRmlyZWJhc2VNYW5hZ2VyID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBjb21wb25lbnQgc3RhcnRlZFwiKTtcbiAgICAgICAgLy8g5L2/55So5paw55qE5pa55byP542y5Y+WIEZpcmViYXNlTWFuYWdlciDlr6bkvotcbiAgICAgICAgdGhpcy5maXJlYmFzZU1hbmFnZXIgPSBGaXJlYmFzZU1hbmFnZXIuZ2V0RmlyZWJhc2VNYW5hZ2VyKCk7XG4gICAgICAgIGlmICghdGhpcy5maXJlYmFzZU1hbmFnZXIuaXNGaXJlYmFzZUluaXRpYWxpemVkKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY29udGludWVCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5jb21wb25lbnQgPSBcIlNpZ251cFwiO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5oYW5kbGVyID0gXCJvblNpZ25VcFwiO1xuICAgICAgICBcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWdudXAvU3VibWl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29udGludWVCdXR0b24pO1xuICAgIH1cblxuICAgIG9uU2lnblVwKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZW1haWwgPSBjYy5maW5kKFwiQ2FudmFzL1NpZ251cC9FbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNjLmZpbmQoXCJDYW52YXMvU2lnbnVwL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gY2MuZmluZChcIkNhbnZhcy9TaWdudXAvTmlja25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcblxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lKTtcbiAgICAgICAgLy8g5qqi5p+l6Ly45YWl5piv5ZCm54K656m6XG5cbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIW5pY2tuYW1lKSB7XG4gICAgICAgICAgICBhbGVydChcIuiri+Whq+Wvq+aJgOacieashOS9jVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS9v+eUqCBGaXJlYmFzZU1hbmFnZXIg6YCy6KGM6Ki75YaKXG4gICAgICAgIHRoaXMuZmlyZWJhc2VNYW5hZ2VyLmdldEF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgY29uc3QgdXNlcklkID0gdXNlckNyZWRlbnRpYWwudXNlci51aWQ7XG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VNYW5hZ2VyLmdldERhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgdXNlcklkKS5zZXQoe1xuICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyDlrZjliLAgUGVyc2lzdGVudFVzZXJcbiAgICAgICAgY29uc3QgcGVyc2lzdE5vZGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdQZXJzaXN0ZW50VXNlcicpO1xuICAgICAgICBpZiAocGVyc2lzdE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RTY3JpcHQgPSBwZXJzaXN0Tm9kZS5nZXRDb21wb25lbnQoJ1BlcnNpc3RlbnRVc2VyJyk7XG4gICAgICAgICAgICBwZXJzaXN0U2NyaXB0LnNldFVzZXJJbmZvKHVzZXJJZCwgZW1haWwsIG5pY2tuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuaJvuS4jeWIsCBQZXJzaXN0ZW50VXNlciBwZXJzaXN0IG5vZGXvvIFcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iou+WGiuaIkOWKnycpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6Ki75YaK5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRpbmdcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RXJyb3JNZXNzYWdlKGVycm9yQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChlcnJvckNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2F1dGgvaW52YWxpZC1lbWFpbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICfnhKHmlYjnmoTpm7vlrZDpg7Xku7blnLDlnYAnO1xuICAgICAgICAgICAgY2FzZSAnYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICfmraTpm7vlrZDpg7Xku7blt7Looqvkvb/nlKgnO1xuICAgICAgICAgICAgY2FzZSAnYXV0aC93ZWFrLXBhc3N3b3JkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+WvhueivOW8t+W6puWkquW8sSc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAn6Ki75YaK5aSx5pWX77yM6KuL56iN5b6M5YaN6KmmJztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==