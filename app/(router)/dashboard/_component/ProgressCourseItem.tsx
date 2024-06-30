import { Progress } from '@/components/ui/progress';
import { CourseLists } from '@/types/course-type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Course = {
  course: CourseLists;
};

type GetTotalCompletedChapterPerc = (item: CourseLists) => number;

function ProgressCourseItem({ course }: Course) {
  const getTotalCompletedChapterPerc: GetTotalCompletedChapterPerc = (item) => {
    const perc = (item?.completedChapter?.length / item?.courseList?.chapter?.length) * 100;

    return parseFloat(perc.toFixed(1));
  };

  let progress = getTotalCompletedChapterPerc(course);
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <Link href={'/course-preview/' + course?.courseList?.slug}>
        <div key={course.courseList?.id}>
          <Image
            className="rounded-t-xl"
            src={course?.courseList?.banner?.url}
            width={500}
            height={150}
            alt={course?.courseList?.name}
            loading="eager"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-medium">{course?.courseList?.name}</h2>
            <h2 className="text-gray-400 text-[12-px]">{course?.courseList?.author}</h2>
            <h2 className="text-gray-400 text-[12px]">
              {getTotalCompletedChapterPerc(course)}%{' '}
              <span className="float-right">
                {course?.completedChapter?.length}/{course?.courseList?.chapter?.length} Chapters
              </span>
            </h2>

            <Progress value={progress} aria-label="progressbar" className="h-[7px]" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProgressCourseItem;
