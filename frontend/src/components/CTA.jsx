import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const CTA = () => {
    return (
        <section className="py-20 lg:py-32 px-6">
            <div className="max-w-7xl mx-auto relative">
                <div className="bg-primary rounded-[2.5rem] lg:rounded-[4rem] p-10 lg:p-24 text-center text-white overflow-hidden shadow-2xl shadow-primary/30 relative">
                    {/* Background patterns */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" />
                        </svg>
                    </div>
                    <div className="absolute -top-24 -right-24 w-64 lg:w-96 h-64 lg:h-96 bg-secondary/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 lg:w-96 h-64 lg:h-96 bg-accent/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 space-y-6 lg:space-y-8">
                        <h2 className="text-3xl lg:text-6xl font-serif font-bold leading-tight">
                            Elevate Your Clinical Practice <br className="hidden sm:block" />
                            to Sacred <span className="italic opacity-80 decoration-accent underline decoration-2">Benchmarks</span>
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg font-medium leading-relaxed px-4 lg:px-0">
                            Join hundreds of practitioners who have transformed their Panchakarma
                            management into a high-fidelity digital sanctuary.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center pt-4 lg:pt-6">

                            <button className="w-full sm:w-auto h-14 lg:h-16 px-12 rounded-2xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
                                Learn More
                                <svg className="w-6 h-6 border-2 border-white rounded-full p-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
