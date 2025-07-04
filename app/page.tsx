import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-gray-900">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to My App</h1>
        <p className="text-lg text-gray-300 mb-4">
          This is a simple Next.js application with a custom input component.
        </p>
        
        <div className="mt-6">
          <Image
          className="rounded-lg shadow-lg dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={150}
            height={150}
            priority
          />
          </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Input
          type="text"
          placeholder="Type something..."
          className="w-full max-w-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
        />
      </div>
    </main>
  );
}
