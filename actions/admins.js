'use server'
import { revalidatePath } from 'next/cache'

import axios from 'axios';

export async function getAllAdmins() {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        const payload = {
            adminName: "",
        };

        const res = await axios.post(
            "https://mobisite201.somee.com/api/Admin/Select/All/Admin/1/40", {},
            payload,
            { headers: headers }
        );
        
        console.log(res.data.admins); // Log the response data
        return res.data.admins; // Return the admins data from the response
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error after logging it
    }
}

//delete
export async function deleteAdmin(adminId) {
    try {
        // Make a DELETE request to the API
        const res = await axios.delete(`https://mobisite201.somee.com/api/Admin/Delete/Admin/${adminId}`);
        
        console.log(`admin with ID ${adminId} deleted successfully.`); // Log success
        revalidatePath('/admin')
        return res.data; // Return the response data (if any)
    } catch (error) {
        console.error('Error deleting admin:', error);
        throw error; // Re-throw the error after logging it
    }
}

//create 
export async function createAdmin(adminData) {
    try {
        // Define the headers for the request
        const headers = {
            'Content-Type': 'application/json',
        };

        // Send the POST request with the adminData as the body
        const res = await axios.post(
            "https://mobisite201.somee.com/api/Admin/Insert/Admin",
            adminData,
            { headers: headers }
        );
        console.log('Admin created successfully:', res.data); // Log the response data
        revalidatePath('/admin')
        return res.data; // Return the response data
    } catch (error) {
        console.error('Error creating admin:', error);
        throw error; // Re-throw the error after logging it
    }
}



export async function updateAdmin(adminId, formData) {
    try {
        const response = await fetch(`https://mobisite201.somee.com/api/Admin/Update/Admin/${adminId}`, {
            method: "PUT",
            body: formData, // `FormData` instance does not need explicit content type
        });
        
        if (response.ok) {
            revalidatePath('/admin');
        } else {
            throw new Error('Update failed');
        }
    } catch (error) {
        console.error("Error updating admin:", error);
    }
}



export async function loginAdmin(adminEmail, adminPasssword) {
    try {
        // Define the headers for the request
        const headers = {
            'Content-Type': 'application/json',
        };

        // Define the body of the request
        const payload = {
            adminEmail: adminEmail,
            adminPasssword: adminPasssword,
        };

        // Send the POST request to the login API
        const res = await axios.post(
            "https://mobisite201.somee.com/api/Admin/Select/Admin/Login",
            payload,
            { headers: headers }
        );

        // Check if login was successful based on response data
     return res.data
    } catch (error) {
        // Log and throw the error for further handling
        console.error('Error during login:', error.message || error);
        throw error;
    }
}
