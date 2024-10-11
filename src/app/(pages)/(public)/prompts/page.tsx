"use client";
import RadioSelect from "@/components/common/RadioSelect";
import { FaWandMagicSparkles } from "react-icons/fa6";
import CopyToClipboard from "@/components/common/CopyToClipboard";
import PromptExamples from "@/components/specific/PromptExamples";

import { aiModels } from "@/data/aiModels";
import { useState } from "react";

export default function PromptGeneratorPage() {
  const [selectedModel, setSelectedModel] = useState<string>();
  const [selectedTone, setSelectedTone] = useState<string>();
  const [goal, setGoal] = useState<string>();
  const [topic, setTopic] = useState<string>();
  const [generatedPrompt, setGeneratedPrompt] = useState<string>();

  const toneOptions = ["Professional", "Casual", "Formal", "Humorous"];

  console.log(
    "Model:",
    selectedModel,
    "Goal:",
    goal,
    "Topic:",
    topic,
    "Tone:",
    selectedTone
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selectedModel && selectedTone && goal && topic) {
        console.log("Sending request with:", {
          model: selectedModel,
          tone: selectedTone,
          goal,
          topic,
        });

        const cohereResponse = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: selectedModel,
            tone: selectedTone,
            goal,
            topic,
          }),
        });

        if (!cohereResponse.ok) {
          console.error(
            "Error with the response status:",
            cohereResponse.status
          );
          return;
        }

        const data = await cohereResponse.json();
        console.log("API response:", data);

        if (data.error) {
          console.error("API Error:", data.error);
        }

        setSelectedModel("");
        setSelectedTone("");
        setGoal("");
        setTopic("");

        setGeneratedPrompt(data.cohereResponse.text);
        console.log("Generated prompt:", data.cohereResponse.text);
      } else {
        console.error("Form submission failed: all fields are required.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            <form onSubmit={handleSubmit} method="POST">
              <label title="Choose an AI model" className="dropdown">
                <span className="font-semibold text-sm">Select AI model</span>
              </label>
              <select
                title="Choose an AI model"
                defaultValue="Choose an AI model"
                className="border-gray-300 mt-2 p-2 border rounded-[0.25rem] w-full text-sm"
                onChange={(e) => setSelectedModel(e.target.value)}
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
                className="p-2 border rounded w-full h-32"
                onChange={(e) => setGoal(e.target.value)}
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
                onChange={(e) => setTopic(e.target.value)}
              />

              <fieldset className="mt-4">
                <legend className="font-semibold text-sm">Tone</legend>
                <div id="ai-tone-models" className="flex space-x-4">
                  <RadioSelect
                    name="tone"
                    options={toneOptions}
                    onChangeFunction={(e) => setSelectedTone(e.target.value)}
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                className="flex justify-center items-center bg-blue-500 mt-6 p-2 rounded-[0.26rem] w-full text-white"
              >
                <span>Generate Prompt</span>
                <FaWandMagicSparkles className="ml-2" />
              </button>
            </form>
          </div>
        </section>

        <section className="lg:col-span-1 bg-white shadow-sm border">
          <div className="flex flex-col space-y-6 p-6 h-full">
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
              className="p-2 border rounded w-full h-full resize-none"
              placeholder="Your generated prompt will be displayed here..."
              value={generatedPrompt}
            ></textarea>

            <CopyToClipboard text={generatedPrompt || ""} />
          </div>
        </section>
      </article>

      <article className="my-16">
        <PromptExamples />
      </article>
    </section>
  );
}
