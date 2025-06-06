"use strict";
cc._RF.push(module, 'd7834lHPaBEErNbv6LSfhg7', 'Login');
// Script/script/Login.ts

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
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firebaseManager = null;
        return _this;
    }
    Login.prototype.start = function () {
        //cc.director.loadScene("Loading"); 
        // 使用新的方式獲取 FirebaseManager 實例
        this.firebaseManager = FirebaseManager_1.default.getFirebaseManager();
        if (!this.firebaseManager.isFirebaseInitialized()) {
            console.error("Firebase not initialized!");
            return;
        }
        var continueButton = new cc.Component.EventHandler();
        continueButton.target = this.node;
        continueButton.component = "Login";
        continueButton.handler = "onLogin";
        cc.find("Canvas/Login/Submit").getComponent(cc.Button).clickEvents.push(continueButton);
    };
    Login.prototype.onLogin = function () {
        var _this = this;
        // 檢查輸入是否為空
        var email = cc.find("Canvas/Login/Email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/Login/Password").getComponent(cc.EditBox).string;
        if (!email || !password) {
            alert("請填寫所有欄位");
            return;
        }
        // 檢查 email 格式
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("請輸入有效的電子郵件地址");
            return;
        }
        console.log("嘗試登入:", email);
        // 使用 FirebaseManager 進行登入
        this.firebaseManager.getAuth().signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            console.log("登入成功:", userCredential.user.email);
            // 存到 PersistentUser
            var persistNode = cc.director.getScene().getChildByName('PersistentUser');
            if (persistNode) {
                var persistScript_1 = persistNode.getComponent('PersistentUser');
                // 取得 nickname 需從 firebase db 抓
                _this.firebaseManager.getDatabase().ref('users/' + userCredential.user.uid).once('value')
                    .then(function (snapshot) {
                    var nickname = snapshot.val() && snapshot.val().nickname ? snapshot.val().nickname : "";
                    persistScript_1.setUserInfo(userCredential.user.uid, userCredential.user.email, nickname);
                    _this.loadMenuPage();
                })
                    .catch(function () {
                    persistScript_1.setUserInfo(userCredential.user.uid, userCredential.user.email, "");
                    _this.loadMenuPage();
                });
            }
            else {
                console.warn("找不到 PersistentUser persist node！");
                _this.loadMenuPage();
            }
        });
    };
    Login.prototype.loadMenuPage = function () {
        cc.director.loadScene("Loading");
    };
    Login = __decorate([
        ccclass
    ], Login);
    return Login;
}(cc.Component));
exports.default = Login;

cc._RF.pop();