import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#050505] rounded p-10 text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-[#FFB347] font-bold">Cineflix</h1>
        <p className="">
        Where Every Frame Tells a Story.
        </p>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-blue-400 text-xl" href="https://x.com/SamadReza71" target="blank">
            <FaTwitter></FaTwitter>
          </a>
          <a className="text-red-400 text-xl" href="https://www.instagram.com/_samad_reza_" target="blank">
            <FaInstagram></FaInstagram>
          </a>
          <a className="text-sky-400 bg-clip-text  text-xl" href="https://www.facebook.com/samad.reza.31" target="blank">
            <FaFacebook></FaFacebook>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Samad Reza
        </p>
      </aside>
    </footer>
  );
};

export default Footer;