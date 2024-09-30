import React from "react";

export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 border rounded-lg w-full">
      <div className="flex justify-center items-center mb-4">{icon}</div>
      <h5 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white tracking-tight">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
