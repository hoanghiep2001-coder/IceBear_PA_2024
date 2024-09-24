"use strict";
cc._RF.push(module, '45e6egENJdLKbk97qqcdFTy', 'NeutrinoEffect_Sparks burst');
// neutrinoparticles/components/NeutrinoEffect_Sparks burst.ts

"use strict";
// !!! This file is generated by NeutrinoParticles extension package.
// !!! Don't modify it manually.
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
var NeutrinoEffect = require("../exported_effects/Sparks burst.js");
var textures_1 = require("../textures");
var NeutrinoComponent_1 = require("NeutrinoComponent");
var NeutrinoAssembler_1 = require("NeutrinoAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus, menu = _a.menu;
var NeutrinoEffectComponent = /** @class */ (function (_super) {
    __extends(NeutrinoEffectComponent, _super);
    function NeutrinoEffectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeutrinoEffectComponent.prototype.getEffectClass = function () { return NeutrinoEffect; };
    NeutrinoEffectComponent.prototype.getTexturesDatabase = function () { return textures_1.default; };
    NeutrinoEffectComponent = __decorate([
        ccclass,
        executeInEditMode,
        playOnFocus,
        menu('i18n:MAIN_MENU.component.renderers/NeutrinoComponent/Sparks burst')
    ], NeutrinoEffectComponent);
    return NeutrinoEffectComponent;
}(NeutrinoComponent_1.default));
exports.default = NeutrinoEffectComponent;
cc.Assembler.register(NeutrinoEffectComponent, NeutrinoAssembler_1.default);

cc._RF.pop();