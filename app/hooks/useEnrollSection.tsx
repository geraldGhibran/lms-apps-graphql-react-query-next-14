import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CourseLists } from '@/types/course-type';
import { useUser } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import client from '../_utils/graphql/client';
import { enrollToCourseMutation } from '../_utils/graphql/query/enrollToCourseMutation';

type OnEnrollCourse = {
  createUserEnrollCourse: {
    id: string;
  };
};

function useEnrollSection(courseInfo: CourseLists[]) {
  const router = useRouter();
  const { user } = useUser();

  const enrollCourse = useMutation({
    mutationFn: async () => {
      const data = await client.request<OnEnrollCourse>(
        enrollToCourseMutation(courseInfo[0]?.slug, user?.primaryEmailAddress?.emailAddress)
      );
      return data;
    },
    onSuccess: (newPost) => {
      toast.success('User Enrolled Successful', {
        description: 'User Enrolled to this Course',
        style: {
          background: 'green'
        }
      });
      router.push('/watch-course/' + newPost?.createUserEnrollCourse.id);
    }
  });

  const onEnrollCourse = () => {
    enrollCourse.mutate();
  };

  return { onEnrollCourse };
}

export default useEnrollSection;
