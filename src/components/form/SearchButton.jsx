import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function SearchButton() {
  const { setBudgets, originalBudgets } = useAppContext();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    const searchNames = originalBudgets.filter((e) =>
      e.name.toUpperCase().includes(value.toUpperCase())
    );
    setBudgets(searchNames);
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="Busca per nom"
      className="input input-bordered input-xs w-28 text-start"
    ></input>
  );
}
