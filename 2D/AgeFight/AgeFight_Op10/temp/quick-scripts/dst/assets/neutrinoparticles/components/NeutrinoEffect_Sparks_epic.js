
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/components/NeutrinoEffect_Sparks_epic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdd545RSuZF7oFlt6Q9aACj', 'NeutrinoEffect_Sparks_epic');
// neutrinoparticles/components/NeutrinoEffect_Sparks_epic.ts

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
var NeutrinoEffect = require("../exported_effects/Sparks_epic.js");
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
        menu('i18n:MAIN_MENU.component.renderers/NeutrinoComponent/Sparks_epic')
    ], NeutrinoEffectComponent);
    return NeutrinoEffectComponent;
}(NeutrinoComponent_1.default));
exports.default = NeutrinoEffectComponent;
cc.Assembler.register(NeutrinoEffectComponent, NeutrinoAssembler_1.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGNvbXBvbmVudHNcXE5ldXRyaW5vRWZmZWN0X1NwYXJrc19lcGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDckUsZ0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsbUVBQXFFO0FBQ3JFLHdDQUFtQztBQUNuQyx1REFBa0Q7QUFDbEQsdURBQWtEO0FBRTVDLElBQUEsS0FBa0QsRUFBRSxDQUFDLFVBQVUsRUFBOUQsT0FBTyxhQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLElBQUksVUFBaUIsQ0FBQztBQU10RTtJQUFxRCwyQ0FBaUI7SUFBdEU7O0lBR0EsQ0FBQztJQUZBLGdEQUFjLEdBQWQsY0FBbUIsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNDLHFEQUFtQixHQUFuQixjQUF3QixPQUFPLGtCQUFRLENBQUMsQ0FBQyxDQUFDO0lBRnRCLHVCQUF1QjtRQUozQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxJQUFJLENBQUMsa0VBQWtFLENBQUM7T0FDcEQsdUJBQXVCLENBRzNDO0lBQUQsOEJBQUM7Q0FIRCxBQUdDLENBSG9ELDJCQUFpQixHQUdyRTtrQkFIb0IsdUJBQXVCO0FBSzVDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLDJCQUFpQixDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAhISEgVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBOZXV0cmlub1BhcnRpY2xlcyBleHRlbnNpb24gcGFja2FnZS5cbi8vICEhISBEb24ndCBtb2RpZnkgaXQgbWFudWFsbHkuXG5cbmltcG9ydCAqIGFzIE5ldXRyaW5vRWZmZWN0IGZyb20gJy4uL2V4cG9ydGVkX2VmZmVjdHMvU3BhcmtzX2VwaWMuanMnO1xuaW1wb3J0IHRleHR1cmVzIGZyb20gJy4uL3RleHR1cmVzJztcbmltcG9ydCBOZXV0cmlub0NvbXBvbmVudCBmcm9tICdOZXV0cmlub0NvbXBvbmVudCc7XG5pbXBvcnQgTmV1dHJpbm9Bc3NlbWJsZXIgZnJvbSAnTmV1dHJpbm9Bc3NlbWJsZXInO1xuXG5jb25zdCB7Y2NjbGFzcywgZXhlY3V0ZUluRWRpdE1vZGUsIHBsYXlPbkZvY3VzLCBtZW51fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkBwbGF5T25Gb2N1c1xuQG1lbnUoJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5yZW5kZXJlcnMvTmV1dHJpbm9Db21wb25lbnQvU3BhcmtzX2VwaWMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV1dHJpbm9FZmZlY3RDb21wb25lbnQgZXh0ZW5kcyBOZXV0cmlub0NvbXBvbmVudCB7XG5cdGdldEVmZmVjdENsYXNzKCkgeyByZXR1cm4gTmV1dHJpbm9FZmZlY3Q7IH1cblx0Z2V0VGV4dHVyZXNEYXRhYmFzZSgpIHsgcmV0dXJuIHRleHR1cmVzOyB9XG59XG5cbmNjLkFzc2VtYmxlci5yZWdpc3RlcihOZXV0cmlub0VmZmVjdENvbXBvbmVudCwgTmV1dHJpbm9Bc3NlbWJsZXIpO1xuIl19