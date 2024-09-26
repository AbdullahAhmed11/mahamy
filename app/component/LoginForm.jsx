'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoginForm = () => {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPasssword, setAdminPasssword] = useState('');
    const [error, setError] = useState(''); // State to handle error messages
    const router = useRouter(); // Initialize useRouter
    const [loading, setLoading] = useState(false);

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear any previous error message

        try {
            // Make a POST request to the login API
            const res = await axios.post(
                'https://mhamcourses-001-site1.atempurl.com/api/Admin/Select/Admin/Login',
                {
                    adminEmail,
                    adminPasssword,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Check if adminId exists in the response
            if (res.data && res.status === 200) {
                const adminId = res.data.adminId;

                if (adminId === undefined) {
                    // Display error toast if adminId is undefined
                    toast.error('Login failed. Email or Password is not correct.');
                } else {
                    // Save the adminId to localStorage
                    localStorage.setItem('adminId', adminId);
                    toast.success('Login successful! Redirecting...');
                    // Redirect to the dashboard or home page
                    router.push('/');
                }
            } else {
                // Handle unsuccessful login by showing an error message
                setError('Invalid email or password.');
                toast.error('Invalid email or password.');
            }
        } catch (error) {
            // Display error message if API request fails
            setError('Login failed. Please check your credentials and try again.');
            toast.error('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className='flex flex-col'>
                <div className='p-4 flex gap-2 items-center'>
                    <div className='flex items-center justify-center w-[41px] h-[63px] rounded-md'>
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
                                id="admin-email"
                                label="Email"
                                type="email"
                                variant="standard"
                                sx={{ width: "100%" }}
                                value={adminEmail}
                                onChange={(e) => setAdminEmail(e.target.value)}
                            />
                            <TextField
                                id="admin-password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{ width: "100%" }}
                                value={adminPasssword}
                                onChange={(e) => setAdminPasssword(e.target.value)}
                            />
                            {error && (
                                <p className='text-red-500'>{error}</p> // Display error message if there is one
                            )}
                            <div className='flex items-center justify-center'>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    sx={{
                                        width: '136px',
                                        height: "50px",
                                        background: "#4834D4",
                                        borderRadius: 2,
                                        color: "#fff",
                                        '&:hover': {
                                            background: "#0A90B0",
                                        },
                                    }}
                                    variant="contained"
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginForm;
