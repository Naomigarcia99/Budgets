import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data/Data.json";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);

  const toggleProduct = (productId, productPrice) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.find((item) => item.id === productId)) {
        return prevSelected.filter((item) => item.id !== productId);
      } else {
        return [...prevSelected, { id: productId, price: productPrice }];
      }
    });
  };

  useEffect(() => {
    const totalBudget = selectedProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotalBudget(totalBudget);
  }, [selectedProducts]);

  return (
    <AppContext.Provider
      value={{ data, selectedProducts, toggleProduct, totalBudget }}
    >
      {children}
    </AppContext.Provider>
  );
};
