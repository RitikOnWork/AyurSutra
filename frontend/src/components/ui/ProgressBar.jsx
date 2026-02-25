import React from 'react';

const ProgressBar = ({ value, max = 100, label, showValue = true, color = 'bg-primary' }) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className="w-full">
            {(label || showValue) && (
                <div className="flex justify-between items-center mb-2">
                    {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
                    {showValue && <span className="text-sm font-semibold text-primary">{Math.round(percentage)}%</span>}
                </div>
            )}
            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} transition-all duration-1000 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
