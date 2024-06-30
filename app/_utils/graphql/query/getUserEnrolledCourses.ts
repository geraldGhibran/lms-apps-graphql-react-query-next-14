import { gql } from 'graphql-request';

export const getUserAllEnrolledCourseList = (email: string) => {
  const query =
    gql`
      query GetUserAllEnrolledCourseList {
        userEnrollCourses(where: { userEmail: "` +
    email +
    `" }) {
          userEmail
          completedChapter {
            ... on CompletedChapter {
              id
              chapterId
            }
          }
          courseId
          courseList {
            id
            name
            totalChapters
            slug
            sourceCode
            free
            description
            demoUrl
            chapter {
              ... on Chapter {
                id
                name
              }
            }
            author
            banner {
              url
            }
          }
        }
      }
    `;
  return query;
};
