import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        {
            id: 'profile',
            name: 'Profile Information',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: 'professional',
            name: 'Professional Details',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-.28.14a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 00.517 3.86l.158.318a2 2 0 00.517 3.86l.386 2.387a2 2 0 00.244 1.183l.14.28a2 2 0 001.022.547l2.387.477a2 2 0 003.86-.517l.318-.158a2 2 0 003.86-.517l2.387-.477a2 2 0 00.547-1.022l.14-.28a2 2 0 00.244-1.183l.517-3.86l.318-.158a2 2 0 00.517-3.86l.477-2.387z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
                </svg>
            )
        },
        {
            id: 'notifications',
            name: 'Notifications',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            )
        },
        {
            id: 'security',
            name: 'Security & Password',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-bold text-gray-800 font-serif">Practitioner Settings</h1>
                <p className="text-gray-500 font-medium">Configure your workspace and profile preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Settings Navigation */}
                <div className="lg:col-span-1 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 bg-primary/95'
                                    : 'bg-white text-gray-500 border border-gray-100/50 hover:bg-primary/5 hover:text-primary'
                                }`}
                        >
                            <div className={activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-primary transition-colors italic transition-all'}>
                                {tab.icon}
                            </div>
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-3">
                    <Card className="p-8 border-gray-100 shadow-sm overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-12 -translate-y-12"></div>

                        {activeTab === 'profile' && (
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 rounded-3xl bg-secondary/10 flex items-center justify-center relative group">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
                                            alt="Avatar"
                                            className="w-full h-full object-cover rounded-3xl"
                                        />
                                        <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg hover:scale-110 transition-transform">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Dr. Arjun Gupta</h3>
                                        <p className="text-gray-400 text-sm font-medium">B.A.M.S • MD (Ayurveda)</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <input type="text" defaultValue="Arjun Gupta" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Display Title</label>
                                        <input type="text" defaultValue="Senior Panchakarma Expert" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <input type="email" defaultValue="arjun.ayur@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <input type="tel" defaultValue="+91 98888 77777" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Short Bio</label>
                                        <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium resize-none" defaultValue="Specializing in detox therapy and chronic health rejuvenation with over 15 years of clinical practice."></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'professional' && (
                            <div className="space-y-8 relative z-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif">Medical Certification</h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-cream/30 rounded-3xl border border-primary/5 flex items-start justify-between">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 font-serif">State Medical Registration</p>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">ID: AY-2045-DEL-UP</p>
                                                <p className="text-[10px] text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full inline-block mt-2 uppercase tracking-widest border border-green-100">Verified Practitioner</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Languages Spoken</label>
                                            <input type="text" defaultValue="Hindi, English, Sanskrit" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Consultation Fees</label>
                                            <input type="text" defaultValue="₹ 1,500 / Hr" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-primary transition-all font-medium" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(activeTab === 'notifications' || activeTab === 'security') && (
                            <div className="py-24 text-center space-y-4">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-400 font-serif capitalize">{activeTab} controls coming soon</h3>
                                <p className="text-gray-400 text-sm max-w-xs mx-auto">This feature is currently under professional development for the AyurSutra suite.</p>
                            </div>
                        )}

                        <div className="mt-12 pt-8 border-t border-gray-50 flex justify-end gap-4">
                            <Button variant="ghost" className="px-8 font-bold">Discard</Button>
                            <Button className="px-12 font-bold shadow-primary/20">Save Changes</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Settings;
