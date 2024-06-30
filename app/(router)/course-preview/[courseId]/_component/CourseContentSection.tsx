import React, { useState } from 'react';
import { Lock, Play } from 'lucide-react';
import { CourseEnrollSection } from '@/types/course-type';

function CourseContentSection({ courseInfo, isUserAlreadyEnrolled }: CourseEnrollSection) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-3 bg-white r ounded-sm mt-3 dark:border-strokedark dark:bg-boxdark">
      <p>Content</p>
      {courseInfo.map((courseItem) => (
        <div key={courseItem.id}>
          {courseItem?.chapter?.map((item, index) => (
            <div key={item.id}>
              <p
                className={`
                  p-2 text-[14px] flex 
              justify-between items-center m-2 hover:bg-spray-200 
              hover:text-gray-500 border rounded-sm px-4 cursor-pointer
              ${activeIndex == index && 'bg-primary text-white'}
              ${isUserAlreadyEnrolled && 'hover:bg-primary hover:text-white'}
                  `}
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
      ))}
    </div>
  );
}

export default CourseContentSection;
