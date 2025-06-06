
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/script/ShowImageOnPlane.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5fb8gzmbZFAIkc+ZmPjljF', 'ShowImageOnPlane');
// Script/script/ShowImageOnPlane.ts

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
// ShowImageOnPlane.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShowImageOnPlane = /** @class */ (function (_super) {
    __extends(ShowImageOnPlane, _super);
    function ShowImageOnPlane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texture = null;
        return _this;
    }
    ShowImageOnPlane.prototype.start = function () {
        var _this = this;
        // 若未指定，則動態加載
        if (!this.texture) {
            cc.loader.loadRes("background/brickWall", cc.Texture2D, function (err, tex) {
                if (err) {
                    cc.error("載入圖片失敗", err);
                    return;
                }
                _this.applyTexture(tex);
            });
        }
        else {
            this.applyTexture(this.texture);
        }
    };
    ShowImageOnPlane.prototype.applyTexture = function (tex) {
        var meshRenderer = this.node.getComponent(cc.MeshRenderer);
        if (!meshRenderer) {
            cc.error("本節點沒有 MeshRenderer 組件！");
            return;
        }
        // 取得材質
        var material = meshRenderer.getMaterial(0);
        if (!material) {
            cc.error("MeshRenderer 沒有材質！");
            return;
        }
        // 設定貼圖，Unlit 材質屬性名稱是 texture
        material.setProperty("texture", tex);
        meshRenderer.setMaterial(0, material);
    };
    __decorate([
        property({ type: cc.Texture2D })
    ], ShowImageOnPlane.prototype, "texture", void 0);
    ShowImageOnPlane = __decorate([
        ccclass
    ], ShowImageOnPlane);
    return ShowImageOnPlane;
}(cc.Component));
exports.default = ShowImageOnPlane;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvc2NyaXB0L1Nob3dJbWFnZU9uUGxhbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ2hCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBbUNDO1FBakNHLGFBQU8sR0FBaUIsSUFBSSxDQUFDOztJQWlDakMsQ0FBQztJQS9CRyxnQ0FBSyxHQUFMO1FBQUEsaUJBYUM7UUFaRyxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQWlCO2dCQUMzRSxJQUFJLEdBQUcsRUFBRTtvQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDeEIsT0FBTztpQkFDVjtnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxHQUFpQjtRQUMxQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1Y7UUFDRCxPQUFPO1FBQ1AsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQy9CLE9BQU87U0FDVjtRQUNELDZCQUE2QjtRQUM3QixRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztxREFDSjtJQUZaLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbUNwQztJQUFELHVCQUFDO0NBbkNELEFBbUNDLENBbkM2QyxFQUFFLENBQUMsU0FBUyxHQW1DekQ7a0JBbkNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaG93SW1hZ2VPblBsYW5lLnRzXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd0ltYWdlT25QbGFuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuVGV4dHVyZTJEIH0pXG4gICAgdGV4dHVyZTogY2MuVGV4dHVyZTJEID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyDoi6XmnKrmjIflrprvvIzliYfli5XmhYvliqDovIlcbiAgICAgICAgaWYgKCF0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYmFja2dyb3VuZC9icmlja1dhbGxcIiwgY2MuVGV4dHVyZTJELCAoZXJyLCB0ZXg6IGNjLlRleHR1cmUyRCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLovInlhaXlnJbniYflpLHmlZdcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VGV4dHVyZSh0ZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5VGV4dHVyZSh0aGlzLnRleHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwbHlUZXh0dXJlKHRleDogY2MuVGV4dHVyZTJEKSB7XG4gICAgICAgIGNvbnN0IG1lc2hSZW5kZXJlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWVzaFJlbmRlcmVyKTtcbiAgICAgICAgaWYgKCFtZXNoUmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5pys56+A6bue5rKS5pyJIE1lc2hSZW5kZXJlciDntYTku7bvvIFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+W5b6X5p2Q6LOqXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbWVzaFJlbmRlcmVyLmdldE1hdGVyaWFsKDApO1xuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIk1lc2hSZW5kZXJlciDmspLmnInmnZDos6rvvIFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g6Kit5a6a6LK85ZyW77yMVW5saXQg5p2Q6LOq5bGs5oCn5ZCN56ix5pivIHRleHR1cmVcbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJ0ZXh0dXJlXCIsIHRleCk7XG4gICAgICAgIG1lc2hSZW5kZXJlci5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgfVxufVxuIl19