import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const AddToStudentModal = ({openModal, handleModalClose}) => {
  return (
    <Modal
    open={openModal}
    onClose={handleModalClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
>
    <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            border: "2px solid ##ED2121"
        }}
    >
        <div className='flex flex-col gap-3 items-center justify-center'>
            <h2 className='font-bold text-[30px] text-[#000]'> Add To Course</h2>
            <p className='text-[#8C959F] font-normal text-[20px]'>Add student to Course</p>
        </div>
        <form className='flex flex-col gap-10 mt-6' >
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Student Name'
                />
            </div>
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Course Name'
                />
            </div>
    
            <div className='flex gap-5 items-center justify-center'>
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
                    Confirm 
                </Button>
            </div>
        </form>
    </Box>
</Modal>
  )
}

export default AddToStudentModal