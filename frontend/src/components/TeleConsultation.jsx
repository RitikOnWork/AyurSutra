import React from 'react';
import Button from './ui/Button';

const TeleConsultation = () => {
    return (
        <section id="telehealth" className="py-24 lg:py-32 bg-cream/30 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Mock Video UI */}
                    <div className="lg:col-span-7 order-2 lg:order-1 relative">
                        <div className="relative z-10 bg-gray-900 rounded-[2.5rem] lg:rounded-[3.5rem] p-4 lg:p-6 shadow-3xl shadow-primary/20 aspect-video group">
                            {/* Main Video Source (Mock) */}
                            <div className="w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000"
                                    className="w-full h-full object-cover opacity-80"
                                    alt="Doctor Consultation"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                                {/* Overlay: Doctor Identity */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=DrVaidya" alt="Doctor" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Dr. Ananya Mishra</p>
                                        <p className="text-primary-light text-[10px] font-bold uppercase tracking-widest">Senior B.A.M.S Specialist</p>
                                    </div>
                                </div>

                                {/* Mock Controls */}
                                <div className="absolute bottom-6 right-6 flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white cursor-pointer hover:bg-red-600 transition-all">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Tooltips (Mocking Features) */}
                            <div className="absolute top-10 -right-8 glass-morphism p-4 rounded-2xl shadow-xl shadow-primary/10 animate-float hidden lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-gray-800">Live Pulse Sync</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Rings */}
                        <div className="absolute -inset-10 border border-primary/10 rounded-full animate-spin-slow pointer-events-none"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.3em]">The Virtual Vaidya</h2>
                            <h3 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
                                Consult From <br />
                                <span className="text-gradient italic">Your Sanctuary</span>
                            </h3>
                        </div>

                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            Geometry of distance no longer obstructs the flow of healing.
                            Experience high-fidelity Ayurvedic consultations regardless of your geographical location.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "4K Clinical Clarity", desc: "Crystal clear video for accurate visual diagnosis (Darshana).", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                                { title: "Secure EHR Integration", desc: "Instantly share records and Prakriti reports during the live call.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                { title: "Global Payment Sanctuary", desc: "Seamless international transactions for prescriptions and fees.", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{feature.title}</h4>
                                        <p className="text-sm text-gray-400 font-medium">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button className="h-16 px-10 rounded-2xl shadow-xl shadow-primary/20 flex items-center gap-3 group">
                                <span>Schedule Online Session</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeleConsultation;
