import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Features from '../components/Features';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <ProblemStatement />
                <Features />
                <About />
                <HowItWorks />
                <Benefits />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
