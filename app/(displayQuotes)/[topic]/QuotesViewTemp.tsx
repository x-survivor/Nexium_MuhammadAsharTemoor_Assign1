export function template(data: {q: string, a: string}[]) {
  return (
    <section className="w-3/4">
      <article className="p-8 text-center">
        {data.map((quote: { q: string; a: string }) => (
          <div key={quote.q} className="mb-4 p-3 rounded-md bg-gray-900">
            <p className="text-gray-300 text-lg mb-2">
              &quot;{quote.q}&quot;
            </p>
            <span className="font-semibold">
              <p className="text-gray-500 text-sm">- {quote.a}</p>
            </span>
          </div>
        ))}
      </article>
    </section>
  );
}