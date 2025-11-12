import Navbar from '../components/Navbar';
import { Hero } from '../sections/Hero';
import  { Services } from '../sections/Services';
import { Team } from '../sections/Team';
import { Testimonials } from '../sections/Testimonials';
import { WhyUs } from '../sections/WhyUs';


export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <Team />

      
    </>
  );
};
