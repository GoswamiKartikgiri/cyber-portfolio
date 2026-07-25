import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCertificate,
  FaTools,
  FaUserShield,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaProjectDiagram />,
    number: "3+",
    title: "Featured Projects",
    description: "Real-world cybersecurity projects built using Python and security tools.",
  },
  {
    icon: <FaCertificate />,
    number: "17+",
    title: "Certifications",
    description: "Industry-recognized certifications and virtual job simulations.",
  },
  {
    icon: <FaTools />,
    number: "20+",
    title: "Technical Skills",
    description: "Cybersecurity, networking, programming, and digital forensics skills.",
  },
  {
    icon: <FaUserShield />,
    number: "SOC",
    title: "Career Goal",
    description: "Aspiring SOC Analyst focused on detection, analysis, and incident response.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-[#050816] py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[4px]">
            Highlights
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Achievements
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            A quick overview of my cybersecurity journey, showcasing projects,
            certifications, technical expertise, and career aspirations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 text-center hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-4 text-cyan-400">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-4 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;