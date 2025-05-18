import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-indigo-100/20 dark:bg-indigo-900/10 blur-2xl"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-indigo-100/30 dark:bg-indigo-800/10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand and tagline */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Pradeep.
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Building exceptional digital experiences with modern technologies and elegant solutions.
            </p>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <FooterLink href="#hero">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/pradeepx-dev" icon={<Github size={18} />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/pradeepx" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://twitter.com/pradeepx_" icon={<Twitter size={18} />} label="Twitter" />
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-800 my-6"
        ></motion.div>
        
        {/* Bottom text */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center pt-2"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Pradeep Kr Maurya. All rights reserved.
          </p>
          {/* <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-3 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" fill="currentColor" /> using React & Tailwind CSS
          </p> */}
        </motion.div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm py-1"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ 
          behavior: 'smooth',
        });
      }}
    >
      {children}
    </a>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Footer;
