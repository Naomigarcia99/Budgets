import React from "react";
import { useAppContext } from "../context/AppContext";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const web = () => {
  const { inputValues, updateInputValue } = useAppContext();

  const handleInputChange = (event, inputIndex) => {
    const value = Number(event.target.value);
    updateInputValue(inputIndex, value);
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row justify-end mb-3 space-x-2">
        <p className="font-bold text-black">Nombre de pàgines</p>
        <DecrementButton
          onChange={(newValue) => updateInputValue("input1", newValue)}
          value={inputValues.input1 || 0}
        ></DecrementButton>
        <input
          type="number"
          value={inputValues.input1 || 1}
          onChange={(e) => handleInputChange(e, "input1")}
          className="input input-bordered input-xs w-12 text-center font-bold [&::-webkit-inner-spin-button]:appearance-none"
        />
        <IncrementButton
          onChange={(newValue) => updateInputValue("input1", newValue)}
          value={inputValues.input1 || 1}
        ></IncrementButton>
      </div>
      <div className="flex flex-row justify-end space-x-2">
        <p className="font-bold text-black">Nombre de llenguatges</p>
        <DecrementButton
          onChange={(newValue) => updateInputValue("input2", newValue)}
          value={inputValues.input2 || 0}
        ></DecrementButton>
        <input
          type="number"
          value={inputValues.input2 || 1}
          onChange={(e) => handleInputChange(e, "input2")}
          className="input input-bordered input-xs w-12 text-center font-bold [&::-webkit-inner-spin-button]:appearance-none"
        />
        <IncrementButton
          onChange={(newValue) => updateInputValue("input2", newValue)}
          value={inputValues.input2 || 1}
        ></IncrementButton>
      </div>
    </div>
  );
};

export default web;
