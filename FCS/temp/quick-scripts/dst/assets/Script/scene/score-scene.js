
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/score-scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0f45GVtTlBsaW0SAQ1D0w5', 'score-scene');
// Script/scene/score-scene.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResultScene = /** @class */ (function (_super) {
    __extends(ResultScene, _super);
    function ResultScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.sceneLabel = null; // 拖 UI Label 進來
        _this.resultBgm = null;
        _this.star1Prefab = null;
        _this.star2Prefab = null;
        _this.star3Prefab = null;
        _this.starParent = null;
        _this.char1Node = null;
        _this.char1Frames = []; // 3張圖片
        _this.char2Node = null;
        _this.char2Frames = []; // 3張圖片
        _this.char1FrameIdx = 0;
        _this.char2FrameIdx = 0;
        _this._sceneChanged = false;
        return _this;
    }
    ResultScene.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scorePersistNode, scorePersistScript, score, fromScene, userPersistNode, userScript, userId, username, db, scoreRef, snapshot, oldScore, err_1, starPrefabs, _i, starPrefabs_1, prefab, node;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cc.audioEngine.stopMusic();
                        cc.audioEngine.playMusic(this.resultBgm, true);
                        scorePersistNode = cc.director.getScene().getChildByName('ScorePersist');
                        if (!scorePersistNode) {
                            cc.error('找不到 ScorePersist persist node');
                            return [2 /*return*/];
                        }
                        scorePersistScript = scorePersistNode.getComponent('ScorePersist');
                        score = scorePersistScript.score || 0;
                        fromScene = scorePersistScript.fromScene || '';
                        userPersistNode = cc.director.getScene().getChildByName('PersistentUser');
                        if (!!userPersistNode) return [3 /*break*/, 1];
                        cc.warn('找不到 PersistentUser persist node，無法同步分數');
                        return [3 /*break*/, 10];
                    case 1:
                        userScript = userPersistNode.getComponent('PersistentUser');
                        userId = userScript.userId;
                        username = userScript.nickname || "";
                        if (!userId) return [3 /*break*/, 9];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 8]);
                        db = firebase.database();
                        scoreRef = db.ref("scores/" + userId);
                        return [4 /*yield*/, scoreRef.once("value")];
                    case 3:
                        snapshot = _a.sent();
                        oldScore = snapshot.val() ? snapshot.val().score : 0;
                        if (!(score > oldScore)) return [3 /*break*/, 5];
                        return [4 /*yield*/, scoreRef.set({
                                score: score,
                                scene: fromScene,
                                username: username // <== 寫入 username
                            })];
                    case 4:
                        _a.sent();
                        cc.log("分數已刷新到 Firebase");
                        return [3 /*break*/, 6];
                    case 5:
                        cc.log("分數未刷新（未超過舊分數）");
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        err_1 = _a.sent();
                        cc.error("Firebase 更新分數失敗", err_1);
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        cc.warn("userId 尚未設定，無法同步分數");
                        _a.label = 10;
                    case 10:
                        // 顯示分數
                        if (this.scoreLabel) {
                            this.scoreLabel.string = "" + score;
                        }
                        // 顯示來源場景名稱
                        if (this.sceneLabel) {
                            this.sceneLabel.string = fromScene;
                        }
                        starPrefabs = [];
                        if (score >= 500) {
                            starPrefabs = [this.star3Prefab, this.star2Prefab, this.star1Prefab];
                        }
                        else if (score >= 200) {
                            starPrefabs = [this.star2Prefab, this.star1Prefab];
                        }
                        else if (score >= 50) {
                            starPrefabs = [this.star1Prefab];
                        }
                        // 實例化並顯示
                        if (this.starParent) {
                            for (_i = 0, starPrefabs_1 = starPrefabs; _i < starPrefabs_1.length; _i++) {
                                prefab = starPrefabs_1[_i];
                                if (prefab) {
                                    node = cc.instantiate(prefab);
                                    this.starParent.addChild(node);
                                }
                            }
                        }
                        this.schedule(this.updateCharFrames, 0.25);
                        // 1. 註冊空白鍵監聽
                        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                        // 2. 十秒自動跳場景
                        this.scheduleOnce(function () {
                            _this.gotoMenu();
                        }, 10);
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultScene.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    ResultScene.prototype.onKeyDown = function (event) {
        // 空白鍵是 cc.macro.KEY.space
        if (event.keyCode === cc.macro.KEY.space) {
            this.gotoMenu();
        }
    };
    ResultScene.prototype.gotoMenu = function () {
        if (this._sceneChanged)
            return;
        this._sceneChanged = true;
        cc.director.loadScene('selectScene'); // 你的主選單場景名
    };
    ResultScene.prototype.updateCharFrames = function () {
        // 角色1
        if (this.char1Node && this.char1Frames.length > 0) {
            var sprite1 = this.char1Node.getComponent(cc.Sprite);
            if (sprite1) {
                sprite1.spriteFrame = this.char1Frames[this.char1FrameIdx];
                this.char1FrameIdx = (this.char1FrameIdx + 1) % this.char1Frames.length;
            }
        }
        // 角色2
        if (this.char2Node && this.char2Frames.length > 0) {
            var sprite2 = this.char2Node.getComponent(cc.Sprite);
            if (sprite2) {
                sprite2.spriteFrame = this.char2Frames[this.char2FrameIdx];
                this.char2FrameIdx = (this.char2FrameIdx + 1) % this.char2Frames.length;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], ResultScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], ResultScene.prototype, "sceneLabel", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], ResultScene.prototype, "resultBgm", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], ResultScene.prototype, "star1Prefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], ResultScene.prototype, "star2Prefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], ResultScene.prototype, "star3Prefab", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ResultScene.prototype, "starParent", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ResultScene.prototype, "char1Node", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], ResultScene.prototype, "char1Frames", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ResultScene.prototype, "char2Node", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], ResultScene.prototype, "char2Frames", void 0);
    ResultScene = __decorate([
        ccclass
    ], ResultScene);
    return ResultScene;
}(cc.Component));
exports.default = ResultScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NlbmUvc2NvcmUtc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrS0M7UUFoS0csZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUMsQ0FBRSxnQkFBZ0I7UUFHOUMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFxQixFQUFFLENBQUMsQ0FBRyxPQUFPO1FBRzdDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBcUIsRUFBRSxDQUFDLENBQUcsT0FBTztRQUVyQyxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUFnSWxDLENBQUM7SUE5SFMsMkJBQUssR0FBWDs7Ozs7Ozt3QkFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUd6QyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3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QUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2tEQUNGO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvREFDQTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7b0RBQ0E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO29EQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzttREFDRDtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7a0RBQ0Y7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztvREFDRjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7a0RBQ0Y7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztvREFDRjtJQTlCbEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtLL0I7SUFBRCxrQkFBQztDQWxLRCxBQWtLQyxDQWxLd0MsRUFBRSxDQUFDLFNBQVMsR0FrS3BEO2tCQWxLb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY2VuZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7ICAvLyDmi5YgVUkgTGFiZWwg6YCy5L6GXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICByZXN1bHRCZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcbiAgICBzdGFyMVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiB9KVxuICAgIHN0YXIyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiIH0pXG4gICAgc3RhcjNQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlIH0pXG4gICAgc3RhclBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlIH0pXG4gICAgY2hhcjFOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdIH0pXG4gICAgY2hhcjFGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTsgICAvLyAz5by15ZyW54mHXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlIH0pXG4gICAgY2hhcjJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdIH0pXG4gICAgY2hhcjJGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTsgICAvLyAz5by15ZyW54mHXG5cbiAgICBwcml2YXRlIGNoYXIxRnJhbWVJZHggPSAwO1xuICAgIHByaXZhdGUgY2hhcjJGcmFtZUlkeCA9IDA7XG4gICAgcHJpdmF0ZSBfc2NlbmVDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnJlc3VsdEJnbSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8g5ou/5YiG5pW45ZKM5L6G5rqQ5aC05pmvXG4gICAgICAgIGNvbnN0IHNjb3JlUGVyc2lzdE5vZGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdTY29yZVBlcnNpc3QnKTtcbiAgICAgICAgaWYgKCFzY29yZVBlcnNpc3ROb2RlKSB7XG4gICAgICAgICAgICBjYy5lcnJvcign5om+5LiN5YiwIFNjb3JlUGVyc2lzdCBwZXJzaXN0IG5vZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY29yZVBlcnNpc3RTY3JpcHQgPSBzY29yZVBlcnNpc3ROb2RlLmdldENvbXBvbmVudCgnU2NvcmVQZXJzaXN0Jyk7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gc2NvcmVQZXJzaXN0U2NyaXB0LnNjb3JlIHx8IDA7XG4gICAgICAgIGNvbnN0IGZyb21TY2VuZSA9IHNjb3JlUGVyc2lzdFNjcmlwdC5mcm9tU2NlbmUgfHwgJyc7XG5cbiAgICAgICAgLy8g5ou/IHVzZXJJZFxuICAgICAgICBjb25zdCB1c2VyUGVyc2lzdE5vZGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdQZXJzaXN0ZW50VXNlcicpO1xuICAgICAgICBpZiAoIXVzZXJQZXJzaXN0Tm9kZSkge1xuICAgICAgICAgICAgY2Mud2Fybign5om+5LiN5YiwIFBlcnNpc3RlbnRVc2VyIHBlcnNpc3Qgbm9kZe+8jOeEoeazleWQjOatpeWIhuaVuCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdXNlclNjcmlwdCA9IHVzZXJQZXJzaXN0Tm9kZS5nZXRDb21wb25lbnQoJ1BlcnNpc3RlbnRVc2VyJyk7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSB1c2VyU2NyaXB0LnVzZXJJZDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlclNjcmlwdC5uaWNrbmFtZSB8fCBcIlwiOyAvLyA8LS0g6YCZ6KOhXG5cbiAgICAgICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlUmVmID0gZGIucmVmKGBzY29yZXMvJHt1c2VySWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgc2NvcmVSZWYub25jZShcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRTY29yZSA9IHNuYXBzaG90LnZhbCgpID8gc25hcHNob3QudmFsKCkuc2NvcmUgOiAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPiBvbGRTY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2NvcmVSZWYuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogZnJvbVNjZW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lICAgIC8vIDw9PSDlr6vlhaUgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5YiG5pW45bey5Yi35paw5YiwIEZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5YiG5pW45pyq5Yi35paw77yI5pyq6LaF6YGO6IiK5YiG5pW477yJXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmlyZWJhc2Ug5pu05paw5YiG5pW45aSx5pWXXCIsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwidXNlcklkIOWwmuacquioreWumu+8jOeEoeazleWQjOatpeWIhuaVuFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8g6aGv56S65YiG5pW4XG4gICAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHtzY29yZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6aGv56S65L6G5rqQ5aC05pmv5ZCN56ixXG4gICAgICAgIGlmICh0aGlzLnNjZW5lTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVMYWJlbC5zdHJpbmcgPSBmcm9tU2NlbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmk5rliIbmlbjpoa/npLogbiDpoYbmmJ9cbiAgICAgICAgbGV0IHN0YXJQcmVmYWJzID0gW107XG4gICAgICAgIGlmIChzY29yZSA+PSA1MDApIHtcbiAgICAgICAgICAgIHN0YXJQcmVmYWJzID0gW3RoaXMuc3RhcjNQcmVmYWIsIHRoaXMuc3RhcjJQcmVmYWIsIHRoaXMuc3RhcjFQcmVmYWJdO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID49IDIwMCkge1xuICAgICAgICAgICAgc3RhclByZWZhYnMgPSBbdGhpcy5zdGFyMlByZWZhYiwgdGhpcy5zdGFyMVByZWZhYl07XG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPj0gNTApIHtcbiAgICAgICAgICAgIHN0YXJQcmVmYWJzID0gW3RoaXMuc3RhcjFQcmVmYWJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a+m5L6L5YyW5Lim6aGv56S6XG4gICAgICAgIGlmICh0aGlzLnN0YXJQYXJlbnQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByZWZhYiBvZiBzdGFyUHJlZmFicykge1xuICAgICAgICAgICAgICAgIGlmIChwcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhclBhcmVudC5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ2hhckZyYW1lcywgMC4yNSk7XG5cbiAgICAgICAgLy8gMS4g6Ki75YaK56m655m96Y2155uj6IG9XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuXG4gICAgICAgIC8vIDIuIOWNgeenkuiHquWLlei3s+WgtOaZr1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvdG9NZW51KCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICAvLyDnqbrnmb3pjbXmmK8gY2MubWFjcm8uS0VZLnNwYWNlXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZ290b01lbnUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvdG9NZW51KCkge1xuICAgICAgICBpZiAodGhpcy5fc2NlbmVDaGFuZ2VkKSByZXR1cm47XG4gICAgICAgIHRoaXMuX3NjZW5lQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2VsZWN0U2NlbmUnKTsgIC8vIOS9oOeahOS4u+mBuOWWruWgtOaZr+WQjVxuICAgIH1cblxuICAgIHVwZGF0ZUNoYXJGcmFtZXMoKSB7XG4gICAgICAgIC8vIOinkuiJsjFcbiAgICAgICAgaWYgKHRoaXMuY2hhcjFOb2RlICYmIHRoaXMuY2hhcjFGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZTEgPSB0aGlzLmNoYXIxTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChzcHJpdGUxKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlMS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjFGcmFtZXNbdGhpcy5jaGFyMUZyYW1lSWR4XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIxRnJhbWVJZHggPSAodGhpcy5jaGFyMUZyYW1lSWR4ICsgMSkgJSB0aGlzLmNoYXIxRnJhbWVzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOinkuiJsjJcbiAgICAgICAgaWYgKHRoaXMuY2hhcjJOb2RlICYmIHRoaXMuY2hhcjJGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZTIgPSB0aGlzLmNoYXIyTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChzcHJpdGUyKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlMi5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhcjJGcmFtZXNbdGhpcy5jaGFyMkZyYW1lSWR4XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXIyRnJhbWVJZHggPSAodGhpcy5jaGFyMkZyYW1lSWR4ICsgMSkgJSB0aGlzLmNoYXIyRnJhbWVzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==