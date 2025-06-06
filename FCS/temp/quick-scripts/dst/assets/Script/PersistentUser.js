
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PersistentUser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e072veo3dKyLSIYLFUgQqb', 'PersistentUser');
// Script/PersistentUser.ts

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
var PersistentUser = /** @class */ (function (_super) {
    __extends(PersistentUser, _super);
    function PersistentUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userId = "";
        _this.email = "";
        _this.nickname = "";
        return _this;
    }
    PersistentUser.prototype.onLoad = function () {
        // 避免重複掛 persist node
        if (!cc.game.isPersistRootNode(this.node)) {
            cc.game.addPersistRootNode(this.node);
            cc.log('[PersistentUser] addPersistRootNode');
        }
    };
    PersistentUser.prototype.setUserInfo = function (userId, email, nickname) {
        if (email === void 0) { email = ""; }
        if (nickname === void 0) { nickname = ""; }
        this.userId = userId;
        this.email = email;
        this.nickname = nickname;
        // 也可以同步存本地端
        cc.sys.localStorage.setItem('userId', userId);
        cc.sys.localStorage.setItem('email', email);
        cc.sys.localStorage.setItem('nickname', nickname);
    };
    PersistentUser = __decorate([
        ccclass
    ], PersistentUser);
    return PersistentUser;
}(cc.Component));
exports.default = PersistentUser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGVyc2lzdGVudFVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzQkM7UUFyQlUsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixXQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVEsR0FBVyxFQUFFLENBQUM7O0lBbUJqQyxDQUFDO0lBakJHLCtCQUFNLEdBQU47UUFDSSxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksTUFBYyxFQUFFLEtBQWtCLEVBQUUsUUFBcUI7UUFBekMsc0JBQUEsRUFBQSxVQUFrQjtRQUFFLHlCQUFBLEVBQUEsYUFBcUI7UUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsWUFBWTtRQUNaLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFyQmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FzQmxDO0lBQUQscUJBQUM7Q0F0QkQsQUFzQkMsQ0F0QjJDLEVBQUUsQ0FBQyxTQUFTLEdBc0J2RDtrQkF0Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc2lzdGVudFVzZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBuaWNrbmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g6YG/5YWN6YeN6KSH5o6bIHBlcnNpc3Qgbm9kZVxuICAgICAgICBpZiAoIWNjLmdhbWUuaXNQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKSkge1xuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIGNjLmxvZygnW1BlcnNpc3RlbnRVc2VyXSBhZGRQZXJzaXN0Um9vdE5vZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFVzZXJJbmZvKHVzZXJJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nID0gXCJcIiwgbmlja25hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgICAgICAvLyDkuZ/lj6/ku6XlkIzmraXlrZjmnKzlnLDnq69cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCB1c2VySWQpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25pY2tuYW1lJywgbmlja25hbWUpO1xuICAgIH1cbn0iXX0=