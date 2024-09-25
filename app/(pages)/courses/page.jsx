import React from 'react'
import DashboardLayout from '../../component/DashboardLayout';
import CoursesView from "../../../sections/courses/coursesView"
import { getAllCourses } from '@/actions/courses';
async function  page()  {
  const result = await getAllCourses()
  return (
    <div>
      
      <DashboardLayout>
        <CoursesView  courses={result} getAllCourses={getAllCourses}/>
      </DashboardLayout>
    </div>
  )
}

export default page
