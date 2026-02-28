import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 lg:py-4 px-4 lg:px-6' : 'py-4 lg:py-8 px-6 lg:px-10'
            }`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass-morphism rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-2 lg:py-3' : 'bg-transparent'
                }`}>
                <Link to="/" className="flex items-center gap-2 lg:gap-3 group relative z-50">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-white font-serif text-xl lg:text-2xl font-bold">A</span>
                    </div>
                    <div className="block">
                        <h1 className="text-lg lg:text-2xl font-bold text-gray-800 leading-none">Ayur<span className="text-primary italic">Sutra</span></h1>
                        <p className="text-[8px] lg:text-[10px] text-secondary font-bold uppercase tracking-widest mt-0.5 lg:mt-1">Holistic Wellness</p>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                    {['Solutions', 'Methodology', 'Practitioners', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-bold text-gray-600 hover:text-primary transition-colors tracking-wide relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-bold text-primary hover:text-secondary transition-colors px-4">
                        Consultant Login
                    </Link>
                    <Link to="/login">
                        <Button className="rounded-2xl px-8 py-3 shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all">
                            Join Sanctuary
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-50 p-2 text-gray-800"
                    onClick={toggleMobileMenu}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col items-center justify-center gap-8`}>
                    {['Solutions', 'Methodology', 'Practitioners', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-2xl font-serif font-bold text-gray-800 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex flex-col items-center gap-6 mt-4">
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-primary">
                            Consultant Login
                        </Link>
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="rounded-2xl px-12 py-4 shadow-xl shadow-primary/20">
                                Join Sanctuary
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
