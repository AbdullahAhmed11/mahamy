import React from 'react'
import AdminView from "../../../sections/admins/adminView"
import DashboardLayout from '../../component/DashboardLayout';
import { getAllAdmins } from '@/actions/admins';

async function  page()  {
 const result = await getAllAdmins();
  return (
    <div>
        <DashboardLayout>
        <AdminView  admins={result}/>
        </DashboardLayout>
    </div>
  )
}

export default page
