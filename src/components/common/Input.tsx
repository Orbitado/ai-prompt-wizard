import React from "react";

interface InputP {
  labelTitle: string;
  placeholder: string;
  name: string;
  type: string;
  required?: boolean;
}

export default function Input({
  labelTitle,
  placeholder,
  name,
  type,
  required = false,
}: InputP) {
  return (
    <label htmlFor={name} className="mt-4 w-full text-start">
      <span className="font-semibold text-sm">{labelTitle}</span>
      <input
        required={required}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="border-gray-300 mt-2 p-2 border rounded-[0.25rem] w-full text-sm"
      />
    </label>
  );
}
