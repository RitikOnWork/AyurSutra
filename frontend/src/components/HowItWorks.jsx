import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Register Patient",
            desc: "Complete digital onboarding with health assessment and prakriti analysis.",
            num: "01"
        },
        {
            title: "Schedule Therapies",
            desc: "Our AI engine creates the perfect 7, 14, or 21-day panchakarma plan.",
            num: "02"
        },
        {
            title: "Automated Notifications",
            desc: "Patients receive timed reminders for diet, fasts, and procedure timings.",
            num: "03"
        },
        {
            title: "Track & Optimize Recovery",
            desc: "Analyze progress and adjust therapies based on real-time feedback.",
            num: "04"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-ayur-deep mb-6">
                        Simple 4-Step Process
                    </h2>
                    <p className="text-lg text-gray-600">
                        Transitioning your traditional practice to a digital-first clinic has never been easier.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-ayur-light/20 z-0"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-24 h-24 bg-white border-4 border-ayur-cream rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:border-ayur-gold transition-smooth group-hover:scale-110">
                                    <span className="text-3xl font-bold text-ayur-gold">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-bold text-ayur-deep mb-4">{step.title}</h3>
                                <p className="text-gray-600 px-4">{step.desc}</p>

                                {/* Mobile Step Indicator */}
                                <div className="lg:hidden mt-8 flex justify-center">
                                    <div className="w-0.5 h-12 bg-ayur-light/20"></div>
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
