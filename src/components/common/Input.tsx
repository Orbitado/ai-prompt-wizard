import React from "react";

export default function Input({ inputType }: { inputType: string }) {
  const label = inputType.charAt(0).toUpperCase() + inputType.slice(1);
  return (
    <label htmlFor="name" className="mt-4 w-full text-start">
      <span className="font-medium text-sm">{label}</span>
      <input
        type="text"
        name={inputType}
        id={inputType}
        placeholder={`Enter your ${inputType}`}
        className="p-2 border rounded-[0.25rem] w-full text-sm"
        required
      />
    </label>
  );
}
