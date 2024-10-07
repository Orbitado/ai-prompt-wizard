import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import Dropdown from "@/components/specific/Dropdown";
import TextArea from "@/components/common/TextArea";
import Input from "@/components/common/Input";

export default function PromptGeneratorPage() {
  return (
    <section className="my-16">
      <h1 className="mb-8 font-bold text-4xl text-center text-gray-800">
        Start Generating Prompts
      </h1>
      <article className="gap-4 grid lg:grid-cols-4">
        <Card className="lg:col-span-3 bg-card bg-white shadow-sm border">
          <CardContent className="flex flex-col space-y-1.5 p-6">
            <CardTitle className="font-semibold text-2xl tracking-tight">
              Prompt Generator
            </CardTitle>
            <CardDescription className="text-gray-600">
              Fill in the details below to generate your AI prompt
            </CardDescription>
            <Dropdown />
            <TextArea
              name="What's your goal?"
              placeholder="Describe what you want to achieve with this prompt"
            />
            <Input
              labelTitle="Topic or Subject Matter"
              type="text"
              placeholder="Enter the main topic or subject"
              name="topic"
            />
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
