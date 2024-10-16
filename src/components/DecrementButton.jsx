import React from "react";

const DecrementButton = ({ value, onChange }) => {
  const handleDecrement = () => {
    onChange(Math.max(value - 1, 1));
  };

  return (
    <button
      className="active:bg-green-400 btn-circle btn-xs"
      onClick={handleDecrement}
    >
      -
    </button>
  );
};

export default DecrementButton;
