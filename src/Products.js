import React from "react";
import Product from "./Product"

function Products(props) {
    const {products, userPoints, sortBy} = props;
    let sortedProducts = [...products];
    if (sortBy===1){
      sortedProducts.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
    }
    if (sortBy===2){
      sortedProducts.sort((a, b) => (a.cost < b.cost) ? 1 : -1)
    }
    
  return (
    <div className="container">
        <div className="row">
        {sortedProducts.map((each, i) => {
          return <Product key={i} category={each.category} name={each.name} imgURL={each.img.url} cost={each.cost} userPoints={userPoints} />
        })}
        </div>
    </div>
  );
}
export default Products;
