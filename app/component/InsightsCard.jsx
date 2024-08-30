import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const InsightsCard = () => {
    return (
        <div className='w-full grid grid-cols-3 gap-3'>
            <div className='w-full flex gap-2   h-[255px] bg-white p-4 shadow-md'>
                <div className='w-[5px] h-full bg-[#4834D4] rounded-md'></div>
                <div className='flex flex-col w-full justify-between p-2'>
                    <div className='flex items-center justify-between w-full '>
                        <p className='text-[#B3B3B7] font-medium text-[22px]'>Students</p>
                        <div className='bg-[#E5FCFF] w-[48px] h-[48px] flex items-center justify-center'>
                            <Image
                                alt="student"
                                height={23}
                                width={32}
                                src="/assets/Friends.png"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[#4834D4] font-bold text-[40px]'>650+</h2>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span><FaLongArrowAltUp className='text-[#4834D4] w-[10px] h-[15px]' /></span>
                        <span className='font-medium text-[#B3B3B7] text-[12px]'>16% Incr. compared to last month</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-2   h-[255px] bg-white p-4 shadow-md'>
                <div className='w-[5px] h-full bg-[#218BFF] rounded-md'></div>
                <div className='flex flex-col w-full justify-between p-2'>
                    <div className='flex items-center justify-between w-full '>
                        <p className='text-[#B3B3B7] font-medium text-[22px]'>Admins</p>
                        <div className='bg-[#E5F3FE] w-[48px] h-[48px] flex items-center justify-center'>
                            <Image
                                alt="student"
                                height={23}
                                width={32}
                                src="/assets/instvector.png"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[#218BFF] font-bold text-[40px]'>112+</h2>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span><FaLongArrowAltUp className='text-[#28B411] w-[10px] h-[15px]' /></span>
                        <span className='font-medium text-[#B3B3B7] text-[12px]'>16% Incr. compared to last month</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-2   h-[255px] bg-white p-4 shadow-md'>
                <div className='w-[5px] h-full bg-[#E8B321] rounded-md'></div>
                <div className='flex flex-col w-full justify-between p-2'>
                    <div className='flex items-center justify-between w-full '>
                        <p className='text-[#B3B3B7] font-medium text-[22px]'>Courses</p>
                        <div className='bg-[#FFF2CE] w-[48px] h-[48px] flex items-center justify-center'>
                            <Image
                                alt="student"
                                height={23}
                                width={32}
                                src="/assets/icontupe.png"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[#E8B321] font-bold text-[40px]'>250+</h2>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span><FaLongArrowAltUp className='text-[#FF5B5B] w-[10px] h-[15px]' /></span>
                        <span className='font-medium text-[#B3B3B7] text-[12px]'>16% Incr. compared to last month</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsightsCard