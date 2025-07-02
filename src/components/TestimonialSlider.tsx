"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const testimonials = [
  {
    text: `“ From start to finish, their team demonstrated professionalism,
    attention to detail, and a commitment to excellence. They delivered
    our project on time and within budget, exceeding our expectations in
    every way. Highly recommend ”`,
    name: "Blanche Fields",
    title: "CEO & Founder of Tech Innovators",
  },
  {
    text: `“ Their support team was incredibly responsive and helpful.
    We encountered a few hurdles, but they handled everything smoothly
    and professionally. Our experience was seamless from beginning to end. ”`,
    name: "Daniel Smith",
    title: "CTO of FutureTech Labs",
  },
  {
    text: `“ One of the best service providers we've worked with.
    The quality and care put into the project was evident.
    They really understood our vision and brought it to life. ”`,
    name: "Sophia Lee",
    title: "Product Manager at Nova Solutions",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-section">
      <div className="w-full md:w-[70%] mx-auto p-16 bg-foreground text-background font-sans relative overflow-hidden">
        <div className="relative h-72">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                current === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <div>
                <Image src="/quote.png" alt="Quote" width={80} height={80} />
              </div>
              <p className="mt-4">{testimonial.text}</p>
              <h5 className="pt-4">{testimonial.name}</h5>
              <h5>{testimonial.title}</h5>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={clsx(
                "w-3 h-3 rounded-full",
                current === index ? "bg-background" : "bg-gray-600"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
