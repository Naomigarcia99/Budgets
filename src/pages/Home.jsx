import React from "react";
import { Link } from "react-router-dom";
import calculate from "../assets/images/calculate.png";

export default function Home() {
  return (
    <div className="flex flex-col space-y-28 mx-64">
      <h1 className="font-bold text-black">WELCOME</h1>
      <p className="">
        On this page you will find a quote calculator for different products
        related to responsive web programming. Various services can be selected
        depending on the needs of the interested person.
      </p>
      <Link to="/app">
        <div className="flex justify-center">
          <button className="btn text-green-700 font-bold">
            <img src={calculate} width={40}></img>
            <p>Budget</p>
          </button>
        </div>
      </Link>
    </div>
  );
}
