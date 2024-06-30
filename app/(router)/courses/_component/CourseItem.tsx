import { CourseLists } from '@/types/course-type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Course {
  course: CourseLists[];
}

function CourseItem({ course }: Course) {
  return (
    <div className="rounded-sm border mt-3 border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      {course.map((courseItem) => (
        <div key={courseItem.id}>
          <Link href={'/course-preview/' + courseItem?.slug}>
            <Image
              className="rounded-t-xl"
              src={courseItem?.banner.url}
              width={500}
              height={150}
              alt={courseItem?.name}
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-medium">{courseItem?.name}</h2>
              <h2 className="text-[12-px] text-gray-400">{courseItem?.author}</h2>
              <h2 className="text-[15-px]">{courseItem?.free ? 'Free' : 'Paid'}</h2>
            </div>
            {/* Add other course details as needed */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseItem;
