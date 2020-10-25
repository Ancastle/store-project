import React from "react";

function Header(props) {
  const {name, points} = props;

  const addPoints =  (desiredAmount) => {
    var request = require('request');
    request({
      method: 'POST',
      url: 'https://coding-challenge-api.aerolab.co/user/points',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZDVjYjUyNDk2NzAwMTlhMTBlYjEiLCJpYXQiOjE2MDM2NTUxMTV9.W32_e_L9EGOptAWQ7VCA_PFIz4-z7D52nNipYXQ3-rI'
      },
      body: `{"amount": ${desiredAmount}}`
    }, function (error, response, body) {
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
    });
  }

  return (
    <header>
        <div className="navbar navbar-light bg-light box-shadow">
            <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
            <i className="fas fa-shopping-cart"></i>
                <strong></strong>
            </a>
            <div className="dropdown d-flex">
              <h3 className="nav-item my-auto user-info">{name} <i className="fas fa-coins"></i> {points} </h3>
              <button className="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-plus-circle" onClick={addPoints}></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" onClick={() => addPoints(1000)}>Add <i className="fas fa-coins"></i> 1000 points</button>
                <button className="dropdown-item" onClick={() => addPoints(5000)}>Add <i className="fas fa-coins"></i> 5000 points</button>
                <button className="dropdown-item" onClick={() => addPoints(7500)}>Add <i className="fas fa-coins"></i> 7500 points</button>
              </div>
            </div>
            </div>
        </div>
    </header>
  );
}
export default Header;
