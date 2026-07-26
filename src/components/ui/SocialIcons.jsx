import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex items-center gap-5 mt-8">

      {/* GitHub */}

      <a
        href="https://github.com/GoswamiKartikgiri"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-14 h-14 rounded-xl bg-white/5 border border-cyan-500/20 flex items-center justify-center text-2xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}

      <a
        href="https://www.linkedin.com/in/goswami-kartikgiri/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-14 h-14 rounded-xl bg-white/5 border border-cyan-500/20 flex items-center justify-center text-2xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
      >
        <FaLinkedin />
      </a>

      {/* Email */}

      <a
        href="mailto:goswamikartikgiri8@gmail.com"
        aria-label="Email"
        className="w-14 h-14 rounded-xl bg-white/5 border border-cyan-500/20 flex items-center justify-center text-2xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialIcons;