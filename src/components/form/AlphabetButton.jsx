import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function AlphabetSort() {
  const { budgets, setBudgets } = useAppContext();

  const handleSort = () => {
    const sortedBudgets = [...budgets].sort((a, b) =>
      a.name
        .toString()
        .toLowerCase()
        .localeCompare(b.name.toString().toLowerCase())
    );
    setBudgets(sortedBudgets);
  };

  return (
    <button onClick={handleSort} className="btn-xs bg-green-500 text-white">
      Nom
    </button>
  );
}
