import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="flex flex-col justify-center items-center space-y-6 bg-blue-600 my-16 py-8 rounded-xl w-full text-center">
      <h3 className="font-bold text-4xl text-white">
        Ready to Supercharge Your AI Interactions?
      </h3>
      <p className="font-medium text-white text-xl">
        Let&apos;s build something great together
      </p>
      <Button isLight href="/prompts">
        Start Your First Prompt - It&apos;s Free
      </Button>
    </section>
  );
}
