import React from "react";

const BudgetRequest = () => {
  return (
    <div className=" flex flex-col card shadow-xl border-2 border-slate-50 mt-12">
      <div className="flex flex-row mb-4">
        <h1 className="text-2xl font-bold text-black">Demanar pressupost:</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-100">
          <div className="flex flex-row">
            <div className="flex flex-col mr-2">
              <input
                type="text"
                placeholder="Nom"
                className="input input-bordered input-xs w-40 text-start font-bold"
              />
            </div>
            <div className="flex flex-col mr-2">
              <input
                type="number"
                placeholder="Telèfon"
                className="input input-bordered input-xs w-40 text-start font-bold [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex flex-col mr-2">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-xs w-40 text-start font-bold"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <button type="button" className="bg-green-500 w-24 text-white">Solicitar</button>
        </div>
      </div>
    </div>
  );
};

export default BudgetRequest;
