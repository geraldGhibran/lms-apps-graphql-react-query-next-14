'use client';
import React from 'react';
import WelcomeBannerDashboard from './WelcomeBannerDashboard';
import InProgressCourseList from './InProgressCourseList';
import SideBanners from '../../courses/_component/SideBanners';
import useUserEnrolledCourses from '@/app/hooks/useUserEnrolledCourses';

function DashboardPage() {
  const { userEnrolledCourse } = useUserEnrolledCourses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        <WelcomeBannerDashboard />
        <InProgressCourseList userEnrolledCourse={userEnrolledCourse} />
      </div>
      <div className="p-5 bg-white rounded-xl dark:border-strokedark dark:bg-boxdark">
        <SideBanners />
      </div>
    </div>
  );
}

export default DashboardPage;
