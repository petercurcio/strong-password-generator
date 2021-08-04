import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      label={label}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
