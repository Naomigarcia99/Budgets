import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Web from "./Web";

const Checkbox = ({ item }) => {
  const { toggleProduct } = useAppContext();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const checked = event.target.checked;
    if (item.id === "3") {
      setIsChecked(checked);
    }

    toggleProduct(item.id, item.price);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleChange}/>
      <label className="text-black">Afegueix</label>
      {isChecked && <Web item={item}></Web>}
    </div>
  );
};

export default Checkbox;
