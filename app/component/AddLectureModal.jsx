import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { createLecture } from '@/actions/courses';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const AddLectureModal = ({open, handleInsertLectureClose, monthId, onLectureAdded}) => {
    console.log(monthId, "monthID")
    const [lectureName, setLectureName] = useState("");
    const [lectureDescription, setLectureDescription] = useState("");
    const [lectureVideoLink, setlectureVideoLink] = useState("");
    const [selectedOption, setSelectedOption] = useState('video');
    const [pdfFile, setPdfFile] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFileUpload = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const lectureTypeId = selectedOption === 'video' ? 1 : 2; // Assuming 1 for video and 2 for PDF

        try {
            await createLecture({
                lectureName,
                lectureDescription,
                lectureVideoLink: selectedOption === 'video' ? lectureVideoLink : '', // Pass link only if it's a video
                lessonId: monthId, 
                lectureTypeId
            });
            // handleCloseCreateModal()
            // Reset the form after successful submission
            setLectureName("");
            setLectureDescription("");
            setlectureVideoLink("");
            setPdfFile(null);

            if (onLectureAdded) onLectureAdded(); // Notify parent component
            handleCloseCreateModal();

            console.log('Lecture created successfully!');
        } catch (error) {
            console.error('Error creating lecture:', error);
        }
    };

  
    return (
    <>
    <Modal
        open={open}
        onClose={handleInsertLectureClose}
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
                border: "2px solid ##ED2121"
            }}
        >
                  <form className='w-full flex gap-5 mt-10 justify-between' onSubmit={handleSubmit}>
            {selectedOption === 'video' && (
                <div className='w-1/2 flex flex-col gap-2 bg-[#F1FEFF] border-dashed border-2 items-center justify-center h-[400px]'>
                    <img
                        src="/assets/youtube.png"
                        className='w-[150px] h-[100px]'
                        alt="img"
                    />
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <label className='text-[#6B6A6A] font-medium'>Add YouTube Video URL</label>
                        <TextField
                            value={lectureVideoLink}
                            onChange={(e) => setlectureVideoLink(e.target.value)}
                            type="url"
                            fullWidth
                            required
                            id="filled-basic"
                            placeholder="Insert Link"
                            size="small"
                            sx={{
                                marginBottom: '16px',
                                padding: "5px",
                                width: "300px",
                                background: "#F7F7FC",
                            }}
                        />
                        <Button
                            type="submit"
                            
                            sx={{
                                background: "#09C1E0",
                                width: "300px",
                                height: "30px",
                                display: "flex",
                                alignItems: "center",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#09C1E0"
                                }
                            }}
                        >
                            Add
                        </Button>
                    </div>
                </div>
            )}

            {selectedOption === 'pdf' && (
                <div className='w-1/2 flex flex-col gap-2 bg-[#F1FEFF] border-dashed border-2 items-center justify-center h-[400px]'>
                    <label className='text-[#6B6A6A] font-medium'>Upload PDF File</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        className='mt-2'
                        required
                    />
                    {pdfFile && <p>{pdfFile.name}</p>}
                    <Button
                        type="submit"
                        sx={{
                            background: "#09C1E0",
                            width: "300px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                            marginTop: "20px",
                            "&:hover": {
                                backgroundColor: "#09C1E0"
                            }
                        }}
                    >
                        Upload and Add
                    </Button>
                </div>
            )}
            <div className='w-1/2 flex flex-col gap-6'>
                <TextField
                    value={lectureName}
                    onChange={(e) => setLectureName(e.target.value)}
                    type="text"
                    required
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Lecture Title'
                />
                <TextField
                    value={lectureDescription}
                    onChange={(e) => setLectureDescription(e.target.value)}
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Lecture Description'
                    required
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select Content Type</FormLabel>
                    <RadioGroup
                        aria-label="content-type"
                        name="content-type"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        row
                    >
                        <FormControlLabel value="video" control={<Radio />} label="YouTube Video" />
                        <FormControlLabel value="pdf" control={<Radio />} label="PDF File" />
                    </RadioGroup>
                </FormControl>
            </div>
        </form>
        </Box>
    </Modal>
</>
  )
}

export default AddLectureModal