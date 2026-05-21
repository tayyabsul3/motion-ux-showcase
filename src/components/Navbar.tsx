import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  // Scrollspy logic to set active nav item
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeUrl = "https://drive.google.com/file/d/11WWXD4orEvWtykC3UTzFU7_as-fX8DJk/view?usp=drive_link";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 py-3 md:py-4 px-4 sm:px-6 ${
        scrolled
          ? "bg-slate-950/60 dark:bg-slate-950/40 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Glowing Logo */}
        <a href="#home" className="flex items-center group relative">
          <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-primary to-indigo-300 dark:from-indigo-400 dark:to-primary tracking-wider transition-transform duration-300 group-hover:scale-105">
            MT.
          </span>
          <div className="absolute -inset-1 rounded-lg bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-white/5 p-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary/80 rounded-full border border-white/10 -z-10 shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Resume CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="bg-primary/95 text-white hover:bg-primary border border-white/10 glass-glow-hover rounded-full px-5 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-300"
            onClick={() => window.open(resumeUrl, "_blank")}
          >
            Resume
            <ArrowUpRight size={14} className="ml-1" />
          </Button>
        </div>

        {/* Mobile Toggles */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white hover:bg-white/5 rounded-full"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 backdrop-blur-xl py-6 px-6 flex flex-col gap-4 shadow-2xl z-40"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-primary/20 text-white border border-white/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </a>
                );
              })}
            </nav>
            <Button
              className="bg-primary hover:bg-primary/95 border border-white/10 w-full rounded-xl py-4 font-bold text-xs uppercase tracking-widest mt-2"
              onClick={() => {
                setIsOpen(false);
                window.open(resumeUrl, "_blank");
              }}
            >
              Resume <ArrowUpRight size={14} className="ml-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
