import React from 'react';
import ProgressCourseItem from './ProgressCourseItem';
import Image from 'next/image';

function InProgressCourseList({ userEnrolledCourse }) {
  return (
    <div>
      <div className="mt-3 rounded-sm bg-white p-5 dark:border-strokedark dark:bg-boxdark">
        <h2 className="text-[18px] font-semibold text-primary">
          {userEnrolledCourse?.userEnrollCourses?.length > 0 ? (
            userEnrolledCourse?.userEnrollCourses?.map((item, index) => (
              <div key={index} className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-3">
                <ProgressCourseItem course={item} />
              </div>
            ))
          ) : (
            <div className="grid h-[50rem] place-content-center bg-white px-4 dark:border-strokedark dark:bg-boxdark">
              <div className="text-center">
                <Image
                  src="/not-found.svg"
                  alt="something"
                  height={0}
                  width={0}
                  style={{ width: '500px', height: 'auto' }}
                  priority
                />

                <h1 className="text-gray-900 mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
                  Oops, nothing to see here
                </h1>

                <p className="text-gray-500 mt-4">
                  Chill you can also enroll some free course in all courses page.
                </p>
              </div>
            </div>
          )}
        </h2>
      </div>
    </div>
  );
}

export default InProgressCourseList;
