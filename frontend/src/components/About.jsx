import React from 'react';

const About = () => {
    const karmas = [
        { name: "Vamana", desc: "Therapeutic Emesis", detail: "Cleansing of Respiratory & Digestive tract of excess Kapha." },
        { name: "Virechana", desc: "Purgation Therapy", detail: "Elimination of toxins from Liver & Gallbladder to balance Pitta." },
        { name: "Basti", desc: "Enema Therapy", detail: "Golden standard for neurological & skeletal disorders (Vata)." },
        { name: "Nasya", desc: "Nasal Cleansing", detail: "Purification of the head region for improved mental clarity." },
        { name: "Raktamokshana", desc: "Blood Purification", detail: "Cleansing of circulatory system from metabolic impurities." }
    ];

    return (
        <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="space-y-4">
                            <h2 className="text-xs lg:text-sm font-bold text-primary uppercase tracking-[0.3em] font-sans">The Science</h2>
                            <h3 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
                                Essence of <br />
                                <span className="text-gradient italic">Panchakarma</span>
                            </h3>
                        </div>
                        <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium">
                            Panchakarma is the ultimate Ayurvedic detoxification and rejuvenation treatment.
                            Derived from the Sanskrit words 'Pancha' (Five) and 'Karma' (Actions),
                            it represents five therapeutic procedures designed to restore biological balance
                            by flushing out deep-seated toxins (Ama).
                        </p>
                        <div className="flex items-center gap-6 p-6 bg-sage-light rounded-[2rem] border border-primary/10">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-.28.14a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 00.517 3.86l.158.318a2 2 0 00.517 3.86l.386 2.387a2 2 0 00.244 1.183l.14.28a2 2 0 001.022.547l2.387.477a2 2 0 003.86-.517l.318-.158a2 2 0 003.86-.517l2.387-.477a2 2 0 00.547-1.022l.14-.28a2 2 0 00.244-1.183l.517-3.86l.318-.158a2 2 0 00.517-3.86l.477-2.387z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Holistic Restoration</h4>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Balancing Vata, Pitta, & Kapha Doshas</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {karmas.slice(0, 4).map((k, i) => (
                                <div key={i} className={`p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group ${i % 2 !== 0 ? 'lg:translate-y-12' : ''}`}>
                                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                        <span className="text-xs font-bold leading-none">0{i + 1}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 font-serif mb-2">{k.name}</h4>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{k.desc}</p>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{k.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Automation Section */}
                <div className="bg-primary rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl shadow-primary/30 text-white">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
                        <div className="space-y-8">
                            <h2 className="text-sm font-bold text-white uppercase tracking-[0.4em]">The AyurSutra Advantage</h2>
                            <h3 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                                Traditional Wisdom <br />
                                Meet <span className="opacity-70 italic decoration-accent underline decoration-2">Digital Precision</span>
                            </h3>
                            <p className="text-lg text-white/70 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
                                AyurSutra isn't just software—it's a clinical catalyst. We solve the three biggest
                                hurdles in modern Panchakarma center management:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Protocol Integrity", desc: "Our smart scheduler ensures Poorva, Pradhana, and Paschat Karma follow the exact logical sequence without deviation." },
                                { title: "Vitality Analytics", desc: "Track patient recovery scores (Guna assessment) daily to visualize how long-term toxicity is diminishing." },
                                { title: "Prakriti Synchronization", desc: "Automated Dosha-based treatment customization that adapts every session to the patient's biological constants." }
                            ].map((v, i) => (
                                <div key={i} className="flex gap-6 p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 hover:bg-white/15 transition-all text-left group">
                                    <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold font-serif">{v.title}</h4>
                                        <p className="text-sm text-white/50 font-medium leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
