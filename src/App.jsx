import React from "react";
import "./assets/App.css";
import Product from "./components/Product";
import { Header } from "./components/Header";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Header></Header>
        <Product></Product>
      </AppProvider>
    </>
  );
}

export default App;
