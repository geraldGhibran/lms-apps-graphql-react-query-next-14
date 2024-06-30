'use client';
import { useUser } from '@clerk/nextjs';
import { MASTER_URL } from '../_utils/GlobalApi';
import { UserEnrolledToCourse } from '@/types/course-type';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { getUserAllEnrolledCourseList } from '../_utils/graphql/query/getUserEnrolledCourses';

function useUserEnrolledCourses() {
  const { user } = useUser();

  const { data: userEnrolledCourse } = useQuery<UserEnrolledToCourse>({
    queryKey: ['userEnrollCourses'],
    queryFn: async () =>
      request(MASTER_URL, getUserAllEnrolledCourseList(user?.primaryEmailAddress?.emailAddress))
  });
  return { userEnrolledCourse };
}

export default useUserEnrolledCourses;
