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

  const updateInputValue = (inputIndex, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputIndex]: value,
    }));
  };

  useEffect(() => {
    const totalBudget = selectedProducts.reduce((total, product) => {
      let updatedTotal = total + product.price;

      if (product.id === "3") {
        const inputs = inputValues || { input1: 1, input2: 1 };
        const inputSum =
          (parseInt(inputs.input1) || 1) + (parseInt(inputs.input2) || 1);

        updatedTotal += inputSum * 30;
      }

      return updatedTotal;
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
