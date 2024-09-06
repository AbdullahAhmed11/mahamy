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

const coursesView = ({courses}) => {

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
  //delete
  const handledeleteModal = () => {
    handleClose();
    setOpenModal(true);
};

const handleModalClose = () => {
    setOpenModal(false);
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


// search and filter 
const [searchQuery, setSearchQuery] = useState('');
const [filtercourses, setFilterCourses] = useState(courses);
const [statusFilter, setStatusFilter] = useState('all');
const [universityFilter, setUniversityFilter] = useState('all');  // New state for university filter
const [collegeFilter, setCollegeFilter] = useState('all');


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

            return matchesSearchQuery && matchesStatus && matchesUniversity && matchesCollege;
    })

    setFilterCourses(filtered)
},  [searchQuery, statusFilter, universityFilter, collegeFilter, courses])


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
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="Cairo University">Cairo University</MenuItem>
                                <MenuItem value="Ain Shams University">Ain Shams University</MenuItem>
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
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="Medicine Faculty">Medicine </MenuItem>
                                <MenuItem value="Dentistry  Faculty">Dentistry  </MenuItem>
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
                                            <td>
                                            <div>
                                            <button onClick={(event) => handleClick(event, course.courseId)}>
                                                <HiDotsVertical className='w-[22px] h-[22px]' />
                                            </button>
                                                <Menu
                                                   id={`menu-${course.courseId}`}
                                                    aria-labelledby="demo-positioned-button"
                                                    anchorEl={anchorEl}
                                                    open={open && selectedCourseId === course.courseId}
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
                                                    <MenuItem onClick={handledeleteModal}><span className='text-[#FF5B5B] flex items-center gap-2'><MdOutlineDelete/>Delete</span></MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        <Link href={`course/${course.courseId}`}>
                                                        View Profile
                                                        </Link>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleAddStudentModal}>

                                                        <span className=' flex items-center gap-2'> <IoIosAddCircleOutline/> Add to course </span>
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
                  selectedCourseId={selectedCourseId}
            />
    <AddToStudentModal
    openModal={openAddStudentTo}
    handleModalClose={handleAddStudentModalClose}
    selectedCourseId={selectedCourseId}
    />
            
            <CreateCourseModal
                isModalCreateOpen={isModalCreateOpen}
                handleCloseCreateModal={handleCloseCreateModal}
            />
</div>
    )
}

export default coursesView