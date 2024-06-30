import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { CourseInfoDetail } from '@/types/course-type';

function CourseVideoDescription({ courseInfo }: CourseInfoDetail) {
  return (
    <div>
      {courseInfo.map((courseItem) => (
        <div key={courseItem.id}>
          <h2 className="text-[20px] font-semibold">{courseItem?.name}</h2>
          <h2 className="text-[14-px] text-gray-500">{courseItem?.author}</h2>
          <h2 className="text-[15-px]">{courseItem?.free ? 'Free' : 'Paid'}</h2>

          <VideoPlayer
            videoUrl={courseItem?.chapter[0]?.video?.url}
            poster={courseItem?.chapter[0]?.banner?.url}
          />
          <h2 className="mt-5 text-[17px] font-semibold">About this Course</h2>
          <div>
            <Markdown className="text-[12px] font-light mt-2 leading-7">
              {courseItem?.description}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseVideoDescription;
