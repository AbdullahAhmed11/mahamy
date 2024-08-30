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


const studentsView = () => {

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


    return (
        <div className='flex flex-col gap-4'>
         <div className='flex items-center justify-between'>
                    <h2 className='text-[#09003F] font-bold text-[30px]'> Student</h2>
                    <div className="flex items-center gap-3">
                        <Button
                            endIcon={<CiShare1 />}
                            style={{
                                backgroundColor: "#2C0076",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "5px",
                                width: "180px",
                                height: "49px"
                            }}
                        >
                            Export user
                        </Button>
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
                            New Student
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
                    <div>
                        <Box sx={{ width: 170, height: "40px", display: "flex", alignItems: "center", gap: "3px" }}>
                            <p>Status: </p>
                            <FormControl fullWidth>
                                {/* <InputLabel id="demo-simple-select-label">status</InputLabel> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Status"
                                >
    <MenuItem value="all">All</MenuItem>
    <MenuItem value="active">Active</MenuItem>
    <MenuItem value="inactive">Not Active</MenuItem>
</Select>
                            </FormControl>
                        </Box>

                    </div>
                </div>
                <div className='w-full bg-white'>
                    <table className="min-w-full border text-center">
                        <thead className=" border-b">
                            <tr>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                    User Name
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                    Email
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                University
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Collage
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                class
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Student Phone
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Password
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Status
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>
                            <tr >
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">Ahmed Elsayed ali</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">  helawadih@yahoo.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Cairo University</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Medicine</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">A25</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">01065423825</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">**********</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
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
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                                                </Menu>
                                                </div>
                                                </td>
                            </tr>

                        </tbody>
                    </table>
                       
                    <div>
                    </div>
                </div>


    
</div>
    )
}

export default studentsView