import React, { Component } from 'react';

class MenuForHomeHero extends Component {
  constructor() {
    super()
    this.state = {
      num: -1
    }
  }
  sendNum(i) {
    this.setState({
      num:i
    })
  }
  render() {
    const items = this.props.items;
    return(
      <div id={this.props.id} onMouseOver={this.props.handleMouseOver} onMouseLeave={this.props.handleMouseLeave} data-num={this.state.num} >
        {items.map((item,i) => <div className={this.props.menuWrapper} onMouseOver={this.sendNum.bind(this,i)} onMouseLeave={this.props.handleMouseLeave} key={i}>
          <div className={this.props.btn}>{item}</div>
          <span>{">"}</span>
        </div>)}
      </div>)
      } 
}

export default MenuForHomeHero;