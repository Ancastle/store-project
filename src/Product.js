import React from "react";

function Product(props) {
  const {category, name, imgURL, cost} = props;
  return (
    <div className="col-md-6 col-lg-3 card-container">
        <div className="card">
            <img src={imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{cost} <i className="fas fa-coins"></i></p>
                <p className="card-text"><small className="text-muted">{category}</small></p>
                <a href="/" className="btn btn-primary">Buy</a>
            </div>
        </div>
    </div>
  );
}
export default Product;