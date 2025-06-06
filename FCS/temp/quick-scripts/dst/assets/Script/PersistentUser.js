
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQZXJzaXN0ZW50VXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXNCQztRQXJCVSxZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7SUFtQmpDLENBQUM7SUFqQkcsK0JBQU0sR0FBTjtRQUNJLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxNQUFjLEVBQUUsS0FBa0IsRUFBRSxRQUFxQjtRQUF6QyxzQkFBQSxFQUFBLFVBQWtCO1FBQUUseUJBQUEsRUFBQSxhQUFxQjtRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixZQUFZO1FBQ1osRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXJCZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNCbEM7SUFBRCxxQkFBQztDQXRCRCxBQXNCQyxDQXRCMkMsRUFBRSxDQUFDLFNBQVMsR0FzQnZEO2tCQXRCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50VXNlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDpgb/lhY3ph43opIfmjpsgcGVyc2lzdCBub2RlXHJcbiAgICAgICAgaWYgKCFjYy5nYW1lLmlzUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgY2MubG9nKCdbUGVyc2lzdGVudFVzZXJdIGFkZFBlcnNpc3RSb290Tm9kZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySW5mbyh1c2VySWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyA9IFwiXCIsIG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgICAgICAvLyDkuZ/lj6/ku6XlkIzmraXlrZjmnKzlnLDnq69cclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHVzZXJJZCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25pY2tuYW1lJywgbmlja25hbWUpO1xyXG4gICAgfVxyXG59Il19