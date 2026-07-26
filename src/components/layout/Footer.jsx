import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaShieldAlt,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/10 bg-[#050816]">

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-12">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-cyan-400 text-black flex items-center justify-center">

                <FaShieldAlt />

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  Kartik
                  <span className="text-cyan-400">.</span>

                </h2>

                <p className="text-gray-400 text-sm">

                  Cyber Security Portfolio

                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-7">

              Passionate about Cyber Security,
              SOC Operations,
              Digital Forensics,
              Network Security,
              Vulnerability Assessment,
              and building practical security projects.

            </p>

          </div>

          {/* Center */}

          <div className="text-center">

            <h3 className="text-xl font-bold">

              Quick Links

            </h3>

            <div className="flex flex-wrap justify-center gap-5 mt-6">

              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-center md:items-end">

            <h3 className="text-xl font-bold">

              Connect

            </h3>

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/GoswamiKartikgiri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/goswami-kartikgiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:goswamikartikgiri8@gmail.com"
                className="w-12 h-12 rounded-xl bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <a
              href="#home"
              className="mt-8 inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-5 py-3 rounded-xl transition hover:scale-105"
            >
              <FaArrowUp />

              Back to Top

            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 pt-8 border-t border-cyan-500/10 text-center">

          <p className="text-gray-400">

            © {year} <span className="text-cyan-400 font-semibold">Kartik Giri</span>.
            All Rights Reserved.

          </p>

          <p className="text-gray-500 text-sm mt-3">

            Designed & Developed with React, Vite, Tailwind CSS and Framer Motion.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;