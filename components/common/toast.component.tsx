"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type ToastProps = {
  message: string;
  isVisible: boolean;
  isError?: boolean; // New prop to detect errors
  onClose: () => void;
};

const Toast = ({
  message,
  isVisible,
  isError = false,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          // Conditional styling based on isError prop
          className={`fixed top-16 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
            isError ? "bg-white text-black" : "bg-tertiary text-white"
          }`}>
          <div className="flex items-center justify-between">
            <p>{message}</p>
            <button
              onClick={onClose}
              className="ml-4 font-bold hover:text-gray-200">
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
