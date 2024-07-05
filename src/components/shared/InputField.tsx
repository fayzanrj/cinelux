"use client";
import React from "react";
import getBgColor from "../../libs/GetBgColor";

// Props
interface InputFieldProps {
  label: string;
  srOnly?: boolean;
  id: "name" | "email" | "code";
  type: "email" | "text" | "number";
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
  required? : boolean
  minLength? : number
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  type,
  required = false,
  minLength = 0,
}) => {
  return (
    <div className="my-3">
      {/* LABEL */}
      <label
        htmlFor={id}
        className={"font-semibold text-white"}
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        type={type}
        className="w-full p-2 mt-1 text-white rounded-lg outline-none"
        style={getBgColor("secondary")}
        onChange={(e) => onChange(e.currentTarget.value)}
        required={required}
        minLength={minLength}
      />
    </div>
  );
};

export default InputField;
