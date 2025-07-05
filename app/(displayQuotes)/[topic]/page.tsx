import quotes from './motivational_quotes.json';
type ContactFormProps = {
    topic: string; 
};

export default async function displayQuotes({ params }: { params: ContactFormProps }) {
    const topic = await params;
    return (
        <main className="flex flex-col min-h-screen items-center justify-around p-24 bg-radial from-gray-850 via-gray-950 to-gray-950">
        <div className="w-1/2 p-8 text-center">
            {quotes["quotes"][topic.topic]?.map((quote: { quote: string, author: string }) => 
               {
                if (quote.quote && quote.author) {
                    return (
                        <div key={quote.quote} className="mb-4">
                            <p className="text-lg text-gray-300 mb-2">{quote.quote}</p>
                            <p className="text-sm text-gray-500">- {quote.author}</p>  
                        </div>
                    );
                }
               }
            )}
        </div>
        </main>
    );
}