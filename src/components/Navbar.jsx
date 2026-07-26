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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3 group"
          >

            <div className="w-11 h-11 rounded-xl bg-cyan-400 text-black flex items-center justify-center group-hover:rotate-12 transition">

              <Shield size={22} />

            </div>

            <div>

              <h2 className="text-xl font-bold">

                Kartik
                <span className="text-cyan-400">.</span>

              </h2>

              <p className="text-xs text-gray-400">

                Cyber Security

              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-cyan-400 font-medium transition group"
              >

                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ))}

          </nav>

          {/* Resume */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 hover:scale-105 transition"
          >

            Resume

          </a>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >

            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#08111f]/95 backdrop-blur-xl border-t border-cyan-500/10">

          <div className="flex flex-col py-6">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition"
              >

                {link.name}

              </a>

            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mx-8 mt-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-center hover:bg-cyan-300 transition"
            >

              View Resume

            </a>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;