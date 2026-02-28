import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 lg:pt-24 pb-8 lg:pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16 lg:mb-20 text-center sm:text-left">
                    <div className="lg:col-span-2 space-y-6 lg:space-y-8 flex flex-col items-center sm:items-start">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <span className="text-white font-serif text-xl font-bold">A</span>
                            </div>
                            <h1 className="text-xl font-bold text-gray-800">Ayur<span className="text-primary italic">Sutra</span></h1>
                        </Link>
                        <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed max-w-sm">
                            Architecting the digital future of Panchakarma with reverence for tradition and mastery of technology.
                        </p>
                        <div className="flex items-center gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <button key={i} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 transition-all">
                                    <span className="sr-only">Social Link</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482v-1.703c-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.03 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.65 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.38.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856v2.752c0 .267.18.577.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-3 lg:space-y-4">
                            {['Patient Dossier', 'Therapy Logic', 'Live Tracking', 'Global Registry'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-3 lg:space-y-4">
                            {['Clinical Guides', 'API Reference', 'Case Studies', 'Community'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Legal</h4>
                        <ul className="space-y-3 lg:space-y-4">
                            {['Privacy Policy', 'Data Security', 'Terms of Care', 'Certifications'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 lg:pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
                    <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest">
                        © 2026 AyurSutra Sanctuary. All Sacred Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <span className="text-[8px] lg:text-[10px] font-bold text-gray-300 uppercase tracking-widest sm:tracking-tighter">Designed for Wellness Mastery</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
