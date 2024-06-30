import { gql } from 'graphql-request';

export const getCourseById = (courseId: string) => {
  const query =
    gql`
      query GetCourseById {
        courseLists(where: { slug: "` +
    courseId +
    `" }) {
          author
          name
          id
          free
          slug
          description
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          totalChapters
          sourceCode
          tag
          demoUrl
        }
      }
    `;

  return query;
};
