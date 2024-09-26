import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { createLecture } from '@/actions/courses'; // If using a separate action, otherwise you can use fetch directly
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const AddLectureModal = ({ open, handleClose, monthData, onLectureAdded }) => {
    const [lectureName, setLectureName] = useState('');
    const [lectureDescription, setLectureDescription] = useState('');
    const [lectureVideoLink, setLectureVideoLink] = useState('');
    const [lectureFileLink, setLectureFileLink] = useState('');
    const [lectureExamLink, setLectureExamLink] = useState('');
    // const [lessonId, setLessonId] = useState(monthData?.lessonId); // Assuming monthData contains lessonId

    // Handler to submit the form data
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        const lectureData = {
            lectureName,
            lectureDescription,
            lectureVideoLink,
            lectureFileLink,
            lectureExamLink,
            lessonId: monthData.lessonId
        };

        try {
            const response = await fetch('https://mhamcourses-001-site1.atempurl.com/api/Course/Insert/Lecture', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lectureData)
            });

            // Log raw response for debugging
            console.log(response);

            // Check if the response is OK
            if (response.ok) {
                // Try to parse JSON, but if it fails, handle it
                let data;
                try {
                    data = await response.json();
                } catch (err) {
                    console.warn('Response is not JSON:', err);
                    data = null; // Handle non-JSON response (e.g., plain text)
                }

                // If we get a valid response, handle success
                if (data) {
                    toast.success('Lecture added successfully!');
                } else {
                    toast.success('Lecture added, but the response was not JSON.');
                }

                if (onLectureAdded) onLectureAdded();  // Notify parent component that a new lecture was added
                handleClose(); // Close the modal
            } else {
                const errorMessage = `Failed to add lecture: ${response.status} ${response.statusText}`;
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error('Network error:', error);
            toast.error('Failed to add lecture: Network error');
        }
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        border: "2px solid #ED2121"
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Lecture Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={lectureName}
                            onChange={(e) => setLectureName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Lecture Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={lectureDescription}
                            onChange={(e) => setLectureDescription(e.target.value)}
                            required
                        />
                        <TextField
                            label="Video Link"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={lectureVideoLink}
                            onChange={(e) => setLectureVideoLink(e.target.value)}
                        />
                        <TextField
                            label="File Link"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={lectureFileLink}
                            onChange={(e) => setLectureFileLink(e.target.value)}
                        />
                        <TextField
                            label="Exam Link"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={lectureExamLink}
                            onChange={(e) => setLectureExamLink(e.target.value)}
                        />
                        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                            Add Lecture
                        </Button>
                    </form>
                </Box>
            </Modal>
            <ToastContainer />
        </>
    );
};

export default AddLectureModal;
