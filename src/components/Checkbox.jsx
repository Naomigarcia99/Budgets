import React from "react";

const Checkbox = ({ id }) => {
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>Afegueix</label>
    </div>
  );
};

export default Checkbox;
