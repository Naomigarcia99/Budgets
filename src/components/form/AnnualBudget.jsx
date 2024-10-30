import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function AnnualBudget() {
  const { isAnnual, AnnualDiscount } = useAppContext();

  return (
    <div className="flex justify-center space-x-2">
      <p className="font-semibold text-green-500">Pagament mensual</p>
      <div className="relative inline-block mb-5">
        <input
          type="checkbox"
          className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border-2 border-grey-400 bg-white checked:bg-green-400"
          onChange={AnnualDiscount}
          checked={isAnnual}
        />
        <span className="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-green-400 transition-all duration-200 peer-checked:bg-white peer-checked:start-7 peer-checked:bg-green-400"></span>
      </div>
      <p className="font-semibold text-green-500">Pagament anual</p>
    </div>
  );
}
