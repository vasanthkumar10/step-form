import React from "react";
import { Input } from "antd";
import "../css/inputField.css";

function InputField({
  value,
  action,
  addonBefore,
  label,
  placeholder,
  labelOption,
}) {
  return (
    <div className="input-wrapper">
      <label className="label" for={`input-${label}`}>
        {label} <span className="label-option">{labelOption}</span>
      </label>
      <Input
        addonBefore={addonBefore}
        className="input"
        size="large"
        id={`input-${label}`}
        name={`input-${label}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => action(e.target.value)}
      />
    </div>
  );
}

export default InputField;
