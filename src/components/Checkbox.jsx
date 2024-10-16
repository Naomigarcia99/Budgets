import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Checkbox = ({ item }) => {
  const { toggleProduct } = useAppContext();

  const handleChange = (event) => {
    toggleProduct(item.id, item.price);
  };

  return (
    <>
      <input
        id={`checkbox-${item.id}`}
        type="checkbox"
        onChange={handleChange}
        className="accent-green-600 cursor-pointer"
      />
      <label
        htmlFor={`checkbox-${item.id}`}
        className="text-black cursor-pointer"
      >
        Afegueix
      </label>
    </>
  );
};

export default Checkbox;
