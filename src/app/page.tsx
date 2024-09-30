import FeatureContainer from "@/components/specific/KeyFeatures/FeatureContainer";

import CraftPerfectAI from "@/components/specific/CraftPerfectAI";
import PromptExamples from "@/components/specific/PromptExamples";
import HowToUseAI from "@/components/specific/HowtoUseAI";

export default function page() {
  return (
    <section
      id="#main-content"
      className="flex flex-col justify-center items-center my-16 text-center"
    >
      <CraftPerfectAI />
      <article className="space-y-8 mb-8">
        <h3 className="font-bold text-4xl text-gray-800">Key Features</h3>
        <FeatureContainer />
      </article>
      <PromptExamples />
      <HowToUseAI />
    </section>
  );
}
