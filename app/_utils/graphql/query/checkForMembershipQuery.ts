import { gql } from 'graphql-request';

export const checkForMembershipQuery = (email: string) => {
  const query =
    gql`
    query CheckForMemberShip {
    membeships(where: {email: "` +
    email +
    `"}) {
      email
      id
      paymentId
      createdAt
    }
  }
  `;

  return query;
};
