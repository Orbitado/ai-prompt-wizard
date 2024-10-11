"use client";
import RadioSelect from "@/components/common/RadioSelect";
import { FaWandMagicSparkles } from "react-icons/fa6";
import CopyToClipboard from "@/components/common/CopyToClipboard";
import PromptExamples from "@/components/specific/PromptExamples";

import { aiModels } from "@/data/aiModels";

export default function PromptGeneratorPage() {
  const toneOptions = ["Professional", "Casual", "Formal", "Humorous"];
  return (
    <section className="my-16">
      <h2 className="mb-8 font-bold text-4xl text-center text-gray-800">
        Start Generating Prompts
      </h2>
      <article className="gap-4 grid grid-cols-1 lg:grid-cols-4">
        <section className="lg:col-span-3 bg-white shadow-sm border">
          <div className="flex flex-col space-y-6 p-6">
            <header>
              <h3 className="font-semibold text-2xl tracking-tight">
                Prompt Generator
              </h3>
              <p className="text-gray-600">
                Fill in the details below to generate your AI prompt
              </p>
            </header>
            <form>
              <label title="Choose an AI model" className="dropdown">
                <span className="font-semibold text-sm">Select AI model</span>
              </label>
              <select
                title="Choose an AI model"
                defaultValue="Choose an AI model"
                className="border-gray-300 mt-2 p-2 border rounded-[0.25rem] w-full text-sm"
              >
                <option
                  value="Choose an AI model"
                  disabled
                  className="dropdown-item"
                >
                  Choose an AI model
                </option>
                {aiModels.map((model) => (
                  <option
                    key={model.name}
                    value={model.value}
                    className="dropdown-item"
                  >
                    {model.name}
                  </option>
                ))}
              </select>
              <label
                htmlFor="goal"
                className="block mt-4 mb-2 font-semibold text-sm"
              >
                What is your goal?
              </label>
              <textarea
                id="goal"
                name="goal"
                placeholder="Describe what you want to achieve with this prompt"
                className="p-2 border rounded w-full"
              ></textarea>
              <label
                htmlFor="topic"
                className="block mt-4 mb-2 font-semibold text-sm"
              >
                Topic or Subject Matter
              </label>
              <input
                id="topic"
                type="text"
                placeholder="Enter the main topic or subject"
                name="topic"
                className="p-2 border rounded w-full"
              />

              <fieldset className="mt-4">
                <legend className="font-semibold text-sm">Tone</legend>
                <div id="ai-tone-models" className="flex space-x-4">
                  <RadioSelect name="tone" options={toneOptions} />
                </div>
              </fieldset>

              <a
                href="/prompts"
                className="flex justify-center items-center bg-blue-500 mt-6 p-2 rounded-[0.26rem] w-full text-white"
              >
                <span>Generate Prompt</span>
                <FaWandMagicSparkles className="ml-2" />
              </a>
            </form>
          </div>
        </section>

        <section className="lg:col-span-1 bg-white shadow-sm border">
          <div className="flex flex-col space-y-6 p-6">
            <header>
              <h3 className="font-semibold text-2xl tracking-tight">
                Generated Prompt
              </h3>
              <p className="text-gray-600">
                Your AI-generated prompt will appear here
              </p>
            </header>

            <textarea
              name="generated-prompt"
              disabled
              className="p-2 border rounded w-full"
              placeholder="Your generated prompt will be displayed here..."
            ></textarea>

            <CopyToClipboard text="Your generated prompt will be displayed here..." />
          </div>
        </section>
      </article>

      <article className="my-16">
        <PromptExamples />
      </article>
    </section>
  );
}
