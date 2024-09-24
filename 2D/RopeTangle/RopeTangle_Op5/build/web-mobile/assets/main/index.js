window.__require=function t(o,e,n){function r(i,s){if(!e[i]){if(!o[i]){var a=i.split("/");if(a=a[a.length-1],!o[a]){var p="function"==typeof __require&&__require;if(!s&&p)return p(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var l=e[i]={exports:{}};o[i][0].call(l.exports,function(t){return r(o[i][1][t]||t)},l,l.exports,t,o,e,n)}return e[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({AudioManager:[function(t,o,e){"use strict";cc._RF.push(o,"4c7cf9rDSJL36cJtz1lUze/","AudioManager");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(o,e,i):r(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(e,"__esModule",{value:!0});var i=t("../Data/constants"),s=cc._decorator,a=s.ccclass,p=s.property,l=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.bgSound=null,o.ropeSound1=null,o.ropeSound2=null,o.breakRopeSound=null,o.completeSound=null,o.completeSound2=null,o}return r(o,t),o.prototype.playSound=function(t){if(i.Constants.ironSource.SoundState)switch(t){case"bgSound":this.bgSound.play();break;case"ropeSound1":this.ropeSound1.play();break;case"ropeSound2":this.ropeSound2.play();break;case"completeSound":this.completeSound.play();break;case"completeSound2":this.completeSound2.play();break;case"breakRopeSound":this.breakRopeSound.play()}},o.prototype.stopSound=function(t){switch(t){case"bgSound":this.bgSound.stop();break;case"ropeSound1":this.ropeSound1.stop();break;case"ropeSound2":this.ropeSound2.stop();break;case"completeSound":this.completeSound.stop();break;case"completeSound2":this.completeSound2.stop();break;case"breakRopeSound":this.breakRopeSound.stop()}},o.prototype.stopAllSound=function(){this.bgSound.stop(),this.ropeSound1.stop(),this.ropeSound2.stop(),this.completeSound.stop(),this.completeSound2.stop(),this.breakRopeSound.stop()},c([p(cc.AudioSource)],o.prototype,"bgSound",void 0),c([p(cc.AudioSource)],o.prototype,"ropeSound1",void 0),c([p(cc.AudioSource)],o.prototype,"ropeSound2",void 0),c([p(cc.AudioSource)],o.prototype,"breakRopeSound",void 0),c([p(cc.AudioSource)],o.prototype,"completeSound",void 0),c([p(cc.AudioSource)],o.prototype,"completeSound2",void 0),c([a],o)}(cc.Component);e.default=l,cc._RF.pop()},{"../Data/constants":"constants"}],GameController:[function(t,o,e){"use strict";cc._RF.push(o,"459a6fkmHFH5Z+5+z1O55SB","GameController");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(o,e,i):r(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(e,"__esModule",{value:!0}),e.GameController=void 0;var i=t("../Data/constants"),s=t("../Plugin/AudioManager"),a=cc._decorator,p=a.ccclass,l=a.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.AudioManager=null,o}return r(o,t),o.prototype.onLoad=function(){},o.prototype.start=function(){window.gameReady&&window.gameReady()},o.prototype.installHandle=function(){if(console.log("install"),i.Constants.ironSource.isEndGame=!0,this.AudioManager.stopAllSound(),window.gameEnd&&window.gameEnd(),"undefined"==typeof playableSDK)if("undefined"==typeof ExitApi){if("undefined"==typeof dapi)return"undefined"!=typeof mraid?(cc.sys.os==cc.sys.OS_ANDROID||(cc.sys.os,cc.sys.ANDROID),void mraid.open("https://play.google.com/store/apps/details?id=com.an.ropetangle.mastertwisted3d")):void(window.install&&window.install());dapi.openStoreUrl()}else ExitApi.exit();else window.playableSDK.openAppStore()},c([l(s.default)],o.prototype,"AudioManager",void 0),c([p],o)}(cc.Component);e.GameController=u,cc._RF.pop()},{"../Data/constants":"constants","../Plugin/AudioManager":"AudioManager"}],GamePlay:[function(t,o,e){"use strict";cc._RF.push(o,"b1d34srP15JNoxtzOCtQ0oZ","GamePlay");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(o,e,i):r(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(e,"__esModule",{value:!0});var i=t("../Data/constants"),s=t("../Plugin/AudioManager"),a=t("./GameController"),p=cc._decorator,l=p.ccclass,u=p.property,d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.AudioManager=null,o.GameController=null,o.Character=null,o.UI_Hrz=null,o.UI_Vtc=null,o.Ropes=[],o.hints=[],o.Effects=[],o.Ropes_Vtc=[],o.hints_Vtc=[],o.Effects_Vtc=[],o.Ponmi_Roped=null,o.Spine_Rope=null,o.Pomi_UnRoped=null,o.CTA=null,o.CTA_overlay=null,o.CTA_btn=null,o.step1Flag=!1,o.step2Flag=!1,o}return r(o,t),o.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,this.initGame()},o.prototype.initGame=function(){this.Pomi_UnRoped.active=!1,this.hints.forEach(function(t){return t.active=!1}),this.hints_Vtc.forEach(function(t){return t.active=!1}),this.CTA.active=!1},o.prototype.start=function(){this.handleGamePlay()},o.prototype.handleGamePlay=function(){this.hints[0].active=!0,this.hints_Vtc[0].active=!0},o.prototype.showCTA=function(){this.CTA.active=!0,this.CTA_btn.on(cc.Node.EventType.TOUCH_START,this.GameController.installHandle,this),this.CTA_overlay.on(cc.Node.EventType.TOUCH_START,this.GameController.installHandle,this)},o.prototype.checkStep=function(){var t=this;switch(i.Constants.step){case 1:this.step1Flag=!0,this.hints[0].active=!1,this.hints_Vtc[0].active=!1,this.scheduleOnce(function(){t.Ropes[0].getComponent(cc.Animation).play("Rope_BackAnim"),t.Ropes_Vtc[0].getComponent(cc.Animation).play("Rope_BackAnim")},.5),this.scheduleOnce(function(){t.Effects[0].resetSystem(),t.Effects_Vtc[0].resetSystem(),t.AudioManager.playSound(i.Constants.SoundTrack.completeSound)},1),this.scheduleOnce(function(){t.Spine_Rope.setAnimation(0,"break",!1),t.AudioManager.playSound(i.Constants.SoundTrack.breakRopeSound),t.hints[2].active=!0,t.hints[1].active=!1,t.hints_Vtc[2].active=!0,t.hints_Vtc[1].active=!1},1.5);break;case 2:this.step2Flag=!0,this.hints[2].active=!1,this.hints[1].active=!1,this.hints_Vtc[2].active=!1,this.hints_Vtc[1].active=!1,this.scheduleOnce(function(){t.Ropes[1].getComponent(cc.Animation).play("Rope_BackAnim"),t.Ropes[2].getComponent(cc.Animation).play("Rope_BackAnim"),t.Ropes_Vtc[1].getComponent(cc.Animation).play("Rope_BackAnim"),t.Ropes_Vtc[2].getComponent(cc.Animation).play("Rope_BackAnim")},.5),this.scheduleOnce(function(){t.Effects[0].resetSystem(),t.Effects[1].resetSystem(),t.Effects_Vtc[0].resetSystem(),t.Effects_Vtc[1].resetSystem(),t.AudioManager.playSound(i.Constants.SoundTrack.completeSound2)},1),this.scheduleOnce(function(){t.Ponmi_Roped.active=!1,t.Pomi_UnRoped.active=!0},1.5),this.scheduleOnce(function(){t.showCTA()},2.5);break;case 3:this.GameController.installHandle()}i.Constants.step=i.Constants.step+1},o.prototype.update=function(){i.Constants.isCollideKnot1&&!this.step1Flag&&this.checkStep(),i.Constants.isCollideKnot2&&!this.step2Flag&&this.checkStep()},c([u(s.default)],o.prototype,"AudioManager",void 0),c([u(a.GameController)],o.prototype,"GameController",void 0),c([u(cc.Node)],o.prototype,"Character",void 0),c([u(cc.Node)],o.prototype,"UI_Hrz",void 0),c([u(cc.Node)],o.prototype,"UI_Vtc",void 0),c([u([cc.Node])],o.prototype,"Ropes",void 0),c([u([cc.Node])],o.prototype,"hints",void 0),c([u([cc.ParticleSystem])],o.prototype,"Effects",void 0),c([u([cc.Node])],o.prototype,"Ropes_Vtc",void 0),c([u([cc.Node])],o.prototype,"hints_Vtc",void 0),c([u([cc.ParticleSystem])],o.prototype,"Effects_Vtc",void 0),c([u(cc.Node)],o.prototype,"Ponmi_Roped",void 0),c([u(sp.Skeleton)],o.prototype,"Spine_Rope",void 0),c([u(cc.Node)],o.prototype,"Pomi_UnRoped",void 0),c([u(cc.Node)],o.prototype,"CTA",void 0),c([u(cc.Node)],o.prototype,"CTA_overlay",void 0),c([u(cc.Node)],o.prototype,"CTA_btn",void 0),c([l],o)}(cc.Component);e.default=d,cc._RF.pop()},{"../Data/constants":"constants","../Plugin/AudioManager":"AudioManager","./GameController":"GameController"}],Responsive:[function(t,o,e){"use strict";cc._RF.push(o,"d3abaWwEQhAi5Yf4wF9VZxN","Responsive");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(o,e,i):r(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(e,"__esModule",{value:!0});var i=t("../Controller/GamePlay"),s=t("../Controller/TouchAreaController"),a=t("../Data/constants"),p=cc._decorator,l=p.ccclass,u=p.property,d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.TouchAreaController=null,o.GamePlay=null,o.background=null,o.device="",o.isRotate=!1,o.HORIZONTAL_IPX="horizontal_IPX",o.HORIZONTAL_TABLET="horizontal_Tablet",o.VERTICAL_IPX="vertical_IPX",o.VERTICAL_MOBILE="vertical_Mobile",o}return r(o,t),o.prototype.onLoad=function(){},o.prototype.start=function(){},o.prototype.handleRotate=function(){cc.view.getFrameSize().width>cc.view.getFrameSize().height?(a.Constants.isRotate=!0,this.setHorizontal()):(a.Constants.isRotate=!1,this.setVertical())},o.prototype.setHorizontal=function(){cc.view.getFrameSize().height/cc.view.getFrameSize().width<.65?this.setHorizontalForIpX():this.setHorizontalForTablet()},o.prototype.setHorizontalForIpX=function(){this.HORIZONTAL_IPX!==this.device&&(this.device=this.HORIZONTAL_IPX,this.background.scale=.6,this.GamePlay.UI_Hrz.opacity=255,this.GamePlay.UI_Vtc.opacity=0,this.GamePlay.Character.scale=1.3,this.GamePlay.Character.x=152,this.GamePlay.Character.y=-140,this.TouchAreaController.HideMask.x=-55,this.TouchAreaController.HideMask.y=-95)},o.prototype.setHorizontalForTablet=function(){this.HORIZONTAL_TABLET!==this.device&&(this.device=this.HORIZONTAL_TABLET,this.background.scale=.4,this.GamePlay.UI_Hrz.opacity=255,this.GamePlay.UI_Vtc.opacity=0,this.GamePlay.Character.scale=1.3,this.GamePlay.Character.x=152,this.GamePlay.Character.y=-140,this.TouchAreaController.HideMask.x=-65,this.TouchAreaController.HideMask.y=-120)},o.prototype.setVertical=function(){cc.view.getFrameSize().width/cc.view.getFrameSize().height<.5?this.setIphoneX():this.setMobile()},o.prototype.setIphoneX=function(){this.VERTICAL_IPX!==this.device&&(this.device=this.VERTICAL_IPX,this.GamePlay.UI_Hrz.opacity=0,this.GamePlay.UI_Vtc.opacity=255,this.background.scale=.4,this.GamePlay.Character.scale=1,this.GamePlay.Character.x=0,this.GamePlay.Character.y=-235,this.TouchAreaController.HideMask.x=45,this.TouchAreaController.HideMask.y=16)},o.prototype.setMobile=function(){this.VERTICAL_MOBILE!==this.device&&(this.device=this.VERTICAL_MOBILE,cc.view.getFrameSize().height,cc.view.getFrameSize().width,this.GamePlay.UI_Hrz.opacity=0,this.GamePlay.UI_Vtc.opacity=255,this.background.scale=.4,this.GamePlay.Character.scale=1,this.GamePlay.Character.x=0,this.GamePlay.Character.y=-235,this.TouchAreaController.HideMask.x=45,this.TouchAreaController.HideMask.y=16)},o.prototype.update=function(){this.handleRotate()},c([u(s.TouchAreaController)],o.prototype,"TouchAreaController",void 0),c([u(i.default)],o.prototype,"GamePlay",void 0),c([u(cc.Node)],o.prototype,"background",void 0),c([l],o)}(cc.Component);e.default=d,cc._RF.pop()},{"../Controller/GamePlay":"GamePlay","../Controller/TouchAreaController":"TouchAreaController","../Data/constants":"constants"}],RopeController:[function(t,o,e){"use strict";cc._RF.push(o,"c2b16W9s4RPx5qn/tZMueJI","RopeController");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(o,e,i):r(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(e,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=i.property,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.mouseJoint=!1,o.canvas=null,o.size=cc.size(0,0),o}return r(o,t),o.prototype.start=function(){this.size.width||this.canvas.width,this.size.height||this.canvas.height},c([a(cc.Boolean)],o.prototype,"mouseJoint",void 0),c([a(cc.Node)],o.prototype,"canvas",void 0),c([a(cc.Size)],o.prototype,"size",void 0),c([s],o)}(cc.Component);e.default=p,cc._RF.pop()},{}],RopePart:[function(t,o){"use strict";cc._RF.push(o,"c7bc5h3TcJEULzcwms3QbNi","RopePart"),cc.Class({extends:cc.Component,properties:{Anchor_Position:{default:1,range:[0,1],notify:function(){this.Update_Anchor()}},Pos_Short:0,Pos_Long:24},onLoad:function(){this.Joints=this.node.getComponentsInChildren(cc.RevoluteJoint),this.Joints.reverse()},Update_Anchor:function(){for(var t=1;t<this.Joints.length;t++){var o=this.Joints.length,e=cc.misc.clamp01((this.Anchor_Position-t*(1/o))*o),n=cc.misc.lerp(this.Pos_Short,this.Pos_Long,e);if(this.Joints[t].name.startsWith("RopeItem")&&(this.Joints[t].anchor.x=n,this.Joints[t].connectedAnchor.x=-n,this.Joints[t].apply(),this.Joints[t].node.height=cc.misc.lerp(2*n,2*this.Pos_Long+12,.8)),this.Joints[t].name.startsWith("RopeItem_First")){this.Joints[t].anchor.y=n,this.Joints[t].connectedAnchor.x=-n,this.Joints[t].apply(),this.Joints[t].node.height=cc.misc.lerp(2*n,2*this.Pos_Long+12,.8);break}}}}),cc._RF.pop()},{}],TouchAreaController:[function(t,o,e){"use strict";cc._RF.push(o,"85711X2lIBGPIPjaJXFSYaE","TouchAreaController");var n,r=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(o,e,i):r(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(e,"__esModule",{value:!0}),e.TouchAreaController=void 0;var i=t("../Data/constants"),s=t("../Plugin/AudioManager"),a=t("./GameController"),p=t("./GamePlay"),l=cc._decorator,u=l.ccclass,d=l.property,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.AudioManager=null,o.GameController=null,o.GamePlay=null,o.background=null,o.HideMask=null,o.oneTap=null,o.mouseJoint=null,o.Knots=[],o.Knots_2=[],o.Ropes=[],o.motorJoints=[],o.Knots_Vtc=[],o.Knots_2_Vtc=[],o.Ropes_Vtc=[],o.motorJoints_Vtc=[],o}return r(o,t),o.prototype.start=function(){this.registerEvent()},o.prototype.registerEvent=function(){this.HideMask.on(cc.Node.EventType.TOUCH_START,this.GameController.installHandle,this)},o.prototype.ropeTouchStart=function(){this.GamePlay.hints.forEach(function(t){return t.active=!1}),this.GamePlay.hints_Vtc.forEach(function(t){return t.active=!1}),2!==i.Constants.step&&i.Constants.isCollideKnot1||(this.GamePlay.hints[1].active=!0,this.GamePlay.hints_Vtc[1].active=!0,this.AudioManager.playSound(i.Constants.SoundTrack.ropeSound1)),this.handleIronSourcePlaySound()},o.prototype.ropeTouchEnd=function(){var t=this;!this.Ropes[0].getBoundingBox().intersects(this.Knots[0].getBoundingBox())&&!this.Ropes_Vtc[0].getBoundingBox().intersects(this.Knots_Vtc[0].getBoundingBox())||i.Constants.isCollideKnot1||(i.Constants.isCollideKnot1=!0,i.Constants.knot1Status=!1,i.Constants.knot4Status=!1,this.motorJoints[0].linearOffset=new cc.Vec2(50,245),this.motorJoints_Vtc[0].linearOffset=new cc.Vec2(43,198),this.scheduleOnce(function(){t.motorJoints[0].destroy(),t.motorJoints_Vtc[0].destroy()},.5),this.HideMask.width=5e3,this.AudioManager.playSound(i.Constants.SoundTrack.ropeSound2)),!this.Ropes[1].getBoundingBox().intersects(this.Knots_2[0].getBoundingBox())&&!this.Ropes_Vtc[1].getBoundingBox().intersects(this.Knots_2_Vtc[0].getBoundingBox())||i.Constants.isCollideKnot2||(i.Constants.isCollideKnot2=!0,this.motorJoints[1].linearOffset=new cc.Vec2(115,245),this.motorJoints_Vtc[1].linearOffset=new cc.Vec2(90,198),this.scheduleOnce(function(){t.motorJoints[1].destroy(),t.motorJoints[2].destroy(),t.motorJoints_Vtc[1].destroy(),t.motorJoints_Vtc[2].destroy(),t.AudioManager.playSound(i.Constants.SoundTrack.ropeSound2)},.5))},o.prototype.handleIronSourcePlaySound=function(){i.Constants.ironSource.isPlayBgSound||(i.Constants.ironSource.SoundState&&this.AudioManager.playSound(i.Constants.SoundTrack.bgSound),i.Constants.ironSource.isPlayBgSound=!0)},o.prototype.handleMuteSoundIronSource=function(){i.Constants.ironSource.State=parseInt(localStorage.getItem("cocosSoundState"),10),i.Constants.ironSource.State&&(1!==i.Constants.ironSource.State||i.Constants.ironSource.SoundState||i.Constants.ironSource.isEndGame||(i.Constants.ironSource.SoundState=!0,this.AudioManager.playSound(i.Constants.SoundTrack.bgSound)),2===i.Constants.ironSource.State&&i.Constants.ironSource.SoundState&&(i.Constants.ironSource.SoundState=!1,this.AudioManager.stopAllSound()))},o.prototype.update=function(){},c([d(s.default)],o.prototype,"AudioManager",void 0),c([d(a.GameController)],o.prototype,"GameController",void 0),c([d(p.default)],o.prototype,"GamePlay",void 0),c([d(cc.Node)],o.prototype,"background",void 0),c([d(cc.Node)],o.prototype,"HideMask",void 0),c([d(cc.Node)],o.prototype,"oneTap",void 0),c([d(cc.MouseJoint)],o.prototype,"mouseJoint",void 0),c([d([cc.Node])],o.prototype,"Knots",void 0),c([d([cc.Node])],o.prototype,"Knots_2",void 0),c([d([cc.Node])],o.prototype,"Ropes",void 0),c([d([cc.MotorJoint])],o.prototype,"motorJoints",void 0),c([d([cc.Node])],o.prototype,"Knots_Vtc",void 0),c([d([cc.Node])],o.prototype,"Knots_2_Vtc",void 0),c([d([cc.Node])],o.prototype,"Ropes_Vtc",void 0),c([d([cc.MotorJoint])],o.prototype,"motorJoints_Vtc",void 0),c([u],o)}(cc.Component);e.TouchAreaController=h,cc._RF.pop()},{"../Data/constants":"constants","../Plugin/AudioManager":"AudioManager","./GameController":"GameController","./GamePlay":"GamePlay"}],Ultils:[function(t,o,e){"use strict";cc._RF.push(o,"03f2ceupvBEfa9putmH215T","Ultils"),Object.defineProperty(e,"__esModule",{value:!0}),e.Ultils=void 0;var n=cc._decorator,r=(n.ccclass,n.property,{}),c=function(){function t(){}return t.TouchArea=r,t}();e.Ultils=c,cc._RF.pop()},{}],constants:[function(t,o,e){"use strict";cc._RF.push(o,"eaccb/69FZDu6rC4YmR+uAW","constants"),Object.defineProperty(e,"__esModule",{value:!0}),e.Constants=void 0;var n,r=cc._decorator;r.ccclass,r.property,function(t){t.touchStart="touchstart",t.touchMove="touchmove",t.touchEnd="touchend",t.touchCancel="touchcancel"}(n||(n={}));var c,i={SoundState:!0,State:1,isEndGame:!1,isPlayBgSound:!1},s={calculatedY:0,calculatedX:0,currentDevice:""};(function(t){t.bgSound="bgSound",t.ropeSound1="ropeSound1",t.ropeSound2="ropeSound2",t.completeSound="completeSound",t.breakRopeSound="breakRopeSound",t.completeSound2="completeSound2"})(c||(c={}));var a=function(){function t(){}return t.currentPosition=new cc.Vec2(0,0),t.isRotate=!1,t.isCollideKnot1=!1,t.isCollideKnot2=!1,t.knot1Status=!1,t.knot2Status=!0,t.knot3Status=!1,t.knot4Status=!1,t.knot5Status=!0,t.step=1,t.Event=n,t.SoundTrack=c,t.ironSource=i,t.Responsive=s,t}();e.Constants=a,cc._RF.pop()},{}]},{},["GameController","GamePlay","RopeController","RopePart","TouchAreaController","Ultils","constants","AudioManager","Responsive"]);