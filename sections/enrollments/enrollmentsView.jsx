'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { CiShare1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import TextField from '@mui/material/TextField';
import { IoIosSearch } from "react-icons/io";
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoEyeOutline } from "react-icons/io5";

const EnrollmentsView = ({allEnroll}) => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEnroll, setFilteredEnroll] = useState(allEnroll);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const filtered = allEnroll.filter(enroll => {
            const matchesSearchQuery = enroll.courseName?.toLowerCase().includes(searchQuery.toLowerCase())             
            return matchesSearchQuery
        })
        setFilteredEnroll(filtered)
    }, [searchQuery, allEnroll])

  return (
    <div className='flex flex-col gap-5'>
    <div className='flex items-center justify-between'>
        <h2 className='text-[#09003F] font-bold text-[30px]'> Enrolments</h2>
        <div className="flex items-center gap-3">
            <Button
                endIcon={<CiShare1 />}
                style={{
                    backgroundColor: "#004353",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "5px",
                    width: "210px",
                    height: "49px"
                }}
            >
                Export Enrolments
            </Button>

        </div>
    </div>
    <div className='w-full flex gap-3 h-[70px] bg-white rounded-md shadow-md p-4'>
        <div>
            <TextField
                id="standard-basic"
                variant="standard"
                sx={{
                    width: "300px"
                }}
                placeholder='Search by Course title, subject'
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
        {/* <div className="flex items-center gap-2">
            <p>Course Level: </p>
            <Box sx={{ width: 120, height: "40px", display: "flex", alignItems: "center", gap: "3px" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="All"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Active</MenuItem>
                        <MenuItem value={20}>No Active</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div> */}
    </div>
    <div>
    <div className='w-full bg-white'>
            <table className="min-w-full border text-center">
                <thead className=" border-b">
                    <tr>
                        <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                            Course Title
                        </th>
                        <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                            Active Student
                        </th>
                        <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                            Subject
                        </th>
                        <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                            Level
                        </th>
                        <th scope="col" className="text-[20px] font-medium text-[#09003F] px-6 py-4">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredEnroll?.map((enroll) => (
                    <tr className="bg-white" key={enroll.courseId}>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                            {enroll.courseName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                            {enroll.studentActive}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                       subject
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                         level
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium  text-[#7D7D7D]">
                            {/* <Button
                                startIcon={<IoEyeOutline />}
                                style={{
                                    backgroundColor: "#0A90B0",
                                    color: "#fff",
                                    display: "flex",
                                    // alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "5px",
                                    width: "102px",
                                    height: "35px"
                                }}
                            >
                                Details
                            </Button> */}
                            <div className=" bg-[#4834D4] text-white p-3 w-[102px] h-[55px] rounded-md flex items-center gap-2 justify-center ">Details <span><IoEyeOutline /></span></div>
                        </td>
                    </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default EnrollmentsView