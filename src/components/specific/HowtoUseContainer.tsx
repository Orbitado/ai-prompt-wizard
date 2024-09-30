import FeatureCard from "@/components/common/Card";
import NumberIcon from "@/components/common/NumberIcon";
export default function HowtoUseContainer() {
  return (
    <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <FeatureCard
        title="Select AI Model"
        description="Choose the AI model you want to generate a prompt for (e.g., ChatGPT, DALL·E, MidJourney)."
        icon={<NumberIcon number={1} />}
      />
      <FeatureCard
        title="Describe Your Goal"
        description="Enter a brief description of what you want to achieve with your prompt."
        icon={<NumberIcon number={2} />}
      />
      <FeatureCard
        title="Customize Options"
        description="Adjust settings like tone, style, and complexity to fine-tune your prompt."
        icon={<NumberIcon number={3} />}
      />
      <FeatureCard
        title="Generate & Refine"
        description="Click 'Generate' to create your prompt, then edit and refine as needed."
        icon={<NumberIcon number={3} />}
      />
    </section>
  );
}
