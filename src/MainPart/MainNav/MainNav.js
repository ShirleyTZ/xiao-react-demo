import React, { Component } from 'react';
import './MainNav.css';
import ListForMenu from '../../PublicComponents/ListForMenu';
import InputForSearch from '../../PublicComponents/InputForSearch';
import SearchImg from '../../MainPart/MainNav/MainNavImg/searchImg.png'

class MainNav extends Component {
  render() {
    const mainMenu =["小米手机","Redmi 红米","电视","笔记本","家电","路由器","智能硬件","服务","社区"];
    return(
      <div id="Main-nav">
        <div className="logon"></div>
        <div className="Main-menu-wrapper">
          <div className="Main-menu-category"></div>
          <ListForMenu btns={mainMenu} list="Main-menu" wrapper="Main-menu-items" words="Main-btns" spans="None-span"/>
        </div>
        <InputForSearch inputBox="Main-input-box" textName="Main-input-text" submitName="Main-input-submit"  placeHolder="耳机" />
      </div>
    )
  }
}

export default  MainNav;