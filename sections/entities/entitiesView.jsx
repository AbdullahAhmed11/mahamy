'use client'
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { IoMdAdd } from "react-icons/io";
import { Box, TextField } from '@mui/material';
import { MdDelete } from "react-icons/md";
import axios from "axios"
const EntitiesView = () => {

  const [UniversityList, setUniversityList] = useState([]);
  const [CollageList, setCollageList] = useState([]);
  const [ClassList, setClassList] = useState([]);

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mobisite201.somee.com/api/Student/Select/Unversity/Collage/Class');
        setUniversityList(response.data.unversityList);
        setCollageList(response.data.collageList);
        setClassList(response.data.classList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(UniversityList)
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[#09003F] font-bold text-[30px]'> Entites</h2>
      </div>
      <div className='flex gap-5 w-full'>
        <div className='w-1/3'>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: "#E2E8F0",
              border: "1px solid #E2E8F0",
              borderRadius: "10px"

            }}
          >
            <div className="flex flex-col p-4 gap-4">
              <h2 className='font-bold'>University</h2>
              <div className='flex gap-2 items-center'>
                <TextField
                  fullWidth
                  label="Add University"
                  variant="outlined"
                  size='small'
                  sx={{
                    backgroundColor: "transparent", // transparent background
                    input: {
                      backgroundColor: "transparent", // input background also transparent
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ccc", // optional: customize border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#aaa", // optional: border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#000", // optional: border color when focused
                      },
                    },
                  }}
                />
                <div className='w-[50px] h-[50px] bg-[#4B05AD] text-white flex items-center justify-center'>
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {
                  UniversityList.map((uni) => (
                    <div key={uni.unversityId} className="flex items-center justify-between">
                      <h2 className="font-medium">{uni.unversityName}</h2>
                      <span><MdDelete /></span>
                    </div>
                  ))
                }
              </div>
            </div>
          </Box>
        </div>
        <div className='w-1/3'>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: "#E2E8F0",
              border: "1px solid #E2E8F0",
              borderRadius: "10px"

            }}
          >
            <div className="flex flex-col p-4 gap-4">
              <h2 className='font-bold'>Collage</h2>
              <div className='flex gap-2 items-center'>
                <TextField
                  fullWidth
                  label="Add Collage"
                  variant="outlined"
                  size='small'
                  sx={{
                    backgroundColor: "transparent", // transparent background
                    input: {
                      backgroundColor: "transparent", // input background also transparent
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ccc", // optional: customize border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#aaa", // optional: border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#000", // optional: border color when focused
                      },
                    },
                  }}
                />
                <div className='w-[50px] h-[50px] bg-[#4B05AD] text-white flex items-center justify-center'>
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {
                  CollageList.map((col) => (
                    <div key={col.collageId} className="flex items-center justify-between">
                      <h2 className="font-medium">{col.collageName}</h2>
                      <span><MdDelete /></span>
                    </div>
                  ))
                }
              </div>
            </div>
          </Box>
        </div>
        <div className='w-1/3'>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: "#E2E8F0",
              border: "1px solid #E2E8F0",
              borderRadius: "10px"

            }}
          >
            <div className="flex flex-col p-4 gap-4">
              <h2 className='font-bold'>Class</h2>
              <div className='flex gap-2 items-center'>
                <TextField
                  fullWidth
                  label="Add Class"
                  variant="outlined"
                  size='small'
                  sx={{
                    backgroundColor: "transparent", // transparent background
                    input: {
                      backgroundColor: "transparent", // input background also transparent
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ccc", // optional: customize border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#aaa", // optional: border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#000", // optional: border color when focused
                      },
                    },
                  }}
                />
                <div className='w-[50px] h-[50px] bg-[#4B05AD] text-white flex items-center justify-center'>
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {
                  ClassList.map((clas) => (
                    <div key={clas.classId} className="flex items-center justify-between">
                      <h2 className="font-medium">{clas.className}</h2>
                      <span><MdDelete /></span>
                    </div>
                  ))
                }
              </div>
            </div>
          </Box>
        </div>
      </div>

    </div>
  )
}

export default EntitiesView