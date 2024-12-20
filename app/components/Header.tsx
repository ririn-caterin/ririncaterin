import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-customPurple">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="flex items-center">RC</span>
          </Link>
        </div>

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
      </div>
    </header>
  );
};

export default Header;
