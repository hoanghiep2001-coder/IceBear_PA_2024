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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
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
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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
        this.NodeContainer.Bg_1.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.45;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.Bg_2_1.scale = 0.45;
        this.NodeContainer.Bg_2_1.y = 45;
        this.NodeContainer.Bg_2_1.x = 600;
        this.NodeContainer.Bg_2_2.scale = 0.45;
        this.NodeContainer.Bg_2_2.y = 45;
        this.NodeContainer.Bg_2_2.x = -670;
        constants_1.Constants.Responsive.calculatedX = 155;
        constants_1.Constants.Responsive.calculatedY = 250;
        this.NodeContainer.Step1_Ponny.scale = 0.88;
        this.NodeContainer.Step1_Ponny.y = -210;
        this.NodeContainer.Step2_Ponny.y = -30;
        this.NodeContainer.OptionContainer.scale = 1.1;
        this.NodeContainer.OptionContainer.x = 220;
        this.NodeContainer.OptionContainer.y = 250;
        this.NodeContainer.Flow1_Opt1.x = 0;
        this.NodeContainer.Flow1_Opt1.y = -150;
        this.NodeContainer.Flow1_Opt2.x = 0;
        this.NodeContainer.Flow1_Opt2.y = -290;
        this.NodeContainer.Flow2_Opt1.x = 0;
        this.NodeContainer.Flow2_Opt1.y = -150;
        this.NodeContainer.Flow2_Opt2.x = 0;
        this.NodeContainer.Flow2_Opt2.y = -290;
        this.NodeContainer.Flow3_Opt1.x = 0;
        this.NodeContainer.Flow3_Opt1.y = -150;
        this.NodeContainer.Flow3_Opt2.x = 0;
        this.NodeContainer.Flow3_Opt2.y = -290;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.Bg_1.scale = 0.8;
        this.NodeContainer.Bg_2.scale = 0.4;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        constants_1.Constants.Responsive.calculatedX = 155;
        constants_1.Constants.Responsive.calculatedY = 310;
        this.NodeContainer.Step1_Ponny.scale = 0.85;
        this.NodeContainer.Step1_Ponny.y = -210;
        this.NodeContainer.Step2_Ponny.y = -30;
        this.NodeContainer.OptionContainer.scale = 1.1;
        this.NodeContainer.OptionContainer.x = 220;
        this.NodeContainer.OptionContainer.y = 250;
        this.NodeContainer.Flow1_Opt1.x = 0;
        this.NodeContainer.Flow1_Opt1.y = -150;
        this.NodeContainer.Flow1_Opt2.x = 0;
        this.NodeContainer.Flow1_Opt2.y = -290;
        this.NodeContainer.Flow2_Opt1.x = 0;
        this.NodeContainer.Flow2_Opt1.y = -150;
        this.NodeContainer.Flow2_Opt2.x = 0;
        this.NodeContainer.Flow2_Opt2.y = -290;
        this.NodeContainer.Flow3_Opt1.x = 0;
        this.NodeContainer.Flow3_Opt1.y = -150;
        this.NodeContainer.Flow3_Opt2.x = 0;
        this.NodeContainer.Flow3_Opt2.y = -290;
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
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
        this.NodeContainer.Bg_1.scale = 0.55;
        this.NodeContainer.Bg_2.scale = 0.48;
        this.NodeContainer.Bg_2.y = 45;
        this.NodeContainer.Bg_2.x = -45;
        this.NodeContainer.OptionContainer.scale = 1;
        this.NodeContainer.OptionContainer.x = 0;
        this.NodeContainer.OptionContainer.y = 0;
        this.NodeContainer.Flow1_Opt1.x = -64;
        this.NodeContainer.Flow1_Opt1.y = -220;
        this.NodeContainer.Flow1_Opt2.x = 64;
        this.NodeContainer.Flow1_Opt2.y = -220;
        this.NodeContainer.Flow2_Opt1.x = -64;
        this.NodeContainer.Flow2_Opt1.y = -220;
        this.NodeContainer.Flow2_Opt2.x = 64;
        this.NodeContainer.Flow2_Opt2.y = -220;
        this.NodeContainer.Flow3_Opt1.x = -64;
        this.NodeContainer.Flow3_Opt1.y = -220;
        this.NodeContainer.Flow3_Opt2.x = 64;
        this.NodeContainer.Flow3_Opt2.y = -220;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        // node build-inline.js unity
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                this.NodeContainer.Bg_1.scale = 0.45;
                this.NodeContainer.Bg_2.scale = 0.4;
                this.NodeContainer.Bg_2.y = 45;
                this.NodeContainer.Bg_2.x = -45;
                constants_1.Constants.Responsive.calculatedX = 0;
                constants_1.Constants.Responsive.calculatedY = 0;
                this.NodeContainer.OptionContainer.scale = 0.9;
                this.NodeContainer.OptionContainer.x = 0;
                this.NodeContainer.OptionContainer.y = 0;
                this.NodeContainer.Flow1_Opt1.x = -64;
                this.NodeContainer.Flow1_Opt1.y = -220;
                this.NodeContainer.Flow1_Opt2.x = 64;
                this.NodeContainer.Flow1_Opt2.y = -220;
                this.NodeContainer.Flow2_Opt1.x = -64;
                this.NodeContainer.Flow2_Opt1.y = -220;
                this.NodeContainer.Flow2_Opt2.x = 64;
                this.NodeContainer.Flow2_Opt2.y = -220;
                this.NodeContainer.Flow3_Opt1.x = -64;
                this.NodeContainer.Flow3_Opt1.y = -220;
                this.NodeContainer.Flow3_Opt2.x = 64;
                this.NodeContainer.Flow3_Opt2.y = -220;
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Bg_1.scale = 0.45;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;
            constants_1.Constants.Responsive.calculatedX = 0;
            constants_1.Constants.Responsive.calculatedY = 0;
            this.NodeContainer.OptionContainer.scale = 1;
            this.NodeContainer.OptionContainer.x = 0;
            this.NodeContainer.OptionContainer.y = 0;
            this.NodeContainer.Flow1_Opt1.x = -64;
            this.NodeContainer.Flow1_Opt1.y = -220;
            this.NodeContainer.Flow1_Opt2.x = 64;
            this.NodeContainer.Flow1_Opt2.y = -220;
            this.NodeContainer.Flow2_Opt1.x = -64;
            this.NodeContainer.Flow2_Opt1.y = -220;
            this.NodeContainer.Flow2_Opt2.x = 64;
            this.NodeContainer.Flow2_Opt2.y = -220;
            this.NodeContainer.Flow3_Opt1.x = -64;
            this.NodeContainer.Flow3_Opt1.y = -220;
            this.NodeContainer.Flow3_Opt2.x = 64;
            this.NodeContainer.Flow3_Opt2.y = -220;
        }
        else {
            this.NodeContainer.Bg_1.scale = 0.5;
            this.NodeContainer.Bg_2.scale = 0.4;
            this.NodeContainer.Bg_2.y = 45;
            this.NodeContainer.Bg_2.x = -45;
            constants_1.Constants.Responsive.calculatedX = 20;
            constants_1.Constants.Responsive.calculatedY = 25;
            this.NodeContainer.Step1_Ponny.scale = 0.85;
            this.NodeContainer.Step1_Ponny.y = -210;
            this.NodeContainer.Step2_Ponny.y = 0;
            this.NodeContainer.OptionContainer.scale = 0.85;
            this.NodeContainer.OptionContainer.x = 0;
            this.NodeContainer.OptionContainer.y = 0;
            this.NodeContainer.Flow1_Opt1.x = -64;
            this.NodeContainer.Flow1_Opt1.y = -220;
            this.NodeContainer.Flow1_Opt2.x = 64;
            this.NodeContainer.Flow1_Opt2.y = -220;
            this.NodeContainer.Flow2_Opt1.x = -64;
            this.NodeContainer.Flow2_Opt1.y = -220;
            this.NodeContainer.Flow2_Opt2.x = 64;
            this.NodeContainer.Flow2_Opt2.y = -220;
            this.NodeContainer.Flow3_Opt1.x = -64;
            this.NodeContainer.Flow3_Opt1.y = -220;
            this.NodeContainer.Flow3_Opt2.x = 64;
            this.NodeContainer.Flow3_Opt2.y = -220;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

cc._RF.pop();