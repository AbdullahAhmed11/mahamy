import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { createStudent } from '@/actions/students';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateStudentModal = ({isModalCreateOpen, handleCloseCreateModal}) => {
    const [isCreating, setIsCreating] = useState(false)
    const [StudentName, setStudentName] = useState('')
    const [StudentEmail, setStudentEmail] = useState('')
    const [StudentPhone, setStudentPhone] = useState('')
    const [StudentPassword, setStudentPassword] = useState('')
    const [StudentActivation, setStudentActivationd] = useState('')
    const [UnversityId, setUnversityId] = useState('')
    const [CollageId, setCollageId] = useState('')
    const [ClassId, setClassId] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('studentName', StudentName)
        formData.append('studentEmail', StudentEmail)
        formData.append('studentPhone', StudentPhone)
        formData.append('studentPassword', StudentPassword)
        formData.append('studentActivation', false)
        formData.append('unversityId', UnversityId)
        formData.append('collageId', CollageId)
        formData.append('classId', ClassId)
        setIsCreating(true)
        try{
            await createStudent(formData);
            toast.success("Student created successfully!");
            setStudentName('')
            setStudentEmail('')
            setStudentPhone('')
            setStudentPassword('')
            setUnversityId('')
            setCollageId('')
            setClassId('')
            handleCloseCreateModal()
        } catch(error) {
            console.log(error)
            toast.error("Failed to create student.", {
                className: 'custom-toast-error', // Apply the custom class here
            });
        } finally {
            setIsCreating(false);
        }
    }

  return (
    <>
    <Modal
    open={isModalCreateOpen}
    onClose={handleCloseCreateModal}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
>
    <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            border: "2px solid ##ED2121"
        }}
    >
        <div className='flex items-center justify-center'>
            <h2 className='font-bold text-[30px] text-[#000]'> Create Student</h2>
        </div>
        <form className='flex flex-col gap-10 mt-6' onSubmit={handleSubmit}>
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='userName'
                    value={StudentName}
                    onChange={(e) => setStudentName(e.target.value)}                />
            </div>
            <div>
                <TextField
                    type="email"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Email'
                    value={StudentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}   
                />
            </div>
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='University'
                    value={UnversityId}
                    onChange={(e) => setUnversityId(e.target.value)}   
                />
            </div>

            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Collage'
                    value={CollageId}
                    onChange={(e) => setCollageId(e.target.value)}   
                />
            </div>

            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Class'
                    value={ClassId}
                    onChange={(e) => setClassId(e.target.value)}   
                />
            </div>
            <div>
                <TextField
                    type="password"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Password'
                    value={StudentPassword}
                    onChange={(e) => setStudentPassword(e.target.value)}   
                />
            </div>
            <div>
                <TextField
                    type="text"
                    variant="standard"
                    sx={{
                        width: "100%"
                    }}
                    placeholder='Phone Number'
                    value={StudentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}  
                />
            </div>

            <div className='flex items-center justify-center'>
                <Button
                    // onClick={handleCloseCreateModal}
                    type="submit"
                    disabled={isCreating}
                    sx={{
                        width: "150px",
                        height: "45px",
                        borderRadius: "10px",
                        background: isCreating? "#ccc" : "#2C0076",
                        color: "#fff",
                        ":hover": {
                            background: isCreating ? "#ccc" : "#2C0076",
                        },
                    }}
                >
                     {isCreating ? "Creating..." : "Create"} 
                </Button>
            </div>
        </form>
    </Box>
</Modal>
 <ToastContainer />
 </>
  )
}

export default CreateStudentModal