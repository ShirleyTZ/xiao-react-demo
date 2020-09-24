import React, { Component } from 'react';
import ListForImgWithWords from '../PublicComponents/ListForImgWithWords';
import maintain from './AboutXiaoMiImg/maintain.png';
import './AboutXiaoMi.css';
import ListForAbout from '../PublicComponents/ListForAbout';
import WB from './AboutXiaoMiImg/wb.png';
import Wx from './AboutXiaoMiImg/wx.png'

class AboutXiaoMi extends Component {
  render() {
    const imgItems = [
      {
        img: maintain,
        describe: "预约维修服务"
      },{
        img: maintain,
        describe: "七天无理由退货"
      },{
        img: maintain,
        describe: "15天免费换货"
      },{
        img: maintain,
        describe: "满99元包邮"
      },{
        img: maintain,
        describe: "520余家售后网点"
      }]

      const AboutList1=["账户管理","购物指南","订单操作"];
      const AboutList2=["售后政策","自助服务","关于下载"];
      const AboutList3=["小米之家","服务网点","授权体验店"];
      const AboutList4=["了解小米","加入小米","投资者关系","企业社会责任","廉洁举报"];
      const AboutList5=["新浪微博","官方微信","联系我们","公益基金会"];
      const AboutList6=["F 码通道","礼物码","防伪查询"]
      
      
    return (
      <div id="About-xiaomi">
        <ListForImgWithWords id="serves" items={imgItems} imgWrapper="About-xiaomi-top-wrapper" imgItem="About-xiaomi-imgItem" imgDescribe="About-xiaomi-imgDesc" />
        
        <div className="About-xiaomi-form">
          <ListForAbout dtName="帮助中心" items={AboutList1} dlClass="About-xiaomi-serves-form" dtClass="About-xiaomi-serves-dt" ddClass="About-xiaomi-serves-dd"/>
          <ListForAbout dtName="服务支持" items={AboutList2} dlClass="About-xiaomi-serves-form" dtClass="About-xiaomi-serves-dt" ddClass="About-xiaomi-serves-dd"/>
          <ListForAbout dtName="线下门店" items={AboutList3} dlClass="About-xiaomi-serves-form" dtClass="About-xiaomi-serves-dt" ddClass="About-xiaomi-serves-dd"/>
          <ListForAbout dtName="关于小米" items={AboutList4} dlClass="About-xiaomi-serves-form" dtClass="About-xiaomi-serves-dt" ddClass="About-xiaomi-serves-dd"/>
          <ListForAbout dtName="关注我们" items={AboutList5} dlClass="About-xiaomi-serves-form" dtClass="About-xiaomi-serves-dt" ddClass="About-xiaomi-serves-dd"/>
          <ListForAbout dtName="特色服务" items={AboutList6} dlClass="About-xiaomi-serves-form" dtClass="About-xiaomi-serves-dt" ddClass="About-xiaomi-serves-dd"/>
        </div>
        <div className="About-xiaomi-sub-left">
          <p className="tel">400-100-5678</p>
          <p className="workTime">8:00-18:00（仅收市话费）</p>
          <div className="customer">
            <img />
            人工客服
          </div>
          <div className="attention">
            关注小米: 
            <img className="attentionImg1" src={WB} />
            <img src={Wx} />
          </div>
        </div>
      
      </div>
    );
  }
}

export default AboutXiaoMi;