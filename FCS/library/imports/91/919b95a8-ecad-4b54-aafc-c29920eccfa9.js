"use strict";
cc._RF.push(module, '919b9Wo7K1LVKr8wpkg7M+p', 'CattySpawner');
// Script/NPC/CattySpawner.ts

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
var CattySpawner = /** @class */ (function (_super) {
    __extends(CattySpawner, _super);
    function CattySpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cattyPrefab = null;
        _this.spawnPoints = [];
        _this.spawnInterval = 6;
        _this.timer = 0;
        return _this;
    }
    CattySpawner.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            this.spawnCatty();
        }
    };
    CattySpawner.prototype.spawnCatty = function () {
        if (!this.cattyPrefab || this.spawnPoints.length === 0)
            return;
        var index = Math.floor(Math.random() * this.spawnPoints.length);
        var spawnPoint = this.spawnPoints[index];
        var catty = cc.instantiate(this.cattyPrefab);
        catty.setPosition(spawnPoint.getPosition());
        catty.parent = this.node;
        console.log("🐱 生成一隻閒晃中的 Catty");
    };
    __decorate([
        property({ type: cc.Prefab })
    ], CattySpawner.prototype, "cattyPrefab", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], CattySpawner.prototype, "spawnPoints", void 0);
    __decorate([
        property
    ], CattySpawner.prototype, "spawnInterval", void 0);
    CattySpawner = __decorate([
        ccclass
    ], CattySpawner);
    return CattySpawner;
}(cc.Component));
exports.default = CattySpawner;

cc._RF.pop();