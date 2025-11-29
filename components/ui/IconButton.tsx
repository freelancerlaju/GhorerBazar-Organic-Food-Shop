import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  badge?: number;
  ariaLabel: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  badge,
  ariaLabel,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative flex items-center justify-center transition-all duration-300 rounded-full';
  
  const variantStyles = {
    default: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    primary: 'text-primary hover:bg-primary/10',
    secondary: 'text-secondary hover:bg-secondary/10',
    ghost: 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
  };

  const sizeStyles = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      className={combinedClassName}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
          {badge}
        </span>
      )}
    </button>
  );
};

