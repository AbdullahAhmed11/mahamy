'use server'
import { revalidatePath } from 'next/cache'
import axios from 'axios';

export async function ferchEnrollments() {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        const payload = {
            courseName: '',
            collageId: '',
        };

        const res = await axios.post(
            "https://mhamcourses-001-site1.atempurl.com/api/Course/Select/Course/Enrolment", {},
            payload,
            { headers: headers }
        );

        console.log(res.data);
        revalidatePath("/enrollments")
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error after logging it
    }
}