'use client'
import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex  ">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-4  bg-[#f5f5f5] overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default DashboardLayout;