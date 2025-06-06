"use strict";
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