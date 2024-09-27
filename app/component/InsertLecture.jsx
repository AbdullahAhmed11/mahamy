import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createLecture } from '@/actions/courses';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
const InsertLecture = ({ lessonId, handleCloseCreateModal, setStep, onLectureAdded }) => {
    const [lectureName, setLectureName] = useState('');
    const [lectureDescription, setLectureDescription] = useState('');
    const [lectureVideoLink, setLectureVideoLink] = useState('');
    const [lectureFileLink, setLectureFileLink] = useState('');
    const [lectureExamLink, setLectureExamLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        const lectureData = {
            lectureName,
            lectureDescription,
            lectureVideoLink,
            lectureFileLink,
            lectureExamLink,
            lessonId: lessonId
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
                setLectureName('')
                setLectureDescription('')
                setLectureVideoLink('')
                setLectureFileLink('')
                setLectureExamLink('')
                handleClose(); // Close the modal
                // setStep(1)
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
    );
};

export default InsertLecture;