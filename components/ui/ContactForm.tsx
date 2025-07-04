'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    topic: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Form submitted!")
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center max-w-full w-full mx-auto space-y-4 mt-10 p-6 border rounded-xl shadow-sm">
      <div>
        <Input
          id="topic"
          type="text"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Enter your topic here"
          className="w-1/2 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
        />
      </div>

      <Button type="submit" className="w-1/2">
        Submit
      </Button>
    </form>
  )
}
