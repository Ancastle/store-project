import React, { useState, useEffect } from "react";
import Header from "./Header"
import Filters from "./Filters"
import Products from "./Products"
import Footer from "./Footer"

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [userResponse, setUserResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      fetch(
        "https://coding-challenge-api.aerolab.co/products",
        {
          method: "GET",
          headers: new Headers({
            ContentType: 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZDVjYjUyNDk2NzAwMTlhMTBlYjEiLCJpYXQiOjE2MDM2NTUxMTV9.W32_e_L9EGOptAWQ7VCA_PFIz4-z7D52nNipYXQ3-rI'
          })
        }
      )
        .then(res => res.json())
        .then(response => {
          setApiResponse(response);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, []);
    
    useEffect(() => { 
      fetch(
      "https://coding-challenge-api.aerolab.co/user/me",
      {
        method: "GET",
        headers: new Headers({
          ContentType: 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZDVjYjUyNDk2NzAwMTlhMTBlYjEiLCJpYXQiOjE2MDM2NTUxMTV9.W32_e_L9EGOptAWQ7VCA_PFIz4-z7D52nNipYXQ3-rI'
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setUserResponse(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
    });

  return (
    <div className="App">
      <Header name={userResponse.name} points={userResponse.points}/>
      <Filters/>
      <Products products={apiResponse}/>
      <Footer/>
    </div>
  );
}

export default App;
