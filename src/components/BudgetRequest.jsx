import React from "react";
import { useAppContext } from "../context/AppContext";

const BudgetRequest = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    telefon,
    setTelefon,
    handleSaveBudget,
  } = useAppContext();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col card shadow-xl border-2 border-slate-50 mt-12 items-center sm:w-auto w-96">
        <div className="flex flex-col text-start mb-4">
          <h1 className="text-2xl font-bold text-black">Demanar pressupost:</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col mr-2">
            <input
              type="text"
              placeholder="Nom"
              className="input input-bordered input-xs w-40 text-start font-bold"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mr-2 my-2">
            <input
              type="number"
              placeholder="Telèfon"
              className="input input-bordered input-xs w-40 text-start font-bold [&::-webkit-inner-spin-button]:appearance-none"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />
          </div>
          <div className="flex flex-col mr-2">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-xs w-40 text-start font-bold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2">
            <button
              type="button"
              className="bg-green-500 w-24 text-white"
              onClick={handleSaveBudget}
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetRequest;
