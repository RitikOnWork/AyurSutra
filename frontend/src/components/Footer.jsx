import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-white pt-20 pb-10 border-t border-ayur-light/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-ayur-deep rounded flex items-center justify-center">
                                <span className="text-ayur-gold font-serif text-xl font-bold">A</span>
                            </div>
                            <span className="text-2xl font-serif font-bold text-ayur-deep">
                                Ayur<span className="text-ayur-gold">Sutra</span>
                            </span>
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            Leading the digital transformation of traditional Ayurvedic medicine. Authentic care meets modern technology.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-ayur-cream flex items-center justify-center text-ayur-deep hover:bg-ayur-deep hover:text-white transition-smooth">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current" style={{ WebkitMask: `url(https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social}.svg) no-repeat center`, mask: `url(https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social}.svg) no-repeat center` }}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-ayur-deep mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Features', 'How It Works', 'Benefits', 'Panchakarma Tips'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-ayur-deep transition-smooth">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-ayur-deep mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {['Documentation', 'API Reference', 'Case Studies', 'Pricing Plans', 'Community'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-ayur-deep transition-smooth">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-ayur-deep mb-6">Contact Info</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li className="flex items-start gap-3">
                                <span className="text-ayur-gold mt-1">📍</span>
                                <span>123 Ayurveda Lane, <br />Varanasi, UP 221005</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-ayur-gold">📞</span>
                                <span>+91 (800) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-ayur-gold">✉️</span>
                                <span>support@ayursutra.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-ayur-light/10 pt-8 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm italic">
                        &copy; {new Date().getFullYear()} AyurSutra. All rights reserved. Built with 🌿 and Technology.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-ayur-deep transition-smooth">Privacy Policy</a>
                        <a href="#" className="hover:text-ayur-deep transition-smooth">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
