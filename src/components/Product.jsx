import React from "react";
import Checkbox from "./checkbox";
import { useAppContext } from "../context/AppContext";

const Product = () => {
  const { data, selectedProducts } = useAppContext();

  return (
    <div className=" flex flex-col items-center">
      {data.map((item) => {
        const isChecked = selectedProducts.some(
          (product) => product.id === item.id
        );

        return (
          <div
            key={item.id}
            className={`card shadow-xl w-11/12 mb-6 flex flex-row space-x-20 ${
              isChecked
                ? "border-2 border-green-500"
                : "border-2 border-slate-50"
            }`}
          >
            <div className="flex flex-col text-left">
              <h2 className=" text-2xl font-bold text-black">{item.title}</h2>
              <p className="font-bold text-black">{item.description}</p>
            </div>
            <div className="flex flex-row">
              <h1 className="font-bold text-black">{item.price}€</h1>
            </div>

            <Checkbox item={item}></Checkbox>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
