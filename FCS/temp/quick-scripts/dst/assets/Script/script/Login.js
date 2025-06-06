
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
            _this.loadMenuPage();
        })
            .catch(function (error) {
            console.error("登入錯誤:", error);
            switch (error.code) {
                case 'auth/invalid-credential':
                    alert("帳號或密碼錯誤");
                    break;
                case 'auth/user-not-found':
                    alert("找不到此用戶");
                    break;
                case 'auth/wrong-password':
                    alert("密碼錯誤");
                    break;
                default:
                    alert(error.message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY3JpcHRcXExvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLHFEQUFnRDtBQUdoRDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWtFQztRQWpFVyxxQkFBZSxHQUFvQixJQUFJLENBQUM7O0lBaUVwRCxDQUFDO0lBL0RHLHFCQUFLLEdBQUw7UUFDSyxvQ0FBb0M7UUFDckMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzNDLE9BQU87U0FDVjtRQUVELElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsY0FBYyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDbkMsY0FBYyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFFbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUFBLGlCQXlDQztRQXhDRyxXQUFXO1FBQ1gsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVsRixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCxjQUFjO1FBQ2QsSUFBTSxVQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDckUsSUFBSSxDQUFDLFVBQUMsY0FBYztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNoQixLQUFLLHlCQUF5QjtvQkFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2dCQUNWLEtBQUsscUJBQXFCO29CQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hCLE1BQU07Z0JBQ1YsS0FBSyxxQkFBcUI7b0JBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDZCxNQUFNO2dCQUNWO29CQUNJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQWpFZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWtFekI7SUFBRCxZQUFDO0NBbEVELEFBa0VDLENBbEVrQyxFQUFFLENBQUMsU0FBUyxHQWtFOUM7a0JBbEVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBGaXJlYmFzZU1hbmFnZXIgZnJvbSAnLi9GaXJlYmFzZU1hbmFnZXInO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZU1hbmFnZXI6IEZpcmViYXNlTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTsgXHJcbiAgICAgICAgLy8g5L2/55So5paw55qE5pa55byP542y5Y+WIEZpcmViYXNlTWFuYWdlciDlr6bkvotcclxuICAgICAgICB0aGlzLmZpcmViYXNlTWFuYWdlciA9IEZpcmViYXNlTWFuYWdlci5nZXRGaXJlYmFzZU1hbmFnZXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyZWJhc2VNYW5hZ2VyLmlzRmlyZWJhc2VJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb250aW51ZUJ1dHRvbi5jb21wb25lbnQgPSBcIkxvZ2luXCI7XHJcbiAgICAgICAgY29udGludWVCdXR0b24uaGFuZGxlciA9IFwib25Mb2dpblwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTG9naW4vU3VibWl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29udGludWVCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9naW4oKSB7XHJcbiAgICAgICAgLy8g5qqi5p+l6Ly45YWl5piv5ZCm54K656m6XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL5aGr5a+r5omA5pyJ5qyE5L2NXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmqqLmn6UgZW1haWwg5qC85byPXHJcbiAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuiri+i8uOWFpeacieaViOeahOmbu+WtkOmDteS7tuWcsOWdgFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlmJfoqabnmbvlhaU6XCIsIGVtYWlsKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDkvb/nlKggRmlyZWJhc2VNYW5hZ2VyIOmAsuihjOeZu+WFpVxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VNYW5hZ2VyLmdldEF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvlhaXmiJDlip86XCIsIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVudVBhZ2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIueZu+WFpemMr+iqpDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXV0aC9pbnZhbGlkLWNyZWRlbnRpYWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIuW4s+iZn+aIluWvhueivOmMr+iqpFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXV0aC91c2VyLW5vdC1mb3VuZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi5om+5LiN5Yiw5q2k55So5oi2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdXRoL3dyb25nLXBhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLlr4bnorzpjK/oqqRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWVudVBhZ2UoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTtcclxuICAgIH1cclxufVxyXG4gXHJcbiJdfQ==