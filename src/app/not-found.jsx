"use client";

import Link from "next/link";
import { Glasses } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-blue-100">
            <Glasses className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>

        <h2 className="text-2xl font-bold mt-3 text-slate-800">
          Oops! Page not found 🤓
        </h2>

        <p className="text-slate-500 mt-3">
          “This page does not exist”
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}