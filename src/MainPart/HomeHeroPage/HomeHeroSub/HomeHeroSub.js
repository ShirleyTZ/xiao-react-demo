import React, { Component } from 'react';
import ListForImgWithWords from '../../../PublicComponents/ListForImgWithWords';
import Img1 from './HomeHeroSubLeftImg/img1.png'; 
import Img2 from './HomeHeroSubLeftImg/img2.png';
import Img3 from './HomeHeroSubLeftImg/img3.png';
import Img4 from './HomeHeroSubLeftImg/img4.png';
import Img5 from './HomeHeroSubLeftImg/img5.png';
import Img6 from './HomeHeroSubLeftImg/img6.png';
import ImgR1 from './HomeHeroSubRightImg/imgR1.jpg';
import ImgR2 from './HomeHeroSubRightImg/imgR2.jpg';
import ImgR3 from './HomeHeroSubRightImg/imgR3.jpg';

class HomeHeroSub extends Component {
  render() {
    const homeHeroSubItems = [
      {
        img:Img1,
        describe:"小米秒杀"
      },{
        img:Img2,
        describe:"企业团购"
      },{
        img:Img3,
        describe:"F码通道"
      },{
        img:Img4,
        describe:"米粉卡"
      },{
        img:Img5,
        describe:"以旧换新"
      },{
        img:Img6,
        describe:"话费充值"
      }
    ];
    const homeHeroSubRightItems = [
      {
        img:ImgR1,
        describe:" "
      },{
        img:ImgR2,
        describe:" "
      },{
        img:ImgR3,
        describe:" "
      }
    ]
    return(
      <div id="Home-hero-sub">
        <ListForImgWithWords id="Home-hero-sub-left" items={homeHeroSubItems} imgWrapper="Home-hero-sub-img-wrapper" imgItem="Home-hero-sub-pictures" imgDescribe="Home-hero-sub-pictures-describe"/>
        <img className="Home-hero-subR-pictures" src={ImgR1} />
        <img className="Home-hero-subR-pictures" src={ImgR2} />
        <img className="Home-hero-subR-pictures" src={ImgR3} />
      </div>
    )
  }
}

export default HomeHeroSub;