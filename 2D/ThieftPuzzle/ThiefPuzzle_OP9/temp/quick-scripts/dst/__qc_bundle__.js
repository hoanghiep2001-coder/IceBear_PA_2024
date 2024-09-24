
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Hand');
require('./assets/Script/Main');
require('./assets/Script/Res');
require('./assets/Script/ToStore');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Res.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e90f1APAVhH8bcUjVWiuutU', 'Res');
// Script/Res.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    ViewNgang: cc.Node,
    ViewDoc: cc.Node,
    viewDocGirlRigidbody: cc.Node,
    viewNgangGirlRigidbody: cc.Node,
    ClickStoreOverlay_1: cc.Node,
    ClickStoreOverlay_2: cc.Node,
    ClickStoreNode: cc.Node,
    ToStore: require('ToStore'),
    // hiep config
    girl_doc: cc.Node,
    round_doc: cc.Node,
    hand_doc: cc.Node,
    // 
    AudioBg: cc.AudioClip,
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
    device: "",
    isRotate: false
  },
  onLoad: function onLoad() {
    // mtg & applovin
    // this.ClickStoreOverlay_1.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
    // this.ClickStoreOverlay_2.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
    this.ClickStoreNode.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
    this.FlagAudio = true;
    this.ironSourceState = 1;
    this.ironSourceSoundState = true;
    this.isEndGame = false;
    this.Flag_Done = false;
    this.FlagAudiohaha = true;
    this.FlagMove = true;
    this.FlagStatus = false; // this.StartAudio();
  },
  ToStoreFn: function ToStoreFn() {
    this.ToStore.installHandle();
  },
  StartAudio: function StartAudio() {
    if (this.FlagAudio) {
      if (this.ironSourceSoundState) {
        this.FlagAudio = false;
        cc.audioEngine.play(this.AudioBg, true, 0.8);
      }
    }
  },
  update: function update(dt) {
    var screenW = cc.winSize.width;
    var screenH = cc.winSize.height;

    if (screenW < screenH) {
      if (this.VERTICAL === this.device) {
        return;
      }

      this.device = this.VERTICAL; // this.viewNgangGirlRigidbody.getComponent(cc.RigidBody).enabled = false;

      this.ViewDoc.active = true;
      this.ViewNgang.active = false;

      if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
        // IPX
        this.ViewDoc.scale = 0.8;
        this.girl_doc.y = -192;
        this.round_doc.x = -70;
        this.hand_doc.x = 129;
        this.hand_doc.y = 85;
      } // this.viewDocGirlRigidbody.getComponent(cc.RigidBody).enabled = true;

    } else {
      if (this.HORIZONTAL === this.device) {
        return;
      }

      this.device = this.HORIZONTAL; // this.viewDocGirlRigidbody.getComponent(cc.RigidBody).enabled = false;

      this.ViewDoc.active = false;
      this.ViewNgang.active = true; // this.viewNgangGirlRigidbody.getComponent(cc.RigidBody).enabled = true;
    }

    this.ironSourceState = parseInt(localStorage.getItem("cocosSoundState"), 10);

    if (this.ironSourceState) {
      if (this.ironSourceState === 1 && !this.ironSourceSoundState && !this.isEndGame) {
        this.ironSourceSoundState = true;
        cc.audioEngine.play(this.AudioBg, true, 1);
      }

      if (this.ironSourceState === 2 && this.ironSourceSoundState) {
        this.ironSourceSoundState = false;
        cc.audioEngine.stopAll();
      }
    }

    if (this.Flag_Done) {
      this.ClickStoreNode.active = true;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJWaWV3TmdhbmciLCJOb2RlIiwiVmlld0RvYyIsInZpZXdEb2NHaXJsUmlnaWRib2R5Iiwidmlld05nYW5nR2lybFJpZ2lkYm9keSIsIkNsaWNrU3RvcmVPdmVybGF5XzEiLCJDbGlja1N0b3JlT3ZlcmxheV8yIiwiQ2xpY2tTdG9yZU5vZGUiLCJUb1N0b3JlIiwicmVxdWlyZSIsImdpcmxfZG9jIiwicm91bmRfZG9jIiwiaGFuZF9kb2MiLCJBdWRpb0JnIiwiQXVkaW9DbGlwIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiZGV2aWNlIiwiaXNSb3RhdGUiLCJvbkxvYWQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiVG9TdG9yZUZuIiwiRmxhZ0F1ZGlvIiwiaXJvblNvdXJjZVN0YXRlIiwiaXJvblNvdXJjZVNvdW5kU3RhdGUiLCJpc0VuZEdhbWUiLCJGbGFnX0RvbmUiLCJGbGFnQXVkaW9oYWhhIiwiRmxhZ01vdmUiLCJGbGFnU3RhdHVzIiwiaW5zdGFsbEhhbmRsZSIsIlN0YXJ0QXVkaW8iLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ1cGRhdGUiLCJkdCIsInNjcmVlblciLCJ3aW5TaXplIiwid2lkdGgiLCJzY3JlZW5IIiwiaGVpZ2h0IiwiYWN0aXZlIiwidmlldyIsImdldEZyYW1lU2l6ZSIsInNjYWxlIiwieSIsIngiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9wQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRE47QUFFUkMsSUFBQUEsT0FBTyxFQUFFTixFQUFF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NkIsSUFBN0I7QUFDSDtBQUNKO0FBL0dJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFZpZXdOZ2FuZzogY2MuTm9kZSxcclxuICAgICAgICBWaWV3RG9jOiBjYy5Ob2RlLFxyXG4gICAgICAgIHZpZXdEb2NHaXJsUmlnaWRib2R5OiBjYy5Ob2RlLFxyXG4gICAgICAgIHZpZXdOZ2FuZ0dpcmxSaWdpZGJvZHk6IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIENsaWNrU3RvcmVPdmVybGF5XzE6IGNjLk5vZGUsXHJcbiAgICAgICAgQ2xpY2tTdG9yZU92ZXJsYXlfMjogY2MuTm9kZSxcclxuICAgICAgICBDbGlja1N0b3JlTm9kZTogY2MuTm9kZSxcclxuICAgICAgICBUb1N0b3JlOiByZXF1aXJlKCdUb1N0b3JlJyksXHJcblxyXG4gICAgICAgIC8vIGhpZXAgY29uZmlnXHJcbiAgICAgICAgZ2lybF9kb2M6IGNjLk5vZGUsXHJcbiAgICAgICAgcm91bmRfZG9jOiBjYy5Ob2RlLFxyXG4gICAgICAgIGhhbmRfZG9jOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICAvLyBcclxuICAgICAgICBBdWRpb0JnOiBjYy5BdWRpb0NsaXAsXHJcblxyXG4gICAgICAgIEhPUklaT05UQUw6IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIFZFUlRJQ0FMOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgZGV2aWNlOiBcIlwiLFxyXG4gICAgICAgIGlzUm90YXRlOiBmYWxzZSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgICAgIC8vIHRoaXMuQ2xpY2tTdG9yZU92ZXJsYXlfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5Ub1N0b3JlRm4sIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuQ2xpY2tTdG9yZU92ZXJsYXlfMi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5Ub1N0b3JlRm4sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkNsaWNrU3RvcmVOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLlRvU3RvcmVGbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5GbGFnQXVkaW8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXJvblNvdXJjZVN0YXRlID0gMTtcclxuICAgICAgICB0aGlzLmlyb25Tb3VyY2VTb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmxhZ19Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GbGFnQXVkaW9oYWhhID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkZsYWdNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkZsYWdTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLlN0YXJ0QXVkaW8oKTtcclxuICAgIH0sXHJcblxyXG4gICAgVG9TdG9yZUZuKCkge1xyXG4gICAgICAgIHRoaXMuVG9TdG9yZS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFN0YXJ0QXVkaW8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuRmxhZ0F1ZGlvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlyb25Tb3VyY2VTb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkZsYWdBdWRpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkF1ZGlvQmcsIHRydWUsIDAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGxldCBzY3JlZW5XID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgc2NyZWVuSCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoc2NyZWVuVyA8IHNjcmVlbkgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuVkVSVElDQUwgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUw7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmlld05nYW5nR2lybFJpZ2lkYm9keS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVmlld0RvYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlZpZXdOZ2FuZy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSVBYXHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXdEb2Muc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcmxfZG9jLnkgPSAtMTkyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZF9kb2MueCA9IC03MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZF9kb2MueCA9IDEyOTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZF9kb2MueSA9IDg1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnZpZXdEb2NHaXJsUmlnaWRib2R5LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkhPUklaT05UQUwgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTDtcclxuICAgICAgICAgICAgLy8gdGhpcy52aWV3RG9jR2lybFJpZ2lkYm9keS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVmlld0RvYy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5WaWV3TmdhbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy52aWV3TmdhbmdHaXJsUmlnaWRib2R5LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pcm9uU291cmNlU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcbiAgICAgICAgaWYgKHRoaXMuaXJvblNvdXJjZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlyb25Tb3VyY2VTdGF0ZSA9PT0gMSAmJiAhdGhpcy5pcm9uU291cmNlU291bmRTdGF0ZSAmJiAhdGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXJvblNvdXJjZVNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkF1ZGlvQmcsIHRydWUsIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pcm9uU291cmNlU3RhdGUgPT09IDIgJiYgdGhpcy5pcm9uU291cmNlU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pcm9uU291cmNlU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5GbGFnX0RvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5DbGlja1N0b3JlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ToStore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '078a3wCCVdJ5qP81bvcA87q', 'ToStore');
// Script/ToStore.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    window.gameReady && window.gameReady();
    console.log('start');
  },
  onFinish: function onFinish() {
    window.gameEnd && window.gameEnd();
  },
  installHandle: function installHandle() {
    console.log('store');
    cc.audioEngine.stopAll();
    this.onFinish(); //If ad network is tiktok

    if (typeof playableSDK != "undefined") {
      window.playableSDK.openAppStore();
      return;
    } // If ad network is google ads


    if (typeof ExitApi != "undefined") {
      ExitApi.exit();
      return;
    } // If ad netwrok is ironsources


    if (typeof dapi != "undefined") {
      dapi.openStoreUrl();
      return;
    } // If ad network support MRAID 2.0


    if (typeof mraid != "undefined") {
      if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
        mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
        return;
      }

      if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
        mraid.open("https://itunes.apple.com/us/app/id1589022394?mt=8");
        return;
      }

      mraid.open("https://play.google.com/store/apps/details?id=com.tvc.thiefpuzzle");
      return;
    } // If ad network is mindwork. window alway avaiable so skip undefined check


    window.install && window.install();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUb1N0b3JlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnQiLCJ3aW5kb3ciLCJnYW1lUmVhZHkiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2giLCJnYW1lRW5kIiwiaW5zdGFsbEhhbmRsZSIsImF1ZGlvRW5naW5lIiwic3RvcEFsbCIsInBsYXlhYmxlU0RLIiwib3BlbkFwcFN0b3JlIiwiRXhpdEFwaSIsImV4aXQiLCJkYXBpIiwib3BlblN0b3JlVXJsIiwibXJhaWQiLCJzeXMiLCJvcyIsIk9TX0FORFJPSUQiLCJBTkRST0lEIiwib3BlbiIsIk9TX0lPUyIsIklQSE9ORSIsIklQQUQiLCJpbnN0YWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxNQU5LLG9CQU1JLENBQ1IsQ0FQSTtBQVNMQyxFQUFBQSxLQVRLLG1CQVNHO0FBQ0pDLElBQUFBLE1BQU0sQ0FBQ0MsU0FBUCxJQUFvQkQsTUFBTSxDQUFDQyxTQUFQLEVBQXBCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLFFBZEssc0JBY007QUFDUEosSUFBQUEsTUFBTSxDQUFDSyxPQUFQLElBQWtCTCxNQUFNLENBQUNLLE9BQVAsRUFBbEI7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FULElBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxPQUFmO0FBQ0EsU0FBS0osUUFBTCxHQUh1QixDQUt2Qjs7QUFDQSxRQUFJLE9BQVFLLFdBQVIsSUFBd0IsV0FBNUIsRUFBeUM7QUFDckNULE1BQUFBLE1BQU0sQ0FBQ1MsV0FBUCxDQUFtQkMsWUFBbkI7QUFDQTtBQUNILEtBVHNCLENBV3ZCOzs7QUFDQSxRQUFJLE9BQVFDLE9BQVIsSUFBb0IsV0FBeEIsRUFBcUM7QUFDakNBLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBO0FBQ0gsS0Fmc0IsQ0FpQnZCOzs7QUFDQSxRQUFJLE9BQVFDLElBQVIsSUFBaUIsV0FBckIsRUFBa0M7QUFDOUJBLE1BQUFBLElBQUksQ0FBQ0MsWUFBTDtBQUNBO0FBQ0gsS0FyQnNCLENBdUJ2Qjs7O0FBQ0EsUUFBSSxPQUFRQyxLQUFSLElBQWtCLFdBQXRCLEVBQW1DO0FBQy9CLFVBQUlyQixFQUFFLENBQUNzQixHQUFILENBQU9DLEVBQVAsSUFBYXZCLEVBQUUsQ0FBQ3NCLEdBQUgsQ0FBT0UsVUFBcEIsSUFBa0N4QixFQUFFLENBQUNzQixHQUFILENBQU9DLEVBQVAsSUFBYXZCLEVBQUUsQ0FBQ3NCLEdBQUgsQ0FBT0csT0FBMUQsRUFBbUU7QUFDL0RKLFFBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLG1FQUFYO0FBQ0E7QUFDSDs7QUFFRCxVQUFJMUIsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxFQUFQLElBQWF2QixFQUFFLENBQUNzQixHQUFILENBQU9LLE1BQXBCLElBQThCM0IsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxFQUFQLElBQWF2QixFQUFFLENBQUNzQixHQUFILENBQU9NLE1BQWxELElBQTRENUIsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxFQUFQLElBQWF2QixFQUFFLENBQUNzQixHQUFILENBQU9PLElBQXBGLEVBQTBGO0FBQ3RGUixRQUFBQSxLQUFLLENBQUNLLElBQU4sQ0FBVyxtREFBWDtBQUNBO0FBQ0g7O0FBRURMLE1BQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLG1FQUFYO0FBQ0E7QUFDSCxLQXJDc0IsQ0FzQ3ZCOzs7QUFDQXBCLElBQUFBLE1BQU0sQ0FBQ3dCLE9BQVAsSUFBa0J4QixNQUFNLENBQUN3QixPQUFQLEVBQWxCO0FBRUg7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmluaXNoKCkge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluc3RhbGxIYW5kbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUnKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIEV4aXRBcGkuZXhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3cm9rIGlzIGlyb25zb3VyY2VzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXBpLm9wZW5TdG9yZVVybCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIHN1cHBvcnQgTVJBSUQgMi4wXHJcbiAgICAgICAgaWYgKHR5cGVvZiAobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy50aGllZnB1enpsZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQxNTg5MDIyMzk0P210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy50aGllZnB1enpsZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3697cH7HvJKfaxYpx5bnrPE', 'Hand');
// Script/Hand.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Main: require('Main'),
    Res: require('Res')
  },
  onLoad: function onLoad() {},
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var _this = this;

    if (otherCollider.node._name == 'Round') {
      this.Main.FlagStatus = "Round";
    }

    if (otherCollider.node._name == 'man1') {
      this.Main.FlagStatus = "God";
      this.Res.FlagMove = false;
      this.Res.FlagStatus = 'Lose';
      setTimeout(function () {
        _this.Res.Flag_Done = true;
      }, 500);
    }
  } // onEndContact(contact, selfCollider, otherCollider) {
  //     if(otherCollider.node._name == 'Round') {
  //         this.Main.FlagStatus = false;
  //     }
  //     if(otherCollider.node._name == 'god') {
  //         this.Main.FlagStatus = false;
  //     }
  // }
  // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIYW5kLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTWFpbiIsInJlcXVpcmUiLCJSZXMiLCJvbkxvYWQiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwibm9kZSIsIl9uYW1lIiwiRmxhZ1N0YXR1cyIsIkZsYWdNb3ZlIiwic2V0VGltZW91dCIsIkZsYWdfRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDLE1BQUQsQ0FESjtBQUVUQyxJQUFBQSxHQUFHLEVBQUVELE9BQU8sQ0FBQyxLQUFEO0FBRkgsR0FIUDtBQVFMRSxFQUFBQSxNQVJLLG9CQVFLLENBRVQsQ0FWSTtBQVlMQyxFQUFBQSxjQVpLLDBCQVlVQyxPQVpWLEVBWW1CQyxZQVpuQixFQVlpQ0MsYUFaakMsRUFZZ0Q7QUFBQTs7QUFDakQsUUFBR0EsYUFBYSxDQUFDQyxJQUFkLENBQW1CQyxLQUFuQixJQUE0QixPQUEvQixFQUF3QztBQUNwQyxXQUFLVCxJQUFMLENBQVVVLFVBQVYsR0FBdUIsT0FBdkI7QUFDSDs7QUFFRCxRQUFHSCxhQUFhLENBQUNDLElBQWQsQ0FBbUJDLEtBQW5CLElBQTRCLE1BQS9CLEVBQXVDO0FBQ25DLFdBQUtULElBQUwsQ0FBVVUsVUFBVixHQUF1QixLQUF2QjtBQUNBLFdBQUtSLEdBQUwsQ0FBU1MsUUFBVCxHQUFvQixLQUFwQjtBQUNBLFdBQUtULEdBQUwsQ0FBU1EsVUFBVCxHQUFzQixNQUF0QjtBQUNBRSxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLFFBQUEsS0FBSSxDQUFDVixHQUFMLENBQVNXLFNBQVQsR0FBcUIsSUFBckI7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFDSixHQXpCSSxDQTBCTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBcENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgTWFpbjogcmVxdWlyZSgnTWFpbicpLFxyXG4gICAgICAgUmVzOiByZXF1aXJlKCdSZXMnKSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZS5fbmFtZSA9PSAnUm91bmQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbi5GbGFnU3RhdHVzID0gXCJSb3VuZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5vZGUuX25hbWUgPT0gJ21hbjEnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbi5GbGFnU3RhdHVzID0gXCJHb2RcIjtcclxuICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ1N0YXR1cyA9ICdMb3NlJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlcy5GbGFnX0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAvLyAgICAgaWYob3RoZXJDb2xsaWRlci5ub2RlLl9uYW1lID09ICdSb3VuZCcpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5NYWluLkZsYWdTdGF0dXMgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgaWYob3RoZXJDb2xsaWRlci5ub2RlLl9uYW1lID09ICdnb2QnKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuTWFpbi5GbGFnU3RhdHVzID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5011fRH0vRIq6Bm4n9IwqHD', 'Main');
// Script/Main.js

"use strict";

var _cc$Class;

cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {
    Res: require('Res'),
    Hand: cc.Node,
    posFall: cc.Node,
    RestrictedArea: cc.Node,
    ViewEnd: cc.Node,
    Enable_Click: cc.Node,
    Body_01: cc.Node,
    Body_02: cc.Node,
    Round: cc.Node,
    AreaWin: cc.Node,
    HandFake: cc.Node,
    Graphics: cc.Node,
    GraphicBackup: cc.Node,
    PosStart: cc.Node,
    HandGuild: cc.Node,
    GuildGmame: cc.Node,
    LuckyMoney: cc.Node,
    PointCollider: cc.Node,
    hint: cc.Node,
    // 
    Rope_Audio: cc.AudioClip,
    Fight_Audio: cc.AudioClip,
    Aaaa_Audio: cc.AudioClip,
    Hahah_Audio: cc.AudioClip
  },
  onLoad: function onLoad() {
    var physics_manager = cc.director.getPhysicsManager();
    physics_manager.enabled = true;
    physics_manager.gravity = cc.v2(0, 0); // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
    //     cc.PhysicsManager.DrawBits.e_pairBit |
    //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    //     cc.PhysicsManager.DrawBits.e_joinBit |
    //     cc.PhysicsManager.DrawBits.e_shapeBit

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    var screenW = cc.winSize.width;
    var screenH = cc.winSize.height; // if (screenW < screenH) {
    //     this.lineWidth = 2;
    // } else {
    //     this.lineWidth = 10;
    // }

    this.ColorWinStatus = new cc.Color().fromHEX("#8DFAFF");
    this.ColorWaitStatus = new cc.Color().fromHEX("#000000");
    this.ColorLoseStatus = new cc.Color().fromHEX("#ff0000");
    this.ColorLine = this.ColorWaitStatus;
    this.lineWidth;
    this.FlagAudio_Rope = null;
    this.Backup = null;
    this.isCollider = false;
    this.FlagAdd = false;
    this.FlagbackupStatus = null;
    this.countCollider = 0;
    this.FlagStatus = false;
    this.FlagMove = false;
    this.Fllow_Current = 1;
    this.FlagAudio_Rope = null;
    this.ArrPoint = [];
    this.ArrPointEdit = [];
    this.flagPhysic = true;
    this.lerpFactor = 0.05;
    this.flagDoneOne = false;
    this.threshold = 1000;
    this.BackupPosMove = null;
  },
  start: function start() {// this.AddCollider(this.PointCollider);
  },
  AddCollider: function AddCollider(node) {
    var myCollider = node.getComponent(cc.Collider);

    if (myCollider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
      collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
      collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
    }
  },
  calculateDistanceBetweenPoints: function calculateDistanceBetweenPoints(point1, point2) {
    // Sử dụng phương trình khoảng cách Euclid
    var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var roundedDistance = Math.round(distance);
    return roundedDistance * 8;
  },
  onTouchStart: function onTouchStart() {
    this.Res.StartAudio();
  },
  onTouchMove: function onTouchMove(event) {
    var _this = this;

    if (!this.Res.FlagMove) return;
    if (this.Res.Flag_Done) return;
    this.Res.StartAudio();
    this.HandGuild.active = false;
    this.hint.active = false;
    var touchPos = event.getLocation().subSelf(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)); // const newPosition = this.node.convertToNodeSpaceAR(touchPos);

    if (this.FlagAudio_Rope == null) {
      if (this.Res.ironSourceSoundState) {
        this.FlagAudio_Rope = cc.audioEngine.play(this.Rope_Audio, false, 1);
      }

      setTimeout(function () {
        _this.FlagAudio_Rope = null;
      }, 1000);
    }

    this.BackupPosMove = this.Hand.position;
    this.Hand.position = this.lerp(this.Hand.position, touchPos, this.lerpFactor);
    this.HandFake.active = false;
    this.isCheckDone();
    this.isOverlappingNodeB();
    this.DragMove();
    this.checkApproximatelyCollinear();
    this.checkPop();
    this.checkFalse();
  },
  lerp: function lerp(start, end, t) {
    return start.mul(1 - t).add(end.mul(t));
  },
  isOverlappingNodeB: function isOverlappingNodeB() {
    var _this2 = this;

    if (this.FlagMove) return;

    this.RestrictedArea._children.forEach(function (element) {
      var rect1 = _this2.Hand.getBoundingBoxToWorld();

      var rect2 = element.getBoundingBoxToWorld();

      if (rect1.intersects(rect2)) {
        // if(element._name == 'y') {
        //     this.Hand.setPosition(this.BackupPosMove.x, this.Hand.y);
        // }else{
        //     this.Hand.setPosition(this.Hand.x, this.BackupPosMove.y);
        // }
        _this2.adjustPosition(_this2.Hand, element);
      }
    });
  },
  isCheckDone: function isCheckDone() {
    var rect1 = this.Hand.getBoundingBoxToWorld();
    var rect2 = this.AreaWin.getBoundingBoxToWorld();

    if (rect2.intersects(rect1)) {
      this.FlagStatus = "Round";
    }
  },
  adjustPosition: function adjustPosition(nodeA, nodeB) {
    var number = 20;
    var direction = cc.v2(nodeB.x - nodeA.x, nodeB.y - nodeA.y).normalize();
    var distance = nodeA.width / number + nodeB.width / number;
    var newPosition = cc.v2(nodeA.x - direction.x * distance, nodeA.y - direction.y * distance); // Update the position of nodeA

    this.Hand.setPosition(newPosition);
  },
  onTouchEnd: function onTouchEnd() {
    if (this.FlagStatus == "Round") {
      if (this.ArrPoint.length == 0) {
        this.ViewEnd.active = true;
        return;
      }

      this.GuildGmame.active = false;
      this.FlagMove = true;
      this.RestrictedArea.active = false;
      this.Round.active = false;
      var posStart = this.PosStart.getPosition();
      this.LuckyMoney.setPosition(this.Hand.getPosition());
      this.Move(this.Hand, true);
      this.Move(this.LuckyMoney, false);
      this.Enable_Click = true;
    } else if (this.FlagStatus == "God") {
      return;
    }
  },
  onMoveComplete: function onMoveComplete() {
    if (!this.flagDoneOne) {
      this.flagDoneOne = true;
      this.Res.FlagStatus = 'Win';
      this.DoneFn();
    }
  },
  Move: function Move(nodeMove, flagPop) {
    var _this3 = this;

    var actions = [];

    var _loop = function _loop(i) {
      var startPos = _this3.ArrPointEdit[i];
      var moveSpeed = 500;
      var endPos = _this3.ArrPointEdit[i - 1];
      var distance = startPos.sub(endPos).mag();
      var moveDuration = distance / moveSpeed;
      var moveAction = cc.moveTo(moveDuration, endPos);
      var scaleXAction = cc.callFunc(function () {
        if (i != _this3.ArrPointEdit.length - 1 && flagPop) {
          _this3.ArrPoint.pop();
        }
      });
      var spawnAction = cc.spawn(moveAction, scaleXAction);
      actions.push(spawnAction);
    };

    for (var i = this.ArrPointEdit.length - 1; i > 0; i--) {
      _loop(i);
    }

    var onComplete = cc.callFunc(this.onMoveComplete, this); // Tạo sequence từ các action di chuyển và thay đổi scaleX

    var sequence = cc.sequence(actions, onComplete);
    var moveWithCallback = cc.sequence(sequence, onComplete); // Áp dụng sequence vào node

    nodeMove.runAction(moveWithCallback);
  },
  DragMove: function DragMove() {
    var graphics = this.Graphics.getComponent(cc.Graphics);
    graphics.clear();
    var posStart = this.PosStart.getPosition();
    var posEnd = this.Hand.getPosition();
    var ArrPosNew = [];

    if (this.ArrPoint.length > 0) {
      this.ArrPoint.forEach(function (element) {
        ArrPosNew.push(element.position);
      });
    }

    ArrPosNew.unshift(posStart);
    ArrPosNew.push(posEnd);
    this.ArrPointEdit = ArrPosNew;

    for (var i = 0; i < ArrPosNew.length - 1; i++) {
      graphics.strokeColor = this.ColorLine; // graphics.lineWidth = 3;

      graphics.moveTo(ArrPosNew[i].x, ArrPosNew[i].y);
      graphics.lineTo(ArrPosNew[i + 1].x, ArrPosNew[i + 1].y);
      graphics.stroke();
    }

    var index = ArrPosNew.length;
    this.DirectionVector(ArrPosNew[index - 2], ArrPosNew[index - 1]);
  },
  DirectionVector: function DirectionVector(posStart, posEnd) {
    var x1 = posStart.x;
    var y1 = posStart.y;
    var x2 = posEnd.x;
    var y2 = posEnd.y;
    var angle = this.calculateAngle(x1, y1, x2, y2);
    this.Hand.angle = angle + 30;
  },
  checkApproximatelyCollinear: function checkApproximatelyCollinear() {
    var _this4 = this;

    // Kiểm tra xem ba điểm có gần đúng thẳng hàng hay không với ngưỡng là 5 (hoặc số khác tùy chọn)
    var threshold = 200;
    var isApproximatelyCollinear;
    var isSpace;
    var isSpace2;

    this.PointCollider._children.forEach(function (element) {
      if (_this4.ArrPoint.length > 0) {
        if (element._id == _this4.ArrPoint[_this4.ArrPoint.length - 1]._id) {
          return;
        }
      }

      var index = _this4.ArrPointEdit.length;
      var pointA = _this4.ArrPointEdit[index - 1];
      var pointB = _this4.ArrPointEdit[index - 2];
      var pointC = _this4.ArrPointEdit[index - 2];
      var pointD = _this4.ArrPointEdit[index - 1];
      var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
      isApproximatelyCollinear = deviation < _this4.threshold;

      var Space1 = _this4.calculateDistanceBetweenPoints(pointA, pointB);

      var Space2 = _this4.calculateDistanceBetweenPoints(pointA, element);

      var Space3 = _this4.calculateDistanceBetweenPoints(pointC, pointD);

      var Space4 = _this4.calculateDistanceBetweenPoints(pointC, element);

      isSpace = Space1 > Space2;
      isSpace2 = Space3 > Space4;

      if (_this4.ArrPoint.length == 0) {
        _this4.Backup = null;
      } // Nếu trạng thái trước đó là không thẳng hàng và hiện tại là thẳng hàng


      if (_this4.Backup != null) {
        if (_this4.Backup._id == element._id) return;
      }

      if (isSpace && isSpace2) {
        if (isApproximatelyCollinear && !_this4.isCollider) {
          if (_this4.ArrPoint.length == 0) {
            _this4.ArrPoint.push(element);

            _this4.Backup = element;
            _this4.FlagAdd = true;
            _this4.FlagbackupStatus = true;
            _this4.countCollider = 0;
          } else {
            if (element._id != _this4.Backup._id) {
              _this4.FlagAdd = true;
              _this4.countCollider = 0;

              _this4.ArrPoint.push(element);

              _this4.Backup = element;
            }
          }
        }
      }
    });
  },
  checkPop: function checkPop() {
    if (this.FlagMove) return;
    var index = this.ArrPointEdit.length;
    if (index <= 2) return;
    var threshold = 200;
    var isApproximatelyCollinear;
    var graphics = this.GraphicBackup.getComponent(cc.Graphics);
    var ArrPosNew = [];
    graphics.clear();
    var posStart = this.ArrPointEdit[index - 3];
    var posEnd = this.ArrPointEdit[index - 1];
    ArrPosNew.unshift(posStart);
    ArrPosNew.push(posEnd);

    for (var i = 0; i < ArrPosNew.length - 1; i++) {
      graphics.moveTo(ArrPosNew[i].x, ArrPosNew[i].y);
      graphics.lineTo(ArrPosNew[i + 1].x, ArrPosNew[i + 1].y);
      graphics.stroke();
    }

    var pointA = posStart;
    var pointB = posEnd;
    var pointC = this.ArrPoint[this.ArrPoint.length - 1];
    var element = pointC;

    if (this.ArrPoint.length > 0) {
      if (element._id == this.ArrPoint[this.ArrPoint.length - 1]._id) {
        var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
        isApproximatelyCollinear = deviation < this.threshold;
        var Space1 = this.calculateDistanceBetweenPoints(pointA, pointB);
        var Space2 = this.calculateDistanceBetweenPoints(pointA, element);
        var isSpace = Space1 > Space2;
        var status;

        if (isSpace) {
          if (isApproximatelyCollinear) {
            status = true;
          } else {
            status = false;
          }

          if (this.FlagbackupStatus != status) {
            this.FlagbackupStatus = status;

            if (!status) {
              ++this.countCollider;

              if (this.countCollider >= 2) {
                this.isCollider = false;
                this.countCollider = 1;
                this.ArrPoint.pop();
              }
            }
          }
        }
      }
    }
  },
  checkFalse: function checkFalse() {
    var _this5 = this;

    if (this.ArrPointEdit.length > 2) {
      var isApproximatelyCollinear;
      var isSpace;
      var isSpace2;

      this.posFall._children.forEach(function (element) {
        var index = _this5.ArrPointEdit.length;
        var pointA = _this5.ArrPointEdit[index - 1];
        var pointB = _this5.ArrPointEdit[index - 2];
        var pointC = _this5.ArrPointEdit[index - 2];
        var pointD = _this5.ArrPointEdit[index - 1];
        var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
        isApproximatelyCollinear = deviation < _this5.threshold;

        var Space1 = _this5.calculateDistanceBetweenPoints(pointA, pointB);

        var Space2 = _this5.calculateDistanceBetweenPoints(pointA, element);

        var Space3 = _this5.calculateDistanceBetweenPoints(pointC, pointD);

        var Space4 = _this5.calculateDistanceBetweenPoints(pointC, element);

        isSpace = Space1 > Space2;
        isSpace2 = Space3 > Space4;

        if (isSpace && isSpace2) {
          if (isApproximatelyCollinear) {
            _this5.FlagStatus = "God";
            _this5.Res.FlagMove = false;
            _this5.Res.FlagStatus = 'Lose';
            setTimeout(function () {
              _this5.Res.Flag_Done = true;
            }, 500);
          }
        }
      });
    } else {
      var _isApproximatelyCollinear;

      var posStart = this.PosStart.getPosition();
      var posEnd = this.Hand.getPosition();
      var pointA = posStart;
      var pointB = posEnd;

      this.posFall._children.forEach(function (element) {
        var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
        _isApproximatelyCollinear = deviation < _this5.threshold;

        var Space1 = _this5.calculateDistanceBetweenPoints(pointA, pointB);

        var Space2 = _this5.calculateDistanceBetweenPoints(pointA, element);

        var isSpace = Space1 > Space2;

        if (isSpace) {
          if (_isApproximatelyCollinear) {
            _this5.FlagStatus = "God";
            _this5.Res.FlagMove = false;
            _this5.Res.FlagStatus = 'Lose';
            setTimeout(function () {
              _this5.Res.Flag_Done = true;
            }, 500);
          }
        }
      });
    }
  }
}, _cc$Class["calculateDistanceBetweenPoints"] = function calculateDistanceBetweenPoints(point1, point2) {
  // Sử dụng phương trình khoảng cách Euclid
  var dx = point2.x - point1.x;
  var dy = point2.y - point1.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  var roundedDistance = Math.round(distance);
  return roundedDistance;
}, _cc$Class.DirectionVectorPhysics = function DirectionVectorPhysics(posStart, posEnd) {
  var x1 = posStart.x;
  var y1 = posStart.y;
  var x2 = posEnd.x;
  var y2 = posEnd.y;
  var angle = this.calculateAngle(x1, y1, x2, y2);
  return angle;
}, _cc$Class.calculateAngle = function calculateAngle(x1, y1, x2, y2) {
  // Tính hệ số góc của đoạn thẳng nối hai điểm
  var deltaY = y2 - y1;
  var deltaX = x2 - x1; // Tính arctangent của hệ số góc và chuyển đổi từ radian sang độ

  var angleInRadians = Math.atan2(deltaY, deltaX); // Chuyển đổi radian sang độ

  var angleInDegrees = angleInRadians * (180 / Math.PI); // Đảm bảo góc luôn nằm trong khoảng từ 0 đến 360 độ

  angleInDegrees = (angleInDegrees + 360) % 360;
  return angleInDegrees;
}, _cc$Class.DoneFn = function DoneFn() {
  var _this6 = this;

  this.Graphics.active = false;
  this.Res.Flag_Done = true;

  if (this.Res.FlagStatus == 'Win') {
    this.Body_02._children[0].active = true;

    if (this.Res.ironSourceSoundState) {
      if (this.Res.FlagAudiohaha) {
        this.Res.FlagAudiohaha = false;
        cc.audioEngine.play(this.Hahah_Audio, false, 1);
      }
    }
  } else {
    if (this.Res.ironSourceSoundState) {
      if (this.Res.FlagAudiohaha) {
        this.Res.FlagAudiohaha = false;
        cc.audioEngine.play(this.Aaaa_Audio, false, 1);
        cc.audioEngine.play(this.Fight_Audio, false, 1);
      }
    }

    this.Body_02._children[1].active = true;
  }

  this.Body_01.active = false;
  this.Body_02.active = true;
  this.Hand.active = false;
  this.Round.active = false;
  this.GuildGmame.active = false;
  this.LuckyMoney.active = false;
  setTimeout(function () {
    _this6.ViewEnd.active = true;
  }, 1500);
}, _cc$Class.update = function update(dt) {
  if (!this.FlagMove) {
    if (this.FlagStatus == "Round") {
      this.ColorLine = this.ColorWinStatus;
    } else if (this.FlagStatus == false) {
      this.ColorLine = this.ColorWaitStatus;
    } else if (this.FlagStatus == "God") {
      this.ColorLine = this.ColorLoseStatus;
      this.DragMove();
    }
  }

  if (this.FlagMove) {
    this.DragMove();
  }

  if (this.Res.Flag_Done) {
    if (!this.flagDoneOne) {
      this.flagDoneOne = true;
      this.DoneFn();
    }
  }

  var screenW = cc.winSize.width;
  var screenH = cc.winSize.height;

  if (screenW < screenH) {
    this.threshold = 200;
  } else {
    this.threshold = 400;
  }
}, _cc$Class));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUmVzIiwicmVxdWlyZSIsIkhhbmQiLCJOb2RlIiwicG9zRmFsbCIsIlJlc3RyaWN0ZWRBcmVhIiwiVmlld0VuZCIsIkVuYWJsZV9DbGljayIsIkJvZHlfMDEiLCJCb2R5XzAyIiwiUm91bmQiLCJBcmVhV2luIiwiSGFuZEZha2UiLCJHcmFwaGljcyIsIkdyYXBoaWNCYWNrdXAiLCJQb3NTdGFydCIsIkhhbmRHdWlsZCIsIkd1aWxkR21hbWUiLCJMdWNreU1vbmV5IiwiUG9pbnRDb2xsaWRlciIsImhpbnQiLCJSb3BlX0F1ZGlvIiwiQXVkaW9DbGlwIiwiRmlnaHRfQXVkaW8iLCJBYWFhX0F1ZGlvIiwiSGFoYWhfQXVkaW8iLCJvbkxvYWQiLCJwaHlzaWNzX21hbmFnZXIiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImdyYXZpdHkiLCJ2MiIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Ub3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsIlRPVUNIX0NBTkNFTCIsInNjcmVlblciLCJ3aW5TaXplIiwid2lkdGgiLCJzY3JlZW5IIiwiaGVpZ2h0IiwiQ29sb3JXaW5TdGF0dXMiLCJDb2xvciIsImZyb21IRVgiLCJDb2xvcldhaXRTdGF0dXMiLCJDb2xvckxvc2VTdGF0dXMiLCJDb2xvckxpbmUiLCJsaW5lV2lkdGgiLCJGbGFnQXVkaW9fUm9wZSIsIkJhY2t1cCIsImlzQ29sbGlkZXIiLCJGbGFnQWRkIiwiRmxhZ2JhY2t1cFN0YXR1cyIsImNvdW50Q29sbGlkZXIiLCJGbGFnU3RhdHVzIiwiRmxhZ01vdmUiLCJGbGxvd19DdXJyZW50IiwiQXJyUG9pbnQiLCJBcnJQb2ludEVkaXQiLCJmbGFnUGh5c2ljIiwibGVycEZhY3RvciIsImZsYWdEb25lT25lIiwidGhyZXNob2xkIiwiQmFja3VwUG9zTW92ZSIsInN0YXJ0IiwiQWRkQ29sbGlkZXIiLCJteUNvbGxpZGVyIiwiZ2V0Q29tcG9uZW50IiwiQ29sbGlkZXIiLCJjb2xsaWRlciIsIkNvbnRhY3QyRFR5cGUiLCJCRUdJTl9DT05UQUNUIiwib25CZWdpbkNvbnRhY3QiLCJFTkRfQ09OVEFDVCIsIm9uRW5kQ29udGFjdCIsIlBSRV9TT0xWRSIsIm9uUHJlU29sdmUiLCJQT1NUX1NPTFZFIiwib25Qb3N0U29sdmUiLCJjYWxjdWxhdGVEaXN0YW5jZUJldHdlZW5Qb2ludHMiLCJwb2ludDEiLCJwb2ludDIiLCJkeCIsIngiLCJkeSIsInkiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0Iiwicm91bmRlZERpc3RhbmNlIiwicm91bmQiLCJTdGFydEF1ZGlvIiwiZXZlbnQiLCJGbGFnX0RvbmUiLCJhY3RpdmUiLCJ0b3VjaFBvcyIsImdldExvY2F0aW9uIiwic3ViU2VsZiIsImlyb25Tb3VyY2VTb3VuZFN0YXRlIiwiYXVkaW9FbmdpbmUiLCJwbGF5Iiwic2V0VGltZW91dCIsInBvc2l0aW9uIiwibGVycCIsImlzQ2hlY2tEb25lIiwiaXNPdmVybGFwcGluZ05vZGVCIiwiRHJhZ01vdmUiLCJjaGVja0FwcHJveGltYXRlbHlDb2xsaW5lYXIiLCJjaGVja1BvcCIsImNoZWNrRmFsc2UiLCJlbmQiLCJ0IiwibXVsIiwiYWRkIiwiX2NoaWxkcmVuIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyZWN0MSIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsInJlY3QyIiwiaW50ZXJzZWN0cyIsImFkanVzdFBvc2l0aW9uIiwibm9kZUEiLCJub2RlQiIsIm51bWJlciIsImRpcmVjdGlvbiIsIm5vcm1hbGl6ZSIsIm5ld1Bvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJsZW5ndGgiLCJwb3NTdGFydCIsImdldFBvc2l0aW9uIiwiTW92ZSIsIm9uTW92ZUNvbXBsZXRlIiwiRG9uZUZuIiwibm9kZU1vdmUiLCJmbGFnUG9wIiwiYWN0aW9ucyIsImkiLCJzdGFydFBvcyIsIm1vdmVTcGVlZCIsImVuZFBvcyIsInN1YiIsIm1hZyIsIm1vdmVEdXJhdGlvbiIsIm1vdmVBY3Rpb24iLCJtb3ZlVG8iLCJzY2FsZVhBY3Rpb24iLCJjYWxsRnVuYyIsInBvcCIsInNwYXduQWN0aW9uIiwic3Bhd24iLCJwdXNoIiwib25Db21wbGV0ZSIsInNlcXVlbmNlIiwibW92ZVdpdGhDYWxsYmFjayIsInJ1bkFjdGlvbiIsImdyYXBoaWNzIiwiY2xlYXIiLCJwb3NFbmQiLCJBcnJQb3NOZXciLCJ1bnNoaWZ0Iiwic3Ryb2tlQ29sb3IiLCJsaW5lVG8iLCJzdHJva2UiLCJpbmRleCIsIkRpcmVjdGlvblZlY3RvciIsIngxIiwieTEiLCJ4MiIsInkyIiwiYW5nbGUiLCJjYWxjdWxhdGVBbmdsZSIsImlzQXBwcm94aW1hdGVseUNvbGxpbmVhciIsImlzU3BhY2UiLCJpc1NwYWNlMiIsIl9pZCIsInBvaW50QSIsInBvaW50QiIsInBvaW50QyIsInBvaW50RCIsImRldmlhdGlvbiIsImFicyIsIlNwYWNlMSIsIlNwYWNlMiIsIlNwYWNlMyIsIlNwYWNlNCIsInN0YXR1cyIsIkRpcmVjdGlvblZlY3RvclBoeXNpY3MiLCJkZWx0YVkiLCJkZWx0YVgiLCJhbmdsZUluUmFkaWFucyIsImF0YW4yIiwiYW5nbGVJbkRlZ3JlZXMiLCJQSSIsIkZsYWdBdWRpb2hhaGEiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUg7QUFDSSxhQUFTRCxFQUFFLENBQUNFLFNBRGhCO0FBR0lDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVDLE9BQU8sQ0FBQyxLQUFELENBREo7QUFFUkMsSUFBQUEsSUFBSSxFQUFFTixFQUFFLENBQUNPLElBRkQ7QUFHUkMsSUFBQUEsT0FBTyxFQUFFUixFQUFFLENBQUNPLElBSEo7QUFJUkUsSUFBQUEsY0FBYyxF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QUksS0FBS1UsVUFBTCxJQUFtQixLQUF2QixFQUE4QjtBQUNqQyxXQUFLUixTQUFMLEdBQWlCLEtBQUtELGVBQXRCO0FBQ0EsV0FBSzZELFFBQUw7QUFDSDtBQUNKOztBQUVELE1BQUksS0FBS25ELFFBQVQsRUFBbUI7QUFDZixTQUFLbUQsUUFBTDtBQUNIOztBQUVELE1BQUksS0FBS2pILEdBQUwsQ0FBU29HLFNBQWIsRUFBd0I7QUFDcEIsUUFBSSxDQUFDLEtBQUtoQyxXQUFWLEVBQXVCO0FBQ25CLFdBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxXQUFLeUUsTUFBTDtBQUNIO0FBQ0o7O0FBRUQsTUFBSWxHLE9BQU8sR0FBRy9DLEVBQUUsQ0FBQ2dELE9BQUgsQ0FBV0MsS0FBekI7QUFDQSxNQUFJQyxPQUFPLEdBQUdsRCxFQUFFLENBQUNnRCxPQUFILENBQVdHLE1BQXpCOztBQUNBLE1BQUlKLE9BQU8sR0FBR0csT0FBZCxFQUF1QjtBQUNuQixTQUFLdUIsU0FBTCxHQUFpQixHQUFqQjtBQUNILEdBRkQsTUFFTztBQUNILFNBQUtBLFNBQUwsR0FBaUIsR0FBakI7QUFDSDtBQUVKLENBeGhCTCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgUmVzOiByZXF1aXJlKCdSZXMnKSxcclxuICAgICAgICBIYW5kOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBvc0ZhbGw6IGNjLk5vZGUsXHJcbiAgICAgICAgUmVzdHJpY3RlZEFyZWE6IGNjLk5vZGUsXHJcbiAgICAgICAgVmlld0VuZDogY2MuTm9kZSxcclxuICAgICAgICBFbmFibGVfQ2xpY2s6IGNjLk5vZGUsXHJcbiAgICAgICAgQm9keV8wMTogY2MuTm9kZSxcclxuICAgICAgICBCb2R5XzAyOiBjYy5Ob2RlLFxyXG4gICAgICAgIFJvdW5kOiBjYy5Ob2RlLFxyXG4gICAgICAgIEFyZWFXaW46IGNjLk5vZGUsXHJcbiAgICAgICAgSGFuZEZha2U6IGNjLk5vZGUsXHJcbiAgICAgICAgR3JhcGhpY3M6IGNjLk5vZGUsXHJcbiAgICAgICAgR3JhcGhpY0JhY2t1cDogY2MuTm9kZSxcclxuICAgICAgICBQb3NTdGFydDogY2MuTm9kZSxcclxuICAgICAgICBIYW5kR3VpbGQ6IGNjLk5vZGUsXHJcbiAgICAgICAgR3VpbGRHbWFtZTogY2MuTm9kZSxcclxuICAgICAgICBMdWNreU1vbmV5OiBjYy5Ob2RlLFxyXG4gICAgICAgIFBvaW50Q29sbGlkZXI6IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIGhpbnQ6IGNjLk5vZGUsXHJcbiAgICAgICAgLy8gXHJcblxyXG4gICAgICAgIFJvcGVfQXVkaW86IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBGaWdodF9BdWRpbzogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIEFhYWFfQXVkaW86IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBIYWhhaF9BdWRpbzogY2MuQXVkaW9DbGlwLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHBoeXNpY3NfbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljc19tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBoeXNpY3NfbWFuYWdlci5ncmF2aXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfYWFiYkJpdCB8XHJcbiAgICAgICAgLy8gICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XHJcbiAgICAgICAgLy8gICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcclxuICAgICAgICAvLyAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9qb2luQml0IHxcclxuICAgICAgICAvLyAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgc2NyZWVuVyA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgbGV0IHNjcmVlbkggPSBjYy53aW5TaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHNjcmVlblcgPCBzY3JlZW5IKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGluZVdpZHRoID0gMjtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5Db2xvcldpblN0YXR1cyA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOERGQUZGXCIpO1xyXG4gICAgICAgIHRoaXMuQ29sb3JXYWl0U3RhdHVzID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgdGhpcy5Db2xvckxvc2VTdGF0dXMgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI2ZmMDAwMFwiKTtcclxuICAgICAgICB0aGlzLkNvbG9yTGluZSA9IHRoaXMuQ29sb3JXYWl0U3RhdHVzO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuRmxhZ0F1ZGlvX1JvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuQmFja3VwID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzQ29sbGlkZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZsYWdBZGQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZsYWdiYWNrdXBTdGF0dXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY291bnRDb2xsaWRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5GbGFnU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GbGFnTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmxsb3dfQ3VycmVudCA9IDE7XHJcbiAgICAgICAgdGhpcy5GbGFnQXVkaW9fUm9wZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5BcnJQb2ludCA9IFtdO1xyXG4gICAgICAgIHRoaXMuQXJyUG9pbnRFZGl0ID0gW107XHJcbiAgICAgICAgdGhpcy5mbGFnUGh5c2ljID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxlcnBGYWN0b3IgPSAwLjA1O1xyXG4gICAgICAgIHRoaXMuZmxhZ0RvbmVPbmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5CYWNrdXBQb3NNb3ZlID0gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5BZGRDb2xsaWRlcih0aGlzLlBvaW50Q29sbGlkZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBBZGRDb2xsaWRlcihub2RlKSB7XHJcbiAgICAgICAgbGV0IG15Q29sbGlkZXIgPSBub2RlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcik7XHJcbiAgICAgICAgaWYgKG15Q29sbGlkZXIpIHtcclxuICAgICAgICAgICAgY29sbGlkZXIub24oQ29udGFjdDJEVHlwZS5CRUdJTl9DT05UQUNULCB0aGlzLm9uQmVnaW5Db250YWN0LCB0aGlzKTtcclxuICAgICAgICAgICAgY29sbGlkZXIub24oQ29udGFjdDJEVHlwZS5FTkRfQ09OVEFDVCwgdGhpcy5vbkVuZENvbnRhY3QsIHRoaXMpO1xyXG4gICAgICAgICAgICBjb2xsaWRlci5vbihDb250YWN0MkRUeXBlLlBSRV9TT0xWRSwgdGhpcy5vblByZVNvbHZlLCB0aGlzKTtcclxuICAgICAgICAgICAgY29sbGlkZXIub24oQ29udGFjdDJEVHlwZS5QT1NUX1NPTFZFLCB0aGlzLm9uUG9zdFNvbHZlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludDEsIHBvaW50Mikge1xyXG4gICAgICAgIC8vIFPhu60gZOG7pW5nIHBoxrDGoW5nIHRyw6xuaCBraG/huqNuZyBjw6FjaCBFdWNsaWRcclxuICAgICAgICBjb25zdCBkeCA9IHBvaW50Mi54IC0gcG9pbnQxLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDIueSAtIHBvaW50MS55O1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICBjb25zdCByb3VuZGVkRGlzdGFuY2UgPSBNYXRoLnJvdW5kKGRpc3RhbmNlKTtcclxuICAgICAgICByZXR1cm4gcm91bmRlZERpc3RhbmNlICogODtcclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuUmVzLlN0YXJ0QXVkaW8oKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuUmVzLkZsYWdNb3ZlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuUmVzLkZsYWdfRG9uZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuUmVzLlN0YXJ0QXVkaW8oKTtcclxuICAgICAgICB0aGlzLkhhbmRHdWlsZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpLnN1YlNlbGYoY2MudjIoY2Mud2luU2l6ZS53aWR0aCAvIDIsIGNjLndpblNpemUuaGVpZ2h0IC8gMikpO1xyXG4gICAgICAgIC8vIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoUG9zKTtcclxuICAgICAgICBpZiAodGhpcy5GbGFnQXVkaW9fUm9wZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlJlcy5pcm9uU291cmNlU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5GbGFnQXVkaW9fUm9wZSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5Sb3BlX0F1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkZsYWdBdWRpb19Sb3BlID0gbnVsbDtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmFja3VwUG9zTW92ZSA9IHRoaXMuSGFuZC5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLkhhbmQucG9zaXRpb24gPSB0aGlzLmxlcnAodGhpcy5IYW5kLnBvc2l0aW9uLCB0b3VjaFBvcywgdGhpcy5sZXJwRmFjdG9yKTtcclxuICAgICAgICB0aGlzLkhhbmRGYWtlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNDaGVja0RvbmUoKTtcclxuICAgICAgICB0aGlzLmlzT3ZlcmxhcHBpbmdOb2RlQigpO1xyXG4gICAgICAgIHRoaXMuRHJhZ01vdmUoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQXBwcm94aW1hdGVseUNvbGxpbmVhcigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tQb3AoKTtcclxuICAgICAgICB0aGlzLmNoZWNrRmFsc2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbGVycChzdGFydCwgZW5kLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0Lm11bCgxIC0gdCkuYWRkKGVuZC5tdWwodCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc092ZXJsYXBwaW5nTm9kZUIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuRmxhZ01vdmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLlJlc3RyaWN0ZWRBcmVhLl9jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0MSA9IHRoaXMuSGFuZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVjdDIgPSBlbGVtZW50LmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG4gICAgICAgICAgICBpZiAocmVjdDEuaW50ZXJzZWN0cyhyZWN0MikpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKGVsZW1lbnQuX25hbWUgPT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5IYW5kLnNldFBvc2l0aW9uKHRoaXMuQmFja3VwUG9zTW92ZS54LCB0aGlzLkhhbmQueSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLkhhbmQuc2V0UG9zaXRpb24odGhpcy5IYW5kLngsIHRoaXMuQmFja3VwUG9zTW92ZS55KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0UG9zaXRpb24odGhpcy5IYW5kLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0NoZWNrRG9uZSgpIHtcclxuICAgICAgICBjb25zdCByZWN0MSA9IHRoaXMuSGFuZC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICBjb25zdCByZWN0MiA9IHRoaXMuQXJlYVdpbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICBpZiAocmVjdDIuaW50ZXJzZWN0cyhyZWN0MSkpIHtcclxuICAgICAgICAgICAgdGhpcy5GbGFnU3RhdHVzID0gXCJSb3VuZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWRqdXN0UG9zaXRpb24obm9kZUEsIG5vZGVCKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gMjA7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gY2MudjIobm9kZUIueCAtIG5vZGVBLngsIG5vZGVCLnkgLSBub2RlQS55KS5ub3JtYWxpemUoKTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IG5vZGVBLndpZHRoIC8gbnVtYmVyICsgbm9kZUIud2lkdGggLyBudW1iZXI7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBjYy52Mihub2RlQS54IC0gZGlyZWN0aW9uLnggKiBkaXN0YW5jZSwgbm9kZUEueSAtIGRpcmVjdGlvbi55ICogZGlzdGFuY2UpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2Ygbm9kZUFcclxuICAgICAgICB0aGlzLkhhbmQuc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkZsYWdTdGF0dXMgPT0gXCJSb3VuZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkFyclBvaW50Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXdFbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkd1aWxkR21hbWUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuRmxhZ01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlJlc3RyaWN0ZWRBcmVhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLlJvdW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NTdGFydCA9IHRoaXMuUG9zU3RhcnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5MdWNreU1vbmV5LnNldFBvc2l0aW9uKHRoaXMuSGFuZC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5Nb3ZlKHRoaXMuSGFuZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuTW92ZSh0aGlzLkx1Y2t5TW9uZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5FbmFibGVfQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5GbGFnU3RhdHVzID09IFwiR29kXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW92ZUNvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5mbGFnRG9uZU9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdEb25lT25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ1N0YXR1cyA9ICdXaW4nO1xyXG4gICAgICAgICAgICB0aGlzLkRvbmVGbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgTW92ZShub2RlTW92ZSwgZmxhZ1BvcCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5BcnJQb2ludEVkaXQubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IHRoaXMuQXJyUG9pbnRFZGl0W2ldO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3BlZWQgPSA1MDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFBvcyA9IHRoaXMuQXJyUG9pbnRFZGl0W2kgLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzdGFydFBvcy5zdWIoZW5kUG9zKS5tYWcoKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZUR1cmF0aW9uID0gZGlzdGFuY2UgLyBtb3ZlU3BlZWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gY2MubW92ZVRvKG1vdmVEdXJhdGlvbiwgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWEFjdGlvbiA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9IHRoaXMuQXJyUG9pbnRFZGl0Lmxlbmd0aCAtIDEgJiYgZmxhZ1BvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXJyUG9pbnQucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzcGF3bkFjdGlvbiA9IGNjLnNwYXduKG1vdmVBY3Rpb24sIHNjYWxlWEFjdGlvbik7XHJcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChzcGF3bkFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvbkNvbXBsZXRlID0gY2MuY2FsbEZ1bmModGhpcy5vbk1vdmVDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgLy8gVOG6oW8gc2VxdWVuY2UgdOG7qyBjw6FjIGFjdGlvbiBkaSBjaHV54buDbiB2w6AgdGhheSDEkeG7lWkgc2NhbGVYXHJcbiAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShhY3Rpb25zLCBvbkNvbXBsZXRlKTtcclxuICAgICAgICB2YXIgbW92ZVdpdGhDYWxsYmFjayA9IGNjLnNlcXVlbmNlKHNlcXVlbmNlLCBvbkNvbXBsZXRlKTtcclxuICAgICAgICAvLyDDgXAgZOG7pW5nIHNlcXVlbmNlIHbDoG8gbm9kZVxyXG4gICAgICAgIG5vZGVNb3ZlLnJ1bkFjdGlvbihtb3ZlV2l0aENhbGxiYWNrKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIERyYWdNb3ZlKCkge1xyXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy5HcmFwaGljcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgcG9zU3RhcnQgPSB0aGlzLlBvc1N0YXJ0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgcG9zRW5kID0gdGhpcy5IYW5kLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IEFyclBvc05ldyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLkFyclBvaW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5BcnJQb2ludC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyUG9zTmV3LnB1c2goZWxlbWVudC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcnJQb3NOZXcudW5zaGlmdChwb3NTdGFydCk7XHJcbiAgICAgICAgQXJyUG9zTmV3LnB1c2gocG9zRW5kKTtcclxuICAgICAgICB0aGlzLkFyclBvaW50RWRpdCA9IEFyclBvc05ldztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFyclBvc05ldy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSB0aGlzLkNvbG9yTGluZTtcclxuICAgICAgICAgICAgLy8gZ3JhcGhpY3MubGluZVdpZHRoID0gMztcclxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKEFyclBvc05ld1tpXS54LCBBcnJQb3NOZXdbaV0ueSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhBcnJQb3NOZXdbaSArIDFdLngsIEFyclBvc05ld1tpICsgMV0ueSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleCA9IEFyclBvc05ldy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5EaXJlY3Rpb25WZWN0b3IoQXJyUG9zTmV3W2luZGV4IC0gMl0sIEFyclBvc05ld1tpbmRleCAtIDFdKTtcclxuICAgIH0sXHJcblxyXG4gICAgRGlyZWN0aW9uVmVjdG9yKHBvc1N0YXJ0LCBwb3NFbmQpIHtcclxuICAgICAgICBsZXQgeDEgPSBwb3NTdGFydC54O1xyXG4gICAgICAgIGxldCB5MSA9IHBvc1N0YXJ0Lnk7XHJcbiAgICAgICAgbGV0IHgyID0gcG9zRW5kLng7XHJcbiAgICAgICAgbGV0IHkyID0gcG9zRW5kLnk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jYWxjdWxhdGVBbmdsZSh4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5IYW5kLmFuZ2xlID0gYW5nbGUgKyAzMDtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tBcHByb3hpbWF0ZWx5Q29sbGluZWFyKCkge1xyXG4gICAgICAgIC8vIEtp4buDbSB0cmEgeGVtIGJhIMSRaeG7g20gY8OzIGfhuqduIMSRw7puZyB0aOG6s25nIGjDoG5nIGhheSBraMO0bmcgduG7m2kgbmfGsOG7oW5nIGzDoCA1IChob+G6t2Mgc+G7kSBraMOhYyB0w7l5IGNo4buNbilcclxuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAyMDA7XHJcbiAgICAgICAgbGV0IGlzQXBwcm94aW1hdGVseUNvbGxpbmVhcjtcclxuICAgICAgICBsZXQgaXNTcGFjZTtcclxuICAgICAgICBsZXQgaXNTcGFjZTI7XHJcbiAgICAgICAgdGhpcy5Qb2ludENvbGxpZGVyLl9jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5BcnJQb2ludC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5faWQgPT0gdGhpcy5BcnJQb2ludFt0aGlzLkFyclBvaW50Lmxlbmd0aCAtIDFdLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuQXJyUG9pbnRFZGl0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRBID0gdGhpcy5BcnJQb2ludEVkaXRbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRCID0gdGhpcy5BcnJQb2ludEVkaXRbaW5kZXggLSAyXTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRDID0gdGhpcy5BcnJQb2ludEVkaXRbaW5kZXggLSAyXTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnREID0gdGhpcy5BcnJQb2ludEVkaXRbaW5kZXggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRldmlhdGlvbiA9IE1hdGguYWJzKChlbGVtZW50LnkgLSBwb2ludEEueSkgKiAocG9pbnRCLnggLSBwb2ludEEueCkgLSAoZWxlbWVudC54IC0gcG9pbnRBLngpICogKHBvaW50Qi55IC0gcG9pbnRBLnkpKTtcclxuICAgICAgICAgICAgaXNBcHByb3hpbWF0ZWx5Q29sbGluZWFyID0gZGV2aWF0aW9uIDwgdGhpcy50aHJlc2hvbGQ7XHJcbiAgICAgICAgICAgIGNvbnN0IFNwYWNlMSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHBvaW50QSwgcG9pbnRCKTtcclxuICAgICAgICAgICAgY29uc3QgU3BhY2UyID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZUJldHdlZW5Qb2ludHMocG9pbnRBLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgY29uc3QgU3BhY2UzID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZUJldHdlZW5Qb2ludHMocG9pbnRDLCBwb2ludEQpO1xyXG4gICAgICAgICAgICBjb25zdCBTcGFjZTQgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEMsIGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaXNTcGFjZSA9IFNwYWNlMSA+IFNwYWNlMjtcclxuICAgICAgICAgICAgaXNTcGFjZTIgPSBTcGFjZTMgPiBTcGFjZTQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkFyclBvaW50Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJhY2t1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTuG6v3UgdHLhuqFuZyB0aMOhaSB0csaw4bubYyDEkcOzIGzDoCBraMO0bmcgdGjhurNuZyBow6BuZyB2w6AgaGnhu4duIHThuqFpIGzDoCB0aOG6s25nIGjDoG5nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLkJhY2t1cCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5CYWNrdXAuX2lkID09IGVsZW1lbnQuX2lkKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NwYWNlICYmIGlzU3BhY2UyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBcHByb3hpbWF0ZWx5Q29sbGluZWFyICYmICF0aGlzLmlzQ29sbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5BcnJQb2ludC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFyclBvaW50LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmFja3VwID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GbGFnQWRkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GbGFnYmFja3VwU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudENvbGxpZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5faWQgIT0gdGhpcy5CYWNrdXAuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZsYWdBZGQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudENvbGxpZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQXJyUG9pbnQucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmFja3VwID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tQb3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuRmxhZ01vdmUpIHJldHVybjtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuQXJyUG9pbnRFZGl0Lmxlbmd0aDtcclxuICAgICAgICBpZiAoaW5kZXggPD0gMikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDIwMDtcclxuICAgICAgICBsZXQgaXNBcHByb3hpbWF0ZWx5Q29sbGluZWFyO1xyXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy5HcmFwaGljQmFja3VwLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgbGV0IEFyclBvc05ldyA9IFtdO1xyXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgcG9zU3RhcnQgPSB0aGlzLkFyclBvaW50RWRpdFtpbmRleCAtIDNdO1xyXG4gICAgICAgIGNvbnN0IHBvc0VuZCA9IHRoaXMuQXJyUG9pbnRFZGl0W2luZGV4IC0gMV07XHJcbiAgICAgICAgQXJyUG9zTmV3LnVuc2hpZnQocG9zU3RhcnQpO1xyXG4gICAgICAgIEFyclBvc05ldy5wdXNoKHBvc0VuZCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJQb3NOZXcubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhBcnJQb3NOZXdbaV0ueCwgQXJyUG9zTmV3W2ldLnkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oQXJyUG9zTmV3W2kgKyAxXS54LCBBcnJQb3NOZXdbaSArIDFdLnkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRBID0gcG9zU3RhcnQ7XHJcbiAgICAgICAgY29uc3QgcG9pbnRCID0gcG9zRW5kO1xyXG4gICAgICAgIGNvbnN0IHBvaW50QyA9IHRoaXMuQXJyUG9pbnRbdGhpcy5BcnJQb2ludC5sZW5ndGggLSAxXTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gcG9pbnRDO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5BcnJQb2ludC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Ll9pZCA9PSB0aGlzLkFyclBvaW50W3RoaXMuQXJyUG9pbnQubGVuZ3RoIC0gMV0uX2lkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpYXRpb24gPSBNYXRoLmFicygoZWxlbWVudC55IC0gcG9pbnRBLnkpICogKHBvaW50Qi54IC0gcG9pbnRBLngpIC0gKGVsZW1lbnQueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KSk7XHJcbiAgICAgICAgICAgICAgICBpc0FwcHJveGltYXRlbHlDb2xsaW5lYXIgPSBkZXZpYXRpb24gPCB0aGlzLnRocmVzaG9sZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNwYWNlMSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHBvaW50QSwgcG9pbnRCKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNwYWNlMiA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHBvaW50QSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NwYWNlID0gU3BhY2UxID4gU3BhY2UyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIGlmIChpc1NwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXBwcm94aW1hdGVseUNvbGxpbmVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5GbGFnYmFja3VwU3RhdHVzICE9IHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZsYWdiYWNrdXBTdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMuY291bnRDb2xsaWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50Q29sbGlkZXIgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRDb2xsaWRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BcnJQb2ludC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjaGVja0ZhbHNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkFyclBvaW50RWRpdC5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0FwcHJveGltYXRlbHlDb2xsaW5lYXI7XHJcbiAgICAgICAgICAgIGxldCBpc1NwYWNlO1xyXG4gICAgICAgICAgICBsZXQgaXNTcGFjZTI7XHJcbiAgICAgICAgICAgIHRoaXMucG9zRmFsbC5fY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5BcnJQb2ludEVkaXQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRBID0gdGhpcy5BcnJQb2ludEVkaXRbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50QiA9IHRoaXMuQXJyUG9pbnRFZGl0W2luZGV4IC0gMl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludEMgPSB0aGlzLkFyclBvaW50RWRpdFtpbmRleCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnREID0gdGhpcy5BcnJQb2ludEVkaXRbaW5kZXggLSAxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpYXRpb24gPSBNYXRoLmFicygoZWxlbWVudC55IC0gcG9pbnRBLnkpICogKHBvaW50Qi54IC0gcG9pbnRBLngpIC0gKGVsZW1lbnQueCAtIHBvaW50QS54KSAqIChwb2ludEIueSAtIHBvaW50QS55KSk7XHJcbiAgICAgICAgICAgICAgICBpc0FwcHJveGltYXRlbHlDb2xsaW5lYXIgPSBkZXZpYXRpb24gPCB0aGlzLnRocmVzaG9sZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNwYWNlMSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHBvaW50QSwgcG9pbnRCKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNwYWNlMiA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VCZXR3ZWVuUG9pbnRzKHBvaW50QSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTcGFjZTMgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEMsIHBvaW50RCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTcGFjZTQgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEMsIGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlzU3BhY2UgPSBTcGFjZTEgPiBTcGFjZTI7XHJcbiAgICAgICAgICAgICAgICBpc1NwYWNlMiA9IFNwYWNlMyA+IFNwYWNlNDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTcGFjZSAmJiBpc1NwYWNlMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FwcHJveGltYXRlbHlDb2xsaW5lYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GbGFnU3RhdHVzID0gXCJHb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ1N0YXR1cyA9ICdMb3NlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcy5GbGFnX0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpc0FwcHJveGltYXRlbHlDb2xsaW5lYXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc1N0YXJ0ID0gdGhpcy5Qb3NTdGFydC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NFbmQgPSB0aGlzLkhhbmQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRBID0gcG9zU3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50QiA9IHBvc0VuZDtcclxuICAgICAgICAgICAgdGhpcy5wb3NGYWxsLl9jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGV2aWF0aW9uID0gTWF0aC5hYnMoKGVsZW1lbnQueSAtIHBvaW50QS55KSAqIChwb2ludEIueCAtIHBvaW50QS54KSAtIChlbGVtZW50LnggLSBwb2ludEEueCkgKiAocG9pbnRCLnkgLSBwb2ludEEueSkpO1xyXG4gICAgICAgICAgICAgICAgaXNBcHByb3hpbWF0ZWx5Q29sbGluZWFyID0gZGV2aWF0aW9uIDwgdGhpcy50aHJlc2hvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTcGFjZTEgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50Qik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTcGFjZTIgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEEsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTcGFjZSA9IFNwYWNlMSA+IFNwYWNlMjtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXBwcm94aW1hdGVseUNvbGxpbmVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZsYWdTdGF0dXMgPSBcIkdvZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcy5GbGFnTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcy5GbGFnU3RhdHVzID0gJ0xvc2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVzLkZsYWdfRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGN1bGF0ZURpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludDEsIHBvaW50Mikge1xyXG4gICAgICAgIC8vIFPhu60gZOG7pW5nIHBoxrDGoW5nIHRyw6xuaCBraG/huqNuZyBjw6FjaCBFdWNsaWRcclxuICAgICAgICBjb25zdCBkeCA9IHBvaW50Mi54IC0gcG9pbnQxLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDIueSAtIHBvaW50MS55O1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICBjb25zdCByb3VuZGVkRGlzdGFuY2UgPSBNYXRoLnJvdW5kKGRpc3RhbmNlKTtcclxuICAgICAgICByZXR1cm4gcm91bmRlZERpc3RhbmNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBEaXJlY3Rpb25WZWN0b3JQaHlzaWNzKHBvc1N0YXJ0LCBwb3NFbmQpIHtcclxuICAgICAgICBsZXQgeDEgPSBwb3NTdGFydC54O1xyXG4gICAgICAgIGxldCB5MSA9IHBvc1N0YXJ0Lnk7XHJcbiAgICAgICAgbGV0IHgyID0gcG9zRW5kLng7XHJcbiAgICAgICAgbGV0IHkyID0gcG9zRW5kLnk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jYWxjdWxhdGVBbmdsZSh4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxjdWxhdGVBbmdsZSh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIC8vIFTDrW5oIGjhu4cgc+G7kSBnw7NjIGPhu6dhIMSRb+G6oW4gdGjhurNuZyBu4buRaSBoYWkgxJFp4buDbVxyXG4gICAgICAgIGxldCBkZWx0YVkgPSB5MiAtIHkxO1xyXG4gICAgICAgIGxldCBkZWx0YVggPSB4MiAtIHgxO1xyXG5cclxuICAgICAgICAvLyBUw61uaCBhcmN0YW5nZW50IGPhu6dhIGjhu4cgc+G7kSBnw7NjIHbDoCBjaHV54buDbiDEkeG7lWkgdOG7qyByYWRpYW4gc2FuZyDEkeG7mVxyXG4gICAgICAgIGxldCBhbmdsZUluUmFkaWFucyA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpO1xyXG5cclxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgcmFkaWFuIHNhbmcgxJHhu5lcclxuICAgICAgICBsZXQgYW5nbGVJbkRlZ3JlZXMgPSBhbmdsZUluUmFkaWFucyAqICgxODAgLyBNYXRoLlBJKTtcclxuXHJcbiAgICAgICAgLy8gxJDhuqNtIGLhuqNvIGfDs2MgbHXDtG4gbuG6sW0gdHJvbmcga2hv4bqjbmcgdOG7qyAwIMSR4bq/biAzNjAgxJHhu5lcclxuICAgICAgICBhbmdsZUluRGVncmVlcyA9IChhbmdsZUluRGVncmVlcyArIDM2MCkgJSAzNjA7XHJcblxyXG4gICAgICAgIHJldHVybiBhbmdsZUluRGVncmVlcztcclxuICAgIH0sXHJcblxyXG4gICAgRG9uZUZuKCkge1xyXG4gICAgICAgIHRoaXMuR3JhcGhpY3MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXMuRmxhZ19Eb25lID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5SZXMuRmxhZ1N0YXR1cyA9PSAnV2luJykge1xyXG4gICAgICAgICAgICB0aGlzLkJvZHlfMDIuX2NoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlJlcy5pcm9uU291cmNlU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuUmVzLkZsYWdBdWRpb2hhaGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlcy5GbGFnQXVkaW9oYWhhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkhhaGFoX0F1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5SZXMuaXJvblNvdXJjZVNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlJlcy5GbGFnQXVkaW9oYWhhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ0F1ZGlvaGFoYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BYWFhX0F1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkZpZ2h0X0F1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Cb2R5XzAyLl9jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Cb2R5XzAxLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQm9keV8wMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlJvdW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuR3VpbGRHbWFtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkx1Y2t5TW9uZXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlld0VuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuRmxhZ01vdmUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuRmxhZ1N0YXR1cyA9PSBcIlJvdW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3JMaW5lID0gdGhpcy5Db2xvcldpblN0YXR1cztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkZsYWdTdGF0dXMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3JMaW5lID0gdGhpcy5Db2xvcldhaXRTdGF0dXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5GbGFnU3RhdHVzID09IFwiR29kXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3JMaW5lID0gdGhpcy5Db2xvckxvc2VTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYWdNb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkZsYWdNb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhZ01vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlJlcy5GbGFnX0RvbmUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmZsYWdEb25lT25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsYWdEb25lT25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuRG9uZUZuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzY3JlZW5XID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgc2NyZWVuSCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChzY3JlZW5XIDwgc2NyZWVuSCkge1xyXG4gICAgICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDQwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
