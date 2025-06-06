"use strict";
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