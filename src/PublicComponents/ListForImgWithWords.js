import React, { Component } from 'react';

class ListForImgWithWords extends Component {
  render() {
    const items = this.props.items;
    return(
      <div id={this.props.id}>
        {items.map((item,i) => <div className={this.props.imgWrapper} key={i}>
          <img className={this.props.imgItem} src={item.img}/>
          <div className={this.props.imgDescribe}>{item.describe}</div>
        </div>)}
      </div>
    )
    } 
}

export default ListForImgWithWords;