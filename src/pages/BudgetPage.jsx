import React from "react";
import Product from "../components/Product";
import { Header } from "../components/Header";
import Budget from "../components/Budget";
import { Link } from "react-router-dom";
import Home from "../assets/home.png";
import BudgetRequest from "../components/BudgetRequest";
import BudgetInProgress from "../components/BudgetInProgress";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Link to="/">
        <div className="flex justify-start">
          <button className="btn btn-circle mb-2">
            <img src={Home} width={30} />
          </button>
        </div>
      </Link>
      <Product />
      <Budget />
      <BudgetRequest />
      <BudgetInProgress />
    </div>
  );
};

export default MainPage;
