import React from 'react';
import DashboardLayout from '../../../component/DashboardLayout';
import CourseDataView from '@/sections/courseData/courseDataView'; // Ensure proper capitalization

function Page() {


  return (
    <div>
      <DashboardLayout>
        <CourseDataView /> {/* Pass `id` as a prop if needed */}
      </DashboardLayout>
    </div>
  );
}

export default Page;
