import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code, User, Briefcase, Mail, Home } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const navbarHeight = 80;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= navbarHeight + 100 && rect.bottom >= navbarHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    // Use setTimeout to ensure the mobile menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.error(`Element with ID "${sectionId}" not found`);
        return;
      }
      
      const navbarHeight = 80;
      const targetScroll = element.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }, 100); // Small delay to allow menu closing animation to start
  };

  // Map section names to icons
  const sectionIcons = {
    hero: <Home size={18} />,
    about: <User size={18} />,
    skills: <Code size={18} />,
    projects: <Briefcase size={18} />,
    contact: <Mail size={18} />
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-gray-200/20 dark:shadow-black/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            style={{ cursor: 'pointer' }}
          >
            Pradeep.
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink 
                active={activeSection === 'hero'} 
                onClick={() => scrollToSection('hero')}
              >
                Home
              </NavLink>
              <NavLink 
                active={activeSection === 'about'} 
                onClick={() => scrollToSection('about')}
              >
                About
              </NavLink>
              <NavLink 
                active={activeSection === 'skills'} 
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </NavLink>
              <NavLink 
                active={activeSection === 'projects'} 
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </NavLink>
              <NavLink 
                active={activeSection === 'contact'} 
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </NavLink>
            </div>
          
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-3 md:hidden">
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl px-6 py-5 border-t border-gray-100 dark:border-gray-800 absolute top-full left-0 right-0 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <MobileNavLink 
                  key={section}
                  active={activeSection === section}
                  onClick={() => scrollToSection(section)}
                  icon={sectionIcons[section]}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </MobileNavLink>
              ))}
              
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <a 
                  href="https://drive.google.com/file/d/1_Wx0_307wymL7AdPOwhC-Oh-ae8zqYoT/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30"
                >
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLink = ({ children, onClick, active }) => {
  return (
    <motion.button
      className={`relative font-medium transition-colors ${
        active 
          ? 'text-indigo-600 dark:text-indigo-400' 
          : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {active && (
        <motion.div 
          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
          layoutId="activeNavIndicator"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

const MobileNavLink = ({ children, onClick, active, icon }) => {
  return (
    <motion.button
      className={`flex items-center space-x-3 w-full py-3 px-4 rounded-lg transition-colors ${
        active 
          ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium' 
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
      onClick={onClick}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={active ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}>
        {icon}
      </span>
      <span>{children}</span>
    </motion.button>
  );
};

export default Navbar;