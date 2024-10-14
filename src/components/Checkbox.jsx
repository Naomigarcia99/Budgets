import React from "react";
import { useAppContext } from "../context/AppContext";

const Checkbox = ({ item }) => {
  const { toggleProduct } = useAppContext();

  const handleChange = () => {
    toggleProduct(item.id, item.price);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <label className="text-black">Afegueix</label>
    </div>
  );
};

export default Checkbox;
