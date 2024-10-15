import React from "react";

const IncrementButton = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div>
      <button
        className="hover:bg-green-300 rounded-full btn-xs"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default IncrementButton;
