import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { updateStudent } from '@/actions/students';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select, MenuItem } from '@mui/material';

const EditStudentModal = ({ openModal, handleModalClose, selectedStudent }) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const [StudentName, setStudentName] = useState('');
    const [StudentEmail, setStudentEmail] = useState('');
    const [StudentPhone, setStudentPhone] = useState('');
    const [StudentPassword, setStudentPassword] = useState('');
    const [UnversityId, setUnversityId] = useState('');
    const [CollageId, setCollageId] = useState('');
    const [ClassId, setClassId] = useState('');
    const [StudentActivation, setStudentActivation] = useState(false); // New state for activation

    // Populate form fields with selectedStudent's data
    useEffect(() => {
        if (selectedStudent) {
            setStudentName(selectedStudent.studentName || '');
            setStudentEmail(selectedStudent.studentEmail || '');
            setStudentPassword(selectedStudent.studentPassword || '');
            setStudentPhone(selectedStudent.studentPhone || '');
            setUnversityId(selectedStudent.unversityId || '');
            setCollageId(selectedStudent.collageId || '');
            setClassId(selectedStudent.classId || '');
            setStudentActivation(selectedStudent.StudentActivation || '')
        }
    }, [selectedStudent]);

    // Function to check if a field has changed
    const appendIfChanged = (formData, key, newValue, originalValue) => {
        if (newValue !== originalValue) {
            formData.append(key, newValue);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append only changed fields
        appendIfChanged(formData, 'studentName', StudentName, selectedStudent.studentName);
        appendIfChanged(formData, 'studentEmail', StudentEmail, selectedStudent.studentEmail);
        appendIfChanged(formData, 'studentPhone', StudentPhone, selectedStudent.studentPhone);
        appendIfChanged(formData, 'studentPassword', StudentPassword, selectedStudent.studentPassword);
        appendIfChanged(formData, 'unversityId', UnversityId, selectedStudent.unversityId);
        appendIfChanged(formData, 'collageId', CollageId, selectedStudent.collageId);
        appendIfChanged(formData, 'classId', ClassId, selectedStudent.classId);
        appendIfChanged(formData, 'StudentActivation', StudentActivation, selectedStudent.StudentActivation);

        setIsUpdating(true);
        try {
            await updateStudent(selectedStudent?.studentId, formData);
            toast.success('Student updated successfully!');
            handleModalClose();
        } catch (error) {
            console.log(error);
            toast.error('Failed to update student.', {
                className: 'custom-toast-error', // Apply the custom class here
            });
        } finally {
            setIsUpdating(false);
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
                        border: '2px solid ##ED2121',
                    }}
                >
                    <div className="flex items-center justify-center">
                        <h2 className="font-bold text-[30px] text-[#000]">Edit Student</h2>
                    </div>
                    <form className="flex flex-col gap-10 mt-6" onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="Student Name"
                            value={StudentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                        <TextField
                            type="email"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="Email"
                            value={StudentEmail}
                            onChange={(e) => setStudentEmail(e.target.value)}
                        />
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="University"
                            value={UnversityId}
                            onChange={(e) => setUnversityId(e.target.value)}
                        />
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="Collage"
                            value={CollageId}
                            onChange={(e) => setCollageId(e.target.value)}
                        />
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="Class"
                            value={ClassId}
                            onChange={(e) => setClassId(e.target.value)}
                        />
                        <TextField
                            type="password"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="Password"
                            value={StudentPassword}
                            onChange={(e) => setStudentPassword(e.target.value)}
                        />
                        <TextField
                            type="text"
                            variant="standard"
                            sx={{ width: '100%' }}
                            placeholder="Phone Number"
                            value={StudentPhone}
                            onChange={(e) => setStudentPhone(e.target.value)}
                        />
                        <div>
                            <Select
                                value={StudentActivation}
                                onChange={(e) => setStudentActivation(e.target.value)}  // No need for boolean conversion
                                variant="standard"
                                fullWidth
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                type="submit"
                                sx={{
                                    width: '150px',
                                    height: '45px',
                                    borderRadius: '10px',
                                    background: '#2C0076',
                                    color: '#fff',
                                    ':hover': {
                                        background: '#2C0076',
                                    },
                                }}
                            >
                                {isUpdating ? 'Updating...' : 'Edit'}
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default EditStudentModal;
