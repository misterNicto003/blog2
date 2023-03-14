import React from "react";

import "./input.scss";

const Input = ({
  name,
  type = "text",
  value,
  textarea,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field_label fs_14">
        {placeholder} {required && <span>*</span>}
      </div>

      <div className="field_input">
        {textarea ? (
          <textarea
            type={type}
            name={name}
            value={value || ""}
            placeholder
            required
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value || ""}
            placeholder
            required
          />
        )}
      </div>
    </div>
  );
};

export default Input;
