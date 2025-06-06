
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResultScene = /** @class */ (function (_super) {
    __extends(ResultScene, _super);
    function ResultScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.sceneLabel = null; // <== 新增，拖 UI Label 進來
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
        return _this;
    }
    ResultScene.prototype.start = function () {
        // 取得 persist node
        var persistNode = cc.director.getScene().getChildByName('ScorePersist');
        if (!persistNode) {
            cc.error('找不到 ScorePersist persist node');
            return;
        }
        var persistScript = persistNode.getComponent('ScorePersist');
        var score = persistScript.score || 0;
        var fromScene = persistScript.fromScene || '';
        // 顯示分數
        if (this.scoreLabel) {
            this.scoreLabel.string = "" + score;
        }
        // 顯示來源場景名稱
        if (this.sceneLabel) {
            this.sceneLabel.string = fromScene;
        }
        // 根據分數顯示 n 顆星
        var starPrefabs = [];
        if (score >= 150) {
            starPrefabs = [this.star3Prefab, this.star2Prefab, this.star1Prefab];
        }
        else if (score >= 100) {
            starPrefabs = [this.star2Prefab, this.star1Prefab];
        }
        else if (score > 60) {
            starPrefabs = [this.star1Prefab];
        }
        // 實例化並顯示
        if (this.starParent) {
            for (var _i = 0, starPrefabs_1 = starPrefabs; _i < starPrefabs_1.length; _i++) {
                var prefab = starPrefabs_1[_i];
                if (prefab) {
                    var node = cc.instantiate(prefab);
                    this.starParent.addChild(node);
                }
            }
        }
        this.schedule(this.updateCharFrames, 0.25);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NlbmUvc2NvcmUtc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE4RkM7UUE1RkcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUMsQ0FBRSx1QkFBdUI7UUFHckQsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFxQixFQUFFLENBQUMsQ0FBRyxPQUFPO1FBRzdDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBcUIsRUFBRSxDQUFDLENBQUcsT0FBTztRQUVyQyxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUFnRTlCLENBQUM7SUE5REcsMkJBQUssR0FBTDtRQUNJLGtCQUFrQjtRQUNsQixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDVjtRQUNELElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdkMs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TSxFQUFFLENBQUM7b0RBQ0E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO29EQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvREFDQTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7bURBQ0Q7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2tEQUNGO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7b0RBQ0Y7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2tEQUNGO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7b0RBQ0Y7SUEzQmxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Ri9CO0lBQUQsa0JBQUM7Q0E5RkQsQUE4RkMsQ0E5RndDLEVBQUUsQ0FBQyxTQUFTLEdBOEZwRDtrQkE5Rm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc2NlbmVMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAgLy8gPD09IOaWsOWinu+8jOaLliBVSSBMYWJlbCDpgLLkvoZcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiB9KVxuICAgIHN0YXIxUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiIH0pXG4gICAgc3RhcjJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcbiAgICBzdGFyM1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcbiAgICBzdGFyUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcbiAgICBjaGFyMU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0gfSlcbiAgICBjaGFyMUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdOyAgIC8vIDPlvLXlnJbniYdcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcbiAgICBjaGFyMk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0gfSlcbiAgICBjaGFyMkZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdOyAgIC8vIDPlvLXlnJbniYdcblxuICAgIHByaXZhdGUgY2hhcjFGcmFtZUlkeCA9IDA7XG4gICAgcHJpdmF0ZSBjaGFyMkZyYW1lSWR4ID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyDlj5blvpcgcGVyc2lzdCBub2RlXG4gICAgICAgIGNvbnN0IHBlcnNpc3ROb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnU2NvcmVQZXJzaXN0Jyk7XG4gICAgICAgIGlmICghcGVyc2lzdE5vZGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKCfmib7kuI3liLAgU2NvcmVQZXJzaXN0IHBlcnNpc3Qgbm9kZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBlcnNpc3RTY3JpcHQgPSBwZXJzaXN0Tm9kZS5nZXRDb21wb25lbnQoJ1Njb3JlUGVyc2lzdCcpO1xuICAgICAgICBjb25zdCBzY29yZSA9IHBlcnNpc3RTY3JpcHQuc2NvcmUgfHwgMDtcbiAgICAgICAgY29uc3QgZnJvbVNjZW5lID0gcGVyc2lzdFNjcmlwdC5mcm9tU2NlbmUgfHwgJyc7XG5cbiAgICAgICAgLy8g6aGv56S65YiG5pW4XG4gICAgICAgIGlmICh0aGlzLnNjb3JlTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBgJHtzY29yZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6aGv56S65L6G5rqQ5aC05pmv5ZCN56ixXG4gICAgICAgIGlmICh0aGlzLnNjZW5lTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVMYWJlbC5zdHJpbmcgPSBmcm9tU2NlbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmk5rliIbmlbjpoa/npLogbiDpoYbmmJ9cbiAgICAgICAgbGV0IHN0YXJQcmVmYWJzID0gW107XG4gICAgICAgIGlmIChzY29yZSA+PSAxNTApIHtcbiAgICAgICAgICAgIHN0YXJQcmVmYWJzID0gW3RoaXMuc3RhcjNQcmVmYWIsIHRoaXMuc3RhcjJQcmVmYWIsIHRoaXMuc3RhcjFQcmVmYWJdO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID49IDEwMCkge1xuICAgICAgICAgICAgc3RhclByZWZhYnMgPSBbdGhpcy5zdGFyMlByZWZhYiwgdGhpcy5zdGFyMVByZWZhYl07XG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPiA2MCkge1xuICAgICAgICAgICAgc3RhclByZWZhYnMgPSBbdGhpcy5zdGFyMVByZWZhYl07XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlr6bkvovljJbkuKbpoa/npLpcbiAgICAgICAgaWYgKHRoaXMuc3RhclBhcmVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJlZmFiIG9mIHN0YXJQcmVmYWJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFyUGFyZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDaGFyRnJhbWVzLCAwLjI1KTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFyRnJhbWVzKCkge1xuICAgICAgICAvLyDop5LoibIxXG4gICAgICAgIGlmICh0aGlzLmNoYXIxTm9kZSAmJiB0aGlzLmNoYXIxRnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGUxID0gdGhpcy5jaGFyMU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlMSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZTEuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXIxRnJhbWVzW3RoaXMuY2hhcjFGcmFtZUlkeF07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyMUZyYW1lSWR4ID0gKHRoaXMuY2hhcjFGcmFtZUlkeCArIDEpICUgdGhpcy5jaGFyMUZyYW1lcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6KeS6ImyMlxuICAgICAgICBpZiAodGhpcy5jaGFyMk5vZGUgJiYgdGhpcy5jaGFyMkZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlMiA9IHRoaXMuY2hhcjJOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZTIpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyMkZyYW1lc1t0aGlzLmNoYXIyRnJhbWVJZHhdO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcjJGcmFtZUlkeCA9ICh0aGlzLmNoYXIyRnJhbWVJZHggKyAxKSAlIHRoaXMuY2hhcjJGcmFtZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19