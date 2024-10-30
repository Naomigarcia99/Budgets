import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function RestartOrderButton() {
  const { setBudgets, originalBudgets } = useAppContext();

  const handleRestartOrder = () => {
    setBudgets([...originalBudgets]);
  };

  return (
    <button onClick={handleRestartOrder} className="btn-xs bg-green-500 text-white">
      Reinici
    </button>
  );
}
