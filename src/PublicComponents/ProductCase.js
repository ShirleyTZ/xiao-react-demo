import React, { Component } from 'react';

class ProductCase extends Component {
  render() {
    const aboutProducts = this.props.aboutProducts;
    return(
      <div className={this.props.productCaseWrapper}>
        {aboutProducts.map((product,i) => (
          <div className={this.props.content} key={i}>
            <div className={this.props.thumb}>
              <img src={product.img}/>
            </div>
            {this.props.headsize === "h2" ?<h2 className={this.props.title}>{product.name}</h2>:<h3 className={this.props.title}>{product.name}</h3>}
            
            <p className={this.props.desc}>{product.describe}</p>
            <p className={this.props.price}>
              <span>{product.price} </span>
              <del>{product.beforePrice}</del>
            </p>
          </div>
        ))}   
      </div>
    )
  }
}

export default ProductCase;