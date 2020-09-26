import React, { Component } from 'react';

class ListForMenu extends Component {
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
    const btns = this.props.btns;
    return (
      <div className={this.props.list} onMouseOver={this.props.handleMouseOver} onMouseLeave={this.props.handleMouseLeave} data-num={this.state.num} >
        {btns.map((btn,i) => (<div className={this.props.wrapper} onMouseOver={this.sendNum.bind(this,i)}  key={i} >   
          <a className={this.props.words}  onMouseLeave={this.props.handleMouseLeave} >{btn}</a>
          <span className={this.props.spans}> | </span>
        </div>)
        )}
      </div>
    )
  }
}

export default ListForMenu;