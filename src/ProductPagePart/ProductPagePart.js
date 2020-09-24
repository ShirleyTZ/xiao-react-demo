import React, { Component } from 'react';
import '../ProductPagePart/ProductPagePart.css'
import HomeFlashsale from './HomeFlashsale/HomeFlashsale';
import BannaBoxForHome from '../PublicComponents/BannaBoxForHome';
import HomeForPhone from './HomeForPhone/HomeForPhone';
import HomeAppliances from './HomeAppliances//HomeAppliances';
import Smart from './Smart/Smart';
import Match from './Match/Match';
import Accessories from './Accessories/Accessories';
import PeripheralProducts from './PeripheralProducts/PeripheralProducts';

class ProductPagePart extends Component {
  render() {
    const maths = {
      bannerImg1:"",
      bannerImg2:"",
      bannerImg3:"",
      bannerImg4:"",
      bannerImg5:"",
      bannerImg6:"",
      bannerImg7:"",
    }
    const ticks = Object.keys(maths).map(item => require("./ProductPagePartImgs/" + item + ".webp"));
    return(
      <div id="Product-page-part">
        <HomeFlashsale />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[0]}/>
        <HomeForPhone />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[1]}/>
        <HomeAppliances />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[2]}/>
        <Smart />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[3]}/>
        <Match />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[4]}/>
        <Accessories />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[5]}/>
        <PeripheralProducts />
        <BannaBoxForHome bannerClass="Home-banner-box" bannerAClass="Home-banner-a" bannerImgClass="Home-banner-img" imgSrc={ticks[6]}/>
      </div>
    )
  }
}

export default ProductPagePart;