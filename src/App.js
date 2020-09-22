import React from 'react';
import './App.css';
import HeadMenu from './HeadMenu/HeadMenu';
import MainPart from './MainPart/MainPart';
import ProductPagePart  from "./ProductPagePart/ProductPagePart";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="Fullfill-Header"></div>
      <HeadMenu id="Head-menu" />
      <MainPart id="Main-part" />
      <ProductPagePart />
      <div id="kan"></div>
    </div>
  );
}

export default App;
