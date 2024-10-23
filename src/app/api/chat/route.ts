import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { model, goal, topic, tone } = await request.json();

        if (!model || !goal || !topic || !tone) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = `Create a detailed, yet concise prompt that can guide ${model} in generating content for ${goal} about ${topic}. The prompt should clearly define the desired output, including necessary context, constraints, and specific goals. Ensure that the language used is easy to understand, and that it includes an ${tone} tone or formatting instructions to match the user's needs. Please be ensure that the prompt is less than 100 words. Please remember don't include anything else in the prompt, only provide to me the prompt.`.trim();

        const cohereResponse = await fetch('https://api.cohere.ai/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'command',
                prompt: prompt
            })
        });

        if (!cohereResponse.ok) {
            const errorMessage = await cohereResponse.json();
            return NextResponse.json({ error: "Failed to fetch from Cohere API", details: errorMessage }, { status: 500 });
        }

        const data = await cohereResponse.json();
        return NextResponse.json({
            message: prompt,
            cohereResponse: data
        });
    } catch (err) {
        return NextResponse.json({
            error: "An unexpected error occurred while processing the request.",
            details: err instanceof Error ? err.message : String(err)
        }, { status: 500 });
    }
}
