'use client';
import React from 'react';

import useCoursePreview from '@/app/hooks/useCoursePreview';
import CourseVideoDescription from './CourseVideoDescription';
import CourseEnrollSection from './CourseEnrollSection';
import CourseContentSection from './CourseContentSection';

type CourseVideoDescription = {
  params?: {
    courseId?: string;
  };
};

function CoursePreviewPage({ params }) {
  const path = params?.courseId;

  const { isUserAlreadyEnrolled, courseInfo } = useCoursePreview(params, path);

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3 dark:border-strokedark dark:bg-boxdark">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>

        <div>
          <CourseEnrollSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
        </div>
      </div>
    )
  );
}

export default CoursePreviewPage;
