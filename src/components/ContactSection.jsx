import Lottie from "lottie-react";
import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import contactAnimationData from "../assets/contact-lottie-data.json"

const ContactSection = () => {
  return (
    <div className="">
        <h2 className="text-2xl lg:text-4xl font-bold dark:text-white mb-8 text-start border-l-4 border-[#FFB347] pl-2">
        Contact Us
      </h2>
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        {/* Form Section */}
      <div className="w-full lg:w-[45%] dark:text-white">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input outline-none w-full dark:bg-[#1B262C] border  border-[#FFB347] rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#FFB347] focus-within:ring-[#FFB347]/80"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input border  border-[#FFB347] rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#FFB347] focus-within:ring-[#FFB347]/80 w-full dark:bg-[#1B262C]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Where did you hear about us?
            </label>
            <input
              type="text"
              placeholder="Source"
              className="input border  border-[#FFB347] rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#FFB347] focus-within:ring-[#FFB347]/80 w-full dark:bg-[#1B262C]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              placeholder="Your Message"
              className="textarea border  border-[#FFB347] rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#FFB347] focus-within:ring-[#FFB347]/80 w-full dark:bg-[#1B262C]"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="px-4 py-2 rounded-full border border-[#FFB347] text-[#FFB347]">Send Message</button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="w-full lg:w-1/2 space-y-6 dark:text-white mt-6 lg:mt-0">
      <div>
        <Lottie animationData={contactAnimationData} className="h-[400px]" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default ContactSection;
