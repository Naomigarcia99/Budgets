import React from "react";
import { useAppContext } from "../../context/AppContext";
import AlphabetButton from "../form/AlphabetButton";
import DateButton from "../form/DateButton";
import RestartOrderButton from "../form/RestartOrderButton";

const BudgetInProgress = () => {
  const { budgets } = useAppContext();

  return (
    <div>
      <h2 className="flex justify-start font-bold text-black text-2xl mt-16 mb-5">
        Pressupostos en curs:
      </h2>
      <div className="flex justify-end space-x-2 mb-3">
        <AlphabetButton />
        <DateButton />
        <RestartOrderButton />
      </div>
      <div className="flex flex-col items-center">
        {budgets.length > 0 ? (
          budgets.map((budget, index) => (
            <div
              key={index}
              className="card shadow-xl mb-6 space-x-20 border-2 border-slate-50 sm:w-full w-96"
            >
              <div className="flex flex-col sm:flex-row justify-between space-x-10 space-y-3 items-center">
                <div className="flex flex-col text-left justify-center">
                  <h1 className="text-2xl font-bold text-black">
                    {budget.name}
                  </h1>
                  <p className="text-slate-400 font-bold">{budget.email}</p>
                  <p className="text-slate-400 font-bold">{budget.telefon}</p>
                </div>
                <div className="flex flex-col text-left justify-center">
                  <p className="font-bold text-black">Serveis seleccionats:</p>
                  {budget.services.map((product, idx) => (
                    <li className="font-bold text-black" key={idx}>
                      {product.title}
                      {product.inputs && (
                        <span className="text-sm">
                          (Pàgines: {product.inputs.input1 || 1}, Llenguatges:{" "}
                          {product.inputs.input2 || 1})
                        </span>
                      )}
                    </li>
                  ))}
                </div>
                <div className="flex flex-col text-left justify-center">
                  <p className="text-slate-400 font-bold">Total:</p>
                  <h1 className="font-bold text-black">{budget.total}€</h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hi ha pressupostos</p>
        )}
      </div>
    </div>
  );
};

export default BudgetInProgress;
