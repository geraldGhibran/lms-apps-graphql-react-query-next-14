export const MASTER_URL =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  '/master';

import { gql, request } from 'graphql-request';

export const addNewMemberMutation = async (email: string, paymentId: string) => {
  const query =
    gql`
  mutation AddNewMember {
    createMembeship(data: {active: true,
      email: "` +
    email +
    `",
      paymentId: "` +
    paymentId +
    `"
    }) {
      id
    }
      publishManyMembeships(to: PUBLISHED) {
      count
    }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
