import React, { Component } from 'react';
import '../HomeHeroPage/HomeHeroPage.css';
import Calorifier from './SwitchImg/Calorifier.webp';
import RedMik30 from './SwitchImg/RedMiK30.jpg';
import RedMiPro from './SwitchImg/RedMiPro.webp';
import RedMiTV from './SwitchImg/RedMiTV.webp';
import TVMaster from './SwitchImg/TVMaster.webp';
import XiaoMiWatch from './SwitchImg/XiaoMiWatch.webp';

import ListForImgWithWords from '../../PublicComponents/ListForImgWithWords';
import HomeHeroSub from './HomeHeroSub/HomeHeroSub';
import MenuForHomeHero from '../../PublicComponents/MenuForHomeHero';
import GridForHomeMenu from '../../PublicComponents/GridForHomeMenu';

class HomeHeroPage extends Component {
  constructor() {
    super()
    this.state ={
      showWitch: 10,
      on: 10,
      in:false
    }
  }
  slideshow() {
    const slideshowbox = document.getElementsByClassName("Home-hero-img-wrapper");
    const n = slideshowbox.length;
    console.log(n)
    let i = 0;
    this.timer = setInterval(function(){
        i++;
        if(i < n){
  
          slideshowbox[i-1].style.visibility ="hidden";
          slideshowbox[i-1].style.opacity ="0";
          slideshowbox[i].style.visibility ="visible";
          slideshowbox[i].style.opacity ="1";
        }else {
          slideshowbox[i-1].style.visibility ="hidden";
          slideshowbox[i-1].style.opacity ="0";
          i = 0;
          slideshowbox[i].style.visibility ="visible";
          slideshowbox[i].style.opacity ="1";
        }
    },3000)
  }
  
  componentDidMount() {
    this.slideshow();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleMouseOver(e){
    const show = e.currentTarget.dataset.num;
    const slidedownDiv = document.getElementById("Home-hero-page-left-contentBox");
    if( show >= 0 && show < 7 ){
      slidedownDiv.style.visibility = "visible";
      this.setState({
        showWitch: show,
        on: show
      })
    }else{
      slidedownDiv.style.visibility = "hidden";
      this.setState({
        showWitch: 7
      })
    
    }  
  }

  handleMouseLeave(e) {
    const slidedownDiv = document.getElementById("Home-hero-page-left-contentBox");
    slidedownDiv.style.visibility = "hidden";
    this.setState({
      showWitch: 7,
    })
    if(!this.state.in) {
      this.setState({
        on: 7
      })
    }
  }

  handleSlideDownMouseLeave() {
    const slidedownDiv = document.getElementById("Home-hero-page-left-contentBox");
    slidedownDiv.style.visibility = "hidden";
    this.setState({
      showWitch: 7,
      on:7,
      in: false
    })
  }

  handleSlideDownMouseEnter() {
    this.setState({
      in:true
    }) 
    const show = this.state.on;
    const slidedownDiv = document.getElementById("Home-hero-page-left-contentBox");
    const empty = slidedownDiv.getElementsByClassName("Home-hero-page-left-content");
    slidedownDiv.style.visibility = "visible";
    if(show >= 0 && show < 7){
      this.setState({
        showWitch: this.state.on
      })
    }else {
      const slidedownDiv = document.getElementById("Home-hero-page-left-contentBox");
      slidedownDiv.style.visibility = "hidden";
    } 
  }

  render(){
    const homeHeroImg = [
      {
        img:Calorifier,
        describe:"alorifier"
      },{
        img:RedMik30,
        describe:"RedMik30"
      },{
        img:RedMiPro,
        describe:"RedMiPro"
      },{
        img:RedMiTV,
        describe:"RedMiTV"
      },{
        img:TVMaster,
        describe:"TVMaster"
      },{
        img:XiaoMiWatch,
        describe:'XiaoMiWatch'
      }]

    const menuLeft =["手机 电话卡","电视 盒子","笔记本 显示器","家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳机 音箱","生活 箱包"]
    
    const homePhone = [
      [{
        img: require("./HomePhone/p1" + ".webp"),
        describe: "小米10 至尊纪念版"
      },{
        img: require("./HomePhone/p2" + ".webp"),
        describe: "小米10 pro"
      },{
        img: require("./HomePhone/p3" + ".webp"),
        describe: "小米10"
      },{
        img: require("./HomePhone/p4" + ".webp"),
        describe: "小米10 青春版"
      },{
        img: require("./HomePhone/p5" + ".webp"),
        describe: "腾讯黑鲨游戏手机"
      },{
        img: require("./HomePhone/p6" + ".jpg"),
        describe: "小米云服务"
      }],[{
        img: require("./HomePhone/p7" + ".webp"),
        describe: "Redmi K30 至尊纪念版"
      },{
        img: require("./HomePhone/p8" + ".webp"),
        describe: "Redmi K30 Pro 变焦版"
      },{
        img: require("./HomePhone/p9" + ".webp"),
        describe: "Redmi K30 Pro"
      },{
        img: require("./HomePhone/p10" + ".webp"),
        describe: "Redmi K30 5G"
      },{
        img: require("./HomePhone/p11" + ".webp"),
        describe: "Redmi K30 4G"
      },{
        img: require("./HomePhone/p12" + ".png"),
        describe: "手机上门维修"
      }],[{
        img: require("./HomePhone/p13" + ".webp"),
        describe: "Redmi 10X Pro"
      },{
        img: require("./HomePhone/p14" + ".webp"),
        describe: "Redmi 10X 5G"
      },{
        img: require("./HomePhone/p15" + ".webp"),
        describe: "Redmi 10X 4G"
      },{
        img: require("./HomePhone/p16" + ".webp"),
        describe: "Redmi Note 8 Pro"
      },{
        img: require("./HomePhone/p17" + ".webp"),
        describe: "Redmi Note 8"
      },{
        img: require("./HomePhone/p18" + ".webp"),
        describe: "中国电信"
      }],[{
        img: require("./HomePhone/p19" + ".webp"),
        describe: "Redmi 9"
      },{
        img: require("./HomePhone/p20" + ".webp"),
        describe: "Redmi 9A"
      },{
        img: require("./HomePhone/p21" + ".webp"),
        describe: "Redmi 8"
      },{
        img: require("./HomePhone/p22" + ".webp"),
        describe: "Redmi 8A"
      },{
        img: require("./HomePhone/p23" + ".jpg"),
        describe: "Redmi 7A"
      }]
    ]

    const homeTv = [
      [{
        img: require("./HomeTv/p1" + ".webp"),
        describe: "小米透明电视机"
      },{
        img: require("./HomeTv/p2" + ".webp"),
        describe: "小米大师 65英寸OLED"
      },{
        img: require("./HomeTv/p3" + ".webp"),
        describe: "Redmi 智能电视 X65"
      },{
        img: require("./HomeTv/p4" + ".webp"),
        describe: "Redmi 智能电视X55"
      },{
        img: require("./HomeTv/p5" + ".webp"),
        describe: "Redmi 智能电视 MAX 98\""
      },{
        img: require("./HomeTv/p6" + ".webp"),
        describe: "小米电视5 55英寸"
      }],[{
        img: require("./HomeTv/p7" + ".webp"),
        describe: "小米电视5 65英寸"
      },{
        img: require("./HomeTv/p8" + ".webp"),
        describe: "小米电视5 75英寸"
      },{
        img: require("./HomeTv/p9" + ".webp"),
        describe: "小米电视5 Pro 55英寸"
      },{
        img: require("./HomeTv/p10" + ".webp"),
        describe: "小米电视5 Pro 65英寸"
      },{
        img: require("./HomeTv/p11" + ".webp"),
        describe: "小米电视5 Pro 75英寸"
      },{
        img: require("./HomeTv/p12" + ".webp"),
        describe: "Redmi 红米电视 70英寸"
      }],[{
        img: require("./HomeTv/p13" + ".webp"),
        describe: "全面屏电视Pro 65英寸"
      },{
        img: require("./HomeTv/p14" + ".webp"),
        describe: "全面屏电视Pro 55英寸"
      },{
        img: require("./HomeTv/p15" + ".jpg"),
        describe: "小米壁画电视  65英寸"
      },{
        img: require("./HomeTv/p16" + ".jpg"),
        describe: "小米全面屏电视"
      },{
        img: require("./HomeTv/p17" + ".webp"),
        describe: "Redmi智能电视A32 黑色"
      },{
        img: require("./HomeTv/p18" + ".webp"),
        describe: "Redmi智能电视A43 黑色"
      }],[{
        img: require("./HomeTv/p19" + ".webp"),
        describe: "Redmi智能电视A50 黑色"
      },{
        img: require("./HomeTv/p20" + ".webp"),
        describe: "Redmi智能电视A55 黑色"
      },{
        img: require("./HomeTv/p21" + ".webp"),
        describe: "激光投影电视"
      },{
        img: require("./HomeTv/p22" + ".jpg"),
        describe: "小米盒子"
      },{
        img: require("./HomeTv/p23" + ".webp"),
        describe: "电视音箱"
      },{
        img: require("./HomeTv/p24" + ".webp"),
        describe: "小米电视4A 50英寸 黑色"
      }]
    ]

    const homeLaptop = [
      [{
        img: require("./HomeLaptop/p1" + ".webp"),
        describe: "Redmi G 游戏本"
      },{
        img: require("./HomeLaptop/p2" + ".webp"),
        describe: "RedmiBooK Air 13"
      },{
        img: require("./HomeLaptop/p3" + ".webp"),
        describe: "RedmiBook 16"
      },{
        img: require("./HomeLaptop/p4" + ".webp"),
        describe: "RedmiBook 14"
      },{
        img: require("./HomeLaptop/p5" + ".webp"),
        describe: "小米笔记本Pro 15.6\""
      },{
        img: require("./HomeLaptop/p6" + ".webp"),
        describe: "RedmiBook 13"
      }],[{
        img: require("./HomeLaptop/p7" + ".png"),
        describe: "小米笔记本 Air 13.3\""
      },{
        img: require("./HomeLaptop/p8" + ".jpg"),
        describe: "小米笔记本 Air12.5\""
      },{
        img: require("./HomeLaptop/p9" + ".jpg"),
        describe: "小米游戏本"
      },{
        img: require("./HomeLaptop/p10" + ".webp"),
        describe: "小米显示器34英寸"
      },{
        img: require("./HomeLaptop/p11" + ".webp"),
        describe: "小米显示器27英寸"
      },{
        img: require("./HomeLaptop/p12" + ".webp"),
        describe: "Redmi显示器23.8英寸"
      }],[{
        img: require("./HomeLaptop/p13" + ".webp"),
        describe: "键鼠套装"
      },{
        img: require("./HomeLaptop/p14" + ".png"),
        describe: "鼠标"
      },{
        img: require("./HomeLaptop/p15" + ".webp"),
        describe: "转换器"
      }]
    ]

    const homeAppliance = [
      [{
        img: require("./HomeAppliance/p1" + ".webp"),
        describe: "冰箱"
      },{
        img: require("./HomeAppliance/p2" + ".png"),
        describe: "立式空调"
      },{
        img: require("./HomeAppliance/p3" + ".png"),
        describe: "壁挂空调"
      },{
        img: require("./HomeAppliance/p4" + ".png"),
        describe: "滚筒洗衣机"
      },{
        img: require("./HomeAppliance/p5" + ".jpg"),
        describe: "Redmi全自动波轮洗衣机"
      },{
        img: require("./HomeAppliance/p6" + ".jpg"),
        describe: "净水器"
      }],[{
        img: require("./HomeAppliance/p7" + ".webp"),
        describe: "微波炉"
      },{
        img: require("./HomeAppliance/p8" + ".jpg"),
        describe: "电烤箱"
      },{
        img: require("./HomeAppliance/p9" + ".jpg"),
        describe: "扫地机器人"
      },{
        img: require("./HomeAppliance/p10" + ".jpg"),
        describe: "吸尘器"
      },{
        img: require("./HomeAppliance/p11" + ".jpg"),
        describe: "空气净化器"
      },{
        img: require("./HomeAppliance/p12" + ".jpg"),
        describe: "电饭煲"
      }],[{
        img: require("./HomeAppliance/p13" + ".jpg"),
        describe: "电磁炉"
      },{
        img: require("./HomeAppliance/p14" + ".jpg"),
        describe: "电水壶"
      },{
        img: require("./HomeAppliance/p15" + ".jpg"),
        describe: "滤水壶"
      },{
        img: require("./HomeAppliance/p16" + ".png"),
        describe: "落地风扇"
      },{
        img: require("./HomeAppliance/p17" + ".png"),
        describe: "投影仪"
      },{
        img: require("./HomeAppliance/p18" + ".jpg"),
        describe: "灯具"
      }],[{
        img: require("./HomeAppliance/p19" + ".jpg"),
        describe: "插线板"
      },{
        img: require("./HomeAppliance/p20" + ".jpg"),
        describe: "新风机"
      },{
        img: require("./HomeAppliance/p21" + ".jpg"),
        describe: "电暖器"
      },{
        img: require("./HomeAppliance/p22" + ".jpg"),
        describe: "电压力锅"
      },{
        img: require("./HomeAppliance/p23" + ".jpg"),
        describe: "料理机"
      },{
        img: require("./HomeAppliance/p24" + ".jpg"),
        describe: "电煮壶"
      }]
    ]

    const homeOut = [
      [{
        img: require("./HomeForOut/p1" + ".webp"),
        describe: "手环5NFC"
      },{
        img: require("./HomeForOut/p2" + ".webp"),
        describe: "手环5"
      },{
        img: require("./HomeForOut/p3" + ".webp"),
        describe: "小米手表"
      },{
        img: require("./HomeForOut/p4" + ".png"),
        describe: "手环手表"
      },{
        img: require("./HomeForOut/p5" + ".jpg"),
        describe: "VR"
      },{
        img: require("./HomeForOut/p6" + ".jpg"),
        describe: "平衡车"
      }],[{
        img: require("./HomeForOut/p7" + ".webp"),
        describe: "自行车"
      },{
        img: require("./HomeForOut/p8" + ".jpg"),
        describe: "滑板车"
      },{
        img: require("./HomeForOut/p9" + ".jpg"),
        describe: "车载充电器"
      },{
        img: require("./HomeForOut/p10" + ".jpg"),
        describe: "平衡车配件"
      },{
        img: require("./HomeForOut/p11" + ".jpg"),
        describe: "智能后视镜"
      },{
        img: require("./HomeForOut/p12" + ".jpg"),
        describe: "智能记录仪"
      }],[{
        img: require("./HomeForOut/p13" + ".jpg"),
        describe: "无线车充"
      },{
        img: require("./HomeForOut/p14" + ".jpg"),
        describe: "充气宝"
      },{
        img: require("./HomeForOut/p15" + ".webp"),
        describe: "石英表"
      }]
    ]

    const homeIH = [
      [{
        img: require("./HomeIH/p1" + ".jpg"),
        describe: "打印机"
      },{
        img: require("./HomeIH/p2" + ".webp"),
        describe: "喷墨打印机"
      },{
        img: require("./HomeIH/p3" + ".webp"),
        describe: "喷墨打印机墨水"
      },{
        img: require("./HomeIH/p4" + ".webp"),
        describe: "小米路由器"
      },{
        img: require("./HomeIH/p5" + ".webp"),
        describe: "智能家庭"
      },{
        img: require("./HomeIH/p6" + ".jpg"),
        describe: "对讲机"
      }],[{
        img: require("./HomeIH/p7" + ".jpg"),
        describe: "摄像机"
      },{
        img: require("./HomeIH/p8" + ".jpg"),
        describe: "照相机"
      },{
        img: require("./HomeIH/p9" + ".jpg"),
        describe: "智能门锁"
      },{
        img: require("./HomeIH/p10" + ".jpg"),
        describe: "视频门铃"
      },{
        img: require("./HomeIH/p11" + ".png"),
        describe: "小爱老师"
      },{
        img: require("./HomeIH/p12" + ".webp"),
        describe: "Redmi路由器"
      }],[{
        img: require("./HomeIH/p13" + ".jpg"),
        describe: "小爱音箱"
      },{
        img: require("./HomeIH/p14" + ".webp"),
        describe: "云服务空间年卡"
      },{
        img: require("./HomeIH/p15" + ".webp"),
        describe: "云服务空间月卡"
      }]
    ]

    const homeAcce = [
      [{
        img: require("./HomeAcce/p1" + ".webp"),
        describe: "移动电源"
      },{
        img: require("./HomeAcce/p2" + ".jpg"),
        describe: "数据线"
      },{
        img: require("./HomeAcce/p3" + ".jpg"),
        describe: "车充"
      },{
        img: require("./HomeAcce/p4" + ".webp"),
        describe: "充电器"
      },{
        img: require("./HomeAcce/p5" + ".jpg"),
        describe: "电池"
      },{
        img: require("./HomeAcce/p6" + ".jpg"),
        describe: "自拍杆"
      }],[{
        img: require("./HomeAcce/p7" + ".jpg"),
        describe: "手机壳"
      },{
        img: require("./HomeAcce/p8" + ".jpg"),
        describe: "手机贴膜"
      },{
        img: require("./HomeAcce/p9" + ".jpg"),
        describe: "无线充电器"
      },{
        img: require("./HomeAcce/p10" + ".jpg"),
        describe: "平板配件"
      },{
        img: require("./HomeAcce/p11" + ".jpg"),
        describe: "黑鲨配件"
      },{
        img: require("./HomeAcce/p12" + ".jpg"),
        describe: "其他配件"
      }]
    ]

    const homeHealth = [
      [{
        img: require("./HomeHealth/p1" + ".jpg"),
        describe: "洗手机"
      },{
        img: require("./HomeHealth/p2" + ".webp"),
        describe: "修剪器"
      },{
        img: require("./HomeHealth/p3" + ".jpg"),
        describe: "剃须刀"
      },{
        img: require("./HomeHealth/p4" + ".jpg"),
        describe: "牙刷"
      },{
        img: require("./HomeHealth/p5" + ".jpg"),
        describe: "吹风机"
      },{
        img: require("./HomeHealth/p6" + ".png"),
        describe: "体重秤"
      }],[{
        img: require("./HomeHealth/p7" + ".jpg"),
        describe: "体脂秤"
      },{
        img: require("./HomeHealth/p8" + ".jpg"),
        describe: "早教启智"
      },{
        img: require("./HomeHealth/p9" + ".jpg"),
        describe: "遥控电动"
      },{
        img: require("./HomeHealth/p10" + ".jpg"),
        describe: "益智积木"
      },{
        img: require("./HomeHealth/p11" + ".jpg"),
        describe: "儿童手表"
      },{
        img: require("./HomeHealth/p12" + ".jpg"),
        describe: "儿童滑板车"
      }],[{
        img: require("./HomeHealth/p13" + ".jpg"),
        describe: "婴儿推车"
      },{
        img: require("./HomeHealth/p14" + ".jpg"),
        describe: "儿童书包"
      },{
        img: require("./HomeHealth/p15" + ".jpg"),
        describe: "婴儿理发器"
      },{
        img: require("./HomeHealth/p16" + ".webp"),
        describe: "健身车"
      },{
        img: require("./HomeHealth/p17" + ".jpg"),
        describe: "走步机"
      },{
        img: require("./HomeHealth/p18" + ".jpg"),
        describe: "点读笔"
      }]
    ]

    const homeAirPhone = [
      [{
        img: require("./HomeAirPhone/p1" + ".webp"),
        describe: "小爱音箱 Art"
      },{
        img: require("./HomeAirPhone/p2" + ".webp"),
        describe: "小爱chup音箱Pro 8"
      },{
        img: require("./HomeAirPhone/p3" + ".webp"),
        describe: "Remi小爱触屏音箱 8"
      },{
        img: require("./HomeAirPhone/p4" + ".webp"),
        describe: "音箱 Pro"
      },{
        img: require("./HomeAirPhone/p5" + ".webp"),
        describe: "小米小爱音箱"
      },{
        img: require("./HomeAirPhone/p6" + ".jpg"),
        describe: "小米小爱音箱 Play"
      }],[{
        img: require("./HomeAirPhone/p7" + ".jpg"),
        describe: "小米小爱触屏音箱"
      },{
        img: require("./HomeAirPhone/p8" + ".webp"),
        describe: "Redmi音箱"
      },{
        img: require("./HomeAirPhone/p9" + ".jpg"),
        describe: "线控耳机"
      },{
        img: require("./HomeAirPhone/p10" + ".webp"),
        describe: "蓝牙耳机"
      },{
        img: require("./HomeAirPhone/p11" + ".jpg"),
        describe: "头戴耳机"
      },{
        img: require("./HomeAirPhone/p12" + ".jpg"),
        describe: "品牌耳机"
      }],[{
        img: require("./HomeAirPhone/p13" + ".webp"),
        describe: "蓝牙音箱"
      },{
        img: require("./HomeAirPhone/p14" + ".jpg"),
        describe: "小米AI音箱"
      },{
        img: require("./HomeAirPhone/p15" + ".jpg"),
        describe: "小米小爱音箱HD"
      },{
        img: require("./HomeAirPhone/p16" + ".jpg"),
        describe: "k歌耳机"
      }]
    ]

    const homeLife = [
      [{
        img: require("./HomeLife/p1" + ".webp"),
        describe: "小背包"
      },{
        img: require("./HomeLife/p2" + ".jpg"),
        describe: "双肩包"
      },{
        img: require("./HomeLife/p3" + ".webp"),
        describe: "胸包"
      },{
        img: require("./HomeLife/p4" + ".webp"),
        describe: "旅行箱"
      },{
        img: require("./HomeLife/p5" + ".jpg"),
        describe: "运动鞋"
      },{
        img: require("./HomeLife/p6" + ".jpg"),
        describe: "眼镜"
      }],[{
        img: require("./HomeLife/p7" + ".jpg"),
        describe: "床垫"
      },{
        img: require("./HomeLife/p8" + ".png"),
        describe: "枕头"
      },{
        img: require("./HomeLife/p9" + ".webp"),
        describe: "饰品"
      },{
        img: require("./HomeLife/p10" + ".jpg"),
        describe: "螺丝刀"
      },{
        img: require("./HomeLife/p11" + ".jpg"),
        describe: "保温杯"
      },{
        img: require("./HomeLife/p12" + ".jpg"),
        describe: "伞"
      }],[{
        img: require("./HomeLife/p13" + ".jpg"),
        describe: "驱蚊器"
      },{
        img: require("./HomeLife/p14" + ".jpg"),
        describe: "毛巾/浴巾"
      },{
        img: require("./HomeLife/p15" + ".webp"),
        describe: "米兔"
      },{
        img: require("./HomeLife/p16" + ".jpg"),
        describe: "笔"
      }]
    ]

    const empty = [
      [{
        img: "",
        describe: ""
      },{
        img: "",
        describe: ""
      }]
    ]
    const leftmenuContent = [homePhone,homeTv,homeLaptop,homeAppliance,homeOut,homeIH,homeAcce,homeHealth,homeAirPhone,homeLife,empty]

    return(
      <div id="Home-hero">
        <div id="Home-hero-page-main">
          <ListForImgWithWords imgWrapper="Home-hero-img-wrapper" items={homeHeroImg} imgItem="Home-hero-pictures" imgDescribe="Home-hero-pictures-describe"/>
          <MenuForHomeHero id="Home-hero-page-left" items={menuLeft} menuWrapper="Home-hero-page-menuWrapper" btn="Home-hero-page-btn" handleMouseOver={this.handleMouseOver.bind(this)} handleMouseLeave={this.handleMouseLeave.bind(this)} />
        </div>
        <div id="Home-hero-page-left-contentBox" onMouseEnter={this.handleSlideDownMouseEnter.bind(this)} onMouseLeave={this.handleSlideDownMouseLeave.bind(this)}>
          <GridForHomeMenu items={leftmenuContent[this.state.showWitch]} id="Home-hero-page-left-content" lumps="Home-hero-leftmenu-lumps" imgWrapper="Home-hero-leftmenu-wrapper" imgItem="Home-hero-leftmenu-content-pictures" imgDescribe="Home-hero-leftmenu-content-pictures-describe" />
        </div>
        <HomeHeroSub />
      </div>
    )
  }
}


export default HomeHeroPage;