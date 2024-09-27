// import Image from "next/image";
'use client'
import DashboardLayout from "./component/DashboardLayout";
import InsightsCard from "./component/InsightsCard";
import EnrolmentsTable from "./component/EnrolmentsTable";
import RecentlyCourse from "./component/RecentlyCourse";
import CourseOrder from "./component/CourseOrder";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const adminId = localStorage.getItem('adminId');

    // If adminId is not found, redirect to login page
    if (!adminId) {
      router.push('/login');
    }
  }, [router]);
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h2 className="text-[30px] font-bold text-[#000]">Welcome back  <span className="text-[20px] font-normal text-[#8D8C8C]">Monday,22/5</span></h2>
          <p className="text-[22px] font-normal text-[#8D8C8C]">Complete control of your project, you almost reach a goal!</p>
        </div>
        <div className="flex gap-2 w-full">
          <div className="w-2/3 flex flex-col gap-5">
            <div>
              <InsightsCard />
            </div>
            <div>
              <EnrolmentsTable />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-5">
            <RecentlyCourse />
            <CourseOrder />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
