import { gql } from 'graphql-request';

export const checkUserEnrolledToCourse = (courseId: string, email: string) => {
  const query =
    gql`
      query CheckUserEnrolledToCourse {
        userEnrollCourses(
          where: {
            courseId: "` +
    courseId +
    `"
            userEmail: "` +
    email +
    `"
          }
        ) {
          id
        }
      }
    `;

  return query;
};
