import React from 'react'
import DashboardLayout from '../../component/DashboardLayout';
import CoursesView from "../../../sections/courses/coursesView"
import { getAllCourses, getAllCoursesbyAdmin } from '@/actions/courses';
async function page() {
    const result = await getAllCoursesbyAdmin()
    return (
        <div>

            <DashboardLayout>
                <CoursesView courses={result} getAllCourses={getAllCoursesbyAdmin} />
            </DashboardLayout>
        </div>
    )
}

export default page
