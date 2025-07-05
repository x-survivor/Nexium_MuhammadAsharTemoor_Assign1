"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
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
    window.location.href = `/${formData.topic}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between max-w-full space-x-4 w-full mx-auto p-6 border rounded-xl shadow-sm"
    >
      <Input
        id="topic"
        type="text"
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        placeholder="Enter your topic here"
        className="w-3/4 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
      />

      <Button type="submit" className="w-1/4">
        Submit
      </Button>
    </form>
  );
}
