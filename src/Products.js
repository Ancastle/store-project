import React from "react";
import Product from "./Product"

function Products(props) {
    const {products, userPoints, sortBy, setIsUserUpdated, priceFilter, categoryFilter, categoryList } = props;
    let sortedProducts = [...products];
    
    if (priceFilter !== 0 && priceFilter !== "0"){
      switch (priceFilter){
        case '1':
            sortedProducts = sortedProducts.filter(product => (product.cost > 0 && product.cost <= 150))
            console.log(sortedProducts)
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

    
  return (
    <div className="container">
        <div className="row">
        {sortedProducts.length ? sortedProducts.map((each, i) => {
          return <Product key={i} category={each.category} name={each.name} imgURL={each.img.url} cost={each.cost} userPoints={userPoints} productId={each._id} setIsUserUpdated={setIsUserUpdated} />
        }): <h2>No products matched your filters</h2>}
        </div>
    </div>
  );
}
export default Products;
