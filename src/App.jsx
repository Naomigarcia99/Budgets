import React from "react";
import "./assets/App.css";
import { AppProvider } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/BudgetPage";

function App() {

  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<MainPage />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
