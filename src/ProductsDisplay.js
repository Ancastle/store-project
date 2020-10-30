import React from 'react';
import Sorters from "./Sorters"
import Filters from "./Filters"
import Products from "./Products"
import Pagination from "./Pagination"

function ProductsDisplay(props) {
    const {pageNumber} = props;
    return (
        <div>
            <Sorters />
            <Filters />
            <Pagination pageNumber={pageNumber}/>
            <Products pageNumber={pageNumber}/>
        </div>
    );
}

export default ProductsDisplay;