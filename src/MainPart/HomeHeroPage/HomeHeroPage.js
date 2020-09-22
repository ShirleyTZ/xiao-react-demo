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

class HomeHeroPage extends Component {

  render() {
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
    return(
      <div id="Home-hero">
        <div id="Home-hero-page-main">
          <ListForImgWithWords  imgWrapper="Home-hero-img-wrapper" items={homeHeroImg} imgItem="Home-hero-pictures" imgDescribe="Home-hero-pictures-describe"/>
        </div>
        <HomeHeroSub />
      </div>
    )
  }
}

export default HomeHeroPage;