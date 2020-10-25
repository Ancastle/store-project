import React from "react";

function Filters(props) {

  return (
    <div className="container filter">

        <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            <p className="text-primary my-auto p-custom">X of X products </p>
            <p className="text-secondary my-auto p-custom"> | Sort by: </p>
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">Most Recent</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">Lowest Price</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-secondary">Highest Price</button>
            </div>
        </div>

    </div>
  );
}
export default Filters;
