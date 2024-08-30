import React from 'react'
import AdminView from "../../../sections/admins/adminView"
import DashboardLayout from '../../component/DashboardLayout';


async function  page()  {
 
  return (
    <div>
        <DashboardLayout>
        <AdminView  />
        </DashboardLayout>
    </div>
  )
}

export default page
