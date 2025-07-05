import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-around p-24 bg-radial from-gray-850 via-gray-950 to-gray-950">
      <div className="w-1/2 p-8 text-center">
        <h1 className="text-4xl uppercase font-bold bg-gradient-to-r from-pink-800 via-red-400 to-pink-500 mb-6 bg-clip-text text-transparent">
          Quote Generator
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          This is a simple Next.js application with a custom input component.
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <ContactForm />
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={150}
          height={150}
          priority
        />
      </div>
    </main>
  );
}
