import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoIosLogOut } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Image from 'next/image';
import { CgProfile } from "react-icons/cg";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdOutlineImportantDevices } from "react-icons/md";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudentProfile = ({ toggleDrawer, openDrawer, dataProfile, studentCourses }) => {
    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className="flex flex-col p-4 gap-5">
                <div onClick={toggleDrawer(false)} className="flex items-center gap-2 cursor-pointer" >
                    <p className="font-medium text-[#2C0076] text-[14px]">Swipe back</p>
                    <LuLogOut className='text-[#2C0076]' />
                </div>
                <div className='flex items-center flex-col justify-center gap-3'>
                    <img
                        src={`http://mobisite201.somee.com${dataProfile?.studentImage}`}
                        className="w-[50px] h-[50px] rounded-full"
                    />
                    <h2 className="font-medium text-[15px] ">{dataProfile?.studentName}</h2>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px] text-[#2C2C2C] font-normal'>{dataProfile?.unversityName}</p>
                        <div className='h-[15px] w-[2px] bg-[#2C2C2C]'></div>
                        <p className='text-[14px] text-[#2C2C2C] font-normal'>{dataProfile?.collageName}</p>
                        <div className='h-[15px] w-[2px] bg-[#2C2C2C]'></div>
                        <p className='text-[14px] text-[#2C2C2C] font-normal'>{dataProfile?.className}</p>
                    </div>
                </div>
                <div className="flex-col gap-6 flex">
                    <div className='flex items-center justify-between'>
                        <div className="flex gap-2 items-center">
                            <CgProfile className=' w-[20px] h-[20px] text-[#878789]' />
                            <p className='text-[#878789] text-[14px]'>User Name</p>
                        </div>
                        <div>
                            <p className="font-medium text-[14px] text-[#2C2C2C]">{dataProfile?.studentName}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="flex gap-2 items-center">
                            <AiTwotoneMail className=' w-[20px] h-[20px] text-[#878789]' />
                            <p className='text-[#878789] text-[14px]'>Email</p>
                        </div>
                        <div>
                            <p className="font-medium text-[14px] text-[#2C2C2C]">{dataProfile?.studentEmail}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="flex gap-2 items-center">
                            <FiPhone className=' w-[20px] h-[20px] text-[#878789]' />
                            <p className='text-[#878789] text-[14px]'>Phone</p>
                        </div>
                        <div>
                            <p className="font-medium text-[14px] text-[#2C2C2C]">{dataProfile?.studentPhone}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="flex gap-2 items-center">
                            <MdOutlineImportantDevices className=' w-[20px] h-[20px] text-[#878789]' />
                            <p className='text-[#878789] text-[14px]'>Device ID</p>
                        </div>
                        <div>
                            <p className="font-medium text-[14px] text-[#2C2C2C]">{dataProfile?.studentDeviceidId || "none insert"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h2 className="font-medium text-[20px] ">Subscribed Courses</h2>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        color: "#000"
                                    }}
                                >course name</TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        color: "#000"
                                    }}
                                    align="right">status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                studentCourses?.map((course) => (
                                    <TableRow
                                        key={course.courseId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {course.courseName}
                                        </TableCell>
                                        <TableCell align="right">active</TableCell>

                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </Box>
    );

    return (
        <div>
            <Drawer anchor="right"
                open={openDrawer} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default StudentProfile