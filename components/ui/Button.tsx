import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-green-700 shadow-lg shadow-green-600/20 hover:shadow-green-600/30',
    secondary: 'bg-secondary text-white hover:bg-orange-600 shadow-lg shadow-orange-600/20',
    outline: 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    success: 'bg-green-600 text-white hover:bg-green-700'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-2xl'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <i className="fa-solid fa-spinner fa-spin"></i>
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

