import React, { Component } from 'react';

class ListForMenu extends Component {
  render() {
    const btns = this.props.btns;
    return (
      <div className={this.props.list}>
        {btns.map((btn,i) => (<div className={this.props.wrapper}  key={i} >   
          <a className={this.props.words}>{btn}</a>
          <span className={this.props.spans}> | </span>
        </div>)
        )}
      </div>
    )
  }
}

export default ListForMenu;