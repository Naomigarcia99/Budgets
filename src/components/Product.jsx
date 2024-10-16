import React from "react";
import Checkbox from "./checkbox";
import { useAppContext } from "../context/AppContext";
import Web from "./Web";

const Product = () => {
  const { data, selectedProducts, isWebVisible } = useAppContext();

  return (
    <div className=" flex flex-col items-center">
      {data.map((item) => {
        const isChecked = selectedProducts.some(
          (product) => product.id === item.id
        );

        return (
          <div
            key={item.id}
            className={`card shadow-xl mb-6 space-x-20 ${
              isChecked
                ? "border-2 border-green-500"
                : "border-2 border-slate-50"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between space-x-10">
              <div className="flex flex-col text-left justify-center space-y-3">
                <h2 className=" text-2xl font-bold text-black">{item.title}</h2>
                <p className="font-bold text-black">{item.description}</p>
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-black">{item.price}€</h1>
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
