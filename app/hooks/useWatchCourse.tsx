import { UserEnrolledToCourse } from '@/types/course-type';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { toast } from 'sonner';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import client from '../_utils/graphql/client';
import { getUserEnrolledCourseDetails } from '../_utils/graphql/query/getUserEnrolledCourseDetails';
import { markChapterCompletedMutation } from '../_utils/graphql/query/markChapterCompleted';
type MarkChapterCompletedResponse = {
  markChapterCompleted: {
    success: boolean;
  };
};

function useWatchCourse({ params }) {
  const { user } = useUser();

  const queryClient = useQueryClient();
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const fetchUserEnrolledCourseDetails = async (): Promise<UserEnrolledToCourse> => {
    const enrollId = params.enrollId;
    const email = user?.primaryEmailAddress?.emailAddress;
    const data = await client.request<UserEnrolledToCourse>(
      getUserEnrolledCourseDetails(enrollId, email)
    );
    return data;
  };

  const { data, isLoading } = useQuery<UserEnrolledToCourse>({
    queryKey: [
      'userEnrolledCourseDetails',
      params.enrollId,
      user?.primaryEmailAddress?.emailAddress
    ],
    queryFn: fetchUserEnrolledCourseDetails,
    enabled: !!params && !!user
  });

  const courseInfo = data?.userEnrollCourses[0]?.courseList;
  const completedChapter = data?.userEnrollCourses[0]?.completedChapter || [];

  const markChapterCompleted = useMutation({
    mutationFn: async (chapterId: string) => {
      const data = await client.request<MarkChapterCompletedResponse>(
        markChapterCompletedMutation(params.enrollId, chapterId)
      );
      return data;
    },
    onSuccess: () => {
      toast.success('Successful', {
        description: 'Chapter Mark as Completed',
        style: {
          background: 'green'
        }
      });
      queryClient.invalidateQueries({
        queryKey: [
          'userEnrolledCourseDetails',
          params.enrollId,
          user?.primaryEmailAddress?.emailAddress
        ]
      });
    }
  });

  const onChapterCompleted = (chapterId: string) => {
    markChapterCompleted.mutate(chapterId);
  };

  return {
    courseInfo,
    activeChapterIndex,
    setActiveChapterIndex,
    completedChapter,
    onChapterCompleted,
    isLoading
  };
}

export default useWatchCourse;
