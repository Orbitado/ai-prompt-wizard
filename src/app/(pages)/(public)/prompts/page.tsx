import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import Dropdown from "@/components/specific/Dropdown";
import TextArea from "@/components/common/TextArea";
import Input from "@/components/common/Input";
import RadioSelect from "@/components/common/RadioSelect";
import Button from "@/components/common/Button";

import { FaCopy, FaWandMagicSparkles } from "react-icons/fa6";

export default function PromptGeneratorPage() {
  return (
    <section className="my-16">
      <h1 className="mb-8 font-bold text-4xl text-center text-gray-800">
        Start Generating Prompts
      </h1>
      <article className="gap-4 grid grid-cols-1 lg:grid-cols-4">
        <Card className="lg:col-span-3 bg-card bg-white shadow-sm border">
          <CardContent className="flex flex-col space-y-6 p-6">
            <div>
              <CardTitle className="font-semibold text-2xl tracking-tight">
                Prompt Generator
              </CardTitle>
              <CardDescription className="text-gray-600">
                Fill in the details below to generate your AI prompt
              </CardDescription>
            </div>
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
            <div>
              <label htmlFor="ai-tone-models">
                <span className="font-semibold text-sm">Tone</span>
              </label>
              <RadioSelect
                name="ai-tone-models"
                options={["Professional", "Casual", "Humorous", "Serious"]}
              />
            </div>
            <Button
              href="/prompts"
              addClass="w-full rounded-[0.26rem] flex justify-center items-center"
            >
              <span>Generate Prompt</span>
              <FaWandMagicSparkles className="ml-2 text-xl" />
            </Button>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1 bg-card bg-white shadow-sm border">
          <CardContent className="flex flex-col space-y-6 p-6">
            <div>
              <CardTitle className="font-semibold text-2xl tracking-tight">
                Generated Prompt
              </CardTitle>
              <CardDescription className="text-gray-600">
                Your AI-generated prompt will appear here
              </CardDescription>
            </div>
            <TextArea
              name=""
              disabled
              noResize
              placeholder="Your generated prompt will be displayed here..."
            />
            <Button
              href="/prompts"
              addClass="w-full rounded-[0.26rem] flex justify-center items-center"
            >
              <FaCopy className="mr-2 text-xl" />
              <span>Copy Prompt</span>
            </Button>
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
