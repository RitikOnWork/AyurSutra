import React from 'react';

const Benefits = () => {
    const benefitsList = [
        { label: "Increased Operational Efficiency", value: 92 },
        { label: "Improved Patient Compliance", value: 88 },
        { label: "Standardized Therapy Quality", value: 95 },
        { label: "Data-Driven Decisions", value: 85 }
    ];

    return (
        <section id="benefits" className="py-24 bg-ayur-cream/30">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-ayur-deep mb-8">
                            Empowering Clinics, <br />
                            <span className="text-ayur-gold">Enriching Patients</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            AyurSutra isn't just a software; it's a productivity multiplier for your healthcare staff and a beacon of clarity for your patients. By automating the mundane, we allow you to focus on what matters most: **Healing**.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Easy-to-use interface for staff",
                                "Scalable for multi-center chains",
                                "Secure HIPAA compliant data storage",
                                "Custom branding for your clinic"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-ayur-light/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-ayur-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-ayur-deep">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-ayur-light/10">
                        <h3 className="text-2xl font-bold text-ayur-deep mb-10">Performance Impact</h3>
                        <div className="space-y-8">
                            {benefitsList.map((benefit, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold text-gray-700">{benefit.label}</span>
                                        <span className="font-bold text-ayur-deep">{benefit.value}%</span>
                                    </div>
                                    <div className="w-full h-3 bg-ayur-cream rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-ayur-deep rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${benefit.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-ayur-gold/10 rounded-2xl border border-ayur-gold/20 flex items-center gap-6">
                            <div className="text-4xl">🌟</div>
                            <div>
                                <p className="font-bold text-ayur-deep italic">"Transformed our 10-room center's management overnight."</p>
                                <p className="text-sm text-gray-500 mt-1">— Dr. Sharma, Wellness Retreat Kerala</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
