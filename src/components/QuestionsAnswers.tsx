"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a typical construction project take?",
    answer:
      "The duration depends on the project's complexity, but most residential builds take 3–9 months.",
  },
  {
    question: "Do you offer turnkey solutions?",
    answer:
      "Yes, we provide end-to-end services—from planning and design to execution and handover.",
  },
  {
    question: "Are your construction materials sustainable?",
    answer:
      "Absolutely. We prioritize eco-friendly and high-quality materials for every project.",
  },
  {
    question: "Can I customize the design during construction?",
    answer:
      "Yes, we accommodate changes whenever feasible to ensure the final outcome meets your vision.",
  },
  {
    question: "Do you help with permits and local approvals?",
    answer:
      "Yes, our team handles all necessary permits and compliance processes to keep your project stress-free.",
  },
  {
    question: "What kind of warranty do you offer?",
    answer:
      "We offer structural warranties up to 10 years along with workmanship and materials coverage depending on the contract.",
  },
  {
    question: "How is the budget managed throughout the project?",
    answer:
      "We provide transparent estimates and continuous budget tracking to avoid surprises and stay within scope.",
  },
  {
    question: "Do you offer post-construction support?",
    answer:
      "Yes, we offer maintenance advice, support services, and final walkthroughs to ensure satisfaction.",
  },
  {
    question: "Can I visit the site during construction?",
    answer:
      "Yes, we encourage scheduled visits so clients can stay informed and involved at key stages.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply contact us for a consultation. We'll discuss your vision, provide estimates, and build a roadmap tailored to your needs.",
  },
];

const QuestionsAnswers = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="app-section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-4">
          <h6 className="text-primary uppercase tracking-wider">FAQs</h6>
          <h2 className="text-3xl font-bold">Questions & Answers</h2>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-2 transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium"
              >
                <span className="flex">
                  <span className="text-primary mr-2">{index + 1}.</span>
                  <h5>{faq.question}</h5>
                </span>
                <span className="text-primary text-sm">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Smooth animated expand/collapse */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600 pr-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsAnswers;
