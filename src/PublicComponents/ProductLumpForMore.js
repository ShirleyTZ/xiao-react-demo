import React, { Component } from 'react';

class ProductLumpForMore extends Component {
  render() {
    const btn = this.props.btn;
    return (
      <div className={this.props.number8}>
        <div className={this.props.visiable}>
          <div className={this.props.contentDesc}>
            <h3>{btn.name}</h3>
            <p>{btn.price}</p>
          </div>
          <div className={this.props.thumb}>
            <img src={btn.img}></img>
          </div>
        </div>

       <div className={this.props.content}>
         <div className={this.props.forMoreDesc}>
           <p>浏览更多</p>
           <small>热门</small>
         </div>
         <img className={this.props.forMoreImg} src={this.props.imgForMoreSrc}/>
       </div>
      </div>
    )
  }
}

export default ProductLumpForMore;