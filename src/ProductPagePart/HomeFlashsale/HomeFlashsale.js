import React, { Component } from 'react';
import ProductCase from '../../PublicComponents/ProductCase';
import downloadImg from './download';

class HomeFlashsale extends Component {
  render() {
    const maths = {
      headset:"",
      liangPianLong:"",
      waterClarifier:"",
      xiaomichar:"",
      xiaoMiClock:""
    }
    const ticks = Object.keys(maths).map(item => require("../HomeFlashsale/FlashsaleImgs/" + item + ".jpg"));
    const flashsaleProducts =[
      {
        img:ticks[0],
        name:"高品质多功能头戴式耳机mmmmmmm",
        describe:"我的私人KTVnnfnf dns n互粉吧一样的v啊u ",
        price:"169元",
        beforePrice:"249元"
      },{
        img:ticks[1],
        name:"绿粉亮片龙特雷摩尔 常规号",
        describe:"绿粉亮片龙特雷摩尔",
        price:"49元",
        beforePrice:"79.9元"
      },{
        img:ticks[2],
        name:"小米净水器600G白色",
        describe:"600加仑通量，流速更快",
        price:"1699元",
        beforePrice:"2499元"
      },{
        img:ticks[3],
        name:"悦米YM人体工学椅 黑色",
        describe:"健康坐姿，舒适体验",
        price:"1099元",
        beforePrice:"1399元"
      },{
        img:ticks[4],
        name:"霍尼韦尔甲醛监测仪 白色",
        describe:"掌握甲醛浓度，一目了然",
        price:"369元",
        beforePrice:"399元"
      }
    ]
    return(
      <div className="Home-flash-sale">
        <div className="xiaoMi-shangou">
          <h2>小米闪购</h2>
        </div>
        <div className="flashsale-countdown">
          <div className="round">14:00 场</div>
          <img src={downloadImg}/>
          <div className="desc">距离结束还有</div>
          <div className="countDown">
            <span>04</span>
            <li>:</li>
            <span>01</span>
            <li>:</li>
            <span>09</span>
          </div>
        </div>
        <ProductCase headsize="h2" aboutProducts={flashsaleProducts} productCaseWrapper="caseWrapper" content="content" thumb="thumb" title="title" desc="desc" price="price" />
      </div>
    )
  }
}

export default HomeFlashsale;