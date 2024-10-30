import React from "react";
import Checkbox from "../form/Checkbox";
import { useAppContext } from "../../context/AppContext";
import Web from "./Web";

const Product = () => {
  const { data, selectedProducts, isWebVisible, isAnnual } = useAppContext();

  return (
    <div className=" flex flex-col items-center">
      {data.map((item) => {
        const isChecked = selectedProducts.some(
          (product) => product.id === item.id
        );

        const Price = isAnnual ? item.price * 0.8 : item.price;

        return (
          <div
            key={item.id}
            className={`card shadow-xl mb-6 space-x-20 ${
              isChecked
                ? "border-2 border-green-500"
                : "border-2 border-slate-50"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between space-x-10 space-y-3">
              <div className="flex flex-col text-left justify-center space-y-3">
                <h2 className=" text-2xl font-bold text-black">{item.title}</h2>
                <p className="font-bold text-black">{item.description}</p>
              </div>

              <div className="flex flex-col justify-center">
                {isAnnual && (
                  <span className="font-bold text-orange-400 ">
                    Ahorra un 20%
                  </span>
                )}
                <h1 className="font-bold text-black">{Price}€</h1>
              </div>

              <div className="flex flex-col justify-center">
                <Checkbox item={item}></Checkbox>
              </div>
            </div>

            {item.id === "3" && isWebVisible(item.id) && (
              <div className="flex flex-col">
                <Web item={item}></Web>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Product;
