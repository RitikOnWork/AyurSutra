import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import ProgressBar from '../../components/ui/ProgressBar';
import Badge from '../../components/ui/Badge';
import ProgressChart from '../../components/charts/ProgressChart';

const PatientDashboard = () => {
    const summaryCards = [
        { title: 'Upcoming Therapy', value: 'Virechana', detail: 'Tomorrow, 09:00 AM', icon: '🗓️', color: 'bg-blue-50' },
        { title: 'Completed Sessions', value: '12 / 21', detail: 'On track', icon: '✅', color: 'bg-green-50' },
        { title: 'Pending Precautions', value: '02', detail: 'Next 24 hours', icon: '⚠️', color: 'bg-yellow-50' },
        { title: 'Recovery Score', value: '85%', detail: '+5% from last week', icon: '📈', color: 'bg-primary/10' },
    ];

    const therapies = [
        { name: 'Abhyanga', date: '2024-05-20', time: '10:00 AM', therapist: 'Dr. Sharma', status: 'Completed' },
        { name: 'Shirodhara', date: '2024-05-22', time: '09:00 AM', therapist: 'Dr. Vineeth', status: 'Upcoming' },
        { name: 'Virechana', date: '2024-05-24', time: '08:30 AM', therapist: 'Dr. Sharma', status: 'Upcoming' },
        { name: 'Nasya', date: '2024-05-18', time: '11:00 AM', therapist: 'Dr. Vineeth', status: 'Missed' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 1️⃣ Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryCards.map((card, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">{card.title}</p>
                                <h4 className="text-2xl font-bold text-gray-800">{card.value}</h4>
                                <p className="text-xs text-gray-400 mt-1 font-medium">{card.detail}</p>
                            </div>
                            <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* 2️⃣ Therapy Schedule Section */}
                    <Card
                        title="Therapy Schedule"
                        subtitle="Track your upcoming and past healing sessions"
                        className="h-full"
                    >
                        <div className="overflow-x-auto -mx-6">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-y border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Therapy</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date & Time</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Therapist</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {therapies.map((item, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-5">
                                                <span className="text-sm font-bold text-gray-800">{item.name}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-sm text-gray-700">{item.date}</div>
                                                <div className="text-[11px] text-gray-400 font-medium">{item.time}</div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm text-gray-600">{item.therapist}</span>
                                            </td>
                                            <td className="px-6 py-3">
                                                <Badge variant={
                                                    item.status === 'Completed' ? 'success' :
                                                        item.status === 'Upcoming' ? 'info' : 'danger'
                                                }>
                                                    {item.status}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* 3️⃣ Recovery Progress Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card title="Recovery Progress" subtitle="Healing milestone tracking">
                            <div className="mt-4">
                                <ProgressBar value={85} label="Overall Health Improvement" />
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">Current Milestone:</span>
                                        <span className="font-bold text-primary italic">Detoxification Phase (2/3)</span>
                                    </div>
                                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                            "You have shown significant improvement in digestive health. Stay consistent with the prescribed diet for the next 7 days."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card title="Progress Trend" subtitle="Visualize your health journey">
                            <ProgressChart />
                        </Card>
                    </div>
                </div>

                {/* Right Column (1/3 width) */}
                <div className="space-y-8">
                    {/* 4️⃣ Real-Time Therapy Tracking Card */}
                    <Card className="bg-primary text-white border-0 shadow-xl shadow-primary/20">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-primary-foreground/80 text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">Active Treatment</span>
                                <span className="text-xs font-bold text-accent">Day 12 of 21</span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-2">Virechana Stage</h3>
                                <p className="text-primary-foreground/70 text-sm font-medium">Next session starts in</p>
                                <div className="flex items-end gap-2 mt-2">
                                    <span className="text-4xl font-black text-white">08:45:21</span>
                                    <span className="text-xs font-bold text-accent mb-1 uppercase tracking-widest">Hrs Left</span>
                                </div>
                            </div>

                            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-3/5"></div>
                            </div>

                            <Button variant="accent" className="w-full font-bold shadow-lg" size="lg">
                                View Pre-Procedure Protocol
                            </Button>
                        </div>
                    </Card>

                    {/* 5️⃣ Recent Notifications Panel */}
                    <Card title="Recent Notifications" icon={() => <span>🔔</span>}>
                        <div className="space-y-6">
                            {[
                                { title: 'Morning Medicine Reminder', time: '10 mins ago', type: 'reminder', color: 'bg-blue-500' },
                                { title: 'Post-Procedure Instruction', time: '2 hours ago', type: 'info', color: 'bg-green-500' },
                                { title: 'New Lab Report Uploaded', time: 'Yesterday', type: 'update', color: 'bg-accent' },
                            ].map((note, i) => (
                                <div key={i} className="flex gap-4 group cursor-pointer">
                                    <div className={`mt-1 h-2 w-2 rounded-full ${note.color} shrink-0`}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">{note.title}</h5>
                                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{note.time}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="text-sm font-bold text-primary hover:text-primary/70 transition-colors w-full pt-2">View all notifications →</button>
                        </div>
                    </Card>

                    {/* 6️⃣ Feedback Section Preview */}
                    <Card title="Quick Feedback" subtitle="How are you feeling today?">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <span className="text-xs font-bold text-gray-600">Daily Health Log</span>
                                <Badge variant="warning">Pending</Badge>
                            </div>
                            <Button variant="outline" className="w-full text-sm font-bold border-gray-200">
                                Submit Today's Feedback
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
