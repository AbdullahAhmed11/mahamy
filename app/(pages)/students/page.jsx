import React from 'react'
import StudentView from "../../../sections/students/studentsView"
import DashboardLayout from '../../component/DashboardLayout';


async function  page()  {
 
  return (
    <div>
        <DashboardLayout>
        <StudentView  />
        </DashboardLayout>
    </div>
  )
}

export default page
