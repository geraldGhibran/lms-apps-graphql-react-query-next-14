import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { MASTER_URL } from '../_utils/GlobalApi';
import { SideBanner } from '@/types/course-type';
import { getSideBanner } from '../_utils/graphql/query/getSideBanner';
type FetchSideBanner = {
  sideBanners: SideBanner[];
};

function useSideBanner() {
  const { data: sideBannerList } = useQuery<FetchSideBanner>({
    queryKey: ['sideBanners'],
    queryFn: async () => request(MASTER_URL, getSideBanner)
  });

  return { sideBannerList };
}

export default useSideBanner;
