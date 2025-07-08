import { randomInt } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const topic = searchParams.get("topic") || "motivation";
  const quotes = fetch(`https://zenquotes.io/api/quotes/keyword=${topic}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const quotesData = await quotes.then((res) => res.json()).catch((e) => {
    return { error: e.message };
  });
  const startIndex = randomInt(0, 19);
  const endIndex = startIndex + 3;
  return NextResponse.json(quotesData.slice(startIndex, endIndex));
}