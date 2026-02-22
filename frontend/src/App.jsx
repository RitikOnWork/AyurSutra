import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Simple Reveal Animation Logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal">
          <ProblemStatement />
        </div>
        <div className="reveal">
          <Features />
        </div>
        <div className="reveal">
          <HowItWorks />
        </div>
        <div className="reveal">
          <Benefits />
        </div>
        <div className="reveal">
          <CTA />
        </div>
      </main>
      <Footer />

      {/* Embedded Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}} />
    </div>
  );
}

export default App;
