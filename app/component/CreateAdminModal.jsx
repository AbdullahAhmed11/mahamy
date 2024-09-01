import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const CreateAdminModal = ({isModalCreateOpen, handleCloseCreateModal}) => {
  return (
    <Modal
    open={isModalCreateOpen}
    onClose={handleCloseCreateModal}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
>
    <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            border: "2px solid ##ED2121",
            display: "flex",
            flexDirection:"column",
            gap: "10px"
        }}
    >
        <div className='flex gap-6 w-full'>

        <div className='w-1/2 flex flex-col'>
        <div className='flex items-center justify-center'>
            <h2 className='font-bold text-[30px] text-[#000]'> Create Admin</h2>
        </div>
        <form className='flex flex-col gap-10 mt-6' >
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Full Name'
                />
            </div>
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Admin Name'
                />
            </div>
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Phone Number'
                />
            </div>

            <div>
                <TextField
                    type="password"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='password'
                />
            </div>

         
        </form>
        </div>
        <div className='w-1/2 p-4 h-[400px] border-2 rounded-md flex flex-col gap-5'>
            <div className='flex items-center gap-5 justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[#040320] font-bold text-[20px]'>Student</h2>
                    <p className='text-[#04032099] text-[10px] font-normal'>By allowing this permission, the admin can manage student data, add and modify student data, and add them to courses.</p>
                </div>
                <div className=''>
                <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
                </div>
            </div>
            <div className='flex items-center gap-5 justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[#040320] font-bold text-[20px]'>Admins</h2>
                    <p className='text-[#04032099] text-[10px] font-normal'>By allowing this permission, the admin can manage the data of other admins, add another admin, give him permissions, etc.</p>
                </div>
                <div className=''>
                <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
                </div>
            </div>

            <div className='flex items-center gap-5 justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[#040320] font-bold text-[20px]'>Courses</h2>
                    <p className='text-[#04032099] text-[10px] font-normal'>By allowing this permission, the admin can manage the data of other admins, add another admin, give him permissions, etc.</p>
                </div>
                <div className=''>
                <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
                </div>
            </div>

            <div className='flex items-center gap-5 justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[#040320] font-bold text-[20px]'>Enrolments</h2>
                    <p className='text-[#04032099] text-[10px] font-normal'>By allowing this permission, the admin can manage the data of other admins, add another admin, give him permissions, etc.</p>
                </div>
                <div className=''>
                <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
                </div>
            </div>
        </div>
        </div>
        <div className='flex items-center gap-5 justify-center'>
        <Button
                    type="submit"
                    sx={{
                        width: "150px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "transparent",
                        color: "#4834D4",
                        borderColor: "#4834D4",
                        border: "2px solid #4834D4"
                    }}
                >
                    Cancel 
                </Button>
                <Button
                    type="submit"
                    sx={{
                        width: "150px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "#2C0076",
                        color: "#fff",
                    }}
                >
                    Create 
                </Button>
        </div>

    </Box>
</Modal>
  )
}

export default CreateAdminModal