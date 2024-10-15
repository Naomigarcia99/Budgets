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
    <div className="flex flex-col mt-16">
      <div className="flex flex-row justify-between mb-3">
        <p className="font-bold text-black">Nombre de pàgines</p>
        <DecrementButton
          onChange={(newValue) => updateInputValue("input1", newValue)}
          value={inputValues.input1 || 0}
        ></DecrementButton>
        <input
          type="number"
          value={inputValues.input1 || ""}
          onChange={(e) => handleInputChange(e, "input1")}
          className="input input-bordered input-xs w-1/4 [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0"
        />
        <IncrementButton
          onChange={(newValue) => updateInputValue("input1", newValue)}
          value={inputValues.input1 || 0}
        ></IncrementButton>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-black">Nombre de llenguatges</p>
        <DecrementButton
          onChange={(newValue) => updateInputValue("input2", newValue)}
          value={inputValues.input2 || 0}
        ></DecrementButton>
        <input
          type="number"
          value={inputValues.input2 || ""}
          onChange={(e) => handleInputChange(e, "input2")}
          className="input input-bordered input-xs w-1/4 [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0"
        />
        <IncrementButton
          onChange={(newValue) => updateInputValue("input2", newValue)}
          value={inputValues.input2 || 0}
        ></IncrementButton>
      </div>
    </div>
  );
};

export default web;
