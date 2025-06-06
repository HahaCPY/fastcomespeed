
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L0xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLHFEQUFnRDtBQUdoRDtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXFFQztRQXBFVyxxQkFBZSxHQUFvQixJQUFJLENBQUM7O0lBb0VwRCxDQUFDO0lBbEVHLHFCQUFLLEdBQUw7UUFDSyxvQ0FBb0M7UUFDckMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzNDLE9BQU87U0FDVjtRQUVELElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsY0FBYyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDbkMsY0FBYyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFFbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUFBLGlCQTRDQztRQTNDRyxXQUFXO1FBQ1gsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzVFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVsRixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCxjQUFjO1FBQ2QsSUFBTSxVQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDckUsSUFBSSxDQUFDLFVBQUMsY0FBYztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhELG9CQUFvQjtZQUNwQixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksV0FBVyxFQUFFO2dCQUNiLElBQU0sZUFBYSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDakUsK0JBQStCO2dCQUMvQixLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUNuRixJQUFJLENBQUMsVUFBQyxRQUFRO29CQUNYLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzFGLGVBQWEsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3hGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQztvQkFDSCxlQUFhLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsRixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXBFZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXFFekI7SUFBRCxZQUFDO0NBckVELEFBcUVDLENBckVrQyxFQUFFLENBQUMsU0FBUyxHQXFFOUM7a0JBckVvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgRmlyZWJhc2VNYW5hZ2VyIGZyb20gJy4vRmlyZWJhc2VNYW5hZ2VyJztcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGZpcmViYXNlTWFuYWdlcjogRmlyZWJhc2VNYW5hZ2VyID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nXCIpOyBcbiAgICAgICAgLy8g5L2/55So5paw55qE5pa55byP542y5Y+WIEZpcmViYXNlTWFuYWdlciDlr6bkvotcbiAgICAgICAgdGhpcy5maXJlYmFzZU1hbmFnZXIgPSBGaXJlYmFzZU1hbmFnZXIuZ2V0RmlyZWJhc2VNYW5hZ2VyKCk7XG4gICAgICAgIGlmICghdGhpcy5maXJlYmFzZU1hbmFnZXIuaXNGaXJlYmFzZUluaXRpYWxpemVkKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaXJlYmFzZSBub3QgaW5pdGlhbGl6ZWQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY29udGludWVCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5jb21wb25lbnQgPSBcIkxvZ2luXCI7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmhhbmRsZXIgPSBcIm9uTG9naW5cIjtcbiAgICAgICAgXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTG9naW4vU3VibWl0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29udGludWVCdXR0b24pO1xuICAgIH1cblxuICAgIG9uTG9naW4oKSB7XG4gICAgICAgIC8vIOaqouafpei8uOWFpeaYr+WQpueCuuepulxuICAgICAgICBjb25zdCBlbWFpbCA9IGNjLmZpbmQoXCJDYW52YXMvTG9naW4vRW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XG5cbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwi6KuL5aGr5a+r5omA5pyJ5qyE5L2NXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qqi5p+lIGVtYWlsIOagvOW8j1xuICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgICAgYWxlcnQoXCLoq4vovLjlhaXmnInmlYjnmoTpm7vlrZDpg7Xku7blnLDlnYBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIuWYl+ippueZu+WFpTpcIiwgZW1haWwpO1xuICAgICAgICBcbiAgICAgICAgLy8g5L2/55SoIEZpcmViYXNlTWFuYWdlciDpgLLooYznmbvlhaVcbiAgICAgICAgdGhpcy5maXJlYmFzZU1hbmFnZXIuZ2V0QXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvlhaXmiJDlip86XCIsIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWwpO1xuXG4gICAgICAgICAgICAvLyDlrZjliLAgUGVyc2lzdGVudFVzZXJcbiAgICAgICAgICAgIGNvbnN0IHBlcnNpc3ROb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnUGVyc2lzdGVudFVzZXInKTtcbiAgICAgICAgICAgIGlmIChwZXJzaXN0Tm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RTY3JpcHQgPSBwZXJzaXN0Tm9kZS5nZXRDb21wb25lbnQoJ1BlcnNpc3RlbnRVc2VyJyk7XG4gICAgICAgICAgICAgICAgLy8g5Y+W5b6XIG5pY2tuYW1lIOmcgOW+niBmaXJlYmFzZSBkYiDmipNcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlTWFuYWdlci5nZXREYXRhYmFzZSgpLnJlZigndXNlcnMvJyArIHVzZXJDcmVkZW50aWFsLnVzZXIudWlkKS5vbmNlKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbmlja25hbWUgPSBzbmFwc2hvdC52YWwoKSAmJiBzbmFwc2hvdC52YWwoKS5uaWNrbmFtZSA/IHNuYXBzaG90LnZhbCgpLm5pY2tuYW1lIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RTY3JpcHQuc2V0VXNlckluZm8odXNlckNyZWRlbnRpYWwudXNlci51aWQsIHVzZXJDcmVkZW50aWFsLnVzZXIuZW1haWwsIG5pY2tuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lbnVQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0U2NyaXB0LnNldFVzZXJJbmZvKHVzZXJDcmVkZW50aWFsLnVzZXIudWlkLCB1c2VyQ3JlZGVudGlhbC51c2VyLmVtYWlsLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lbnVQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLmib7kuI3liLAgUGVyc2lzdGVudFVzZXIgcGVyc2lzdCBub2Rl77yBXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lbnVQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRNZW51UGFnZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1wiKTtcbiAgICB9XG59XG4gXG4iXX0=