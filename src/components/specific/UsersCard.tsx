import { FiMessageSquare } from "react-icons/fi";

export default function UsersCard({
  text,
  author,
}: {
  text: string;
  author: string;
}) {
  return (
    <article className="flex flex-col justify-center space-y-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 border rounded-lg w-full min-h-fit duration-300 ease-in-out">
      <FiMessageSquare className="text-4xl text-azure" />
      <p className="mb-3 font-normal text-gray-700 text-start dark:text-gray-400 italic">
        &quot;{text}&quot;
      </p>
      <p className="mb-3 font-bold text-gray-700 text-start dark:text-gray-400">
        {author}
      </p>
    </article>
  );
}
