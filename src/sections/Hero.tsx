import lawyers from '../assets/lawyers.png';
import { ConsultButton } from '../components/ConsultButton';

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black text-white">
        {/* LEFT SIDE - TEXT */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-3xl font-semibold">Need Legal Help?</p>
          <p className="text-lg text-gray-300">
            Contact us for a free consultation.
          </p>
          <ConsultButton />
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={lawyers}
            alt="Lawyers"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
  )
}
