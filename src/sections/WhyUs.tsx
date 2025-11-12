// src/components/sections/WhyUs.tsx
import React from "react";

export const WhyUs: React.FC = () => {
  return (
    <section
      id="whyus"
      className="bg-black text-white py-24 px-10 md:px-20 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">Why Choose Us</h2>

      {/* Subtitle */}
      <p className="text-gray-300 text-center max-w-2xl mb-16">
        We understand that legal issues can be stressful. Our team is dedicated
        to providing expert advice, personalized attention, and reliable results
        you can trust.
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {/* CARD 1 */}
        <div className="p-8 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
            Experienced Attorneys
          </h3>
          <p className="text-gray-400">
            Our lawyers bring decades of combined experience across multiple
            areas of law — ensuring the best representation possible.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
            Client-Centered Approach
          </h3>
          <p className="text-gray-400">
            We prioritize your needs. Every case is unique, and we tailor our
            strategy to achieve the most favorable outcome for you.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
            Proven Results
          </h3>
          <p className="text-gray-400">
            Our track record speaks for itself — we’ve successfully handled
            hundreds of cases, earning trust through excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
