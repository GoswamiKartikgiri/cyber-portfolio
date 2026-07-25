import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-cyan-400/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3 text-2xl font-bold"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center text-black">
              <Shield size={22} />
            </div>

            <span>
              Kartik
              <span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-cyan-400 transition group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

          </nav>

          {/* Resume Button */}

          <a
            href="/resume.pdf"
            className="hidden lg:flex px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
          >
            Resume
          </a>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#0A0F1F]/95 backdrop-blur-xl border-t border-cyan-400/10">

          <div className="flex flex-col py-6">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
              >
                {link.name}
              </a>

            ))}

            <a
              href="/resume.pdf"
              className="mx-8 mt-5 py-3 rounded-xl bg-cyan-400 text-black text-center font-semibold"
            >
              Download Resume
            </a>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;