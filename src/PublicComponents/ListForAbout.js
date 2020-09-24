import React, { Component } from 'react';

class ListForAbout extends Component {
  render() {
    const items = this.props.items;
    return(
      <dl className={this.props.dlClass}>
        <dt className={this.props.dtClass}>{this.props.dtName}</dt>
        {items.map((item,i) => <dd className={this.props.ddClass} key={i}>{item}</dd>)}
      </dl>
    )
  }
}

export default ListForAbout;