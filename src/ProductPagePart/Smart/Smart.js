import React, { Component } from 'react';
import ProductCase from '../../PublicComponents/ProductCase';
import ProductLumpForMore from '../../PublicComponents/ProductLumpForMore';
import LiuLan from '../../AppImg/LiuLan.png';

class Smart extends Component {
  render() {
    const maths = {
      SmartImgLeft1:"",
      SmartImgLeft2:"",
      SmartImgRight1:"",
      SmartImgRight2:"",
      SmartImgRight3:"",
      SmartImgRight4:"",
      SmartImgRight5:"",
      SmartImgRight6:"",
      SmartImgRight7:""
    }
    const maths2 ={
      SmartImgRight8:""
    }
    const ticksPre = Object.keys(maths).map(item => require("./SmartImgs/"+ item + ".webp"));
    const ticksPre2 = Object.keys(maths2).map(item => require("./SmartImgs/"+ item + ".jpg"));
    const ticks = ticksPre.concat(ticksPre2);

    const productForHome =[
      {
        img:ticks[2],
        name:"小米「小爱老师」",
        describe:"英语提分利器",
        price:"499元起",
        beforePrice:""
      },{
        img:ticks[3],
        name:"小米智能门锁 E",
        describe:"告别钥匙，畅想便捷生活",
        price:"999元",
        beforePrice:""
      },{
        img:ticks[4],
        name:"小米小爱音箱 Play",
        describe:"听音乐、语音遥控家电",
        price:"99元",
        beforePrice:"169元"
      },{
        img:ticks[5],
        name:"小爱音箱万能遥控板",
        describe:"传统家电秒变智能",
        price:"149元",
        beforePrice:"199元"
      },{
        img:ticks[6],
        name:"米家电饭煲4L",
        describe:"890W 立体加热",
        price:"269元",
        beforePrice:"299元"
      },{
        img:ticks[7],
        name:"米家智能窗帘",
        describe:"窗帘开合随心控",
        price:"799元",
        beforePrice:""
      },{
        img:ticks[8],
        name:"小米体脂秤2",
        describe:"轻松掌握身体脂肪率",
        price:"99元",
        beforePrice:""
      },
    ]
    const lumpForMore ={
        img:ticks[9],
        name:"九号平衡车",
        describe:"",
        price:"1999元",
        beforePrice:"",
    }
    return(
      <div className="Home-product-sale">
        <div className="xiaoMi-shangou">
          <h2>智能</h2>
        </div>
        <div className="Home-appliance-mainImg-box">
          <img className="Home-appliance-mainImg" src={ticks[0]} />
          <img className="Home-appliance-mainImg" src={ticks[1]} />
        </div>
        <ProductCase headsize="h3" aboutProducts={productForHome} productCaseWrapper="product-case-wrapper" content="product-content" thumb="product-thumb" title="product-title" desc="product-desc" price="product-price" />
        <ProductLumpForMore number8="Appliance-more-box" btn={lumpForMore} content="Home-appliance-more" visiable="Home-appliance-more" contentDesc="Home-appliance-more-desc" thumb="Home-appliance-more-img" forMoreDesc="for-more-desc" imgForMoreSrc={LiuLan} forMoreImg="forMoreImg" />
      </div>
    )
  }
}

export default Smart;