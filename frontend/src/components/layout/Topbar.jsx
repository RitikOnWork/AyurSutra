import React from 'react';

const Topbar = ({ toggleSidebar }) => {
    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Namaste, Ritik</h2>
                    <p className="text-xs text-gray-500 font-medium">Welcome back to your healing journey</p>
                </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                <button className="relative p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-all active:scale-95 group">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full group-hover:scale-110 transition-transform"></span>
                </button>

                <div className="h-10 w-px bg-gray-100 hidden sm:block"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800 leading-none">Ritik Kumar</p>
                        <p className="text-[11px] text-primary font-bold uppercase tracking-wider mt-1">Patient ID: AS-2024-001</p>
                    </div>
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-primary/10 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ritik"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
