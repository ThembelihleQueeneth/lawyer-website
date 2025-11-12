import { motion } from "framer-motion";

export const Team = () => {
  const team = [
    {
      name: "Adv. Lerato Mokoena",
      role: "Senior Attorney",
      bio: "Specializes in corporate and commercial law.",
      image: "/team/lerato.jpg",
    },
    {
      name: "Adv. Themba Nkosi",
      role: "Criminal Defense Lawyer",
      bio: "Dedicated to defending and protecting client rights.",
      image: "/team/themba.jpg",
    },
    {
      name: "Adv. Naledi Kgomo",
      role: "Family Law Specialist",
      bio: "Expert in family disputes, custody, and divorce cases.",
      image: "/team/naledi.jpg",
    },
    {
      name: "Adv. Kgomotso Radebe",
      role: "Real Estate Lawyer",
      bio: "Handles property, contracts, and land dispute matters.",
      image: "/team/kgomotso.jpg",
    },
    {
      name: "Adv. Sipho Dlamini",
      role: "Employment Law Expert",
      bio: "Provides guidance on labor and workplace cases.",
      image: "/team/sipho.jpg",
    },
    {
      name: "Adv. Refilwe Molefe",
      role: "Legal Advisor",
      bio: "Offers corporate and public policy consultation.",
      image: "/team/refilwe.jpg",
    },
    {
      name: "Adv. Mpho Khosa",
      role: "Junior Associate",
      bio: "Supports case research and client documentation.",
      image: "/team/mpho.jpg",
    },
  ];

  return (
    <section id="team" className="bg-black text-white py-16 px-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet Our Legal Team
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-yellow-500"
            />
            <h3 className="text-xl font-semibold text-yellow-500">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
            <p className="text-gray-300 text-sm mt-2">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
