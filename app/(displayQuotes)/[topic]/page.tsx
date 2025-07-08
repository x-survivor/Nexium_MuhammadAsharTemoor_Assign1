import quotes from "./motivational_quotes.json";
import { getOriginFromHeaders } from "@/lib/getOrigin";
import { template } from "./QuotesViewTemp";

type Topic = "success" | "focus" | "growth" | "learning" | "motivation";

async function GetQuotesFromApi(topic: Topic) {
  const getOrigin = await getOriginFromHeaders();
  const response = await fetch(`${getOrigin}/api?topic=${topic}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Error fetching quotes for topic: ${topic}`);
  }
  return (
    template(data)
  );
}

export default async function displayQuotes({
  params,
}: {
  params: Promise<{ topic: Topic }>;
}) {
  const topic = await params;
  const topicQuotes = quotes["quotes"][topic.topic]?.filter(
    (quote: { q: string; a: string }) => quote.q && quote.a
  );
  if (!topicQuotes || topicQuotes.length === 0) {
    return GetQuotesFromApi(topic.topic);
  }
  return (
    template(topicQuotes)
  );
}
