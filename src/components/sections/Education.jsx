import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
} from "lucide-react";

function Education() {
  return (
    <section
      id="education"
      className="bg-[#050816] py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-cyan-400">
            Academic Journey
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Education
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8 text-lg">
            My academic journey combines a strong computer science
            foundation with specialized education in cybersecurity
            and digital forensics. Through practical labs,
            coursework, and real-world projects, I continue
            strengthening my technical and analytical skills.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* MSc */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
          >

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-500/10 p-4 rounded-full">
                <GraduationCap
                  size={34}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Master of Science
                </h3>

                <p className="text-cyan-400">
                  Cyber Security & Digital Forensics
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <BookOpen
                  size={18}
                  className="text-cyan-400"
                />
                Institute of Advanced Research (IAR),
                Gandhinagar
              </div>

              <div className="flex items-center gap-3">
                <Calendar
                  size={18}
                  className="text-cyan-400"
                />
                2025 – Present
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-cyan-400"
                />
                Gujarat, India
              </div>

            </div>

            <div className="mt-8">
              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                Pursuing
              </span>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-cyan-400 mb-4">
                Key Coursework
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "Network Security",
                  "Digital Forensics",
                  "VAPT",
                  "Incident Response",
                  "Malware Analysis",
                  "Secure Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#0c1225] border border-cyan-500/20"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </motion.div>

          {/* BCA */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-cyan-500/10 p-4 rounded-full">
                <GraduationCap
                  size={34}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Bachelor of Computer Applications
                </h3>

                <p className="text-cyan-400">
                  Marwadi University
                </p>
              </div>

            </div>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <BookOpen
                  size={18}
                  className="text-cyan-400"
                />
                Rajkot, Gujarat
              </div>

              <div className="flex items-center gap-3">
                <Calendar
                  size={18}
                  className="text-cyan-400"
                />
                2022 – 2025
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-cyan-400"
                />
                Gujarat, India
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
                Completed
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                CGPA 7.61 / 10
              </span>

            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-cyan-400 mb-4">
                Core Subjects
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "Programming",
                  "Data Structures",
                  "Computer Networks",
                  "DBMS",
                  "Operating Systems",
                  "Web Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#0c1225] border border-cyan-500/20"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >

          {[
            ["Current Degree", "M.Sc."],
            ["Completed", "BCA"],
            ["CGPA", "7.61/10"],
            ["Specialization", "Cyber Security"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {value}
              </h3>

              <p className="text-gray-400 mt-2">
                {title}
              </p>
            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Education;