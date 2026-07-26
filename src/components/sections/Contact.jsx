import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}

Email: ${formData.email}

----------------------------------------

${formData.message}`
    );

    window.location.href =
      `mailto:goswamikartikgiri8@gmail.com?subject=${subject}&body=${body}`;

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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

            I'm currently available for internships,
            SOC Analyst (L1),
            VAPT,
            Digital Forensics,
            Network Security,
            and Cybersecurity opportunities.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 flex items-center gap-5">

              <FaEnvelope className="text-cyan-400 text-3xl" />

              <div>

                <h3 className="font-bold">

                  Email

                </h3>

                <a
                  href="mailto:goswamikartikgiri8@gmail.com"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  goswamikartikgiri8@gmail.com
                </a>

              </div>

            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 flex items-center gap-5">

              <FaPhone className="text-cyan-400 text-3xl" />

              <div>

                <h3 className="font-bold">

                  Phone

                </h3>

                <a
                  href="tel:+917096094140"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  +91 7096094140
                </a>

              </div>

            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 flex items-center gap-5">

              <FaMapMarkerAlt className="text-cyan-400 text-3xl" />

              <div>

                <h3 className="font-bold">

                  Location

                </h3>

                <p className="text-gray-400">

                  Gujarat, India

                </p>

              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/GoswamiKartikgiri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/10 p-5 rounded-xl text-2xl transition"
              >

                <FaGithub />

              </a>

              <a
                href="https://www.linkedin.com/in/goswami-kartikgiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/10 p-5 rounded-xl text-2xl transition"
              >

                <FaLinkedin />

              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8 space-y-6"
          >
                        <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#0b1120] border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0b1120] border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#0b1120] border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 resize-none transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 transition text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02]"
            >
              <FaPaperPlane />

              Send Message

            </button>

            {success && (

              <div className="rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 p-4">

                ✅ Your email application has been opened.
                <br />
                Please click <strong>Send</strong> to deliver your message.

              </div>

            )}

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;