import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddToStudentModal = ({ openModal, handleModalClose, selectedStudent }) => {
    const [studentId, setStudentId] = useState(selectedStudent?.studentId); // Student ID from selected student
    const [courseId, setCourseId] = useState(''); // Initialize courseId as empty string

    const handleConfirm = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('https://mhamcourses-001-site1.atempurl.com/api/Student/Insert/Student/In/Course', {
                studentId: selectedStudent?.studentId, // Ensure studentId is sent as an integer
                courseId: parseInt(courseId, 10) // Convert courseId to integer
            });

            // Handle successful response

            toast.success('Student added to course successfully!');
            handleModalClose(); // Close the modal after success

        } catch (error) {
            // Handle error response
            if (error.response) {
                // If the error response exists, display the error message
                toast.error(error.response.data.message || 'Failed to add student to course');
            } else {
                toast.error('An error occurred. Please try again.');
            }
        }
    };

    return (
        <>
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
                        border: "2px solid #ED2121"
                    }}
                >
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <h2 className='font-bold text-[30px] text-[#000]'>Add To Course</h2>
                        <p className='text-[#8C959F] font-normal text-[20px]'>Add student to Course</p>
                    </div>
                    <form className='flex flex-col gap-10 mt-6' onSubmit={handleConfirm}>
                        <div>
                            <TextField
                                type="text"
                                variant="standard"
                                sx={{
                                    width: "100%"
                                }}
                                value={courseId}
                                onChange={(e) => setCourseId(e.target.value)} // Capture course ID input
                                placeholder='Enter Course ID' // Placeholder indicating the expected input
                            />
                        </div>

                        <div className='flex gap-5 items-center justify-center'>
                            <Button
                                type="button" // Change type to "button" for the Cancel button
                                sx={{
                                    width: "150px",
                                    height: "45px",
                                    borderRadius: "10px",
                                    background: "transparent",
                                    color: "#4834D4",
                                    borderColor: "#4834D4",
                                    border: "2px solid #4834D4"
                                }}
                                onClick={handleModalClose} // Close modal on cancel
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
            <ToastContainer />
        </>
    );
};

export default AddToStudentModal;
