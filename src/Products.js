import React from "react";
import Product from "./Product"

function Products(props) {
    let products = props.products;
  return (
    <div className="container">
        <div className="row">
        {products.map((each, i) => {
          return <Product key={i} category={each.category} name={each.name} imgURL={each.img.url} cost={each.cost} />
        })}
        </div>
    </div>
  );
}
export default Products;
