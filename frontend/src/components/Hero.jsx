import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ayur-light/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-ayur-gold/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-block px-4 py-1.5 bg-ayur-light/10 text-ayur-deep font-semibold rounded-full border border-ayur-light/20">
                        Digital Ayurveda Revolution
                    </div>
                    <h1 className="text-5xl md:text-7xl leading-tight text-ayur-deep font-bold">
                        Digitizing <span className="text-ayur-gold">Panchakarma</span> with Authentic Care
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        Automated therapy scheduling, patient notifications and real-time recovery tracking – all in one platform. Empower your clinic with the wisdom of the past and the technology of the future.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-ayur-deep text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-ayur-deep/20 hover:bg-ayur-light hover:scale-105 transition-smooth">
                            Get Started Now
                        </button>
                        <button className="bg-white text-ayur-deep border-2 border-ayur-deep/10 px-8 py-4 rounded-2xl font-bold hover:bg-ayur-deep/5 transition-smooth">
                            Book Demo
                        </button>
                    </div>
                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-white bg-ayur-gold flex items-center justify-center text-white text-xs font-bold">
                                +2k
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">
                            Trusted by <strong>500+ clinics</strong> worldwide
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                            alt="Ayurveda Wellness"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ayur-deep/40 to-transparent"></div>
                    </div>

                    {/* Floating Stats Car */}
                    <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-2xl glass-card animate-bounce-slow">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-ayur-light/20 rounded-xl">
                                <svg className="w-6 h-6 text-ayur-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Therapy Efficiency</p>
                                <p className="text-2xl font-bold text-ayur-deep">+85%</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-2xl glass-card">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-ayur-gold/20 rounded-xl">
                                <svg className="w-6 h-6 text-ayur-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Active Patients</p>
                                <p className="text-2xl font-bold text-ayur-deep">12,450</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
