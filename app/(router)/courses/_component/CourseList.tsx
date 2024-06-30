'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import CourseItem from './CourseItem';
import useCourse from '@/app/hooks/useCourse';

function CourseList() {
  const { courseList, setCourseCategory } = useCourse();

  return (
    <div className="mb-5 mt-5 rounded-lg bg-white p-5 dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Course</h2>
        <div className="ml-5">
          <Select onValueChange={setCourseCategory}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="cursor-pointer bg-white">
              <SelectItem value=" ">All</SelectItem>
              <SelectItem value=" where: {free : false}">Paid</SelectItem>
              <SelectItem value=" where: {free : true}">Free</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {courseList?.length > 0 ? (
          <CourseItem course={courseList} />
        ) : (
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              key={index}
              className="m-2 h-[240px] w-full animate-pulse rounded-xl bg-slate-200"
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
