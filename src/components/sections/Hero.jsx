import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCircle,
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
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

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Status Badge */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-lg"
          >
            <FaCircle className="text-green-400 text-[10px] animate-pulse" />

            <span className="text-green-300 font-medium text-sm tracking-wide">
              Open to Cybersecurity Opportunities
            </span>
          </motion.div>

          {/* Greeting */}

          <p className="text-cyan-400 text-lg mt-8">
            👋 Hello, I'm
          </p>

          {/* Name */}

          <h1 className="text-5xl lg:text-7xl font-black mt-2 leading-tight">

            Kartik

            <br />

            <span className="text-cyan-400">
              Giri
            </span>

          </h1>

          {/* Animated Title */}

          <div className="h-14 mt-7">

            <TypeAnimation
              sequence={[
                "Cyber Security Student",
                1800,
                "SOC Analyst",
                1800,
                "Digital Forensics",
                1800,
                "Network Security",
                1800,
                "Incident Response",
                1800,
                "Vulnerability Assessment",
                1800,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={55}
              className="text-2xl lg:text-3xl font-semibold text-cyan-400"
            />

          </div>

          {/* Description */}

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">

            Passionate cybersecurity student focused on building practical,
            recruiter-ready security projects. My interests include
            network security, SOC operations, vulnerability assessment,
            digital forensics, authentication systems, and security
            automation using Python.

          </p>

          {/* Quick Info */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <FaMapMarkerAlt className="text-cyan-400 text-lg" />

              <span className="text-gray-300">
                Gujarat, India
              </span>

            </div>

            <div className="flex items-center gap-4">

              <FaGraduationCap className="text-cyan-400 text-lg" />

              <span className="text-gray-300">
                M.Sc. Cyber Security & Digital Forensics
              </span>

            </div>

            <div className="flex items-center gap-4">

              <FaShieldAlt className="text-cyan-400 text-lg" />

              <span className="text-gray-300">
                Building Real-World Cybersecurity Projects
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="group bg-cyan-400 text-black font-bold px-7 py-4 rounded-xl hover:bg-cyan-300 transition duration-300 flex items-center gap-3 shadow-lg shadow-cyan-400/20"
            >
              View Projects

              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 font-semibold px-7 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download="Kartik_Giri_Resume.pdf"
              className="border border-white/20 bg-white/5 px-7 py-4 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-3"
            >
              <FaDownload />

              Download
            </a>

          </div>

          <div className="mt-10">
            <SocialIcons />
          </div>
                    {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-14">

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-400">
                4+
              </h2>

              <p className="text-gray-400 mt-2">
                Projects
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-400">
                15+
              </h2>

              <p className="text-gray-400 mt-2">
                Certificates
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-400">
                10+
              </h2>

              <p className="text-gray-400 mt-2">
                Security Tools
              </p>

            </motion.div>

          </div>

        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center items-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-3xl opacity-40 animate-spin-slow"></div>

            {/* Glass */}

            <div className="absolute inset-0 rounded-[34px] bg-white/5 backdrop-blur-xl border border-cyan-400/20"></div>

            {/* Floating Dots */}

            <div className="absolute -top-5 -left-5 w-8 h-8 rounded-full bg-cyan-400 blur-xl opacity-80 animate-pulse"></div>

            <div className="absolute -bottom-5 -right-5 w-8 h-8 rounded-full bg-blue-500 blur-xl opacity-80 animate-pulse"></div>

            {/* Image */}

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
                scale: 1.03,
                rotate: 1,
              }}
              className="relative w-[360px] sm:w-[400px] lg:w-[470px] rounded-[30px] border-4 border-cyan-400 shadow-[0_0_70px_rgba(34,211,238,.45)]"
            />

            {/* Security */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-6 -left-10 bg-[#0B1220]/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl px-5 py-3 shadow-xl"
            >

              <p className="text-cyan-400 font-semibold">
                🔒 Security
              </p>

              <span className="text-xs text-gray-400">
                Secure Development
              </span>

            </motion.div>

            {/* SOC */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 -right-10 bg-[#0B1220]/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl px-5 py-3 shadow-xl"
            >

              <p className="text-cyan-400 font-semibold">
                🛡️ SOC
              </p>

              <span className="text-xs text-gray-400">
                Blue Team
              </span>

            </motion.div>

            {/* Network */}

            <motion.div
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-1/2 -right-14 bg-[#0B1220]/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl px-5 py-3 shadow-xl"
            >

              <p className="text-cyan-400 font-semibold">
                🌐 Network
              </p>

              <span className="text-xs text-gray-400">
                Traffic Analysis
              </span>

            </motion.div>

            {/* GitHub */}

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-5 left-5"
            >

              <a
                href="https://github.com/GoswamiKartikgiri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-xl border border-cyan-400/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaGithub size={24} />
              </a>

            </motion.div>

            {/* LinkedIn */}

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute top-5 right-5"
            >

              <a
                href="https://www.linkedin.com/in/goswami-kartikgiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-xl border border-cyan-400/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaLinkedin size={22} />
              </a>

            </motion.div>
                      </div>

        </motion.div>

      </div>

      {/* Background Decorations */}

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px]"
        />

      </div>

    </section>
  );
}

export default Hero;