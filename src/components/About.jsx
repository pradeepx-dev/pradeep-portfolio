import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, Users, BookOpen, Terminal } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skills = [
    { name: 'MongoDB', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const highlights = [
    { 
      icon: <Code size={20} />,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with the MERN stack'
    },
    { 
      icon: <Award size={20} />,
      title: 'Competitive Coder',
      description: '3-star rating on CodeChef and Specialist rank on Codeforces'
    },
    { 
      icon: <Users size={20} />,
      title: 'Leadership',
      description: 'Decision Head of the Innovators Club at my college'
    },
    { 
      icon: <BookOpen size={20} />,
      title: 'Content Creation',
      description: 'Technical writer for GeeksforGeeks'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute -bottom-60 -right-40 w-96 h-96 rounded-full bg-indigo-300/10 dark:bg-indigo-700/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700"
          >
            <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300">Get to know me</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="w-full max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Pradeep Kr Maurya</span>
            </motion.h3>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              A passionate Full Stack Developer experienced in building applications with the MERN stack. Currently pursuing my bachelor's degree in Computer Science and Engineering, I specialize in creating scalable and intuitive web applications.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Beyond development, I lead as the Decision Head of the Innovators Club at my college, mentoring juniors in web development and organizing tech events. I've built projects like <span className="font-medium text-indigo-700 dark:text-indigo-300">Dev8 IDE</span>, a browser-based coding platform, and contributed articles to GeeksforGeeks.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-start"
                >
                  <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg text-indigo-600 dark:text-indigo-400">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{highlight.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={fadeInUp} className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Terminal size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Technical Skills
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-10"
            >
              <motion.button
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <a 
                  href="https://drive.google.com/file/d/1_Wx0_307wymL7AdPOwhC-Oh-ae8zqYoT/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
                {/* <p onClick={() => window.open('https://drive.google.com/file/d/1_Wx0_307wymL7AdPOwhC-Oh-ae8zqYoT/view?usp=drive_link', '_blank')}>View Resume</p> */}
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L12 8M12 16L9 13M12 16L15 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;