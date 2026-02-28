import React from 'react';
import Button from '../../components/ui/Button';

const OnlineConsultation = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800 font-serif">Virtual Consultation</h1>
                <p className="text-gray-500 mt-1">Connect with your certified Vaidya from anywhere in the world</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">

                {/* Video Interface Card */}
                <div className="lg:col-span-8 bg-gray-950 rounded-[2.5rem] p-4 lg:p-6 shadow-2xl relative overflow-hidden aspect-video group">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000"
                            className="w-full h-full object-cover opacity-60"
                            alt="Video Stream"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        {/* Status Overlay */}
                        <div className="absolute top-6 left-6 flex items-center gap-3">
                            <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">Secure Connection Active</span>
                        </div>

                        {/* Doctor Info */}
                        <div className="absolute bottom-8 left-8 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl border-2 border-primary overflow-hidden shadow-lg">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=DrVaidya" alt="Doctor" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Dr. Ananya Mishra</p>
                                <p className="text-primary-light text-xs font-bold uppercase tracking-widest">Senior B.A.M.S Specialist</p>
                            </div>
                        </div>

                        {/* Interaction Toolbar */}
                        <div className="absolute bottom-8 right-8 flex gap-4">
                            <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </button>
                            <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            </button>
                            <button className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-all shadow-xl shadow-red-500/30">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Side Panel: Session Info & Actions */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Active Session</span>
                            <h3 className="text-2xl font-serif font-bold text-gray-800">Health Discovery</h3>
                            <p className="text-sm text-gray-500 font-medium">Initial consultation for Chronic Back Pain cycle.</p>
                        </div>

                        <div className="pt-4 space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Duration</p>
                                    <p className="text-sm font-bold text-gray-800">45 Minutes</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recordings</p>
                                    <p className="text-sm font-bold text-gray-800">Auto-saved to EHR</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <Button className="w-full h-14 rounded-2xl shadow-lg shadow-primary/20">
                                Join Call Now
                            </Button>
                            <button className="w-full mt-4 h-14 rounded-2xl border-2 border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-all">
                                Reschedule Session
                            </button>
                        </div>
                    </div>

                    {/* Pre-call Checklist */}
                    <div className="bg-primary rounded-[2rem] p-8 text-white">
                        <h4 className="font-serif font-bold text-xl mb-4 text-white">Pre-call Checklist</h4>
                        <ul className="space-y-3">
                            {[
                                "Stable internet connection",
                                "High-fidelity video enabled",
                                "Self-Prakriti report ready",
                                "Recent medical history files"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineConsultation;
