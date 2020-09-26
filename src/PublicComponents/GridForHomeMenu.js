import React, { Component } from 'react';

class GridForHomeMenu extends Component {
  render() {
    const items = this.props.items;
    console.log(items);
    
    return(
      <div id={this.props.id}>
        {items.map((item,i) => <div className={this.props.imgWrapper} key={i}>
          {item.map((lump,j) =><div className={this.props.lumps} key={j}>
            <img className={this.props.imgItem} src={lump.img}/>
          <div className={this.props.imgDescribe}>{lump.describe}</div>
          </div> )}    
        </div>)}
      </div>
    )
    } 
}

export default GridForHomeMenu;