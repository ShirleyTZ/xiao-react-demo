import React, { Component } from 'react';
import ListForMenu from '../PublicComponents/ListForMenu';
import '../Footer/Footer.css';
import logoFooter from './FooterImgs/logo-footer.png';


class Footer extends Component {
  
  render() {
    const btns = ["小米商城","MIUI","米家","米聊","多看","游戏","政企服务","小米天猫小店","小米集团隐私政策","小米公司儿童信息保护规则","小米商城隐私政策","小米商城用户协议","问题反馈","Select Location"];
    const maths ={
      vlogo1:"",
      vlogo2:"",
      vlogo3:"",
      vlogo4:"",
      vlogo5:""
    }
    const ticks = Object.keys(maths).map(item => require("./FooterImgs/"+ item + ".png"));
    return(
      <div id={this.props.id}>
        <div className="footer-wrapper">
          <img className="logoFooter" src={logoFooter}/>
          <ListForMenu btns={btns} list="sites" wrapper="sites-wrapper" words="sites-words" spans="sites-spans" />
          <p className="licenses">
            <a>© mi.com 京ICP证11507号 </a>
            <a>京ICP备10046444 </a>
            <a>京公网安备1101082020134号 </a>
            <a>京网文[2020]0276-042号 </a>
            <br/>
            <a>(京) 网械平台备字 （2018）第00005号 </a>
            <a>互联网药品信息服务资格证（京）-非经营性-2014-0090 </a>
            <a>营业执照 </a>
            <a>医疗器械质量报告 </a>
            <br/>
            <a>增值电信业务许可证 </a>
            <a>网络食品经营备案 </a>
            <a>京食药网食备201810017 </a>
            <a>食品经营许可证 </a>
            <br/>
            <span>违法和不良信息举报电话：171-5104-4404 <a>知识产权侵权投诉 </a>本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</span>
          </p>
          <div className="licensesImg">
            <img src={ticks[0]} />
            <img src={ticks[1]} />
            <img src={ticks[2]} />
            <img src={ticks[3]} />
            <img src={ticks[4]} />
          </div>
          <div className="wish"></div>
        </div>
        
      </div>
    )
  }
}

export default Footer;