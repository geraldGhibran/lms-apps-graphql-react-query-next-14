'use client';
import React from 'react';
import CourseVideoDescriptionWatchCourse from './CourseVideoDescriptionWatchCourse';
import CourseContentSectionWatchSection from './CourseContentSectionWatchCourse';
import useWatchCourse from '@/app/hooks/useWatchCourse';

function WatchCoursePage({ params }) {
  const {
    courseInfo,
    activeChapterIndex,
    setActiveChapterIndex,
    completedChapter,
    onChapterCompleted
  } = useWatchCourse({ params });

  return (
    courseInfo?.name && (
      <div>
        <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-3">
          <div className="col-span-2 bg-white p-3 dark:border-strokedark dark:bg-boxdark">
            <CourseVideoDescriptionWatchCourse
              courseInfo={courseInfo}
              activeChapterIndex={activeChapterIndex}
              completedChapter={completedChapter}
              watchMode={true}
              setChapterCompleted={(chapterId: string) => onChapterCompleted(chapterId)}
            />
          </div>

          <div>
            <CourseContentSectionWatchSection
              courseInfo={courseInfo}
              isUserAlreadyEnrolled={'true'}
              watchMode={true}
              completedChapter={completedChapter}
              setActiveChapter={(index) => setActiveChapterIndex(index)}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default WatchCoursePage;
