'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { MdOutlineAddBox } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { FaPersonShelter } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { BsYoutube } from "react-icons/bs";
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='w-full h-[80px] p-4 bg-white flex items-center justify-between'>
            <div>
                {/* {
                    router.pathname === "" ? (
                        <>
                            <h2 className='font-bold text-[40px] text-textPrimary'>Dashboard</h2>
                        </>

                    ) : (
                        <>
                            <div className='flex items-center gap-3'>
                                <p className='text-[20px] text-[#8B8B8B] font-normal'>Dashboard</p>
                                <spa>/</spa>
                                <p className='text-[20px] text-[#000] font-normal'>{currentPath}</p>
                            </div>
                        </>
                    )
                } */}
                <h2 className='font-bold text-[40px] text-primary'>Dashboard</h2>

            </div>
            <div className='flex gap-4 items-center '>
                <div>
                    <Button
                        startIcon={<MdOutlineAddBox />}
                        onClick={handleClick}
                        style={{
                            backgroundColor: "#2C0076",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            width: "152px",
                            height: "49px"
                        }}
                    >
                        add Item
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <div className='flex gap-2 '>
                            <MenuItem onClick={handleClose}> <Link href="#">
                                <div className=' border border-primary rounded-md flex flex-col items-center justify-center w-[150px] bg-[#F8FBFF] h-[120px]'>
                                    <FaPersonShelter className='text-primary' />
                                    <p className='font-medium text-[14px] text-primary'>New Instructors</p>
                                </div>
                            </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}> <Link href="#">
                                <div className=' border border-primary rounded-md flex flex-col items-center justify-center w-[150px] bg-[#F8FBFF] h-[120px]'>
                                    <HiUserGroup className='text-primary' />
                                    <p className='font-medium text-[14px] text-primary'>New Student</p>
                                </div>
                            </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}> <Link href="#">
                                <div className=' border border-primary rounded-md flex flex-col items-center justify-center w-[150px] bg-[#F8FBFF] h-[120px]'>
                                    <BsYoutube className='text-primary' />
                                    <p className='font-medium text-[14px] text-primary'>New Course</p>
                                </div>
                            </Link>
                            </MenuItem>

                        </div>
                    </Menu>
                </div>
                <div>
                    <TbWorld className='text-primary w-[32px] h-[32px]' />
                </div>
                <div className='w-[2px] h-[45px] bg-[#000] '></div>
                <div className='flex gap-2 items-center '>
                    <Image
                        src="/assets/pic.png"
                        width={48}
                        height={48}
                        alt="person"
                        className=" rounded-full"
                    />
                    <div className='flex flex-col '>
                        <h2 className="font-medium text-[18px]">hello</h2>
                        <p className='text-[#858182] text-[16px] font-light	'>Admin</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar