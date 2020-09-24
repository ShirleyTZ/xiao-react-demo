import React, { Component } from 'react';
import ProductCase from '../../PublicComponents/ProductCase';
import ProductLumpForMore from '../../PublicComponents/ProductLumpForMore';
import LiuLanGengDuo from './HomeApplianceImgs/LiuLanGengDuo.png'

class HomeAppliances extends Component {
  render() {
    const maths = {
      ApplicationLeft1:"",
      ApplicationLeft2:"",
      ApplicationRight1:"",
      ApplicationRight2:"",
      ApplicationRight3:"",
      ApplicationRight5:"",
      ApplicationRight6:"",
      ApplicationRight7:"",
      ApplicationRight8:""
    }
    const maths2 ={
      ApplicationRight4:""
    }
    const ticksPre = Object.keys(maths).map(item => require("./HomeApplianceImgs/"+ item + ".webp"));
    const ticksPre2 = Object.keys(maths2).map(item => require("./HomeApplianceImgs/"+ item + ".jpg"));
    const ticks = ticksPre.concat(ticksPre2);

    const productForHome =[
      {
        img:ticks[2],
        name:"Redmi 红米电视 70英寸",
        describe:"70英寸震撼巨屏，4K画质，细腻如真",
        price:"3199元",
        beforePrice:"3799元"
      },{
        img:ticks[3],
        name:"小米全面屏电视E32C",
        describe:"全面屏设计，人工智能系统",
        price:"899元",
        beforePrice:""
      },{
        img:ticks[4],
        name:"小米全面屏电视E55A",
        describe:"全面屏设计，人工智能语音",
        price:"1999元",
        beforePrice:""
      },{
        img:ticks[9],
        name:"米家空调",
        describe:"出众静音，快速制冷",
        price:"1499元",
        beforePrice:"1799元"
      },{
        img:ticks[5],
        name:"米家互联网洗烘一体机 Pro 10kg",
        describe:"智能洗烘",
        price:"2999元",
        beforePrice:"3299元"
      },{
        img:ticks[6],
        name:"Redmi全自动波轮洗衣机1A 8kg",
        describe:"一键操作，父母都爱用",
        price:"799元",
        beforePrice:"899元"
      },{
        img:ticks[7],
        name:"15.6\" 四核i7 16G 独显 512G",
        describe:"全面均衡的国民轻薄本",
        price:"4899元",
        beforePrice:""
      }
    ]
    const lumpForMore ={
        img:ticks[8],
        name:"Air 13.3\" 2019款",
        describe:"",
        price:"5699元起",
        beforePrice:"",
    }
    return(
      <div className="Home-product-sale">
        <div className="xiaoMi-shangou">
          <h2>家电</h2>
        </div>
        <div className="Home-appliance-mainImg-box">
          <img className="Home-appliance-mainImg" src={ticks[0]} />
          <img className="Home-appliance-mainImg" src={ticks[1]} />
        </div>
        <ProductCase headsize="h3" aboutProducts={productForHome} productCaseWrapper="product-case-wrapper" content="product-content" thumb="product-thumb" title="product-title" desc="product-desc" price="product-price" />
        <ProductLumpForMore number8="Appliance-more-box" btn={lumpForMore} content="Home-appliance-more" visiable="Home-appliance-more" contentDesc="Home-appliance-more-desc" thumb="Home-appliance-more-img" forMoreDesc="for-more-desc" imgForMoreSrc={LiuLanGengDuo} forMoreImg="forMoreImg" />
      </div>
    )
  }
}

export default HomeAppliances;