import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import Dropdown from "@/components/common/Dropdown";

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
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
