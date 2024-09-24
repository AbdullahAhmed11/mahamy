import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createLecture } from '@/actions/courses';

const InsertLecture = ({ lessonId, handleCloseCreateModal, onLectureAdded }) => {
    const [lectureName, setLectureName] = useState("");
    const [lectureDescription, setLectureDescription] = useState("");
    const [lectureVideoLink, setlectureVideoLink] = useState("");
    const [selectedOption, setSelectedOption] = useState('video');
    const [pdfFile, setPdfFile] = useState(null);
    const [lectureExamLink, setLectureExamLink] = useState("")

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
                lectureVideoLink: lectureVideoLink,
                lectureFileLink: pdfFile,
                lectureExamLink: lectureExamLink,
                lessonId: lessonId, // Assuming courseId is used as monthId, adjust if necessary
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
            {selectedOption === 'exam' && (
                <div className='w-1/2 flex flex-col gap-2 bg-[#F1FEFF] border-dashed border-2 items-center justify-center h-[400px]'>
                    <label className='text-[#6B6A6A] font-medium'>Add Exam Link (e.g., Google Form)</label>
                    <TextField
                        value={lectureExamLink}
                        onChange={(e) => setLectureExamLink(e.target.value)}
                        type="url"
                        fullWidth
                        required
                        placeholder="Insert Exam Link"
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
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#09C1E0"
                            }
                        }}
                    >
                        Add Exam Link
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
                        <FormControlLabel value="exam" control={<Radio />} label="Exam Link" />

                    </RadioGroup>
                </FormControl>
            </div>
        </form>
    );
};

export default InsertLecture;