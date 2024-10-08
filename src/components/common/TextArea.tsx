import React from "react";
import { TextAreaP } from "@/types/customTypes";

export default function TextArea({
  name,
  rows,
  placeholder,
  labelTitle,
  required = false,
  disabled = false,
  noResize = false,
}: TextAreaP) {
  return (
    <div>
      <label htmlFor={name} className="font-semibold text-sm">
        {labelTitle || name}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`${
          noResize && "resize-none"
        } mt-2 p-2 border rounded-[0.25rem] w-full h-32 font-normal text-sm`}
        rows={rows}
        required={required}
      />
    </div>
  );
}
