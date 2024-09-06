'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { loginAdmin } from '@/actions/admins';

const LoginForm = () => {
    // State for email and password
    const [doctorEmail, setDoctorEmail] = useState('');
    const [doctorPassword, setDoctorPassword] = useState('');
    const [error, setError] = useState(''); // State to handle error messages
    const router = useRouter(); // Initialize useRouter

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await loginAdmin(doctorEmail, doctorPassword);
            // Handle successful login
            console.log('Login successful:', response);
            localStorage.setItem('adminId', response.adminId);
            router.push('/'); // Redirect to /dashboard on successful login
        } catch (error) {
            // Handle login error
            setError(error.message || 'An error occurred during login');
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='p-4 flex gap-2 items-center'>
                <div className='flex items-center justify-center  w-[41px] h-[63px] rounded-md'>
                    <img
                        src="/assets/mahamyLogo.png"
                        className='w-full h-full'
                    />
                </div>
                <p className='font-bold text-second text-[30px]'>Mahamy</p>
            </div>
            <div className='flex items-center justify-center '>
                <div className='flex flex-col w-[400px] rounded-md border p-4'>
                    <h2 className='font-bold text-[60px] mb-10'>Sign In</h2>
                    <form className='flex flex-col gap-5' onSubmit={handleLogin}>
                        <TextField
                            id="doctor-id"
                            label="Email"
                            type="email"
                            variant="standard"
                            sx={{
                                width: "100%"
                            }}
                            value={doctorEmail}
                            onChange={(e) => setDoctorEmail(e.target.value)}
                        />
                        <TextField
                            id="doctor-password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            sx={{
                                width: "100%"
                            }}
                            value={doctorPassword}
                            onChange={(e) => setDoctorPassword(e.target.value)}
                        />
                        {error && (
                            <p className='text-red-500'>{error}</p> // Display error message if there is one
                        )}
                        <div className='flex items-center justify-center'>
                            <Button
                                type="submit"
                                sx={{
                                    width: '136px',
                                    height: "50px",
                                    background: "#4834D4",
                                    borderRadius: 2,
                                    color: "#fff",
                                    '&:hover': {
                                        background: "#0A90B0"
                                    },
                                }}
                                variant="raised"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default LoginForm;
