import React, { useState } from 'react';

const TherapyScheduler = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeView, setActiveView] = useState('Week'); // Day, Week, Month

    const therapies = [
        { id: 1, name: 'Abhyanga (Oil Massage)', patient: 'Amit Sharma', time: '09:00 AM', duration: '60 min', type: 'Snehana', color: 'bg-primary/10 text-primary' },
        { id: 2, name: 'Swedana (Steam)', patient: 'Priya Patel', time: '10:30 AM', duration: '45 min', type: 'Swedana', color: 'bg-accent/10 text-accent' },
        { id: 3, name: 'Shirodhara', patient: 'Rajiv Kumar', time: '12:00 PM', duration: '90 min', type: 'Siro-Karma', color: 'bg-secondary/10 text-secondary' },
        { id: 4, name: 'Vamana (Emesis)', patient: 'Suresh Raina', time: '02:00 PM', duration: '120 min', type: 'Pradhana', color: 'bg-red-50 text-red-600' },
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 font-serif">Therapy Command Center</h1>
                    <p className="text-gray-500 mt-1">Manage Panchakarma scheduling and clinical sequences</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 flex">
                        {['Day', 'Week', 'Month'].map(view => (
                            <button
                                key={view}
                                onClick={() => setActiveView(view)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeView === view ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-primary'}`}
                            >
                                {view}
                            </button>
                        ))}
                    </div>
                    <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Assign Therapy
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Calendar Side Panel */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-800">October 2024</h3>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-50 rounded-lg"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth={2} /></svg></button>
                                <button className="p-2 hover:bg-gray-50 rounded-lg"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth={2} /></svg></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {days.map(d => <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d[0]}</span>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: 31 }).map((_, i) => (
                                <button key={i} className={`p-2 text-sm rounded-lg font-semibold ${i + 1 === 24 ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-primary/5'}`}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                        <div className="relative z-10">
                            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2">Clinical Note</p>
                            <h4 className="text-xl font-bold mb-4">Vamana Procedure</h4>
                            <p className="text-white/80 text-sm leading-relaxed mb-6">
                                Ensuring proper Poorva Karma (preparatory procedure) is initiated 3 days prior for all patients in 'Pradhana' phase.
                            </p>
                            <button className="w-full py-4 bg-white/20 backdrop-blur-md rounded-2xl font-bold hover:bg-white/30 transition-all border border-white/20">
                                View Protocol
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 -translate-y-12 translate-x-12 rounded-full"></div>
                    </div>
                </div>

                {/* Schedule Main View */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-bold text-gray-800">Thursday, Oct 24</h2>
                                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Today</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                                    <span className="text-xs font-bold text-gray-500">Snehana</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-accent/20"></span>
                                    <span className="text-xs font-bold text-gray-500">Swedana</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex">
                            {/* Time Column */}
                            <div className="w-20 flex-shrink-0 border-r border-gray-100 py-4">
                                {hours.map(h => (
                                    <div key={h} className="h-24 px-4 text-xs font-bold text-gray-300">
                                        {h}
                                    </div>
                                ))}
                            </div>

                            {/* Grid Contents */}
                            <div className="flex-1 relative">
                                {/* Horizontal grid lines */}
                                {hours.map(h => (
                                    <div key={h} className="h-24 border-b border-gray-50 w-full"></div>
                                ))}

                                {/* Specific Therapy Blocks (Mocked Absolute Positioning) */}
                                <div
                                    className="absolute left-4 top-[100px] right-8 p-4 bg-primary/10 border-l-4 border-primary rounded-2xl group cursor-pointer hover:shadow-xl hover:shadow-primary/5 transition-all"
                                    style={{ height: '70px' }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">09:15 AM - 10:15 AM</p>
                                            <h4 className="font-bold text-gray-800">Abhyanga (Healing Oil Massage)</h4>
                                            <p className="text-xs text-gray-500 font-medium">Patient: <span className="text-gray-700 font-bold">Amit Sharma</span></p>
                                        </div>
                                        <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary rounded-xl shadow-sm border border-primary/10">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeWidth={2} /></svg>
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="absolute left-4 top-[240px] right-8 p-4 bg-accent/10 border-l-4 border-accent rounded-2xl group cursor-pointer hover:shadow-xl hover:shadow-accent/5 transition-all"
                                    style={{ height: '60px' }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">10:45 AM - 11:30 AM</p>
                                            <h4 className="font-bold text-gray-800">Swedana (Steam Therapy)</h4>
                                            <p className="text-xs text-gray-500 font-medium">Patient: <span className="text-gray-700 font-bold">Priya Patel</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="absolute left-4 top-[400px] right-8 p-4 bg-secondary/10 border-l-4 border-secondary rounded-2xl group cursor-pointer hover:shadow-xl hover:shadow-secondary/5 transition-all"
                                    style={{ height: '100px' }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">12:30 PM - 02:00 PM</p>
                                            <h4 className="font-bold text-gray-800">Sirodhara Ritual</h4>
                                            <p className="text-xs text-gray-500 font-medium">Patient: <span className="text-gray-700 font-bold">Rajiv Kumar</span></p>
                                        </div>
                                        <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-secondary border border-secondary/20 uppercase">Critical Flow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TherapyScheduler;
