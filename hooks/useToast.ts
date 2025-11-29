import { toast } from 'react-toastify';

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    const toastOptions = {
      position: 'bottom-right' as const,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toast-message',
    };

    switch (type) {
      case 'success':
        toast.success(message, toastOptions);
        break;
      case 'error':
        toast.error(message, toastOptions);
        break;
      case 'info':
        toast.info(message, toastOptions);
        break;
      case 'warning':
        toast.warning(message, toastOptions);
        break;
      default:
        toast(message, toastOptions);
    }
  };

  return {
    showToast,
  };
};

