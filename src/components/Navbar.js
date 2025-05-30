'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              CoachPro
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link href="#programs" className="text-gray-700 hover:text-indigo-600">Programs</Link>
            <Link href="#about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-red-500"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 space-y-4">
          <Link href="/" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#programs" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contadqct</Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
        />
      )}
    </nav>
  );
}
