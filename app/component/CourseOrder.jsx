import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";

const CourseOrder = () => {
    return (
        <div className='bg-white p-4 flex flex-col gap-4 w-full shadow-md rounded-md'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-[22px] text-[#000]'>Course Order</h2>
                <Link className='flex items-center gap-2' href="#">
                    <span className='font-medium text-[16px] text-primary'>See more</span>
                    <FaArrowRightLong className='text-primary' />
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border rounded-md shadow-md flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                        <p className='text-[#878789] font-normal text-[12px]'>Request Enrolling in Orthopaedic Surgery Couse </p>
                    </div>
                    <div className='flex  flex-col'>
                        <button className='text-[12px] p-2 shadow-md font-medium text-[#00B654]'>
                            Approve
                        </button>

                        <button className='text-[12px] p-2 shadow-md font-medium text-[#FF5B5B]'>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='border rounded-md shadow-md flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                        <p className='text-[#878789] font-normal text-[12px]'>Request Enrolling in Orthopaedic Surgery Couse </p>
                    </div>
                    <div className='flex  flex-col'>
                        <button className='text-[12px] p-2 shadow-md font-medium text-[#00B654]'>
                            Approve
                        </button>

                        <button className='text-[12px] p-2 shadow-md font-medium text-[#FF5B5B]'>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='border rounded-md shadow-md flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                        <p className='text-[#878789] font-normal text-[12px]'>Request Enrolling in Orthopaedic Surgery Couse </p>
                    </div>
                    <div className='flex  flex-col'>
                        <button className='text-[12px] p-2 shadow-md font-medium text-[#00B654]'>
                            Approve
                        </button>

                        <button className='text-[12px] p-2 shadow-md font-medium text-[#FF5B5B]'>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='border rounded-md shadow-md flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                        <p className='text-[#878789] font-normal text-[12px]'>Request Enrolling in Orthopaedic Surgery Couse </p>
                    </div>
                    <div className='flex  flex-col'>
                        <button className='text-[12px] p-2 shadow-md font-medium text-[#00B654]'>
                            Approve
                        </button>

                        <button className='text-[12px] p-2 shadow-md font-medium text-[#FF5B5B]'>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='border rounded-md shadow-md flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                        <p className='text-[#878789] font-normal text-[12px]'>Request Enrolling in Orthopaedic Surgery Couse </p>
                    </div>
                    <div className='flex  flex-col'>
                        <button className='text-[12px] p-2 shadow-md font-medium text-[#00B654]'>
                            Approve
                        </button>

                        <button className='text-[12px] p-2 shadow-md font-medium text-[#FF5B5B]'>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className='border rounded-md shadow-md flex items-center justify-between p-2'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-[16px] text-[#1E1E1E]'>Abdullah Ahmed</p>
                        <p className='text-[#878789] font-normal text-[12px]'>Request Enrolling in Orthopaedic Surgery Couse </p>
                    </div>
                    <div className='flex  flex-col'>
                        <button className='text-[12px] p-2 shadow-md font-medium text-[#00B654]'>
                            Approve
                        </button>

                        <button className='text-[12px] p-2 shadow-md font-medium text-[#FF5B5B]'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseOrder