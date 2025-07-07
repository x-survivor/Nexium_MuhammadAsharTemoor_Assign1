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
      <div className="w-full">
        <div className="w-full p-8 text-center">
          Quotes not found for the topic: {topic.topic}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="w-full p-8 text-center">
        {topicQuotes.map((quote: { quote: string; author: string }) => (
          <div key={quote.quote} className="mb-4">
            <p className="text-lg text-gray-300 mb-2">{quote.quote}</p>
            <p className="text-sm text-gray-500">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}