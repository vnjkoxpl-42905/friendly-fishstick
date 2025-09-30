
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-full font-semibold transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-punk-base';
  
  const variantClasses = {
    primary: 'bg-punk-cyan text-punk-base hover:bg-white hover:shadow-neon-cyan active:scale-95',
    secondary: 'bg-punk-magenta text-punk-base hover:bg-white hover:shadow-neon-magenta active:scale-95',
    ghost: 'bg-transparent border border-punk-sub text-punk-sub hover:border-punk-text hover:text-punk-text'
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
