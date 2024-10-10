import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { model, goal, topic, tone } = await request.json();

        if (!model || !goal || !topic || !tone) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = `
        You are an advanced ${model} model.
        Your task is to generate a high-quality prompt for the following goal:
        "${goal}".
        
        The prompt should be in a ${tone} tone and focus on the topic:
        "${topic}". 
        
        Please ensure the output is clear, concise, and adheres to the following:
        - Provide specific guidance on the subject matter.
        - Ensure that the tone matches the intended style (${tone}).
        - The prompt should be detailed enough for the user to achieve the goal (${goal}).
        - Add creative or technical elements where necessary based on the topic (${topic}).

        Structure your response to ensure maximum clarity and effectiveness.
        `;

        const cohereResponse = await fetch('https://api.cohere.ai/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'command',
                inputs: prompt
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
