import React from 'react'
import DashboardLayout from '../../component/DashboardLayout';
import CoursesView from "../../../sections/courses/coursesView"

async function  page()  {
 
  return (
    <div>
        <DashboardLayout>
        <CoursesView  />
        </DashboardLayout>
    </div>
  )
}

export default page
