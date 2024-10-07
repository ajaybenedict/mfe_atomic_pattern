import React from "react";
const InputField = ({ type, value, onChange, placeholder }) => (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
  export default InputField;