import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { createCourse, getCourseById } from '@/actions/courses';
import InsertLecture from './InsertLecture';
import axios from 'axios';
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
import { createLesson } from '@/actions/courses';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const CreateCourseModal = ({ isModalCreateOpen, handleCloseCreateModal }) => {
    const [step, setStep] = useState(1);
    const [CourseImage, setCourseImage] = useState(null);
    const [CourseName, setCourseName] = useState('');
    const [UnversityId, setUnversityId] = useState('');
    const [CollageId, setCollageId] = useState('');
    const [ClassId, setClassId] = useState('');
    const [CoursePrice, setCoursePrice] = useState('');
    const [CourseDescription, setCourseDescription] = useState('');
    const [courseId, setCourseId] = useState(null);
    const [courseInfo, setCourseInfo] = useState(null)


    const [UniversityList, setUniversityList] = useState([]);
    const [CollageList, setCollageList] = useState([]);
    const [ClassList, setClassList] = useState([]);

    useEffect(() => {
        // Fetch the data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mhamcourses-001-site1.atempurl.com/api/Student/Select/Unversity/Collage/Class');
                setUniversityList(response.data.unversityList);
                setCollageList(response.data.collageList);
                setClassList(response.data.classList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    //handle step

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleExited = () => {
        setStep(0); // Reset to the first step when modal closes
    }


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // const imageUrl = URL.createObjectURL(file);
            setCourseImage(file);
        }
    };

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const DoctorId = localStorage.getItem('adminId');
        console.log(DoctorId, "dd")
        const formData = new FormData();
        formData.append('CourseName', CourseName);
        formData.append('CourseDescription', CourseDescription);
        formData.append('CoursePrice', CoursePrice);
        formData.append('UnversityId', UnversityId);
        formData.append('CollageId', CollageId);
        formData.append('ClassId', ClassId);
        formData.append('DoctorId', DoctorId);
        if (CourseImage) {
            formData.append('CourseImage', CourseImage);  // Use 'CourseImage' or whatever key your backend expects
        }
        try {
            const response = await createCourse(formData);
            console.log(response, "res");
            setCourseId(response)
            handleNext(); // Close the modal on success
            if (response.ok) {
                console.log('Course created successfully');
            } else {
                console.error('Failed to create course');
            }
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };


    //add lesson 
    const [lessonName, setLessonName] = useState("")
    const [lessonDescription, setLessonDescription] = useState("")

    const handleLessonSubmit = async (e) => {
        e.preventDefault();
        try {
            await createLesson(lessonName, courseId, lessonDescription)
            console.log(courseId)

            // Fetch course data after lesson creation
            const courseData = await getCourseById(courseId);
            setCourseInfo(courseData);
            handleNext()

        } catch (error) {
            console.log(error)
        }
    }
    const clearFields = () => {
        setCourseName('');
        setCourseDescription('');
        setCoursePrice('');
        setCourseImage(null);
        setUnversityId();
        setCollageId('');
        setClassId('');
        setCourseInfo(null);
        setCourseId(null);
    };


    const handleModalClose = () => {
        handleCloseCreateModal();
        setStep(1);
        clearFields()
    };

    return (
        <Modal
            open={isModalCreateOpen}
            onClose={handleModalClose}
            onExited={handleExited}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='flex flex-col'>
                    <div className='flex itemes-center justify-between'>
                        <h2 className='text-[#1F1F1F] font-medium text-[30px]'>Create New Course</h2>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                <div className={`w-10 h-10 flex items-center justify-center ${step === 1 ? "bg-[#9EF6FB] text-[#004353]" : "bg-[#EEEFF2] text-[#878789]"}`}>1</div>
                                <p className='text-[#004353] text-[20px] font-medium'>Course Info</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <div className={`w-10 h-10 flex items-center justify-center ${step === 2 ? "bg-[#9EF6FB] text-[#004353]" : "bg-[#EEEFF2] text-[#878789]"}`}>2</div>
                                <p className='text-[#004353] text-[20px] font-medium'>Course Curriculum</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {step === 1 && (
                            <form onSubmit={handleSubmit} className='w-full flex items-center justify-between mt-3 gap-5'>
                                <div className='w-[400px] h-[400px] flex flex-col bg-[#F1FEFF] border-dashed border-2 w-1/2 flex items-center justify-center cursor-pointer' onClick={triggerFileInput}>
                                    <div>
                                        <Image
                                            src="/assets/amico.png"
                                            width={200}
                                            height={200}
                                            alt='img'
                                        />
                                    </div>
                                    <div>
                                        {CourseImage ? (
                                            <img src={CourseImage} alt="Uploaded" className='w-full h-full object-cover' />
                                        ) : (
                                            <p className='text-[12px] font-normal '>Add Course Cover by drag and drop here <span className='text-[#09C1E0] text-[12px] font-normal'>or clicking to Browse</span>  </p>
                                        )}
                                        <input
                                            id="fileInput"
                                            type="file"
                                            accept="image/*"
                                            required
                                            style={{ display: 'none' }}
                                            onChange={handleImageUpload}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 w-1/2'>
                                    <div>
                                        <TextField
                                            type="text"
                                            variant="standard"
                                            sx={{
                                                width: "100%"
                                            }}
                                            placeholder='Course title'
                                            value={CourseName}
                                            onChange={(e) => setCourseName(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Select
                                            required
                                            variant="standard"
                                            sx={{ width: "100%" }}
                                            placeholder='University'
                                            value={UnversityId}
                                            onChange={(e) => setUnversityId(e.target.value)}
                                        >
                                            {UniversityList.map((university) => (
                                                <MenuItem key={university.unversityId} value={university.unversityId}>
                                                    {university.unversityName}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </div>
                                    <div>
                                        <Select
                                            required
                                            variant="standard"
                                            sx={{ width: "100%" }}
                                            placeholder='Collage'
                                            value={CollageId}
                                            onChange={(e) => setCollageId(e.target.value)}
                                        >
                                            {CollageList.map((collage) => (
                                                <MenuItem key={collage.collageId} value={collage.collageId}>
                                                    {collage.collageName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div>
                                        <Select
                                            required
                                            variant="standard"
                                            sx={{ width: "100%" }}
                                            placeholder='Class'
                                            value={ClassId}
                                            onChange={(e) => setClassId(e.target.value)}
                                        >
                                            {ClassList.map((classItem) => (
                                                <MenuItem key={classItem.classId} value={classItem.classId}>
                                                    {classItem.className}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            variant="standard"
                                            required
                                            sx={{
                                                width: "100%"
                                            }}
                                            placeholder='Course Price [EGP]'
                                            value={CoursePrice}
                                            onChange={(e) => setCoursePrice(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
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

                                    <Button
                                        type='submit'
                                        sx={{
                                            padding: "4px",
                                            background: "#0A90B0",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#0A90B0"
                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </form>
                        )}
                        {step === 2 && (
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
                                            background: "#004353",
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
                        )}

                        {step === 3 && courseInfo && (
                            <div className='w-full border border-2 rounded-md mt-[40px] gap-4 flex flex-col h-[300px]'>

                                <div className='bg-[#EEEFF2] flex items-center justify-between h-[60px] w-full'>
                                    <h2 className='text-[#1E1E1E] text-[20px] font-medium pl-5'>{courseInfo.lessons[0]?.lessonName}</h2>
                                    <div className='flex items-center gap-2 pr-5'>
                                        <MdDelete className='text-[20px]' />

                                        <CiEdit className='text-[20px]' />
                                    </div>
                                </div>



                                <div className='flex justify-end gap-3 pr-5'>
                                    <Button
                                        sx={{
                                            padding: "4px",
                                            background: "#FF5B5B",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#FF5B5B"
                                            }
                                        }}
                                    >+ Delete Month</Button>
                                    <Button
                                        onClick={handleNext}
                                        sx={{
                                            padding: "4px",
                                            background: "#0A90B0",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#0A90B0"
                                            }
                                        }}
                                    >+ New Lecture </Button>
                                </div>
                                {/* table lec  */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    #
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Lecture Title
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {/* <button
                  className="text-blue-600 hover:text-blue-900"
                >
                     <div>
                                        <button onClick={handleClick}>
                                            <HiDotsVertical className='w-[22px] h-[22px]' />
                                        </button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <div >
                                                    <span className='font-normal text-[14px] text-[#B3B3B7]'>View Course</span>
                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <div>
                                                    <span className='font-normal text-[14px] text-[#B3B3B7]'>Edit Course</span>
                                                </div>
                                            </MenuItem>
                                           
                                        </Menu>
                                    </div>
                </button> */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <InsertLecture handleCloseCreateModal={handleCloseCreateModal} lessonId={courseInfo.lessons[0]?.lessonId} />
                        )}

                        <div className='flex justify-end mt-4 gap-3'>
                            <Button
                                onClick={handleCloseCreateModal}
                                sx={{
                                    padding: "4px",
                                    background: "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#878789",
                                    border: "1px solid #878789",
                                    "&:hover": {
                                        backgroundColor: "transparent"
                                    }
                                }}>
                                Cancel
                            </Button>

                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default CreateCourseModal;






