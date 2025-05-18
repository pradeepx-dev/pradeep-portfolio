import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers,  } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <Terminal className="text-yellow-500" size={32} /> },
    { name: 'React', icon: <Terminal className="text-blue-500" size={32} /> },
    { name: 'Node.js', icon: <Terminal className="text-green-600" size={32} /> },
    { name: 'MongoDB', icon: <Terminal className="text-green-500" size={32} /> },
    { name: 'Express.js', icon: <Terminal className="text-gray-500" size={32} /> },
    { name: 'CSS', icon: <Terminal className="text-blue-600" size={32} /> },
    { name: 'HTML5', icon: <Terminal className="text-orange-600" size={32} /> },
    { name: 'TypeScript', icon: <Terminal className="text-blue-700" size={32} /> },
    { name: 'Redux', icon: <Terminal className="text-purple-600" size={32} /> },
    { name: 'Git', icon: <Terminal className="text-orange-700" size={32} /> },
    { name: 'RESTful APIs', icon: <Terminal className="text-teal-600" size={32} /> },
    { name: 'Supabase', icon: <Terminal className="text-emerald-600" size={32} /> },
  ];

  const frameworksAndTools = [
    'Tailwind CSS',
    'Material UI',
    'Bootstrap',
    'Shadcn/UI',
    'AWS',
    'WordPress',
    'Firebase',
    'Figma',
    'Storybook',
    'Next.js',
    'Redux Toolkit',
  ];

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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-300/10 dark:bg-indigo-700/5 blur-3xl"></div>
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
            <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300">What I work with</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          >
            Tech Stack
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"
          ></motion.div>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Here's a glance at the technologies I regularly use to build powerful web applications and solve complex problems.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 group"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                {skill.icon}
              </div>
              <div className="text-gray-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8">
            {/* <Tool size={24} className="mr-3 text-indigo-600 dark:text-indigo-400" /> */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
              Frameworks & Tools
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {frameworksAndTools.map((item, index) => (
              <motion.span
                key={index}
                className="px-5 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-md border border-gray-100 dark:border-gray-700 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Optional Statistics Section */}
        {/* <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+ Years</div>
            <div className="text-gray-700 dark:text-gray-300">Experience</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</div>
            <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">99%</div>
            <div className="text-gray-700 dark:text-gray-300">Client Satisfaction</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;