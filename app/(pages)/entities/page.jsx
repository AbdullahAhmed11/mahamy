import React from 'react'
import DashboardLayout from '../../component/DashboardLayout';
import EntitesView from '../../../sections/entities/entitiesView';
async function  page()  {
  return (
    <div>
        <DashboardLayout>
          <EntitesView />
        </DashboardLayout>
    </div>
  )
}

export default page
