import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex items-center gap-5 mt-8">

      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-gray-300 hover:text-cyan-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/YOUR_USERNAME"
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-gray-300 hover:text-cyan-400 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:YOUR_EMAIL@gmail.com"
        className="text-2xl text-gray-300 hover:text-cyan-400 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialIcons;