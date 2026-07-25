import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-16 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            I'm currently available for internships, entry-level SOC Analyst,
            VAPT, Digital Forensics, and Cybersecurity opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 flex gap-5 items-center">
              <FaEnvelope className="text-cyan-400 text-3xl" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">
                  goswamikartikgiri8@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 flex gap-5 items-center">
              <FaPhone className="text-cyan-400 text-3xl" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">
                  +91 7096094140
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 flex gap-5 items-center">
              <FaMapMarkerAlt className="text-cyan-400 text-3xl" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-400">
                  Gujarat, India
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-8">

              <a
                href="https://github.com/GoswamiKartikgiri"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-cyan-500/20 hover:border-cyan-400 p-5 rounded-xl text-2xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/goswami-kartikgiri/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-cyan-500/20 hover:border-cyan-400 p-5 rounded-xl text-2xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#0b1120] border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#0b1120] border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#0b1120] border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <button
              type="button"
              className="bg-cyan-400 hover:bg-cyan-300 transition text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-3"
            >
              Send Message
              <FaPaperPlane />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;