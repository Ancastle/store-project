import React, { useState, useEffect } from "react";
import Header from "./Header"
import Filters from "./Filters"
import Products from "./Products"
import Footer from "./Footer"
import History from "./History"

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [userResponse, setUserResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(0);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
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
      setIsLoading(true);
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
        setIsUserUpdated(true);
      })
      .catch(error => console.log(error));
    }, [isUserUpdated]);

  return (
    <div className="App">
      <Header name={userResponse.name} points={userResponse.points} setIsUserUpdated={setIsUserUpdated}/>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      {isLoading? <h1>Loading...</h1> : <History history={userResponse.redeemHistory}/>}      
      <Products products={apiResponse} userPoints={userResponse.points} sortBy={sortBy} setIsUserUpdated={setIsUserUpdated}/>
      <Footer/>
    </div>
  );
}

export default App;
