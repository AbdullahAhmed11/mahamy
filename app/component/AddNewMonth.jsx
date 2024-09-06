import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { createLesson, getCourseById, deleteMonth } from '@/actions/courses';
import InsertLecture from './InsertLecture';

const AddNewMonth = ({openModal, handleModalClose, courseId, onLessonAdded, onLectureAdded }) => {
    const [step, setStep] = useState(1);

    const [lessonName, setLessonName] = useState("")
    const [getLesson, setGetLesson] = useState(null)
    const [lessonDescription, setLessonDescription] = useState("")
    const [lecData, setLecData] = useState(null)
    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
      };
  

    const handleLessonSubmit = async (e) => {
        e.preventDefault();
        try {
            const lessonId = await createLesson(lessonName, courseId, lessonDescription);
            console.log(`Lesson created with ID: ${lessonId}`);
            setGetLesson(lessonId)
            const courseData = await getCourseById(courseId);
            setLecData(courseData)
            handleNext()
                // Notify parent component that a new lesson was added
                if (onLessonAdded) onLessonAdded();

        }catch(error) {
            console.log(error)
        }
    }


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
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        border: "2px solid ##ED2121"
                    }}
                >
                    {
                        step === 1 && (
                        <div className=' mt-[50px] flex gap-3 flex-col items-center justify-center'>
                            <img
                                src="/assets/Icontwo.png"
                                className='w-[100px] h-[100px]'                   
                                alt='cover'
                            />
                            <p className='text-[#929292] text-[20px] font-medium'>You must add the first Month in order to be able to add content</p>
                        
                            <form className='flex flex-col gap-2 items-center' onSubmit={handleLessonSubmit}> 
                            <TextField
                            required
                                    value={lessonName}
                                    onChange={(e) => setLessonName(e.target.value)}
                                    type="text"
                                    variant="standard"
                                    sx={{
                                    width: "100%"
                                    }}
                                    placeholder='lesson Name'
                            />
                            <TextField
                            required
                                    value={lessonDescription}
                                    onChange={(e) => setLessonDescription(e.target.value)}
                                    type="text"
                                    variant="standard"
                                    sx={{
                                    width: "100%"
                                    }}
                                    placeholder='lesson Description'
                            />
                            <Button
                            type='submit'
                            //   onClick={handleCloseCreateModal}
                                sx={{
                                    padding: "8px",
                                    background:"#004353",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "300px",
                                    "&:hover": {
                                        backgroundColor: "#004353"
                                    }
                                }}
                            >
                                + New Month
                            </Button>
                            </form>
                        </div>
                        )
                    }
                    {
                        step === 2 && (
                            <InsertLecture lessonId={getLesson} handleCloseCreateModal={handleModalClose} onLectureAdded={onLectureAdded} />
                        )
                    }
                </Box>
            </Modal>
        </>
  )
}

export default AddNewMonth