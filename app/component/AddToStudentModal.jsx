import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { insertStudentToCourse } from '@/actions/courses';
const AddToStudentModal = ({ openModal, handleModalClose, selectedCourseId }) => {
    const [isAdding, setisAddeing] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [studentID, setStudentID] = useState(null);
    const handleSearch = async () => {
        try {
            const body = {
                studentName: searchTerm // Send the search term to the API
            };

            const response = await axios.post("https://mobisite201.somee.com/api/Student/Select/All/Student/1/40", body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data.students[0].studentId, "res")
            setStudentID(response.data.students[0].studentId)
        } catch (error) {
            console.error("Error fetching student:", error);
        }
    };

    const handleConfirm = async () => {
        if (studentID && selectedCourseId) {
            setisAddeing(true);
            try {
                const result = await insertStudentToCourse(studentID, selectedCourseId);
                toast.success("Student Added successfully!");

                console.log("Student successfully added to course:", result);
                handleModalClose(); // Close the modal after successful operation
            } catch (error) {
                toast.error("Failed to Student Added.", {
                    className: 'custom-toast-error', // Apply the custom class here
                });
                console.error("Error adding student to course:", error);
            } finally {
                setisAddeing(false);
            }
        } else {
            console.error("Student ID or Course ID is missing.");
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
                        border: "2px solid ##ED2121"
                    }}
                >
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <h2 className='font-bold text-[30px] text-[#000]'> Add To Course</h2>
                        <p className='text-[#8C959F] font-normal text-[20px]'>Add student to Course</p>
                    </div>
                    <form className='flex flex-col gap-10 mt-6' onSubmit={handleConfirm}>
                        <div>
                            <TextField
                                label="Search Student"
                                fullWidth
                                variant="outlined"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleSearch}>
                                                <IoIosSearch />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
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
                                // onClick={handleConfirm}
                                disabled={isAdding}
                                type="submit"
                                sx={{
                                    width: "150px",
                                    height: "45px",
                                    borderRadius: "10px",
                                    background: "#2C0076",
                                    color: "#fff",
                                }}
                            >
                                {isAdding ? "Confirming..." : "confirm"}

                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default AddToStudentModal