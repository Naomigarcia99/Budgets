import React from "react";
import Product from "../components/ui/Product";
import { Header } from "../components/ui/Header";
import Budget from "../components/ui/Budget";
import { Link } from "react-router-dom";
import Home from "../assets/images/home.png";
import BudgetRequest from "../components/form/BudgetRequest";
import BudgetInProgress from "../components/ui/BudgetInProgress";
import AnnualBudget from "../components/form/AnnualBudget";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="flex items-start">
        <button className="btn btn-circle mb-2">
          <Link to="/">
            <img src={Home} width={30} />
          </Link>
        </button>
      </div>
      <AnnualBudget />
      <Product />
      <Budget />
      <BudgetRequest />
      <BudgetInProgress />
    </div>
  );
};

export default MainPage;
