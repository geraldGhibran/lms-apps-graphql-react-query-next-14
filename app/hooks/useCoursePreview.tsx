import { CourseLists, CourseVideoDescription, UserEnrolledToCourse } from '@/types/course-type';
import { useUser } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import { getCourseById } from '../_utils/graphql/query/getCourseById';
import client from '../_utils/graphql/client';
import { checkUserEnrolledToCourse } from '../_utils/graphql/query/chechUserEnrolledToCourse';

type CourseInfoById = {
  courseLists: CourseLists[];
};

type CheckUserEnrolledResponse = {
  userEnrollCourses: CourseLists;
  id: string;
};

function useCoursePreview(params: CourseVideoDescription, path: string) {
  const { user } = useUser();

  const fetchCourseById = async () => {
    const data = await client.request<CourseInfoById>(getCourseById(path));
    return data?.courseLists;
  };

  const { data: courseInfo, isLoading: isCourseLoading } = useQuery({
    queryKey: ['courseInfo', path],
    queryFn: fetchCourseById,
    enabled: !!params
  });

  const fetchUserEnrollment = async () => {
    const slug = courseInfo[0]?.slug;
    const email = user?.primaryEmailAddress?.emailAddress;
    if (courseInfo && user) {
      const data = await client.request<CheckUserEnrolledResponse>(
        checkUserEnrolledToCourse(slug, email)
      );

      return data?.userEnrollCourses[0]?.id;
    }
    return null;
  };

  const { data: userEnrollment, isLoading: isUserLoading } = useQuery({
    queryKey: ['userEnrollment'],
    queryFn: fetchUserEnrollment,
    enabled: !!courseInfo && !!user
  });

  const isUserAlreadyEnrolled = userEnrollment;

  return { isUserAlreadyEnrolled, courseInfo, isCourseLoading, isUserLoading };
}

export default useCoursePreview;
