import Card from "@/components/common/Card";
import NumberIcon from "@/components/common/NumberIcon";
import { howtoUseAI } from "@/data/howtoUseAI";
export default function HowtoUseAI() {
  const howtoUseAIArray = Object.entries(howtoUseAI);
  return (
    <article className="space-y-8 mb-12" id="how-to-use">
      <h3 className="font-bold text-4xl text-gray-800">
        How to Use AI Prompt Wizard
      </h3>
      <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {howtoUseAIArray.map(([key, value], index) => (
          <Card
            key={key}
            title={key}
            description={value}
            icon={<NumberIcon number={index + 1} />}
          />
        ))}
      </section>
    </article>
  );
}
