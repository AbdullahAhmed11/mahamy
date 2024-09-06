import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { deleteStudent } from '@/actions/students';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteModal = ({ openModal, handleModalClose, selectedStudent }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (selectedStudent?.studentId) {
            setIsDeleting(true);
            try {
                await deleteStudent(selectedStudent?.studentId);
                toast.success("Student deleted successfully!");
                handleModalClose();
            } catch (error) {
                console.error('Failed to delete student or revalidate:', error);
                toast.error("Failed to delete student.", {
                    className: 'custom-toast-error', // Apply the custom class here
                });
            } finally {
                setIsDeleting(false);
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
                        border: "2px solid ##ED2121"
                    }}
                >
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <h2 className='font-bold text-[30px] text-[#000]'>Students Delete</h2>
                        <p className='text-[20px] text-[#8C959F]'>Are you sure you want to delete this account?</p>
                    </div>

                    <div className='flex mt-10 gap-5 items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <Button
                                type="submit"
                                onClick={handleDelete}
                                disabled={isDeleting}
                                sx={{
                                    width: "120px",
                                    height: "45px",
                                    borderRadius: "8px",
                                    background: isDeleting ? "#ccc" : "#ED2121",
                                    color: "#fff",
                                    ":hover": {
                                        background: isDeleting ? "#ccc" : "#ED2121",
                                    },
                                }}
                            >
                                {isDeleting ? "Deleting..." : "Delete"}
                            </Button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Button
                                type="submit"
                                onClick={handleModalClose}
                                sx={{
                                    width: "120px",
                                    height: "45px",
                                    borderRadius: "8px",
                                    background: "#fff",
                                    color: "#6E7781",
                                    border: "2px solid #6E7781",
                                }}
                            >
                                Go Back
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
         
        </>
    );
}

export default DeleteModal;
