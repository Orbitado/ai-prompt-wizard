import React from "react";

export default function Input({
  inputType,
  type,
}: {
  inputType: string;
  type: string;
}) {
  const label = inputType.charAt(0).toUpperCase() + inputType.slice(1);
  return (
    <label htmlFor={inputType} className="mt-4 w-full text-start">
      <span className="font-medium text-sm">{label}</span>
      <input
        type={type}
        name={inputType}
        id={inputType}
        placeholder={`Enter your ${inputType}`}
        className="border-gray-300 p-2 border rounded-[0.25rem] w-full text-sm"
        required
      />
    </label>
  );
}
