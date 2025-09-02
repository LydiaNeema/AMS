"use client";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      alert("Name, email, phone and message are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="w-full max-w-3xl">
        {/* Title + Subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 underline decoration-2">
            Contact Us Now!
          </h1>
          <p className="text-gray-700">
            To write to us, fill in the form below. We shall get back to you as
            soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 mb-10"
        >
          {/* Full Name */}
          <div className="mb-6">
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Enter Name"
    required
    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
  />
</div>

{/* Email + Phone side by side */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
    required
    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
  />
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone"
    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
  />
</div>

{/* Message */}
<div className="mb-6">
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Enter Message"
    required
    rows="6"
    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
  />
</div>

{/* Submit Button */}
<button
  type="submit"
  className="w-full bg-green-900 hover:bg-green-800 text-white py-4 rounded-lg text-xl font-semibold shadow-md transition duration-300"
>
  Submit Now
</button>
        </form>

        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <p className="mb-3 text-gray-800">
            Alternatively you can reach us at
          </p>
          <p className="mb-2">
            <strong>Email:</strong> abednegoamani@gmail.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +25495979586
          </p>
          <p className="mb-2">
            <strong>Location:</strong> Mombasa, Kenya
          </p>
          <p className="mb-2">
            <strong>Hours:</strong> Mon–Fri, 9am–5pm
          </p>
        </div>
      </div>
    </div>
  );
}
