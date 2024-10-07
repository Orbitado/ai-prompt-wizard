import React from "react";
import { TextAreaP } from "@/types/customTypes";

export default function TextArea({
  name,
  rows,
  placeholder,
  required = false,
}: TextAreaP) {
  return (
    <label htmlFor={name} className="font-semibold text-sm text-start">
      Message
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 border rounded-[0.25rem] w-full h-32 font-normal text-sm resize-none"
        rows={rows}
        required={required}
      />
    </label>
  );
}
