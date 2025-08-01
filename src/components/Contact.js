import React from "react";

const Contact = () => (
  <section id="contact" className="py-20 bg-black text-white">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="mb-6 text-gray-400">Feel free to reach out via this form:</p>
      <form
        action="https://formsubmit.co/youremail@example.com"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-600 bg-black text-white px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-600 bg-black text-white px-4 py-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-600 bg-black text-white px-4 py-2 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Contact;


