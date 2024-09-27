'use client'
import React, { useEffect, useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { BsYoutube } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaPersonShelter } from "react-icons/fa6";
import Link from 'next/link';
import { BiLogOutCircle } from "react-icons/bi";
const Sidebar = () => {

    const [permissions, setPermissions] = useState([]);

    // Load permissions from local storage or context when the component mounts
    useEffect(() => {
        const adminPermissions = JSON.parse(localStorage.getItem('adminPermissions'));
        if (adminPermissions) {
            setPermissions(adminPermissions);
        }
    }, []);
    const linksData = [
        {
            icon: <MdDashboard className=' text-[#B3B3B7] w-[22px] h-[22px]' />,
            title: "Dashboard",
            href: "/",
            alwaysVisible: true,
        },
        {
            icon: <HiUserGroup className='text-[#B3B3B7] w-[22px] h-[22px]  ' />,
            title: "Students",
            href: "/students",
            permission: 1,
        },
        {
            icon: <FaPersonShelter className='text-[#B3B3B7] w-[22px] h-[22px]  ' />,
            title: "Admins",
            href: "/admin",
            permission: 2,
        },
        {
            icon: <BsYoutube className='text-[#B3B3B7] w-[22px] h-[22px]  ' />,
            title: "Courses",
            href: "/courses",
            permission: 3,
        },
        {
            icon: <BsCheckSquareFill className='text-[#B3B3B7] w-[22px] h-[22px]  ' />,
            title: "Enrolments",
            href: "/enrollments",
            permission: 4,
        },
        {
            icon: <BsCheckSquareFill className='text-[#B3B3B7] w-[22px] h-[22px]  ' />,
            title: "Entities",
            href: "/entities",
        },
        {
            icon: <BsYoutube className='text-[#B3B3B7] w-[22px] h-[22px]  ' />,
            title: "ny Courses",
            href: "/nycourses",
            permission: 3,
            alwaysVisible: true,
        },
    ]

    // const filteredLinks = linksData.filter(link => permissions.includes(link.permission));
    const filteredLinks = linksData.filter(link => link.alwaysVisible || permissions.includes(link.permission));

    return (
        <div className='flex min-h-screen'>
            <div className='w-[100px]   bg-white shadow-md  flex flex-col justify-between'>
                <div className='mt-[80px] flex flex-col gap-3'>

                    {
                        filteredLinks.map((data) => (
                            <Link key={data.icon} href={data.href}>
                                <div className='w-full h-[40px] flex flex-col gap-1 items-center justify-center ' >
                                    <span>{data.icon}</span>
                                    <p className='font-bold text-[#B3B3B7] text-[12px]'>{data.title}</p>
                                </div>
                            </Link>

                        ))
                    }
                </div>
                <div>
                    <div
                        className='w-full h-[60px] flex flex-col gap-1 items-center justify-center ' >
                        <span><BiLogOutCircle className=' text-[#FF5B5B] w-[32px] h-[32px] ' /></span>
                        <p className='font-bold text-[#FF5B5B] text-[12px]'>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar