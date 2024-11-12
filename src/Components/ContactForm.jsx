"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("Send");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add your access key directly to the form data
    formData.append("access_key", "90771da2-be04-45f1-a20c-b60c2e5b044c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // Log the response for debugging
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);

      const data = await response.json();

      if (response.ok) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "An error occurred, please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setResult("An error occurred, please try again later.");
    }
  };

  return (
    <section id="Contact" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Hidden access key field */}
            <input type="hidden" name="access_key" value="90771da2-be04-45f1-a20c-b60c2e5b044c" />
            
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            
            {/* Phone number field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            
            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" required rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            
            {/* Submit button */}
            <button type="submit" className="w-full bg-blue-500 text-white py -2 rounded-md">
              {result}
            </button>
          </form>
          
          {/* Result message */}
          <span className="block mt-4 text-center">{result}</span>
        </div>
      </div>
    </section>
  );
}