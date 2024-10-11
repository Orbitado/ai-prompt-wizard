import React from "react";
import { RadioSelectP } from "@/types/customTypes";

export default function RadioSelect({
  name,
  options,
  onChangeFunction,
}: RadioSelectP) {
  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {options.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            name={name}
            title={option}
            id={option}
            type="radio"
            value={option}
            className="mr-2"
            required
            aria-label={option}
            aria-describedby={option}
            onChange={onChangeFunction}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}
