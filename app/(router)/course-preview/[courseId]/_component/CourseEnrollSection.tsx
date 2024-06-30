import useEnrollSection from '@/app/hooks/useEnrollSection';
import { Button } from '@/components/ui/button';
import { useLmsStore } from '@/stores/lms-store';
import { CourseLists } from '@/types/course-type';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

import { useShallow } from 'zustand/react/shallow';

type EnrollSection = {
  courseInfo: CourseLists[];
  isUserAlreadyEnrolled: boolean | string;
};

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }: EnrollSection) {
  const { user } = useUser();

  const { isMember } = useLmsStore(useShallow((state) => ({ isMember: state.isMember })));

  const { onEnrollCourse } = useEnrollSection(courseInfo);

  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      <h2 className="text-[22px] font-bold text-white">Enroll to the Course</h2>
      {courseInfo.map((courseItem) =>
        user && (isMember || courseItem.free) && !isUserAlreadyEnrolled ? (
          <div key={courseItem.id}>
            <div className="flex flex-col gap-3 mt-3">
              <p className="text-white font-light">
                Enroll Now to Start Learning and Building the Project
              </p>

              <Button
                onClick={() => onEnrollCourse()}
                className="bg-white text-primary hover:bg-white hover:text-primary"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        ) : !user ? (
          <div key={courseItem.id}>
            <div className="flex flex-col gap-3 mt-3">
              <p className="text-white font-light">
                Enroll Now to Start Learning and Building the Project
              </p>

              <Link href={'/sign-in'}>
                <Button
                  onClick={() => onEnrollCourse()}
                  className="bg-white text-primary hover:bg-white hover:text-primary"
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          !isUserAlreadyEnrolled && (
            <div key={courseItem.id}>
              <div className="flex flex-col gap-3 mt-3">
                <p className="text-white font-light">
                  Buy Monthly Membership and Get Access to All Courses
                </p>

                <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                  Buy Membership Just$2.99
                </Button>
              </div>
            </div>
          )
        )
      )}
      {isUserAlreadyEnrolled && (
        <div>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-white font-light">Continue to learn your project</p>
            <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                Continue
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
