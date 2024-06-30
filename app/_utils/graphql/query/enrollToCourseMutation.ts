import { gql } from 'graphql-request';

export const enrollToCourseMutation = (courseId: string, email: string) => {
  const query =
    gql`
      mutation EnrollToCourseMutation {
        createUserEnrollCourse(
          data: {
            courseId: "` +
    courseId +
    `"
            userEmail: "` +
    email +
    `"
            courseList: { connect: { slug: "` +
    courseId +
    `" } }
          }
        ) {
          courseId
          id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
    `;
  return query;
};
