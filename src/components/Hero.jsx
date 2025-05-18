import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Code, ExternalLink } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#grid-gradient)" d="M0 50 L100 0 L100 100 Z" />
        </svg>
        
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-400/30 dark:bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute -bottom-60 -left-40 w-96 h-96 rounded-full bg-indigo-300/20 dark:bg-indigo-700/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-title */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700"
          >
            <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300">Full Stack Developer</span>
          </motion.div>
          
          {/* Main title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          >
            Pradeep Kr Maurya
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I build <span className="font-semibold text-indigo-700 dark:text-indigo-300">exceptional digital experiences</span> with modern technologies, focused on crafting elegant solutions to complex problems.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Code size={20} />
              View Projects
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 px-8 py-4 rounded-lg font-medium transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
              <ExternalLink size={18} />
            </motion.button>
          </motion.div>
          
          {/* Tech Stack Pills */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'].map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm"
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-5 mb-10"
          >
            <SocialLink href="https://github.com/pradeepx-dev" icon={<Github size={22} />} />
            <SocialLink href="https://linkedin.com/in/pradeepx" icon={<Linkedin size={22} />} />
            <SocialLink href="https://twitter.com/pradeepx_" icon={<Twitter size={22} />} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="text-indigo-600 dark:text-indigo-400" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Hero;