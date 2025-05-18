import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, X, Info } from 'lucide-react';

// Toast variants
const toastVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95 }
};

const Toast = ({ 
  message, 
  type = 'default', 
  title, 
  onClose, 
  duration = 5000, 
  position = 'bottom',
  isVisible = true
}) => {
  // Auto-dismiss toast after specified duration
  useEffect(() => {
    if (isVisible && onClose && duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  // Configure toast styles and icons based on type
  const getToastConfig = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600',
          borderColor: 'border-green-300 dark:border-green-700',
          iconBg: 'bg-green-100 dark:bg-green-900/30',
          icon: <CheckCircle size={20} className="text-green-500 dark:text-green-400" />
        };
      case 'error':
        return {
          bgColor: 'bg-gradient-to-r from-red-500 to-rose-500 dark:from-red-600 dark:to-rose-600',
          borderColor: 'border-red-300 dark:border-red-700',
          iconBg: 'bg-red-100 dark:bg-red-900/30',
          icon: <XCircle size={20} className="text-red-500 dark:text-red-400" />
        };
      case 'warning':
        return {
          bgColor: 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600', 
          borderColor: 'border-amber-300 dark:border-amber-700',
          iconBg: 'bg-amber-100 dark:bg-amber-900/30',
          icon: <AlertCircle size={20} className="text-amber-500 dark:text-amber-400" />
        };
      case 'info':
        return {
          bgColor: 'bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-600 dark:to-violet-600',
          borderColor: 'border-indigo-300 dark:border-indigo-700',
          iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
          icon: <Info size={20} className="text-indigo-500 dark:text-indigo-400" />
        };
      default:
        return {
          bgColor: 'bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900',
          borderColor: 'border-gray-300 dark:border-gray-700',
          iconBg: 'bg-gray-100 dark:bg-gray-800',
          icon: <Info size={20} className="text-gray-500 dark:text-gray-400" />
        };
    }
  };

  const config = getToastConfig();
  
  // Position styles
  const positionStyles = {
    top: 'top-6',
    bottom: 'bottom-6',
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6'
  };

  // Determine the position class
  const positionClass = position.includes('-') 
    ? positionStyles[position]
    : `${positionStyles[position]} left-1/2 transform -translate-x-1/2`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed z-50 ${positionClass}`}
          variants={toastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            duration: 0.3
          }}
        >
          <div className={`flex items-center overflow-hidden max-w-md rounded-lg shadow-xl ${
            type === 'default' 
              ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700' 
              : 'text-white'
          }`}>
            {/* Colored Bar */}
            <div className={`${config.bgColor} w-1.5 self-stretch`}></div>
            
            <div className="flex items-center p-4 min-w-0">
              {/* Icon */}
              <div className={`flex-shrink-0 p-1 rounded-full mr-3 ${
                type === 'default' ? '' : config.iconBg
              }`}>
                {config.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                {title && (
                  <h3 className={`font-medium text-sm ${
                    type === 'default' 
                      ? 'text-gray-900 dark:text-gray-100' 
                      : 'text-white'
                  }`}>
                    {title}
                  </h3>
                )}
                <p className={`text-sm ${
                  type === 'default' 
                    ? 'text-gray-600 dark:text-gray-300' 
                    : 'text-white/90'
                } ${title ? 'mt-1' : ''}`}>
                  {message}
                </p>
              </div>
              
              {/* Close Button */}
              {onClose && (
                <button 
                  onClick={onClose}
                  className={`ml-3 p-1 rounded-full ${
                    type === 'default'
                      ? 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                      : 'text-white/70 hover:text-white bg-white/10 hover:bg-white/20'
                  } transition-colors`}
                  aria-label="Close notification"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Toast;