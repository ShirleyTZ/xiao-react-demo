import React, { Component, isValidElement } from 'react';
import './MainNav.css';
import ListForMenu from '../../PublicComponents/ListForMenu';
import InputForSearch from '../../PublicComponents/InputForSearch';
import ProductCase from '../../PublicComponents/ProductCase';

class MainNav extends Component {
  constructor() {
    super();
    this.state={
      showWitch: 7,
      on: 7
    }
  }

  handleMouseOver(e){
    const show = e.currentTarget.dataset.num;

    const slidedownDiv = document.getElementById("Main-menu-slidedownBox");
    if( show >= 0 && show < 7 ){

      slidedownDiv.style.height = "229px";
      slidedownDiv.style.visibility = "visible";
      this.setState({
        showWitch: show,
        on: show
      })
    }else{
      slidedownDiv.style.height = "0px";
      slidedownDiv.style.visibility = "hidden";
      this.setState({
        showWitch: 7
      })
    }  
  }
  handleMouseLeave(e) {
    const slidedownDiv = document.getElementById("Main-menu-slidedownBox");
    slidedownDiv.style.height = "0px";
    slidedownDiv.style.visibility = "hidden";
    this.setState({
      showWitch: 7
    })
  }

  handleSlideDownMouseOver() {
    const slidedownDiv = document.getElementById("Main-menu-slidedownBox");
    slidedownDiv.style.height = "229px";
    slidedownDiv.style.visibility = "visible";
    this.setState({
      showWitch: this.state.on
    })
  }


  render() {
    const mainMenu =["小米手机","Redmi 红米","电视","笔记本","家电","路由器","智能硬件","服务","社区"];
    const xiaoMiShouJi ={
      phone1:"",
      phone2:"",
      phone3:"",
      phone4:"",
      phone5:""
    }
    const ticksxiaomiShoujiItems = Object.keys(xiaoMiShouJi).map(item => require("./xiaomiPhone/"+ item + ".webp"));
    const phoneItems =[
      {
        img:ticksxiaomiShoujiItems[0],
        name: "小米10至尊纪念版",
        price: "5299元起"
      },{
        img:ticksxiaomiShoujiItems[1],
        name: "小米10 Pro",
        price: "4999元起"
      },{
        img:ticksxiaomiShoujiItems[2],
        name: "小米10",
        price: "3799元起"
      },{
        img:ticksxiaomiShoujiItems[3],
        name: "小米10  青春版 5G",
        price: "1899元起"
      },{
        img:ticksxiaomiShoujiItems[4],
        name: "小米MIX Alpha",
        price: "19999元起"
      },
    ];
    const redmi ={
      Redmi1:"",
      Redmi2:"",
      Redmi3:"",
      Redmi4:"",
      Redmi5:"",
      Redmi6:""
    }
    const redmiLinks = Object.keys(redmi).map(item => require("./Redmi/"+ item + ".webp"));
    const redmiItems =[
      {
        img:redmiLinks[0],
        name: "Redmi K30 至尊纪念版",
        price: "1999元起"
      },{
        img:redmiLinks[1],
        name: "Redmi K30 Pro",
        price: "2999元起"
      },{
        img:redmiLinks[2],
        name: "Redmi K30 系列",
        price: "1399元起"
      },{
        img:redmiLinks[3],
        name: "Redmi 10X",
        price: "999元起"
      },{
        img:redmiLinks[4],
        name: "Redmi Note 8",
        price: "899元起"
      },{
        img:redmiLinks[5],
        name: "Redmi 9",
        price: "799元起"
      }
    ];
    
    const tv ={
      TV1:"",
      TV2:"",
      TV3:"",
      TV4:"",
      TV5:"",
      TV6:""
    }
    const tvLinks = Object.keys(tv).map(item => require("./TV/"+ item + ".webp"));
    const tvItems =[
      {
        img:tvLinks[0],
        name: "小米透明电视",
        price: "49999元"
      },{
        img:tvLinks[1],
        name: "小米电视 大师65英寸OLED",
        price: "12999元"
      },{
        img:tvLinks[2],
        name: "Redmi 智能电视 MAX 98\"",
        price: "19999元"
      },{
        img:tvLinks[3],
        name: "小米电视4A 60英寸",
        price: "2299元"
      },{
        img:tvLinks[4],
        name: "Redmi 智能电视 X55",
        price: "2299元"
      },{
        img:tvLinks[5],
        name: "Redmi 红米电视 70英寸 R70A",
        price: "3199元"
      }
    ];
    const laptopItems =[
      {
        img:require("./Laptop/Laptop1"+ ".webp"),
        name: "Redmi G 游戏本",
        price: ""
      },{
        img:require("./Laptop/Laptop2" + ".webp"),
        name: "RedmiBook 16",
        price: "4999元起"
      },{
        img:require("./Laptop/Laptop3" + ".webp"),
        name: "RedmiBook 14 ｜｜",
        price: "4499元起"
      },{
        img:require("./Laptop/Laptop4" + ".png"),
        name: "Pro 15.6\" 2020款",
        price: "5999元起"
      },{
        img:require("./Laptop/Laptop5" + ".webp"),
        name: "RedmiBook Air 13",
        price: "4899元起"
      },{
        img:require("./Laptop/Laptop6" + ".webp"),
        name: "显示器",
        price: "2199元"
      }
    ];

    const applianceItems =[
      {
        img:require("./Appliance/Appliance1" + ".webp"),
        name: "米家互联网空调C1（一级能效）",
        price: "2099元"
      },{
        img:require("./Appliance/Appliance2" + ".png"),
        name: "米家互联网空调C1（一级能效）",
        price: "2099元"
      },{
        img:require("./Appliance/Appliance3" + ".jpg"),
        name: "Redmi全自动波轮洗衣机1A",
        price: "799元"
      },{
        img:require("./Appliance/Appliance4" + ".png"),
        name: "米家互联网洗烘一体机10kg",
        price: "1999元"
      },{
        img:require("./Appliance/Appliance5" + ".webp"),
        name: "米家风冷对开门冰箱 483L",
        price: "4899元"
      },{
        img:require("./Appliance/Appliance6" + ".webp"),
        name: "米家两开门冰箱 160L",
        price: "899元"
      }
    ];

    const routerItems =[
      {
        img:require("./Router/router1" + ".webp"),
        name: "Redmi路由器 AX6",
        price: "399元"
      },{
        img:require("./Router/router2" + ".webp"),
        name: "Redmi路由器 AX5",
        price: "249元"
      },{
        img:require("./Router/router3" + ".webp"),
        name: "小米路由器Ax1800",
        price: "329元"
      },{
        img:require("./Router/router4" + ".webp"),
        name: "小米AloT路由器AX3600",
        price: "599元"
      },{
        img:require("./Router/router5" + ".webp"),
        name: "Redmi路由器AC2100",
        price: "169元"
      },{
        img:require("./Router/router6" + ".webp"),
        name: "小米路由器AC2100",
        price: "199元"
      }
    ];

    const IHItems =[
      {
        img:require("./IntelligentHardware/IH1" + ".jpg"),
        name: "Redmi路由器 AX6",
        price: "399元"
      },{
        img:require("./IntelligentHardware/IH2" + ".jpg"),
        name: "Redmi路由器 AX5",
        price: "249元"
      },{
        img:require("./IntelligentHardware/IH3" + ".jpg"),
        name: "小米路由器Ax1800",
        price: "329元"
      },{
        img:require("./IntelligentHardware/IH4" + ".webp"),
        name: "小米AloT路由器AX3600",
        price: "599元"
      },{
        img:require("./IntelligentHardware/IH5" + ".jpg"),
        name: "Redmi路由器AC2100",
        price: "169元"
      },{
        img:require("./IntelligentHardware/IH6" + ".webp"),
        name: "小米路由器AC2100",
        price: "199元"
      }
    ];

    const empty = [
      {
        img:"",
        name:"",
        price:""
      }
    ]

    const slidedownBox =[phoneItems,redmiItems,tvItems,laptopItems,applianceItems,routerItems,IHItems,empty]

    return(
      <div id="Main-nav">
          <div className="Main-menu-box">
            <div className="logon"></div>
            <div className="Main-menu-wrapper">
              <div className="Main-menu-category"></div>
              <ListForMenu btns={mainMenu} list="Main-menu" wrapper="Main-menu-items" handleMouseOver={this.handleMouseOver.bind(this)} handleMouseLeave={this.handleMouseLeave.bind(this)} words="Main-btns" spans="None-span"/>
            </div>
            <InputForSearch inputBox="Main-input-box" textName="Main-input-text" submitName="Main-input-submit"  placeHolder="耳机" />
          </div>
          <div id="Main-menu-slidedownBox" onMouseOver={this.handleSlideDownMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} >
             <ProductCase headsize="h3" aboutProducts={slidedownBox[this.state.showWitch]} productCaseWrapper="Main-menu-slidedown" content="Main-menu-slidedown-content" thumb="Main-menu-slidedown-thumb" title="Main-menu-slidedown-title" desc="Main-menu-slidedown-desc" price="Main-menu-slidedown-price"  />
          </div>   
      </div>
    )
  }
}

export default  MainNav;