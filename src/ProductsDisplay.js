import React from 'react';
import Sorters from "./Sorters"
import Filters from "./Filters"
import Products from "./Products"
import Pagination from "./Pagination"

function ProductsDisplay(props) {
    const {sortBy, setSortBy, setPriceFilter, setCategoryFilter, categoryList, products, userPoints, setIsUserUpdated, priceFilter, categoryFilter, pageNumber} = props;
    return (
        <div>
            {console.log(pageNumber)}
            <Sorters sortBy={sortBy} setSortBy={setSortBy} />
            <Filters products={products} setPriceFilter={setPriceFilter} setCategoryFilter={setCategoryFilter} categoryList={categoryList}/>
            <Pagination pageNumber={pageNumber} priceFilter={priceFilter} categoryFilter={categoryFilter}/>
            <Products pageNumber={pageNumber} products={products} userPoints={userPoints} sortBy={sortBy} setIsUserUpdated={setIsUserUpdated} priceFilter={priceFilter} categoryFilter={categoryFilter} categoryList={categoryList}/>
            
        </div>
    );
}

export default ProductsDisplay;