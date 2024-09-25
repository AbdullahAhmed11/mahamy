import React from 'react'
import DashboardLayout from '../../component/DashboardLayout';
import EnrollmentsView from '@/sections/enrollments/enrollmentsView';
import { ferchEnrollments } from '@/actions/enrollments';
async function  page()  {
  const result = await ferchEnrollments()
  return (
    <div>
      
      <DashboardLayout>
        <EnrollmentsView  allEnroll={result} ferchEnrollments={ferchEnrollments} />
      </DashboardLayout>
    </div>
  )
}

export default page
