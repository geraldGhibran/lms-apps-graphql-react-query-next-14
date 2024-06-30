import React from 'react';
import Markdown from 'react-markdown';
import VideoPlayer from '../../../course-preview/[courseId]/_component/VideoPlayer';
import { Button } from '@/components/ui/button';
import { CourseInfo } from '@/types/course-type';
import { toast } from 'sonner';

interface CourseVideoDescriptionWatchCourseType extends CourseInfo {
  watchMode: boolean;
  activeChapterIndex: number;
  completedChapter: any;
  setChapterCompleted: (chapterId: string) => void;
}

function CourseVideoDescriptionWatchCourse({
  courseInfo,
  activeChapterIndex,
  watchMode,
  setChapterCompleted,
  completedChapter
}: CourseVideoDescriptionWatchCourseType) {
  function checkNumberInArrayObject(index: number): boolean {
    return completedChapter.some((_, idx) => idx === index);
  }

  return (
    <div>
      <div key={courseInfo.id}>
        <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
        <h2 className="text-gray-500 text-[14-px]">{courseInfo?.author}</h2>
        <h2 className="text-[15-px]">{courseInfo?.free ? 'Free' : 'Paid'}</h2>
        <VideoPlayer
          videoUrl={courseInfo?.chapter[activeChapterIndex].video?.url}
          poster={!watchMode ? courseInfo?.chapter[activeChapterIndex]?.banner?.url : ''}
        />
        <h2 className="mt-5 text-[17px] font-semibold">
          {watchMode ? (
            <span className="flex items-center justify-between">
              {courseInfo?.chapter[activeChapterIndex]?.name}
              <Button
                onClick={() =>
                  checkNumberInArrayObject(activeChapterIndex)
                    ? toast.success('Successful', {
                        description: `${courseInfo?.chapter[activeChapterIndex]?.name} Chapter Already Mark`,
                        style: {
                          background: 'green'
                        }
                      })
                    : setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)
                }
              >
                Mark Completed
              </Button>
            </span>
          ) : (
            <span>About this course</span>
          )}
          About this Course
        </h2>
        <div>
          {watchMode ? (
            <Markdown className="mt-2 text-[12px] font-light leading-7">
              {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
            </Markdown>
          ) : (
            <Markdown className="mt-2 text-[12px] font-light leading-7">
              {courseInfo?.description}
            </Markdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseVideoDescriptionWatchCourse;
