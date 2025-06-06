
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
            // 保存用戶數據到 Realtime Database
            var userId = userCredential.user.uid;
            return _this.firebaseManager.getDatabase().ref('users/' + userId).set({
                nickname: nickname,
                email: email
            });
        })
            .then(function () {
            console.log('註冊成功');
            alert("註冊成功");
            cc.director.loadScene("Loading");
        })
            .catch(function (error) {
            console.error("註冊錯誤:", error);
            alert(error.message);
            //alert(this.getErrorMessage(error.code));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXFNpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxxREFBZ0Q7QUFHaEQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFxRUM7UUFwRVcscUJBQWUsR0FBb0IsSUFBSSxDQUFDOztJQW9FcEQsQ0FBQztJQWxFRyxzQkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLHlCQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckQsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFtQ0M7UUFqQ0csSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuRixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVc7UUFFWCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFDLGNBQWM7WUFDakIsNEJBQTRCO1lBQzVCLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDakUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQiwwQ0FBMEM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRU8sZ0NBQWUsR0FBdkIsVUFBd0IsU0FBaUI7UUFDckMsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLG9CQUFvQjtnQkFDckIsT0FBTyxXQUFXLENBQUM7WUFDdkIsS0FBSywyQkFBMkI7Z0JBQzVCLE9BQU8sV0FBVyxDQUFDO1lBQ3ZCLEtBQUssb0JBQW9CO2dCQUNyQixPQUFPLFFBQVEsQ0FBQztZQUNwQjtnQkFDSSxPQUFPLFlBQVksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFwRWdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FxRTFCO0lBQUQsYUFBQztDQXJFRCxBQXFFQyxDQXJFbUMsRUFBRSxDQUFDLFNBQVMsR0FxRS9DO2tCQXJFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgRmlyZWJhc2VNYW5hZ2VyIGZyb20gJy4vRmlyZWJhc2VNYW5hZ2VyJztcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWdudXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZU1hbmFnZXI6IEZpcmViYXNlTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgY29tcG9uZW50IHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgLy8g5L2/55So5paw55qE5pa55byP542y5Y+WIEZpcmViYXNlTWFuYWdlciDlr6bkvotcclxuICAgICAgICB0aGlzLmZpcmViYXNlTWFuYWdlciA9IEZpcmViYXNlTWFuYWdlci5nZXRGaXJlYmFzZU1hbmFnZXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyZWJhc2VNYW5hZ2VyLmlzRmlyZWJhc2VJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb250aW51ZUJ1dHRvbi5jb21wb25lbnQgPSBcIlNpZ251cFwiO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmhhbmRsZXIgPSBcIm9uU2lnblVwXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWdudXAvU3VibWl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29udGludWVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnblVwKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gY2MuZmluZChcIkNhbnZhcy9TaWdudXAvRW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNjLmZpbmQoXCJDYW52YXMvU2lnbnVwL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBjYy5maW5kKFwiQ2FudmFzL1NpZ251cC9OaWNrbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lKTtcclxuICAgICAgICAvLyDmqqLmn6XovLjlhaXmmK/lkKbngrrnqbpcclxuXHJcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIW5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL5aGr5a+r5omA5pyJ5qyE5L2NXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkvb/nlKggRmlyZWJhc2VNYW5hZ2VyIOmAsuihjOiou+WGilxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VNYW5hZ2VyLmdldEF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS/neWtmOeUqOaItuaVuOaTmuWIsCBSZWFsdGltZSBEYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gdXNlckNyZWRlbnRpYWwudXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZU1hbmFnZXIuZ2V0RGF0YWJhc2UoKS5yZWYoJ3VzZXJzLycgKyB1c2VySWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfoqLvlhormiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi6Ki75YaK5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuiou+WGiumMr+iqpDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVycm9yLmNvZGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RXJyb3JNZXNzYWdlKGVycm9yQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKGVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICBjYXNlICdhdXRoL2ludmFsaWQtZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfnhKHmlYjnmoTpm7vlrZDpg7Xku7blnLDlnYAnO1xyXG4gICAgICAgICAgICBjYXNlICdhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn5q2k6Zu75a2Q6YO15Lu25bey6KKr5L2/55SoJztcclxuICAgICAgICAgICAgY2FzZSAnYXV0aC93ZWFrLXBhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn5a+G56K85by35bqm5aSq5byxJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAn6Ki75YaK5aSx5pWX77yM6KuL56iN5b6M5YaN6KmmJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19