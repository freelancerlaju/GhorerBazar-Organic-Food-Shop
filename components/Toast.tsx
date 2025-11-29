import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div 
      className={`fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-auto sm:right-4 md:bottom-6 md:right-6 z-[9999] ${
        show ? 'animate-toast-enter' : 'animate-toast-exit pointer-events-none'
      }`}
      style={{
        maxWidth: 'calc(100vw - 1.5rem)',
        width: 'auto',
      }}
    >
      <div className="relative bg-gray-900 border-l-4 border-green-500 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Content Container */}
        <div className="px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 flex items-start gap-2 sm:gap-3 md:gap-4">
          {/* Success Icon with Animation */}
          <div className="flex-shrink-0 mt-0.5">
            <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-green-500/20 flex items-center justify-center transition-all duration-500 ${
              show ? 'animate-icon-bounce' : ''
            }`}>
              <i className={`fa-solid fa-check text-green-400 text-[10px] sm:text-xs md:text-sm transition-all duration-500 ${
                show ? 'animate-checkmark' : ''
              }`}></i>
            </div>
          </div>
          
          {/* Message with Fade In */}
          <div className={`flex-1 min-w-0 transition-all duration-500 delay-100 ${
            show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}>
            <p className="text-xs sm:text-sm md:text-base font-medium text-white leading-relaxed break-words">
              {message}
            </p>
          </div>
          
          {/* Close Button with Hover Animation */}
          <button
            onClick={onClose}
            className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded hover:bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Close notification"
          >
            <i className="fa-solid fa-xmark text-[10px] sm:text-xs transition-transform duration-200"></i>
          </button>
        </div>
        
        {/* Animated Progress Bar with Smooth Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700 overflow-hidden">
          <div 
            className={`h-full bg-green-500 transition-all duration-100 ${
              show ? 'animate-progress-smooth' : ''
            }`}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes toast-enter {
          0% {
            opacity: 0;
            transform: translateX(100%) translateY(10px) scale(0.9);
          }
          60% {
            transform: translateX(-5px) translateY(0) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }
        
        @keyframes toast-exit {
          0% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(100%) translateY(-10px) scale(0.9);
          }
        }
        
        @keyframes icon-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes checkmark {
          0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes progress-smooth {
          0% {
            width: 100%;
            opacity: 1;
          }
          99% {
            opacity: 1;
          }
          100% {
            width: 0%;
            opacity: 0;
          }
        }
        
        .animate-toast-enter {
          animation: toast-enter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-toast-exit {
          animation: toast-exit 0.3s ease-in forwards;
        }
        
        .animate-icon-bounce {
          animation: icon-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-checkmark {
          animation: checkmark 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-progress-smooth {
          animation: progress-smooth 4s linear forwards;
        }
      `}</style>
    </div>
  );
};