import React from 'react';

const PlaceholderPage = ({ title, icon }) => (
    <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 text-primary/40">
            {icon}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 font-serif mb-3">{title}</h1>
        <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            This professional module is currently being calibrated for the AyurSutra Practitioner suite.
            Integration with clinical data systems is in progress.
        </p>
    </div>
);

const DefaultIcon = (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.244l-.28.14a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 00.517 3.86l.158.318a2 2 0 00.517 3.86l.386 2.387a2 2 0 00.244 1.183l.14.28a2 2 0 001.022.547l2.387.477a2 2 0 003.86-.517l.318-.158a2 2 0 003.86-.517l2.387-.477a2 2 0 00.547-1.022l.14-.28a2 2 0 00.244-1.183l.517-3.86l.318-.158a2 2 0 00.517-3.86l.477-2.387z" />
    </svg>
);

export const PatientManagement = () => <PlaceholderPage title="Manage Patients" icon={DefaultIcon} />;
export const TherapyScheduler = () => <PlaceholderPage title="Therapy Scheduler" icon={DefaultIcon} />;
export const TherapyTracking = () => <PlaceholderPage title="Live Therapy Tracking" icon={DefaultIcon} />;
export const Reports = () => <PlaceholderPage title="Reports & Analytics" icon={DefaultIcon} />;
export const Settings = () => <PlaceholderPage title="Settings & Preferences" icon={DefaultIcon} />;
