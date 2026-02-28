import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const therapyExperience = [
        {
            label: "Peaceful",
            icon: (props) => (
                <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            label: "Revitalizing",
            icon: (props) => (
                <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            label: "Intense",
            icon: (props) => (
                <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
            )
        },
        {
            label: "Comforting",
            icon: (props) => (
                <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto mt-20 text-center space-y-8 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-serif font-bold text-gray-800">Pranam!</h2>
                    <p className="text-gray-500 max-w-sm mx-auto font-medium">Your feedback has been received into the sacred records. It helps our Vaidyas refine your healing journey.</p>
                </div>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                >
                    Submit another response
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
            {/* Header */}
            <div className="text-center lg:text-left space-y-2">
                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">Therapy Feedback</h1>
                <p className="text-gray-500 font-medium tracking-tight">Help us harmonize your treatment experience.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-8">
                {/* Main Form Area */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-sm space-y-10">
                        {/* Rating Section */}
                        <div className="space-y-6">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest block text-center lg:text-left">Overall Experience</label>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className={`transition-all duration-300 transform hover:scale-125 ${rating >= star ? 'text-accent scale-110' : 'text-gray-200'}`}
                                    >
                                        <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Experience Tags */}
                        <div className="space-y-6">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest block">How did you feel today?</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {therapyExperience.map((exp) => (
                                    <button
                                        key={exp.label}
                                        type="button"
                                        className="p-4 rounded-2xl border-2 border-gray-50 hover:border-primary/20 hover:bg-primary/5 transition-all flex flex-col items-center gap-2 group"
                                    >
                                        <exp.icon className="w-8 h-8 group-hover:scale-125 transition-transform" />
                                        <span className="text-xs font-bold text-gray-500 group-hover:text-primary">{exp.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Text Feedback */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest block">Detailed Observations</label>
                            <textarea
                                rows="4"
                                className="w-full bg-gray-50 border-none rounded-[1.5rem] p-6 text-gray-700 font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary/20 transition-all"
                                placeholder="Describe any sensations, thoughts, or physical changes you noticed during the session..."
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                            Submit Feedback
                        </Button>
                    </div>
                </div>

                {/* Info Side Panel */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-primary rounded-[2rem] p-8 text-white space-y-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif font-bold">Why we ask</h3>
                        <p className="text-sm text-white/70 leading-relaxed font-medium">
                            Ayurveda is a science of subtlety. Your subjective experiences are as important as clinical dry data. By logging your sensations, our Vaidyas can fine-tune your herbal concoctions and therapy timings.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Patient Privacy</p>
                        <div className="flex justify-center -space-x-2 mb-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="avatar" />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Your feedback is strictly used for therapy calibration and is protected by encrypted HIPAA standards.</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Feedback;
