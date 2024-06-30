import React from 'react';
import WelcomeBanner from './_component/WelcomeBanner';
import CourseList from './_component/CourseList';
import SideBanners from './_component/SideBanners';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses- My Academy',
  description: 'This is Courses - My Academy'
};

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        <WelcomeBanner />
        <CourseList />
      </div>
      <div className="p-5 bg-white rounded-xl dark:border-strokedark dark:bg-boxdark hidden lg:block">
        <SideBanners />
      </div>
    </div>
  );
}

export default Courses;
