import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { updateAdmin } from '@/actions/admins';

const EditAdminModal = ({ openModal, handleModalClose, admin }) => {
    const [adminData, setAdminData] = useState({
        adminName: '',
        adminEmail: '',
        adminPhone: '',
        adminPassword: '',
        permissions: {
            student: false,
            admins: false,
            courses: false,
            enrolments: false,
        },
    });

    // Populate form data if `admin` prop is provided
    useEffect(() => {
        if (admin) {
            setAdminData({
                adminName: admin.AdminName || '',
                adminEmail: admin.adminEmail || '',
                adminPhone: admin.adminPhone || '',
                adminPassword: '', // Keep empty for security reasons
                permissions: {
                    student: admin.permissions?.student || false,
                    admins: admin.permissions?.admins || false,
                    courses: admin.permissions?.courses || false,
                    enrolments: admin.permissions?.enrolments || false,
                },
            });
        }
    }, [admin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({
            ...adminData,
            [name]: value,
        });
    };

    const handlePermissionChange = (e) => {
        const { name, checked } = e.target;
        setAdminData({
            ...adminData,
            permissions: {
                ...adminData.permissions,
                [name]: checked,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call your updateAdmin function
            await updateAdmin(admin.adminId, {
                ...adminData,
                adminPassword: adminData.adminPassword || undefined, // Only include if updated
            });
            handleModalClose(); // Close the modal after a successful update
        } catch (error) {
            console.error('Failed to update admin:', error);
        }
    };

    return (
        <Modal
            open={openModal}
            onClose={handleModalClose}
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
                    border: "2px solid #ED2121",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}
            >
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex gap-5 w-full'>
                        {/* form */}
                        <div className='w-1/2 flex flex-col gap-5'>
                            <div>
                                <TextField
                                    name="adminName"
                                    type="text"
                                    variant="standard"
                                    sx={{ width: "100%" }}
                                    placeholder='Full Name'
                                    value={adminData.adminName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="adminEmail"
                                    type="email"
                                    variant="standard"
                                    sx={{ width: "100%" }}
                                    placeholder='Admin Email'
                                    value={adminData.adminEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="adminPhone"
                                    type="text"
                                    variant="standard"
                                    sx={{ width: "100%" }}
                                    placeholder='Phone Number'
                                    value={adminData.adminPhone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="adminPassword"
                                    type="password"
                                    variant="standard"
                                    sx={{ width: "100%" }}
                                    placeholder='Password'
                                    value={adminData.adminPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {/* permission */}
                        <div className='w-1/2 flex flex-col gap-5'>
                            {['student', 'admins', 'courses', 'enrolments'].map(permission => (
                                <div key={permission} className='flex items-center gap-5 justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='text-[#040320] font-bold text-[20px]'>
                                            {permission.charAt(0).toUpperCase() + permission.slice(1)}
                                        </h2>
                                        <p className='text-[#04032099] text-[10px] font-normal'>
                                            By allowing this permission, the admin can manage {permission}.
                                        </p>
                                    </div>
                                    <div className=''>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    name={permission}
                                                    checked={adminData.permissions[permission]}
                                                    onChange={handlePermissionChange}
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Button
                            type="button"
                            sx={{
                                width: "150px",
                                height: "45px",
                                borderRadius: "10px",
                                background: "transparent",
                                color: "#4834D4",
                                borderColor: "#4834D4",
                                border: "2px solid #4834D4"
                            }}
                            onClick={handleModalClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            sx={{
                                width: "150px",
                                height: "45px",
                                borderRadius: "10px",
                                background: "#2C0076",
                                color: "#fff",
                            }}
                        >
                            Update Admin
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default EditAdminModal;



// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import { updateAdmin } from '@/actions/admins';
// const EditAdminModal = ({ openModal, handleModalClose, admin }) => {
//     const [adminData, setAdminData] = useState({
//         adminName: admin?.AdminName || '',
//         adminEmail: admin?.adminEmail || '',
//         adminPhone: admin?.adminPhone || '',
//         adminPassword:admin?.adminPassword|| '', // Leave empty for security reasons unless the user is changing it
//         permissions: admin?.permission || ''
        
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAdminData({
//             ...adminData,
//             [name]: value,
//         });
//     };

//     const handlePermissionChange = (e) => {
//         const { name, checked } = e.target;
//         setAdminData({
//             ...adminData,
//             permissions: {
//                 ...adminData.permissions,
//                 [name]: checked,
//             },
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Call your updateAdmin function
//             await updateAdmin({ ...adminData, adminId: admin.adminId });
//             console.log(...adminData, "data")
//             handleModalClose(); // Close the modal after a successful update
//         } catch (error) {
//             console.error('Failed to update admin:', error);
//         }
//     };

//     return (
//         <Modal
//             open={openModal}
//             onClose={handleModalClose}
//             aria-labelledby="modal-title"
//             aria-describedby="modal-description"
//         >
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     width: 900,
//                     bgcolor: 'background.paper',
//                     boxShadow: 24,
//                     p: 4,
//                     border: "2px solid ##ED2121",
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "10px"
//                 }}
//             >
//                 <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
//                     <div className='flex gap-5 w-full'>
//                         {/* form */}
//                         <div className='w-1/2 flex flex-col gap-5'>
//                             <div>
//                                 <TextField
//                                     name="adminName"
//                                     type="text"
//                                     variant="standard"
//                                     sx={{ width: "100%" }}
//                                     placeholder='Full Name'
//                                     value={adminData?.adminName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <TextField
//                                     name="adminEmail"
//                                     type="email"
//                                     variant="standard"
//                                     sx={{ width: "100%" }}
//                                     placeholder='Admin Email'
//                                     value={adminData.adminEmail}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <TextField
//                                     name="adminPhone"
//                                     type="text"
//                                     variant="standard"
//                                     sx={{ width: "100%" }}
//                                     placeholder='Phone Number'
//                                     value={adminData.adminPhone}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <TextField
//                                     name="adminPassword"
//                                     type="password"
//                                     variant="standard"
//                                     sx={{ width: "100%" }}
//                                     placeholder='Password'
//                                     value={adminData.adminPassword}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         {/* permission */}
//                         <div className='w-1/2 flex flex-col gap-5'>
//                             {['student', 'admins', 'courses', 'enrolments'].map(permission => (
//                                 <div key={permission} className='flex items-center gap-5 justify-between'>
//                                     <div className='flex flex-col gap-2'>
//                                         <h2 className='text-[#040320] font-bold text-[20px]'>
//                                             {permission.charAt(0).toUpperCase() + permission.slice(1)}
//                                         </h2>
//                                         <p className='text-[#04032099] text-[10px] font-normal'>
//                                             {/* Provide a description for each permission */}
//                                             By allowing this permission, the admin can manage {permission}.
//                                         </p>
//                                     </div>
//                                     <div className=''>
//                                         <FormControlLabel
//                                             control={
//                                                 <Switch
//                                                     name={permission}
//                                                     checked={adminData.permissions[permission]}
//                                                     onChange={handlePermissionChange}
//                                                     color="primary"
//                                                 />
//                                             }
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className='flex gap-5'>
//                         <Button
//                             type="button"
//                             sx={{
//                                 width: "150px",
//                                 height: "45px",
//                                 borderRadius: "10px",
//                                 background: "transparent",
//                                 color: "#4834D4",
//                                 borderColor: "#4834D4",
//                                 border: "2px solid #4834D4"
//                             }}
//                             onClick={handleModalClose}
//                         >
//                             Cancel
//                         </Button>
//                         <Button
//                             type="submit"
//                             sx={{
//                                 width: "150px",
//                                 height: "45px",
//                                 borderRadius: "10px",
//                                 background: "#2C0076",
//                                 color: "#fff",
//                             }}
//                         >
//                             Update Admin
//                         </Button>
//                     </div>
//                 </form>
//             </Box>
//         </Modal>
//     );
// }

// export default EditAdminModal;