import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import InsertLecture from './InsertLecture';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCourse } from '@/actions/courses';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const EditCourse = ({ selectedCourseId, openModal, handleModalClose }) => {
    const [CourseName, setCourseName] = useState('');
    const [CourseDescription, setCourseDescription] = useState('');
    const [CollageId, setCollageId] = useState('');
    const [ClassId, setClassId] = useState('');
    const [UnversityId, setUnversityId] = useState('');
    const [CourseIntroVideo, setCourseIntroVideo] = useState('')

    useEffect(() => {
        console.log(selectedCourseId)
        if (selectedCourseId) {
            setCourseName(selectedCourseId.courseName || '');
            setCourseDescription(selectedCourseId.courseDescription || '');
            setCollageId(selectedCourseId.collageName || '');
            setClassId(selectedCourseId.ClassId || '');
            setUnversityId(selectedCourseId.UnversityId || '');
            setCourseIntroVideo(selectedCourseId.CourseIntroVideo || '');

        }
    }, [selectedCourseId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('CourseName', CourseName);
        formData.append('CourseDescription', CourseDescription);
        formData.append('CourseIntroVideo', CourseIntroVideo);
        await updateCourse( selectedCourseId?.courseId,  formData );
        toast.success('Course Edited successfully!');

   
        // Close the modal after submission
        handleModalClose();
    };

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
                }}
            >
                <div className='flex items-center justify-center'>
                    <h2 className='font-bold text-[30px] text-[#000]'>Edit Course</h2>
                </div>
                <form className='flex flex-col gap-10 mt-6' onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{
                                width: "100%"
                            }}
                            placeholder='Course Titel'
                            value={CourseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{
                                width: "100%"
                            }}
                            placeholder='Course Description'
                            value={CourseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <TextField
                            type="url"
                            variant="standard"
                            fullWidth
                            placeholder="Video Introduction URL"
                            value={CourseIntroVideo}
                            onChange={(e) => setCourseIntroVideo(e.target.value)}
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <Button
                            type="submit"
                            sx={{
                                width: "150px",
                                height: "45px",
                                borderRadius: "10px",
                                background: "#0A90B0",
                                color: "#fff",
                            }}
                        >
                            Edit Course
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default EditCourse