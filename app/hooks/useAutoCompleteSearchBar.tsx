import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { MASTER_URL } from '../_utils/GlobalApi';
import { getAllCourseList } from '../_utils/graphql/query/getAllCourseList';

import { CourseLists } from '@/types/course-type';

type CourseListResponse = {
  courseLists: CourseLists[];
};

function useAutoCompleteSearchBar() {
  const { data } = useQuery<CourseListResponse>({
    queryKey: ['CourseList'],
    queryFn: async () => request(MASTER_URL, getAllCourseList(' '))
  });

  return { data };
}

export default useAutoCompleteSearchBar;
