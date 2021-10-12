import React from "react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
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
