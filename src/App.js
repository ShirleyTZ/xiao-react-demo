import React from 'react';
import './App.css';
import HeadMenu from './HeadMenu/HeadMenu';
import MainPart from './MainPart/MainPart';
import ProductPagePart  from "./ProductPagePart/ProductPagePart";
import AboutXiaoMi from './AboutXiaoMi/AboutXiaoMi';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="Fullfill-Header"></div>
      <HeadMenu id="Head-menu" />
      <MainPart id="Main-part" />
      <ProductPagePart />
      <AboutXiaoMi />
      <Footer id="footer"/>
    </div>
  );
}

export default App;
