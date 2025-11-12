import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Dlamini",
      role: "Business Owner",
      quote:
        "The team handled my case professionally and kept me updated every step of the way. Highly recommended!",
    },
    {
      name: "Thabo Nkuna",
      role: "Client",
      quote:
        "They provided excellent advice and got me the results I needed. Great communication and support.",
    },
    {
      name: "Nomsa Mokoena",
      role: "Entrepreneur",
      quote:
        "I was impressed by their expertise and compassion. They made a difficult process so much easier.",
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-16 px-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
            <h3 className="text-lg font-semibold text-yellow-500">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
