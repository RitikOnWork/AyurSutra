import React from 'react';

const ProgressChart = ({ data = [45, 52, 48, 61, 68, 72, 85] }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    // Simple sparkline calculation
    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((val - min) / range) * 80 - 10; // offset and scale
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="w-full h-48 relative pt-4">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-10 opacity-5 border-y border-primary/20">
                <div className="w-full border-t border-gray-400"></div>
                <div className="w-full border-t border-gray-400"></div>
                <div className="w-full border-t border-gray-400"></div>
            </div>

            <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Area fill */}
                <path
                    d={`M0,100 L${points} L100,100 Z`}
                    fill="url(#chartGradient)"
                />

                {/* Main Line */}
                <polyline
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                    className="transition-all duration-1000 ease-in-out"
                />

                {/* Current State Dot */}
                <circle
                    cx="100"
                    cy={100 - ((data[data.length - 1] - min) / range) * 80 - 10}
                    r="2.5"
                    fill="var(--color-accent)"
                    className="animate-pulse"
                />
            </svg>

            {/* Labels */}
            <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Today</span>
            </div>
        </div>
    );
};

export default ProgressChart;
