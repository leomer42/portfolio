import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "AI assistant is not configured. Set OPENAI_API_KEY to enable this feature.",
      },
      { status: 503 }
    );
  }

  try {
    const { question } = (await request.json()) as { question?: string };

    if (!question?.trim()) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant on Leomer Romero's portfolio website. Leomer is a Senior Full Stack Engineer with 10+ years experience in React, Next.js, Node.js, Laravel, Python, AWS, Azure, and AI-powered application development. Answer questions about his skills, experience, and availability for remote full stack roles. Be professional, concise, and accurate. Do not invent credentials or projects not mentioned on the portfolio.",
          },
          { role: "user", content: question },
        ],
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "AI service unavailable." }, { status: 502 });
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}
