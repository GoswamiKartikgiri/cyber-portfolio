import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCircle,
} from "react-icons/fa";

import SocialIcons from "../ui/SocialIcons";
import CyberBackground from "../ui/CyberBackground";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050816] overflow-hidden flex items-center pt-24 px-6 lg:px-16"
    >
      <CyberBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability */}

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-5 py-2 rounded-full mb-6 shadow-lg shadow-green-500/10">

            <FaCircle className="text-green-400 text-[10px] animate-pulse" />

            <span className="text-green-300 text-sm font-semibold tracking-wide">
              Open to Cybersecurity Opportunities
            </span>

          </div>

          <p className="text-cyan-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

            Kartik <span className="text-cyan-400">Giri</span>

          </h1>

          {/* Typing */}

          <div className="mt-6 h-12 flex items-center">

            <h2 className="text-2xl lg:text-3xl font-semibold">

              <TypeAnimation
                sequence={[
                  "Cyber Security Student",
                  2000,
                  "SOC Analyst",
                  2000,
                  "Digital Forensics",
                  2000,
                  "Network Security",
                  2000,
                  "Incident Response",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="text-cyan-400"
              />

            </h2>

          </div>

          {/* Description */}

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">

            Passionate about cybersecurity, vulnerability assessment,
            digital forensics, network security, and building practical
            security solutions through hands-on projects and continuous
            learning.

          </p>

          {/* Quick Info */}

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-gray-300">

              <FaMapMarkerAlt className="text-cyan-400" />

              <span>Gujarat, India</span>

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              <FaGraduationCap className="text-cyan-400" />

              <span>M.Sc. Cyber Security & Digital Forensics</span>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

  {/* View Projects */}

  <a
    href="#projects"
    className="bg-cyan-400 hover:bg-cyan-300 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-xl text-black font-semibold flex items-center gap-3 shadow-lg shadow-cyan-400/30"
  >
    View Projects
    <FaArrowRight />
  </a>

  {/* View Resume */}

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300 px-7 py-4 rounded-xl text-cyan-400 font-semibold flex items-center gap-3"
  >
    📄 View Resume
  </a>

  {/* Download Resume */}

  <a
    href="/resume.pdf"
    download="Kartik_Giri_Resume.pdf"
    className="bg-white/10 border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300 px-7 py-4 rounded-xl text-cyan-400 font-semibold flex items-center gap-3"
  >
    <FaDownload />
    Download Resume
  </a>

</div>

          {/* Social Icons */}

          <div className="mt-8">

            <SocialIcons />

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-14">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-400">4+</h2>
              <p className="text-gray-400 mt-2">Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-400">15+</h2>
              <p className="text-gray-400 mt-2">Certificates</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
              <p className="text-gray-400 mt-2">Security Tools</p>
            </motion.div>

          </div>

        </motion.div>

        {/* ================= RIGHT SIDE STARTS HERE ================= */}
                <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative">

            {/* Animated Rotating Glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-40 blur-2xl animate-spin-slow"></div>

            {/* Glass Background */}
            <div className="absolute inset-0 rounded-[32px] bg-white/5 backdrop-blur-md border border-cyan-400/20"></div>

            {/* Decorative Glow */}
            <div className="absolute -top-6 -left-6 w-10 h-10 bg-cyan-400 rounded-full blur-xl opacity-70 animate-pulse"></div>

            <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-blue-500 rounded-full blur-xl opacity-70 animate-pulse"></div>

            {/* Floating Profile Image */}
            <motion.img
              src="/Kartik.png"
              alt="Kartik Giri"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.04,
                rotate: 1,
              }}
              className="relative w-[360px] sm:w-[400px] lg:w-[460px] rounded-[30px] border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.45)] transition-all duration-500"
            />

            {/* Floating Cyber Badges */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 -left-10 bg-[#0B1220]/90 backdrop-blur-md border border-cyan-400/20 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-cyan-400 font-semibold text-sm">
                🔒 Security
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-12 -right-10 bg-[#0B1220]/90 backdrop-blur-md border border-cyan-400/20 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-cyan-400 font-semibold text-sm">
                🛡️ SOC
              </p>
            </motion.div>

            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 -right-14 bg-[#0B1220]/90 backdrop-blur-md border border-cyan-400/20 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-cyan-400 font-semibold text-sm">
                🌐 Network
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;