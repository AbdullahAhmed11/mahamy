import React from 'react'
import Button from '@mui/material/Button';
import { IoMdAdd } from "react-icons/io";
import { Box } from '@mui/material';

const EntitiesView = () => {
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
              </Box>
              </div>
            </div>

    </div>
  )
}

export default EntitiesView