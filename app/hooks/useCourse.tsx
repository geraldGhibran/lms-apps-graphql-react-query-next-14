import { CourseLists } from '@/types/course-type';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import client from '../_utils/graphql/client';
import { getAllCourseList } from '../_utils/graphql/query/getAllCourseList';

type GetAllCourses = {
  courseLists: CourseLists[];
};

function useCourse() {
  const [courseCategory, setCourseCategory] = useState<string | undefined>('');

  const fetchAllCourses = async (): Promise<GetAllCourses> => {
    const data = await client.request<GetAllCourses>(getAllCourseList(courseCategory));
    return data;
  };

  const { data, isLoading } = useQuery<GetAllCourses>({
    queryKey: ['courseLists', courseCategory],
    queryFn: fetchAllCourses,
    enabled: true
  });

  const courseList = data?.courseLists || [];
  return { courseList, courseCategory, setCourseCategory, isLoading };
}

export default useCourse;
