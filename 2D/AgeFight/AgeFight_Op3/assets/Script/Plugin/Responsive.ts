import BaseController from "../Controller/BaseController";
import CoinController from "../Controller/CoinController";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    @property(BaseController)
    enemyBase: BaseController = null;
    @property(BaseController)
    allyBase: BaseController = null;
    @property(CoinController)
    CoinController: CoinController = null;

    @property(cc.Node)
    Environment: cc.Node = null;
    @property(cc.Node)
    Options: cc.Node = null;


    Bg_Hor: cc.Node = null;
    Bg_Ver: cc.Node = null;
    FrameFood: cc.Node = null;
    LoadFood: cc.Node = null;
    Options_Layout: cc.Node = null;

    // state
    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected start(): void {
        this.Bg_Hor = this.Environment.getChildByName("Bg_Hor");
        this.Bg_Ver = this.Environment.getChildByName("Bg_Ver");

        this.FrameFood = this.Options.getChildByName("Framefood");
        this.LoadFood = this.Options.getChildByName("Loadfood");
        this.Options_Layout = this.Options.getChildByName("Layout");
    }


    private handleRotate(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (width > height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        } else {
            this.setHorizontalForTablet();
        }
    }


    private setHorizontalForIpX(): void {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;

        Constants.Responsive.speedCalculated = 20;
        Constants.scaleArmy = 0.5;

        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;

        this.CoinController.node.scale = 1;

        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);

        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);

        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;

        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        let optionsChild = this.Options_Layout.children;

        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;

        optionsLayout.spacingX = 140;
        optionsChild.forEach(child => {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        Constants.Responsive.speedCalculated = 10;
        Constants.scaleArmy = 0.5;

        this.Bg_Hor.active = true;
        this.Bg_Ver.active = false;

        this.CoinController.node.scale = 1;

        this.allyBase.node.scale = 1;
        this.allyBase.getComponent(cc.Widget).top = 210;
        this.allyBase.getComponent(cc.Widget).left = 80;
        this.allyBase.node.getChildByName("base").setScale(0.4, 0.4);

        this.enemyBase.node.scale = 1;
        this.enemyBase.getComponent(cc.Widget).top = 210;
        this.enemyBase.getComponent(cc.Widget).right = 80;
        this.enemyBase.node.getChildByName("base").setScale(-0.4, 0.4);

        this.FrameFood.setScale(10, 0.3);
        this.FrameFood.getComponent(cc.Widget).bottom = -5;
        this.LoadFood.setScale(0.316, 0.316);
        this.LoadFood.getComponent(cc.Widget).left = -5;
        this.LoadFood.getComponent(cc.Widget).bottom = -10;

        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        let optionsChild = this.Options_Layout.children;

        optionsWidget.isAlignLeft = true;
        optionsWidget.isAlignRight = true;
        optionsWidget.isAlignHorizontalCenter = false;
        optionsWidget.left = 30;
        optionsWidget.right = -130;
        optionsWidget.bottom = 65;

        optionsLayout.spacingX = 120;
        optionsChild.forEach(child => {
            child.name.includes("Op") ? child.scale = 1.15 : child.scale = 0.41;
        });

    }


    private setVertical(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }


    private setIphoneX(): void {
        if (Constants.Responsive.isVer) {
            return;
        }

        Constants.Responsive.speedCalculated = 0;
        Constants.scaleArmy = 0.25;

        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;  

        this.CoinController.node.scale = 0.8;

        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)

        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        // this.FrameFood.setScale(10, 0.13);
        // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        // this.LoadFood.setScale(0.12, 0.12);
        // this.LoadFood.getComponent(cc.Widget).left = -2;
        // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        
        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        // let optionsChild = this.Options_Layout.children;
        
        optionsWidget.isAlignHorizontalCenter = true;
        optionsWidget.isAlignRight = false;
        // optionsWidget.isAlignLeft = false;
        // optionsWidget.right = 30;
        // optionsWidget.bottom = 35;
        
        // optionsLayout.spacingX = 50;
        // optionsChild.forEach(child => {
        //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        // });
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        Constants.Responsive.speedCalculated = 0;
        Constants.scaleArmy = 0.25;

        this.Bg_Hor.active = false;
        this.Bg_Ver.active = true;  


        this.CoinController.node.scale = 0.8;

        this.allyBase.node.scale = 0.85;
        this.allyBase.getComponent(cc.Widget).top = 220;
        this.allyBase.getComponent(cc.Widget).left = 30;
        this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)

        this.enemyBase.node.scale = 0.85;
        this.enemyBase.getComponent(cc.Widget).top = 220;
        this.enemyBase.getComponent(cc.Widget).right = 30;
        this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        // this.FrameFood.setScale(10, 0.13);
        // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        // this.LoadFood.setScale(0.12, 0.12);
        // this.LoadFood.getComponent(cc.Widget).left = -2;
        // this.LoadFood.getComponent(cc.Widget).bottom = -2;
        
        this.Options_Layout.setScale(1, 1);
        let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        // let optionsChild = this.Options_Layout.children;
        
        optionsWidget.isAlignHorizontalCenter = true;
        optionsWidget.isAlignRight = false;
        // optionsWidget.isAlignLeft = false;
        // optionsWidget.right = 30;
        // optionsWidget.bottom = 35;
        
        optionsLayout.spacingX = 70;
        // optionsChild.forEach(child => {
        //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        // });

        // if (height / width > 1.5) {
          
        //     this.CoinController.node.scale = 0.8;

        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
    
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
            
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
            
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
            
        //     optionsLayout.spacingX = 70;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // } else {

        //     this.CoinController.node.scale = 0.8;

        //     this.allyBase.node.scale = 0.85;
        //     this.allyBase.getComponent(cc.Widget).top = 220;
        //     this.allyBase.getComponent(cc.Widget).left = 30;
        //     this.allyBase.node.getChildByName("base").setScale(0.25, 0.25)
    
        //     this.enemyBase.node.scale = 0.85;
        //     this.enemyBase.getComponent(cc.Widget).top = 220;
        //     this.enemyBase.getComponent(cc.Widget).right = 30;
        //     this.enemyBase.node.getChildByName("base").setScale(-0.25, 0.25);
        //     // this.FrameFood.setScale(10, 0.13);
        //     // this.FrameFood.getComponent(cc.Widget).bottom = -5;
        //     // this.LoadFood.setScale(0.12, 0.12);
        //     // this.LoadFood.getComponent(cc.Widget).left = -2;
        //     // this.LoadFood.getComponent(cc.Widget).bottom = -2;
            
        //     this.Options_Layout.setScale(1, 1);
        //     let optionsWidget = this.Options_Layout.getComponent(cc.Widget);
        //     // let optionsLayout = this.Options_Layout.getComponent(cc.Layout);
        //     // let optionsChild = this.Options_Layout.children;
            
        //     optionsWidget.isAlignHorizontalCenter = true;
        //     optionsWidget.isAlignRight = false;
        //     // optionsWidget.isAlignLeft = false;
        //     // optionsWidget.right = 30;
        //     // optionsWidget.bottom = 35;
            
        //     // optionsLayout.spacingX = 50;
        //     // optionsChild.forEach(child => {
        //     //     child.name.includes("Op") ? child.scale = 0.5 : child.scale = 0.2;
        //     // });
        // }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
