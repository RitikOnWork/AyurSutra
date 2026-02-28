import React, { useState } from 'react';

const PrakritiAssessment = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const totalSteps = 4;

    const questions = [
        {
            id: 1,
            category: "Physical Structure",
            text: "How would you describe your body frame?",
            options: [
                { id: 'v', label: "Thin/Slender", desc: "Bone joints are prominent, difficult to gain weight.", dosha: 'Vata' },
                { id: 'p', label: "Medium/Athletic", desc: "Well-proportioned, easy to gain or lose weight.", dosha: 'Pitta' },
                { id: 'k', label: "Broad/Heavy", desc: "Large frame, tends to gain weight easily.", dosha: 'Kapha' }
            ]
        },
        {
            id: 2,
            category: "Skin & Hair",
            text: "What is your typical skin texture?",
            options: [
                { id: 'v', label: "Dry & Rough", desc: "Tends to get cracked or cool to the touch.", dosha: 'Vata' },
                { id: 'p', label: "Oily & Sensitive", desc: "Fair complexion, prone to redness or moles.", dosha: 'Pitta' },
                { id: 'k', label: "Thick & Soft", desc: "Clammy or oily, radiates a natural glow.", dosha: 'Kapha' }
            ]
        },
        {
            id: 3,
            category: "Digestive Fire (Agni)",
            text: "How is your typical appetite and digestion?",
            options: [
                { id: 'v', label: "Irregular", desc: "Variable appetite, prone to bloating/gas.", dosha: 'Vata' },
                { id: 'p', label: "Strong", desc: "Sharp hunger, needs food on time, prone to acidity.", dosha: 'Pitta' },
                { id: 'k', label: "Slow/Steady", desc: "Low hunger, can skip meals easily, heavy digestion.", dosha: 'Kapha' }
            ]
        }
    ];

    const handleSelect = (doshaType) => {
        setAnswers({ ...answers, [step]: doshaType });
        if (step < totalSteps) {
            setTimeout(() => setStep(step + 1), 300);
        }
    };

    const renderResults = () => (
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-primary/5 text-center space-y-8 animate-in zoom-in duration-500">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>

            <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold text-gray-800">Assessment Complete</h2>
                <p className="text-gray-500 max-w-md mx-auto">Analysis based on classical Ayurvedic parameters indicates a dominant <strong>Pitta-Kapha</strong> Prakriti.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="p-8 rounded-[2rem] bg-orange-50 border border-orange-100">
                    <p className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2">Vata</p>
                    <p className="text-4xl font-serif font-bold text-orange-900">20%</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Pitta</p>
                    <p className="text-4xl font-serif font-bold text-primary">55%</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-secondary/5 border border-secondary/20">
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Kapha</p>
                    <p className="text-4xl font-serif font-bold text-secondary">25%</p>
                </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={() => setStep(1)}
                    className="px-10 py-4 border-2 border-gray-100 text-gray-400 font-bold rounded-2xl hover:bg-gray-50 transition-all"
                >
                    Retake Analysis
                </button>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                    Generate Treatment Dossier
                </button>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif font-bold text-gray-800">Digital Prakriti Assessment</h1>
                <p className="text-gray-500 font-medium">Calibrating treatment flows based on unique biological constants.</p>
            </div>

            {step <= questions.length ? (
                <div className="space-y-12">
                    {/* Progress Bar */}
                    <div className="flex items-center gap-6">
                        <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-700"
                                style={{ width: `${(step / totalSteps) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Step {step} of {totalSteps}</span>
                    </div>

                    <div className="bg-white rounded-[3rem] p-8 lg:p-16 border border-gray-100 shadow-xl shadow-gray-200/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 space-y-10">
                            <div className="space-y-2">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{questions[step - 1].category}</span>
                                <h2 className="text-3xl font-serif font-bold text-gray-800">{questions[step - 1].text}</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {questions[step - 1].options.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelect(opt.id)}
                                        className="group flex items-center justify-between p-8 rounded-[2rem] border-2 border-gray-50 hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
                                    >
                                        <div className="space-y-1">
                                            <p className="text-xl font-bold text-gray-800 transition-colors group-hover:text-primary">{opt.label}</p>
                                            <p className="text-sm text-gray-500 font-medium leading-relaxed">{opt.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : renderResults()}
        </div>
    );
};

export default PrakritiAssessment;
