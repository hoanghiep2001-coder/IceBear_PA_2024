
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isCanChangeColor = false;
        _this.itemChangeColor1 = null;
        _this.itemChangeColor2 = null;
        _this.checkClick = 0;
        return _this;
        // protected update(dt: number): void {
        //   this.GamePlay.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.BtnDownload.getChildByName("btnDownload")
            .on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _loop_1 = function (index) {
            var frame = this_1.NodesContainer.Frame_Hairs[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeHairOnTouch(index); }, this_1);
        };
        var this_1 = this;
        // hair on click event
        for (var index = 0; index < this.NodesContainer.Frame_Hairs.length; index++) {
            _loop_1(index);
        }
        var _loop_2 = function (index) {
            var frame = this_2.NodesContainer.Frame_Colors[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeColorOnTouch(frame); }, this_2);
        };
        var this_2 = this;
        // color hair on click event
        for (var index = 0; index < this.NodesContainer.Frame_Colors.length; index++) {
            _loop_2(index);
        }
        var _loop_3 = function (index) {
            var frame = this_3.NodesContainer.Frame_Dresses[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeDressOnTouch(index); }, this_3);
        };
        var this_3 = this;
        // dress on click event
        for (var index = 0; index < this.NodesContainer.Frame_Dresses.length; index++) {
            _loop_3(index);
        }
        var _loop_4 = function (index) {
            var frame = this_4.NodesContainer.Frame_Shoes[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeShoeOnTouch(index); }, this_4);
        };
        var this_4 = this;
        // shoe on click event
        for (var index = 0; index < this.NodesContainer.Frame_Shoes.length; index++) {
            _loop_4(index);
        }
        this.NodesContainer.BtnLeft.children[0].on(cc.Node.EventType.TOUCH_START, this.naviagateItems, this);
        this.NodesContainer.BtnRight.children[0].on(cc.Node.EventType.TOUCH_START, this.naviagateItems, this);
        this.NodesContainer.hideMask
            .on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
        this.NodesContainer.Btn_DollCamera.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function () {
        // applovin & mtg
        if ((constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) || constants_1.Constants.isTakePhoto) {
            this.GameController.installHandle();
            return;
        }
    };
    TouchAreaController.prototype.activeHairOnTouch = function (index) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        // ironsource
        // this.handleIronSourcePlaySound();
        if (!constants_1.Constants.isDoneStep1)
            constants_1.Constants.currentStep = 1;
        constants_1.Constants.countClick += 1;
        constants_1.Constants.isDoneStep1 = true;
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        var result = index + 1;
        this.NodesContainer.Char_Hairs.forEach(function (hair) { return hair.active = false; });
        this.NodesContainer.Frame_Hairs.forEach(function (frame) { return frame.color = cc.Color.WHITE; });
        this.NodesContainer.Frame_Hairs[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
        this.NodesContainer.PS_Blink_Head.resetSystem();
        this.NodesContainer.BtnRight.active = true;
        this.NodesContainer.Hand.active = false;
        switch (result) {
            case 1:
                this.isCanChangeColor = false;
                this.itemChangeColor1 = this.NodesContainer.Char_Hairs[10];
                this.itemChangeColor2 = this.NodesContainer.Char_Hairs[11];
                this.NodesContainer.Char_Hairs[10].active = true;
                this.NodesContainer.Char_Hairs[11].active = true;
                break;
            case 2:
                this.isCanChangeColor = false;
                this.itemChangeColor1 = this.NodesContainer.Char_Hairs[2];
                this.itemChangeColor2 = this.NodesContainer.Char_Hairs[3];
                this.NodesContainer.Char_Hairs[2].active = true;
                this.NodesContainer.Char_Hairs[3].active = true;
                break;
            case 3:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[4].active = true;
                break;
            case 4:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[5].active = true;
                break;
            case 5:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[6].active = true;
                this.NodesContainer.Char_Hairs[7].active = true;
                break;
            case 6:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[8].active = true;
                this.NodesContainer.Char_Hairs[9].active = true;
                break;
            default:
                break;
        }
        this.activeChangeColor(this.isCanChangeColor);
    };
    TouchAreaController.prototype.activeDressOnTouch = function (index) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        if (!constants_1.Constants.isDoneStep2)
            constants_1.Constants.currentStep = 2;
        constants_1.Constants.countClick += 1;
        constants_1.Constants.isDoneStep2 = true;
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        this.NodesContainer.Char_Dresses.forEach(function (shoe) { return shoe.active = false; });
        this.NodesContainer.Frame_Dresses.forEach(function (frame) { return frame.color = cc.Color.WHITE; });
        this.NodesContainer.Frame_Dresses[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
        this.NodesContainer.PS_Blink_Base.resetSystem();
        this.NodesContainer.BtnRight.active = true;
        this.NodesContainer.BtnLeft.active = true;
        this.NodesContainer.Char_Dresses[index].active = true;
    };
    TouchAreaController.prototype.activeShoeOnTouch = function (index) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        if (!constants_1.Constants.isDoneStep3)
            constants_1.Constants.currentStep = 3;
        constants_1.Constants.countClick += 1;
        constants_1.Constants.isDoneStep3 = true;
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        this.NodesContainer.Char_Shoes.forEach(function (shoe) { return shoe.active = false; });
        this.NodesContainer.Frame_Shoes.forEach(function (frame) { return frame.color = cc.Color.WHITE; });
        this.NodesContainer.Frame_Shoes[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
        this.NodesContainer.PS_Blink_Shoe.resetSystem();
        this.NodesContainer.BtnRight.active = true;
        this.NodesContainer.BtnLeft.active = true;
        this.NodesContainer.Char_Shoes[index].active = true;
    };
    TouchAreaController.prototype.activeChangeColor = function (active) {
        active ? this.NodesContainer.ListColor.active = true : this.NodesContainer.ListColor.active = false;
    };
    TouchAreaController.prototype.activeColorOnTouch = function (frame) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        var color = frame.color.toHEX();
        this.itemChangeColor1.color = cc.Color.fromHEX(new cc.Color, color);
        this.itemChangeColor2.color = cc.Color.fromHEX(new cc.Color, color);
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        this.NodesContainer.PS_Blink_Head.resetSystem();
    };
    TouchAreaController.prototype.naviagateItems = function (e) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        this.isCanChangeColor = false;
        var Node = e.target;
        this.NodesContainer.BtnRight.active = false;
        if (Node.parent.name === "Btn_Right") {
            if (constants_1.Constants.isDoneStep3) {
                constants_1.Constants.isTakePhoto = true;
                this.GamePlay.handleTakePhoto();
            }
            this.NodesContainer.BtnLeft.active = true;
            constants_1.Constants.currentListItem += 1;
            if (constants_1.Constants.currentListItem > 2)
                constants_1.Constants.currentListItem = 2;
        }
        else {
            constants_1.Constants.currentListItem -= 1;
            if (constants_1.Constants.currentListItem < 0)
                constants_1.Constants.currentListItem = 0;
        }
        this.GamePlay.updateProgress();
        this.NodesContainer.Items.forEach(function (item) { return item.active = false; });
        this.NodesContainer.Items[constants_1.Constants.currentListItem].active = true;
        this.activeChangeColor(this.isCanChangeColor);
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBZ1JDO1FBL1FDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLFFBQVE7UUFDUixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFXLENBQUMsQ0FBQzs7UUE0UHZCLHVDQUF1QztRQUN2QywrQ0FBK0M7UUFDL0MsSUFBSTtJQUVOLENBQUM7SUE3UFcsb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFBQSxpQkF1Q0M7UUFyQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQzthQUMxRCxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dDQUdyRSxLQUFLO1lBQ1osSUFBTSxLQUFLLEdBQUcs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Q1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBVGYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0FnUi9CO0lBQUQsMEJBQUM7Q0FoUkQsQUFnUkMsQ0FoUndDLEVBQUUsQ0FBQyxTQUFTLEdBZ1JwRDtBQWhSWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzQ2FuQ2hhbmdlQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpdGVtQ2hhbmdlQ29sb3IxOiBjYy5Ob2RlID0gbnVsbDtcclxuICBpdGVtQ2hhbmdlQ29sb3IyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBjaGVja0NsaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuRG93bmxvYWQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Eb3dubG9hZFwiKVxyXG4gICAgICAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gaGFpciBvbiBjbGljayBldmVudFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfSGFpcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9IYWlyc1tpbmRleF07XHJcbiAgICAgIGZyYW1lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IHRoaXMuYWN0aXZlSGFpck9uVG91Y2goaW5kZXgpIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbG9yIGhhaXIgb24gY2xpY2sgZXZlbnRcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0NvbG9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0NvbG9yc1tpbmRleF07XHJcbiAgICAgIGZyYW1lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IHRoaXMuYWN0aXZlQ29sb3JPblRvdWNoKGZyYW1lKSB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmVzcyBvbiBjbGljayBldmVudFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfRHJlc3Nlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0RyZXNzZXNbaW5kZXhdO1xyXG4gICAgICBmcmFtZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4geyB0aGlzLmFjdGl2ZURyZXNzT25Ub3VjaChpbmRleCkgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvZSBvbiBjbGljayBldmVudFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfU2hvZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9TaG9lc1tpbmRleF07XHJcbiAgICAgIGZyYW1lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IHRoaXMuYWN0aXZlU2hvZU9uVG91Y2goaW5kZXgpIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuTGVmdC5jaGlsZHJlblswXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5uYXZpYWdhdGVJdGVtcywgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0blJpZ2h0LmNoaWxkcmVuWzBdLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm5hdmlhZ2F0ZUl0ZW1zLCB0aGlzKTtcclxuXHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5oaWRlTWFza1xyXG4gICAgICAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGlkZU1hc2tUb3VjaFN0YXJ0LCB0aGlzKTtcclxuXHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fRG9sbENhbWVyYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoKTogdm9pZCB7XHJcbiAgICAvLyBhcHBsb3ZpbiAmIG10Z1xyXG4gICAgaWYgKChDb25zdGFudHMuY291bnRDbGljayA+PSBDb25zdGFudHMubWF4Q2xpY2tUb1N0b3JlKSB8fCBDb25zdGFudHMuaXNUYWtlUGhvdG8pIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUhhaXJPblRvdWNoKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuY291bnRDbGljayA+PSBDb25zdGFudHMubWF4Q2xpY2tUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXNEb25lU3RlcDEpIENvbnN0YW50cy5jdXJyZW50U3RlcCA9IDE7XHJcblxyXG4gICAgQ29uc3RhbnRzLmNvdW50Q2xpY2sgKz0gMTtcclxuICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSA9IHRydWU7XHJcblxyXG4gICAgaWYodGhpcy5jaGVja0NsaWNrID09PSAyKSB0aGlzLmNoZWNrQ2xpY2sgPSAwO1xyXG4gICAgaWYodGhpcy5jaGVja0NsaWNrID09PSAwKSB7XHJcbiAgICAgIHRoaXMuR2FtZVBsYXkucGxheUdyZWF0U291bmQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tDbGljayArPSAxO1xyXG4gICAgbGV0IHJlc3VsdCA9IGluZGV4ICsgMTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlycy5mb3JFYWNoKGhhaXIgPT4gaGFpci5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0hhaXJzLmZvckVhY2goZnJhbWUgPT4gZnJhbWUuY29sb3IgPSBjYy5Db2xvci5XSElURSk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0hhaXJzW2luZGV4XS5jb2xvciA9IGNjLkNvbG9yLmZyb21IRVgobmV3IGNjLkNvbG9yLCBcIiNGQzhDOENcIik7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlBTX0JsaW5rX0hlYWQucmVzZXRTeXN0ZW0oKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuUmlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICBzd2l0Y2ggKHJlc3VsdCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUNvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtQ2hhbmdlQ29sb3IxID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzEwXTtcclxuICAgICAgICB0aGlzLml0ZW1DaGFuZ2VDb2xvcjIgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbMTFdO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1sxMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbMTFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1DaGFuZ2VDb2xvcjEgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbMl07XHJcbiAgICAgICAgdGhpcy5pdGVtQ2hhbmdlQ29sb3IyID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzNdO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1syXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1szXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUNvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbNV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHRoaXMuaXNDYW5DaGFuZ2VDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1s2XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1s3XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUNvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY3RpdmVDaGFuZ2VDb2xvcih0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVEcmVzc09uVG91Y2goaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5jb3VudENsaWNrID49IENvbnN0YW50cy5tYXhDbGlja1RvU3RvcmUpIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUNvbnN0YW50cy5pc0RvbmVTdGVwMikgQ29uc3RhbnRzLmN1cnJlbnRTdGVwID0gMjtcclxuXHJcbiAgICBDb25zdGFudHMuY291bnRDbGljayArPSAxO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVN0ZXAyID0gdHJ1ZTtcclxuXHJcbiAgICBpZih0aGlzLmNoZWNrQ2xpY2sgPT09IDIpIHRoaXMuY2hlY2tDbGljayA9IDA7XHJcbiAgICBpZih0aGlzLmNoZWNrQ2xpY2sgPT09IDApIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0NsaWNrICs9IDE7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfRHJlc3Nlcy5mb3JFYWNoKHNob2UgPT4gc2hvZS5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0RyZXNzZXMuZm9yRWFjaChmcmFtZSA9PiBmcmFtZS5jb2xvciA9IGNjLkNvbG9yLldISVRFKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfRHJlc3Nlc1tpbmRleF0uY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgXCIjRkM4QzhDXCIpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5QU19CbGlua19CYXNlLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0blJpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bkxlZnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9EcmVzc2VzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWN0aXZlU2hvZU9uVG91Y2goaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5jb3VudENsaWNrID49IENvbnN0YW50cy5tYXhDbGlja1RvU3RvcmUpIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUNvbnN0YW50cy5pc0RvbmVTdGVwMykgQ29uc3RhbnRzLmN1cnJlbnRTdGVwID0gMztcclxuXHJcbiAgICBDb25zdGFudHMuY291bnRDbGljayArPSAxO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVN0ZXAzID0gdHJ1ZTtcclxuXHJcbiAgICBpZih0aGlzLmNoZWNrQ2xpY2sgPT09IDIpIHRoaXMuY2hlY2tDbGljayA9IDA7XHJcbiAgICBpZih0aGlzLmNoZWNrQ2xpY2sgPT09IDApIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0NsaWNrICs9IDE7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfU2hvZXMuZm9yRWFjaChzaG9lID0+IHNob2UuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9TaG9lcy5mb3JFYWNoKGZyYW1lID0+IGZyYW1lLmNvbG9yID0gY2MuQ29sb3IuV0hJVEUpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9TaG9lc1tpbmRleF0uY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgXCIjRkM4QzhDXCIpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5QU19CbGlua19TaG9lLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0blJpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bkxlZnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9TaG9lc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUNoYW5nZUNvbG9yKGFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgYWN0aXZlID8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5MaXN0Q29sb3IuYWN0aXZlID0gdHJ1ZSA6IHRoaXMuTm9kZXNDb250YWluZXIuTGlzdENvbG9yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlQ29sb3JPblRvdWNoKGZyYW1lOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmNvdW50Q2xpY2sgPj0gQ29uc3RhbnRzLm1heENsaWNrVG9TdG9yZSkge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb2xvciA9IGZyYW1lLmNvbG9yLnRvSEVYKCk7XHJcbiAgICB0aGlzLml0ZW1DaGFuZ2VDb2xvcjEuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgY29sb3IpO1xyXG4gICAgdGhpcy5pdGVtQ2hhbmdlQ29sb3IyLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChuZXcgY2MuQ29sb3IsIGNvbG9yKTtcclxuXHJcbiAgICBpZih0aGlzLmNoZWNrQ2xpY2sgPT09IDIpIHRoaXMuY2hlY2tDbGljayA9IDA7XHJcbiAgICBpZih0aGlzLmNoZWNrQ2xpY2sgPT09IDApIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0NsaWNrICs9IDE7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlBTX0JsaW5rX0hlYWQucmVzZXRTeXN0ZW0oKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG5hdmlhZ2F0ZUl0ZW1zKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuY291bnRDbGljayA+PSBDb25zdGFudHMubWF4Q2xpY2tUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0NhbkNoYW5nZUNvbG9yID0gZmFsc2U7XHJcbiAgICBsZXQgTm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5SaWdodC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmIChOb2RlLnBhcmVudC5uYW1lID09PSBcIkJ0bl9SaWdodFwiKSB7XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlzRG9uZVN0ZXAzKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVGFrZVBob3RvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZVRha2VQaG90bygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bkxlZnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbSArPSAxO1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbSA+IDIpIENvbnN0YW50cy5jdXJyZW50TGlzdEl0ZW0gPSAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbSAtPSAxO1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbSA8IDApIENvbnN0YW50cy5jdXJyZW50TGlzdEl0ZW0gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuR2FtZVBsYXkudXBkYXRlUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuSXRlbXNbQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuYWN0aXZlQ2hhbmdlQ29sb3IodGhpcy5pc0NhbkNoYW5nZUNvbG9yKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgLy8gICB0aGlzLkdhbWVQbGF5LmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAvLyB9XHJcblxyXG59XHJcbiJdfQ==