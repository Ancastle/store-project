import React from "react";

function Product(props) {
  const {category, name, imgURL, cost, userPoints, productId, setIsUserUpdated} = props;
  
  const attemptToBuy = (x, productId) => {
    if (x===true) {
      var request = require('request');
      request({
        method: 'POST',
        url: 'https://coding-challenge-api.aerolab.co/redeem',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZDVjYjUyNDk2NzAwMTlhMTBlYjEiLCJpYXQiOjE2MDM2NTUxMTV9.W32_e_L9EGOptAWQ7VCA_PFIz4-z7D52nNipYXQ3-rI'
        },
        body: `{  "productId": "${productId}"}`
      }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
      });
      alert('Compra realizada satisfactoriamente')
      setIsUserUpdated(false);
      
    } else {
      alert("No tienes suficientes puntos")
    }
  } 
  return (
    <div className="col-md-6 col-lg-3 card-container">
        <div className="card">
            <img src={imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{cost} <i className="fas fa-coins"></i></p>
                <p className="card-text"><small className="text-muted">{category}</small></p>
                {userPoints > cost ? <button onClick={() => attemptToBuy(true, productId)}className="btn btn-primary">Buy</button> : <button onClick={() => attemptToBuy(false)} className="btn btn-danger">You lack {cost-userPoints} points</button>}
                
            </div>
        </div>
    </div>
  );
}
export default Product;