import React from "react";
import { TextAreaP } from "@/types/customTypes";

export default function TextArea({
  name,
  rows,
  placeholder,
  labelTitle,
  required = false,
}: TextAreaP) {
  return (
    <>
      <label htmlFor={name} className="font-semibold text-sm">
        {labelTitle || name}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 border rounded-[0.25rem] w-full h-32 font-normal text-sm resize-none"
        rows={rows}
        required={required}
      />
    </>
  );
}
