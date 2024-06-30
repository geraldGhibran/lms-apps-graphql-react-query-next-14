import { CourseLists } from '@/types/course-type';
import { useUser } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import client from '../_utils/graphql/client';
import { checkForMembershipQuery } from '../_utils/graphql/query/checkForMembershipQuery';

type Membership = {
  membeships: CourseLists[];
};

function useCheckUserMembership() {
  const { user } = useUser();

  const checkUserMembership = async () => {
    let email: undefined | string = user?.primaryEmailAddress?.emailAddress || '';
    if (user) {
      const data = await client.request<Membership>(checkForMembershipQuery(email));

      return data;
    }
    return null;
  };

  const { data } = useQuery({
    queryKey: ['checkUserMembership'],
    queryFn: checkUserMembership,
    enabled: !!user
  });

  return { checkUserMembership, data };
}

export default useCheckUserMembership;
