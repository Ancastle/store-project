import React from "react";

function Sorters(props) {
    const {sortBy, setSortBy } = props;
  return (
    <div className="container filter">
        <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            <p className="text-secondary my-auto p-custom">Sort by: </p>
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button onClick={() => setSortBy(0)} type="button"  className={sortBy===0 ? "btn btn-primary" : "btn btn-secondary"}>Most Recent</button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button onClick={() => setSortBy(1)} type="button" className={sortBy===1 ? "btn btn-primary" : "btn btn-secondary"}>Lowest Price</button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
                <button onClick={() => setSortBy(2)} type="button" className={sortBy===2 ? "btn btn-primary" : "btn btn-secondary"}>Highest Price</button>
            </div>
        </div>
    </div>
  );
}
export default Sorters;
