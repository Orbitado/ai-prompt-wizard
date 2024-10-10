import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { model, goal, topic, tone } = await request.json();

        if (!model || !goal || !topic || !tone) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = `You are a skilled prompt engineer with extensive experience in guiding AI to create effective and relevant prompts tailored to various needs. Your specialty lies in crafting prompts that enable other AI models to generate insightful, creative, or practical outputs based on specific requirements. 

        Your task is to generate a prompt that instructs an AI to create a new prompt for a specific subject or task. Here are the parameters you should consider during the creation process:
        
        - Subject Area: ${topic}
        - Model of the IA: ${model}
        - Goal: ${goal}  
        - Tone: ${tone}
        - Specific Requirements or Guidelines  
        - Target Audience
        
        Please ensure the prompt is clear and detailed, providing the AI enough context to generate a useful response while also allowing flexibility for creativity and depth.`.trim();

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
