import React from "react";

export default function NumberIcon({ number }: { number: number }) {
  return (
    <div className="bg-blue-600 px-4 py-2 rounded-full text-white">
      <div className="font-bold text-3xl">{number}</div>
    </div>
  );
}
