import React from "react";
import Product from "../components/ui/Product";
import { Header } from "../components/ui/Header";
import Budget from "../components/ui/Budget";
import { Link } from "react-router-dom";
import Home from "../assets/images/home.png";
import BudgetRequest from "../components/form/BudgetRequest";
import BudgetInProgress from "../components/ui/BudgetInProgress";

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
