"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var GamePlay_1 = require("../Controller/GamePlay");
var NodesContainer_1 = require("../Controller/NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesContainer = null;
        _this.GamePlay = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.NodesContainer.logo.active = true;
        this.NodesContainer.icon.active = true;
        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.55;
        this.NodesContainer.background_1.scale = 0.45;
        this.NodesContainer.background_1.y = 95;
        this.NodesContainer.background_3.scale = 0.55;
        this.NodesContainer.doll_scene3.x = -115;
        this.NodesContainer.doll_scene3.scale = 0.35;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -10;
        this.NodesContainer.CTA_btn.y = -160;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 50;
        this.NodesContainer.items[0].scale = 0.9;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = -90;
        this.NodesContainer.items[1].scale = 0.9;
        this.NodesContainer.items[2].x = 230;
        this.NodesContainer.items[2].y = -90;
        this.NodesContainer.items[2].scale = 0.9;
        this.NodesContainer.items[3].x = 230;
        this.NodesContainer.items[3].y = 50;
        this.NodesContainer.items[3].scale = 0.9;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;
        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.45;
        this.NodesContainer.background_1.scale = 0.3;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.38;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = 0;
        this.NodesContainer.CTA_btn.y = -160;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;
        this.NodesContainer.background_2_hor.active = false;
        this.NodesContainer.background_2_ver.active = true;
        this.NodesContainer.background_2_ver.scale = 0.4;
        this.NodesContainer.background_1.scale = 0.4;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.45;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = -30;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -20;
        this.NodesContainer.CTA_btn.y = -160;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        this.NodesContainer.logo.active = false;
        this.NodesContainer.icon.active = false;
        this.NodesContainer.doll_scene3.x = -75;
        this.NodesContainer.doll_scene3.scale = 0.32;
        this.NodesContainer.items[0].x = 85;
        this.NodesContainer.items[0].y = 130;
        this.NodesContainer.items[0].scale = 0.65;
        this.NodesContainer.items[1].x = 85;
        this.NodesContainer.items[1].y = 30;
        this.NodesContainer.items[1].scale = 0.65;
        this.NodesContainer.items[2].x = 85;
        this.NodesContainer.items[2].y = -70;
        this.NodesContainer.items[2].scale = 0.65;
        this.NodesContainer.items[3].x = 85;
        this.NodesContainer.items[3].y = -170;
        this.NodesContainer.items[3].scale = 0.65;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodesContainer.background_2_hor.active = false;
            this.NodesContainer.background_2_ver.active = true;
            this.NodesContainer.background_2_ver.scale = 0.3;
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 0;
            this.NodesContainer.background_3.scale = 0.3;
            this.NodesContainer.adultery.scale = 0.55;
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 0;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -160;
        }
        else {
            this.NodesContainer.background_2_hor.active = true;
            this.NodesContainer.background_2_ver.active = false;
            this.NodesContainer.background_2_hor.scale = 0.45;
            // this.NodesContainer.background_2_ver.scale = 0.3;
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 20;
            this.NodesContainer.background_3.scale = 0.38;
            this.NodesContainer.adultery.scale = 0.65;
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 20;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -160;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], Responsive.prototype, "NodesContainer", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

cc._RF.pop();