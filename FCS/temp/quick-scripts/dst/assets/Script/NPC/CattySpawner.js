
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NPC/CattySpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTlBDL0NhdHR5U3Bhd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQWdDQztRQTlCRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUc1QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXNCOUIsQ0FBQztJQXBCRyw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTztRQUUvRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FEQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7cURBQ0Y7SUFHNUI7UUFEQyxRQUFRO3VEQUNpQjtJQVJULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnQ2hDO0lBQUQsbUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NyRDtrQkFoQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0dHlTcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcbiAgICBjYXR0eVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Ob2RlXSB9KVxuICAgIHNwYXduUG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNwYXduSW50ZXJ2YWw6IG51bWJlciA9IDY7XG5cbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5zcGF3bkludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3Bhd25DYXR0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Bhd25DYXR0eSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhdHR5UHJlZmFiIHx8IHRoaXMuc3Bhd25Qb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwYXduUG9pbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHNwYXduUG9pbnQgPSB0aGlzLnNwYXduUG9pbnRzW2luZGV4XTtcblxuICAgICAgICBjb25zdCBjYXR0eSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2F0dHlQcmVmYWIpO1xuICAgICAgICBjYXR0eS5zZXRQb3NpdGlvbihzcGF3blBvaW50LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBjYXR0eS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLwn5CxIOeUn+aIkOS4gOmau+mWkuaZg+S4reeahCBDYXR0eVwiKTtcbiAgICB9XG59XG4iXX0=