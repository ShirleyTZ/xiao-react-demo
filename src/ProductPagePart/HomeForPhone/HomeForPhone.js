import React, { Component } from 'react';
import ProductCase from '../../PublicComponents/ProductCase';

class HomeForPhone extends Component {
  render() {
    const maths = {
      phoneleft:"",
      xiaomi10ZhiZunBan:"",
      RedMiK30ZhiZunBan:"",
      tengXunHeiSha3S:"",
      RedMiA9:"",
      xiaomi10QingChun5G:"",
      xiaomi10:"",
      RedMiK30Pro:"",
      RedMiK30ProBianJiaoBan:"",
    }
    const ticks = Object.keys(maths).map(item => require("./PhoneImgs/" + item + ".webp"));
    const productForHome =[
      {
        img:ticks[1],
        name:"小米10至尊版",
        describe:"120X 变焦/120W秒充/120Hz屏幕",
        price:"5299元起",
        beforePrice:""
      },{
        img:ticks[2],
        name:"Redmi K30 至尊版",
        describe:"120Hz弹出全面屏，天玑1000+旗舰处理器",
        price:"1999元起",
        beforePrice:""
      },{
        img:ticks[3],
        name:"腾讯黑鲨3S",
        describe:"晓龙865处理器，120Hz刷新率",
        price:"3999元起",
        beforePrice:""
      },{
        img:ticks[4],
        name:"Redmi 9A",
        describe:"5000mAh长循环大电量，6.53\"超大护眼屏幕",
        price:"599元起",
        beforePrice:""
      },{
        img:ticks[5],
        name:"小米10 青春版 5G",
        describe:"50倍潜望式变焦/轻薄5G",
        price:"1899元起",
        beforePrice:"2099元"
      },{
        img:ticks[6],
        name:"小米10",
        describe:"晓龙865/1亿像素相机",
        price:"3799元起",
        beforePrice:"3999元"
      },{
        img:ticks[7],
        name:"Redmi K30 Pro",
        describe:"双模5G，晓龙865，弹出全面屏",
        price:"2999元起",
        beforePrice:"3699元"
      },{
        img:ticks[8],
        name:"Redmi K30 Pro 变焦版",
        describe:"双模5G，晓龙865，弹出全面屏",
        price:"3199元起",
        beforePrice:"3799元"
      }
    ]
    return(
      <div className="Home-flash-sale">
        <div className="xiaoMi-shangou">
          <h2>手机</h2>
        </div>
        <div className="Home-phone-mainImg">
          <img src={ticks[0]} />
        </div>
        <ProductCase headsize="h3" aboutProducts={productForHome} productCaseWrapper="product-case-wrapper" content="product-content" thumb="product-thumb" title="product-title" desc="product-desc" price="product-price" />
      </div>
    )
  }
}

export default HomeForPhone;