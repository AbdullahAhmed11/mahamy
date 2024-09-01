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
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import DeleteModal from '@/app/component/DeleteModal';
import CreateStudentModal from '@/app/component/CreateStudentModal';
import EditStudentModal from '@/app/component/EditStudentModal';
import AddToStudentModal from '@/app/component/AddToStudentModal';
import { fetchStudentProfile } from '@/actions/students';
import StudentProfile from '@/app/component/StudentProfile';


const studentsView = ({students}) => {

    const [age, setAge] = useState('all');
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, studentId) => {
        setAnchorEl(event.currentTarget);
        setSelectedStudentId(studentId); 
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
    //create
    const handleCreateOpenModal = () => {
        setIsModalCreateOpen(true);
    };
    
    const handleCloseCreateModal = () => {
        setIsModalCreateOpen(false);
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

    //add student
    const [openAddStudentTo, setOpenAddStudentTo] = useState(false)

    const handleAddStudentModal = () => {
        handleClose();
        setOpenAddStudentTo(true)
    }
    const handleAddStudentModalClose = () => {
        setOpenAddStudentTo(false)
    }

    //profile
    const [openDrawer, setOpenDrawer] = useState(false);
    const [dataProfile, setDataProfile] = useState([])

    const toggleDrawer = (newOpen) => async () => {
        setOpenDrawer(newOpen);

        if (newOpen && selectedStudentId) {
            try {
                const response = await fetchStudentProfile(selectedStudentId?.studentId);
                setDataProfile(response);
            } catch (error) {
                console.error("Failed to fetch student profile:", error);
            }
        }
    };

    //search and filter 
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStudents, setFilteredStudents] = useState(students);
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
        const filtered = students.filter(student => {
            const matchesSearchQuery = student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                       student.studentEmail.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === 'all' || 
                                  (statusFilter === 'active' && student.studentActivation) || 
                                  (statusFilter === 'inactive' && !student.studentActivation);
            const matchesUniversity = universityFilter === 'all' || 
                                      student.unversityName === universityFilter;  // New filter condition
            const matchesCollege = collegeFilter === 'all' ||
                                      student.collageName === collegeFilter;

            return matchesSearchQuery && matchesStatus && matchesUniversity && matchesCollege;
        });

        setFilteredStudents(filtered);
    }, [searchQuery, statusFilter, universityFilter, collegeFilter, students]);

    return (
        <div className='flex flex-col gap-4'>
         <div className='flex items-center justify-between'>
                    <h2 className='text-[#09003F] font-bold text-[30px]'> Student</h2>
                    <div className="flex items-center gap-3">
                        <Button
                            endIcon={<CiShare1 />}
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
                            Export user
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
                            New Student
                        </Button>
                    </div>
                </div>
                <div className='w-full flex gap-3 h-[70px] bg-white rounded-md shadow-md p-4'>
                    <div>
                    <TextField
    id="standard-basic"
    variant="standard"
    sx={{ width: "300px" }}
    placeholder='Search by username, email'
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
                                    User Name
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                    Email
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
                                Student Phone
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Password
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Status
                                </th>
                                <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                                Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                         
                         {
                            filteredStudents.map((student) => (
                            <tr key={student.studentId}>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">{student.studentName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {student.studentEmail}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {student.unversityName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]"> {student.collageName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">{student.className}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">{student.studentPhone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">{student.studentPassword}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <FormControlLabel
                                                                control={
                                                                    <Switch
                                                                    checked={student.studentActivation}
                                                                        color="primary"
                                                                        value="dynamic-class-name"
                                                                    />
                                                                }
                                                            />
                                            </td>
                                            <td>
                                            <div>
                                            <button onClick={(event) => handleClick(event, student)}>
                                                <HiDotsVertical className='w-[22px] h-[22px]' />
                                            </button>
                                                <Menu
                                                    id="demo-positioned-menu"
                                                    aria-labelledby="demo-positioned-button"
                                                    anchorEl={anchorEl}
                                                    open={open}
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
                                                    <MenuItem onClick={handleAddStudentModal}>

                                                        <span className='text-[#B3B3B7] flex items-center gap-2'> <IoIosAddCircleOutline/> Add to course </span>
                                                    </MenuItem>
                                                    <MenuItem onClick={toggleDrawer(true)}>
                                                    
                                                    <span className='text-[#B3B3B7] flex items-center gap-2'><IoEyeOutline/> View Profile </span>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleEditModal}><span className='text-[#B3B3B7] flex items-center gap-2'> <LiaEdit/> Edit Student</span></MenuItem>
                                                    <MenuItem onClick={handledeleteModal}><span className='text-[#FF5B5B] flex items-center gap-2'><MdOutlineDelete/>Delete</span></MenuItem>
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


    <DeleteModal
         openModal={openModal}
         handleModalClose={handleModalClose}
         selectedStudent={selectedStudentId}
    />
    <CreateStudentModal
        isModalCreateOpen={isModalCreateOpen}
        handleCloseCreateModal={handleCloseCreateModal}
    />
    <EditStudentModal
          openModal={openEditModal}
          handleModalClose={handleEditModalClose}
          selectedStudent={selectedStudentId}
    />
    <AddToStudentModal
    openModal={openAddStudentTo}
    handleModalClose={handleAddStudentModalClose}
    />
    <StudentProfile
     toggleDrawer={toggleDrawer}
     openDrawer={openDrawer}
     dataProfile={dataProfile}
                         
    />
</div>
    )
}

export default studentsView