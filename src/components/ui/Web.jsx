import React from "react";
import { useAppContext } from "../../context/AppContext";
import IncrementButton from "../form/IncrementButton";
import DecrementButton from "../form/DecrementButton";
import Modal1 from "../form/Modal1";
import Modal2 from "../form/Modal2";

const web = () => {
  const { inputValues, updateInputValue } = useAppContext();

  const handleInputChange = (event, inputIndex) => {
    const value = Number(event.target.value);
    updateInputValue(inputIndex, value);
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row justify-end mb-3 space-x-2">
        <Modal1 />
        <span className="font-bold text-black">Nombre de pàgines</span>
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
        <Modal2 />
        <span className="font-bold text-black">Nombre de llenguatges</span>
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
