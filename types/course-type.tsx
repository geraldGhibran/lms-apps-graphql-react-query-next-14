export type SideBanner = {
  banner: {
    url: string;
  };
  url: string;
};

export type CourseVideoDescription = {
  params: {
    courseId: string;
  };
}


export type Chapter = {
  id: string;
  name: string;
  video: {
    url: string;
  };
  banner: {
    url: string;
  };
  shortDesc: string;
};

export type Users = {
  primaryEmailAddress: {
    emailAddress: string;
  };
};

type EmailAddressResource = {
  emailAddress: string;
};

export type UserResource = {
  primaryEmailAddress: EmailAddressResource | null;
};

export type CourseLists = {
  author: string;
  name: string;
  id: string;
  free: string;
  banner: {
    url: string;
  };
  totalChapters: string;
  sourceCode: string;
  tag: string;
  slug: string;
  demoUrl: string;
  description: string;
  courseList: CourseLists;
  completedChapter: CourseLists[];

  chapter: Chapter[];
};

export type CourseInfo = {
  courseInfo: CourseLists;
};

export type CourseInfoDetail = {
  courseInfo: CourseLists[];
};

export type CourseEnrollSection = {
  courseInfo: CourseLists[];
  isUserAlreadyEnrolled: string;
};

export type UserEnrolledToCourse = {
  userEnrollCourses: CourseLists[];
};
