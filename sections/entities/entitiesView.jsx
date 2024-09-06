import React from 'react'
import Button from '@mui/material/Button';
import { IoMdAdd } from "react-icons/io";

const EntitiesView = () => {
  return (
    <div className='flex flex-col gap-4'>
           <div className='flex items-center justify-between'>
                    <h2 className='text-[#09003F] font-bold text-[30px]'> Entites</h2>
            </div>
            <div className='w-full flex gap-5'>
                <div className='w-1/3 h-[500px] bg-[#B3B3B7] rounded-md border border-2'>22</div>
                <div className='w-1/3 h-[700px] bg-[#E2E8F0] rounded-md border border-2'></div>
                <div className='w-1/3 h-[700px] bg-[#E2E8F0] rounded-md border border-2'></div>
            </div>
    </div>
  )
}

export default EntitiesView