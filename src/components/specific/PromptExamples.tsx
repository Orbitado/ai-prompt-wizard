import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aiModels } from "@/data/aiModels";

export default function PromptExamples() {
  return (
    <article className="space-y-8 mb-12" id="prompt-examples">
      <h3 className="font-bold text-4xl text-center text-gray-800">
        Prompt Examples
      </h3>
      <Tabs defaultValue="chatgpt" className="w-full max-w-7xl">
        <TabsList className="grid grid-cols-3 mb-4 w-full">
          {aiModels.map((model) => (
            <TabsTrigger
              key={model.name}
              value={model.value}
              className="bg-white shadow-md font-bold"
            >
              {model.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {aiModels.map((model) => (
          <TabsContent
            tabIndex={0}
            key={model.name}
            value={model.value}
            className="bg-white shadow-md"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  {model.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {model.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{model.content}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="/prompts"
                  aria-label={`Click here to try this prompt for ${model.name}`}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
                >
                  Try this prompt
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </article>
  );
}
