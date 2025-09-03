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
    <div className="min-h-screen bg-gray-100">
      {/* Top Section */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Contact Us Now!
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          To write to us, fill in the form below. We shall get back to you as
          soon as possible.
        </p>
      </div>

      {/* Middle Image Section with Overlay */}
      <div className="relative w-full h-64">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image2.jpeg')" }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
        </div>
      </div>

      {/* Contact Form Centered */}
      <div className="max-w-3xl mx-auto py-12 px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8"
        >
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

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-800 text-white py-4 rounded-lg text-xl font-semibold shadow-md transition duration-300"
          >
            Submit Now
          </button>
        </form>
      </div>

      {/* ===== Later move this into a Footer component ===== */}
      {/*
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <p className="mb-3 text-gray-800">
          Alternatively, you can reach us at:
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
      */}
    </div>
  );
}
