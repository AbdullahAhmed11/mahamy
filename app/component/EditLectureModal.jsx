import React, { useState } from 'react';
import { Modal, TextField, Button, Box } from '@mui/material';

const EditLectureModal = ({ open, onClose, lecture, onSave }) => {
  const [lectureName, setLectureName] = useState(lecture?.lectureName || '');
  const [lectureDescription, setLectureDescription] = useState(lecture?.lectureDescription || '');
  const [lectureVideoLink, setLectureVideoLink] = useState(lecture?.lectureVideoLink || '');
  const [lectureFileLink, setLectureFileLink] = useState(lecture?.lectureFileLink || '');
  const [lectureExamLink, setLectureExamLink] = useState(lecture?.lectureExamLink || '');

  const handleSave = () => {
    const updatedLecture = {
      lectureName,
      lectureDescription,
      lectureVideoLink,
      lectureFileLink,
      lectureExamLink,
      lessonId: lecture?.lessonId,
    };
    onSave(updatedLecture);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Edit Lecture</h2>
        <TextField
          label="Lecture Name"
          fullWidth
          value={lectureName}
          onChange={(e) => setLectureName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Lecture Description"
          fullWidth
          value={lectureDescription}
          onChange={(e) => setLectureDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Lecture Video Link"
          fullWidth
          value={lectureVideoLink}
          onChange={(e) => setLectureVideoLink(e.target.value)}
          margin="normal"
        />
        {/* <TextField
          label="Lecture File Link"
          fullWidth
          value={lectureFileLink}
          onChange={(e) => setLectureFileLink(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Lecture Exam Link"
          fullWidth
          value={lectureExamLink}
          onChange={(e) => setLectureExamLink(e.target.value)}
          margin="normal"
        /> */}
        <Button
          onClick={handleSave}
          sx={{ mt: 2, backgroundColor: '#0A90B0', color: '#fff' }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditLectureModal;
