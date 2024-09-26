'use client'
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { IoMdAdd } from "react-icons/io";
import { Box, TextField } from '@mui/material';
import { MdDelete } from "react-icons/md";
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EntitiesView = () => {

  const [UniversityList, setUniversityList] = useState([]);
  const [newUniversity, setNewUniversity] = useState(""); // State for new university name
  const [CollageList, setCollageList] = useState([]);
  const [newCollage, setNewCollage] = useState('')
  const [ClassList, setClassList] = useState([]);
  const [newClass, setNewClass] = useState(""); // State for new class name

  const [error, setError] = useState(null);
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddUniversity = async () => {
    if (newUniversity.trim() === "") {
      alert("University name cannot be empty!");
      return;
    }

    try {
      const response = await axios.post('https://mhamcourses-001-site1.atempurl.com/api/Others/Insert/Unversity', {
        unversityName: newUniversity
      });
      toast.success("University added successfuly")
      setUniversityList([...UniversityList, { unversityName: newUniversity }]);
      setNewUniversity(""); // Clear input field
      fetchData()
    } catch (error) {
      console.error("Error adding university:", error);
      setError("Failed to add university");
    }
  };

  const handleDeleteUniversity = async (unversityId) => {
    try {
      const response = await axios.delete(`https://mhamcourses-001-site1.atempurl.com/api/Others/Delete/Unversity/${unversityId}`);

      setUniversityList(UniversityList.filter((uni) => uni.unversityId !== unversityId));
      toast.success("University deleted successfuly")
      fetchData()
    } catch (error) {
      console.error("Error deleting university:", error);
      setError("Failed to delete university");
    }
  };



  const handleAddCollage = async () => {
    if (newCollage.trim() === "") {
      alert("Collage name cannot be empty!");
      return;
    }

    try {
      const response = await axios.post('https://mhamcourses-001-site1.atempurl.com/api/Others/Insert/Collage', {
        collageName: newCollage
      });
      setCollageList([...CollageList, { collageName: newCollage }]);
      setNewCollage(""); // Clear input field
      fetchData();
      toast.success("Collage added successfully");
    } catch (error) {
      console.error("Error adding collage:", error);
      setError("Failed to add collage");
    }
  }


  const handleDeleteCollage = async (collageId) => {
    try {
      const response = await axios.delete(`https://mhamcourses-001-site1.atempurl.com/api/Others/Delete/Collage/${collageId}`);
      setCollageList(CollageList.filter((col) => col.collageId !== collageId));
      fetchData();
      toast.success("Collage deleted successfully");
    } catch (error) {
      console.error("Error deleting collage:", error);
      setError("Failed to delete collage");
    }
  };


  const handleAddClass = async () => {
    if (newClass.trim() === "") {
      alert("Class name cannot be empty!");
      return;
    }

    try {
      const response = await axios.post('https://mhamcourses-001-site1.atempurl.com/api/Others/Insert/Class', {
        className: newClass
      });
      setClassList([...ClassList, { className: newClass }]); // Update the ClassList state
      setNewClass(""); // Clear input field
      fetchData(); // Fetch updated data
      toast.success("Class added successfully");
    } catch (error) {
      console.error("Error adding class:", error);
      toast.error("Failed to add class");
    }
  };
  const handleDeleteClass = async (classId) => {
    try {
      await axios.delete(`https://mhamcourses-001-site1.atempurl.com/api/Others/Delete/Class/${classId}`);
      setClassList(ClassList.filter(cls => cls.classId !== classId)); // Update the ClassList state
      toast.success("Class deleted successfully");
      fetchData()
    } catch (error) {
      console.error("Error deleting class:", error);
      toast.error("Failed to delete class");
    }
  };

  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[#09003F] font-bold text-[30px]'> Entites</h2>
        </div>
        <div className='flex gap-5 w-full'>
          <div className='w-1/3'>
            <Box
              sx={{
                width: "100%",
                // height: "500px",
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
                    value={newUniversity}
                    onChange={(e) => setNewUniversity(e.target.value)} // Update state when typing
                    sx={{
                      backgroundColor: "transparent",
                      input: { backgroundColor: "transparent" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ccc" },
                        "&:hover fieldset": { borderColor: "#aaa" },
                        "&.Mui-focused fieldset": { borderColor: "#000" }
                      }
                    }}
                  />

                  <div
                    className='w-[50px] h-[50px] bg-[#4B05AD] text-white flex items-center justify-center cursor-pointer'
                    onClick={handleAddUniversity} // Trigger API call on click
                  >
                    <IoMdAdd />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {
                    UniversityList.map((uni, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <h2 className="font-medium">{uni.unversityName}</h2>
                        <span onClick={() => handleDeleteUniversity(uni.unversityId)}><MdDelete /></span>
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
                // height: "500px",
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
                    value={newCollage}
                    onChange={(e) => setNewCollage(e.target.value)}
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
                  <div
                    onClick={handleAddCollage}
                    className='w-[50px] h-[50px] bg-[#4B05AD] text-white flex items-center justify-center'>
                    <IoMdAdd />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {
                    CollageList.map((col) => (
                      <div key={col.collageId} className="flex items-center justify-between">
                        <h2 className="font-medium">{col.collageName}</h2>
                        <span onClick={() => handleDeleteCollage(col.collageId)}><MdDelete /></span>
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
                // height: "500px",
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
                    value={newClass}
                    onChange={(e) => setNewClass(e.target.value)} // Update state when typing
                    sx={{
                      backgroundColor: "transparent",
                      input: { backgroundColor: "transparent" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ccc" },
                        "&:hover fieldset": { borderColor: "#aaa" },
                        "&.Mui-focused fieldset": { borderColor: "#000" }
                      }
                    }}
                  />
                  <div
                    className='w-[50px] h-[50px] bg-[#4B05AD] text-white flex items-center justify-center cursor-pointer'
                    onClick={handleAddClass} // Trigger API call on click
                  >
                    <IoMdAdd />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {
                    ClassList.map((cls, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <h2 className="font-medium">{cls.className}</h2>
                        <span onClick={() => handleDeleteClass(cls.classId)}><MdDelete /></span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Box>
          </div>
        </div>

      </div>
      <ToastContainer />
    </>
  )
}

export default EntitiesView