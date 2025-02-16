import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#060913] text-white">
      <section className="py-16">
        <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            
          <div className='px-2 py-1 bg-[#FFB347] rounded-lg w-fit'><p className="text-2xl font-bold text-white">
            CineFlix
          </p></div>
            <p className="mt-4">
            Where Every Frame Tells a Story.
            </p>
            {/* Social Icons */}
            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.facebook.com/samad.reza.31" target="blank"
                className="text-blue-400"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_samad_reza_" target="blank"
                className="text-red-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a  href="https://x.com/SamadReza71" target="blank" className="text-blue-500" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/abdus-samad-3989b5317" target="_blank"
                className="text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Contact Information */}
            <div className="mt-6">
              <p className="flex items-center space-x-2">
                <FaPhoneAlt className="" />
                <span>+88 01748-307587</span>
              </p>
              <a href={"mailto: samadsust71@gmail.com"} className="flex items-center space-x-2 mt-2">
                <FaEnvelope className="" />
                <span>samadsust71@gmail.com</span>
              </a>
              <p className="flex items-center space-x-2 mt-2">
                <FaMapMarkerAlt className="" />
                <span>66/1 East Pirmoholla, Sylhet</span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="rounded-lg lg:p-6">
            <h3 className="text-xl font-bold">
              Subscribe for Newsletter
            </h3>
            <form className="mt-4 space-y-4">
              <div>
                <input
                  placeholder="Enter Your Email"
                  type="email"
                  className="input input-bordered w-full text-black focus:border-[#1B1A1A] focus:ring-[#1B1A1A]"
                  rows="4"
                ></input>
              </div>
              <button
                type="button"
                className="btn rounded-full border-2 bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <aside className="text-center text-sm text-white mt-8">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Samad Reza
        </p>
      </aside>
      </section>
     
    </div>
  );
};

export default Footer;