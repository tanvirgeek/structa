import Image from "next/image";

export default function PlansToReality() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl app-section">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Heading */}
          <div className="space-y-4">
            <h6>how we work</h6>
            <h2>
              HOW WE TURNING
              <br />
              PLANS INTO REALITY
            </h2>
          </div>

          {/* Right Column - Process Steps */}
          <div className="space-y-8">
            {/* Step 01 - Initial Consultation */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold text-lg">01</span>
                <h4 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                  INITIAL CONSULTATION
                </h4>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/twoMen.png"
                  alt="Two construction workers in hard hats reviewing blueprints"
                  width={400}
                  height={250}
                  className="w-full h-72 object-cover"
                />
              </div>

              <p className="text-gray-600 leading-relaxed border-b-1 border-gray-300 py-2">
                We begin by sitting down with you to understand your vision,
                goals, and preferences. This is where we listen carefully to
                your ideas, discuss your needs, and explore what's possible.
              </p>
            </div>

            {/* Step 02 - Concept Development */}
            <div className="flex items-center gap-3 border-b-1 border-gray-300 py-2">
              <span className="text-primary font-bold text-lg">02</span>
              <h4 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                CONCEPT DEVELOPMENT
              </h4>
            </div>

            {/* Step 03 - Project Planning */}
            <div className="flex items-center gap-3 border-b-1 border-gray-300 py-2">
              <span className="text-primary font-bold text-lg">03</span>
              <h4 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                PROJECT PLANNING
              </h4>
            </div>

            {/* Step 04 - Execution & Delivery */}
            <div className="flex items-center gap-3 border-b-1 border-gray-300 py-2">
              <span className="text-primary font-bold text-lg">04</span>
              <h4 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                EXECUTION & DELIVERY
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
