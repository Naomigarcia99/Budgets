import React from "react";

const IncrementButton = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
      <button
        className="active:bg-green-400 btn-xs btn-circle"
        onClick={handleIncrement}
      >
        +
      </button>
  );
};

export default IncrementButton;
  