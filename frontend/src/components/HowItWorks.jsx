import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Digital Intake",
            desc: "Comprehensive Prakriti analysis and medical history digitized into a unified patient vault.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.172-2.172a2.828 2.828 0 114 4L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            title: "Protocol Design",
            desc: "Smart sequencing of Snehana, Swedana, and Pradhana Karma customized per patient needs.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-.28.14a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 00.517 3.86l.158.318a2 2 0 00.517 3.86l.386 2.387a2 2 0 00.244 1.183l.14.28a2 2 0 001.022.547l2.387.477a2 2 0 003.86-.517l.318-.158a2 2 0 003.86-.517l2.387-.477a2 2 0 00.547-1.022l.14-.28a2 2 0 00.244-1.183l.517-3.86l.318-.158a2 2 0 00.517-3.86l.477-2.387z" />
                </svg>
            )
        },
        {
            title: "Vital Tracking",
            desc: "Live monitoring of treatment logs, physiological responses, and subjective vitality markers.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Insight & Recall",
            desc: "Predictive insights on recovery cycles and automated follow-up protocols.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section id="practitioners" className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4 lg:space-y-6">
                    <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.3em] font-sans">The Workflow</h2>
                    <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-800">Precision in Every <span className="text-gradient italic">Operation</span></h3>
                </div>

                <div className="relative">
                    {/* Connecting Line - Hidden on Mobile */}
                    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative z-10 group text-center lg:text-left">
                                <div className="space-y-6 lg:space-y-8">
                                    <div className="relative inline-block lg:block">
                                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cream rounded-2xl lg:rounded-3xl flex items-center justify-center text-primary shadow-xl shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500 mx-auto lg:mx-0">
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[8px] lg:text-[10px] font-bold text-primary shadow-sm">
                                            0{i + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-2 lg:space-y-4">
                                        <h4 className="text-lg lg:text-xl font-bold text-gray-800 font-serif">{step.title}</h4>
                                        <p className="text-sm lg:text-base text-gray-500 leading-relaxed font-medium max-w-xs mx-auto lg:mx-0">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
