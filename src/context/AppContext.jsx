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
  const [budgets, setBudgets] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const toggleProduct = (productId, productPrice, productTitle) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.find((item) => item.id === productId)) {
        return prevSelected.filter((item) => item.id !== productId);
      } else {
        return [
          ...prevSelected,
          {
            id: productId,
            title: productTitle,
            price: productPrice,
            isCheked: true,
          },
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

  const isWebVisible = (productId) =>
    selectedProducts.find((item) => item.id === productId);

  const handleSaveBudget = () => {
    const newBudget = {
      name,
      email,
      telefon,
      services: selectedProducts.map((product) => ({
        title: product.title,
        inputs: product.id === "3" ? inputValues : null,
      })),
      date: new Date().toISOString(),
      total: totalBudget,
    };

    setBudgets([...budgets, newBudget]);

    setName("");
    setEmail("");
    setTelefon("");
    setSelectedProducts([]);
    setInputValues({});
    setTotalBudget(0);
  };

  const ShowModal1 = () => {
    setOpenModal1(true);
  };

  const CloseModal1 = () => {
    setOpenModal1(false);
  };

  const ShowModal2 = () => {
    setOpenModal2(true);
  };

  const CloseModal2 = () => {
    setOpenModal2(false);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        selectedProducts,
        setSelectedProducts,
        toggleProduct,
        totalBudget,
        setTotalBudget,
        inputValues,
        updateInputValue,
        isWebVisible,
        budgets,
        setBudgets,
        handleSaveBudget,
        name,
        setName,
        email,
        setEmail,
        telefon,
        setTelefon,
        ShowModal1,
        ShowModal2,
        CloseModal1,
        CloseModal2,
        openModal1,
        openModal2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
