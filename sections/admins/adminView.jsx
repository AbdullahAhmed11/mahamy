'use client'
import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiShare1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import { IoIosSearch } from "react-icons/io";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import DeleteAdminModal from '@/app/component/DeleteAdminModal';
import EditAdminModal from '@/app/component/EditAdminModal';
import CreateAdminModal from '@/app/component/CreateAdminModal';

const adminView = () => {

    const [age, setAge] = useState('all');
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //delete
    const handledeleteModal = () => {
        handleClose();
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    //edit
    const [openEditModal, setOpenEditModal] = useState(false)

    const handleEditModal = () => {
        handleClose();
        setOpenEditModal(true)
    }
    
    const handleEditModalClose = () => {
        setOpenEditModal(false)
    };
    //create
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const handleCreateOpenModal = () => {
        setIsModalCreateOpen(true);
    };
    
    const handleCloseCreateModal = () => {
        setIsModalCreateOpen(false);
    };

    return (
        <div className='flex flex-col gap-4'>
         <div className='flex items-center justify-between'>
                    <h2 className='text-[#09003F] font-bold text-[30px]'> Admins</h2>
                    <div className="flex items-center gap-3">
                       
                        <Button
                            endIcon={<IoMdAdd />}
                            onClick={() => handleCreateOpenModal()}
                            style={{
                                backgroundColor: "#4834D4",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "5px",
                                width: "180px",
                                height: "49px"
                            }}
                        >
                            New Admin
                        </Button>
                    </div>
                </div>
                <div className='w-full flex gap-3 h-[70px] bg-white rounded-md shadow-md p-4'>
                    <div>
                    <TextField
    id="standard-basic"
    variant="standard"
    sx={{ width: "300px" }}
    placeholder='Search by username, email'
    InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <IoIosSearch />
            </InputAdornment>
        ),
    }}
/>
                    </div>
                  
                </div>
                <div className='w-full bg-white'>
                    <table className="min-w-full border text-center">
                        <thead className=" border-b">
                            <tr>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                    Full Name
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                    Admin Name
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Instructor Phone
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Password
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Permissions
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  Ahmed266</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> 01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> **********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium ">
                                                <div
                                                className='bg-[#4834D4] text-[#fff] p-4 flex items-center justify-center  rounded-md '
                                                >
                                                    Edit
                                                </div>
                                            </td>
                                            <td>
                                            <div>
                                            <button onClick={(event) => handleClick(event)}>
                                                <HiDotsVertical className='w-[22px] h-[22px]' />
                                            </button>
                                                <Menu
                                                    id="demo-positioned-menu"
                                                    aria-labelledby="demo-positioned-button"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                    }}
                                                    transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                    }}
                                                >
                                                    <MenuItem onClick={handleEditModal}><span className='text-[#B3B3B7] flex items-center gap-2'> <LiaEdit/> Edit Student</span></MenuItem>
                                                    <MenuItem  onClick={handledeleteModal}><span className='text-[#FF5B5B] flex items-center gap-2'><MdOutlineDelete/>Delete</span></MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
                       
                    <div>
                    </div>
                </div>
    
<DeleteAdminModal
    openModal={openModal}
    handleModalClose={handleModalClose}
/>

<EditAdminModal
 openModal={openEditModal}
 handleModalClose={handleEditModalClose}
/>

<CreateAdminModal
   isModalCreateOpen={isModalCreateOpen}
   handleCloseCreateModal={handleCloseCreateModal}
/>

</div>
    )
}

export default adminView