import FeatureCard from "../../common/Card";
import { LuBrainCircuit } from "react-icons/lu";
import { PiBookOpenBold } from "react-icons/pi";
import { BsStars } from "react-icons/bs";

export default function FeatureContainer() {
  return (
    <section className="gap-4 grid grid-cols-1 md:grid-cols-3">
      <FeatureCard
        title="AI-Powered Suggestions"
        description="Get intelligent prompt suggestions based on your input and goals."
        icon={<LuBrainCircuit className="text-5xl text-azure" />}
      />
      <FeatureCard
        title="Multi-Model Support"
        description="Tailor prompts for various AI models, including ChatGPT, DALL·E, and MidJourney."
        icon={<BsStars className="text-5xl text-azure" />}
      />
      <FeatureCard
        title="Prompt Library"
        description="Access a vast library of pre-written prompts for various use cases."
        icon={<PiBookOpenBold className="text-5xl text-azure" />}
      />
    </section>
  );
}
