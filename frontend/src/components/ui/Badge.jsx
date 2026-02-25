import React from 'react';

const Badge = ({ children, variant = 'info', className = '' }) => {
    const variants = {
        success: 'bg-green-100 text-green-700 border-green-200',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        danger: 'bg-red-100 text-red-700 border-red-200',
        info: 'bg-blue-100 text-blue-700 border-blue-200',
        primary: 'bg-primary/10 text-primary border-primary/20',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
