import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projectData = [
    {
      id: 1,
      title: 'IDE8 - Online IDE',
      description: 'Dev8 IDE is an intuitive and responsive online code editor built to simplify how we write, run, and manage code directly in the browser.',
      image: 'https://private-user-images.githubusercontent.com/116271292/443134217-36eacd07-77a7-452b-9c15-1e1aa3c4ef0d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3MzUzMTIsIm5iZiI6MTc2MjczNTAxMiwicGF0aCI6Ii8xMTYyNzEyOTIvNDQzMTM0MjE3LTM2ZWFjZDA3LTc3YTctNDUyYi05YzE1LTFlMWFhM2M0ZWYwZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwMDM2NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZDg5MmYyYmI2MDg5YjUzZWIzYjU3NTg2ZjVjN2UzZDMxN2YwMGQ5OWQ5MzcyNjcxNjAxMjhjZDI1YjZkOWMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.fqDbTLe3FGdSQYG2uumAjDX7D4uAShrWU76GLR3IxUw',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com/pradeepx-dev/Dev8-IDE',
      live: 'https://dev8-ide.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Morana - Movies & TV Shows',
      description: 'Morana is a sleek and user-friendly web application that allows users to explore, search, and discover movies and TV shows with ease.',
      image: 'https://private-user-images.githubusercontent.com/116271292/486934017-e5887c0f-236c-4333-a155-07560c53db3b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3MzQ5NTgsIm5iZiI6MTc2MjczNDY1OCwicGF0aCI6Ii8xMTYyNzEyOTIvNDg2OTM0MDE3LWU1ODg3YzBmLTIzNmMtNDMzMy1hMTU1LTA3NTYwYzUzZGIzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwMDMwNThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNzU2ODc5NjEwYmE1OWRkMzQzZmNlMjc2Njg1ZDU1YTJmYTY4NmJjMWU3OTVmZGZkMWIzZmU3NTJmNjJmZDFmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.L-Qd9Ce-7jH3dy_RU7vBaUqYPR61AGVbh-PpIxhgqLQ',
      technologies: ['React', 'Node', 'Express','MongoDB', 'Tailwind CSS'],
      category: 'Full Stack',
      github: 'https://github.com/pradeepx-dev/morana',
      live: 'https://morana.vercel.app',
      featured: false,
    },
    {
      id: 3,
      title: 'Wonderland',
      description: 'Wonderland, a beautifully designed hotel listing platform where users can explore and discover the perfect stay!',
      image: 'https://private-user-images.githubusercontent.com/116271292/437937030-f2333c4e-9bbf-4a87-9ed9-9629a15efbe6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3MzUzNjAsIm5iZiI6MTc2MjczNTA2MCwicGF0aCI6Ii8xMTYyNzEyOTIvNDM3OTM3MDMwLWYyMzMzYzRlLTliYmYtNGE4Ny05ZWQ5LTk2MjlhMTVlZmJlNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwMDM3NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZWIyMDAxMmI0OTkxODlmZGY4NTQ3ODhjNjRkMmZhOGE3MDhiNjYyY2U1MGIyNWU0NGFhNzkxMjk1NmZjZjgxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.euchgFQOnpqnkubn5JWS34U0uTJ8DynmZ0KjG7gxmUM',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com/pradeepx-dev/WonderLand',
      live: 'https://github.com/pradeepx-dev/WonderLand',
      featured: false,
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
      image: 'https://www.teamtweaks.com/blog/wp-content/uploads/2020/02/banner.png',
      technologies: ['React', 'Redux', 'Material UI'],
      category: 'Frontend',
      github: 'https://github.com/pradeepx-dev/reactjs-tiny-projects/tree/main/iNote%20-%20Task%20Manager',
      live: 'https://github.com/pradeepx-dev/reactjs-tiny-projects/tree/main/iNote%20-%20Task%20Manager',
      featured: false,
    },
    {
      id: 5,
      title: 'BlogWriter AI',
      description: 'A modern, responsive blog content generator web app. Utilizes OpenRouter API to create SEO-optimized blog posts based on user prompts.',
      image: 'https://private-user-images.githubusercontent.com/116271292/511882235-20f71ffc-3f98-4265-bd85-0026c561a487.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3MzUxODEsIm5iZiI6MTc2MjczNDg4MSwicGF0aCI6Ii8xMTYyNzEyOTIvNTExODgyMjM1LTIwZjcxZmZjLTNmOTgtNDI2NS1iZDg1LTAwMjZjNTYxYTQ4Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwMDM0NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YzVkMDQzYjA3ZjI0OTlmZjRkODRlMjcwZGE5NDY5ZDllMGRjYjNjMmExNDQxMzI5NjQ5NDBiOTgzYWUxNDQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.THV60u7t4CRH5JIcwVDJ_AAQzCmt8NSpKSQRl4_-IbA',
      technologies: ['React', 'Tailwind CSS', 'OpenRouter API'],
      category: 'Frontend',
      github: 'https://github.com/pradeepx-dev/BlogWriter-AI',
      live: 'https://blogwriter.pradeepx.me',
      featured: true,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive developer portfolio showcasing projects and skills (this website).',
      image: 'https://private-user-images.githubusercontent.com/116271292/444922054-474146f7-e291-43eb-9987-869dbe245906.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3MzQ4MzgsIm5iZiI6MTc2MjczNDUzOCwicGF0aCI6Ii8xMTYyNzEyOTIvNDQ0OTIyMDU0LTQ3NDE0NmY3LWUyOTEtNDNlYi05OTg3LTg2OWRiZTI0NTkwNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwMDI4NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNjJiNTI4ODUwMDExZDI3YzRmMWIzNWY3YWQzYmQ2MjJhNGU0YTZmY2RjYTlkYjM0MTlmMWYyNGQ0OWUyMjhiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bFgZs_wrF0X2jOq2KVnBlHDo-oE_XHfpYTND5O6oV3I',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
      category: 'Frontend',
      github: 'https://github.com/pradeepx-dev/pradeep-portfolio',
      live: '#',
      featured: false,
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(projectData.map(project => project.category))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute -bottom-60 -right-40 w-96 h-96 rounded-full bg-indigo-300/20 dark:bg-indigo-700/10 blur-3xl"></div>
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
            <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300">
              <Code size={16} className="inline mr-2" />
              My Work
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Explore a collection of my most significant work, showcasing my skills in creating robust, elegant, and user-centered digital solutions.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        {/* View All Projects Button */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/pradeepx-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 px-8 py-4 rounded-lg font-medium transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 group transform transition-all duration-300"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex justify-between items-center">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white bg-gray-900/80 hover:bg-gray-900 px-3 py-2 rounded-lg transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white bg-indigo-600/90 hover:bg-indigo-600 px-3 py-2 rounded-lg transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full shadow-lg">
            Featured
          </div>
        )}
        
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full border border-indigo-100 dark:border-indigo-700/50">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;