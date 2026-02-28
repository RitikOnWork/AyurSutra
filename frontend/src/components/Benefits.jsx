import React from 'react';

const Benefits = () => {
    return (
        <section className="py-20 lg:py-32 bg-mesh relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-10 lg:space-y-12 text-center lg:text-left">
                        <div className="space-y-4 lg:space-y-6">
                            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.3em] font-sans">Human Impact</h2>
                            <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-800 leading-tight">
                                Empowering Clinics, <br className="hidden sm:block" />
                                <span className="text-gradient italic">Enriching Lives</span>
                            </h3>
                        </div>

                        <p className="text-base lg:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                            AyurSutra isn't just a platform; it's a bridge between clinical rigor and the human experience.
                            We automate the complexity so you can master the healing.
                        </p>

                        <div className="grid grid-cols-2 gap-4 lg:gap-8 max-w-md mx-auto lg:mx-0">
                            {[
                                { label: "Operational Gain", val: "92%" },
                                { label: "Patient Retention", val: "88%" },
                                { label: "Clinical Precision", val: "95%" },
                                { label: "Recovery Speed", val: "1.4x" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1 lg:space-y-2 p-4 lg:p-6 bg-white/50 backdrop-blur-md rounded-2xl lg:rounded-[2rem] border border-white/50 shadow-sm">
                                    <p className="text-xl lg:text-3xl font-bold text-primary font-serif">{stat.val}</p>
                                    <p className="text-[8px] lg:text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 glass-morphism rounded-[2.5rem] lg:rounded-[3rem] p-6 lg:p-12 space-y-6 lg:space-y-10 animate-pulse-soft max-w-lg mx-auto">
                            <svg className="w-8 h-8 lg:w-12 lg:h-12 text-accent opacity-30" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.866 6.86599 22 3 22H1V21Z" />
                            </svg>
                            <p className="text-lg lg:text-2xl font-serif font-bold text-gray-800 leading-relaxed italic">
                                "The integration of AyurSutra into our multi-center retreat in Kerala has not just improved productivity—it has restored harmony to our healing protocols."
                            </p>
                            <div className="flex items-center gap-4 lg:gap-6 border-t border-gray-100 pt-6 lg:pt-8">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl overflow-hidden bg-sage-light flex-shrink-0">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Medical" alt="Doctor" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm lg:text-base font-bold text-gray-800">Dr. Rajeshwari Nair</h4>
                                    <p className="text-[8px] lg:text-[10px] text-primary font-bold uppercase tracking-widest">Medical Director, Kerala Oasis</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative circles - Hidden on small screens */}
                        <div className="absolute top-0 right-0 w-32 lg:w-64 h-32 lg:h-64 bg-primary/5 rounded-full blur-3xl translate-x-12 -translate-y-12 hidden sm:block"></div>
                        <div className="absolute bottom-0 left-0 w-32 lg:w-64 h-32 lg:h-64 bg-accent/5 rounded-full blur-3xl -translate-x-12 translate-y-12 hidden sm:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
