import React from 'react';
import { useAuth } from '../../../context/AuthContext';

const DashboardTopbar = ({ toggleSidebar }) => {
    const { user } = useAuth();
    const role = user?.role || 'patient';

    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div>
                    <h2 className="text-xl font-bold text-gray-800 font-serif">Namaste, {user?.name || 'Practitioner'}</h2>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        {role === 'practitioner' ? 'Healing Panel • Expert View' : 'Patient Journey • Sanctuary'}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-3 border-r border-gray-100 pr-6">
                    <div className="text-right">
                        <p className="text-sm font-bold text-gray-800">{user?.name || 'Dr. Arjun Gupta'}</p>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                            {role === 'practitioner' ? 'Reg No: AY-2045' : 'ID: AS-2024'}
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                        <span className="text-primary font-bold">AG</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardTopbar;
