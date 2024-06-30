import { gql } from 'graphql-request';

export const getSideBanner = gql`
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }
`;
