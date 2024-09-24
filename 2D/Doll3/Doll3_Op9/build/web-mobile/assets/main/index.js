window.__require=function o(e,t,n){function i(s,a){if(!t[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var d="function"==typeof __require&&__require;if(!a&&d)return d(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+s+"'")}s=c}var l=t[s]={exports:{}};e[s][0].call(l.exports,function(o){return i(e[s][1][o]||o)},l,l.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<n.length;s++)i(n[s]);return i}({AudioManager:[function(o,e,t){"use strict";cc._RF.push(e,"4c7cf9rDSJL36cJtz1lUze/","AudioManager");var n,i=this&&this.__extends||(n=function(o,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])})(o,e)},function(o,e){function t(){this.constructor=o}n(o,e),o.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),r=this&&this.__decorate||function(o,e,t,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../Data/constants"),a=cc._decorator,c=a.ccclass,d=a.property,l=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.bgSound=null,e.openDoorSound=null,e.knockDoorSound=null,e.screamSound=null,e.crySound=null,e.woaAnimeSound=null,e.clickSound=null,e}return i(e,o),e.prototype.playSound=function(o){if(s.Constants.ironSource.SoundState)switch(o){case"bgSound":this.bgSound.play();break;case"openDoorSound":this.openDoorSound.play();break;case"clickSound":this.clickSound.play();break;case"knockDoorSound":this.knockDoorSound.play();break;case"screamSound":this.screamSound.play();break;case"crySound":this.crySound.play();break;case"woaAnimeSound":this.woaAnimeSound.play()}},e.prototype.switchVolume=function(o,e){switch(o){case"bgSound":this.bgSound.volume=e;break;case"openDoorSound":this.openDoorSound.volume=e;break;case"clickSound":this.clickSound.volume=e;break;case"knockDoorSound":this.knockDoorSound.volume=e;break;case"screamSound":this.screamSound.volume=e;break;case"crySound":this.crySound.volume=e;break;case"woaAnimeSound":this.woaAnimeSound.volume=e}},e.prototype.stopSound=function(o){switch(o){case"bgSound":this.bgSound.stop();break;case"openDoorSound":this.openDoorSound.stop();break;case"clickSound":this.clickSound.stop();break;case"knockDoorSound":this.knockDoorSound.stop();break;case"screamSound":this.screamSound.stop();break;case"crySound":this.crySound.stop();break;case"woaAnimeSound":this.woaAnimeSound.stop()}},e.prototype.stopAllSound=function(){this.bgSound.stop(),this.openDoorSound.stop(),this.knockDoorSound.stop(),this.screamSound.stop(),this.crySound.stop(),this.woaAnimeSound.stop(),this.clickSound.stop()},r([d(cc.AudioSource)],e.prototype,"bgSound",void 0),r([d(cc.AudioSource)],e.prototype,"openDoorSound",void 0),r([d(cc.AudioSource)],e.prototype,"knockDoorSound",void 0),r([d(cc.AudioSource)],e.prototype,"screamSound",void 0),r([d(cc.AudioSource)],e.prototype,"crySound",void 0),r([d(cc.AudioSource)],e.prototype,"woaAnimeSound",void 0),r([d(cc.AudioSource)],e.prototype,"clickSound",void 0),r([c],e)}(cc.Component);t.default=l,cc._RF.pop()},{"../Data/constants":"constants"}],GameController:[function(o,e,t){"use strict";cc._RF.push(e,"459a6fkmHFH5Z+5+z1O55SB","GameController");var n,i=this&&this.__extends||(n=function(o,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])})(o,e)},function(o,e){function t(){this.constructor=o}n(o,e),o.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),r=this&&this.__decorate||function(o,e,t,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.GameController=void 0;var s=o("../Data/constants"),a=o("../Plugin/AudioManager"),c=cc._decorator,d=c.ccclass,l=c.property,u=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.AudioManager=null,e}return i(e,o),e.prototype.onLoad=function(){},e.prototype.start=function(){window.gameReady&&window.gameReady()},e.prototype.installHandle=function(){if(console.log("install"),s.Constants.ironSource.isEndGame=!0,this.AudioManager.stopAllSound(),window.gameEnd&&window.gameEnd(),"undefined"==typeof playableSDK)if("undefined"==typeof ExitApi){if("undefined"==typeof dapi)return"undefined"!=typeof mraid?cc.sys.os==cc.sys.OS_ANDROID||cc.sys.os==cc.sys.ANDROID?void mraid.open("https://play.google.com/store/apps/details?id=com.totee.sweetdoll"):cc.sys.os==cc.sys.OS_IOS||cc.sys.os==cc.sys.IPHONE||cc.sys.os==cc.sys.IPAD?void mraid.open("https://itunes.apple.com/us/app/id1614415418?mt=8"):void mraid.open("https://play.google.com/store/apps/details?id=com.totee.sweetdoll"):void(window.install&&window.install());dapi.openStoreUrl()}else ExitApi.exit();else window.playableSDK.openAppStore()},r([l(a.default)],e.prototype,"AudioManager",void 0),r([d],e)}(cc.Component);t.GameController=u,cc._RF.pop()},{"../Data/constants":"constants","../Plugin/AudioManager":"AudioManager"}],GamePlay:[function(o,e,t){"use strict";cc._RF.push(e,"b1d34srP15JNoxtzOCtQ0oZ","GamePlay");var n,i=this&&this.__extends||(n=function(o,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])})(o,e)},function(o,e){function t(){this.constructor=o}n(o,e),o.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),r=this&&this.__decorate||function(o,e,t,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../Data/constants"),a=o("../Plugin/AudioManager"),c=o("./GameController"),d=o("./NodesContainer"),l=cc._decorator,u=l.ccclass,p=l.property,h=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.AudioManager=null,e.NodesContainer=null,e.GameController=null,e}return i(e,o),e.prototype.start=function(){this.AudioManager.playSound(s.Constants.SoundTrack.bgSound),this.AudioManager.switchVolume(s.Constants.SoundTrack.bgSound,.7),this.handleGamePlay(),this.initGame()},e.prototype.initGame=function(){this.NodesContainer.doll_dress.active=!1,this.NodesContainer.CTA.active=!1},e.prototype.handleGamePlay=function(){this.handleOpenDoor(),this.handleShowAdultery()},e.prototype.handleOpenDoor=function(){var o=this;this.scheduleOnce(function(){o.AudioManager.playSound(s.Constants.SoundTrack.knockDoorSound)},1),this.scheduleOnce(function(){o.AudioManager.playSound(s.Constants.SoundTrack.openDoorSound),o.NodesContainer.door.getComponent(cc.Animation).play("OpenDoor_Anim")},2.5),this.scheduleOnce(function(){o.NodesContainer.doll_mouth_default.active=!1,o.NodesContainer.doll_mouth_suprise.active=!0,o.NodesContainer.doll.getComponent(cc.Animation).play("Doll_InHouseAnim"),o.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ShakeAnim"),o.AudioManager.playSound(s.Constants.SoundTrack.screamSound)},3)},e.prototype.handleShowAdultery=function(){var o=this;this.scheduleOnce(function(){o.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomAnim")},4.5),this.scheduleOnce(function(){o.getComponent(cc.Animation).play("GamePlay_ShowAdultery")},5),this.scheduleOnce(function(){o.NodesContainer.doll_tears_left.node.active=!0,o.NodesContainer.doll_tears_right.node.active=!0,o.AudioManager.playSound(s.Constants.SoundTrack.crySound)},5.8),this.scheduleOnce(function(){o.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomOutAnim")},6.5),this.scheduleOnce(function(){s.Constants.isCanClick=!0,o.NodesContainer.UI_Container.getComponent(cc.Animation).play("UI_Anim")},7.5)},r([p(a.default)],e.prototype,"AudioManager",void 0),r([p(d.default)],e.prototype,"NodesContainer",void 0),r([p(c.GameController)],e.prototype,"GameController",void 0),r([u],e)}(cc.Component);t.default=h,cc._RF.pop()},{"../Data/constants":"constants","../Plugin/AudioManager":"AudioManager","./GameController":"GameController","./NodesContainer":"NodesContainer"}],NodesContainer:[function(o,e,t){"use strict";cc._RF.push(e,"a876a3+anpHqp1oP95zhFm5","NodesContainer");var n,i=this&&this.__extends||(n=function(o,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])})(o,e)},function(o,e){function t(){this.constructor=o}n(o,e),o.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),r=this&&this.__decorate||function(o,e,t,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};Object.defineProperty(t,"__esModule",{value:!0});var s=cc._decorator,a=s.ccclass,c=s.property,d=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.camera=null,e.hideMask=null,e.background_1=null,e.background_2_ver=null,e.background_2_hor=null,e.background_3=null,e.GamePlay=null,e.UI_Container=null,e.buttons=null,e.scene1=null,e.scene3=null,e.CTA=null,e.CTA_overlay=null,e.CTA_btn=null,e.CTA_icon=null,e.CTA_logo=null,e.hand_1=null,e.hand_2=null,e.doll=null,e.doll_scene3=null,e.doll_mouth_default=null,e.doll_mouth_suprise=null,e.doll_tears_left=null,e.doll_tears_right=null,e.doll_dress=null,e.logo=null,e.icon=null,e.door=null,e.adultery=null,e.UI_button_revenge=null,e.item_Dress_btn=null,e.items=[],e.effect_blink_Doll=null,e.effect_blink_item=null,e.effect_heart=null,e}return i(e,o),e.prototype.start=function(){},r([c(cc.Camera)],e.prototype,"camera",void 0),r([c(cc.Node)],e.prototype,"hideMask",void 0),r([c(cc.Node)],e.prototype,"background_1",void 0),r([c(cc.Node)],e.prototype,"background_2_ver",void 0),r([c(cc.Node)],e.prototype,"background_2_hor",void 0),r([c(cc.Node)],e.prototype,"background_3",void 0),r([c(cc.Node)],e.prototype,"GamePlay",void 0),r([c(cc.Node)],e.prototype,"UI_Container",void 0),r([c(cc.Node)],e.prototype,"buttons",void 0),r([c(cc.Node)],e.prototype,"scene1",void 0),r([c(cc.Node)],e.prototype,"scene3",void 0),r([c(cc.Node)],e.prototype,"CTA",void 0),r([c(cc.Node)],e.prototype,"CTA_overlay",void 0),r([c(cc.Node)],e.prototype,"CTA_btn",void 0),r([c(cc.Node)],e.prototype,"CTA_icon",void 0),r([c(cc.Node)],e.prototype,"CTA_logo",void 0),r([c(cc.Node)],e.prototype,"hand_1",void 0),r([c(cc.Node)],e.prototype,"hand_2",void 0),r([c(cc.Node)],e.prototype,"doll",void 0),r([c(cc.Node)],e.prototype,"doll_scene3",void 0),r([c(cc.Node)],e.prototype,"doll_mouth_default",void 0),r([c(cc.Node)],e.prototype,"doll_mouth_suprise",void 0),r([c(sp.Skeleton)],e.prototype,"doll_tears_left",void 0),r([c(sp.Skeleton)],e.prototype,"doll_tears_right",void 0),r([c(cc.Node)],e.prototype,"doll_dress",void 0),r([c(cc.Node)],e.prototype,"logo",void 0),r([c(cc.Node)],e.prototype,"icon",void 0),r([c(cc.Node)],e.prototype,"door",void 0),r([c(cc.Node)],e.prototype,"adultery",void 0),r([c(cc.Node)],e.prototype,"UI_button_revenge",void 0),r([c(cc.Node)],e.prototype,"item_Dress_btn",void 0),r([c([cc.Node])],e.prototype,"items",void 0),r([c(cc.ParticleSystem)],e.prototype,"effect_blink_Doll",void 0),r([c(cc.ParticleSystem)],e.prototype,"effect_blink_item",void 0),r([c(cc.ParticleSystem)],e.prototype,"effect_heart",void 0),r([a],e)}(cc.Component);t.default=d,cc._RF.pop()},{}],Responsive:[function(o,e,t){"use strict";cc._RF.push(e,"d3abaWwEQhAi5Yf4wF9VZxN","Responsive");var n,i=this&&this.__extends||(n=function(o,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])})(o,e)},function(o,e){function t(){this.constructor=o}n(o,e),o.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),r=this&&this.__decorate||function(o,e,t,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../Controller/GamePlay"),a=o("../Controller/NodesContainer"),c=cc._decorator,d=c.ccclass,l=c.property,u=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.NodesContainer=null,e.GamePlay=null,e.device="",e.isRotate=!1,e.HORIZONTAL_IPX="horizontal_IPX",e.HORIZONTAL_TABLET="horizontal_Tablet",e.VERTICAL_IPX="vertical_IPX",e.VERTICAL_MOBILE="vertical_Mobile",e}return i(e,o),e.prototype.onLoad=function(){},e.prototype.start=function(){},e.prototype.handleRotate=function(){cc.view.getFrameSize().width>cc.view.getFrameSize().height?(this.isRotate=!0,this.setHorizontal()):(this.isRotate=!1,this.setVertical())},e.prototype.setHorizontal=function(){cc.view.getFrameSize().height/cc.view.getFrameSize().width<.65?this.setHorizontalForIpX():this.setHorizontalForTablet()},e.prototype.setHorizontalForIpX=function(){this.HORIZONTAL_IPX!==this.device&&(this.device=this.HORIZONTAL_IPX,this.NodesContainer.logo.active=!0,this.NodesContainer.icon.active=!0,this.NodesContainer.background_2_hor.active=!0,this.NodesContainer.background_2_ver.active=!1,this.NodesContainer.background_2_hor.scale=.55,this.NodesContainer.background_1.scale=.45,this.NodesContainer.background_1.y=95,this.NodesContainer.background_3.scale=.55,this.NodesContainer.doll_scene3.x=-115,this.NodesContainer.doll_scene3.scale=.35,this.NodesContainer.adultery.scale=.65,this.NodesContainer.UI_Container.x=0,this.NodesContainer.UI_Container.y=20,this.NodesContainer.buttons.x=0,this.NodesContainer.buttons.y=-10,this.NodesContainer.CTA_btn.y=-160,this.NodesContainer.items[0].x=85,this.NodesContainer.items[0].y=50,this.NodesContainer.items[0].scale=.9,this.NodesContainer.items[1].x=85,this.NodesContainer.items[1].y=-90,this.NodesContainer.items[1].scale=.9,this.NodesContainer.items[2].x=230,this.NodesContainer.items[2].y=-90,this.NodesContainer.items[2].scale=.9,this.NodesContainer.items[3].x=230,this.NodesContainer.items[3].y=50,this.NodesContainer.items[3].scale=.9)},e.prototype.setHorizontalForTablet=function(){this.HORIZONTAL_TABLET!==this.device&&(this.device=this.HORIZONTAL_TABLET,this.NodesContainer.logo.active=!1,this.NodesContainer.icon.active=!1,this.NodesContainer.background_2_hor.active=!0,this.NodesContainer.background_2_ver.active=!1,this.NodesContainer.background_2_hor.scale=.45,this.NodesContainer.background_1.scale=.3,this.NodesContainer.background_1.y=20,this.NodesContainer.background_3.scale=.38,this.NodesContainer.doll_scene3.x=-75,this.NodesContainer.doll_scene3.scale=.32,this.NodesContainer.adultery.scale=.65,this.NodesContainer.UI_Container.x=0,this.NodesContainer.UI_Container.y=20,this.NodesContainer.buttons.x=0,this.NodesContainer.buttons.y=0,this.NodesContainer.CTA_btn.y=-160,this.NodesContainer.items[0].x=85,this.NodesContainer.items[0].y=130,this.NodesContainer.items[0].scale=.65,this.NodesContainer.items[1].x=85,this.NodesContainer.items[1].y=30,this.NodesContainer.items[1].scale=.65,this.NodesContainer.items[2].x=85,this.NodesContainer.items[2].y=-70,this.NodesContainer.items[2].scale=.65,this.NodesContainer.items[3].x=85,this.NodesContainer.items[3].y=-170,this.NodesContainer.items[3].scale=.65)},e.prototype.setVertical=function(){cc.view.getFrameSize().width/cc.view.getFrameSize().height<.5?this.setIphoneX():this.setMobile()},e.prototype.setIphoneX=function(){this.VERTICAL_IPX!==this.device&&(this.device=this.VERTICAL_IPX,this.NodesContainer.logo.active=!1,this.NodesContainer.icon.active=!1,this.NodesContainer.background_2_hor.active=!1,this.NodesContainer.background_2_ver.active=!0,this.NodesContainer.background_2_ver.scale=.4,this.NodesContainer.background_1.scale=.4,this.NodesContainer.background_1.y=20,this.NodesContainer.background_3.scale=.45,this.NodesContainer.doll_scene3.x=-75,this.NodesContainer.doll_scene3.scale=.32,this.NodesContainer.adultery.scale=.65,this.NodesContainer.UI_Container.x=0,this.NodesContainer.UI_Container.y=-30,this.NodesContainer.buttons.x=0,this.NodesContainer.buttons.y=-20,this.NodesContainer.CTA_btn.y=-160,this.NodesContainer.items[0].x=85,this.NodesContainer.items[0].y=130,this.NodesContainer.items[0].scale=.65,this.NodesContainer.items[1].x=85,this.NodesContainer.items[1].y=30,this.NodesContainer.items[1].scale=.65,this.NodesContainer.items[2].x=85,this.NodesContainer.items[2].y=-70,this.NodesContainer.items[2].scale=.65,this.NodesContainer.items[3].x=85,this.NodesContainer.items[3].y=-170,this.NodesContainer.items[3].scale=.65)},e.prototype.setMobile=function(){this.VERTICAL_MOBILE!==this.device&&(this.device=this.VERTICAL_MOBILE,this.NodesContainer.logo.active=!1,this.NodesContainer.icon.active=!1,this.NodesContainer.doll_scene3.x=-75,this.NodesContainer.doll_scene3.scale=.32,this.NodesContainer.items[0].x=85,this.NodesContainer.items[0].y=130,this.NodesContainer.items[0].scale=.65,this.NodesContainer.items[1].x=85,this.NodesContainer.items[1].y=30,this.NodesContainer.items[1].scale=.65,this.NodesContainer.items[2].x=85,this.NodesContainer.items[2].y=-70,this.NodesContainer.items[2].scale=.65,this.NodesContainer.items[3].x=85,this.NodesContainer.items[3].y=-170,this.NodesContainer.items[3].scale=.65,cc.view.getFrameSize().height/cc.view.getFrameSize().width>1.5?(this.NodesContainer.background_2_hor.active=!1,this.NodesContainer.background_2_ver.active=!0,this.NodesContainer.background_2_ver.scale=.3,this.NodesContainer.background_1.scale=.3,this.NodesContainer.background_1.y=0,this.NodesContainer.background_3.scale=.3,this.NodesContainer.adultery.scale=.55,this.NodesContainer.UI_Container.x=0,this.NodesContainer.UI_Container.y=0,this.NodesContainer.buttons.x=0,this.NodesContainer.buttons.y=0,this.NodesContainer.CTA_btn.y=-160):(this.NodesContainer.background_2_hor.active=!0,this.NodesContainer.background_2_ver.active=!1,this.NodesContainer.background_2_hor.scale=.45,this.NodesContainer.background_1.scale=.3,this.NodesContainer.background_1.y=20,this.NodesContainer.background_3.scale=.38,this.NodesContainer.adultery.scale=.65,this.NodesContainer.UI_Container.x=0,this.NodesContainer.UI_Container.y=20,this.NodesContainer.buttons.x=0,this.NodesContainer.buttons.y=0,this.NodesContainer.CTA_btn.y=-160))},e.prototype.update=function(){this.handleRotate()},r([l(a.default)],e.prototype,"NodesContainer",void 0),r([l(s.default)],e.prototype,"GamePlay",void 0),r([d],e)}(cc.Component);t.default=u,cc._RF.pop()},{"../Controller/GamePlay":"GamePlay","../Controller/NodesContainer":"NodesContainer"}],TouchAreaController:[function(o,e,t){"use strict";cc._RF.push(e,"85711X2lIBGPIPjaJXFSYaE","TouchAreaController");var n,i=this&&this.__extends||(n=function(o,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])})(o,e)},function(o,e){function t(){this.constructor=o}n(o,e),o.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),r=this&&this.__decorate||function(o,e,t,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.TouchAreaController=void 0;var s=o("../Data/constants"),a=o("../Plugin/AudioManager"),c=o("./GameController"),d=o("./GamePlay"),l=o("./NodesContainer"),u=cc._decorator,p=u.ccclass,h=u.property,y=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.AudioManager=null,e.GameController=null,e.NodesContainer=null,e.GamePlay=null,e}return i(e,o),e.prototype.onLoad=function(){},e.prototype.start=function(){this.registerEvent()},e.prototype.registerEvent=function(){this.NodesContainer.UI_button_revenge.on(cc.Node.EventType.TOUCH_START,this.btnTouchStart,this),this.NodesContainer.item_Dress_btn.on(cc.Node.EventType.TOUCH_START,this.btnDressTouchStart,this)},e.prototype.btnTouchStart=function(){s.Constants.isCanClick&&!s.Constants.isChooseRevenge&&(this.AudioManager.playSound(s.Constants.SoundTrack.clickSound),this.NodesContainer.buttons.active=!1,this.NodesContainer.scene1.active=!1,this.NodesContainer.GamePlay.getComponent(cc.Animation).play("GamePlay_ShowScene3"),this.NodesContainer.logo.getComponent(cc.Sprite).enabled=!1,this.NodesContainer.icon.getComponent(cc.Sprite).enabled=!1,this.scheduleOnce(function(){s.Constants.isChooseRevenge=!0},2))},e.prototype.btnDressTouchStart=function(){var o=this;s.Constants.isChooseRevenge&&!s.Constants.isChooseDress&&(s.Constants.isChooseDress=!0,this.AudioManager.playSound(s.Constants.SoundTrack.clickSound),this.NodesContainer.doll_dress.active=!0,this.NodesContainer.hand_2.active=!1,this.NodesContainer.effect_blink_Doll.resetSystem(),this.NodesContainer.effect_heart.resetSystem(),this.AudioManager.playSound(s.Constants.SoundTrack.woaAnimeSound),this.scheduleOnce(function(){o.showCTA()},1.5))},e.prototype.showCTA=function(){this.NodesContainer.CTA.active=!0,this.NodesContainer.CTA_btn.on(cc.Node.EventType.TOUCH_START,this.GameController.installHandle,this),this.NodesContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START,this.GameController.installHandle,this)},e.prototype.handleIronSourcePlaySound=function(){s.Constants.ironSource.isPlayBgSound||s.Constants.ironSource.SoundState&&(s.Constants.ironSource.isPlayBgSound=!0,this.AudioManager.playSound(s.Constants.SoundTrack.bgSound))},e.prototype.handleMuteSoundIronSource=function(){s.Constants.ironSource.State=parseInt(localStorage.getItem("cocosSoundState"),10),s.Constants.ironSource.State&&(1!==s.Constants.ironSource.State||s.Constants.ironSource.SoundState||s.Constants.ironSource.isEndGame||(s.Constants.ironSource.SoundState=!0,this.AudioManager.playSound(s.Constants.SoundTrack.bgSound)),2===s.Constants.ironSource.State&&s.Constants.ironSource.SoundState&&(s.Constants.ironSource.SoundState=!1,this.AudioManager.stopAllSound()))},r([h(a.default)],e.prototype,"AudioManager",void 0),r([h(c.GameController)],e.prototype,"GameController",void 0),r([h(l.default)],e.prototype,"NodesContainer",void 0),r([h(d.default)],e.prototype,"GamePlay",void 0),r([p],e)}(cc.Component);t.TouchAreaController=y,cc._RF.pop()},{"../Data/constants":"constants","../Plugin/AudioManager":"AudioManager","./GameController":"GameController","./GamePlay":"GamePlay","./NodesContainer":"NodesContainer"}],Ultils:[function(o,e,t){"use strict";cc._RF.push(e,"03f2ceupvBEfa9putmH215T","Ultils"),Object.defineProperty(t,"__esModule",{value:!0}),t.Ultils=void 0;var n=cc._decorator,i=(n.ccclass,n.property,{}),r=function(){function o(){}return o.TouchArea=i,o}();t.Ultils=r,cc._RF.pop()},{}],constants:[function(o,e,t){"use strict";cc._RF.push(e,"eaccb/69FZDu6rC4YmR+uAW","constants"),Object.defineProperty(t,"__esModule",{value:!0}),t.Constants=void 0;var n,i=cc._decorator;i.ccclass,i.property,function(o){o.touchStart="touchstart",o.touchMove="touchmove",o.touchEnd="touchend",o.touchCancel="touchcancel"}(n||(n={}));var r,s={SoundState:!0,State:1,isEndGame:!1,isPlayBgSound:!1},a={calculatedY:0,calculatedX:0,currentDevice:""};(function(o){o.bgSound="bgSound",o.openDoorSound="openDoorSound",o.knockDoorSound="knockDoorSound",o.screamSound="screamSound",o.woaAnimeSound="woaAnimeSound",o.crySound="crySound",o.clickSound="clickSound"})(r||(r={}));var c=function(){function o(){}return o.isRotate=!1,o.isCanClick=!1,o.isChooseRevenge=!1,o.isChooseDress=!1,o.Event=n,o.SoundTrack=r,o.ironSource=s,o.Responsive=a,o}();t.Constants=c,cc._RF.pop()},{}]},{},["GameController","GamePlay","NodesContainer","TouchAreaController","Ultils","constants","AudioManager","Responsive"]);