import React, { Component } from 'react';
import ProductCase from '../../PublicComponents/ProductCase';
import ProductLumpForMore from '../../PublicComponents/ProductLumpForMore';
import LiuLan from '../../AppImg/LiuLan.png';

class Match extends Component {
  render() {
    const maths = {
      MatchImgLeft1:"",
      MatchImgLeft2:"",
      MatchImgRight1:"",
      MatchImgRight2:"",
      MatchImgRight3:"",
      MatchImgRight4:"",
      MatchImgRight7:"",
      MatchImgRight8:""
    }
    const maths2 ={
      MatchImgRight5:"",
      MatchImgRight6:""
    }
    const ticksPre = Object.keys(maths).map(item => require("./MatchImgs/"+ item + ".webp"));
    const ticksPre2 = Object.keys(maths2).map(item => require("./MatchImgs/"+ item + ".jpg"));
    const ticks = ticksPre.concat(ticksPre2);

    const productForHome =[
      {
        img:ticks[2],
        name:"小米真无线蓝牙耳机 Air 2",
        describe:"智能真无线，轻松舒适戴",
        price:"299元",
        beforePrice:"399元"
      },{
        img:ticks[3],
        name:"高速无线充电套",
        describe:"快速无线闪充，Qi充电标准",
        price:"149元",
        beforePrice:""
      },{
        img:ticks[4],
        name:"Redmi 充电宝 10000mAh 标准版 白色",
        describe:"10000mAh大电量",
        price:"59元",
        beforePrice:""
      },{
        img:ticks[5],
        name:"Redmi充电宝 20000mAh 快充版",
        describe:"大容量，可上飞机",
        price:"99元",
        beforePrice:""
      },{
        img:ticks[8],
        name:"小米插线板 5孔位",
        describe:"多重安全保护",
        price:"39元",
        beforePrice:""
      },{
        img:ticks[9],
        name:"小米蓝牙耳机AirDots青春版",
        describe:"雅致简约，收纳充电盒",
        price:"169元",
        beforePrice:"199元"
      },{
        img:ticks[6],
        name:"小米小爱触屏音箱",
        describe:"好听，更好看",
        price:"199元",
        beforePrice:""
      },
    ]
    const lumpForMore ={
        img:ticks[7],
        name:"小米无线车充通用快充版",
        describe:"",
        price:"199元",
        beforePrice:"",
    }
    return(
      <div className="Home-product-sale">
        <div className="xiaoMi-shangou">
          <h2>搭配</h2>
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

export default Match;