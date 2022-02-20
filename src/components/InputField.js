import React from "react";
import { Input } from "antd";
import "../css/inputField.css";

function InputField({ addonBefore, label, placeholder, labelOption }) {
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
      />
    </div>
  );
}

export default InputField;
