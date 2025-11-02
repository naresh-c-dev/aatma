import React, { FC } from 'react';
import { COURSES } from '../constants/data';
import CourseCard from '../components/CourseCard';
import Input from '../components/Input';
import Select from '../components/Select';

const CoursesPage: FC = () => (
  <div className="space-y-6">
    <h1 className="font-display text-3xl font-bold">Spiritual Courses</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input type="search" placeholder="Search for courses..." className="lg:col-span-2" />
        <Select>
            <option>Category: All</option>
            <option>Veda</option>
            <option>Yoga</option>
            <option>Arts</option>
        </Select>
        <Select>
            <option>Level: All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
        </Select>
         <Select>
            <option>Language: All</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Sanskrit</option>
        </Select>
         <Select>
            <option>Duration: All</option>
            <option>Under 10 Hours</option>
            <option>10-20 Hours</option>
            <option>20+ Hours</option>
        </Select>
        <Select>
            <option>Sort by: Popular</option>
            <option>Newest</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
        </Select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {COURSES.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  </div>
);

export default CoursesPage;
