import React from 'react';

const ProblemStatement = () => {
    return (
        <section id="methodology" className="py-20 lg:py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
                    <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                        <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.3em] font-sans">The Challenge</h2>
                        <h3 className="text-3xl lg:text-5xl font-serif font-bold text-gray-800 leading-tight">
                            The Complexity of <br className="hidden sm:block" />
                            <span className="text-gradient italic">Manual Mastery</span>
                        </h3>
                    </div>

                    <div className="space-y-6 lg:space-y-8">
                        {[
                            { title: "Siloed Patient Data", desc: "Treatment histories locked in paper logs or fragmented spreadsheets hinder clinical agility." },
                            { title: "Sequence Volatility", desc: "Managing delicate Panchakarma transitions manually increases risk of protocol deviation." },
                            { title: "Visibility Gap", desc: "Limited real-time tracking of therapy completion and long-term health oscillations." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-4 lg:gap-6 group text-center sm:text-left">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 mx-auto sm:mx-0">
                                    0{i + 1}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg lg:text-xl font-bold text-gray-800 font-serif">{item.title}</h4>
                                    <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed max-w-sm sm:max-w-none mx-auto sm:mx-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative order-1 lg:order-2">
                    <div className="glass-morphism rounded-[2.5rem] lg:rounded-[3rem] p-3 lg:p-4 relative z-10 animate-float max-w-md mx-auto">
                        <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-inner">
                            <h4 className="text-xl lg:text-2xl font-serif font-bold text-primary mb-6 lg:mb-8">Clinical Analysis</h4>
                            <div className="space-y-4 lg:space-y-6">
                                {[65, 85, 45].map((w, i) => (
                                    <div key={i} className="space-y-1 lg:space-y-2">
                                        <div className="flex justify-between text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">
                                            <span>Efficiency Metric</span>
                                            <span>{w}%</span>
                                        </div>
                                        <div className="h-1.5 lg:h-2 bg-gray-50 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${w}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 lg:mt-10 p-4 lg:p-6 bg-sage-light rounded-2xl lg:rounded-3xl border border-primary/10">
                                <p className="text-[10px] lg:text-xs font-bold text-primary leading-relaxed">
                                    "Data suggests that digitized clinics see a 40% increase in patient adherence within the first 90 days."
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Abstract background shape - Hidden on mobile */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full hidden sm:block"></div>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
