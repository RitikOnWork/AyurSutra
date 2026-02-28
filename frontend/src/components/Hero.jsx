import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen bg-mesh flex items-center pt-24 lg:pt-20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-64 lg:w-96 h-64 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/4 -right-20 w-64 lg:w-96 h-64 lg:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="relative z-10 space-y-8 lg:space-y-12 text-center lg:text-left order-2 lg:order-1 lg:col-span-5">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm animate-in fade-in slide-in-from-left duration-700 mx-auto lg:mx-0">
                            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                            <span className="text-[10px] lg:text-xs font-bold text-primary uppercase tracking-[0.2em]">Next-Gen Ayurveda Platform</span>
                        </div>

                        <div className="flex flex-col gap-1 lg:gap-2 animate-in fade-in slide-in-from-bottom duration-1000">
                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <span className="hidden lg:block w-12 h-px bg-primary/20"></span>
                                <span className="text-xl lg:text-2xl font-bold text-primary uppercase tracking-[0.4em]">Healing</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-9xl font-serif font-bold text-gray-800 leading-[1] tracking-tight">
                                <span className="text-gradient">Ancient</span> <br />
                                <span>Roots</span>
                            </h1>
                            <div className="flex items-center gap-4 justify-center lg:justify-start">
                                <span className="text-lg lg:text-2xl font-medium text-gray-500 italic font-serif">for Modern Minds</span>
                                <span className="hidden lg:block w-24 h-px bg-primary/10"></span>
                            </div>
                        </div>
                    </div>

                    <p className="text-base lg:text-lg text-gray-500 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom delay-200 duration-1000 mx-auto lg:mx-0 font-medium">
                        AyurSutra harmonizes traditional Panchakarma wisdom with clinical precision.
                        A sanctuary for practitioners and seekers of holistic vitality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-2 animate-in fade-in slide-in-from-bottom delay-300 duration-1000 justify-center lg:justify-start">
                        <Link to="/login" className="w-full sm:w-auto">
                            <Button className="w-full h-14 lg:h-16 px-12 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-shadow">
                                Begin Your Journey
                            </Button>
                        </Link>
                        <button className="w-full sm:w-auto h-14 lg:h-16 px-10 rounded-2xl border-2 border-primary/20 bg-white/50 backdrop-blur-sm text-primary font-bold hover:bg-primary/5 transition-colors flex items-center justify-center gap-3 group">
                            Explore Wellness
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-10 border-t border-gray-100 animate-in fade-in duration-1000 delay-500">
                        <div className="text-center lg:text-left">
                            <p className="text-2xl lg:text-3xl font-bold text-gray-800">5k+</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Lives Healed</p>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-gray-100"></div>
                        <div className="text-center lg:text-left">
                            <p className="text-2xl lg:text-3xl font-bold text-gray-800">120+</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Certified Vaidyas</p>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-gray-100"></div>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border-2 border-white bg-sage-light flex items-center justify-center overflow-hidden shadow-sm">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} className="w-full h-full object-cover" alt="User" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative order-1 lg:order-2 px-4 sm:px-10 lg:px-0 lg:col-span-12 xl:col-span-7">
                    <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
                        <div className="w-full aspect-[16/10] bg-sage-light rounded-[3rem] lg:rounded-[4rem] shadow-2xl overflow-hidden shadow-primary/20 relative group border-4 border-white transform hover:rotate-1 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                                alt="Ayurvedic Treatment"
                            />
                            {/* Improved gradient for better visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>


                        </div>
                    </div>

                    {/* Background Decorative Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/10 rounded-full animate-spin-slow pointer-events-none hidden sm:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
