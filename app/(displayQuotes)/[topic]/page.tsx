
import quotes from "./motivational_quotes.json";
type Topic = "success" | "focus" | "growth" | "learning" | "motivation";

export default async function displayQuotes({
  params,
}: {
  params: Promise<{topic: Topic}>;
}) {
  const topic =  await params;
  const topicQuotes = quotes["quotes"][topic.topic]?.filter(
    (quote: { quote: string; author: string }) => quote.quote && quote.author
  );
  if (!topicQuotes || topicQuotes.length === 0) {
    return (
      <div>
        <div className="w-full p-8 text-center">
          Quotes not found for the topic: "{topic.topic}"
        </div>
      </div>
    );
  }
  return (
    <section className="w-3/4">
      <article className="p-8 text-center">
        {topicQuotes.map((quote: { quote: string; author: string }) => (
          <div key={quote.quote} className="mb-4 p-3 rounded-md bg-gray-900">
              <p className="text-gray-300 text-lg mb-2">"{quote.quote}"</p>
            <span className="font-semibold">
              <p className="text-gray-500 text-sm">- {quote.author}</p>
            </span>
          </div>
        ))}
      </article>
    </section>
  );
}