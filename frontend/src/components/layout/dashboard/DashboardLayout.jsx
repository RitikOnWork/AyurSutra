import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardTopbar from './DashboardTopbar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="lg:pl-72 flex flex-col min-h-screen">
                <DashboardTopbar toggleSidebar={toggleSidebar} />
                <main className="flex-1 p-6 lg:p-10 max-w-[1600px] w-full mx-auto animate-in fade-in duration-500">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
