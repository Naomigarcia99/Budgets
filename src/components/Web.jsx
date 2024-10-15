import React from "react";
import { useAppContext } from "../context/AppContext";

const web = ({ item }) => {
  const { inputValues, updateInputValue } = useAppContext();

  const handleInputChange = (event, inputIndex) => {
    const value = event.target.value;
    updateInputValue(item.id, inputIndex, value);
  };

  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-row justify-between mb-3">
        <p className="font-bold text-black">Nombre de pàgines</p>
        <input
          type="number"
          value={inputValues[item.id]?.input1 || 0}
          onChange={(e) => handleInputChange(e, "input1")}
          className="input input-bordered input-xs w-1/4"
          placeholder="1"
        />
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-black">Nombre de llenguatges</p>
        <input
          type="number"
          value={inputValues[item.id]?.input2 || 0}
          onChange={(e) => handleInputChange(e, "input2")}
          className="input input-bordered input-xs w-1/4"
          placeholder="1"
        />
      </div>
    </div>
  );
};

export default web;
