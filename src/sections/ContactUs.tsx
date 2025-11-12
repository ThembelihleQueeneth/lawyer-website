import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Here you can integrate with EmailJS, Firebase, or your backend
    alert("Form submitted! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black py-16 px-8">
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Us / Book a Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@example.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message / Request</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you need..."
             
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
