import React, { Component } from 'react';
import ListForMenu from '../PublicComponents/ListForMenu';
import '../HeadMenu/HeadMenu.css';
import TopbarCart from '../HeadMenu/TopbarCartt.png';

class HeadMenu extends Component {
  render() {
    const listLeft = ["小米商城", "MIUI", "loT", "云服务", "金融", "有品", "小爱开放平台", "企业团购", "资质证照", "协议规则", "下载app", "智能生活", "Select Location"];
    const listRight = ["登录", "注册", "消息通知"]
    return (
      <div className="nav-header">
        <div className="nav-list-wrapper">
          <ListForMenu btns={listLeft} list="List-left" wrapper="List-left-item" words="List-left-item-btn" spans="List-left-item-span" />
          <div className="List-right">
            <ListForMenu btns={listRight} wrapper="List-right-item" words="List-right-item-btn" spans="List-right-item-span"/>
            <a className="top-cart">
              <img className="imgForCart" src={TopbarCart} />
              <span>购物车</span>
              <span>（0）</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeadMenu;