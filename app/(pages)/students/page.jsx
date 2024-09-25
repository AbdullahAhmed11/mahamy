import React from 'react'
import StudentView from "../../../sections/students/studentsView"
import DashboardLayout from '../../component/DashboardLayout';
import { getAllStudents } from '@/actions/students';

async function page() {
  const result = await getAllStudents();
  return (
    <div>
      <DashboardLayout>
        <StudentView students={result} getAllStudents={getAllStudents} />
      </DashboardLayout>
    </div>
  )
}

export default page
