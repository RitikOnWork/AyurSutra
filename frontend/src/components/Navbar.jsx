import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-ayur-deep rounded-lg flex items-center justify-center">
                        <span className="text-ayur-gold font-serif text-2xl font-bold">A</span>
                    </div>
                    <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-ayur-deep' : 'text-ayur-deep'}`}>
                        Ayur<span className="text-ayur-gold">Sutra</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-ayur-deep font-medium">
                    {['Home', 'Features', 'How It Works', 'Benefits', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="hover:text-ayur-light transition-smooth"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-ayur-deep font-semibold hover:text-ayur-light transition-smooth">
                        Login
                    </button>
                    <button className="bg-ayur-deep text-white px-6 py-2 rounded-full font-semibold hover:bg-ayur-light hover:shadow-lg transition-smooth border-2 border-transparent hover:border-ayur-deep">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
