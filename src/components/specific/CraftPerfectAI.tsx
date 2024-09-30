import Button from "@/components/common/Button";
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
      <Button href="/prompts">Start Generating Prompts</Button>
    </article>
  );
}
