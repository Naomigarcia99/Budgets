import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Budget() {
  const { totalBudget } = useAppContext();

  return (
    <div>
      <h2 className="text-3xl font-bold text-black text-right">
        Preu presupostat: {totalBudget}€
      </h2>
    </div>
  );
}
