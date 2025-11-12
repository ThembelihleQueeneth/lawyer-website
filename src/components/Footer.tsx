import { footer } from 'framer-motion/client'
import React from 'react'
import { ConsultButton } from './ConsultButton'

export const Footer = () => {
  return (
    <>
    <footer>
        I want a map here 50  Dorp St Polokwane 0700
    </footer>
    <footer>
        <div>
            <h1>Our Story</h1>
            <p></p>
            <ConsultButton />

        </div>
        <div>
            <h1>Quick Links</h1>
            <ul className="flex space-x-8 text-lg font-medium">
            <li className="hover:text-yellow-500 cursor-pointer transition">Why Us</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Services</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Testimonial</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Team</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Contact Us</li>
        </ul>
        </div>

    </footer>
    </>
  )
}
