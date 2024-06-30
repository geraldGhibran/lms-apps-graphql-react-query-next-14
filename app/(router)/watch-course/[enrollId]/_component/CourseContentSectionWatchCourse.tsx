import React, { useState } from 'react';
import { Lock, Play } from 'lucide-react';
import { CourseLists } from '@/types/course-type';

type CompletedChapter = {
  chapterId?: string;
  id?: string;
};
type CourseContentSectionWatchSectionType = {
  courseInfo: CourseLists;
  isUserAlreadyEnrolled: boolean | string;
  watchMode: boolean;
  setActiveChapter: (chapterId: number) => void;
  completedChapter?: CompletedChapter[];
};

function CourseContentSectionWatchSection({
  courseInfo,
  isUserAlreadyEnrolled,
  watchMode = false,
  setActiveChapter,
  completedChapter
}: CourseContentSectionWatchSectionType) {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkIsChapterCompleted = (chapterId: string) => {
    return completedChapter?.find(
      (item: CompletedChapter | undefined) => item?.chapterId === chapterId
    );
  };

  return (
    <div className="p-3 bg-white r ounded-sm mt-3 dark:border-strokedark dark:bg-boxdark">
      <p>Content</p>
      <div key={courseInfo.id}>
        {courseInfo?.chapter?.map((item, index) => (
          <div key={item.id}>
            <p
              className={`
                  p-2 text-[14px] flex 
              justify-between items-center m-2 hover:bg-spray-200 
              hover:text-gray-500 border rounded-sm px-4 cursor-pointer
              ${activeIndex == index && 'bg-primary text-white'}
              ${isUserAlreadyEnrolled && 'hover:bg-primary hover:text-white'}
              ${watchMode && checkIsChapterCompleted(item.id) && 'border-green-800 bg-green-400'}
                  `}
              onClick={() => {
                watchMode && setActiveChapter(index);
                watchMode && setActiveIndex(index);
              }}
            >
              {index + 1}. {item.name}
              {activeIndex == index || isUserAlreadyEnrolled ? (
                <Play className="h-4 w-4" />
              ) : (
                <Lock className="h-4 w-4" />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseContentSectionWatchSection;
