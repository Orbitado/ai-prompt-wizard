"use client";

import { useState } from "react";

export default function CopyToClipboard(props: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-full w-full font-bold text-center text-md text-white text-wrap xs:text-lg"
      onClick={handleCopy}
    >
      {`${copied ? "Copied!" : "Copy to Clipboard"}`}
    </button>
  );
}
