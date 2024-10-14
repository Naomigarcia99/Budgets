import React from "react";
import "./assets/App.css";
import Product from "./components/Product";
import { Header } from "./components/Header";
import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";

function App() {
  return (
    <>
      <AppProvider>
        <Header></Header>
        <Product></Product>
        <Budget></Budget>
      </AppProvider>
    </>
  );
}

export default App;
