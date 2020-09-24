import React, { Component } from 'react';
import ProductCase from '../../PublicComponents/ProductCase';
import ProductLumpForMore from '../../PublicComponents/ProductLumpForMore';
import LiuLan from '../../AppImg/LiuLan.png';

class Accessories extends Component {
  render() {
    const maths = {
      AccessoriesImgsLeft1:"",
      AccessoriesImgsLeft2:"",
      AccessoriesImgsRight1:"",
      AccessoriesImgsRight2:"",
      AccessoriesImgsRight4:"",
      AccessoriesImgsRight7:"",
      AccessoriesImgsRight8:""
    }
    const maths2 ={
      AccessoriesImgsRight3:"",
      AccessoriesImgsRight5:"",
      AccessoriesImgsRight6:""
    }
    const ticksPre = Object.keys(maths).map(item => require("./AccessoriesImgs/"+ item + ".webp"));
    const ticksPre2 = Object.keys(maths2).map(item => require("./AccessoriesImgs/"+ item + ".jpg"));
    const ticks = ticksPre.concat(ticksPre2);

    const productForHome =[
      {
        img:ticks[2],
        name:"高速无线充电套",
        describe:"快速无线闪充，Qi充电标准",
        price:"149元",
        beforePrice:""
      },{
        img:ticks[3],
        name:"小米无线充电宝青春版10000mAh",
        describe:"能量满满，无线有线都能充",
        price:"129元",
        beforePrice:""
      },{
        img:ticks[7],
        name:"米家LED随身灯",
        describe:"小巧轻便 5级亮度调节",
        price:"19.9元",
        beforePrice:""
      },{
        img:ticks[4],
        name:"小米GaN充电器 Type-C 65W",
        describe:"氮化镓黑科技 65W MAx 大功率快充",
        price:"149元",
        beforePrice:""
      },{
        img:ticks[8],
        name:"移动电源高配版（10000mAh）",
        describe:"轻薄设计，轻松出行",
        price:"129元",
        beforePrice:"149元"
      },{
        img:ticks[9],
        name:"小米二合一数据线100cm",
        describe:"支持快充，安全保护",
        price:"24.9元",
        beforePrice:""
      },{
        img:ticks[5],
        name:"小米真无线蓝牙 Air 2",
        describe:"智能真无线，轻松舒适戴",
        price:"299元",
        beforePrice:"399元"
      },
    ]
    const lumpForMore ={
        img:ticks[6],
        name:"小米9 SE 街头风保护壳",
        describe:"",
        price:"499元",
        beforePrice:"",
    }
    return(
      <div className="Home-product-sale">
        <div className="xiaoMi-shangou">
          <h2>配件</h2>
        </div>
        <div className="Home-appliance-mainImg-box">
          <img className="Home-appliance-mainImg" src={ticks[0]} />
          <img className="Home-appliance-mainImg" src={ticks[1]} />
        </div>
        <ProductCase headsize="h3" aboutProducts={productForHome} productCaseWrapper="product-case-wrapper" content="product-content"  thumb="product-thumb" title="product-title" desc="product-desc" price="product-price" />
        <ProductLumpForMore number8="Appliance-more-box" btn={lumpForMore} content="Home-appliance-more" visiable="Home-appliance-more" contentDesc="Home-appliance-more-desc" thumb="Home-appliance-more-img" forMoreDesc="for-more-desc" imgForMoreSrc={LiuLan} forMoreImg="forMoreImg" />
      </div>
    )
  }
}

export default Accessories;