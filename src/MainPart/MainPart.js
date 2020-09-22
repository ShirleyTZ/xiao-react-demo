import React, { Component } from 'react';
import MainNav from './MainNav/MainNav';
import HomeHeroPage from './HomeHeroPage/HomeHeroPage';

class MainPart extends Component {
  render() {
    return(
      <div id={this.props.id}>
        <MainNav />
        <HomeHeroPage />
      </div>
    )
  }
}

export default MainPart;