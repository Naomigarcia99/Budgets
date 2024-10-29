import React from "react";
import { useAppContext } from "../../context/AppContext";

const Checkbox = ({ item }) => {
  const { toggleProduct, selectedProducts } = useAppContext();

  const isChecked = selectedProducts.some((product) => product.id === item.id);

  const handleChange = (event) => {
    toggleProduct(item.id, item.price, item.title);
  };

  return (
    <>
      <input
        id={`checkbox-${item.id}`}
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
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
