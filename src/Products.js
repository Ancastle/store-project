import React from "react";
import Product from "./Product"

function Products(props) {
    let news = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div className="container">
        <div class="row">
        {news.map((each) => (
            <Product/>
        ))}
        </div>
    </div>
  );
}
export default Products;
