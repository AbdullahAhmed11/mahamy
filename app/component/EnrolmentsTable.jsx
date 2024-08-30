import Link from 'next/link'
import React from 'react'
import { Button } from '@mui/material'
import { IoEyeOutline } from "react-icons/io5";

const EnrolmentsTable = () => {
    return (
        <div className='w-full bg-white mb-10'>
            <div className='flex items-center justify-between p-4'>
                <h2 className='font-bold text-[30px] text-[#000]'>Enrolments</h2>
                <Link href="#">
                    <span className='text-[#4834D4] font-medium text-[16px]'>See more</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
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
                                    <tr className="bg-white ">
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedic Surgery
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            55(Student)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedics
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Level 1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <Button
                                                startIcon={<IoEyeOutline />}
                                                style={{
                                                    backgroundColor: "#4834D4",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "5px",
                                                    width: "102px",
                                                    height: "35px"
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedic Surgery
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            55(Student)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedics
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Level 1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <Button
                                                startIcon={<IoEyeOutline />}
                                                style={{
                                                    backgroundColor: "#4834D4",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "5px",
                                                    width: "102px",
                                                    height: "35px"
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedic Surgery
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            55(Student)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedics
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Level 1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <Button
                                                startIcon={<IoEyeOutline />}
                                                style={{
                                                    backgroundColor: "#4834D4",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "5px",
                                                    width: "102px",
                                                    height: "35px"
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedic Surgery
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            55(Student)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedics
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Level 1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <Button
                                                startIcon={<IoEyeOutline />}
                                                style={{
                                                    backgroundColor: "#4834D4",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "5px",
                                                    width: "102px",
                                                    height: "35px"
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedic Surgery
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            55(Student)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Orthopaedics
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            Level 1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-[#7D7D7D]">
                                            <Button
                                                startIcon={<IoEyeOutline />}
                                                style={{
                                                    backgroundColor: "#4834D4",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "5px",
                                                    width: "102px",
                                                    height: "35px"
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrolmentsTable