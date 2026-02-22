import React from 'react';

const ProblemStatement = () => {
    const problems = [
        {
            title: "Manual Scheduling Issues",
            desc: "Cluttered paper calendars leading to overlapping sessions and therapist burnout.",
            icon: "📅"
        },
        {
            title: "Inconsistent Documentation",
            desc: "Fragmented patient records making it hard to track long-term recovery patterns.",
            icon: "📝"
        },
        {
            title: "Poor Patient Follow-up",
            desc: "Lack of automated reminders resulting in missed procedures and delayed results.",
            icon: "🔔"
        }
    ];

    return (
        <section id="problem" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ayur-deep mb-6">
                        Why Panchakarma Centers Need Digital Transformation
                    </h2>
                    <p className="text-lg text-gray-600">
                        Traditional clinics often struggle with administrative hurdles that detract from the healing process. We Bridge that gap.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-ayur-cream border border-ayur-light/10 hover:bg-ayur-deep transition-smooth group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {problem.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-ayur-deep mb-4 group-hover:text-white">
                                {problem.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-200">
                                {problem.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
