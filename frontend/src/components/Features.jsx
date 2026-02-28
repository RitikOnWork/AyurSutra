import React from 'react';
import Card from './ui/Card';

const Features = () => {
    const features = [
        {
            title: "Dynamic Scheduling",
            description: "Intelligent Panchakarma treatment sequences that adapt to patient recovery rates.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Practitioner Portal",
            description: "High-fidelity dashboard for managing dossiers, treatment logs, and clinical analytics.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Wellness Sanctuary",
            description: "Patient-centric mobile experience for tracking vitality scores and therapy routines.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            color: "bg-red-50 text-red-600"
        },
        {
            title: "Precise Analytics",
            description: "Comprehensive reporting on therapy completion and long-term health trends.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "bg-gold/10 text-gold"
        }
    ];

    return (
        <section id="solutions" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4 lg:space-y-6">
                    <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.3em] font-sans">Our Core Ecosystem</h2>
                    <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-800">Designed for Clinical <span className="text-gradient italic">Excellence</span></h3>
                    <p className="text-base lg:text-lg text-gray-500 font-medium px-4 lg:px-0">AyurSutra bridges the gap between ancient healing protocols and digital-first healthcare management.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group relative">
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-opacity rounded-[2.5rem] lg:rounded-[3rem]"></div>
                            <Card className="p-8 lg:p-10 border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-[2.5rem] lg:rounded-[3rem] h-full flex flex-col justify-between">
                                <div className="space-y-4 lg:space-y-6">
                                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="scale-75 lg:scale-100">{f.icon}</div>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 font-serif">{f.title}</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">{f.description}</p>
                                </div>
                                <button className="mt-8 lg:mt-10 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
