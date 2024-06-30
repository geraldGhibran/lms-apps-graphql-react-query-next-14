import React from 'react';
import WatchCoursePage from './_component/WatchCoursePage';

export async function generateMetadata({ params }) {
  return {
    title: 'Watch Course - My Academy '
  };
}

function WatchCourse({ params }) {
  return (
    <>
      <WatchCoursePage params={params} />
    </>
  );
}

export default WatchCourse;
