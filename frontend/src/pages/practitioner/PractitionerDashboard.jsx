import React from 'react';

const PractitionerDashboard = () => {
    const stats = [
        {
            label: 'Total Patients',
            value: '42',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: 'bg-blue-50 text-blue-600'
        },
        {
            label: 'Active Therapies',
            value: '18',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-1 9a2 2 0 114 0v3a2 2 0 01-2 2 2 2 0 01-2-2v-3zm-6-2a2 2 0 114 0v7a2 2 0 01-2 2 2 2 0 01-2-2v-7zm12 0a2 2 0 114 0v7a2 2 0 01-2 2 2 2 0 01-2-2v-7z" />
                </svg>
            ),
            color: 'bg-green-50 text-green-600'
        },
        {
            label: "Today's Sessions",
            value: '06',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            color: 'bg-gold/10 text-gold'
        },
        {
            label: 'Pending Reviews',
            value: '03',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            color: 'bg-red-50 text-red-600'
        },
    ];

    const schedule = [
        { name: 'Sameer Khanna', type: 'Shirodhara', time: '10:30 AM', status: 'Completed' },
        { name: 'Anjali Sharma', type: 'Abhyanga', time: '11:45 AM', status: 'Ongoing' },
        { name: 'Rohan Mehra', type: 'Vamana', time: '02:00 PM', status: 'Pending' },
        { name: 'Isha Desai', type: 'Nasyam', time: '03:30 PM', status: 'Pending' },
    ];

    const patients = [
        { name: 'Ritik Kumar', plan: 'Detox 21-Days', score: 88, next: 'Tomorrow' },
        { name: 'Sneha Kapur', plan: 'Joint Care', score: 72, next: '05 Mar' },
        { name: 'Vikram Singh', plan: 'Immunity Plus', score: 95, next: '12 Mar' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                        <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            {stat.icon}
                        </div>
                        <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Today's Schedule */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif">Today's Healing Sessions</h3>
                        <div className="space-y-4">
                            {schedule.map((task, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                            {task.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">{task.name}</p>
                                            <p className="text-xs text-gray-500 font-semibold uppercase">{task.type}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">{task.time}</p>
                                        <p className={`text-[10px] font-bold uppercase ${task.status === 'Completed' ? 'text-green-500' : 'text-gold'}`}>
                                            {task.status}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Table */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-x-auto">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif">Patient Recoveries</h3>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-400 text-xs uppercase tracking-widest border-b border-gray-50 pb-4">
                                    <th className="pb-4 font-bold">Patient</th>
                                    <th className="pb-4 font-bold">Therapy Plan</th>
                                    <th className="pb-4 font-bold text-center">Score</th>
                                    <th className="pb-4 font-bold">Next</th>
                                    <th className="pb-4 font-bold"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {patients.map((p, i) => (
                                    <tr key={i} className="group">
                                        <td className="py-4 font-bold text-gray-800">{p.name}</td>
                                        <td className="py-4 text-sm text-gray-500 font-medium">{p.plan}</td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden min-w-[60px]">
                                                    <div className="bg-primary h-full rounded-full" style={{ width: `${p.score}%` }}></div>
                                                </div>
                                                <span className="text-xs font-bold text-primary">{p.score}%</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-xs font-bold text-gray-400">{p.next}</td>
                                        <td className="py-4 text-right">
                                            <button className="text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Sidebar Alerts & Performance */}
                <div className="space-y-8">
                    <div className="bg-primary p-8 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-12 -translate-y-12"></div>
                        <h3 className="text-lg font-bold mb-4 relative z-10">Monthly Success</h3>
                        <div className="text-4xl font-bold mb-2">94%</div>
                        <p className="text-white/70 text-sm">Therapy completion rate is up <span className="text-white font-bold">+12%</span> this month.</p>
                        <div className="mt-6 flex gap-1 h-2">
                            {[40, 60, 80, 70, 94, 50].map((h, i) => (
                                <div key={i} className="flex-1 bg-white/20 rounded-full relative">
                                    <div className="absolute bottom-0 left-0 w-full bg-white/60 rounded-full" style={{ height: `${h}%` }}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif">Health Alerts</h3>
                        <div className="space-y-6">
                            {[
                                { type: 'Missed Session', patient: 'Rohit K.', time: '2h ago', color: 'text-red-500' },
                                { type: 'New Feedback', patient: 'Sushil V.', time: '4h ago', color: 'text-gold' },
                                { type: 'Side Effect Logged', patient: 'Mira A.', time: 'Yesterday', color: 'text-orange-500' },
                            ].map((alert, i) => (
                                <div key={i} className="flex gap-4 group cursor-pointer">
                                    <div className={`w-2 h-12 rounded-full ${alert.color.replace('text', 'bg')} opacity-40 group-hover:opacity-100 transition-all`}></div>
                                    <div>
                                        <h4 className={`text-sm font-bold ${alert.color}`}>{alert.type}</h4>
                                        <p className="text-gray-800 font-bold text-xs">{alert.patient}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">{alert.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PractitionerDashboard;
