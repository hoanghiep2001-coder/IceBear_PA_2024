"use strict";
cc._RF.push(module, 'fe46aRT4+tC+aNQcYlNw6Y+', 'SpawnController');
// Script/Controller/SpawnController.ts

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
var constants_1 = require("../Data/constants");
var Army_1 = require("../Other/Army");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpawnController = /** @class */ (function (_super) {
    __extends(SpawnController, _super);
    function SpawnController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Base = null;
        _this.AllyPoints = [];
        _this.EnemyPoints = [];
        _this.Army_Lv1 = null;
        _this.Army_Lv2 = null;
        _this.Army_Lv3 = null;
        _this.Army2_Lv1 = null;
        _this.Army2_Lv2 = null;
        _this.Army2_Lv3 = null;
        _this.enemySpawnTime = 1;
        return _this;
    }
    SpawnController.prototype.start = function () {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        this.spawnTroopsCatchKing();
        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
    };
    SpawnController.prototype.spawnTroopsCatchKing = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 2);
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
        }, 0.5);
    };
    SpawnController.prototype.SpawnEnemies = function () {
        var _this = this;
        this.schedule(function () {
            var random = cc.math.randomRangeInt(1, 3);
            if (constants_1.Constants.isPauseGame)
                return;
            _this.SpawnEnemyArmy(constants_1.Constants.ArmySkin.Enemy, random);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    };
    SpawnController.prototype.SpawnEnemyArmy = function (skin, level) {
        if ((constants_1.Constants.isCanBuyArmyLv3 || constants_1.Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
            console.log("up spawn time");
            this.enemySpawnTime = 1.5;
        }
        var random = cc.math.randomRangeInt(0, 5);
        // create Army
        var newArmy = null;
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
                break;
            default:
                break;
        }
        constants_1.Constants.enemyArmies.push(newArmy);
        // caculate Scale
        newArmy.scaleX = -constants_1.Constants.scaleArmy;
        newArmy.scaleY = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.EnemyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Enemy";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        // console.log("Enemy - Group: " + newArmy.group);
    };
    SpawnController.prototype.SpawnPlayerArmy = function (skin, level) {
        var random = cc.math.randomRangeInt(0, 5);
        var newArmy;
        if (!constants_1.Constants.isUpgrade) {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army_Lv3);
                    break;
                default:
                    break;
            }
        }
        else {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army2_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army2_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army2_Lv3);
                    break;
                default:
                    break;
            }
        }
        // create Army
        constants_1.Constants.allyArmies.push(newArmy);
        console.log("Allies:" + constants_1.Constants.allyArmies.length);
        // caculate Scale
        newArmy.scale = constants_1.Constants.scaleArmy;
        // set Pos
        var point = this.AllyPoints[random];
        var armyComponent = newArmy.getComponent(Army_1.default);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        // set skin & group
        armyComponent.skin = skin;
        // armyComponent.tag = 1;
        newArmy.group = "Ally";
        var spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9;
    };
    __decorate([
        property(cc.Node)
    ], SpawnController.prototype, "Base", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "AllyPoints", void 0);
    __decorate([
        property([cc.Node])
    ], SpawnController.prototype, "EnemyPoints", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army_Lv3", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv1", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv2", void 0);
    __decorate([
        property(cc.Prefab)
    ], SpawnController.prototype, "Army2_Lv3", void 0);
    SpawnController = __decorate([
        ccclass
    ], SpawnController);
    return SpawnController;
}(cc.Component));
exports.default = SpawnController;

cc._RF.pop();