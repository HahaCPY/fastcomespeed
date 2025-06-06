"use strict";
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