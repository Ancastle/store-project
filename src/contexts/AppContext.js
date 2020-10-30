import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [productsResponse, setProductsResponse] = useState([]);
  const [userResponse, setUserResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [sortBy, setSortBy] = useState(0);
  const [priceFilter, setPriceFilter] = useState('0');
  const [categoryFilter, setCategoryFilter] = useState('0');
  const [categoryList, setCategoryList] = useState([]);


  return (
    <AppContext.Provider value={{ productsResponse, setProductsResponse, userResponse, setUserResponse, isLoading, setIsLoading, isUserUpdated, setIsUserUpdated, sortBy, setSortBy, priceFilter, setPriceFilter, categoryFilter, setCategoryFilter, categoryList, setCategoryList}}>
      {children}
    </AppContext.Provider>
  );
}
