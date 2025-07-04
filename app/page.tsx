import Image from "next/image";
import { Input } from "@/components/ui/input";
import  ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-gradient-to-b from-gray-950 to-gray-850 dark:bg-gray-950">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to My App
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          This is a simple Next.js application with a custom input component.
        </p>

        <div className="mt-6">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={150}
            height={150}
            priority
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <ContactForm />
      </div>
    </main>
  );
}
