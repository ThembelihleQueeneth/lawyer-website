// src/components/sections/Services.tsx
import React from "react";
import { Briefcase, Gavel, FileText, Users } from "lucide-react"; // lucide icons for clean visuals

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Gavel size={40} className="text-yellow-500 mb-4" />,
      title: "Criminal Defense",
      desc: "Expert representation to protect your rights and ensure fair treatment in the justice system.",
    },
    {
      icon: <FileText size={40} className="text-yellow-500 mb-4" />,
      title: "Corporate Law",
      desc: "Comprehensive legal support for businesses — from contracts to compliance and mergers.",
    },
    {
      icon: <Users size={40} className="text-yellow-500 mb-4" />,
      title: "Family Law",
      desc: "Guiding you through sensitive matters like divorce, custody, and child support with care.",
    },
    {
      icon: <Briefcase size={40} className="text-yellow-500 mb-4" />,
      title: "Employment Law",
      desc: "Helping both employers and employees resolve workplace disputes and legal issues efficiently.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black text-white py-24 px-10 md:px-20 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">Our Services</h2>

      <p className="text-gray-300 text-center max-w-2xl mb-16">
        Our firm provides a full range of legal services tailored to individuals,
        families, and businesses. We combine experience with integrity to deliver
        real results.
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-gray-900 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-200"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
