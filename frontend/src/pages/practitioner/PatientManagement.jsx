import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const PatientManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const patients = [
        { id: 'PS-001', name: 'Ritik Kumar', age: 28, gender: 'M', therapy: 'Shirodhara', status: 'Active', phone: '+91 98765 43210' },
        { id: 'PS-002', name: 'Sneha Kapur', age: 34, gender: 'F', therapy: 'Abhyanga', status: 'Active', phone: '+91 91234 56789' },
        { id: 'PS-003', name: 'Vikram Singh', age: 45, gender: 'M', therapy: 'Vamana', status: 'Completed', phone: '+91 88888 77777' },
        { id: 'PS-004', name: 'Anjali Sharma', age: 22, gender: 'F', therapy: 'Nasyam', status: 'On-Hold', phone: '+91 77777 66666' },
        { id: 'PS-005', name: 'Kabir Das', age: 52, gender: 'M', therapy: 'Basti', status: 'Active', phone: '+91 66666 55555' },
    ];

    const filteredPatients = patients.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.includes(searchTerm);
        const matchesFilter = filter === 'all' || p.status.toLowerCase() === filter.toLowerCase();
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 font-serif">Manage Patients</h1>
                    <p className="text-gray-500 font-medium">View and manage all registered patients in your registry.</p>
                </div>
                <Button className="flex items-center gap-2 px-6 h-12 shadow-primary/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Patient
                </Button>
            </div>

            <div className="bg-white rounded-[2rem] p-4 md:p-8 border border-gray-100 shadow-sm space-y-6">
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search by name or ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50/50 border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="flex bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100 gap-1 w-full md:w-auto">
                        {['All', 'Active', 'Completed', 'On-Hold'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status.toLowerCase())}
                                className={`flex-1 px-4 py-2 rounded-xl text-sm font-bold transition-all ${filter === status.toLowerCase()
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-gray-500 hover:text-primary'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-400 text-xs uppercase tracking-widest border-b border-gray-50">
                                <th className="pb-4 font-bold pl-2">Patient Details</th>
                                <th className="pb-4 font-bold">Therapy</th>
                                <th className="pb-4 font-bold">Status</th>
                                <th className="pb-4 font-bold">Contact</th>
                                <th className="pb-4 font-bold text-right pr-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredPatients.map((p) => (
                                <tr key={p.id} className="group hover:bg-gray-50/30 transition-colors">
                                    <td className="py-5 pl-2">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-bold shadow-sm">
                                                {p.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800">{p.name}</p>
                                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                                                    {p.id} • {p.age}Y • {p.gender}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 font-semibold text-gray-600 italic">
                                        {p.therapy}
                                    </td>
                                    <td className="py-5">
                                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-opacity-10 ${p.status === 'Active' ? 'bg-green-500 text-green-600' :
                                                p.status === 'Completed' ? 'bg-blue-500 text-blue-600' :
                                                    'bg-gold text-gold'
                                            }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="py-5 text-sm font-medium text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-3.5 h-3.5 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                            {p.phone}
                                        </div>
                                    </td>
                                    <td className="py-5 text-right pr-2">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-xl text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            </button>
                                            <button className="p-2 rounded-xl text-gray-400 hover:text-gold hover:bg-gold/10 transition-all">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.172-2.172a2.828 2.828 0 114 4L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PatientManagement;
