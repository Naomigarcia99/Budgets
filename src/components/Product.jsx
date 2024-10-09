import React from "react";
import Checkbox from "./checkbox";
import { useAppContext } from "../context/AppContext";

const Product = () => {
  const data = useAppContext();

  return (
    <div>
      {data.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h1>{item.price}€</h1>
          <Checkbox></Checkbox>
        </div>
      ))}
    </div>
  );
};

export default Product;
