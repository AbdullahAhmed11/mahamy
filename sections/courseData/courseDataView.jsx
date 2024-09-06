'use client';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { getCourseById } from '@/actions/courses';
import { useParams } from "next/navigation";
import ReactPlayer from 'react-player';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from "react-icons/io";
import Button from '@mui/material/Button';
import AddNewMonth from '@/app/component/AddNewMonth';
import { deleteMonth } from '@/actions/courses';

const CourseDataView = () => {
    const [courseInfo, setCourseInfo] = useState(null)

    const idd = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddMonthOpen = () => {
        handleClose();
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

useEffect(() => {
    const fetchData = async () => {
     
        try {
            // Fetch course data after lesson creation
            const courseData = await getCourseById(idd.id);
            setCourseInfo(courseData);  
        }catch(error) {
            console.log(error)
        }
    }
    fetchData()
}, [idd.id])


const handleDeleteMonth = async (lessonId) => {
    try {
        // Call the API to delete the month
        await deleteMonth(lessonId);

        // Update local state to remove the deleted lesson
        setCourseInfo(prevCourseInfo => ({
            ...prevCourseInfo,
            lessons: prevCourseInfo.lessons.filter(lesson => lesson.lessonId !== lessonId)
        }));
    } catch (error) {
        console.error('Failed to delete month:', error);
    }
};

const handleLessonAdded = async () => {
    try {
        // Fetch updated course data
        const updatedCourseData = await getCourseById(idd.id);
        setCourseInfo(updatedCourseData);
    } catch (error) {
        console.error('Failed to fetch updated course data:', error);
    }
}

const handleLectureAdded = async () => {
    try {
        // Fetch updated course data
        const updatedCourseData = await getCourseById(idd.id);
        setCourseInfo(updatedCourseData);
    } catch (error) {
        console.error('Failed to fetch updated course data:', error);
    }
};



    return (
        <div className='mt-[200px] flex flex-col gap-3'>
            <div className='flex items-center justify-between'>

                         <div>
                            {
                                 courseInfo?.courseVideoIntro ? (
                                    <div className="p-4">
                                    <h2 className="font-medium text-[25px]">Course Introduction Video</h2>
                                    <div className="mt-2">
                                    <ReactPlayer url={courseInfo?.courseVideoIntro}/>
                                    </div>
                                </div>
                            ) : (
                            <div>
                                <h2 className='pl-5'>No Introduction Video for this course </h2>
                            </div>
                                 )
                            }
                           
                        </div>
                        <div className='flex flex-col gap-3 p-4'>
                        <h2 className="font-medium text-[35px]">Course Information</h2>
                            <div className='flex items-center mt-2 gap-3'>
                                <h2 className='font-medium text-[20px]'>Course Description : </h2>
                                <p className='font-normal text-[20px] text-[#929292]'>{courseInfo?.courseDescription}</p>
                            </div>
                            <div className='flex items-center mt-2 gap-3'>
                                <h2 className='font-medium text-[20px]'>Course Date : </h2>
                                <p className='font-normal text-[20px] text-[#929292]'>{courseInfo?.courseDate}</p>
                            </div>
                            <div className='flex items-center mt-2 gap-3'>
                                <h2 className='font-medium text-[20px]'>Number Of Student : </h2>
                                <p className='font-normal text-[20px] text-[#929292]'>{courseInfo?.numberOfStudent}</p>
                            </div>
                            <div className='flex items-center mt-2 gap-3'>
                                <h2 className='font-medium text-[20px]'>Number Of Lessons : </h2>
                                <p className='font-normal text-[20px] text-[#929292]'>{courseInfo?.numberOfLessons}</p>
                            </div>
                        </div>
            </div>
            <div className='flex justify-end p-4'>
            <Button
                  type='submit'
                  onClick={handleAddMonthOpen}
                    sx={{
                        // padding: "8px",
                        background:"#004353",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // width: "300px",
                        "&:hover": {
                            backgroundColor: "#004353"
                        }
                    }}
                >
                    Add New Month
                </Button>
            </div>
            <div>
                        {
                            courseInfo?.lessons?.map((lesson) => (
                                <div key={lesson.lessonId} className='p-4'>
                                      <Accordion >
                                            <AccordionSummary
                                            expandIcon={<IoIosArrowDown />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            >
                                                <h2 className="font-medium text-[25px] ">{lesson.lessonName}</h2>

                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className='flex flex-col gap-4'>
                                                <div className='flex items-center gap-3'>
                                                <Button
                                               onClick={() => handleDeleteMonth(lesson.lessonId)}
                                                    sx={{
                                                        padding: "8px",
                                                        background: "#FF5B5B",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color:"#fff",
                                                        "&:hover": {
                                                            backgroundColor: "#FF5B5B"
                                                        }
                                                    }}
                                                    >Delete Month</Button>
                                                        <Button
                                                        sx={{
                                                            padding: "8px",
                                                            background: "#0A90B0",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color:"#fff",
                                                            "&:hover": {
                                                                backgroundColor: "#0A90B0"
                                                            }
                                                        }}
                                                    >Edit Month 
                                                    </Button>
                                                </div>
                                                <div  className='flex flex-col gap-5'>
                                                    {
                                                        lesson.lectures.map((lec) => (
                                                        <div key={lec.lectureId} className='flex items-center gap-5'>
                                                            <div>
                                                            <ReactPlayer url={lec.lectureVideoLink}/>
                                                            </div>
                                                            <div className='flex flex-col gap-3'>
                                                            <div className='flex items-center gap-2'>
                                                                <h2 className='font-medium text-[20px]'>Lecture Name : </h2>
                                                                <p className='font-normal text-[20px] text-[#929292]'>{lec?.lectureName}</p>
                                                            </div>
                                                            <div className='flex items-center gap-2'>
                                                                <h2 className='font-medium text-[20px]'>Lecture Description : </h2>
                                                                <p className='font-normal text-[20px] text-[#929292]'>{lec?.lectureDescription}</p>
                                                            </div>
                                                            </div>
                                                        </div>

                                                        ))
                                                    }
                                                </div>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                </div>
                            ))
                        }
            </div>

            <AddNewMonth
             openModal={openModal}
             handleModalClose={handleModalClose}
             courseId ={courseInfo?.courseId}
             onLessonAdded={handleLessonAdded}
             onLectureAdded={handleLectureAdded}
            />
        </div>
    );
}

export default CourseDataView;
