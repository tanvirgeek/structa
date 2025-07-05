import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Planning",
    description:
      "We define goals, budget, and timeline before starting any project.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our experts craft detailed designs that match your vision.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "With skilled workers and project managers, we bring plans to life.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We hand over the project on time, ensuring quality and satisfaction.",
  },
];

const HowWeWork = () => {
  return (
    <section className="app-section">
      <div className="container space-y-8">
        <div className="text-center space-y-2">
          <h6 className="text-primary uppercase tracking-wide">Our Process</h6>
          <h2 className="text-3xl font-bold">How We Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-sm flex-1 bg-white rounded-lg p-6 shadow-md"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
