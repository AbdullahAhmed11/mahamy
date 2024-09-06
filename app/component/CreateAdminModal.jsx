import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createAdmin } from '@/actions/admins';
import { toast, ToastContainer } from 'react-toastify';


const CreateAdminModal = ({ isModalCreateOpen, handleCloseCreateModal }) => {
    const [isCreating, setIsCreating] = useState(false)

    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPhone, setAdminPhone] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [permissions, setPermissions] = useState({
        student: false,
        admins: false,
        courses: false,
        enrolments: false,
    });

    const handleSwitchChange = (event) => {
        setPermissions({
            ...permissions,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Convert the permissions state to an array of integers
        const permissionId = Object.keys(permissions)
            .filter((key) => permissions[key])
            .map((key) => {
                switch (key) {
                    case 'student':
                        return 1;
                    case 'admins':
                        return 2;
                    case 'courses':
                        return 3;
                    case 'enrolments':
                        return 4;
                    default:
                        return 0;
                }
            });

        const adminData = {
            adminId: 1,
            adminName,
            adminEmail,
            adminPhone,
            adminPassword,
            permissionId,
        };

        try {
            const response = await createAdmin(adminData);
            toast.success("admin created successfully!");

            console.log('Admin created:', response);
            toast.success('Admin created successfully!');
            handleCloseCreateModal(); // Close the modal on success
        } catch (error) {
            console.error('Error creating admin:', error);
            toast.error("Failed to create admin.", {
                className: 'custom-toast-error', // Apply the custom class here
            });        
        } finally {
            setIsCreating(false);
        }
    };

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
                        width: 900,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        border: '2px solid ##ED2121',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <div className="flex gap-6 w-full">
                        <form className='w-full flex flex-col' >
                            {/* form content  */}
                            <div className='flex gap-5'>
                                {/* form  */}
                                <div className='w-1/2 flex flex-col gap-5'>
                                <div>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        sx={{ width: '100%' }}
                                        placeholder="Full Name"
                                        value={adminName}
                                        onChange={(e) => setAdminName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="email"
                                        variant="standard"
                                        sx={{ width: '100%' }}
                                        placeholder="Admin Email"
                                        value={adminEmail}
                                        onChange={(e) => setAdminEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        sx={{ width: '100%' }}
                                        placeholder="Phone Number"
                                        value={adminPhone}
                                        onChange={(e) => setAdminPhone(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="password"
                                        variant="standard"
                                        sx={{ width: '100%' }}
                                        placeholder="Password"
                                        value={adminPassword}
                                        onChange={(e) => setAdminPassword(e.target.value)}
                                    />
                                </div>
                                </div>
                                {/* permission */}
                                <div className='w-1/2 flex flex-col gap-5'>
                                    <div className="flex items-center gap-5 justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-[#040320] font-bold text-[20px]">Student</h2>
                                    <p className="text-[#04032099] text-[10px] font-normal">
                                        By allowing this permission, the admin can manage student data, add and modify student data, and add them to courses.
                                    </p>
                                </div>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                color="primary"
                                                name="student"
                                                checked={permissions.student}
                                                onChange={handleSwitchChange}
                                            />
                                        }
                                    />
                                </div>
                                    </div>
                                    <div className="flex items-center gap-5 justify-between">
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-[#040320] font-bold text-[20px]">Admins</h2>
                                            <p className="text-[#04032099] text-[10px] font-normal">
                                                By allowing this permission, the admin can manage the data of other admins, add another admin, give him permissions, etc.
                                            </p>
                                        </div>
                                        <div>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        color="primary"
                                                        name="admins"
                                                        checked={permissions.admins}
                                                        onChange={handleSwitchChange}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 justify-between">
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-[#040320] font-bold text-[20px]">Courses</h2>
                                            <p className="text-[#04032099] text-[10px] font-normal">
                                                By allowing this permission, the admin can manage the data of other admins, add another admin, give him permissions, etc.
                                            </p>
                                        </div>
                                        <div>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        color="primary"
                                                        name="courses"
                                                        checked={permissions.courses}
                                                        onChange={handleSwitchChange}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 justify-between">
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-[#040320] font-bold text-[20px]">Enrolments</h2>
                                            <p className="text-[#04032099] text-[10px] font-normal">
                                                By allowing this permission, the admin can manage the data of other admins, add another admin, give him permissions, etc.
                                            </p>
                                        </div>
                                        <div>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        color="primary"
                                                        name="enrolments"
                                                        checked={permissions.enrolments}
                                                        onChange={handleSwitchChange}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* button  */}
                            <div className='flex gap-5'>
                            <Button
                            onClick={handleCloseCreateModal}
                            sx={{
                                width: '150px',
                                height: '45px',
                                borderRadius: '10px',
                                background: 'transparent',
                                color: '#4834D4',
                                borderColor: '#4834D4',
                                border: '2px solid #4834D4',
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            disabled={isCreating}
                            sx={{
                                width: '150px',
                                height: '45px',
                                borderRadius: '10px',
                                background: '#2C0076',
                                color: '#fff',
                            }}
                        >
                            {isCreating ? "Creating..." : "Create"}
                        </Button>

                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>

        </>
    )
}

export default CreateAdminModal;