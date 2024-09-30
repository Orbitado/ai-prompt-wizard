import Link from "next/link";
import FeatureContainer from "@/components/specific/KeyFeatures/FeatureContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <section
      id="#main-content"
      className="flex flex-col justify-center items-center my-16 text-center"
    >
      <article className="space-y-4 mb-16">
        <h2 className="font-bold text-5xl text-gray-800">
          Craft Perfect AI Prompts with Ease
        </h2>
        <p className="mx-auto max-w-2xl text-steel text-xl">
          Enhance your interactions with AI models like ChatGPT, DALL·E, and
          MidJourney. Start creating powerful prompts in minutes!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/prompts"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-full font-bold text-lg text-white"
          >
            Start Generating Prompts
          </Link>
        </div>
      </article>
      <article className="space-y-8 mb-8">
        <h3 className="font-bold text-4xl text-gray-800">Key Features</h3>
        <FeatureContainer />
      </article>
      <article className="space-y-8 mb-8">
        <h3 className="font-bold text-4xl text-gray-800">Prompt Examples</h3>
        <Tabs defaultValue="chatgpt" className="w-full max-w-7xl">
          <TabsList className="grid grid-cols-3 mb-8 w-full">
            <TabsTrigger
              value="chatgpt"
              className="bg-white shadow-md font-bold"
            >
              ChatGPT
            </TabsTrigger>
            <TabsTrigger value="dalle" className="bg-white shadow-md font-bold">
              DALL·E
            </TabsTrigger>
            <TabsTrigger
              value="midjourney"
              className="bg-white shadow-md font-bold"
            >
              MidJourney
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chatgpt" className="bg-white shadow-md">
            <Card className="">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  ChatGPT Prompt Example
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Effective prompt for generating a story outline
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  &quot;Create a detailed outline for a short story set in a
                  dystopian future. Include the main character&apos;s
                  background, the central conflict, and a surprising twist
                  ending.&quot;
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="/prompts"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
                >
                  Try this prompt
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="dalle" className="bg-white shadow-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  DALL·E Prompt Example
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Descriptive prompt for generating an image
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  &quot;A serene Japanese garden at sunset, with a red bridge
                  over a koi pond, cherry blossom trees in full bloom, and Mount
                  Fuji visible in the background, digital art style&quot;
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="/prompts"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
                >
                  Try this prompt
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="midjourney" className="bg-white shadow-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  MidJourney Prompt Example
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Detailed prompt for creating a unique image
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  &quot;A steampunk-inspired flying machine with brass gears,
                  leather wings, and a glass cockpit, soaring through a cloudy
                  sky at golden hour, hyper-realistic style, 8k resolution&quot;
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="/prompts"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
                >
                  Try this prompt
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </article>
    </section>
  );
}
