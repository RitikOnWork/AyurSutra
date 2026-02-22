import React from 'react';

const CTA = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="relative bg-ayur-deep rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
                    {/* Decorative Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ayur-light/10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-ayur-gold/10 rounded-full -ml-24 -mb-24"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Bring Authentic Ayurveda <br />
                            <span className="text-ayur-gold">into the Digital Era</span>
                        </h2>
                        <p className="text-xl text-ayur-cream/80 mb-12">
                            Join hundreds of Ayurvedic practitioners who have already upgraded their clinical management system.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="w-full sm:w-auto bg-ayur-gold text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-ayur-deep transition-smooth shadow-xl shadow-black/20">
                                Start Free Trial
                            </button>
                            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-smooth">
                                Schedule a Demo
                            </button>
                        </div>
                        <p className="text-ayur-cream/60 mt-8 text-sm">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
