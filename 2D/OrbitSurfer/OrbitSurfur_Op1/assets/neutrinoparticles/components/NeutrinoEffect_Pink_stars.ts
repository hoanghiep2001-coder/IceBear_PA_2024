// !!! This file is generated by NeutrinoParticles extension package.
// !!! Don't modify it manually.

import * as NeutrinoEffect from '../exported_effects/Pink_stars.js';
import textures from '../textures';
import NeutrinoComponent from 'NeutrinoComponent';
import NeutrinoAssembler from 'NeutrinoAssembler';

const {ccclass, executeInEditMode, playOnFocus, menu} = cc._decorator;

@ccclass
@executeInEditMode
@playOnFocus
@menu('i18n:MAIN_MENU.component.renderers/NeutrinoComponent/Pink_stars')
export default class NeutrinoEffectComponent extends NeutrinoComponent {
	getEffectClass() { return NeutrinoEffect; }
	getTexturesDatabase() { return textures; }
}

cc.Assembler.register(NeutrinoEffectComponent, NeutrinoAssembler);
