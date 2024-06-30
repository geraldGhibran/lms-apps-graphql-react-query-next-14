import { gql } from 'graphql-request';

export const getAllCourseList = (free?: string) => {
  const query =
    gql`
 query GetAllCourseList {
      courseLists(first: 10, orderBy: createdAt_DESC,` +
    free +
    `) {
    author
    name
    id
    free
    description
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
      }
    }
    totalChapters
    tag
    slug
  }
}
`;

  return query;
};
