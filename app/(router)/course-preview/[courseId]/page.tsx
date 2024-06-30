import React from 'react';
import CoursePreviewPage from './_component/CoursePreviewPage';

export async function generateMetadata({ params }) {
  function transformText(str) {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const courseId = transformText(params.courseId);

  return {
    title: courseId + ' - Course Preview - My Academy '
  };
}

function CoursePreview({ params }) {
  return <CoursePreviewPage params={params} />;
}

export default CoursePreview;
