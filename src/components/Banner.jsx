"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  const slides = [
    {
      title: "Learn from Expert Tutors",
      desc: "Connect with experienced teachers and improve your skills faster.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      title: "Study Anytime, Anywhere",
      desc: "Flexible online learning that fits your daily routine.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Boost Your Academic Success",
      desc: "Personalized tutoring to help you achieve better results.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    },
  ];

  const [current, setCurrent] = useState(0);

  // auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Slider Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[420px]">

          {/* Image */}
          <Image
            src={slides[current].image}
            alt="slide"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              {slides[current].title}
            </h1>

            <p className="mt-3 text-sm md:text-base max-w-xl">
              {slides[current].desc}
            </p>

            {/* CTA Button */}
            <Link
              href="/tutors"
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition"
            >
              Tutors Page
            </Link>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full"
          >
            ❯
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                current === index ? "bg-blue-600 w-4" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}