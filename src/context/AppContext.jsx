import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data/Data.json";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [inputValues, setInputValues] = useState({});

  const toggleProduct = (productId, productPrice) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.find((item) => item.id === productId)) {
        return prevSelected.filter((item) => item.id !== productId);
      } else {
        return [
          ...prevSelected,
          { id: productId, price: productPrice, isCheked: true },
        ];
      }
    });
  };

  const updateInputValue = (productId, inputIndex, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [productId]: {
        ...prevValues[productId],
        [inputIndex]: value,
      },
    }));
  };

  useEffect(() => {
    const totalBudget = selectedProducts.reduce((total, product) => {
      const inputs = inputValues[product.id] || { input1: 0, input2: 0 };
      const inputSum =
        (parseInt(inputs.input1) || 0) + (parseInt(inputs.input2) || 0);
      return total + product.price + inputSum * 30;
    }, 0);

    setTotalBudget(totalBudget);
  }, [selectedProducts, inputValues]);

  return (
    <AppContext.Provider
      value={{
        data,
        selectedProducts,
        toggleProduct,
        totalBudget,
        inputValues,
        updateInputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
