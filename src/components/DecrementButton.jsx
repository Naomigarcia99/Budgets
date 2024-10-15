import React from "react";

const DecrementButton = ({ value, onChange }) => {
  const handleDecrement = () => {
    onChange(Math.max(value - 1, 0));
  };

  return (
    <button
      className="hover:bg-green-300 rounded-full btn-xs"
      onClick={handleDecrement}
    >
      -
    </button>
  );
};

export default DecrementButton;
