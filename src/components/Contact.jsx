import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader, Send, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    // This is optional but recommended for better error tracking
    emailjs.init("b2vRBmSzQ2rwQhc3a");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        'service_cxw4lpe',         // service_id
        'template_q7r44q5',         // template_id
        formRef.current,
        'b2vRBmSzQ2rwQhc3a'       // user_id / public key
      );
      
      console.log('Email successfully sent!', result.text);
      showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      transition: { staggerChildren: 0.2 }
    }
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'pradeepx135@gmail.com',
      link: 'mailto:pradeepx135@gmail.com',
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+91 7985319903',
      link: 'tel:+917985319903',
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'Utter Pradesh, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/pradeepx-dev',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/pradeepx',
    },
    {
      id: 3,
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://x.com/pradeepx_',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-400/30 dark:bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute -bottom-60 -left-40 w-96 h-96 rounded-full bg-indigo-300/20 dark:bg-indigo-700/10 blur-3xl"></div>
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
              <Mail size={16} className="inline mr-2" />
              Get in Touch
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          >
            Let's Connect
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Card */}
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col justify-between flex-direction-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 mb-10"
            >
              {contactInfo.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={fadeInUp}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Find me on</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/30 disabled:opacity-70 w-full md:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Map or Additional Info Section */}
      <motion.div 
        className="container mx-auto px-6 md:px-12 mt-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-indigo-600/10 dark:bg-indigo-900/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-indigo-100 dark:border-indigo-800/50">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Looking for a developer?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time opportunities.
            If you're looking for a developer to join your team or build your next project,
            I'd love to discuss how I can help bring your ideas to life.
          </p>
          <motion.a
            href="mailto:pradeepx135@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in touch for opportunities
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;