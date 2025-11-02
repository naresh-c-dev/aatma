import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron shadow-soft hover:shadow-soft-hover";
  const variantClasses = {
    primary: 'bg-gradient-to-r from-saffron to-amber-500 text-white',
    secondary: 'bg-charcoal text-white',
    outline: 'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white',
  };
  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>{children}</button>;
};

export default Button;
