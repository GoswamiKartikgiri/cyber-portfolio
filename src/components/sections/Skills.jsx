import { motion } from "framer-motion";
import {
  FaPython,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiWireshark,
  SiBurpsuite,
  SiMysql,
} from "react-icons/si";

const cyberSkills = [
  { name: "Network Security", level: 90 },
  { name: "SOC Operations", level: 85 },
  { name: "Digital Forensics", level: 82 },
  { name: "Vulnerability Assessment", level: 88 },
  { name: "Incident Response", level: 80 },
  { name: "Threat Analysis", level: 78 },
];

const programming = [
  {
    icon: <FaPython className="text-yellow-400" />,
    name: "Python",
  },
  {
    icon: <FaHtml5 className="text-orange-500" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-300" />,
    name: "JavaScript",
  },
  {
    icon: <SiMysql className="text-blue-400" />,
    name: "SQL",
  },
];

const securityTools = [
  {
    icon: <SiWireshark className="text-blue-400" />,
    name: "Wireshark",
  },
  {
    icon: <SiBurpsuite className="text-orange-400" />,
    name: "Burp Suite",
  },
  {
    icon: <FaLinux className="text-gray-200" />,
    name: "Linux",
  },
  {
    icon: <FaGitAlt className="text-orange-500" />,
    name: "Git",
  },
];

const extraTools = [
  "Nmap",
  "Autopsy",
  "FTK Imager",
  "Snort",
  "TCPView",
  "Regshot",
  "Event Viewer",
  "Cisco Packet Tracer",
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050816] py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="text-cyan-400 uppercase tracking-[4px]">
            Technical Expertise
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Technical Skills & Security Tools
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            Hands-on experience in cybersecurity,
            digital forensics, network security,
            vulnerability assessment, incident response,
            and security automation using industry-standard
            tools and modern technologies.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {/* Cybersecurity */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Cybersecurity
            </h3>

            <div className="space-y-6">

              {cyberSkills.map((skill) => (

                <div key={skill.name}>

                  <div className="flex justify-between mb-2">

                    <span>{skill.name}</span>

                    <span className="text-cyan-400">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="h-2 bg-[#16203B] rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-full bg-cyan-400 rounded-full"
                    />

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

                    {/* Programming */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Programming
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {programming.map((item) => (

                <motion.div
                  key={item.name}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  className="bg-[#0c1225] rounded-2xl p-5 border border-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center"
                >

                  <div className="text-5xl mb-4">
                    {item.icon}
                  </div>

                  <p className="font-medium">
                    {item.name}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Security Tools */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Security Tools
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {securityTools.map((tool) => (

                <motion.div
                  key={tool.name}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  className="bg-[#0c1225] rounded-2xl p-5 border border-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center"
                >

                  <div className="text-5xl mb-4">
                    {tool.icon}
                  </div>

                  <p className="font-medium">
                    {tool.name}
                  </p>

                </motion.div>

              ))}

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              {extraTools.map((tool) => (

                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Skills;