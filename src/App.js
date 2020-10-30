import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import History from "./History"
import ProductsDisplay from "./ProductsDisplay"
import { AppContext } from "./contexts/AppContext";



function App() {
  const {productsResponse, setProductsResponse, setUserResponse, setIsLoading, isUserUpdated, setIsUserUpdated, setCategoryList} = React.useContext(AppContext);

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
          setProductsResponse(response);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, []);
    
    useEffect(()=> {
      var categories = [];
      productsResponse.forEach(element => {
          if (!categories.includes(element.category)) {
              categories.push(element.category);
          }
      });
      setCategoryList(categories);
    }, [productsResponse])

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
      <Header/>
        <Switch>
        <Route exact path="/" render={() => 
          (
            <ProductsDisplay pageNumber={'1'}/>
          )}
        />
        <Route path="/page/:pageNumber" render={({match}) => 
          (
            <ProductsDisplay pageNumber={match.params.pageNumber}/>
  )}
        />
        <Route exact path="/history" render={() =>
        (
        <History />
        )}
        />
      </Switch>   
      <Footer/>   
    </div>
  );
  }

export default App;
