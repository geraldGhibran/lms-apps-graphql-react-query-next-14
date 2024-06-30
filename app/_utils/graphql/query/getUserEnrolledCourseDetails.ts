import { gql } from 'graphql-request';

export const getUserEnrolledCourseDetails = (id: string, email: string) => {
  const query =
    gql`
      query GetUserEnrolledCourseDetails {
        userEnrollCourses(
          where: {
            userEmail: "` +
    email +
    `"
            id: "` +
    id +
    `"
          }
        ) {
           completedChapter {
            ... on CompletedChapter {
              id
              chapterId
            }
          }
          courseId
          courseList {
            author
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
                shortDesc
              }
            }
            demoUrl
            description
            free
            id
            name
            slug
            sourceCode
            totalChapters
          }
        }
      }
    `;

  return query;
};
