
import { ConsultButton } from "./ConsultButton";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Map Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Find Us</h2>
          <p className="mb-3">50 Dorp St, Polokwane, 0700</p>
          <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Polokwane Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.624836759074!2d29.4573!3d-23.9046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6cb9b4e041ae3%3A0x8d7ec64a6ad4cbd1!2s50%20Dorp%20St%2C%20Polokwane%2C%200700!5e0!3m2!1sen!2sza!4v1697088390000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Our Story Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
          <p className="mb-6">
            We’re passionate about delivering quality service and building strong
            relationships with our clients. Our mission is to bring your ideas to life
            with creativity and excellence.
          </p>
          <ConsultButton />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-lg font-medium">
            {["Why Us", "Services", "Testimonials", "Team", "Contact Us"].map((link) => (
              <li
                key={link}
                className="hover:text-yellow-500 cursor-pointer transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};
