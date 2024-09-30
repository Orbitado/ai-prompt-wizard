import Link from "next/link";
export default function CraftPerfectAI() {
  return (
    <article className="space-y-4 mb-16">
      <h2 className="font-bold text-5xl text-gray-800">
        Craft Perfect AI Prompts with Ease
      </h2>
      <p className="mx-auto max-w-2xl text-steel text-xl">
        Enhance your interactions with AI models like ChatGPT, DALL·E, and
        MidJourney. Start creating powerful prompts in minutes!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/prompts"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-full font-bold text-lg text-white"
        >
          Start Generating Prompts
        </Link>
      </div>
    </article>
  );
}
