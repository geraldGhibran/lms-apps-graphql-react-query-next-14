import { gql } from 'graphql-request';

export const markChapterCompletedMutation = (enrollId: string, chapterId: string) => {
  const query =
    gql`
     mutation MarkChapterCompleted {
      updateUserEnrollCourse(
        data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "` +
    chapterId +
    `"}}}}}
        where: {id: "` +
    enrollId +
    `"}
      ){
        id
      }
      publishUserEnrollCourse(where: {id: "` +
    enrollId +
    `"}) {
        id
      }
    }
    `;

  return query;
};
