'use server'
import { revalidatePath } from 'next/cache'
import axios from 'axios';

export async function getAllStudents() {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        const payload = {
            studentName: "",
        };

        const res = await axios.post(
            "https://mhamcourses-001-site1.atempurl.com/api/Student/Select/All/Student/1/40", {},
            payload,
            { headers: headers }
        );

        console.log(res.data.students); // Log the response data
        return res.data.students; // Return the student data from the response
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error after logging it
    }
}

//delete 
export async function deleteStudent(studentId) {
    try {
        // Make a DELETE request to the API
        const res = await axios.delete(`https://mhamcourses-001-site1.atempurl.com/api/Student/Delete/Student/${studentId}`);

        console.log(`Student with ID ${studentId} deleted successfully.`); // Log success
        revalidatePath('/students')
        return res.data; // Return the response data (if any)
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error; // Re-throw the error after logging it
    }
}

//create
export const createStudent = async (formData) => {
    try {
        const response = await fetch("https://mhamcourses-001-site1.atempurl.com/api/Student/Insert/Student", {
            method: "POST",
            headers: {
                // 'Content-Type': 'multipart/form-data', // Not needed for FormData
            },
            body: formData,
        });

        revalidatePath('/students')

    } catch (error) {
        console.error("Error creating student:", error);
    }
}

//update
export async function updateStudent(studentId, formData) {
    try {
        const response = await fetch(`https://mhamcourses-001-site1.atempurl.com/api/Student/Update/Student/${studentId}`, {
            method: "PUT",
            headers: {
                // 'Content-Type': 'multipart/form-data', // Not needed for FormData
            },
            body: formData,
        })
        revalidatePath('/students')
    } catch (error) {
        console.error("Error creating student:", error);
    }
}

//profile

export async function fetchStudentProfile(studentId) {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await fetch(`https://mhamcourses-001-site1.atempurl.com/api/Student/Select/Student/Profile/${studentId}`, {
            method: "GET",
            headers: { headers }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parsing the response to JSON

        return data;

    } catch (error) {
        console.error("Error creating student:", error);
    }
}


export async function getStudentCourses(studentId) {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        // Use axios to send a GET request to the API endpoint with the studentId
        const response = await axios.get(
            `https://mhamcourses-001-site1.atempurl.com/api/Student/Select/Student/Course/${studentId}`,
            { headers: headers }
        );

        console.log(response.data); // Log the response data
        return response.data; // Return the course data from the response
    } catch (error) {
        console.error('Error fetching student courses:', error);
        throw error; // Re-throw the error after logging it
    }
}