import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 shadow-sm',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50',
        accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent/50',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50',
        ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500/50'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm gap-1.5',
        md: 'px-5 py-2.5 text-base gap-2',
        lg: 'px-8 py-3.5 text-lg gap-3'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {Icon && <Icon className={`${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} />}
            {children}
        </button>
    );
};

export default Button;
