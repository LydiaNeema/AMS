"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
       <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg" // make sure logo.png is inside public/
            alt="Company Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="font-bold text-xl text-white-900">
            AMS Surveyors
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/#home" className="hover:text-green-400">Home</Link></li>
          <li><Link href="/#about" className="hover:text-green-400">About</Link></li>
          <li><Link href="/#services" className="hover:text-green-400">Services</Link></li>
          <li><Link href="/contact-us" className="hover:text-green-400">Contact</Link></li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link href="/#home" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/#about" className="hover:text-green-400">About</Link></li>
            <li><Link href="/#services" className="hover:text-green-400">Services</Link></li>
            <li><Link href="/contact-us" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
