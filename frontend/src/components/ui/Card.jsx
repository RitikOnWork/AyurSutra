import React from 'react';

const Card = ({ children, className = '', title, subtitle, icon: Icon }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {(title || Icon) && (
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
          {Icon && <Icon className="text-primary w-5 h-5" />}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
