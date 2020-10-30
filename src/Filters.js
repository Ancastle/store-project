import React from "react";
import { AppContext } from "./contexts/AppContext";

function Filters(props) {
    const {setPriceFilter, setCategoryFilter, categoryList} =  React.useContext(AppContext);

    const handleChangePrice = (e) => {
        setPriceFilter(e.target.value);
        }
    const handleChangeCategory = (e) => {
        setCategoryFilter(e.target.value);
        }

  return (
    <div className="container filter">
        <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            <p className="text-primary my-auto p-custom filterp">Filter by Price: </p>
            <select onChange={handleChangePrice} className="browser-default" name="price">
                <option value="0">All prices</option>
                <option value="1">Prices from 0 to 150</option>
                <option value="2">Prices from 151 to 230</option>
                <option value="3">Prices from 230 to 600</option>
                <option value="4">Prices higher than 600</option>
            </select>
            <p className="text-primary my-auto p-custom filterp">Filter by Category: </p>
            <select onChange={handleChangeCategory} className="browser-default" name="category">
                <option value="0">All categories</option>
                {categoryList.map((each, i) =>
                <option key={i} value={i+1}>{each}</option>
                )}
            </select>

        </div>
    </div>
  );
}
export default Filters;
