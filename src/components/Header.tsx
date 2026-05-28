import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/portfolio/", label: "Inicio" },
  { href: "#about", label: "Sobre mi" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Stack" },
  { href: "#focus", label: "Foco" },
  { href: "#contact", label: "Contacto" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/portfolio/" className="text-2xl font-bold gradient-text">
            Nahuel<span className="text-white"> Adema</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://github.com/NahueAdema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nahuel-adema-6627a3304/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        <aside
          className={`absolute right-0 top-0 flex h-dvh w-[min(88vw,24rem)] flex-col overflow-y-auto border-l border-white/10 bg-dark/95 px-6 py-5 shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="/portfolio/"
              onClick={closeMenu}
              className="text-2xl font-bold gradient-text"
            >
              Nahuel<span className="text-white"> Adema</span>
            </a>
            <button
              onClick={closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Cerrar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-gray-400">Full Stack Developer</p>
            <p className="mt-1 text-lg font-semibold text-white">
              Web apps, APIs e IA aplicada.
            </p>
          </div>

          <nav className="mt-8 flex flex-1 flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-lg font-medium text-gray-200 transition-colors hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="h-2 w-2 rounded-full bg-primary-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-5">
            <a
              href="#contact"
              onClick={closeMenu}
              className="mb-5 inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-5 py-3 font-medium text-white transition-colors hover:bg-primary-700"
            >
              Hablemos
            </a>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/NahueAdema"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nahuel-adema-6627a3304/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
