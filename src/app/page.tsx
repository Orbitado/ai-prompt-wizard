import Link from "next/link";
export default function page() {
  return (
    <section
      id="#main-content"
      className="flex flex-col justify-center items-center my-16 text-center"
    >
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
      <article>
        <h3 className="font-bold text-4xl text-gray-800">Key Features</h3>
      </article>
    </section>
  );
}
