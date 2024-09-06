import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteCourse } from '@/actions/courses';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DeleteCourseModal = ({openModal, handleModalClose, selectedCourseId}) => {

    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (selectedCourseId) {
            try {
                await deleteCourse(selectedCourseId);
                toast.success("course deleted successfully!");

                handleModalClose();
            } catch (error) {
                toast.error("Failed to delete course.", {
                    className: 'custom-toast-error', // Apply the custom class here
                });
                console.error('Failed to delete course or revalidate:', error);
            }finally {
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
            <h2 className='font-bold text-[30px] text-[#000]'> Course Delete</h2>
            <p className='text-[20px] text-[#8C959F]'>Are you sure deleting this account</p>
        </div>
       
        <div className='flex mt-10  gap-5 flex items-center justify-center' >
            <div  className='flex items-center justify-center'>
                <Button
                    type="submit"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    sx={{
                        width: "120px",
                        height: "45px",
                        borderRadius: "8px",
                        background: "#ED2121",
                        color: "#fff",
                        ":hover": {
                            background: "#ED2121",
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
    <ToastContainer />
    </>

  )
}

export default DeleteCourseModal