import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sale' | 'hot' | 'new' | 'discount' | 'default';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) => {
  const baseStyles = 'font-bold rounded-full text-white shadow-sm';
  
  const variantStyles = {
    sale: 'bg-secondary',
    hot: 'bg-orange-500',
    new: 'bg-blue-500',
    discount: 'bg-green-500',
    default: 'bg-gray-500'
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-1',
    md: 'text-xs px-3 py-1.5'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <span className={combinedClassName}>
      {children}
    </span>
  );
};

