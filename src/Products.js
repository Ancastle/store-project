import React from "react";
import Product from "./Product"
import { AppContext } from "./contexts/AppContext";

function Products(props) {
    const { productsResponse, sortBy, priceFilter, categoryFilter, categoryList} =  React.useContext(AppContext);
    const {pageNumber} = props;
      let sortedProducts = [...productsResponse];
      if (priceFilter !== "0"){
        switch (priceFilter){
          case '1':
              sortedProducts = sortedProducts.filter(product => (product.cost > 0 && product.cost <= 150))
            break;
            case '2':
              sortedProducts = sortedProducts.filter(product => (product.cost > 150 && product.cost <= 230))
            break;
            case '3':
              sortedProducts = sortedProducts.filter(product => (product.cost > 230 && product.cost <= 600))
            break;
            case '4':
              sortedProducts = sortedProducts.filter(product => (product.cost > 600))
            break;
            default:
        }
      }

      if (categoryFilter !== "0"){
        sortedProducts = sortedProducts.filter(product => (product.category === categoryList[categoryFilter-1]))
      }
      if (sortBy===1){
        sortedProducts.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
      }
      if (sortBy===2){
        sortedProducts.sort((a, b) => (a.cost < b.cost) ? 1 : -1)
      }

      if (sortedProducts.length > 16){
        if (pageNumber==="1"){
          sortedProducts = sortedProducts.slice(0, 16)
        } else {
          sortedProducts = sortedProducts.slice(16, sortedProducts.length)
        }
      }
      return (
        <div className="container">
            <div className="row">
            {sortedProducts.length ? sortedProducts.map((each, i) => {
              return <Product key={i} category={each.category} name={each.name} imgURL={each.img.url} cost={each.cost} productId={each._id}/>
            }): <h2>No products matched your filters</h2>}
            </div>
        </div>
      );
}
export default Products;
