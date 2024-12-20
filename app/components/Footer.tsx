"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="py-8 md:py-14">
      <div className="container mx-auto flex items-center justify-between">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/ririncaterin/"
            target="_blank"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/ririn.caterin/"
            target="_blank"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ririn-caterin/"
            target="_blank"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Ririn Caterin
        </p>

        {/* Scroll to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-purple-500 text-white py-2 px-2 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
            aria-label="Scroll to Top"
          >
            <FiArrowUp size={20} />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
