import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // No actual authentication logic for now
        console.log('Logging in with:', { email, password, role });

        // Switch to appropriate dashboard (for now only patient exists)
        if (role === 'patient') {
            navigate('/patient/dashboard');
        } else {
            alert('Practitioner dashboard coming soon! For now, please login as Patient.');
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
            <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-xl shadow-primary/20 mb-4">
                        <span className="text-white font-serif text-3xl font-bold">A</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 mt-2 font-medium">Continue your healing journey with AyurSutra</p>
                </div>

                <Card className="shadow-2xl border-0">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Select Role</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRole('patient')}
                                    className={`py-3 px-4 rounded-xl border-2 transition-all font-bold text-sm ${role === 'patient'
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
                                        }`}
                                >
                                    Patient
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole('practitioner')}
                                    className={`py-3 px-4 rounded-xl border-2 transition-all font-bold text-sm ${role === 'practitioner'
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
                                        }`}
                                >
                                    Practitioner
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-700 font-medium bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-700 font-medium bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between ml-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary" />
                                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
                            </label>
                            <button type="button" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                                Forgot Password?
                            </button>
                        </div>

                        <Button type="submit" className="w-full py-4 text-lg font-bold shadow-lg shadow-primary/20">
                            Sign In
                        </Button>
                    </form>
                </Card>

                <p className="text-center mt-8 text-gray-500 text-sm font-medium">
                    Don't have an account?{' '}
                    <button className="text-primary font-bold hover:underline">Request Access</button>
                </p>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 mx-auto text-sm font-bold"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
