"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      setStatus(data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="py-20 bg-blue-50 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get in Touch
        </h2>
        <p className="text-gray-600 mt-2">
          Ready to start your journey? Send a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 rounded-xl border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 rounded-xl border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-4 rounded-xl border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Send Message
        </button>

        {status && <p className="text-center text-gray-700">{status}</p>}
      </form>
    </section>
  );
}
