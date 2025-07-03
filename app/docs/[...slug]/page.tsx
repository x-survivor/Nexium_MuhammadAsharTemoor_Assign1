export default function Docs({params}: {params: { slug: string[] }}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-2xl font-bold">
            {JSON.stringify(params.slug)}
        </h1>
    </div>
    );
}
// This file is used to handle dynamic routes in Next.js.
// The `params` object contains the dynamic segments of the URL.