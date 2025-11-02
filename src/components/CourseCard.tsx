import React, { FC } from 'react';
import { Course } from '../types';
import { useApp } from '../context/AppContext';
import Card from './Card';
import Button from './Button';
import { ICONS } from '../constants/icons';

const CourseCard: FC<{ course: Course }> = ({ course }) => {
  const { setPage } = useApp();
  return (
    <Card>
      <div className="relative">
        <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
        <span className="absolute top-2 right-2 bg-saffron text-white text-xs font-bold px-2 py-1 rounded-full">HD</span>
        <span className="absolute bottom-2 left-2 bg-charcoal/70 text-white text-xs font-semibold px-2 py-1 rounded">{course.duration}</span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
            <h3 className="font-serif text-lg font-bold truncate pr-2">{course.title}</h3>
            <span className="text-xs font-semibold bg-saffron/10 text-saffron px-2 py-1 rounded-full flex-shrink-0">{course.level}</span>
        </div>
        <p className="text-sm text-warmGray">by {course.instructor}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1 text-gold">
            <span className="font-bold">{course.rating}</span>
            {ICONS.Star}
          </div>
          <span className="font-semibold font-special">₹{course.price}</span>
        </div>
        <Button onClick={() => setPage('course_player', course)} className="w-full mt-4">View Course</Button>
      </div>
    </Card>
  );
};

export default CourseCard;
