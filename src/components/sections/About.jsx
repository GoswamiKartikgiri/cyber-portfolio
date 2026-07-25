import { motion } from "framer-motion";
import { FaUserGraduate, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-[#070B1A] py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Who I Am
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8 text-lg">
            I'm Kartik Giri, an MSc Cyber Security & Digital Forensics student
            passionate about protecting systems, investigating cyber incidents,
            and building practical cybersecurity projects. My focus is on
            Network Security, VAPT, SOC operations, Python automation, and
            Digital Forensics.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8"
          >
            <FaUserGraduate className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-semibold">
              Education
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              MSc Cyber Security & Digital Forensics
              <br />
              Institute of Advanced Research (IAR), Gandhinagar
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8"
          >
            <FaShieldAlt className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-semibold">
              Cybersecurity Focus
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              SOC Operations,
              Vulnerability Assessment,
              Digital Forensics,
              Network Security,
              Incident Response.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8"
          >
            <FaLaptopCode className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-semibold">
              Technical Skills
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Python,
              Wireshark,
              Nmap,
              Linux,
              Burp Suite,
              Git,
              Networking.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;