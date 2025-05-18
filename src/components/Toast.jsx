import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const toastVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const Toast = ({ message, type }) => {
  const bgColor =
    type === 'success'
      ? 'bg-green-500'
      : type === 'error'
      ? 'bg-red-500'
      : 'bg-gray-700';

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white rounded-md shadow-lg ${bgColor}`}
        variants={toastVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
