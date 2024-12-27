import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-yellow-950 text-white text-center py-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">Travel Blog</h2>
        <p className="text-sm mb-4">
          Exploring the world, one destination at a time. Join us for travel tips,
          guides, and unforgettable journeys.
        </p>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/sadiaromi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/roman-sadia-6b280a2b6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sadiaroman28@gmail.com"
            className="hover:text-gray-400 text-xl"
          >
            <HiOutlineMail />
          </a>
        </div>

        <p className="text-sm">
          &copy; 2024 Travel Blog. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
