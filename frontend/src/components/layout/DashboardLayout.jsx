import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-background">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="lg:pl-72 flex flex-col min-h-screen">
                <Topbar toggleSidebar={toggleSidebar} />

                <main className="flex-1 p-6 lg:p-10 max-w-[1600px] w-full mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
