import React, { Component } from 'react';

class InputForSearch extends Component {
  render() {
    return(
      <div className={this.props.inputBox}>
        <label>
          <input type="text" className={this.props.textName} placeholder={this.props.placeHolder}></input>
          <input type="submit" className={this.props.submitName} value="" ></input>
        </label>
      </div>
    )
  }
}

export default InputForSearch;