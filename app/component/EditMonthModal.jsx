import React, { useState, useEffect } from 'react';
import { Button, Modal, TextField, Box } from '@mui/material';
import { editMonth } from '@/actions/courses'; // Import your editMonth function

const EditMonthModal = ({ open, handleClose, monthData, onMonthUpdated }) => {
  const [lessonName, setLessonName] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [courseId, setCourseId] = useState('');

  useEffect(() => {
    console.log(monthData)
    if (monthData) {
      setLessonName(monthData.lessonName);
      setLessonDescription(monthData.lessonDescription);
      setCourseId(monthData.courseId);
    }
  }, [monthData]);

  const handleSubmit = async () => {
    try {
      await editMonth(monthData.lessonId, lessonName, lessonDescription, courseId);
      onMonthUpdated(); // Refresh the data after update
      handleClose();
    } catch (error) {
      console.error("Error updating month:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyles }}>
        <h2>Edit Month</h2>
        <TextField
          label="Lesson Name"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Lesson Description"
          value={lessonDescription}
          onChange={(e) => setLessonDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', mt: 2 }}>
          <Button onClick={handleClose} variant="contained" color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default EditMonthModal;
