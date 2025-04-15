import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  // Handle scroll event to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for the navbar
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.1
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-primary">JD</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-slate-900 px-4 pt-2 pb-4 shadow-md"
        >
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 w-full mt-2"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
