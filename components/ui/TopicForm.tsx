"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InputTopic() {
  const [formData, setFormData] = useState({
    topic: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    location.href = `/${formData.topic}`; 
  };

  return (
    <article className="sm:w-2/3 lg:w-1/2">
      <form
      onSubmit={handleSubmit}
      className="flex-col flex justify-between max-w-full md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto p-6 border border-pink-950 rounded-xl shadow-md"
    >
      <Input
        id="topic"
        type="text"
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        placeholder="Enter your topic here"
        className="w-full md:w-3/4 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
      />

      <Button type="submit" className="w-full md:w-1/4">
        Get Quotes
      </Button>
    </form>
    </article>
  );
}
