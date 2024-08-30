'use client'
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsVertical } from "react-icons/hi";
import { Button, Divider } from '@mui/material';
const RecentlyCourse = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='bg-white p-4 flex flex-col gap-4 w-full shadow-md rounded-md'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-[22px] text-[#000]'>Recently Courses</h2>
                <Link className='flex items-center gap-2' href="#">
                    <span className='font-medium text-[16px] text-primary'>See more</span>
                    <FaArrowRightLong className='text-primary' />
                </Link>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 '>
                    <div className='flex items-center gap-2'>
                        <Image
                            src="/assets/pic.png"
                            width={30}
                            height={30}
                            alt="pic"
                        />
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                    </div>
                    <p className='text-[#878789] font-normal text-[14px]'>Ahmed Gomaa Add a new Course <strong>“Basic of anatomy” </strong> </p>
                </div>
                <div>
                    <button onClick={handleClick}>
                        <HiDotsVertical className='w-[22px] h-[22px]' />
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}> <Link href="#">
                            <span className='font-normal text-[14px] text-[#B3B3B7]'>View Course</span>
                        </Link></MenuItem>
                        <MenuItem onClick={handleClose}>  <Link href="#">
                            <span className='font-normal text-[14px] text-[#FF5B5B]'>Cancel Course</span>
                        </Link></MenuItem>
                    </Menu>
                </div>
            </div>
            <Divider />
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 '>
                    <div className='flex items-center gap-2'>
                        <Image
                            src="/assets/pic.png"
                            width={30}
                            height={30}
                            alt="pic"
                        />
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                    </div>
                    <p className='text-[#878789] font-normal text-[14px]'>Ahmed Gomaa Add a new Course <strong>“Basic of anatomy” </strong> </p>
                </div>
                <div>
                    <button onClick={handleClick}>
                        <HiDotsVertical className='w-[22px] h-[22px]' />
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}> <Link href="#">
                            <span className='font-normal text-[14px] text-[#B3B3B7]'>View Course</span>
                        </Link></MenuItem>
                        <MenuItem onClick={handleClose}>  <Link href="#">
                            <span className='font-normal text-[14px] text-[#FF5B5B]'>Cancel Course</span>
                        </Link></MenuItem>
                    </Menu>

                </div>
            </div>
            <Divider />
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 '>
                    <div className='flex items-center gap-2'>
                        <Image
                            src="/assets/pic.png"
                            width={30}
                            height={30}
                            alt="pic"
                        />
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                    </div>
                    <p className='text-[#878789] font-normal text-[14px]'>Ahmed Gomaa Add a new Course <strong>“Basic of anatomy” </strong> </p>
                </div>
                <div>
                    <button onClick={handleClick}>
                        <HiDotsVertical className='w-[22px] h-[22px]' />
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}> <Link href="#">
                            <span className='font-normal text-[14px] text-[#B3B3B7]'>View Course</span>
                        </Link></MenuItem>
                        <MenuItem onClick={handleClose}>  <Link href="#">
                            <span className='font-normal text-[14px] text-[#FF5B5B]'>Cancel Course</span>
                        </Link></MenuItem>
                    </Menu>

                </div>
            </div>
            <Divider />
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 '>
                    <div className='flex items-center gap-2'>
                        <Image
                            src="/assets/pic.png"
                            width={30}
                            height={30}
                            alt="pic"
                        />
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                    </div>
                    <p className='text-[#878789] font-normal text-[14px]'>Ahmed Gomaa Add a new Course <strong>“Basic of anatomy” </strong> </p>
                </div>
                <div>
                    <button onClick={handleClick}>
                        <HiDotsVertical className='w-[22px] h-[22px]' />
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}> <Link href="#">
                            <span className='font-normal text-[14px] text-[#B3B3B7]'>View Course</span>
                        </Link></MenuItem>
                        <MenuItem onClick={handleClose}>  <Link href="#">
                            <span className='font-normal text-[14px] text-[#FF5B5B]'>Cancel Course</span>
                        </Link></MenuItem>
                    </Menu>

                </div>
            </div>
            <Divider />
        </div>
    )
}

export default RecentlyCourse