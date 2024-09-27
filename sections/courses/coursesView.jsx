/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiShare1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import { IoIosSearch } from "react-icons/io";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { MdOutlineDelete } from "react-icons/md";
import DeleteCourseModal from '@/app/component/DeleteCourseModal';
import CreateCourseModal from '@/app/component/CreateCourseModal';
import Link from 'next/link';
import { IoIosAddCircleOutline } from "react-icons/io";
import AddToStudentModal from '@/app/component/AddToStudentModal';
import { LiaEdit } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import EditCourse from '@/app/component/EditCourse';
import axios from "axios"
const coursesView = ({ courses, getAllCourses }) => {

    const [age, setAge] = useState('all');
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedCourseId, setSelectedCourseId] = React.useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event, courseId) => {
        setAnchorEl(event.currentTarget);
        setSelectedCourseId(courseId)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        getAllCourses()
    }, [])
    //delete
    const handledeleteModal = () => {
        handleClose();
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };
    //edit
    const [openEditModal, setOpenEditModal] = useState(false)
    const handleEditModal = () => {
        handleClose();
        setOpenEditModal(true)
    }

    const handleEditModalClose = () => {
        setOpenEditModal(false)
    };


    const [openAddStudentTo, setOpenAddStudentTo] = useState(false)

    const handleAddStudentModal = () => {
        handleClose();
        setOpenAddStudentTo(true)
    }
    const handleAddStudentModalClose = () => {
        setOpenAddStudentTo(false)
    }

    //create 
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

    const handleCreateOpenModal = () => {
        setIsModalCreateOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsModalCreateOpen(false);
    };

    //filters

    const [UniversityList, setUniversityList] = useState([]);
    const [CollageList, setCollageList] = useState([]);
    const [ClassList, setClassList] = useState([]);

    useEffect(() => {
        // Fetch the data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mhamcourses-001-site1.atempurl.com/api/Student/Select/Unversity/Collage/Class');
                console.log(response)
                setUniversityList(response.data.unversityList);
                setCollageList(response.data.collageList);
                setClassList(response.data.classList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    // search and filter 
    const [searchQuery, setSearchQuery] = useState('');
    const [filtercourses, setFilterCourses] = useState(courses);
    const [statusFilter, setStatusFilter] = useState('all');
    const [universityFilter, setUniversityFilter] = useState('all');  // New state for university filter
    const [collegeFilter, setCollegeFilter] = useState('all');
    const [classFilter, setClassFilter] = useState('all')


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleStatusChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const handleUniversityChange = (event) => {  // New function to handle university filter change
        setUniversityFilter(event.target.value);
    };
    const handleCollegeChange = (event) => {
        const newCollege = event.target.value;
        setCollegeFilter(newCollege);
    };
    const handleClassChange = (e) => {
        setClassFilter(e.target.value)
    }

    useEffect(() => {
        const filtered = courses.filter(data => {
            const matchesSearchQuery = data.courseName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                data.doctorName?.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesStatus = statusFilter === 'all' ||
                (statusFilter === 'active' && data.studentActivation) ||
                (statusFilter === 'inactive' && !data.studentActivation);
            const matchesUniversity = universityFilter === 'all' ||
                data.unversityName === universityFilter;  // New filter condition
            const matchesCollege = collegeFilter === 'all' ||
                data.collageName === collegeFilter;
            const matchedClass = classFilter === "all" ||
                data.className === classFilter
            return matchesSearchQuery && matchesStatus && matchesUniversity && matchesCollege && matchedClass;
        })

        setFilterCourses(filtered)
    }, [searchQuery, statusFilter, universityFilter, collegeFilter, classFilter, courses])



    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-[#09003F] font-bold text-[30px]'> Courses</h2>
                <div className="flex items-center gap-3">
                    <Button
                        endIcon={<IoMdAdd />}
                        style={{
                            backgroundColor: "#2C0076",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            width: "180px",
                            height: "49px"
                        }}
                    >
                        Export Course
                    </Button>
                    <Button
                        endIcon={<IoMdAdd />}
                        onClick={() => handleCreateOpenModal()}
                        style={{
                            backgroundColor: "#4834D4",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            width: "180px",
                            height: "49px"
                        }}
                    >
                        New Course
                    </Button>

                </div>
            </div>
            <div className='w-full flex gap-3 h-[70px] bg-white rounded-md shadow-md p-4'>
                <div>
                    <TextField
                        id="standard-basic"
                        variant="standard"
                        sx={{ width: "300px" }}
                        placeholder='Search by Course title, Instructor'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IoIosSearch />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div className='flex gap-5 items-center'>
                    <Box sx={{ width: 170, height: "40px", display: "flex", alignItems: "center", gap: "3px" }}>
                        <p>Status: </p>
                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">status</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={statusFilter}
                                label="Status"
                                onChange={handleStatusChange}
                            >
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="active">Active</MenuItem>
                                <MenuItem value="inactive">Not Active</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ width: 170, height: "40px", display: "flex", alignItems: "center", gap: "3px" }}>
                        <p>University: </p>
                        <FormControl fullWidth>
                            <Select
                                labelId="university-filter-label"
                                id="university-filter"
                                value={universityFilter}
                                label="University"
                                onChange={handleUniversityChange}
                            >
                                {/* <MenuItem value="all">All</MenuItem> */}
                                {
                                    UniversityList.map((uni) => (
                                        <MenuItem key={uni.unversityId} value={uni.unversityName}>{uni.unversityName}</MenuItem>
                                    ))

                                }
                                {/* Add more universities as needed */}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ width: 170, height: "40px", display: "flex", alignItems: "center", gap: "3px" }}>
                        <p>Collage: </p>
                        <FormControl fullWidth>
                            <Select
                                labelId="collage-filter-label"
                                id="collage-filter"
                                value={collegeFilter}
                                label="Collage"
                                onChange={handleCollegeChange}
                            >
                                {
                                    CollageList.map((uni) => (
                                        <MenuItem key={uni.collageId} value={uni.collageName}>{uni.collageName}</MenuItem>
                                    ))

                                }
                                {/* Add more universities as needed */}
                            </Select>
                        </FormControl>
                    </Box>


                    <Box sx={{ width: 170, height: "40px", display: "flex", alignItems: "center", gap: "3px" }}>
                        <p>Class: </p>
                        <FormControl fullWidth>
                            <Select
                                labelId="class-filter-label"
                                id="class-filter"
                                value={classFilter}
                                label="class"
                                onChange={handleClassChange}
                            >
                                {
                                    ClassList.map((uni) => (
                                        <MenuItem key={uni.classId} value={uni.className}>{uni.className}</MenuItem>
                                    ))

                                }
                                {/* Add more universities as needed */}
                            </Select>
                        </FormControl>
                    </Box>
                </div>

            </div>
            <div className='w-full bg-white'>
                <table className="min-w-full border text-center">
                    <thead className=" border-b">
                        <tr>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Course Title
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Instructor
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Course Subject
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Description
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                University
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Collage
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                class
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                ID
                            </th>
                            <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtercourses.map((course) => (
                            <tr key={course.courseId}>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">{course.courseName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {course.adminName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> Orthopaedics</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {course.courseDescription}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {course.unversityName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {course.collageName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {course.className}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {course.courseId}</td>
                                <td>
                                    <div>
                                        <button onClick={(event) => handleClick(event, course)}>
                                            <HiDotsVertical className='w-[22px] h-[22px]' />
                                        </button>
                                        <Menu
                                            id={`menu-${course.courseId}`}
                                            aria-labelledby="demo-positioned-button"
                                            anchorEl={anchorEl}
                                            open={open && selectedCourseId.courseId === course.courseId}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={handledeleteModal}><span className='text-[#FF5B5B] flex items-center gap-2'><MdOutlineDelete />Delete</span></MenuItem>
                                            <MenuItem onClick={handleEditModal}><span className=' flex items-center gap-2'> <LiaEdit /> Edit Course</span></MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link href={`course/${course.courseId}`}>
                                                    <span className=' flex items-center gap-2'><IoEyeOutline /> View Course</span>
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleAddStudentModal}>
                                                <span className=' flex items-center gap-2'> <IoIosAddCircleOutline /> Add to course </span>
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <div>
                </div>
            </div>

            <DeleteCourseModal
                openModal={openModal}
                handleModalClose={handleModalClose}
                selectedCourseId={selectedCourseId?.courseId}
            />
            {/* <AddToStudentModal
                openModal={openAddStudentTo}
                handleModalClose={handleAddStudentModalClose}
                selectedCourseId={selectedCourseId?.courseId}
            /> */}
            <EditCourse
                selectedCourseId={selectedCourseId}
                openModal={openEditModal}
                handleModalClose={handleEditModalClose}

            />
            <CreateCourseModal
                isModalCreateOpen={isModalCreateOpen}
                handleCloseCreateModal={handleCloseCreateModal}
            />
        </div>
    )
}

export default coursesView