import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function DateButton() {
  const { budgets, setBudgets } = useAppContext();

  const handleDateSort = () => {
    const sortedBudgets = [...budgets].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setBudgets(sortedBudgets);
  };

  return (
    <button onClick={handleDateSort} className="btn-xs bg-green-500 text-white">
      Date
    </button>
  );
}
