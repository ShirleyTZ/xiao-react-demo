import React, { Component } from 'react';


class BannaBoxForHome extends Component {
  render() {
    return(
      <div className={this.props.bannerClass}>
        <a className={this.props.bannerAClass}>
          <img className={this.props.bannerImgClass} src={this.props.imgSrc} />
        </a>
      </div>
    )
  }
}

export default BannaBoxForHome;